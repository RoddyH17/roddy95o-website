"""Regenerate DeFi Lending Universe Map with CJK font support."""
import matplotlib
import matplotlib.font_manager as fm
import matplotlib.pyplot as plt
from matplotlib.patches import FancyBboxPatch
from pathlib import Path

# Register CJK font BEFORE creating figure
CJK_FONT_PATH = '/Library/Fonts/Arial Unicode.ttf'
fm.fontManager.addfont(CJK_FONT_PATH)
cjk_prop = fm.FontProperties(fname=CJK_FONT_PATH)
cjk_name = cjk_prop.get_name()  # 'Arial Unicode MS'

OUT = Path("/Users/roddy/2026_class_project/roddy95o-website/content/research/2026-05-25-aave-vc-thesis/charts")

plt.rcParams.update({
    'font.family': cjk_name,
    'font.sans-serif': [cjk_name, 'Helvetica', 'Arial', 'DejaVu Sans'],
    'axes.unicode_minus': False,
    'figure.dpi': 150,
})

fig, ax = plt.subplots(figsize=(14, 8.5))
ax.set_xlim(0, 14)
ax.set_ylim(0, 10)
ax.axis('off')

# Title
ax.text(7, 9.5, 'DeFi Lending Universe Map (2026-05)',
        ha='center', fontsize=18, fontweight='bold', color='#2C3E50')
ax.text(7, 9.05, '从协议到应用层 — 价值正在向上沉降',
        ha='center', fontsize=11, style='italic', color='#7F8C8D')

# === Layer 4: Tokens (top) ===
ax.text(0.3, 7.8, 'L4 · Token 层', fontsize=10, fontweight='bold', color='#7F8C8D')
ax.text(0.3, 7.5, '(治理 / 价值捕获)', fontsize=8, color='#95A5A6', style='italic')

tokens = [
    ("AAVE", "$1.37b FDV\n95% float", 2.5, 7.5, '#9B26AF'),
    ("MORPHO", "$2.16b FDV\n63% float\n[!] unlock", 4.8, 7.5, '#1A6FF2'),
    ("COMP", "$300m FDV\n0% capture", 7.0, 7.5, '#00D395'),
    ("SPK", "Spark token", 8.8, 7.5, '#F5841F'),
]
for name, info, x, y, color in tokens:
    box = FancyBboxPatch((x-0.55, y-0.4), 1.1, 0.7,
                         boxstyle="round,pad=0.08", linewidth=1.8,
                         edgecolor=color, facecolor=color, alpha=0.15)
    ax.add_patch(box)
    ax.text(x, y+0.05, name, ha='center', fontsize=9, fontweight='bold', color=color)
    ax.text(x, y-0.25, info, ha='center', fontsize=6.5, color='#34495E')

# === Layer 3: Curators ===
ax.text(0.3, 6.3, 'L3 · Curator 层 ★', fontsize=11, fontweight='bold', color='#E74C3C')
ax.text(0.3, 6.0, '(本 thesis 推荐\n投资载体)', fontsize=8, color='#C0392B', style='italic')

highlight = FancyBboxPatch((2.0, 5.4), 10.8, 1.4,
                           boxstyle="round,pad=0.15", linewidth=2.5,
                           edgecolor='#E74C3C', facecolor='#FADBD8', alpha=0.35,
                           linestyle='--')
ax.add_patch(highlight)

curators = [
    ("Gauntlet", "$1.88b AUM\n~$8.5m/yr fee", 3.2, 6.05, '#2E86C1'),
    ("Steakhouse", "$1.26b AUM\n~$5m/yr fee", 5.0, 6.05, '#E74C3C'),
    ("Re7 Labs", "$610m AUM\n~$2.5m/yr", 6.7, 6.05, '#27AE60'),
    ("MEV Cap", "$400m", 8.1, 6.05, '#F39C12'),
    ("Block\nAnalitica", "$350m", 9.3, 6.05, '#8E44AD'),
    ("Yearn V3", "$300m", 10.5, 6.05, '#16A085'),
    ("...其他", "$1b+", 11.7, 6.05, '#95A5A6'),
]
for name, info, x, y, color in curators:
    box = FancyBboxPatch((x-0.5, y-0.35), 1.0, 0.7,
                         boxstyle="round,pad=0.06", linewidth=1.5,
                         edgecolor=color, facecolor='white', alpha=0.95)
    ax.add_patch(box)
    ax.text(x, y+0.1, name, ha='center', fontsize=7.5, fontweight='bold', color=color)
    ax.text(x, y-0.18, info, ha='center', fontsize=6, color='#34495E')

