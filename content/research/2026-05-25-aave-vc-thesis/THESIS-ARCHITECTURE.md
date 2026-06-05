---
title: "Web3 VC Thesis Architecture — Roddy's Research Template v1"
date: "2026-05-25"
based_on: "Aave/Morpho v1 → v4 iteration + Surf AI feedback synthesis"
---

# Web3 VC Thesis Architecture Template

这是基于 Aave/Morpho thesis（v1 → v4）+ Surf AI 7.6/10 反馈的标准化研究架构。  
**所有未来 Web3 VC thesis 必须遵循此结构。**

---

## 1. 核心原则

### 1.1 双输出强制 (per Surf AI 建议)

**每个 thesis = IC Memo + Data Room** —— 不能只有一份。

| 输出 | 受众 | 长度 | 目的 |
| --- | --- | --- | --- |
| **IC Memo** | Partner、IC committee | 8-12 页 PDF | 快速决策：投不投 / 投什么 / 为什么现在 / 风险 / 证伪 |
| **Data Room** | Analyst、复现者、未来的自己 | 同目录，全部 raw | 可复现性 + analyst moat |

### 1.2 两条结论线必须分开

**Token thesis ≠ Venture thesis**。一个 protocol 可以是：
- "Pass" on its token (没有 cash flow capture)
- "Buy" on its ecosystem equity (curator / vault / infra)
- "Yield" on its LP sleeve (cash management)

混在一起会导致投资决策模糊。Surf AI 明确指出 v3 的最大问题。

### 1.3 概率三类标签强制

每个 probability 必须标注 source 类型：

| 类型 | 例子 | 可信度 | 标签 |
| --- | --- | --- | --- |
| **数据推导** | "Morpho TVL YoY 108%, 假设 mean revert → 30-40%" | 高 | 【数据】 |
| **类比推导** | "类似 Uniswap fee switch 多年未启动 → buyback 概率 25-35%" | 中 | 【类比】 |
| **主观判断** | "founder 执行力 / DAO 投票结果" | 低 | 【主观】 |

**不允许**: "我估 25%" 这种无依据数字。

### 1.4 数据口径三层强制

每个核心数据必须分 3 层：

- **Project-level**：所有 sub-protocol 加总（看品牌 / 平台竞争）
- **Product-level**：主版本对比（看产品架构竞争）
- **Market-level**：单 collateral / loan pair（看真实流量 / 利率竞争）

**同一指标在不同层级数字不同是正常的，但必须显式标注层级**。

---

## 2. IC Memo 标准结构（8-12 页）

```
[Cover page]
├── Title: "<Protocol> Investment Thesis v<N>"
├── Subtitle: 一句话核心论点
├── Author + Date + Version

Page 1: Executive Summary (1 page hard limit)
├── 决策表格：Token decision / Venture decision / Sector decision
├── Time horizon
├── 一句话核心论点
├── 数据骨架表 (3-tier 口径)
├── 关键事件（catalysts / 已发生）
└── 推荐部署 split (% portfolio)

Page 2-3: Sector Thesis (2 pages)
├── 1.1 数据口径三层框架
├── 1.2 TVL trajectory (price-adjusted)
├── 1.3 三个根本问题 (TAM / Concentration / Margin)
├── 1.4 Porter 5+1 力（含 governance risk）
└── 1.5 范式转移叙事 (commoditize → new capture layer)

Page 4-5: Single-name Deep Dive (2 pages)
├── 2.1 业务模式本质
├── 2.2 Stress test 历史 (量化 bad debt)
├── 2.3 Holder capture (三源校验)
├── 2.4 Founder 评估 (6 quantifiable dimensions)
└── 2.5 Buyback / value capture scenarios

Page 6-7: Investment Vehicle Recommendation (2 pages)
├── 3.1 Token thesis 决策表
├── 3.2 Venture thesis 决策表 (含 curator / equity / infra)
├── 3.3 LP cash management 决策表
└── 3.4 Portfolio split 示例 ($100m fund)

Page 8-9: Scenarios + Falsifiable Predictions (2 pages)
├── 4.1 Bull / Base / Bear (概率源标签)
├── 4.2 EV range (替代单点)
├── 4.3 Gordon model / multiples sensitivity
└── 4.4 Falsifiable predictions table (12mo)

Page 10-11: Risks + Conclusion (1-2 pages)
├── 5.1 Known unknowns (透明披露)
├── 5.2 Catalyst watchlist (weekly)
└── 5.3 双结论线 final

[Appendix - 可选 2-4 页]
├── 原始数据表
├── 方法论 caveat
└── 个人立场披露
```

**关键约束**：
- Executive Summary 严格 1 页
- 主体 ≤ 11 页（partner 不读超过 12 页的 memo）
- 不超过 8 张图表
- 每个 claim 必须有 source 链接或数据 reference

---

## 3. Data Room 标准结构

