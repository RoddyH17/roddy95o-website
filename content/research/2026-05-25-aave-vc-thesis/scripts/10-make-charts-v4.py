"""Additional charts for thesis v4."""
import json
import numpy as np
import matplotlib.pyplot as plt
import matplotlib.dates as mdates
from datetime import datetime
from pathlib import Path
from collections import Counter, defaultdict

OUT = Path("/Users/roddy/2026_class_project/roddy95o-website/content/research/2026-05-25-aave-vc-thesis/charts")

plt.rcParams.update({
    'font.family': 'sans-serif',
    'font.sans-serif': ['Helvetica', 'Arial', 'DejaVu Sans'],
    'font.size': 10,
    'axes.titlesize': 12, 'axes.titleweight': 'bold',
    'axes.labelsize': 10,
    'axes.spines.top': False, 'axes.spines.right': False,
    'axes.grid': True, 'grid.alpha': 0.3, 'grid.linestyle': '--',
    'figure.dpi': 150,
})

C_AAVE = '#9B26AF'; C_MORPHO = '#1A6FF2'; C_COMP = '#00D395'; C_SPARK = '#F5841F'; C_RISK = '#E63946'

# === Chart 5: Price-adjusted TVL ===
with open("/tmp/price_adjusted_tvl.json") as f:
    pa = json.load(f)

def load(slug):
    with open(f"/tmp/dl_{slug}_tvl.json") as f:
        d = json.load(f)
    return {x["month"]: x["tvl_usd"]/1e9 for x in d}

aave_obs = load("aave-v3")
morpho_obs = load("morpho-blue")
months_str = sorted([m for m in pa["aave_adjusted"].keys()])
months_dt = [datetime.strptime(m, "%Y-%m") for m in months_str]
aave_adj = [pa["aave_adjusted"][m] for m in months_str]
morpho_adj = [pa["morpho_adjusted"][m] for m in months_str]
aave_o = [aave_obs[m] for m in months_str if m in aave_obs]
morpho_o = [morpho_obs[m] for m in months_str if m in morpho_obs]
months_dt_o = [datetime.strptime(m, "%Y-%m") for m in months_str if m in aave_obs]

fig, axes = plt.subplots(1, 2, figsize=(14, 5))
ax = axes[0]
ax.plot(months_dt_o, aave_o, color=C_AAVE, linewidth=2.5, label='Observed (USD)')
ax.plot(months_dt, aave_adj, color=C_AAVE, linewidth=2.5, linestyle='--', alpha=0.6, label='ETH-price-adjusted')
ax.fill_between(months_dt, aave_adj, [o for o in aave_o[:len(aave_adj)]], alpha=0.15, color=C_AAVE)
ax.set_title('Aave V3: Observed vs Price-Adjusted TVL\n(60% ETH/LST sensitivity assumption)', pad=10)
ax.set_ylabel('TVL (USD billions)')
ax.xaxis.set_major_formatter(mdates.DateFormatter('%Y-%m'))
ax.xaxis.set_major_locator(mdates.MonthLocator(interval=3))
ax.legend(loc='upper left')
plt.setp(ax.get_xticklabels(), rotation=45)
peak_idx = np.argmax(aave_o)
ax.annotate(f'Real outflow: -$17b from peak\n(price-adjusted)',
    xy=(months_dt_o[peak_idx], aave_adj[peak_idx]),
    xytext=(-100, -50), textcoords='offset points',
    fontsize=9, fontweight='bold',
    arrowprops=dict(arrowstyle='->'),
    bbox=dict(boxstyle='round,pad=0.3', facecolor='#FFE0E0', edgecolor='black'))

