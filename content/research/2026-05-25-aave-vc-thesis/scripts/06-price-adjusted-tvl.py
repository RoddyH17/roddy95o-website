"""Compute price-adjusted TVL — strip out ETH price effect to see TRUE net flow."""
import urllib.request, json
from datetime import datetime
import numpy as np

def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": "research"})
    with urllib.request.urlopen(req, timeout=120) as r:
        return json.loads(r.read())

# Get ETH historical price from DefiLlama coins API
# Daily ETH price for past 2 years
import time
end = int(time.time())
start = end - 86400 * 800  # 800 days back

# Use coingecko free tier
def get_eth_history():
    url = "https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=800&interval=daily"
    try:
        return fetch(url)
    except urllib.error.HTTPError as e:
        return None

eth_hist = get_eth_history()
if eth_hist and "prices" in eth_hist:
    eth_prices = {datetime.utcfromtimestamp(p[0]/1000).strftime("%Y-%m"): p[1] for p in eth_hist["prices"]}
    months = sorted(eth_prices.keys())
    # Get monthly average (last value per month is current behavior)
    print(f"ETH price snapshots: {len(months)} months")
    for m in months[-18:]:
        print(f"  {m}: ${eth_prices[m]:.0f}")
else:
    print("ETH price fetch failed, using fallback")
    # Fallback: hardcoded approximate ETH monthly prices
    eth_prices = {
        "2024-12": 3700, "2025-01": 3300, "2025-02": 2700, "2025-03": 2100, "2025-04": 1900,
        "2025-05": 2400, "2025-06": 2600, "2025-07": 3500, "2025-08": 4200, "2025-09": 4400,
        "2025-10": 3700, "2025-11": 3300, "2025-12": 3400, "2026-01": 3600, "2026-02": 2700,
        "2026-03": 2200, "2026-04": 1700, "2026-05": 2200,
    }

# Load TVL data
import json
def load(slug):
    with open(f"/tmp/dl_{slug}_tvl.json") as f:
        return {x["month"]: x["tvl_usd"]/1e9 for x in json.load(f)}

aave_tvl = load("aave-v3")
morpho_tvl = load("morpho-blue")

# Aave V3 is ~60% ETH/LST collateral, ~30% stables, ~10% wBTC (approximation from public data)
# Morpho Blue is more stablecoin-heavy: ~30% ETH/LST, ~60% stables, ~10% wBTC
# So Aave is much more ETH-price-sensitive

# Price-adjusted: lock collateral mix at 2024-12 ETH price level, see what TVL would be
base_month = "2025-05"  # baseline
base_eth = eth_prices.get(base_month, 2400)

# Sensitivity coefficients (rough): TVL_adjusted = TVL_observed * (1 - eth_sensitivity * (1 - base_eth/current_eth))
# Or simpler: for each month, compute what fraction of TVL change is ETH price vs net flow

print(f"\n=== Aave V3 Price-Adjusted TVL (baseline ETH=${base_eth:.0f}, May 2025) ===")
print(f"Aave assumed ETH/LST sensitivity: 60%")
print(f"{'Month':<10} | {'Observed TVL':>14} | {'ETH price':>10} | {'ETH-adjusted TVL':>20} | {'Net flow (vs baseline)':>22}")
for m in sorted(aave_tvl.keys())[-18:]:
    if m not in eth_prices: continue
    obs = aave_tvl[m]
    eth_now = eth_prices[m]
    # 60% of TVL moves with ETH price; 40% is stable
    eth_factor = (eth_now / base_eth)
    adjusted = obs * 0.4 + obs * 0.6 / eth_factor  # remove ETH price contribution, normalize to base
    # actually simpler: TVL = stable_part + eth_part * eth_now / eth_baseline
    # If we assume current TVL split is 40% stable / 60% ETH-correlated at current prices:
    # constant_units_tvl = obs * 0.4 + obs * 0.6 * (base_eth / eth_now)
    constant_units = obs * 0.4 + obs * 0.6 * (base_eth / eth_now)
    print(f"{m:<10} | ${obs:>12.2f}b | ${eth_now:>8.0f} | ${constant_units:>18.2f}b | ${constant_units - aave_tvl.get(base_month,0):>+20.2f}b")

print(f"\n=== Morpho Blue Price-Adjusted TVL (baseline ETH=${base_eth:.0f}, May 2025) ===")
print(f"Morpho assumed ETH/LST sensitivity: 30%")
for m in sorted(morpho_tvl.keys())[-18:]:
    if m not in eth_prices: continue
    obs = morpho_tvl[m]
    eth_now = eth_prices[m]
    constant_units = obs * 0.7 + obs * 0.3 * (base_eth / eth_now)
    print(f"{m:<10} | ${obs:>12.2f}b | ${eth_now:>8.0f} | ${constant_units:>18.2f}b | ${constant_units - morpho_tvl.get(base_month,0):>+20.2f}b")

# Save data
out = {"eth_prices": eth_prices, "aave_adjusted": {}, "morpho_adjusted": {}}
for m in sorted(aave_tvl.keys()):
    if m not in eth_prices: continue
    out["aave_adjusted"][m] = aave_tvl[m] * 0.4 + aave_tvl[m] * 0.6 * (base_eth / eth_prices[m])
for m in sorted(morpho_tvl.keys()):
    if m not in eth_prices: continue
    out["morpho_adjusted"][m] = morpho_tvl[m] * 0.7 + morpho_tvl[m] * 0.3 * (base_eth / eth_prices[m])

with open("/tmp/price_adjusted_tvl.json", "w") as f:
    json.dump(out, f, indent=2)
print(f"\nSaved /tmp/price_adjusted_tvl.json")
