"""5 charts for Web3 Data Analytics thesis."""
import matplotlib
import matplotlib.font_manager as fm
import matplotlib.pyplot as plt
from matplotlib.patches import FancyBboxPatch
import numpy as np
from pathlib import Path

# CJK font registration (lessons learned)
CJK_FONT = '/Library/Fonts/Arial Unicode.ttf'
fm.fontManager.addfont(CJK_FONT)
cjk_name = fm.FontProperties(fname=CJK_FONT).get_name()

OUT = Path("/Users/roddy/2026_class_project/roddy95o-website/content/research/2026-05-26-web3-data-analytics-thesis/charts")

plt.rcParams.update({
    'font.family': cjk_name,
    'font.sans-serif': [cjk_name, 'Helvetica', 'Arial'],
    'axes.unicode_minus': False,
    'figure.dpi': 150,
    'axes.spines.top': False, 'axes.spines.right': False,
    'axes.grid': True, 'grid.alpha': 0.3, 'grid.linestyle': '--',
})

# ====== Chart 1: Universe Map (2x2 matrix) ======
fig, ax = plt.subplots(figsize=(14, 9))
ax.set_xlim(0, 14); ax.set_ylim(0, 10); ax.axis('off')

ax.text(7, 9.6, 'Web3 Data Analytics Universe (2026-05)', ha='center',
        fontsize=18, fontweight='bold', color='#2C3E50')
ax.text(7, 9.15, '产品形态 × 商业模式 — 18 个主要玩家', ha='center',
        fontsize=11, style='italic', color='#7F8C8D')

# Axis labels (quadrants)
ax.text(3.5, 8.5, 'Free / Open', ha='center', fontsize=13, fontweight='bold', color='#27AE60')
ax.text(10.5, 8.5, 'Paid / Enterprise', ha='center', fontsize=13, fontweight='bold', color='#E74C3C')
ax.text(0.6, 6.5, 'Query /\nDashboard', ha='center', fontsize=11, fontweight='bold', color='#7F8C8D', rotation=90)
ax.text(0.6, 2.5, 'API /\nInfra', ha='center', fontsize=11, fontweight='bold', color='#7F8C8D', rotation=90)

# Vertical divider
ax.plot([7, 7], [1, 8], color='#BDC3C7', linewidth=1, linestyle='--')
# Horizontal divider
ax.plot([1.5, 13.5], [4.8, 4.8], color='#BDC3C7', linewidth=1, linestyle='--')

# Quadrant 1: Free + Query/Dashboard (top-left)
q1_bg = FancyBboxPatch((1.5, 4.8), 5.5, 3.4, boxstyle="round,pad=0.1",
                       linewidth=0, facecolor='#27AE60', alpha=0.06)
ax.add_patch(q1_bg)
ax.text(2, 8.0, 'Q1: 免费查询/仪表盘', fontsize=9, fontweight='bold', color='#196F3D')
ax.text(2, 7.75, '(社区驱动，pricing floor)', fontsize=7, color='#196F3D', style='italic')

q1_players = [
    ("DefiLlama", "$10M users\n~$300/mo Pro", 3.0, 7.2, '#27AE60'),
    ("Etherscan", "Ads + API\n~$25M revenue", 4.8, 7.2, '#3498DB'),
    ("Blockscout", "OSS Explorer\n600+ chains", 6.4, 7.2, '#16A085'),
    ("Dune Free", "200K dashboards\ncommunity SQL", 3.0, 6.0, '#9B59B6'),
    ("Flipside Free*", "*killed 2025\nfor AI/MCP", 4.8, 6.0, '#E74C3C'),
    ("Footprint Free", "GameFi focus", 6.4, 6.0, '#F39C12'),
]
for name, info, x, y, color in q1_players:
    box = FancyBboxPatch((x-0.65, y-0.32), 1.3, 0.65, boxstyle="round,pad=0.06",
                         linewidth=1.5, edgecolor=color, facecolor='white', alpha=0.95)
    ax.add_patch(box)
    ax.text(x, y+0.08, name, ha='center', fontsize=7.5, fontweight='bold', color=color)
    ax.text(x, y-0.17, info, ha='center', fontsize=5.5, color='#34495E')