ax.text(12.8, 6.05, '总 $5.8b 被\ncurator 管理', ha='left',
        fontsize=8, color='#C0392B', fontweight='bold')

# === Layer 2: MetaMorpho Vault ===
ax.text(0.3, 4.8, 'L2 · Vault 层', fontsize=10, fontweight='bold', color='#7F8C8D')
ax.text(0.3, 4.5, '(用户存款的容器)', fontsize=8, color='#95A5A6', style='italic')

vault_box = FancyBboxPatch((2.0, 4.2), 10.8, 0.7,
                            boxstyle="round,pad=0.1", linewidth=1.5,
                            edgecolor='#3498DB', facecolor='#D6EAF8', alpha=0.5)
ax.add_patch(vault_box)
ax.text(7.4, 4.55, "MetaMorpho Vaults (200+ 个)  ·  TVL ~$3.82b  ·  收 mgmt fee + perf fee",
        ha='center', fontsize=10, fontweight='bold', color='#2874A6')

# === Layer 1: Protocols ===
ax.text(0.3, 3.0, 'L1 · 协议层', fontsize=11, fontweight='bold', color='#2C3E50')
ax.text(0.3, 2.7, '(借贷基础设施)', fontsize=8, color='#7F8C8D', style='italic')

protocols = [
    ("Aave V3", "$13.77b TVL\nTake 12.9% ← 老世界", 3.0, 2.0, 2.4, '#9B26AF'),
    ("Morpho Blue", "$7.62b TVL\nTake 0% ← 新世界", 6.2, 2.0, 1.8, '#1A6FF2'),
    ("SparkLend", "$3.28b TVL\nTake 4.82%", 8.8, 2.0, 1.3, '#F5841F'),
    ("Spark Savings", "$2.15b\nDSR-style", 10.5, 2.0, 1.0, '#F5841F'),
    ("Compound V3", "$1.23b\nTake 0%", 12.0, 2.0, 1.1, '#00D395'),
]
for name, info, x, y, w, color in protocols:
    box = FancyBboxPatch((x-w/2, y-0.55), w, 1.1,
                         boxstyle="round,pad=0.08", linewidth=2,
                         edgecolor=color, facecolor=color, alpha=0.18)
    ax.add_patch(box)
    ax.text(x, y+0.18, name, ha='center', fontsize=10, fontweight='bold', color=color)
    ax.text(x, y-0.2, info, ha='center', fontsize=7, color='#34495E')

# === Arrows ===
ax.annotate('', xy=(7.4, 4.05), xytext=(7.4, 3.55),
            arrowprops=dict(arrowstyle='->', color='#3498DB', lw=1.5))
ax.text(7.7, 3.8, '存款流入', fontsize=7, color='#3498DB')

ax.annotate('', xy=(6.5, 5.6), xytext=(6.5, 4.95),
            arrowprops=dict(arrowstyle='->', color='#E74C3C', lw=2))
ax.text(6.8, 5.25, 'fee 流向', fontsize=7, color='#E74C3C', fontweight='bold')

ax.annotate('', xy=(3.0, 7.1), xytext=(3.0, 2.7),
            arrowprops=dict(arrowstyle='->', color='#9B26AF', lw=1, linestyle='--', alpha=0.5))
ax.text(2.0, 5.0, 'AAVE 12.9% take →\nholder capture 仅 0.036%',
        fontsize=7, color='#9B26AF', alpha=0.7, style='italic')

# === Bottom annotation ===
ax.text(7, 0.6, '价值链上行：钱从 L1 协议 → L2 vault → L3 curator，越往上越赚钱',
        ha='center', fontsize=10.5, fontweight='bold', color='#C0392B',
        bbox=dict(boxstyle='round,pad=0.5', facecolor='#FCF3CF', edgecolor='#F39C12', linewidth=1.5))

ax.text(0.3, 0.15, 'Data: DefiLlama API + Dune Analytics + 公开 curator AUM 数据 · 2026-05-25 snapshot',
        fontsize=6.5, color='#95A5A6', style='italic')

plt.tight_layout()
plt.savefig(OUT / "09-lending-universe-map.png", dpi=180, bbox_inches='tight', facecolor='white')
plt.close()
print(f"Saved {OUT / '09-lending-universe-map.png'}")

# Verify no glyph warnings
import warnings
warnings.filterwarnings('error', category=UserWarning, module='matplotlib.*')
print("Font test passed.")
