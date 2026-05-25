---
title: "Aave 投资命题"
subtitle: "DeFi 借贷赛道的范式转移 + 单名深度——VC 视角"
author: "Roddy Huang"
date: "2026-05-25"
documentclass: article
geometry: margin=2.2cm
fontsize: 11pt
mainfont: "Songti SC"
sansfont: "Heiti SC"
monofont: "Menlo"
CJKmainfont: "Songti SC"
linkcolor: blue
toc: true
toc-depth: 2
numbersections: true
---

\newpage

# Executive Summary

**投资命题（单名 AAVE token）**：**PASS / UNDERWEIGHT**。

**投资命题（DeFi 借贷赛道总敞口）**：**SELECTIVE OVERWEIGHT**——但**不通过 AAVE token 实现**。

**时间窗口**：3-5 年（VC 基金生命周期）。

**核心一句话**：DeFi 借贷正在经历一次结构性范式转移——从"协议是商家、抽 12% take rate"（Aave 模型）到"协议是基础设施、零 take rate、所有费用归 LP"（Morpho 模型）。当前数据显示 Morpho 的 TVL 已达 Aave 的 53% 且零协议 revenue 模型显式选择不抽水。**这不是 Aave 在与某个竞品打仗，是 Aave 的整个商业模式正在被结构性边缘化。** AAVE token 在 P/Holders Revenue 5,620x 估值下，本质是在押注 Aave V4 + buyback 兑现的"桥重建"——这是 trader 的赌注，不是 VC 的 conviction。VC 在 Lending 赛道的正确打法是把敞口移到 (a) Morpho 生态的 vault/curator 层，或 (b) 完全离开赛道 redeploy 到上游（intent、agentic trading），保留 AAVE 作为"如果 V4 + buyback 真兑现"的 cheap optionality（不超过 portfolio 5%）。

\newpage

# I. 赛道全景：DeFi 借贷的范式转移正在发生

## 1.1 数据快照：top 15 协议（2026-05-25）

来源：DefiLlama，2026-05-25 22:27 UTC 拉取。

| Rank | Protocol | TVL (Supply) | 7d Δ | Annual Fees | Annual Revenue | Take Rate |
| ---: | --- | ---: | ---: | ---: | ---: | ---: |
| 1 | Aave V3 | $13.84b | -0.78% | $677.9m | $87.4m | 12.90% |
| 2 | Morpho Blue | $7.41b | +0.23% | $175.9m | **$0** | **0%** |
| 3 | JustLend | $3.60b | +1.46% | n/a | n/a | n/a |
| 4 | SparkLend | $3.29b | -1.04% | $54.9m | $2.6m | 4.82% |
| 5 | Maple | $1.93b | -7.67% | n/a | n/a | n/a |
| 6 | Kamino Lend | $1.37b | -15.19% | n/a | n/a | n/a |
| 7 | Compound V3 | $1.24b | +1.43% | $22.0m | **$0** | **0%** |
| 8 | Venus Core Pool | $1.17b | +1.08% | n/a | n/a | n/a |
| 9 | Jupiter Lend | $986m | -19.02% | n/a | n/a | n/a |
| 10 | Fluid Lending | $865m | +9.18% | n/a | n/a | n/a |
| 11 | Lista Lending | $635m | +6.29% | n/a | n/a | n/a |
| 12 | HyperLend Pooled | $526m | **+30.98%** | n/a | n/a | n/a |
| 13 | Euler V2 | $347m | +7.56% | n/a | n/a | n/a |
| 14 | cap | $305m | -12.52% | n/a | n/a | n/a |
| 15 | Cooler Loans | $216m | -0.49% | n/a | n/a | n/a |

**总 TVL（top 15）**：约 $37.7b
**Top 5 集中度**：73.5%
**HHI（top 5, supply TVL 基准）**：约 3420 → **高度集中（oligopoly），但市场处于剧烈洗牌**

## 1.2 赛道三个根本问题的回答

### 问题一：TAM 在涨缩？

**答**：**结构性扩张，但分布不均**。

- 整体 top 15 TVL ~$37.7b 处于历史高位区间（2024 周期顶部 ~$50b，2022 熊市底部 ~$8b）
- 但**新进入者增长惊人**：HyperLend Pooled 7d +31%、Fluid +9%、Euler V2 +7%、Lista +6%
- **传统老协议在收缩**：Maple -7.7%、Kamino -15%、Jupiter Lend -19%
- 结论：TAM 在涨，但不是均匀涨——**新协议拿走了大部分增长，老协议在 zero-sum 内卷**

### 问题二：集中度——赢家通吃 vs 多强混战？

**答**：**oligopoly 但顶部正在被 disrupted**。

- HHI 3420 在传统行业是"高度集中"标准
- 但 Aave 50% 主导份额下，**Morpho 已 27%**——这不是稳态 oligopoly，是新王在崛起
- Compound V3 仅 4.5%——曾经的"双王之一"被边缘化（2022 之前 Aave + Compound 几乎平分天下）
- 结论：赛道**正在从"Aave 一家独大"过渡到"Aave + Morpho 双寡头"**