```
content/research/<YYYY-MM-DD>-<protocol>-thesis/
├── thesis.md                    # IC memo source
├── thesis.pdf                   # Rendered IC memo
├── thesis-v<N-1>-backup.md      # 上一版备份
├── metadata.json                # 结构化 metadata + version + data integrity score
│
├── charts/                      # PNG 图表 (matplotlib 生成)
│   ├── 01-tvl-trajectory.png
│   ├── 02-take-rate-comparison.png
│   ├── 03-<other>.png
│   └── ...
│
├── data/                        # Raw data snapshots
│   ├── dune-q<id>-<name>.json
│   ├── defillama-<slug>.json
│   ├── coingecko-<token>.json
│   └── ...
│
├── sql/                         # Dune SQL queries
│   ├── README.md (query catalog)
│   ├── 01-share-migration.sql
│   └── ...
│
├── scripts/                     # 可复现 Python scripts
│   ├── README.md
│   ├── 01-fetch-data.py
│   ├── 02-make-charts.py
│   ├── 03-compute-metrics.py
│   └── ...
│
└── sources/                     # 关键 source 链接 + 截图
    ├── webfetch-cache.md
    └── screenshots/
```

---

## 4. 5 步通用研究方法（Surf AI 认可的"长期 edge"）

每个 thesis 必须按以下 5 步走：

### Step 1: 发现协议价值链迁移

**输出**：时序 TVL / revenue / take-rate 数据 (≥ 12 个月)

**工具**：
- DefiLlama `/protocol/<slug>` (timeseries TVL)
- Dune queries (rate / volume history)
- Token Terminal / Bitquery (revenue history)

**关键指标**：
- TVL YoY change
- Revenue YoY change
- Take rate change
- 三层口径对比

### Step 2: 找出被 commoditize 的层

**输出**：哪一层 take-rate 趋零 / 被 forked / 产品功能被复制

**测试**：
- Take rate > 5%？ → 仍有 margin
- Take rate ≈ 0%？ → 已 commoditize
- 有多少 fork / clone？
- 关键功能是否被 modular 化？

### Step 3: 找出新价值捕获层

**输出**：价值沉降到哪里？vault / curator / infra / aggregator / wallet

**测试**：
- Fee 流向哪里？
- 哪个 layer 有 sticky AUM？
- 哪个 layer 有 differentiation 空间？

### Step 4: 验证数据迁移

**输出**：
- Price-adjusted net flow（剥离价格效应）
- Wallet-level cohort migration（需 Dune query）
- Market-level liquidity 重分布

**目的**：避免被 "TVL 升降" 的表面数据误导。

### Step 5: 映射投资载体

**输出**：3 种 vehicle 分开评估

- **Token**: cash flow capture / unlock overhang / governance risk
- **Equity**: cap table / valuation / exit path
- **LP sleeve**: yield / smart contract risk / Sharpe-like measure

---

## 5. 8 个赛道应用模板（即未来 thesis 候选）

| 优先级 | 赛道 | 被 commoditize 的层 | 新价值捕获层 | 可投方向 | 数据 hardness |
| ---: | --- | --- | --- | --- | --- |
| **1** | **Lending** | Aave 式 curated pool | Curator / vault / risk manager | MetaMorpho curator (本 thesis) | High (已 done) |
| **2** | **Perps** | Perp venue | Liquidity network / MM infra | HLP-style vault / Hyperliquid | Medium-High |
| **3** | **DEX** | AMM pool / router | Intent solver / RFQ / orderflow | Solver network (1inch / CoW / Uniswap X) | Medium |
| 4 | **Restaking** | LST / points | AVS distribution / operator | EigenLayer operator / risk marketplace | Medium |
| 5 | **Wallet** | 钱包本体 | Distribution + embedded finance | Wallet infra (Privy / Dynamic / swap routing) | Medium |
| 6 | **DePIN** | Token incentives | Real demand / enterprise buyer | Revenue-positive middleware | Hard (data sparse) |
| 7 | **Stablecoin** | Mint / redeem | Distribution + yield routing | Stablecoin orchestration | Medium |
| 8 | **RWA** | Tokenization issuance | Compliance + distribution + liquidity | Broker-dealer infra / RWA rails | Hard (off-chain data) |

**Roddy 建议优先级**：
1. ✅ Lending (本 thesis 完成)
2. **Thesis #2 推荐**: **Perps** —— Hyperliquid 是 perp 范式赢家，HLP-style liquidity vault 是 next "curator equivalent"
3. **Thesis #3 推荐**: **DEX intent layer** —— Uniswap X / CoW 起步，solver auction infra 是 deep equity opportunity

---

## 6. 数据完整性自评表（每个 thesis 必填）