# Quadrant 2: Paid + Query/Dashboard (top-right) 
q2_bg = FancyBboxPatch((7.0, 4.8), 6.5, 3.4, boxstyle="round,pad=0.1",
                       linewidth=0, facecolor='#E74C3C', alpha=0.06)
ax.add_patch(q2_bg)
ax.text(7.5, 8.0, 'Q2: 付费查询/分析 SaaS', fontsize=9, fontweight='bold', color='#922B21')
ax.text(7.5, 7.75, '(discretionary; 单家$50M ARR 天花板)', fontsize=7, color='#922B21', style='italic')

q2_players = [
    ("Dune Paid", "~$13M ARR\n$1b@2022", 8.4, 7.2, '#9B59B6'),
    ("Nansen", "~$9M ARR\n$750M@2022", 9.9, 7.2, '#1A6FF2'),
    ("Glassnode", "$39-799/mo\nMacro funds", 11.3, 7.2, '#34495E'),
    ("Token Term.", "~$300/mo\nPro + MCP", 12.6, 7.2, '#16A085'),
    ("Messari", "$300M@2022\nResearch+AI", 8.4, 6.0, '#8E44AD'),
    ("Arkham**", "**pivoted to\nperp DEX", 9.9, 6.0, '#E74C3C'),
    ("Footprint+", "AI tools", 11.3, 6.0, '#F39C12'),
    ("Flipside AI", "Enterprise\nMCP only", 12.6, 6.0, '#E67E22'),
]
for name, info, x, y, color in q2_players:
    box = FancyBboxPatch((x-0.6, y-0.32), 1.2, 0.65, boxstyle="round,pad=0.06",
                         linewidth=1.5, edgecolor=color, facecolor='white', alpha=0.95)
    ax.add_patch(box)
    ax.text(x, y+0.08, name, ha='center', fontsize=7, fontweight='bold', color=color)
    ax.text(x, y-0.17, info, ha='center', fontsize=5.5, color='#34495E')

# Quadrant 3: Free + Infra (bottom-left)
q3_bg = FancyBboxPatch((1.5, 1.0), 5.5, 3.6, boxstyle="round,pad=0.1",
                       linewidth=0, facecolor='#27AE60', alpha=0.04)
ax.add_patch(q3_bg)
ax.text(2, 4.4, 'Q3: 开源/免费基础设施', fontsize=9, fontweight='bold', color='#196F3D')
ax.text(2, 4.15, '(开发者工具 + DePIN)', fontsize=7, color='#196F3D', style='italic')

q3_players = [
    ("The Graph", "GRT token\nDecentralized\nindexer", 3.0, 3.4, '#6C5CE7'),
    ("Bitquery free", "10 req/min\nGraphQL", 4.8, 3.4, '#00B894'),
    ("Public RPC", "Alchemy/QN\nfree tier", 6.4, 3.4, '#0984E3'),
    ("Blockscout EaaS", "Open source\nexplorer-as-svc", 3.0, 2.0, '#16A085'),
    ("Self-hosted\nindexers", "Reth, Foundry\nParadigm-style", 4.8, 2.0, '#7F8C8D'),
]
for name, info, x, y, color in q3_players:
    box = FancyBboxPatch((x-0.65, y-0.42), 1.3, 0.85, boxstyle="round,pad=0.06",
                         linewidth=1.5, edgecolor=color, facecolor='white', alpha=0.95)
    ax.add_patch(box)
    ax.text(x, y+0.18, name, ha='center', fontsize=7.5, fontweight='bold', color=color)
    ax.text(x, y-0.18, info, ha='center', fontsize=5.5, color='#34495E')

# Quadrant 4: Paid + Infra (bottom-right) — ★ HIGHLIGHT (where alpha is)
q4_bg = FancyBboxPatch((7.0, 1.0), 6.5, 3.6, boxstyle="round,pad=0.1",
                       linewidth=2.5, edgecolor='#E74C3C', facecolor='#FADBD8', alpha=0.3,
                       linestyle='--')