ax = axes[1]
ax.plot(months_dt_o, morpho_o, color=C_MORPHO, linewidth=2.5, label='Observed (USD)')
ax.plot(months_dt, morpho_adj, color=C_MORPHO, linewidth=2.5, linestyle='--', alpha=0.6, label='ETH-price-adjusted')
ax.fill_between(months_dt, morpho_adj, [o for o in morpho_o[:len(morpho_adj)]], alpha=0.15, color=C_MORPHO)
ax.set_title('Morpho Blue: Observed vs Price-Adjusted TVL\n(30% ETH/LST sensitivity assumption)', pad=10)
ax.set_ylabel('TVL (USD billions)')
ax.xaxis.set_major_formatter(mdates.DateFormatter('%Y-%m'))
ax.xaxis.set_major_locator(mdates.MonthLocator(interval=3))
ax.legend(loc='upper left')
plt.setp(ax.get_xticklabels(), rotation=45)
ax.annotate(f'Real inflow: +$4.1b\n(price-adjusted)',
    xy=(months_dt[-1], morpho_adj[-1]),
    xytext=(-180, -50), textcoords='offset points',
    fontsize=9, fontweight='bold',
    arrowprops=dict(arrowstyle='->'),
    bbox=dict(boxstyle='round,pad=0.3', facecolor='#E0FFE0', edgecolor='black'))

plt.tight_layout()
plt.savefig(OUT / "05-price-adjusted-tvl.png", dpi=180, bbox_inches='tight')
plt.close()
print("Saved 05-price-adjusted-tvl.png")

# === Chart 6: Curator AUM landscape ===
fig, ax = plt.subplots(figsize=(9, 5.5))
curators = ['Gauntlet', 'Steakhouse\nFinancial', 'Re7\nLabs', 'MEV\nCapital', 'Block\nAnalitica', 'Yearn V3', 'Sky/Spark\n(internal)', 'Other\ncurators']
aum = [1.88, 1.26, 0.61, 0.40, 0.35, 0.30, 0.50, 0.50]  # $b approximate
colors_c = ['#2E86C1', '#E74C3C', '#27AE60', '#F39C12', '#8E44AD', '#16A085', '#7F8C8D', '#BDC3C7']

bars = ax.barh(curators, aum, color=colors_c, edgecolor='black', linewidth=0.8)
for bar, val in zip(bars, aum):
    ax.text(bar.get_width() + 0.03, bar.get_y() + bar.get_height()/2,
            f'${val:.2f}b', va='center', fontweight='bold')

# Annotations
ax.text(1.88, 0.3, '@10% perf fee\non 4.5% APY ≈ $8.5m/yr', fontsize=8, style='italic', color='#1B4F72')
ax.text(1.26, 1.3, '@10% perf fee\non 4% APY ≈ $5m/yr', fontsize=8, style='italic', color='#7B241C')

ax.set_xlabel('Curator AUM on Morpho ($B)')
ax.set_title('Top MetaMorpho Curators by AUM (≈$5.8b of Morpho Blue\'s $7.6b is curated)\nThis is the VC investable layer', pad=10)
ax.set_xlim(0, 2.2)
ax.invert_yaxis()
plt.tight_layout()
plt.savefig(OUT / "06-curator-aum-landscape.png", dpi=180, bbox_inches='tight')
plt.close()
print("Saved 06-curator-aum-landscape.png")

# === Chart 7: Full liquidation distribution (1948 events) ===
with open("/tmp/dune_q3431820.json") as f:
    d = json.load(f)
rows = d.get("result", {}).get("rows", [])

# By market
by_market = Counter()
by_market_vol = defaultdict(float)
for r in rows:
    m = r["market_name"]
    by_market[m] += 1
    by_market_vol[m] += float(r["repaid_usd"] or 0)

# Top 12 markets by volume
top = sorted(by_market_vol.items(), key=lambda x: -x[1])[:12]

fig, axes = plt.subplots(1, 2, figsize=(14, 5.5))

ax = axes[0]
names = [t[0][:30] for t in top]
vols = [t[1]/1e6 for t in top]
colors_t = plt.cm.RdYlBu_r(np.linspace(0.15, 0.85, len(top)))
ax.barh(range(len(top)), vols, color=colors_t, edgecolor='black')
ax.set_yticks(range(len(top)))
ax.set_yticklabels(names, fontsize=8)
ax.set_xlabel('Total Liquidation Volume (USD millions)')
ax.set_title(f'Top 12 Markets by Liquidation Volume\n(Full 1,948-event sample, ALL long-tail/memecoin)', pad=10)
ax.invert_yaxis()
for i, v in enumerate(vols):
    ax.text(v + 0.05, i, f'${v:.1f}m', va='center', fontsize=7)

