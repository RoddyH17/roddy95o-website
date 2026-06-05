"""Unbiased analysis of full 1948 Morpho liquidation sample."""
import json
from collections import Counter, defaultdict
from datetime import datetime
import numpy as np

with open("/tmp/dune_q3431820.json") as f:
    d = json.load(f)
rows = d.get("result", {}).get("rows", [])
print(f"Total liquidation events: {len(rows)}")

# Filter unique events (some may be duplicates due to multi-collateral)
unique = {(r["evt_tx_hash"], r["liquidated"]): r for r in rows}
print(f"Unique liquidation events: {len(unique)}")

# Analyze by market
by_market = Counter()
by_market_volume = defaultdict(float)
by_market_bad_debt = defaultdict(float)
for r in rows:
    m = r["market_name"]
    by_market[m] += 1
    by_market_volume[m] += float(r["repaid_usd"] or 0)
    if (r["profit_usd"] or 0) < 0:
        by_market_bad_debt[m] += abs(r["profit_usd"])

print(f"\n=== Top 15 markets by liquidation count ===")
for m, cnt in by_market.most_common(15):
    vol = by_market_volume[m]
    print(f"  {m[:45]:<45} | events={cnt:>4} | total repaid=${vol/1e6:.2f}m")

print(f"\n=== Top 10 markets by liquidation volume ===")
top_vol = sorted(by_market_volume.items(), key=lambda x: -x[1])[:10]
for m, vol in top_vol:
    cnt = by_market[m]
    print(f"  {m[:45]:<45} | total=${vol/1e6:>10.2f}m | events={cnt}")

# Bad debt (negative profit = liquidator lost = protocol bad debt)
print(f"\n=== Bad debt analysis ===")
bad_debt_total = sum(abs(r["profit_usd"]) for r in rows if (r["profit_usd"] or 0) < 0)
bad_debt_events = sum(1 for r in rows if (r["profit_usd"] or 0) < 0)
total_repaid = sum(float(r["repaid_usd"] or 0) for r in rows)
print(f"  Total bad debt events: {bad_debt_events} ({bad_debt_events/len(rows)*100:.1f}% of all liquidations)")
print(f"  Total bad debt USD: ${bad_debt_total/1e6:.2f}m")
print(f"  Bad debt / total repaid ratio: {bad_debt_total/total_repaid*100:.3f}%")
print(f"\n  Top 5 bad debt markets:")
for m, bd in sorted(by_market_bad_debt.items(), key=lambda x: -x[1])[:5]:
    print(f"    {m[:45]:<45} | bad debt=${bd/1e6:.2f}m")

# Time distribution
print(f"\n=== Time distribution (by year-month) ===")
by_month = Counter()
for r in rows:
    try:
        m = r["evt_block_time"][:7]
        by_month[m] += 1
    except: pass
for m in sorted(by_month.keys())[-15:]:
    print(f"  {m}: {by_month[m]} events")

# Size distribution
sizes = sorted([float(r["repaid_usd"] or 0) for r in rows])
print(f"\n=== Liquidation size distribution ===")
print(f"  Min:   ${sizes[0]:.2f}")
print(f"  P25:   ${sizes[len(sizes)//4]:.2f}")
print(f"  Median: ${sizes[len(sizes)//2]:.2f}")
print(f"  P75:   ${sizes[len(sizes)*3//4]:.2f}")
print(f"  P90:   ${sizes[int(len(sizes)*0.9)]:.2f}")
print(f"  P99:   ${sizes[int(len(sizes)*0.99)]:.2f}")
print(f"  Max:   ${sizes[-1]:.2f}")
print(f"  Mean:  ${sum(sizes)/len(sizes):.2f}")
print(f"  Total: ${sum(sizes)/1e6:.2f}m")

# Mainstream vs long-tail
mainstream_keywords = ["WETH", "USDC", "USDT", "WBTC", "DAI", "wstETH"]
mainstream_events = 0
mainstream_vol = 0
longtail_events = 0
longtail_vol = 0
for r in rows:
    m = r["market_name"]
    repaid = float(r["repaid_usd"] or 0)
    is_mainstream = all(any(k in m for k in mainstream_keywords) for k in [m])
    # Better: a market is mainstream if both collateral and loan are mainstream tokens
    # Simpler heuristic: if market contains ONLY mainstream tokens
    parts = m.replace("/", " ").split()
    if all(p in mainstream_keywords for p in parts):
        mainstream_events += 1
        mainstream_vol += repaid
    else:
        longtail_events += 1
        longtail_vol += repaid

print(f"\n=== Mainstream vs long-tail markets ===")
print(f"  Mainstream (only WETH/USDC/USDT/WBTC/DAI/wstETH): {mainstream_events} events / ${mainstream_vol/1e6:.2f}m")
print(f"  Long-tail (anything else): {longtail_events} events / ${longtail_vol/1e6:.2f}m")
print(f"  Mainstream event share: {mainstream_events/len(rows)*100:.1f}%")
print(f"  Mainstream volume share: {mainstream_vol/(mainstream_vol+longtail_vol)*100:.1f}%")