ax.add_patch(q4_bg)
ax.text(7.5, 4.4, 'Q4: 企业级数据基础设施 ★', fontsize=10, fontweight='bold', color='#922B21')
ax.text(7.5, 4.1, '(本 thesis 推荐: 最高 EV 的可投载体)', fontsize=8, color='#922B21', style='italic')

q4_players = [
    ("Chainalysis", "~$250M ARR\n$8.6b→$2.5b\nIPO comp", 8.4, 3.3, '#C0392B'),
    ("Allium", "$3.5M ARR\n$21.5M raised\nVisa/Stripe", 10.0, 3.3, '#2E86C1'),
    ("Goldsky", "$20M raised\nPolymarket/Privy\nSubgraph", 11.5, 3.3, '#27AE60'),
    ("Sentio", "$6.4M seed\nEigen/Pendle\nObservability", 13.0, 3.3, '#F39C12'),
    ("Dune Sim", "Acq. smlXL\nReal-time API\nPivot", 8.4, 1.7, '#9B59B6'),
    ("Alchemy/QN\nEnterprise", "$10b@2022\nReset mark", 10.0, 1.7, '#0984E3'),
    ("Chainalysis\nAlterya", "$150M acq.\nAI fraud", 11.5, 1.7, '#E67E22'),
    ("Token Terminal\nEnterprise", "MCP-served\nfinancials", 13.0, 1.7, '#16A085'),
]
for name, info, x, y, color in q4_players:
    box = FancyBboxPatch((x-0.7, y-0.42), 1.4, 0.85, boxstyle="round,pad=0.06",
                         linewidth=2, edgecolor=color, facecolor='white', alpha=0.95)
    ax.add_patch(box)
    ax.text(x, y+0.18, name, ha='center', fontsize=7, fontweight='bold', color=color)
    ax.text(x, y-0.18, info, ha='center', fontsize=5.5, color='#34495E')

# Bottom annotation
ax.text(7, 0.5, '价值捕获方向：discretionary SaaS 上限 $50M ARR → 企业 infra + 合规 + 交易垂直整合 是 $1b+ outcomes',
        ha='center', fontsize=10, fontweight='bold', color='#C0392B',
        bbox=dict(boxstyle='round,pad=0.5', facecolor='#FCF3CF', edgecolor='#F39C12', linewidth=1.5))

ax.text(0.3, 0.05, 'Data: 综合 Tracxn / Crunchbase / CB Insights / Sacra / 官方公告 · 2026-05-25', 
        fontsize=6, color='#95A5A6', style='italic')

plt.tight_layout()
plt.savefig(OUT / "01-data-analytics-universe.png", dpi=180, bbox_inches='tight', facecolor='white')
plt.close()
print("Saved 01-data-analytics-universe.png")

# ====== Chart 2: ARR / Funding Comparison ======
fig, axes = plt.subplots(1, 2, figsize=(14, 5.5))

# Left: ARR
ax = axes[0]
players = ['Chainalysis', 'Dune\n(est.)', 'Nansen', 'Allium', 'Token\nTerminal', 'Etherscan\n(rev FY23)']
arr = [250, 13, 9, 3.5, 5, 25.8]  # $m
colors_arr = ['#C0392B', '#9B59B6', '#1A6FF2', '#2E86C1', '#16A085', '#3498DB']
bars = ax.bar(players, arr, color=colors_arr, edgecolor='black', linewidth=0.8)
for bar, v in zip(bars, arr):
    ax.text(bar.get_x() + bar.get_width()/2, bar.get_height() + 5, f'${v}m',
            ha='center', fontweight='bold', fontsize=10)
ax.axhline(50, color='#E74C3C', linewidth=1.5, linestyle='--', alpha=0.6)
ax.text(5.5, 53, 'Discretionary 单家 ARR 天花板 ≈ $50M',
        ha='right', fontsize=8, color='#E74C3C', fontweight='bold')