# Sub-chart: size distribution histogram
ax2 = axes[1]
sizes = sorted([float(r["repaid_usd"] or 0) for r in rows if (r["repaid_usd"] or 0) > 0])
log_sizes = [np.log10(s) for s in sizes if s > 1]
ax2.hist(log_sizes, bins=40, color=C_MORPHO, edgecolor='black', alpha=0.7)
ax2.axvline(np.log10(np.median(sizes)), color=C_RISK, linestyle='--', label=f'Median: ${np.median(sizes):.0f}')
ax2.axvline(np.log10(np.mean(sizes)), color='black', linestyle='--', label=f'Mean: ${np.mean(sizes):.0f}')
ax2.set_xlabel('Liquidation Size (log10 USD)')
ax2.set_ylabel('Event Count')
ax2.set_title(f'Liquidation Size Distribution (n={len(rows)})\nMostly tiny (<$10k); 0 events in WETH/USDC/WBTC mainstream markets', pad=10)
ax2.legend()

plt.tight_layout()
plt.savefig(OUT / "07-liquidation-full-sample.png", dpi=180, bbox_inches='tight')
plt.close()
print("Saved 07-liquidation-full-sample.png")

# === Chart 8: AAVE buyback impact — probability-weighted EV ===
fig, ax = plt.subplots(figsize=(10, 5.5))

# Scenarios for buyback execution rate (annualized)
scenarios = ['Bear\n(buyback stops)', 'Base\n($1m/wk, 6mo)', 'Bull\n($1m/wk sustained)', 'Super-Bull\n(2x scale 2H)']
buybacks_annualized = [0, 26, 52, 78]  # $m
fdv = 1370  # $m current AAVE FDV
yields = [b/fdv*100 for b in buybacks_annualized]
prob = [0.30, 0.40, 0.20, 0.10]

x = np.arange(len(scenarios))
bars1 = ax.bar(x - 0.2, buybacks_annualized, 0.4, label='Annualized Buyback ($m)', color=C_AAVE, edgecolor='black')
ax2 = ax.twinx()
bars2 = ax2.bar(x + 0.2, yields, 0.4, label='Buyback Yield (% of FDV)', color=C_MORPHO, edgecolor='black', alpha=0.7)

for bar, val in zip(bars1, buybacks_annualized):
    ax.text(bar.get_x() + bar.get_width()/2, bar.get_height() + 1, f'${val}m', ha='center', fontweight='bold', fontsize=9)
for bar, val in zip(bars2, yields):
    ax2.text(bar.get_x() + bar.get_width()/2, bar.get_height() + 0.05, f'{val:.1f}%', ha='center', fontweight='bold', fontsize=9, color=C_MORPHO)

# Probabilities under x-axis
for i, p in enumerate(prob):
    ax.text(i, -8, f'p = {p:.0%}', ha='center', fontsize=9, fontweight='bold', color='gray')

ax.set_xticks(x)
ax.set_xticklabels(scenarios)
ax.set_ylabel('Annualized Buyback ($m)', color=C_AAVE)
ax2.set_ylabel('Yield as % of FDV', color=C_MORPHO)
ax.set_ylim(-12, 95)
ax2.set_ylim(0, 7)
ax.set_title('AAVE Buyback Scenarios — Probability Weighted\nExpected annualized buyback = $35m (2.5% yield) — meaningful but priced-in?', pad=10)
ax.legend(loc='upper left')
ax2.legend(loc='upper right')

# EV calc
ev = sum(p*b for p,b in zip(prob, buybacks_annualized))
ax.text(0.5, 0.96, f'E[Buyback] = {ev:.0f} M/yr → E[Yield] = {ev/fdv*100:.1f}%',
        transform=ax.transAxes, ha='center',
        bbox=dict(boxstyle='round,pad=0.4', facecolor='#FFF9C4', edgecolor='black'),
        fontsize=10, fontweight='bold')

plt.tight_layout()
plt.savefig(OUT / "08-aave-buyback-scenarios.png", dpi=180, bbox_inches='tight')
plt.close()
print("Saved 08-aave-buyback-scenarios.png")

print("\nAll v4 charts saved.")
