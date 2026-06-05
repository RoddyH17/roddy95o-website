"""Generate 4 designed charts for Aave VC thesis. English titles."""
import json
import numpy as np
import matplotlib.pyplot as plt
import matplotlib.dates as mdates
from datetime import datetime
from pathlib import Path

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

C_AAVE = '#9B26AF'
C_MORPHO = '#1A6FF2'
C_COMP = '#00D395'
C_SPARK = '#F5841F'
C_RISK = '#E63946'

def load(slug):
    with open(f"/tmp/dl_{slug}_tvl.json") as f:
        d = json.load(f)
    months = [datetime.strptime(x["month"], "%Y-%m") for x in d]
    tvls = [x["tvl_usd"]/1e9 for x in d]
    return months, tvls

aave_m, aave_v = load("aave-v3")
morpho_m, morpho_v = load("morpho-blue")
comp_m, comp_v = load("compound-v3")
spark_m, spark_v = load("sparklend")

# Compute Morpho/Aave ratio for last 18 months
print(f"Morpho/Aave ratio 18mo ago: {morpho_v[-19]/aave_v[-19]*100:.1f}%")
print(f"Morpho/Aave ratio now: {morpho_v[-1]/aave_v[-1]*100:.1f}%")
# YoY CAGR
morpho_yoy = (morpho_v[-1]/morpho_v[-13] - 1) * 100
aave_yoy = (aave_v[-1]/aave_v[-13] - 1) * 100
print(f"Morpho YoY: {morpho_yoy:+.1f}%, Aave YoY: {aave_yoy:+.1f}%")

# === Chart 1: TVL trajectory ===
fig, ax = plt.subplots(figsize=(10, 5.5))
ax.plot(aave_m, aave_v, label='Aave V3', color=C_AAVE, linewidth=2.5)
ax.plot(morpho_m, morpho_v, label='Morpho Blue', color=C_MORPHO, linewidth=2.5)
ax.plot(comp_m, comp_v, label='Compound V3', color=C_COMP, linewidth=1.5, linestyle='--')
ax.plot(spark_m, spark_v, label='SparkLend', color=C_SPARK, linewidth=1.5, linestyle='--')

peak_aave_idx = np.argmax(aave_v)
ax.annotate(f'Aave peak ${aave_v[peak_aave_idx]:.1f}b\n(Sep 2025)',
            xy=(aave_m[peak_aave_idx], aave_v[peak_aave_idx]),
            xytext=(20, 5), textcoords='offset points',
            fontsize=8, color=C_AAVE, fontweight='bold')

ax.annotate(f'Morpho / Aave ratio:\n{morpho_v[-19]/aave_v[-19]*100:.0f}% --> {morpho_v[-1]/aave_v[-1]*100:.0f}%  in 18 months\nMorpho YoY {morpho_yoy:+.0f}%  vs  Aave YoY {aave_yoy:+.0f}%',
            xy=(morpho_m[-1], morpho_v[-1]),
            xytext=(-220, 80), textcoords='offset points',
            fontsize=9, fontweight='bold',
            arrowprops=dict(arrowstyle='->', color='black', lw=1),
            bbox=dict(boxstyle='round,pad=0.4', facecolor='#FFF9C4', edgecolor='black'))

ax.set_title('Lending TVL Trajectory: Aave Collapsing, Morpho Compounding', pad=10)
ax.set_ylabel('TVL (USD billions)')
ax.xaxis.set_major_formatter(mdates.DateFormatter('%Y-%m'))
ax.xaxis.set_major_locator(mdates.MonthLocator(interval=3))
plt.xticks(rotation=45)
ax.legend(loc='upper left', frameon=True, fancybox=True, framealpha=0.9)
ax.set_ylim(0, max(aave_v) * 1.15)
plt.tight_layout()
plt.savefig(OUT / "01-tvl-trajectory.png", dpi=180, bbox_inches='tight')
plt.close()

# === Chart 2: Take rate comparison ===
fig, ax = plt.subplots(figsize=(8, 5))
protocols = ['Aave V3', 'SparkLend', 'Compound V3', 'Morpho Blue']
take_rates = [12.9, 4.82, 0, 0]
colors = [C_AAVE, C_SPARK, C_COMP, C_MORPHO]
x = np.arange(len(protocols))
bars = ax.bar(x, take_rates, color=colors, edgecolor='black', linewidth=0.8)
for bar, rate in zip(bars, take_rates):
    ax.text(bar.get_x() + bar.get_width()/2, bar.get_height() + 0.3,
            f'{rate}%', ha='center', va='bottom', fontweight='bold')
labels = ['Application\n(curated, takes fee)', 'Hybrid\n(SKY-funded)', 'Forced 0\n(competitive pressure)', 'Infrastructure\n(by design)']
for i, lbl in enumerate(labels):
    ax.text(i, -1.8, lbl, ha='center', va='top', fontsize=8, style='italic')
ax.set_xticks(x)
ax.set_xticklabels(protocols)
ax.set_ylabel('Protocol Take Rate (% of borrower interest)')
ax.set_title('Take Rate: Aave Is the Only Protocol Materially Extracting Value', pad=10)
ax.set_ylim(-3, 16)
ax.axhline(0, color='black', linewidth=0.5)
plt.tight_layout()
plt.savefig(OUT / "02-take-rate-comparison.png", dpi=180, bbox_inches='tight')
plt.close()