ax.set_ylabel('Annual Recurring Revenue (USD millions)')
ax.set_title('实际 ARR — Chainalysis 一家吃掉合规市场', fontweight='bold')
ax.set_ylim(0, 300)

# Right: Funding raised
ax = axes[1]
players_f = ['Chainalysis', 'Dune', 'Nansen', 'Messari', 'Flipside', 'Allium', 'Goldsky', 'Sentio']
funding = [536, 79, 88, 61, 65, 21.5, 20, 6.4]
colors_f = ['#C0392B', '#9B59B6', '#1A6FF2', '#8E44AD', '#E67E22', '#2E86C1', '#27AE60', '#F39C12']
bars = ax.bar(players_f, funding, color=colors_f, edgecolor='black', linewidth=0.8)
for bar, v in zip(bars, funding):
    ax.text(bar.get_x() + bar.get_width()/2, bar.get_height() + 10, f'${v}m',
            ha='center', fontweight='bold', fontsize=9)
ax.set_ylabel('Total Funding Raised (USD millions)')
ax.set_title('累计融资 — Chainalysis 7x next；早期 infra 还在小钱阶段', fontweight='bold')
ax.set_ylim(0, 600)
plt.setp(ax.get_xticklabels(), rotation=30, ha='right')

plt.tight_layout()
plt.savefig(OUT / "02-arr-vs-funding.png", dpi=180, bbox_inches='tight', facecolor='white')
plt.close()
print("Saved 02-arr-vs-funding.png")

# ====== Chart 3: AI/MCP timeline ======
from matplotlib.patches import Rectangle
import matplotlib.dates as mdates
from datetime import datetime

fig, ax = plt.subplots(figsize=(13, 5.5))

events = [
    ('2023-Q2', 'Dune', 'Wand AI (NL→SQL) 上线', '#9B59B6', 1),
    ('2024-Q3', 'Footprint', 'AI 助手集成', '#F39C12', 2),
    ('2025-Q2', 'Token Terminal', 'MCP server 上线', '#16A085', 3),
    ('2025-Q3', 'Flipside', '★ 杀掉 SQL Studio，转 AI/MCP only', '#E74C3C', 1),
    ('2025-Q3', 'Nansen', 'Nansen AI 移动 trading agent', '#1A6FF2', 2),
    ('2025-Q4', 'Arkham', '★ 转向 perp DEX (data→交易)', '#922B21', 1),
    ('2026-Q1', 'Dune', '★ MCP server (12 tools, 100+ chains)', '#9B59B6', 3),
    ('2026-Q2', 'Dune', '★ 25% layoff, AI 替代 headcount', '#9B59B6', 1),
    ('2026-Q1', 'Chainalysis', 'Alterya $150M acq. (AI fraud)', '#C0392B', 2),
]

# Date conversion
date_map = {'Q1':'01', 'Q2':'04', 'Q3':'07', 'Q4':'10'}
xs, ys, colors_e, labels = [], [], [], []
for d, company, event, color, level in events:
    yr, q = d.split('-')
    dt = datetime.strptime(f"{yr}-{date_map[q]}-15", "%Y-%m-%d")
    xs.append(dt)
    ys.append(level)
    colors_e.append(color)
    labels.append(f"{company}: {event}")

# Background bands per year
for yr in [2023, 2024, 2025, 2026]:
    ax.axvspan(datetime(yr,1,1), datetime(yr,12,31), alpha=0.04,
               color='#3498DB' if yr%2==0 else '#27AE60')

ax.axhline(0, color='black', linewidth=0.5)
ax.scatter(xs, ys, c=colors_e, s=200, zorder=3, edgecolors='black', linewidths=1.2)

for i, (x, y, lbl) in enumerate(zip(xs, ys, labels)):
    offset_y = 0.4 if y < 2 else (-0.6 if y > 2.5 else 0.4)
    va = 'bottom' if offset_y > 0 else 'top'
    ax.annotate(lbl, (x, y), xytext=(0, 25 if offset_y > 0 else -25),
                textcoords='offset points', ha='center', va=va,
                fontsize=8.5, fontweight='bold' if '★' in lbl else 'normal',
                bbox=dict(boxstyle='round,pad=0.3', facecolor='white', edgecolor=colors_e[i], linewidth=1))