| 维度 | 满分 | 评分标准 |
| --- | :---: | --- |
| 多源交叉验证 | 10 | 4 源以上 (DefiLlama + Dune + CoinGecko + WebSearch) = 9-10 |
| 时序 vs Snapshot | 10 | ≥ 12 月时间序列 + price-adjusted = 9-10 |
| 采样偏差控制 | 10 | 全样本 / random sample = 9-10；biased sample 显式 caveat |
| 预测概率化 | 10 | EV range + 概率源标签 = 9-10 |
| 置信区间 / 敏感度 | 10 | Sensitivity matrix / Monte Carlo = 9-10 |
| 异常值处理 | 10 | 显式标记 outlier 且不作论据使用 = 9-10 |
| Founder / qualitative | 10 | 6 quantifiable dimensions = 9-10 |
| Stress test 历史 | 10 | ≥ 3 起事件量化 = 9-10 |
| 方法论 disclosure | 10 | v1 → v2 修订追踪 = 9-10 |
| 可复现 (code + data) | 10 | 完整 scripts + data + SQL = 9-10 |
| 三层口径 (Project/Product/Market) | 10 | 全部 3 层 = 10 |

**Target**: ≥ 8.5 / 10 整体 (= partner 不会 challenge 数据 quality)

---

## 7. 关键 Anti-pattern (Surf AI 警告的"过度精确")

### 7.1 不要：单点伪精度

❌ "EV = +0.63x in 3 yr"  
✅ "EV ∈ [+0.4x, +1.2x] in 3 yr, midpoint +0.8x【概率源：50% 数据 + 30% 类比 + 20% 主观】"

### 7.2 不要：未验证的难证实信息

❌ "Stani Kulechov 个人净资产 $300m"（来自 some Tracxn page）  
✅ "Aave V4 已延期 3 次（2024 H2 → 2025 H1 → 2026 H2），来源：Aave forum 提案 #XXX"

### 7.3 不要：snapshot 假装 trend

❌ "Morpho 现在 55% of Aave → 12mo 后超过"  
✅ "Morpho/Aave supply ratio 18mo: 14.5% → 55%, 但 borrowed ratio 同期 10% → 36%, 真实份额转移更慢"

### 7.4 不要：单数据源依赖

❌ "DefiLlama 说 Aave holders revenue $242k"  
✅ "DefiLlama $242k vs Token Terminal X vs 链上 treasury Y —— 三源差异说明"

---

## 8. Workflow（实操步骤）

```mermaid
1. 选定 thesis 主题 (sector + protocol)
   ↓
2. Step 1-2: 数据采集 (DefiLlama + Dune)
   ↓
3. Step 3-4: 价值链 + flow 分析
   ↓
4. Step 5: vehicle mapping
   ↓
5. 写 IC Memo (8-12 页)
   ↓
6. 同步整理 Data Room
   ↓
7. 自评 data integrity ≥ 8.5/10
   ↓
8. 外部 review (Surf AI / VC partner / 同行)
   ↓
9. 迭代 v(N+1) 直到 ≥ 9.0/10
   ↓
10. 发布 (website + Twitter + Notion)
```

**单 thesis 时间预算**：
- 数据采集 + 验证：1-2 天
- 写作 + 图表：1-2 天
- 外部 review + iterate：1-2 天
- **总计: 3-6 天 per thesis**
- 推荐节奏: 每月 1 篇深度 + 每周 1 个 watchlist update

---

## 9. 工具栈（Roddy 当前）

| 工具 | 用途 |
| --- | --- |
| DefiLlama API | TVL / fees / revenue 时序 |
| Dune Analytics (REST API + custom HTTP MCP client) | 链上 query |
| CoinGecko API | Token data (FDV, float, supply) |
| WebSearch (Claude) | News / founder / industry research |
| WebFetch | Etherscan label lookup / 公告内容 |
| matplotlib + Python | 设计图表 |
| pandoc + XeLaTeX | PDF (中英文) 渲染 |
| Notion (cloud MCP) | Stock 跟踪 / watchlist |
| GitHub | 版本控制 |
| `~/web3-vc/` plugin | Claude Code 集成 |

---

## 10. 检查清单（pre-publish）

发布前每篇 thesis 必须勾选：

- [ ] Executive Summary 1 页严格 limit
- [ ] Token / Venture / LP thesis 明确分开
- [ ] 三层口径（Project / Product / Market）覆盖
- [ ] 概率源标签 (【数据】/【类比】/【主观】) 全部标注
- [ ] EV 用 range 而非单点
- [ ] Sensitivity matrix 至少 1 张
- [ ] Stress test 历史量化 (≥ 3 起事件)
- [ ] Founder 评估用 6 quantifiable dimensions
- [ ] 数据三源校验（fee / revenue / 关键 metric）
- [ ] Price-adjusted TVL / volume 分析
- [ ] 全样本（非 biased sample）数据使用
- [ ] Falsifiable predictions 表格（12mo）
- [ ] Known unknowns 透明披露
- [ ] Data integrity 自评分 ≥ 8.5/10
- [ ] 完整 reproducibility（scripts + data + SQL）
- [ ] PDF 渲染无 missing glyph
- [ ] v(N-1) backup 保留

---

*Architecture v1. Based on Aave/Morpho thesis v1 → v4 iteration + Surf AI 7.6/10 feedback (2026-05-26).*  
*Maintained by Roddy Huang. 适用于所有 Web3 VC research outputs.*