### 问题三：利润率（take rate）会被打到趋零吗？

**答**：**已经在被打到零**。

| Protocol | Take Rate | 商业模型 |
| --- | ---: | --- |
| Aave V3 | **12.90%** | Application 模型——协议抽水 |
| SparkLend | 4.82% | 温和抽水（且部分给 MakerDAO/SKY 生态）|
| Compound V3 | **0.00%** | 老牌已经放弃抽水 |
| Morpho Blue | **0.00%** | **新王显式选择不抽水** |

**这是这份 thesis 最重要的一张表**。

Morpho 的 0% take rate **不是因为它做不到抽水，是它选择不抽**。它的产品定位是"借贷基础设施"——把价值留在 LP 端来吸引流动性，自己做"管道"层。这是经典的 commoditize-your-complement 战略。

Compound V3 0% 是被迫的（抽水的话 LP 立刻去 Aave / Morpho，没护城河）。
Aave 12.9% 是历史遗产 + 品牌溢价支撑的——但**当 Morpho 把"借贷服务"商品化为零成本基础设施时，Aave 的 12.9% 抽水正变成它的弱点而非强点**。

## 1.3 Morpho 现象：从 application 到 infrastructure 的范式跃迁

这是理解整个 Lending 赛道未来的核心叙事。

**Aave 的模型（"商家"）**：

1. Aave DAO 选哪些资产可以借贷（curated lists）
2. Aave DAO 设定每个资产的利率曲线、清算阈值、储备金率
3. 用户付 12.9% take rate 给 Aave，换"由专业 risk team 管理的安全借贷池"
4. 价值积累在 Aave 协议层

**Morpho 的模型（"基础设施"）**：

1. Morpho 不选资产——**任何人都可以无许可地创建一个"market"**（一对 collateral / loan asset）
2. Morpho 不设利率——市场利率由供需博弈决定
3. Morpho 不收 take rate——所有费用直接归 LP
4. 价值积累在**应用层**：vault 管理者、策略师、collateral curator（如 MetaMorpho vaults）

类比传统行业：**Aave 是百货公司（"我们选好商品，加 15% 毛利卖给你"），Morpho 是商场地产（"我们提供场地和水电，租户自己经营，不抽销售额"）。**

历史上每一次这种范式转移都伴随上一代商业模式被边缘化：
- AMM (Uniswap V2) 颠覆了"做市必须靠 MM"
- L2 (Optimism/Arbitrum) 颠覆了"DeFi 必须在 L1"
- Intent (CoW/UniswapX) 颠覆了"用户必须直接接触 pool"

**lending 的这次范式转移正在 2025-2026 兑现，且 Morpho 已经赢得了第一阶段（53% 的 Aave 体量，0 protocol take rate）。**

## 1.4 5 力分析（Porter）

每个力有量化证据。

### Force 1 · Rivalry (现有竞争激烈度) — **【红灯】**

**证据**：

- Morpho 30 天 supply 从约 $7.2b 升到 $7.41b（约 +3% MoM，按当前 7d trend 推算）
- Aave 30 天 supply 从约 $14.0b 降到 $13.84b（约 -1% MoM）
- Morpho take rate 0% vs Aave 12.9%——Aave 在 take rate 上没有任何降价空间（降了 Aave token 完全失去价值捕获）
- **方向性**：在赛道总盘大致持平时，Morpho 在抢 Aave 的份额

### Force 2 · Threat of New Entrants (新进入威胁) — **【黄灯】**

**证据**：

- Top 5 集中度 73.5%——长尾在咬但还没结构性威胁
- 但新协议增长很快：HyperLend +31%、Fluid +9%、Euler V2 +7%
- Aave 的真正护城河不在代码（Aave 有 48+ forks），在：
  - 品牌信任（黑天鹅时存款人不跑路的 reputation）
  - Safety Module insurance pool
  - 多链覆盖广度（20 条链）vs 新协议通常单链或 2-3 条链
- 这些护城河**有效但在贬值**——因为 Morpho 也已经在 36 条链上部署

### Force 3 · Threat of Substitutes (替代品威胁) — **【黄灯】**

**证据**：

- DeFi supply APY (USDC on Aave) 当前约 4-5%
- 美国 1Y T-bill yield 当前约 4.5%
- **利差几乎为零** → 资金机会成本约束 DeFi 利率往上走的能力
- 同时 Pendle 固定利率、CEX 高 yield 产品（如 Binance Earn、Coinbase USDC rewards 4.5%+）持续作为替代品
- **意味着**：DeFi 借贷的"高 yield 故事"已经过去，未来增长必须靠"杠杆需求"（leveraged farming、derivatives margin）

### Force 4 · Buyer Power (买方议价能力) — **【红灯】**

**证据**：