ax.set_ylim(-0.2, 4.5)
ax.set_xlim(datetime(2023,1,1), datetime(2026,9,30))
ax.set_yticks([])
ax.xaxis.set_major_formatter(mdates.DateFormatter('%Y-Q%q'))
ax.xaxis.set_major_locator(mdates.MonthLocator(interval=3))
plt.setp(ax.get_xticklabels(), rotation=45, fontsize=8)
ax.set_title('AI / MCP 范式转移时间轴 — 2025 H2 是分水岭',
             fontsize=14, fontweight='bold', pad=15)
ax.text(datetime(2025,4,1), 4.0, '"SQL/Dashboard 时代结束"分界',
        ha='center', fontsize=10, color='#E74C3C', fontweight='bold',
        bbox=dict(boxstyle='round,pad=0.4', facecolor='#FCF3CF', edgecolor='#E74C3C'))

plt.tight_layout()
plt.savefig(OUT / "03-ai-mcp-timeline.png", dpi=180, bbox_inches='tight', facecolor='white')
plt.close()
print("Saved 03-ai-mcp-timeline.png")

# ====== Chart 4: VC tool usage matrix ======
fig, ax = plt.subplots(figsize=(12, 6))

vcs = ['a16z\ncrypto', 'Paradigm', 'Multicoin', 'Polychain', 'Variant', 'Dragonfly', 'Pantera', 'Electric']
tools = ['Dune', 'DefiLlama', 'Nansen', 'Token Terminal\n/ Artemis', 'Self-built\nindexer', 'GitHub /\nDeveloper data', 'Glassnode', 'Allium /\nGoldsky']

# Matrix (0=no, 1=use, 2=heavy use, 3=portfolio/built)
matrix = np.array([
    # Dune, DLama, Nansen, TT/Artemis, Self-built, GitHub, Glassnode, Allium/Goldsky
    [2, 2, 3, 2, 2, 3, 1, 3],  # a16z (Nansen portfolio, GitHub-Archive heavy, Goldsky portfolio)
    [1, 1, 0, 1, 3, 1, 0, 1],  # Paradigm (Reth/Foundry, mostly self-built)
    [2, 2, 1, 1, 2, 0, 0, 0],  # Multicoin
    [2, 1, 2, 1, 1, 0, 0, 0],  # Polychain
    [3, 2, 2, 1, 1, 1, 0, 1],  # Variant (Dune heavy via OurNetwork)
    [2, 2, 2, 1, 2, 0, 0, 1],  # Dragonfly (Hildebert Moulié)
    [2, 2, 1, 3, 2, 0, 0, 1],  # Pantera (heavy Artemis)
    [1, 2, 0, 0, 0, 3, 0, 0],  # Electric (GitHub-Archive specialist)
])

# Color scale
cmap = plt.cm.RdYlGn
im = ax.imshow(matrix, cmap=cmap, aspect='auto', vmin=0, vmax=3)

ax.set_xticks(range(len(tools)))
ax.set_xticklabels(tools, rotation=20, ha='right', fontsize=9)
ax.set_yticks(range(len(vcs)))
ax.set_yticklabels(vcs, fontsize=10)

# Annotations
labels_map = {0: '—', 1: '使用', 2: '重度', 3: '★ 投资 /\n自建'}
for i in range(len(vcs)):
    for j in range(len(tools)):
        v = matrix[i, j]
        ax.text(j, i, labels_map[v], ha='center', va='center',
                fontsize=8, fontweight='bold' if v >= 2 else 'normal',
                color='white' if v == 3 else 'black')

ax.set_title('8 大 Crypto VC × 数据工具使用矩阵\n(★ = 投资/自建; 重度 = 公开报告主要数据源)',
             fontsize=13, fontweight='bold', pad=15)