# === Chart 3: Morpho borrow rate compression ===
with open("/Users/roddy/2026_class_project/roddy95o-website/content/research/2026-05-25-aave-vc-thesis/data/dune-q6930431-morpho-borrow-rate.json") as f:
    d = json.load(f)
rows = d.get("result", {}).get("rows", [])
months_, avgs, meds = [], [], []
for r in rows:
    months_.append(datetime.strptime(r["month"][:7], "%Y-%m"))
    avgs.append(r["avg_borrow_rate_pct"])
    meds.append(r["median_borrow_rate_pct"])
order = np.argsort(months_)
months_ = [months_[i] for i in order]
avgs = [avgs[i] for i in order]
meds = [meds[i] for i in order]

fig, ax = plt.subplots(figsize=(10, 5.5))
ax.plot(months_, avgs, label='Avg borrow rate (volume-weighted)', color=C_MORPHO, linewidth=2.5, marker='o', markersize=4)
ax.plot(months_, meds, label='Median borrow rate', color=C_MORPHO, linewidth=1.5, linestyle='--', alpha=0.6, marker='s', markersize=3)
ax.axhline(4.5, color=C_RISK, linewidth=1.5, linestyle=':', label='~4.5% (1Y T-bill / Aave USDC supply APY)')

ax.annotate(f'Apr-24 spike {avgs[1]:.1f}%\n(market dislocation)',
            xy=(months_[1], avgs[1]), xytext=(40, -8), textcoords='offset points',
            fontsize=8, arrowprops=dict(arrowstyle='->', color='black'))
ax.annotate(f'Current {avgs[-1]:.2f}%',
            xy=(months_[-1], avgs[-1]), xytext=(-55, 30), textcoords='offset points',
            fontsize=9, fontweight='bold', color=C_MORPHO,
            arrowprops=dict(arrowstyle='->', color=C_MORPHO))

compression = (1 - avgs[-1]/avgs[0]) * 100
ax.text(months_[12], 22.5,
        f'-{compression:.0f}% compression in {len(avgs)} months\nDeFi yield converged to risk-free',
        ha='center', fontsize=9, fontweight='bold',
        bbox=dict(boxstyle='round,pad=0.3', facecolor='#FFF9C4', edgecolor='black'))

ax.set_title('Morpho Borrow Rate Compressed to T-Bill Level: "High Yield" Era Has Ended', pad=10)
ax.set_ylabel('Borrow Rate (% APY)')
ax.xaxis.set_major_formatter(mdates.DateFormatter('%Y-%m'))
ax.xaxis.set_major_locator(mdates.MonthLocator(interval=3))
plt.xticks(rotation=45)
ax.legend(loc='upper right')
ax.set_ylim(0, 28)
plt.tight_layout()
plt.savefig(OUT / "03-morpho-rate-compression.png", dpi=180, bbox_inches='tight')
plt.close()

# === Chart 4: AAVE Gordon sensitivity ===
ps_grid = np.array([8, 12, 16, 20, 25])
m_grid = np.array([0.05, 0.10, 0.15, 0.20, 0.30])
r_disc = 0.20
g_matrix = np.zeros((len(m_grid), len(ps_grid)))
for i, m in enumerate(m_grid):
    for j, ps in enumerate(ps_grid):
        g_matrix[i, j] = r_disc - m/ps

fig, ax = plt.subplots(figsize=(8, 5.5))
im = ax.imshow(g_matrix*100, cmap='RdYlGn_r', aspect='auto', vmin=-5, vmax=20)
ax.set_xticks(range(len(ps_grid)))
ax.set_xticklabels([f'{x}x' for x in ps_grid])
ax.set_yticks(range(len(m_grid)))
ax.set_yticklabels([f'{int(m*100)}%' for m in m_grid])
ax.set_xlabel('P/S Multiple (post-rerating)')
ax.set_ylabel('Holder Margin (% of protocol fees flowing to AAVE token)')
ax.set_title('AAVE Implied Perpetual Growth Rate (Gordon Reverse)\nGreen = realistic, Red = priced as unicorn (r = 20%)', pad=10)

for i in range(len(m_grid)):
    for j in range(len(ps_grid)):
        val = g_matrix[i,j]*100
        color = 'white' if val < 0 or val > 13 else 'black'
        ax.text(j, i, f'{val:.1f}%', ha='center', va='center', color=color, fontweight='bold', fontsize=9)

# Highlight current scenario (P/S~16x, holder margin ~5% if buyback partial)
ax.add_patch(plt.Rectangle((2-0.5, 0-0.5), 1, 1, fill=False, edgecolor='black', lw=3))
ax.annotate('Current pricing zone\n(P/S=16x, margin=5%)',
            xy=(2, 0), xytext=(2.8, -1.4),
            fontsize=8, ha='left',
            arrowprops=dict(arrowstyle='->', color='black'))
cbar = plt.colorbar(im, ax=ax)
cbar.set_label('Implied g (% annual perpetual growth)')
plt.tight_layout()
plt.savefig(OUT / "04-aave-gordon-sensitivity.png", dpi=180, bbox_inches='tight')
plt.close()

print("All 4 charts saved successfully.")