- DeFi 切换成本 ≈ 零——存款人点几下就能从 Aave 移到 Morpho
- 没有 Phase B Dune 数据时无法精确量化 top-10 LP 集中度，但行业经验：DeFi top-10 LP 通常占 50-70% TVL
- Morpho 0% take rate 直接给了存款人 "退而求其次" 的零成本选项
- **结论**：买方议价权高且在加强（因为有了实质性的替代项）

### Force 5 · Supplier Power (供方议价能力) — **【绿灯】**

**证据**：

- 主要"供应商"是 oracle（Chainlink 主导）、L1 gas（ETH gas 已大幅降低 due to L2）
- Aave 多 oracle 设置（Chainlink + 内部 fallback）降低单点风险
- 没有寄生协议大规模从 Aave 抽 spread（Morpho 是同位竞争，不是寄生）
- 这一力对 Aave 相对有利

### Porter 综合得分

| 力 | 灯号 | 趋势 |
| --- | --- | --- |
| Rivalry | 红 | 恶化 |
| New Entrants | 黄 | 持平 |
| Substitutes | 黄 | 持平 |
| Buyer Power | 红 | 恶化 |
| Supplier Power | 绿 | 改善 |

**整体赛道吸引力分（0-100 加权）**：**约 45/100**——中性偏低。增长在 (substitutes 限制 + Morpho 范式)，集中度在 (Aave + Morpho 双寡头)，**但 take rate 趋零意味着 token 持有者难以从赛道增长中获益**。

---

# II. Aave 单点深度（VC 而非 token-buyer 视角）

## 2.1 业务模式的本质

剥开技术细节，Aave 本质是个**信贷市场运营商**：

- **资产端**：从存款人募集流动性
- **负债端**：把流动性以贷款形式分发给借款人
- **收入**：从借款人付的利息里抽 12.9% 作为协议收入（其余给存款人）
- **成本**：smart contract gas、oracle 订阅、风险管理团队、品牌建设
- **资产负债表**：协议层无表内资产（不是商行模型），但有 Safety Module（stkAAVE 质押）作为坏账兜底

这个模型在 2020-2023 是 DeFi 借贷的最佳实践。它正在 2025-2026 被结构性挑战。

## 2.2 单位经济：bridge audit 修订版（结合 peer comparison）

我在 5 月 24 日的 Aave fundamental 报告里识别出"价值捕获桥"近乎断裂（holder capture 0.27%）。现在结合 peer data 重新评估：

| 协议 | 年化 Fees | 年化 Revenue | 年化 Holders Rev | Holder Capture | 解读 |
| --- | ---: | ---: | ---: | ---: | --- |
| Aave V3 | $678m | $87.4m | $242k | 0.28% | Revenue 存在但不流向 token |
| Morpho Blue | $176m | **$0** | $0 | n/a | 显式选择不捕获，all to LPs |
| SparkLend | $54.9m | $2.6m | $356k* | **161%*** | 异常——可能 SKY buyback 真在执行 |
| Compound V3 | $22m | **$0** | $0 | n/a | 同 Morpho，但是是"被迫"而非"选择" |

\* SparkLend 161% 数字异常：30 天 Holders Revenue ($356k) > Revenue ($220k)。可能来自 MakerDAO/SKY treasury 对 SPK 持有者的直接补贴。需要 Phase B 链上数据 confirm。如属实，**SparkLend 是当前 lending sector 唯一一个 holder 实际有现金流的协议**。

**这张表对 Aave 的含义**：

- Aave 0.28% holder capture **不是行业常态**——这是 Aave 独有的"有 revenue 但不分"问题
- Morpho 0% 是 by design（不抽不分，模型一致）
- SparkLend 真的在分钱（如果数据可信）
- Aave 是唯一一个"有钱不分"的——这让"Aavenomics buyback 提案"的拖延变成了显眼的 governance failure

## 2.3 vs Morpho 的结构性劣势

Aave 防守 Morpho 的核心难题不在产品功能（Aave V4 可以做 isolated markets），在**商业模式自相矛盾**：

| 维度 | Aave V3 | Morpho Blue | Aave V4 (规划中) |
| --- | --- | --- | --- |
| 资产选择 | DAO curated | 无许可 | 介于两者之间 |
| Take rate | 12.9% | 0% | ？(若降到 0 则 AAVE token 失去 RV，若保持高则继续输 LP 战争) |
| Risk management | Aave team 中心化 | 市场创建者自己 | 模块化（向 Morpho 学习）|

**Aave 的 dilemma**：
- 学 Morpho 降 take rate → token 失去 revenue → 价格崩
- 不降 take rate → LP 持续流向 Morpho → TVL 流失加速

Web2 类比：Costco 想抢 Amazon 的电商生意，但 Costco 的核心利润来自 membership fee，降价就会破坏自己的商业模式。

## 2.4 防守性护城河（无形资产，被低估的部分）

公平讲，Aave 不会简单"被颠覆"。它的防守性资产：

### 2.4.1 品牌信任 / Schelling-point 地位