# Colorbar legend
cbar = plt.colorbar(im, ax=ax, fraction=0.03, pad=0.02, ticks=[0, 1, 2, 3])
cbar.ax.set_yticklabels(['不用', '使用', '重度', '投资/自建'])

plt.tight_layout()
plt.savefig(OUT / "04-vc-tool-matrix.png", dpi=180, bbox_inches='tight', facecolor='white')
plt.close()
print("Saved 04-vc-tool-matrix.png")

# ====== Chart 5: Value Capture Stack (future state) ======
fig, ax = plt.subplots(figsize=(13, 7.5))
ax.set_xlim(0, 14); ax.set_ylim(0, 9); ax.axis('off')

ax.text(7, 8.6, 'Web3 数据栈未来 3 年价值捕获分布', ha='center',
        fontsize=16, fontweight='bold', color='#2C3E50')
ax.text(7, 8.2, '哪一层 alpha 最值得 VC 押注？(2026-2029 展望)',
        ha='center', fontsize=11, style='italic', color='#7F8C8D')

# 5 layers from bottom (foundation) to top (interface)
layers = [
    ('L5 · AI Agent 接口层', 7.0, '#E74C3C',
     'Cursor / Claude Code / 自建 agent 用 MCP 直接消费数据',
     '价值捕获: 上游 LLM 厂商 (Anthropic/OpenAI) 抽 token 费'),
    ('L4 · MCP/API 中间件层 ★', 5.6, '#9B59B6',
     '★ Dune MCP, Token Terminal MCP, Allium APIs',
     '★ 最高 alpha — 谁拥有最干净的 MCP-served label graph 谁赢'),
    ('L3 · Discretionary SaaS 层', 4.2, '#F39C12',
     'Nansen/Messari/Glassnode 仪表盘',
     '价值压缩: $50M ARR 天花板，必须转 trading (Arkham/Nansen AI) 或死'),
    ('L2 · 企业数据 Warehouse 层 ★', 2.8, '#2E86C1',
     '★ Allium, Goldsky, Sentio, Dune Sim',
     '★ 最稳现金流 — Visa/Stripe/CEX 必买；像数据界的 Stripe'),
    ('L1 · 原始数据 + 合规层', 1.4, '#C0392B',
     'Chainalysis (合规), Etherscan/Blockscout (浏览), DefiLlama (TVL 公共物品)',
     '价值锁定: Chainalysis = $250M ARR，但需要 5 年时间 + $500M+ 资金 build'),
]

for name, y, color, content, capture in layers:
    box = FancyBboxPatch((1, y-0.55), 12, 1.1, boxstyle="round,pad=0.12",
                         linewidth=2.5, edgecolor=color, facecolor=color, alpha=0.18)
    ax.add_patch(box)
    ax.text(1.3, y+0.25, name, fontsize=11, fontweight='bold', color=color)
    ax.text(1.3, y-0.05, content, fontsize=9, color='#34495E')
    ax.text(1.3, y-0.32, capture, fontsize=8.5, style='italic',
            color='#922B21' if '★' in capture else '#7F8C8D')

# Arrow showing alpha direction
ax.annotate('', xy=(13.5, 2.8), xytext=(13.5, 5.6),
            arrowprops=dict(arrowstyle='<->', color='#E74C3C', lw=2))
ax.text(13.7, 4.2, '★ alpha\n集中区', fontsize=9, fontweight='bold', color='#E74C3C')

# Bottom annotation
ax.text(7, 0.4, '推荐配置: L2 (40%) + L4 (30%) + L1 合规 (20%) + L3 trading-pivot 投机 (10%)',
        ha='center', fontsize=11, fontweight='bold', color='#C0392B',
        bbox=dict(boxstyle='round,pad=0.5', facecolor='#FCF3CF', edgecolor='#F39C12', linewidth=1.5))

plt.tight_layout()
plt.savefig(OUT / "05-value-capture-stack.png", dpi=180, bbox_inches='tight', facecolor='white')
plt.close()
print("Saved 05-value-capture-stack.png")

print("\nAll 5 charts saved.")