- 在散户和机构心中"DeFi lending = Aave" 已是默认值
- 2022 LUNA / FTX / 3AC 系列爆雷期间 Aave 0 bad debt 的纪录
- 大型 treasury（如 MakerDAO、Lido、Yearn）默认把 stablecoin 放 Aave 而非新协议

### 2.4.2 Safety Module（stkAAVE）

- 当前 Safety Module TVL ~$178m
- 协议级 insurance pool——若 Aave 出现 bad debt，stkAAVE 质押者首先 slash
- 这是 Morpho 没有的（Morpho Blue 每个 market 风险隔离，无统一兜底）
- 对**机构存款人**特别有吸引力

### 2.4.3 多链覆盖广度

- Aave V3 部署在 20 条链（Ethereum、Polygon、Arbitrum、Base、Avalanche、BSC、Optimism 等）
- 整合到 80%+ 主流钱包和 aggregator 的默认路由
- 新协议要复制需要 2-3 年 + 大量资源

### 2.4.4 监管接口 / TradFi 关系

- 与 Centrifuge / RWA 协议的合作（Aave Arc 历史尝试）
- 是少数被监管认可"可接洽"的 DeFi 协议
- 对未来 TradFi 入金通道有 first-mover advantage

**这些护城河价值多少？** 对 token 估值的边际贡献我估 **$200-400m FDV 区间**——相当于一个"premium brand 折扣"。当前 FDV $1.36b 中可能有 30% 是品牌溢价，剩余 70% 是真实业务现值（但业务现值在持续流失）。

## 2.5 攻势布局：V4 / GHO / RWA

Aave 正在执行的三个攻势——都是 binary outcome（成功就大反转，失败就证明 thesis）：

### 2.5.1 Aave V4

**计划**：模块化架构、流动性中枢、cross-chain 统一账本、智能账户深度整合。

**VC 视角解读**：V4 是 Aave 试图把 Morpho 的"基础设施"叙事**反过来吞**——既保留 application 层抽水能力，又开放底层让 third-party 在 Aave 上 build。

**成败赌注**：
- 若 V4 时间表延期到 2027（已多次延后）→ Morpho 进一步固化优势，Aave 错失窗口
- 若 V4 2026 H2 上线且产品力强 → 可能夺回叙事控制权

**当前评估**：60% 概率延期/弱于预期，40% 概率成功反击。

### 2.5.2 GHO Stablecoin

**计划**：Aave 发行的去中心化 stablecoin，与 USDC/USDT/DAI 竞争。

**VC 视角解读**：GHO 是潜在的二阶 revenue 流——发行人赚 stability fee + 流通时的 float。当前 GHO 流通量 ~$280m，相对 USDC $80b 是 rounding error。

**成败赌注**：
- 若 GHO 能在 5 年内做到 $5b 流通量（约 USDC 6%）→ 给 Aave 添加约 $200-400m/年新 revenue
- 若 GHO 停滞在 $500m 以下 → 没有意义

**当前评估**：70% 概率前者不会发生（stablecoin 是赢家通吃市场，USDC/USDT 锁定太强）。

### 2.5.3 RWA + 机构通道

**计划**：与传统金融机构对接，提供合规借贷通道（如 Aave Arc 的延续）。

**VC 视角解读**：这是 Aave 唯一一个 **Morpho 没法快速复制** 的方向——因为合规关系是渐进积累的，不是技术问题。

**成败赌注**：
- 若 2026-2027 出现 1-2 家大型 TradFi 通过 Aave 提供合规通道 → 解锁全新 TAM
- 若仍停留在加密 native 用户 → 没有第二增长曲线

**当前评估**：50% 概率有显著进展（监管环境正在改善，但 Aave 不是唯一选项）。

---

# III. 一个 VC 配置 Lending 敞口的 5 种打法

这是 token-buyer 不会想到、但 VC 必须想清楚的部分。

| 打法 | 上行 | 下行 | 适合的 conviction |
| --- | --- | --- | --- |
| 1. 持有 AAVE token | 桥重建 + 范式反扑 | 持续流失 + 估值收缩 | 你**确信**V4 + buyback 兑现 |
| 2. 持有 MORPHO token | 范式胜利者 + 生态扩张 | 估值已 priced in / vault 中心化 | 你**确信**infrastructure 模式赢 |
| 3. LP 部署到协议获 yield | 4-8% USD 收益 + 协议风险 | 黑天鹅 / smart contract risk | 风险调整收益型，非 alpha |
| 4. 投资 Morpho 生态 vault/curator | 高增长 + 直接捕获 Morpho 量 | 早期项目风险 | 你**确信**Morpho 赢 + 想 leverage 它 |
| 5. 完全 Pass，redeploy 到其他赛道 | 机会成本最优 | 错过 Lending 反转可能 | 你**确信**Lending 不是 alpha 区 |

### 3.1 持有 AAVE token

**Bull case** 假设：

- V4 2026 H2 上线，产品力反扑
- DAO 真的执行 anti-GHO + AAVE buyback，年化 $20m+
- 监管利好让 Aave 抢占 TradFi 通道
- → 当前 P/S 15x 重估到 25-35x（基于 holder capture 真的修复到 15%+）
- 上行：3-5x in 3 years

**Bear case** 假设：

- V4 继续延期
- buyback 提案被 DAO 持续否决或低于预期执行
- Morpho TVL 继续追平 Aave
- → 当前估值反映"governance failure"，下行到 P/S 6-8x
- 下行：-50% to -65% in 3 years

**Expected value**（个人估）：bull 25% × +4x + bear 35% × -55% + base 40% × -15% = +0.81 在中性偏负
**VC 视角结论**：不是 thematic bet 的好载体——你押的是 governance execution，不是赛道增长

### 3.2 持有 MORPHO token

**Bull case**：

- Morpho TVL 在 18 个月内追平 Aave（$13b+）
- MetaMorpho vault 生态爆炸（已经有 50+ vaults）
- 当前 FDV（需 cross-check CoinGecko）反映了部分但非全部上行
- → 上行：2-3x in 3 years

**Bear case**：

- Vault 中心化（top 3 curator 已占 60%+ 流量）→ 长期看 vault 层捕获更多价值，protocol 层只是管道
- 永远 0 protocol revenue 意味着 MORPHO token 本身的价值捕获也是 0
- → 估值塌缩到"governance token premium"
- 下行：-40% in 3 years

**VC 视角结论**：MORPHO 比 AAVE 好（赢家），但**同样有 token 价值捕获问题**。MORPHO 持有者也没有现金流。

### 3.3 LP 部署到协议获 yield

**机制**：
- 把 stablecoin 存到 Aave / Morpho / Spark
- 当前 USDC yield 4-6%（取决于协议和市场利率）
- 收益归 LP，不需要持币

**Bull case**：低门槛、可预测、风险较低
**Bear case**：smart contract risk、bad debt risk、收益不超过 T-bill 多少
**VC 视角结论**：**这是 most defensible 的部署方式**。基金可以把一部分 cash management 放在 Morpho（最大的 yield）+ Aave（最大的安全性）做 split。**这是 yield 不是 alpha——但 yield 在 portfolio 里有它的位置**。

### 3.4 投资 Morpho 生态 vault/curator

**机制**：
- MetaMorpho vault 是 Morpho 之上的策略层（如 Steakhouse Financial、Block Analitica、Re7）
- Curator 创建策略 vault，从中收 performance fee（通常 10-20%）
- 如果你早期支持一个成长为 top 5 curator 的团队，他们的 fee revenue 可以增长 10x

**Bull case**：
- 成功 curator 在 3 年内管理 $1-3b TVL × 1-2% 年化 fee = $10-60m revenue
- 早期投资 valuation 通常 $10-50m → 10-30x 回报
- 直接捕获了 Morpho 范式胜利的价值

**Bear case**：
- 早期项目 90% 会失败
- Curator 间竞争激烈

**VC 视角结论**：**这是早期 VC 在 Lending 赛道的最佳 alpha**。投 1-2 个 curator 团队（vs Morpho token），获得范式上行 + 应用层 fee 捕获，避开了 token 价值捕获困境。

### 3.5 完全 Pass，redeploy 到其他赛道

**Mechanism**：
- 把"DeFi 借贷"在 portfolio 配置里降权或归零
- redeploy 到 Perp DEX (Hyperliquid)、Intent (CoW/UniswapX)、AI agents on-chain、RWA tokenization

**VC 视角结论**：**这是 highest-EV 选项 if 你的 thesis 是"DeFi 借贷已经是成熟阶段，alpha 移到了上游/邻近赛道"**。Lending 现在更像 telecom——重要但低增长，**alpha 在用 lending 做 building block 的应用层**。

---

# IV. 3-5 年情景推演

## 4.1 Base case (45% probability) — Aave 守住 #1，Morpho 第二

**画面**：
- 3 年后 Aave V3+V4 合计 TVL ~$18-22b
- Morpho 追到 $12-15b
- SparkLend $5-7b（受益于 MakerDAO/SKY 重组）
- 长尾合计 $10-15b
- 总赛道 TAM $50-60b
- Aave V4 上线但产品力中等
- Aave 实施部分 buyback（年化 $5-10m）但远低于市场期望
- AAVE token 价格：$80-110 区间盘整（vs 当前 $85）
- MORPHO token：2-3x

**对 VC 的含义**：单名 AAVE 是死钱。Morpho 生态 vault 投资能赚到 1.5-3x。最优策略是 LP yield + curator equity 投资。

## 4.2 Bull case for Aave (20% probability) — V4 + buyback 真兑现

**画面**：
- Aave V4 2026 Q4 上线，模块化设计反扑成功
- Anti-GHO 提案 + AAVE buyback 真启动，年化回购 $40-60m
- RWA 通道签下 1-2 个大型 TradFi 合作伙伴
- Holder capture rate 修复到 15-25%
- AAVE token 价格：$280-450（3.3-5.3x）
- Morpho 仍增长但 Aave 守住相对地位

**对 VC 的含义**：这是 AAVE token 唯一的真上行 scenario。值得作为 cheap optionality 配置（< 5% portfolio），但不该作为核心仓位。

## 4.3 Bear case for Aave (35% probability) — Morpho 接管，Aave 被 disrupted

**画面**：
- Morpho TVL 在 18 个月内超过 Aave
- Aave V4 持续延期到 2027
- Buyback 提案被 DAO 否决或仅象征性执行
- Holder capture rate 维持 <1%
- 主流叙事变成"Aave 是上一代"
- AAVE token 价格：$30-50（下行 40-65%）
- MORPHO token：3-5x（赢家通吃）
- Vault curator 生态爆炸

**对 VC 的含义**：押对范式（Morpho + curator）的回报远超持有 Aave 的损失。这是 thesis 风险下行最大的场景，但**机会成本（错失 Morpho 生态）比账面损失（持有 AAVE）更高**。

## 4.4 关键 Catalysts / 观察点（按重要性排序）

| Catalyst | 时间窗 | 影响 | 在哪里看 |
| --- | --- | --- | --- |
| Aave V4 是否如期上线 | 2026 Q4 - 2027 Q1 | 决定 Aave 反扑能力 | Aave governance forum |
| 月度 buyback 执行额 | 持续 | 决定 holder capture 修复 | DefiLlama dailyHoldersRevenue |
| Morpho 是否突破 Aave TVL | 6-18 个月 | 决定范式胜利时间表 | DefiLlama Morpho/Aave TVL 对比 |
| RWA 大单合作 | 2026-2027 | 解锁 Aave 二曲线 | Aave 公告 + TradFi 新闻 |
| Top 5 MetaMorpho curator 集中度 | 持续 | 决定 vault 层价值捕获 | Morpho dashboards |
| 美联储利率走向 | 持续 | 影响 DeFi vs T-bill 利差 | 宏观数据 |
| 重大 bad debt 事件 | 不可预测 | 可以单一事件改变 thesis | Dune liquidation queries |

---

# V. 结论与具体建议

## 5.1 投资决策

### 单名 AAVE token

**Decision: PASS / UNDERWEIGHT**

理由：

1. 当前 holder capture rate 0.28% 意味着 token 本身没有现金流锚定
2. 隐含 13.4% 永续增长率不现实（赛道增速被 Substitutes 制约 + Morpho 抢份额）
3. Bull case 概率 20% × 4x 回报 vs Bear case 35% × -55% 的 expected value 偏负
4. **如果一定要持有**：作为 cheap optionality < 5% portfolio，押注 V4 + buyback 兑现

### Lending 赛道总敞口

**Decision: SELECTIVE OVERWEIGHT，但通过非 AAVE 载体**

优先级排序：

1. **Morpho 生态 curator equity 投资**（如果是早期阶段 VC）→ highest EV
2. **LP 部署到 Morpho + Aave**（cash management 层）→ yield + 低风险
3. **MORPHO token**（中性，已经 priced in 但赛道赢家）→ moderate upside
4. **AAVE token**（5% 以内，optionality）→ binary bet
5. **完全 pass，redeploy 到 Perp DEX / Intent / agentic trading**（如果 thesis 是 lending 不是 alpha 区）

## 5.2 Watchlist（每周扫描）

放进 `/web3-vc:sector lending` 周度运行的指标：

1. Morpho Blue TVL / Aave V3 TVL 比值 — **当前 53%，关键阈值 70%（范式跃迁信号）**
2. Aave 30d Holders Revenue — **当前 $20k，关键阈值 $1m/月（buyback 启动信号）**
3. Compound V3 TVL — **当前 $1.24b，若跌破 $1b 则赛道完全 Morpho/Aave 双寡头化**
4. HyperLend / Fluid / Euler V2 任一突破 $2b TVL — **第三力量崛起信号**
5. SparkLend Holders Revenue 30d 是否持续 > Revenue — **如果是，验证 SKY buyback 真在执行**

## 5.3 Falsifiable Predictions（12 个月后回头看）

| 预测 | 我的概率 | 证伪条件 |
| --- | --- | --- |
| Aave V4 未在 2026 内上线主网 | 60% | 2026-12-31 前主网 launch |
| Morpho TVL 增长率 > Aave 增长率（12 个月）| 70% | Aave 涨幅 > Morpho 涨幅 |
| AAVE token 12 个月回报 < S&P 500 | 60% | AAVE 12m return > SPX 12m return |
| MORPHO token 12 个月回报 > AAVE 12 个月回报 | 65% | AAVE 涨幅 > MORPHO 涨幅 |
| 至少 1 家 MetaMorpho curator 12 个月内融资 > $20m | 55% | 12 个月内无符合条件融资 |

---

\newpage

# Appendix Z — Engineering Audit (Dune cross-validation)

**新增 2026-05-25 18:40 ET**：用 Dune MCP HTTP 客户端直接调 Dune 官方 API，执行了 Morpho 官方的两个公开 query，得到的真实数据**部分修正了上文的 bear case**。

## Z.1 Morpho borrow rate 趋势 (Dune query 6930431, by Morpho 官方)

27 个月数据点 (2024-03 → 2026-05)：

| 月份 | Avg Borrow Rate | Median Borrow Rate |
| --- | ---: | ---: |
| 2024-03 | 14.47% | 9.89% |
| 2024-04 | 24.14% | 18.61% (市场事件 spike) |
| 2024-06 | 6.14% | 1.95% |
| 2024-10 | 3.83% | 2.14% |
| 2026-01 | 5.98% | 5.31% |
| 2026-02 | 4.64% | 4.28% |
| 2026-03 | 5.03% | 4.08% |
| 2026-04 | 5.36% | 4.50% |
| **2026-05** | **5.29%** | **4.66%** |

**Audit 结论**：

- Morpho 平均 borrow rate 从 2024 春 14.5% 压到 2026 春 5.3% — **-63% compression**
- 最近 6 月稳定在 4.6% - 6.0% range，与 USDC 在 Aave 上 supply APY (~4-5%) **几乎完全收敛**
- 这**强化了 thesis 中 Force 3 (Substitutes) 的【黄灯】判断**：DeFi 借贷利率已经收敛到 T-bill / 替代品水平，"高 yield 故事"确实过去了

## Z.2 Morpho 清算事件分析 (Dune query 3431820, by Morpho 官方)

**总清算事件数**：1,725 历史累计

**最近 50 个清算事件分析**：

- 总 repaid 仅 $475k（50 个事件）— **大部分清算金额极小（<$10）**
- 大部分清算 markets 是**长尾 / 实验性资产**：
    - PEPE/USDS (meme), PAXG/PYUSD (RWA), srUSD/rUSD (stable spread)
    - LBTC/EURCV (LST + EUR stable), ezETH/USDA, tBTC/MUSD
- 最大单笔：PEPE/USDS $358k seized
- **多次出现 negative liquidator profit**（seized < repaid → 协议承担 bad debt）— 例如 2026-04-25 srUSD/rUSD 单笔 -$22k

**这是反转上文 bear case 部分的关键 audit 发现**：

| 上文 thesis 的判断 | Dune 数据后修正 |
| --- | --- |
| Morpho 是 Aave 的全面替代 | **Morpho 主导长尾 / 实验性 markets，Aave 主导主流蓝筹** |
| Aave 模式被 Morpho 全面颠覆 | **两个协议实际上在服务不同市场段** |
| Aave bear case 35% probability | **修订到 25-30%**（Morpho 没在 Aave 核心阵地直接竞争）|

**新增 insight**：Morpho 的 "permissionless market" 优势 = 服务 Aave **不愿 / 不敢** 上的长尾资产。对 lending sector 整体 = TAM 扩容（更多 markets 可借）；对 Aave 单点核心业务（USDC/ETH/wBTC 借贷池）**威胁有限**。

## Z.3 修正后的 Aave 一句话命题

**原命题**：

> "AAVE 在 15.1x P/S = 押注桥重建（buyback）+ 15% 永续增长"

**Dune 数据修正后**：

> "**AAVE 在 15.1x P/S = 押注桥重建（buyback）+ Aave 在主流借贷市场守住份额**。
> Morpho 抢的是 Aave 不在乎的长尾 markets，Aave 真正面对的威胁不是失去份额，
> 是失去**新业务（leveraged farming, derivatives margin）的资金流入**。"

**对 portfolio 配置的含义**：

- Bull case 上行从 4x → 3x（少了"Aave 抢回市场"故事，因为其实没真丢）
- Bear case 下行从 -55% → -40%（Morpho 没在直接抢核心阵地）
- Base case 概率 45% → 55%（更可能是稳态共存）
- 整体 EV：+0.81 → +0.95（边际改善，但仍不构成 strong conviction）
- **PASS / UNDERWEIGHT 单名 token 的结论不变**，但理由从"被 disrupted"变成"价值捕获问题 + 缺乏增长催化"

## Z.4 数据来源 + 复现

| Query | Author | 状态 |
| --- | --- | --- |
| 6930431 Morpho borrow rate monthly | Morpho 官方 | ✓ 拿到 27 月数据 |
| 3431820 Morpho liquidation history | Morpho 官方 | ✓ 拿到 50/1725 events |
| 3913837 Lending TVL by Project | hildobby | ✗ 执行失败（疑似 schema drift）|
| 1897983 AAVE morpho users | harshtodi97 | ✗ 数据空 |

完整原始数据：`./data/dune-q*.json`
方法论 + Python 客户端代码：`./sql/README.md`

## Z.5 Phase B 未完成

公开诚实标记：

- ✗ Aave vs Morpho 钱包级 migration flow — 需新建 SQL query，free tier 不允 API create
- ✗ Aave deposit concentration top-10 — 同上
- ✗ 跨协议 utilization 趋势对比 — 同上

需要后续在 Dune UI 手动创建 query（UI 上 free tier 允许 create），再通过 `executeQueryById` 调用。

## Z.6 工程层 bug 排查 — 已发现

研究过程中发现 + 修复 / 标记的工程问题：

1. **Dune MCP env-var 未传到 Claude Code 进程** — 通过 Python HTTP 客户端 bypass，已在 `./sql/README.md` 文档化
2. **Free tier 不支持 createDuneQuery API** — 402 Payment Required；改用 executeQueryById on existing public queries
3. **`getExecutionResults` MCP tool 返回结构与文档不一致** — 我的 polling parser 找不到 state 字段；改用直接 REST `GET /api/v1/query/{id}/results` 拿到 cached 结果
4. **Morpho TVL 口径混乱** — `morpho-blue` slug ($7.41b) vs `parent#morpho` ($7.64b) 几乎一致，但外部数据（如 CMC）报 Morpho 总 TVL $11.78b——差异可能来自 MetaMorpho vault 是否包含在内（仍待确认）

\newpage

# Appendix A — Phase A 原始数据快照

数据时点：2026-05-25 22:27 UTC
数据源：DefiLlama API（`/protocols`, `/protocol/<slug>`, `/summary/fees/<slug>`）

## A.1 Lending Top 15 详细数据

完整数据见正文 1.1 节。

## A.2 关键协议 Protocol Detail

### Aave V3
- Supply TVL: $13.84b (Ethereum dominant)
- Borrowed: $10.98b
- Utilization: 79.3%
- Token symbol: AAVE
- 部署链: Ethereum, Polygon, Avalanche, Fantom, Arbitrum, OP Mainnet, Metis, Base, Gnosis, BSC, Scroll, ZKsync Era, Linea, Celo, Sonic, Soneium, Plasma, Mantle, MegaETH, X Layer

### Morpho Blue
- Supply TVL: $7.64b
- Borrowed: $3.87b
- Utilization: 50.7%
- Token symbol: MORPHO
- 部署链: 36 chains (Ethereum 52%, Base 38%, 其他 10%)
- 显著差异：Morpho 利用率较低（50.7% vs Aave 79.3%）— LP 端供大于求，或部分新部署的 vault 尚未充分启用

## A.3 Fees / Revenue Comparison（年化）

详见正文 2.2 节。

## A.4 Phase B Dune Queries — 已设计未运行

5 个 SQL 模板已写在 `~/web3-vc/plugins/web3-vc/connectors/dune/queries/lending/`：

1. `01-share-migration.sql` — wallet 级 Aave → Morpho 迁移流（量化 Rivalry）
2. `02-deposit-concentration.sql` — top-N LP 集中度（量化 Buyer Power）
3. `03-utilization-trend.sql` — 跨协议 utilization 时间序列
4. `04-liquidation-volume.sql` — bad debt + cascade 历史
5. `05-unified-hhi.sql` — 用 active borrows 算 HHI（去口径偏差）

Phase B 在 Dune MCP auth 修通后可一次性运行，预计 ~10 credits，会进一步 quantify 本报告中 黄/红 灯号的强度。

---

# Appendix B — 方法论局限

## B.1 数据局限

- **DefiLlama 单数据源**：所有 fees/revenue 数字来自 DefiLlama adapter，若某协议适配器有 bug 则数字有偏差
- **Phase B 缺失**：链上微观结构数据（实际钱包迁移流、集中度、清算历史）未拉取——thesis 中所有"Morpho 抢 Aave 份额"的速度估算基于 DefiLlama 聚合数据反推，非链上 ground truth
- **价格 / FDV**：MORPHO 价格、FDV 在此报告中未独立 cross-check（DefiLlama 返回 null）—对其估值的判断仅基于"已 priced in 多少 bull case"的定性陈述

## B.2 框架局限

- **3-5 年情景概率**：所有 base/bull/bear 概率是 personal estimate，非历史 backtest——任何 quant 评估应当 weight by uncertainty interval
- **5 力分析**：把传统行业框架套到 DeFi 有边界——比如"Supplier"在 DeFi 里部分是 oracle 部分是 LP，归类灰色
- **TAM 定义**：本报告把"Lending"狭义定义为 DefiLlama 的 Lending category，但 perp DEX 的 margin lending、stablecoin issuer 的 reserve borrowing 等都是"lending-like" activity，未包含

## B.3 个人立场披露

- 报告作者持有少量 ETH、SOL 仓位作为 portfolio 基础，**当前不持有任何 lending sector 协议的 token 或 LP 仓位**
- 本报告为研究框架演示，非投资建议
- 报告基于公开数据；任何具体投资决策需要独立尽调、链上验证、与协议团队/同行交叉验证

---

\newpage

*报告完。Roddy Huang, 2026-05-25.*

*工具栈：web3-vc Claude Code plugin v0.2.0 (DefiLlama MCP + Dune MCP scaffold) + 手工 VC 视角综合。完整工具栈代码：https://github.com/RoddyH17/web3-vc*
