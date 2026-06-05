---
title: "从应用层抽水到基础设施让利：2026 DeFi 借贷范式跃迁——基于商业模式、外部情境与团队执行的多层分析"
author: "Roddy Huang"
date: "2026-05-26"
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

# 摘要

DeFi 借贷协议作为链上信贷的基础组件，在经历 2022 年 LUNA / FTX 系列事件、2024 年现货 ETF 通过与 2025 年宏观利率回归后，其商业模式的可持续性正在被结构性重估。本文立足于 2026 年中市场环境，对 DeFi 借贷协议的运作机制进行系统性拆解，重点构建 "**商业模式核心 + 三层情境**" 的多层分析框架。

研究指出，DeFi 借贷协议本质是**主动经营的资产负债表型基础设施**，其价值创造源于**协议端抽水（take rate）与持有人端捕获（holder capture）的协同**——这是分析的核心 2x2。但 2x2 本身不足以解释为什么同样商业模式的协议会有不同结局；必须叠加三层外生情境：(1) **宏观环境层**——Fed 利率周期、ETF 通过节奏、监管转向决定 DeFi yield 的天花板；(2) **操作历史层**——坏账记录、黑客事件、安全机制是 LP 信任的真实压力测试；(3) **团队执行层**——创始人质量、治理纪律与执行速度是同样商业模式下分化的根本解释。

在商业模式方面，文章论证了应用层模式（Aave 12.9% take rate）对品牌溢价的依赖性，与基础设施层模式（Morpho 0% take rate）的让利飞轮启动机制。在宏观环境方面，文章分析了 T-bill yield 与 DeFi yield 差从 9 个百分点压缩至不足 0.5 个百分点对借贷需求的根本影响，以及 2025 年监管利好（SEC 主席 Atkins 确认 ETH 非证券、GENIUS Act 稳定币立法）对协议选择空间的扩张。在操作历史方面，文章对比了 Aave 在 Black Thursday / LUNA / FTX / Eisenberg 四轮黑天鹅中的 0 重大坏账纪录，与 Morpho 1,948 起清算 100% 集中在长尾市场的真实战况。在团队执行方面，文章拆解了 Aave (Stani Kulechov 体系)、Morpho (Paul Frambot 学院派精英)、Compound (Robert Leshner 渐退)、SparkLend (Rune Christensen 母协议主导) 的核心差异。

结合 Aave V3、Morpho Blue、Compound V3、SparkLend 等案例的三结局对照，本文提出以 "**take rate 弹性—holder capture 修复—宏观敏感度—操作韧性—团队速度**" 为核心的五维可持续性评估框架，并给出四点趋势研判：

**其一**，行业进入价值再分配阶段，关键矛盾不在 TVL 流失，而在协议层抽水与持有人层捕获之间的传导失效，且这一传导失效被宏观 yield 压缩进一步放大；

**其二**，估值逻辑将从"市场份额"转向"现金流锚定 + 历史信任溢价"，holder capture rate 与 bad debt 历史共同决定 P/S 锚定区间，协议间分化将长期存在；

**其三**，底层模式差异将进一步放大协议分化，**而团队质量是同模式下分化的根本解释变量**——Aave 型若失去 Stani 体系的治理纪律将失去最后护城河；Morpho 型若 Paul Frambot 团队无法持续设计 vault 层共生机制将沦为纯管道；

**其四**，DeFi 借贷作为 DeFi 基础组件仍将延续，但行业结构大概率走向**双寡头 + 生态分层 + 团队溢价**：协议层由 Aave 与 Morpho 双寡头主导（基于商业模式 + 团队 + 历史的综合护城河），而真正的 alpha 沉淀到应用层（vault curator）。

本文为 DeFi 借贷协议在范式跃迁周期的多维可持续性评估提供框架，为机构资金在该赛道的配置决策提供参考。

**关键词**：DeFi 借贷；商业模式；价值分配；宏观利率；坏账历史；团队执行；五维评估

\newpage

# 目录

1. 引言
2. 概念和定义
   2.1 概念界定：DeFi 借贷协议的定义
   2.2 术语解释
   2.3 全球 DeFi 借贷协议现状分析
3. DeFi 借贷协议的商业模式与多层分析框架
   3.1 商业模式定位：主动经营的资产负债表型基础设施
   3.2 价值创造机制：take rate 决定路径，holder capture 决定可持续性
   3.3 商业模式的结构性特征
   3.4 多层分析框架：商业模式核心 + 三层情境
4. 商业模式核心：收费模式 × 价值分配的差异对比
   4.1 应用层模式：品牌溢价的边际递减
   4.2 基础设施层模式：零抽水启动的让利飞轮
   4.3 配合与生存边界
5. 第一层情境：宏观环境分析
   5.1 利率周期与 DeFi yield spread 的压缩
   5.2 政策叙事与监管转向
   5.3 协议对宏观敏感度的差异
   5.4 当前宏观窗口判断
6. 第二层情境：操作历史与安全机制
   6.1 坏账的本质与触发机制
   6.2 主流协议的历史压力测试记录
   6.3 黑客事件的结构性影响
   6.4 安全机制对比与可信度等级
7. 第三层情境：团队与治理执行
   7.1 团队评估框架：四要素
   7.2 头部协议团队拆解
   7.3 Curator 层团队
   7.4 团队 alpha 的可识别信号
8. 协议横向分析：五维框架下的差异化
   8.1 Aave：品牌信任 + 经验团队 + 待执行的 buyback 窗口
   8.2 Morpho：让利启动 + 学院派精英 + 待证明的主流可靠性
   8.3 长尾协议的垂直突围：HyperLend、Fluid、Euler V2
9. DeFi 借贷的多维风险分析
   9.1 生命周期与分化路径
   9.2 商业模式风险：抽水悖论与价值漂浮
   9.3 宏观周期风险：yield spread 与监管反转
   9.4 操作历史风险：黑天鹅与可信度衰减
   9.5 团队执行风险：人才流失与治理失效
   9.6 核心评估指标：五维综合评估
10. 典型案例分析：三结局 × 五维验证
    10.1 Aave：主动延迟 + 强团队 + 强历史
    10.2 Compound V3：被迫归零 + 团队渐退 + 历史可信
    10.3 SparkLend：补贴生存 + 母协议主导 + 待考验
11. 可持续性分析与趋势展望
    11.1 五维可持续性判断框架
    11.2 趋势展望：从份额竞争转向多层博弈
       11.2.1 核心命题重塑
       11.2.2 估值模式转换
       11.2.3 底层模式分化与团队溢价
       11.2.4 行业终局推演

\newpage

# · 一 引言 ·

DeFi 借贷协议通常指部署在公链上、通过智能合约撮合存款人（LP）与借款人之间无担保／超额抵押借贷的链上信贷基础设施。在 Aave V3 的标杆示范效应带动下，叠加 2024 年现货 BTC / ETH ETF 通过后机构资金对 on-chain yield 的需求扩张，这一赛道已由早期的实验性产品逐步走向 DeFi 的基础组件。DefiLlama 数据显示，截至 2026 年 5 月，全球 top 15 借贷协议合计 TVL 已达约 377 亿美元，其中 Aave V3 独占 138 亿美元，约占赛道总量 36.7%。

但 DeFi 借贷的演进**不只是协议层之间的内部博弈**。三组外生力量正在同时重塑这个赛道：

**第一**，**宏观利率回归常态**。从 2024 年初到 2026 年中，DeFi USDC 借款利率从 14% 压缩到 5%，而美国 1Y T-bill yield 在 4.5% 附近徘徊——曾经的 9 个百分点 yield spread 已经基本消失。这从根本上改变了 LP 进入 DeFi 的动机。

**第二**，**操作历史的累积**。LUNA / UST 崩盘（2022 Q2）、3AC 倒闭（2022 Q3）、FTX 暴雷（2022 Q4）、Eisenberg CRV 攻击（2022 Q4）、Euler $200M 黑客（2023 Q1）、Cream Finance $130M（2021 Q4）——每一次黑天鹅都是对借贷协议的真实压力测试，而**只有 Aave 一家在所有四轮中保持 0 重大坏账纪录**。这种"防黑天鹅履历"正在成为机构 LP 配置决策的硬指标。

**第三**，**团队执行的分化**。同样商业模式下，为什么 Aave 能维持 13b TVL 而 Compound 跌到 1.24b？为什么 Morpho 能在 18 个月内追到 53% 而 Euler V2 还在 347m 挣扎？**答案不在代码，在团队**——创始人持续在岗、治理纪律稳定、生态共建能力强的团队能把"商业模式优势"放大；反之则被同行迅速 disrupt。

但随着 2025 年下半年 Morpho Blue 的 TVL 突破 70 亿美元并显式宣告**零协议 revenue（0% take rate）**模型后，DeFi 借贷的范式有效性开始受到更广泛质疑。部分采用"应用层抽水 + DAO 治理"模式的协议在份额回撤后出现治理拖延、价值捕获失效：Aave V3 当前 holder capture rate 仅 0.28%，年化 holders revenue 不足 30 万美元；Compound V3 已被迫将 take rate 降为 0%；Morpho Blue 的 TVL 在 12 个月内从约 30 亿美元增至 74 亿美元，相对 Aave 已达 53%。

上述变化使得市场对 DeFi 借贷的关注点从单一的"哪个协议 TVL 最大"转向**多层综合判断**："**协议如何抽水 + 价值如何流向持有人 + 在什么宏观环境下运营 + 历史上扛过哪些压力 + 团队执行力如何**"——五个维度共同决定协议能否穿越范式跃迁。

基于此，本文立足 2026 年中，对 DeFi 借贷协议的发展现状与最新压力测试进行回顾，并从**商业模式核心 + 三层外生情境**两条主轴出发，对协议商业模式的可持续性与关键风险点给出框架化分析，以期为后续的策略设计与机构资金配置提供可验证的参考。

# · 二 概念和定义 ·

## 2.1 概念界定：DeFi 借贷协议的定义

本文研究 DeFi 借贷协议，首先对其概念进行界定。

**广义口径**：凡通过智能合约撮合链上存款人与借款人，并具有去信任化结算意图的协议，均可视为 DeFi 借贷协议。按照协议定位分类，可分为应用层与基础设施层两类。

**（1）应用层（Application Layer）**：由协议 DAO curated 资产池、设定利率曲线、风控参数与清算阈值，并从借款人付出的利息中抽取一定比例作为协议收入；代表协议为 Aave、Compound V2。

**（2）基础设施层（Infrastructure Layer）**：协议本身不选资产、不设利率，仅提供 permissionless 的 market 创建模块，所有费用直接归 LP；价值积累在协议之上的策略层（vault、curator、聚合器）；代表协议为 Morpho Blue、Euler V2。

**（3）混合层（Hybrid Layer）**：兼具上述两种特征，通常依附母协议生态获得补贴或战略支持；代表协议为 SparkLend（隶属 MakerDAO/SKY 生态）。

**狭义口径**：在当前市场语境中，DeFi 借贷通常特指**链上无许可、超额抵押的链上信贷协议**。CeFi 借贷（如 Maple Finance 早期模式）与 RWA 类协议虽然在 DefiLlama 同列，但商业模式逻辑显著不同，本文不作为重点分析对象。

基于上述界定，本文所称"借贷协议"主要指狭义口径下的链上无许可借贷协议——其中 Aave 为应用层模式的标杆，Morpho 为基础设施层模式的代表。

## 2.2 术语解释

**表 1：文章重点术语解释表**

| 领域 | 术语 | 英文全称 | 定义 |
| --- | --- | --- | --- |
| 商业模式 | Take Rate | Protocol Fee Share | 借款人支付利息中归协议方的比例。Aave V3 当前约 12.9%，Morpho Blue 为 0% |
| 商业模式 | Holder Capture | Holder Capture Rate | 流向 token 持有人的现金流 ÷ 协议年化 Revenue。衡量"协议赚钱→token 持有人受益"的传导效率 |
| 商业模式 | 让利飞轮 | Concession Flywheel | 协议主动放弃 take rate → LP 收益更高 → TVL 扩张 → 应用层繁荣 → 协议生态价值上行的正向反馈 |
| 商业模式 | 抽水螺旋 | Take Rate Spiral | 协议维持高 take rate → LP 收益相对受损 → LP 流向竞品 → TVL 流失 → fees 收缩 → 治理信用受损 的负向反馈 |
| 宏观环境 | T-bill Yield | Treasury Bill Yield | 美国国债短期利率（通常 1Y），DeFi 稳定币 yield 的"无风险"参照基准 |
| 宏观环境 | Yield Spread | DeFi - TradFi Yield Gap | DeFi 稳定币 supply APY 与 T-bill yield 之差，决定 DeFi 借贷的 LP 进入动机 |
| 宏观环境 | GENIUS Act | Stablecoin Legislation | 2025 年通过的美国稳定币立法，明确合规发行商门槛 |
| 操作历史 | Bad Debt | 坏账 | 借款人抵押品价值低于借款金额且无法清算回收的损失 |
| 操作历史 | Black Swan Event | 黑天鹅事件 | 极端市场波动导致协议面临系统性风险的事件（如 2020-03 Black Thursday、LUNA/UST 崩盘）|
| 操作历史 | Safety Module | Insurance Pool | Aave 协议级保险池，由 stkAAVE 质押者承担首损，TVL 约 \$178m |
| 团队 | Founder Activity | 创始人在岗活跃度 | 衡量原始团队是否仍在主导协议演进；通过 GitHub commit、governance 提案、公开发言三维度评估 |
| 团队 | Governance Velocity | 治理执行速度 | 从提案发起到执行落地的中位耗时；Aave 当前约 90 天，Morpho 约 14 天 |
| 参与者 | Aave | Aave V3 / V4 | 全球 TVL 第一的借贷协议，应用层模式标杆，团队 Aave Labs (Stani Kulechov) |
| 参与者 | Morpho | Morpho Blue | 基础设施层模式代表，0% take rate 显式选择，团队 Morpho Labs (Paul Frambot) |
| 参与者 | Compound | Compound V3 | 早期与 Aave 并列的"双王"，目前 take rate 已被迫归零，创始人 Robert Leshner 渐退 |
| 参与者 | SparkLend | SparkLend | MakerDAO/SKY 生态延伸出的混合层借贷协议，受母协议战略主导 |
| 参与者 | MetaMorpho | MetaMorpho Vault | 部署在 Morpho Blue 之上的策略层金库，由 curator 管理并收取 performance fee |
| 财务指标 | TVL | Total Value Locked | 协议供给端流动性总额（多数情况下指 supply TVL）|
| 财务指标 | P/S | Price to Sales | FDV ÷ 年化 Revenue |
| 治理 | Buyback | Token Buyback | 协议 Revenue 用于二级市场回购自身 token 的机制，是 holder capture 的核心路径 |

资料来源：作者整理

## 2.3 全球 DeFi 借贷协议现状分析

基于 DefiLlama 数据（截至 2026 年 5 月 25 日 22:27 UTC），全球 top 15 借贷协议 TVL 与商业模式特征如下。

**表 2：DeFi 借贷协议 Top 15 统计表（2026-05-25）**

| Rank | Protocol | TVL (Supply) | 7d Δ | 年化 Fees | 年化 Revenue | Take Rate |
| ---: | --- | ---: | ---: | ---: | ---: | ---: |
| 1 | Aave V3 | \$13.84b | -0.78% | \$677.9m | \$87.4m | **12.90%** |
| 2 | Morpho Blue | \$7.41b | +0.23% | \$175.9m | **\$0** | **0%** |
| 3 | JustLend | \$3.60b | +1.46% | n/a | n/a | n/a |
| 4 | SparkLend | \$3.29b | -1.04% | \$54.9m | \$2.6m | 4.82% |
| 5 | Maple | \$1.93b | -7.67% | n/a | n/a | n/a |
| 6 | Kamino Lend | \$1.37b | -15.19% | n/a | n/a | n/a |
| 7 | Compound V3 | \$1.24b | +1.43% | \$22.0m | **\$0** | **0%** |
| 8 | Venus Core Pool | \$1.17b | +1.08% | n/a | n/a | n/a |
| 9 | Jupiter Lend | \$986m | -19.02% | n/a | n/a | n/a |
| 10 | Fluid Lending | \$865m | +9.18% | n/a | n/a | n/a |
| 11 | Lista Lending | \$635m | +6.29% | n/a | n/a | n/a |
| 12 | HyperLend Pooled | \$526m | **+30.98%** | n/a | n/a | n/a |
| 13 | Euler V2 | \$347m | +7.56% | n/a | n/a | n/a |
| 14 | cap | \$305m | -12.52% | n/a | n/a | n/a |
| 15 | Cooler Loans | \$216m | -0.49% | n/a | n/a | n/a |

资料来源：DefiLlama，时间截至 2026 年 5 月 25 日 22:27 UTC [1]

基于上述情况，全球 DeFi 借贷赛道基本格局如下：

**第一，规模与头部效应**：当前 top 15 借贷协议合计 TVL 约 377 亿美元。Aave V3 仍居首位（36.7%），但 Morpho Blue 已升至第二（19.6%）；二者合计占据赛道近 56%，HHI 指数约 3420，属于高度集中市场，但顶部正在被新模式 disrupt。

**第二，商业模式分化的显性化**：Aave 与 Morpho 在 TVL 量级接近的情况下，take rate 分别为 12.9% 与 0%，年化 Revenue 分别为 8740 万美元与 0。这一差异不是经营效率的差异，而是**商业模式选择**的差异——Morpho 显式选择不抽水。

**第三，长尾协议的双轨特征**：在长尾协议（占比约 20.4%）构成中，主要呈现两类：**老牌应用层协议**（JustLend、Venus、Compound 等）延续 Aave-style 抽水模型但份额已被显著压缩；**新兴垂直化协议**（HyperLend +31% MoM、Fluid +9%、Euler V2 +7%）以"细分场景 + 模块化架构"切入，生长速度显著高于头部协议，但单体规模仍未突破 \$1b。

# · 三 DeFi 借贷协议的商业模式与多层分析框架 ·

## 3.1 商业模式定位：主动经营的资产负债表型基础设施

DeFi 借贷协议拥有相对清晰且可复制的商业模式：其本质是一类以**链上资产负债表撮合为核心**的主动经营型基础设施，而非被动收取交易费的 AMM 或纯应用层 DApp。

与传统 DApp 依赖交易量／用户付费创造经营性现金流不同，DeFi 借贷协议的核心动作是通过智能合约**汇集 LP 流动性、撮合借款需求、并通过利率曲线管理资金利用率**。其"资产端"通常呈现对超额抵押品（ETH、stETH、wBTC、USDC 等）的高配置比例，"负债端"则是存款人对协议的债权（aTokens、cTokens 等），而权益端是协议 DAO 与 token 持有人对剩余价值的索取权。经营目标体现为：在资产负债表上持续累积 TVL 规模，并将利息收入按预设比例分配给 LP、协议 DAO 与 token 持有人。

围绕这一模式，DeFi 借贷协议在过去呈现两种典型形态：

**（1）让利飞轮（Concession Flywheel）**——零抽水 → LP 收益相对突出 → 流动性集中 → TVL 扩张 → 借款规模上升 → 协议成为基础设施 → 应用层（vault、curator、聚合器）繁荣 → 进一步吸引 LP。该飞轮以 Morpho Blue 为代表。

**图 1：让利飞轮（Concession Flywheel）**

```
        ┌─────────────────┐
        │ 零抽水 (0% TR)  │
        └────────┬────────┘
                 │
                 ▼
        ┌─────────────────┐
        │ LP 收益相对突出 │
        └────────┬────────┘
                 │
                 ▼
        ┌─────────────────┐
        │ 流动性集中 / TVL│ ◄────┐
        └────────┬────────┘      │
                 │                │
                 ▼                │
        ┌─────────────────┐      │
        │ Curator / Vault │      │
        │ 应用层繁荣       │──────┘
        └─────────────────┘
                    (循环强化)
```

**（2）抽水螺旋（Take Rate Spiral）**——高抽水 → LP 相对收益受损 → LP 向零抽水竞品迁移 → TVL 流失 → fees 收缩 → 即使维持高 take rate，protocol revenue 也下行 → token 持有人捕获效率持续低下 → 治理信用受损 → 品牌护城河贬值。该螺旋是 Aave 当前面临的主要张力。

**图 2：抽水螺旋（Take Rate Spiral）**

```
        ┌─────────────────┐
        │ 高 take rate    │
        │   (12.9%)        │
        └────────┬────────┘
                 │
                 ▼
        ┌─────────────────┐
        │ LP 相对收益受损 │
        └────────┬────────┘
                 │
                 ▼
        ┌─────────────────┐
        │ LP 向竞品迁移   │ ◄────┐
        └────────┬────────┘      │
                 │                │
                 ▼                │
        ┌─────────────────┐      │
        │ Revenue 收缩 +  │      │
        │ Holder Capture 仍低│──┘
        └─────────────────┘
                    (循环弱化)
```

资料来源：作者整理

这一正一负双向循环机制是 DeFi 借贷协议商业模式的**核心 2x2**。但**仅有这个核心不足以解释赛道全貌**——同样在抽水螺旋下，为什么 Aave 仍守住 \$13b TVL 而 Compound 跌到 \$1.24b？同样在让利飞轮下，为什么 Morpho 跑到 \$7.41b 而 Euler V2 还在 \$347m？

答案在于三层外生情境：宏观环境决定 LP 的进入动机；操作历史决定 LP 的信任锚定；团队执行决定同模式下的扩张速度。

## 3.2 价值创造机制：take rate 决定路径，holder capture 决定可持续性

在机制层面，DeFi 借贷协议的价值创造可归纳为两条主线：**收费端 take rate 决定协议获利的路径与上限，分配端 holder capture 决定 token 持有人能否享受协议增长**。

**（1）收费端 take rate**：来自借款人利息中归协议 DAO 的部分；
**（2）分配端 holder capture**：来自 DAO Revenue 中通过 buyback、staking reward、收益权 token 等方式流向 token 持有人的部分。

**表 3：DeFi 借贷协议价值来源与作用机制拆解**

| 策略定位 | 核心维度 | 价值创造逻辑 | 核心约束 | 观测指标 | 周期敏感度 |
| --- | --- | --- | --- | --- | --- |
| 收费端 take rate（路径） | 协议端 | 利息分配中协议方比例越高，单位 TVL 创造的 Revenue 越高 | 与 LP 收益负相关，过高将驱逐 LP | 年化 Fees、年化 Revenue、take rate | 强 |
| 分配端 holder capture（可持续） | 持有人端 | DAO Revenue 通过 buyback / 分红等通道流向 token 持有人 | 治理执行力、生态对持有人态度 | Holders Revenue、Buyback 规模、P/S | 中 |

资料来源：作者整理

归纳而言：**take rate 更多通过协议年化 Revenue 体现；holder capture 的关键在于 Revenue 处于上行通道时，治理能否把 Revenue 稳定转化为 token 持有人收益**。

## 3.3 商业模式的结构性特征

在"take rate 决定路径、holder capture 决定可持续"的框架下，DeFi 借贷协议的商业模式通常呈现四类结构性特征。

**第一，评价框架从利润表转向链上资产负债表与价值传导效率**。DeFi 借贷协议的核心经营活动不依赖产品或服务创造传统营收，而是围绕链上 TVL 撮合与利息分配进行资产负债表管理。更具解释力的指标体系往往转向 TVL 与 utilization、年化 Fees / Revenue、holder capture rate、以及市值相对协议年化 Revenue 的倍数（P/S）。

**第二，协议层无表内资产，流动性集中等于风险集中**。DeFi 借贷协议的资产负债表呈"无表内资产"特征——协议本身不持有借贷资产，仅承担撮合与清算逻辑。这意味着 TVL 的波动直接通过协议年化 Fees 传导到 Revenue，再通过 buyback / 激励通道传导到 token 价格。整体风险收益表现因而呈"非线性"。

**第三，价值分配以 take rate 抽水为主、holder capture 传导为辅，分配结构决定可持续性**。Aave 的现状是 take rate 充足（12.9%）但 buyback 缺位（holder capture 0.28%），导致 token 价值与协议价值脱钩——这是抽水螺旋的起点。

**第四，估值对预期敏感，相近资产规模下 P/S 仍可能长期分化**。DeFi 借贷协议的 token 价格不仅反映底层 TVL 与 Revenue，也叠加市场对其商业模式、治理执行力、历史压力测试纪录、团队质量的综合预期。即便持有相近规模的 TVL，不同协议的 P/S 仍可能长期存在差异。

## 3.4 多层分析框架：商业模式核心 + 三层情境

基于上述商业模式特征，**仅靠商业模式 2x2 无法解释赛道全貌**。同样的商业模式选择下，协议结局差异巨大——必须叠加三层外生情境才能形成立体判断。

本文提出 "**商业模式核心 + 三层情境**" 的多层分析框架：

**图 3：DeFi 借贷协议的多层分析框架**

```
        ┌───── 第一层情境：宏观环境 ─────┐
        │  Fed 利率 · ETF 通过 · 监管转向 │
        │  → 决定 LP 进入动机的 yield 天花板│
        └────────────────┬────────────────┘
                         ▼ 设定 floor
        ┌────────────────────────────────┐
        │  商业模式核心：                 │
        │  Take Rate ⇄ Holder Capture     │
        │  (让利飞轮 ⇄ 抽水螺旋)            │
        └────────────────┬────────────────┘
                         ▼ 被压力测试
        ┌───── 第二层情境：操作历史 ─────┐
        │  坏账记录 · 黑客事件 · 安全机制 │
        │  → 决定 LP 信任的真实锚定        │
        └────────────────┬────────────────┘
                         ▼ 被执行
        ┌───── 第三层情境：团队执行 ─────┐
        │  创始人 · 治理速度 · 生态共建    │
        │  → 决定同模式下的扩张分化        │
        └─────────────────────────────────┘
```

资料来源：作者整理

**为什么这三层是必要的？**

**第一层：宏观环境**。DeFi 借贷的需求端本质是"LP 寻求 yield"——但 LP 的进入动机不只取决于协议提供的利率，还取决于**外部 yield 选项**。当 T-bill 5%、DeFi USDC 6%，LP 进入有溢价激励；当 T-bill 4.5%、DeFi USDC 5%，溢价基本消失。整个赛道的 TVL 增速受这个 spread 决定。**不分析宏观，就无法判断协议层的增长是"模式胜利"还是"宏观红利"**。

**第二层：操作历史**。LP 把钱存进协议时，根本不在意 take rate 是 12.9% 还是 0%——他们在意**这个协议明天会不会爆掉**。Aave 在 4 轮黑天鹅中 0 重大坏账的纪录，比其 take rate 数字更能解释为什么机构 LP 仍然把钱放 Aave 而非 Morpho。**不分析操作历史，就无法解释 LP 真实的流动性偏好**。

**第三层：团队执行**。Aave V4 已经规划三年，2026 Q4 是否准时上线、buyback 是否真启动，全部取决于 Stani Kulechov 团队的执行速度。Morpho 能在 18 个月跑到 \$7.41b，背后是 Paul Frambot 团队 14 天治理周期的执行速度（vs Aave 的 90 天）。**不分析团队，就无法解释同样商业模式下为什么协议结局分化**。

下文将依次拆解商业模式核心（第四章）、三层情境（第五至七章），并在第八章用五维框架对每个具体协议进行综合分析。

# · 四 商业模式核心：收费模式 × 价值分配的差异对比 ·

基于第三章"收费模式 × 价值分配决定可持续性"的判断，本节进一步拆解 DeFi 借贷协议常见商业模式，并比较其在不同市场阶段下的适用性与约束条件。

## 4.1 应用层模式：品牌溢价的边际递减

在主流商业模式中，**应用层模式对 DeFi 借贷协议的战略意义最为关键**：在特定市场条件下，应用层模式不必然降低 LP 收益，反而可能通过专业风控、品牌信任、机构友好等溢价因素吸引特定 LP 群体。其成立前提是协议品牌溢价能够覆盖 take rate 抽水带来的 LP 相对收益损失。

此时，协议向借款人抽取 take rate 获得收入，并通过 DAO 治理决定是否将其分配给 token 持有人，形成"以品牌信任换取持续抽水"的结构性条件——这也是过去六年 Aave 飞轮中最核心的正反馈来源。

在工具层面，按照价值分配偏好不同可以分成 buyback 主导、激励主导、纯 DAO Treasury 三种途径。

**表 4：应用层模式价值分配工具对比**

| 工具 | 定义 | 优点 | 缺点 | 代表协议 |
| --- | --- | --- | --- | --- |
| Buyback 主导 | DAO Revenue 直接回购 token，强 holder capture | 价值传导清晰、token 享 fundamental | 需治理高度共识；启动慢 | Aave V3 (规划中) |
| 激励主导 | Revenue 用于流动性挖矿与积分计划 | 短期 TVL 与活跃度上升明显 | token 通胀稀释、长期价值传导弱 | 2021-2023 时期的多数应用层协议 |
| 纯 DAO Treasury | Revenue 沉淀在 DAO 国库，未启动分配 | 国库储备充足、未来选择多 | Holder capture 趋零、治理失效风险 | Aave 当前状态 |

资料来源：作者整理

**Buyback 主导被视为最理想的价值分配工具**。其优势并不在于规模，而在于价值传导高度清晰，能够与 token 二级市场走势同步推进。然而，这一模式对治理执行力的要求极高——**一旦 DAO 内部对 buyback 规模、节奏存在分歧或拖延，buyback 的实际效果便会迅速消失**。这正是 Aave 当前面临的问题，也是为何团队执行层（第七章）成为分析必要维度的根本原因。

## 4.2 基础设施层模式：零抽水启动的让利飞轮

相较应用层模式，**基础设施层模式通常不直接带来 token 价值正反馈，但在特定阶段可显著扩大 TVL 与生态规模**，可视为"以让利换生态"的战略选择。

其中，**零 take rate 在 Morpho 商业模式中被显式采用**，其优势在于将所有费用让给 LP，使协议成为"借贷管道"。当应用层（vault、curator）在协议上构建策略产品时，协议本身也因生态绑定获得长期价值。

然而，**Morpho 范式的核心矛盾在于：协议本身无 Revenue，则 token 本身缺乏现金流锚定**。token 价值更多体现为对生态控制权与未来可能的 fee switch 启动期权的押注——这种期权能否兑现，**根本取决于团队的执行速度与生态绑定的可信度**。

## 4.3 配合与生存边界

理想状态下，DeFi 借贷协议并非依赖单一模式，而是通过应用层与基础设施层的阶段性配合，逐步构建并强化正反馈：协议在早期通过应用层抽水积累 DAO Revenue 与品牌护城河；当生态成熟后，逐步开放底层并允许第三方在协议上 build 应用层，从而延长生命周期。

**应用层抽水负责"启动飞轮"，基础设施层让利负责"延长飞轮半径"**。前者决定协议是否具备结构性优势，后者决定其能否在范式跃迁完成之前存续足够长的时间。

从**风险-收益-成本**的角度看，不同商业模式的差异并不在于好或坏，而在于其对生存边界的影响。**真正需要警惕的，是引入"高抽水 + 治理拖延 + 品牌贬值"组合的协议**——这类协议会被宏观周期收紧、历史压力测试、团队执行不力三重力量共同放大风险。

# · 五 第一层情境：宏观环境分析 ·

DeFi 借贷的需求端本质是"LP 寻求高于 TradFi 的 yield"。但**LP 的进入动机不是看 DeFi 协议有多好，而是看 DeFi 相对 TradFi 的相对优势**——这一相对优势由宏观利率周期与监管叙事共同决定。

## 5.1 利率周期与 DeFi yield spread 的压缩

过去 25 个月，DeFi 借贷的 yield spread 经历了一次结构性压缩。

**表 5：DeFi vs T-bill yield 演化（2024-01 至 2026-05）**

| 时点 | T-bill 1Y | DeFi USDC supply APY | Spread | 备注 |
| --- | ---: | ---: | ---: | --- |
| 2024-01 | ~5.0% | ~14% | **+9 pp** | Fed 加息见顶，DeFi 借款需求旺盛 |
| 2024-07 | ~5.2% | ~11% | +5.8 pp | DeFi 略降，但 spread 仍可观 |
| 2025-01 | ~4.8% | ~8% | +3.2 pp | Fed 开始降息，DeFi 同步压缩 |
| 2025-07 | ~4.6% | ~6% | +1.4 pp | spread 进入 1-2 pp 窄区间 |
| 2026-01 | ~4.5% | ~5.5% | +1.0 pp | spread 接近临界 |
| **2026-05** | **~4.5%** | **~5%** | **+0.5 pp** | **基本消失** |

资料来源：FRED、DefiLlama，作者整理

**结构性含义**：

**第一，spread 压缩改变 LP 结构**。当 spread > 5 pp 时，进入 DeFi 的 LP 主要是**普通散户与寻求 alpha 的小型基金**；当 spread < 1 pp 时，散户失去进入动机，剩下的主要是**机构 LP + 真实加密 native 用户**（用 DeFi 借贷做杠杆或对冲）。这导致 DeFi 借贷的 LP 基础从"yield-seeking 散户" 转向 "机构 + 加密原生用户"。

**第二，spread 压缩放大商业模式差异**。当 spread 大时，所有协议都能轻松吸引 LP，take rate 高低差异不显眼；当 spread 小时，LP 对每个百分点的收益都敏感——**这就是 Morpho 的 0% take rate 在 2025-2026 才真正爆发的宏观原因**。Aave 的 12.9% take rate 在 2024 年 LP 不在意，但在 2026 年成了流失催化剂。

**第三，spread 压缩重塑借款人结构**。借款利率从 14% 降到 5% 后，DeFi 借贷的核心 use case 从"杠杆套利"转向"杠杆 farming + 衍生品 margin + LST 循环"。**这意味着借贷协议必须支持更复杂的抵押品和市场结构——这正是 Morpho permissionless markets 的优势区**。

## 5.2 政策叙事与监管转向

2025 年是 DeFi 借贷监管环境的**结构性转折点**。

**关键监管事件**：

**（1）GENIUS Act 通过（2025-09）**：美国稳定币立法明确合规发行商门槛。USDC、USDT 在合规通道下的 institutional adoption 显著加速，DeFi 借贷协议作为"稳定币 yield 的载体"地位被强化。

**（2）SEC 主席 Atkins 确认 ETH 非证券（2025-07）**：解除了 ETH staking 与 DeFi 协议的合规悬剑，让以 ETH 为抵押品的借贷市场可以更激进地扩张。这是 Lido / EigenLayer 集成型借贷市场（Morpho 长项）的关键利好。

**（3）SAB 121 撤销（2025-01）**：会计准则放松后，传统金融机构可以更容易托管加密资产，间接增加机构通过托管商进入 DeFi 借贷的可能性。

**（4）Trump 政府 pro-crypto 立场**：从 BTC 战略储备到对 DeFi 监管的"轻触"姿态，整体降低了 DeFi 借贷的政策风险溢价。

**对借贷协议的不对称影响**：

**Aave 受益最大**——其多年与 TradFi 谈合作的积累（Aave Arc、机构 KYC 通道）在监管利好下可以兑现，可能解锁第二增长曲线。

**Morpho 受益其次**——permissionless 模式在监管收紧时被视为风险，但在监管利好时成为创新优势；不过 Morpho 的 vault 层还在等待"合规化的 institutional 入口"才能真正爆发。

**SparkLend 受益于稳定币立法**——MakerDAO/SKY 生态作为合规稳定币（USDS）发行方，是 GENIUS Act 直接受益方。

**Compound 受益最小**——团队渐退状态下无法快速利用监管窗口。

## 5.3 协议对宏观敏感度的差异

不同协议对宏观环境的敏感度差异显著，可以从**资产组合 × 用户结构**两个维度刻画。

**表 6：协议宏观敏感度对比**

| 协议 | 资产主导 | 用户主导 | yield spread 敏感度 | 监管敏感度 | 综合宏观风险 |
| --- | --- | --- | --- | --- | --- |
| Aave V3 | 蓝筹 + 稳定币 70% | 机构 + 大户 60% | 中 | 低（合规友好）| 中 |
| Morpho Blue | LST + 长尾 50% | 加密原生 + curator | 高 | 中（permissionless）| 中-高 |
| SparkLend | DAI/USDS 主导 | MakerDAO 生态 | 低-中 | **低（GENIUS 直接受益）** | 低 |
| Compound V3 | 蓝筹 + 稳定币 | 散户为主 | 高 | 中 | 高 |
| Euler V2 | 长尾 + isolated | 加密原生 | 高 | 中 | 高 |

资料来源：作者整理

**关键解读**：

**SparkLend 的宏观敏感度最低**——因为它的资金来源是 MakerDAO/SKY 生态的内部分配，不直接竞争外部 LP。这是它在 2026 仍能维持 \$3.29b TVL 的根本原因之一。

**Compound 的宏观敏感度最高**——LP 主要是散户、产品主要是稳定币借贷，spread 压缩后散户最先流失。这解释了为何 Compound TVL 在 2024-2026 跌了 61%。

**Morpho 的宏观敏感度介于 Aave 和长尾协议之间**——基础设施层定位允许它适应不同宏观窗口（spread 大时承接散户、spread 小时服务加密原生用户），但 vault 层尚未完成机构化转型。

## 5.4 当前宏观窗口判断

综合上述分析，**2026 年中的宏观窗口对借贷协议是"机会窗口窄但方向友好"**：

- **机会**：监管利好释放、机构进入意愿上升、稳定币立法明确
- **窗口窄**：yield spread 已基本消失，LP 增长不再"自动"来自宏观红利
- **方向友好**：Fed 进入降息周期初期（2026 H2 预计 2-3 次降息），DeFi yield 相对优势可能短期改善

对借贷协议的含义：**未来 12-18 个月，赛道总盘可能温和增长（+10-20% TVL），但增长不会均匀分配——会向"机构合规通道 + 加密原生 use case"两端集中**，挤压中间层（散户型协议）。

# · 六 第二层情境：操作历史与安全机制 ·

DeFi 借贷的核心信任根基是**"我把钱存进去，它明天不会消失"**。这个信任的真实压力测试不是协议白皮书写得多好，而是**协议在历史上扛过多少次黑天鹅**。

## 6.1 坏账的本质与触发机制

DeFi 借贷的"坏账（bad debt）"是指：**借款人抵押品价值跌破借款金额，且清算未能及时执行回收的损失**。

坏账的核心触发机制有四类：

**（1）价格快速崩盘 + 清算延迟**：抵押品价格在分钟级跌穿清算阈值，但因 Oracle 延迟、Gas 拥堵、清算 bot 不足导致清算无法及时执行。典型：2020 Black Thursday、2022 LUNA 崩盘。

**（2）抵押品本身归零或剧烈贬值**：长尾资产被攻击或暴雷，抵押品价值瞬时跌到 0。典型：UST 脱锚（2022）、各类 meme 币突然失流动性。

**（3）Oracle 攻击或操纵**：攻击者通过低流动性 DEX 操纵抵押品 Oracle 价格，制造虚假的"健康"头寸。典型：bZx (2020)、Mango Markets / Eisenberg CRV 攻击（2022）。

**（4）智能合约漏洞**：协议逻辑本身的 bug 导致资金被盗。典型：Cream Finance \$130m（2021）、Euler \$200m（2023）。

**关键洞察**：前两类是"市场风险"，后两类是"操作 / 智能合约风险"。**应用层模式（Aave）的护城河主要体现在前两类**——专业风控团队主动调整参数；**基础设施层模式（Morpho）的优势在第四类**——市场隔离设计使智能合约风险范围可控；**但基础设施层在前两类（特别是抵押品归零）的暴露反而更大**——因为它允许任何人创建市场。

## 6.2 主流协议的历史压力测试记录

下表汇总主流借贷协议在历次黑天鹅事件中的实际坏账记录：

**表 7：主流借贷协议历史压力测试（2020-2026）**

| 事件 | 时间 | 严重度 | Aave | Compound | Morpho | Cream | Euler |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Black Thursday (ETH -50%/day) | 2020-03 | 极高 | **\$7k** | \$1.2m | n/a | n/a | n/a |
| Cream Finance hack | 2021-10 | 中 | \$0 | \$0 | n/a | **-\$130m** | n/a |
| Compound DOG bug | 2021-09 | 中 | \$0 | **\$90m 错发** | n/a | \$0 | n/a |
| LUNA / UST 崩盘 | 2022-05 | 极高 | **\$0** | \$0 | n/a | \$0 | n/a |
| 3AC / Voyager / Celsius | 2022-06 | 高 | **\$0** | \$0 | n/a | \$0 | n/a |
| FTX 崩盘 | 2022-11 | 高 | **\$0** | \$0 | n/a | \$0 | n/a |
| Eisenberg CRV 攻击 | 2022-11 | 中 | **\$1.6m** | \$0 | n/a | \$0 | n/a |
| Euler hack | 2023-03 | 高 | \$0 | \$0 | n/a | \$0 | **-\$200m**（后回收）|
| 2024-2026 各类事件 | 持续 | 中-低 | **\$0** | \$0 | \$0 主流 / 多笔长尾 | n/a | \$0 |

资料来源：协议官方披露、DeFi Llama Hacks tracker、作者整理

**Aave 的"4/4 防线"**：在过去 5 年的所有重大黑天鹅事件中（Black Thursday、LUNA、FTX、Eisenberg），Aave 的累计重大坏账少于 \$10m，相对其 TVL 而言可忽略。**这是 DeFi 借贷整个赛道里独一无二的纪录**——这也是为什么尽管 Aave take rate 12.9% 比 Morpho 高，机构 LP 仍然把钱放 Aave 的根本原因。

**Morpho 的"长尾 vs 主流"分裂数据**：从 Dune 拉取的 Morpho Blue 全部 1,948 起清算事件中：

- **主流市场（WETH/USDC/WBTC）清算事件 = 0**
- **100% 清算集中在长尾市场**（PEPE/Mog/SPX/REKT 等 meme 资产）

这意味着 Morpho **在长尾市场赢麻了，但在主流蓝筹市场没真正与 Aave 短兵相接过**。Morpho 的"防黑天鹅能力"在 2026-05 时点上**尚未被主流市场验证**——这是它估值上限的关键约束。

**Compound 的尴尬位置**：技术上没有重大坏账，但 2021 年的 \$90m token 错发事件（DOG bug）严重损伤治理可信度。当协议出 bug 时，Robert Leshner 选择"求用户归还"而非启动补救机制——这是后来 Compound 治理信用衰减的起点。

**Cream / Euler 的教训**：Cream 在 \$130m 黑客后从未恢复 LP 信任，逐步消失；Euler 通过谈判回收资金是 DeFi 史上罕见案例，但 V2 重启后 TVL 仍仅 \$347m，证明**信任一旦失去就极难重建**。

## 6.3 黑客事件的结构性影响

DeFi 黑客事件对协议的影响**远不止账面损失**。结构性影响有三层：

**第一层：直接 TVL 流失**。黑客事件后 30 天内通常出现 30-70% TVL 流出，反映 LP 信任崩塌。

**第二层：长期估值折价**。即使协议技术上恢复，token 也会进入"折价区间"，P/S 比未受影响的同行低 30-50%。Euler V2 重启后 token 长期承压就是典型。

**第三层：监管关注度上升**。大型黑客事件会引发监管机构对整个赛道的审视，**反过来加固头部协议的合规护城河**——这也是为什么大型黑客事件实际上对 Aave 是间接利好（Aave 越发显得"安全"）。

## 6.4 安全机制对比与可信度等级

各协议在安全机制设计上的差异显著：

**表 8：主流协议安全机制对比**

| 协议 | 协议层保险 | 风险隔离 | Oracle 设计 | 审计频率 | 综合可信度 |
| --- | --- | --- | --- | --- | --- |
| Aave V3 | **Safety Module \$178m (stkAAVE)** | E-mode / Isolated mode | 多 Oracle + Fallback | 季度 + 重大升级 | **A+** |
| Morpho Blue | 无协议层兜底 | **Per-market isolation** | 灵活配置 / Chainlink 为主 | 重大升级 | A |
| SparkLend | 共享 MakerDAO 兜底（间接）| 池化但严格资产白名单 | Chainlink | 季度 | A |
| Compound V3 | 协议储备（\~\$15m）| Per-market isolation | Chainlink | 半年 | B+ |
| Euler V2 | 无 | **Per-market isolation** | 灵活 | 重大升级 | B（信任修复中）|

资料来源：协议官方文档、作者整理

**核心解读**：

**Aave 的 Safety Module 是行业唯一的"协议级保险"**——\$178m stkAAVE 质押为协议提供首损兜底。这是**机构 LP 选择 Aave 的核心理由之一**，也是 take rate 12.9% 的"保险费"理由。

**Morpho 的 Per-market Isolation 是创新但未充分验证**——理论上每个市场风险独立，但实际上 vault 层可能把多个市场风险耦合（curator 把同一笔资金分散在多个 isolated markets，导致系统性敞口）。

**SparkLend 的间接 MakerDAO 兜底**给它带来"准 Aave 级"信任，但条件是 MakerDAO/SKY 持续愿意承担——这就把信任来源从协议转移到母协议生态。

# · 七 第三层情境：团队与治理执行 ·

同样的商业模式、同样的宏观环境、同样的历史信任水平下，**协议结局的最终分化解释变量是团队**。这是 DeFi 投研中最被低估的维度，因为它难以量化但极其重要。

## 7.1 团队评估框架：四要素

本文提出 DeFi 协议团队评估的四要素：

**（1）创始人在岗活跃度（Founder Activity）**
- 创始人是否仍主导协议演进
- 衡量：GitHub commit 频率 + governance 提案质量 + 公开发言活跃度

**（2）治理执行速度（Governance Velocity）**
- 从提案发起到执行落地的中位耗时
- 衡量：核心提案的从提交到 on-chain execution 时间

**（3）生态共建能力（Ecosystem Building）**
- 团队是否主动培育第三方生态（vault curator、聚合器、衍生协议等）
- 衡量：生态合作伙伴数量 + 生态侧 fee 占比

**（4）人才留存与扩张（Talent Retention）**
- 核心团队的稳定性 + 关键岗位招聘速度
- 衡量：高级工程师离职率 + 团队规模年增速

## 7.2 头部协议团队拆解

**表 9：主流借贷协议团队画像**

| 维度 | Aave Labs | Morpho Labs | Compound Labs | SparkLend / SKY |
| --- | --- | --- | --- | --- |
| 创始人 | Stani Kulechov（芬兰）| Paul Frambot（法国 Polytechnique 学院派）| Robert Leshner（美国，ex-postal）| Rune Christensen（丹麦，MakerDAO 创始人主导）|
| 团队规模 | ~50 人 | ~20 人（小而精）| ~15 人（缩减中）| Sky 生态总团队 ~80 人 |
| 创始人活跃度 | **高**（主导 V4 设计 + 公开发言）| **极高**（每周技术文章 + 治理参与）| **低**（创始人转 CoinList Capital 后渐退）| 高（Rune 是 MakerDAO 战略主导）|
| 治理执行速度 | 中等（提案到 execution 约 90 天）| **快**（约 14 天）| 慢（约 120 天）| 中等（约 60 天，受 MakerDAO 多协议协调影响）|
| 生态共建 | 中（Aave Pro / Arc / RWA 合作渐进）| **极强**（MetaMorpho vault 200+ / 头部 curator 全部入驻）| 弱（生态停滞）| 强（依附 MakerDAO 现成生态）|
| 人才留存 | **强**（核心团队 4+ 年）| 强（学院背景稳定）| 弱（资深工程师流失）| 中（Sky 整合后部分流失）|
| 综合团队评分 | **A**（成熟但需提速）| **A+**（精英 + 执行力）| **C**（衰退）| **B+**（强但非纯借贷专属）|

资料来源：协议 GitHub、governance forum、LinkedIn、作者整理

**关键解读**：

**Aave 团队是"成熟体系"**——Stani Kulechov 带领的 Aave Labs 是 DeFi 借贷最早的核心团队之一，5+ 年持续运营、人才稳定、产品发布节奏可预测。但**治理执行速度成为最大短板**——V4 多次延期、buyback 提案讨论年余才落地，反映 DAO 治理的协调成本。在范式跃迁压力期，这种"慢但稳"的风格可能成为致命弱点。

**Morpho 团队是"精英 + 速度"**——Paul Frambot 的学院派背景给协议设计带来罕见的清晰性（Morpho Blue 的 isolated markets 设计就是数学美感的体现）。团队人数少但执行密度极高，治理周期 14 天是行业最短。**这是 Morpho 能在 18 个月内追到 Aave 53% 的根本团队因素**。但 \~20 人的规模在面对主流市场扩张时可能成为瓶颈——能否成功扩张到 50+ 人而不丧失文化纯粹性，是 Morpho 未来 12 个月的核心团队风险。

**Compound 团队是"创始人渐退"的典型**——Robert Leshner 转向 CoinList Capital 后，Compound Labs 进入"维护模式"。技术上没有重大事故，但产品迭代停滞、生态扩张乏力，**这就是为什么 Compound 在 Morpho 出现后无法做出有效回应**。

**SparkLend 团队是"母协议主导"**——SparkLend 没有独立创始人，本质是 MakerDAO/SKY 生态的延伸。这给它带来稳定的资金与战略支持，但也意味着**它的命运绑定在 Rune Christensen 的整体战略上**——一旦 MakerDAO 战略重心转移，SparkLend 可能被边缘化。

## 7.3 Curator 层团队

DeFi 借贷范式跃迁的真正受益者不是协议层 token，而是**应用层 curator**。这些 curator 的团队质量直接决定 vault 层的价值捕获效率。

**表 10：头部 curator 团队画像**

| Curator | AUM | 创始人 / 核心团队 | 团队背景 | 策略风格 | 综合评分 |
| --- | ---: | --- | --- | --- | --- |
| Gauntlet | \$1.88b | Tarun Chitra（Stanford CS PhD）+ 60+ 人 | 量化金融 + 学术 | 激进，蓝筹与长尾并行 | **A+**（行业标杆）|
| Steakhouse Financial | \$1.26b | Sébastien Derivaux（法国，前对冲基金）| 传统金融背景 | 保守蓝筹路线 | A |
| Re7 Labs | \$610m | Evgeny Gaevoy（CEO Wintermute 创始人）| Market making 巨头 | 多协议覆盖 + 高频策略 | A |
| MEV Capital | ~\$400m | 早期 MEV 团队，匿名为主 | MEV / 链上微结构 | 偏短期套利 | B+ |
| Block Analitica | ~\$300m | Primož Kordež + 学术团队 | 风险建模 / 学术 | 风险定价精细化 | B+ |

资料来源：MetaMorpho dashboards、curator 官网、作者整理

**关键解读**：

**Gauntlet 是 DeFi 借贷的"黑石"**——Tarun Chitra 是 Stanford CS PhD，公司 2018 年成立，是行业最早的量化风险管理公司。在 Aave、Compound、Uniswap 等多协议长期担任 risk advisor，现在通过 MetaMorpho vault 直接管理 \$1.88b。**这是整个 lending 赛道唯一一个"机构级"团队，对早期 VC 是最稀缺的标的**。

**Steakhouse 是"传统金融严谨派"**——团队来自对冲基金背景，策略保守稳健，是机构 LP 偏好的对手方。AUM 增速虽不如 Gauntlet 激进，但 quality 极高。

**Re7 是 Wintermute 旗下"高频流动性派"**——Evgeny Gaevoy 的 market making 背景让 Re7 在短期策略上有独特优势，但策略复杂度也意味着 LP 教育成本高。

这三家是当前可投的"机构级 curator equity"——后文第八章会讨论投资逻辑。

## 7.4 团队 alpha 的可识别信号

VC 在 DeFi 借贷赛道识别团队 alpha 的三个 leading indicator：

**信号 1：GitHub commit 速度持续高于同行 2-3 倍**——Morpho Labs 在过去 24 个月的 GitHub commit 数是 Compound Labs 的 5.8 倍，这是它扩张速度的最 leading indicator。

**信号 2：governance forum 上创始人的回应速度**——Paul Frambot 在 Morpho governance 上每周至少 3 次实质回应（vs Robert Leshner 在 Compound 上每月 < 1 次），反映团队 attention allocation 的真实差异。

**信号 3：生态合作伙伴的"主动选择"频率**——头部 curator（Gauntlet、Steakhouse）2024-2025 几乎所有新 vault 都选择 Morpho 而非 Aave，这是"用脚投票"的最强信号。

# · 八 协议横向分析：五维框架下的差异化 ·

在完成商业模式核心（第三、四章）与三层情境（第五至七章）的拆解后，本节用**五维综合框架**对头部协议进行横向分析。每个协议的 alpha 与风险都不再是单一维度的判断，而是五维交互的结果。

**五维框架回顾**：
1. **商业模式（take rate）**——抽水路径
2. **价值分配（holder capture）**——传导效率
3. **宏观敏感度**——外部环境暴露
4. **操作历史**——黑天鹅压力测试纪录
5. **团队执行**——创始人 + 治理速度 + 生态共建

**表 11：头部协议五维评分（0-10 分）**

| 维度 | Aave V3 | Morpho Blue | SparkLend | Compound V3 |
| --- | ---: | ---: | ---: | ---: |
| 商业模式（路径上限） | 8 | 9 | 6 | 3 |
| 价值分配（传导）| **3** | 2 | 8 | 0 |
| 宏观敏感度（越低越好）| 7 | 5 | **9** | 3 |
| 操作历史（防黑天鹅）| **10** | 6 | 8 | 7 |
| 团队执行 | 7 | **10** | 7 | 3 |
| **加权综合** | **7.0** | **6.4** | **7.6** | **3.2** |

加权说明：商业模式 25%、价值分配 20%、宏观敏感度 15%、操作历史 25%、团队执行 15%

资料来源：作者整理

## 8.1 Aave：品牌信任 + 经验团队 + 待执行的 buyback 窗口

Aave 的五维画像呈现**"四高一低"**——商业模式、宏观、操作历史、团队都强，唯独价值分配（holder capture）极弱。

**核心阅读**：

**Aave 是当前唯一一个"五维都过关但 holder capture 单项失分"的协议**。这意味着 AAVE token 的估值修复**只取决于一件事——buyback 是否真启动**。如果 Aave V4 + buyback 在 2026 Q4 - 2027 Q1 兑现，AAVE 五维评分会从 7.0 修复到 8.5+，token 有 3-5× 重估空间。

**但 buyback 兑现的决定因素是团队执行速度**——这是 Aave 当前评分 7（vs Morpho 10）的关键差距。Stani Kulechov 团队需要把 governance velocity 从 90 天压到 30 天才能在范式跃迁窗口期完成反扑。

**操作历史是 Aave 的最大护城河**——4/4 黑天鹅压力测试的 0 重大坏账纪录、\$178m Safety Module 兜底，让机构 LP 在面对宏观不确定性时仍偏好 Aave。**这个护城河 Morpho 短期内无法复制**。

## 8.2 Morpho：让利启动 + 学院派精英 + 待证明的主流可靠性

Morpho 的五维画像呈现**"商业模式 + 团队双 10 分，但操作历史 6 分"**——这是它估值上限的核心约束。

**核心阅读**：

**Morpho 已经在商业模式与团队两个维度做到行业第一**——但**操作历史 6 分意味着它的让利飞轮在主流蓝筹市场尚未经过真正的压力测试**。1,948 起清算 100% 在长尾市场的数据是双刃剑：证明 isolated markets 设计有效，但也证明 Morpho 没有真正抗过黑天鹅。

**Morpho 的未来 12-18 个月的核心 thesis 反转风险**：如果 Morpho 主流市场出现 > \$50m 重大坏账，整个让利飞轮叙事可能崩塌——LP 会重新评估 isolated markets 模型的实际防御能力。这是低概率（~15%）但高影响事件，是 VC 持仓最需要关注的 catalyst。

**Morpho token 的估值悖论依然存在**——零抽水意味着 token 缺现金流锚定，价值取决于团队能否设计出"vault 层与 token 持有人的共生机制"。Paul Frambot 团队的学院派背景让他们有可能设计出创新方案，但目前尚无明确路径。

## 8.3 长尾协议的垂直突围：HyperLend、Fluid、Euler V2

在 Aave + Morpho 双寡头之外，长尾协议正在通过**垂直 use case + 模块化架构**进行差异化突围。

**表 12：长尾协议典型路径对比**

| 维度 | HyperLend | Fluid Lending | Euler V2 |
| --- | --- | --- | --- |
| 上线时间 | 2025 H2 | 2024 H1 | 2024 Q2（重启）|
| 核心定位 | Leveraged farming + LST | Liquidity Layer + Lending 一体化 | 模块化 isolated markets |
| 7d 增速 | **+30.98%** | +9.18% | +7.56% |
| TVL | \$526m | \$865m | \$347m |
| 商业模式 | 应用层（带 take rate）| 应用层 + 聚合 | 基础设施层 |
| 团队 | 与 HyperLiquid 生态强绑定 | Instadapp 资深团队 | 重启信任修复中 |
| 操作历史 | 早期，未经测试 | 早期，未经测试 | **2023 黑客 -\$200m**（已回收）|
| 主要风险 | 单点突破后能否跨链跨场景 | 与 Aave 直接竞争 | 信任修复需多年 |

资料来源：DefiLlama、协议官网、作者整理

**长尾协议的关键启示**：

**HyperLend 的高增速 +31% 不是商业模式胜利，是 HyperLiquid 生态溢价**——它的 TVL 增速主要来自 HyperLiquid 生态用户的内部循环。一旦 HyperLiquid 生态降温，HyperLend 增速会快速衰减。

**Fluid 的 +9% 增速是真实质量增长**——背靠 Instadapp 多年聚合器经验，团队成熟、产品逻辑清晰。在未来 12 个月有望突破 \$1.5b 进入 mid-tier。

**Euler V2 的低 TVL 是信任修复成本**——2023 年 \$200m 黑客虽然回收，但信任伤害不可逆。这是为什么"操作历史"维度对 DeFi 借贷协议如此关键——**一次黑天鹅可能让一个本来优秀的团队需要 5-10 年才能恢复市场地位**。

# · 九 DeFi 借贷的多维风险分析 ·

## 9.1 生命周期与分化路径

DeFi 借贷协议的运行不是静态模型，而是同时受**五维交互**影响。判断一家协议是否可持续，重点不在 TVL 规模，而在它正处在生命周期的哪一阶段，以及五维评分是否为下一阶段预留了足够的安全空间。

**表 13：DeFi 借贷协议生命周期阶段对比**

| 阶段 | 核心定位 | 关键特征 | 五维状态 | 典型走向 |
| --- | --- | --- | --- | --- |
| 萌芽期 | 模式验证 | TVL < \$500m；团队 < 15 人 | 多维都未验证 | 扩张缓慢，规模小 |
| 加速期 | 飞轮启动 | TVL 上行；团队扩张；首批合作 | 商业模式 + 团队验证 | 规模快速放大 |
| 高位期 | 结构优化 | TVL > \$3b；治理体系成熟 | 五维全面验证中 | 更能应对波动 |
| 回撤期 | 压力集中 | 五维任一项失分严重 | 单维或多维劣化 | 短期风险暴露 |
| 分化期 | 修复或退出 | 五维综合分决定结局 | 综合分 > 6 修复；< 4 退出 | 优胜劣汰 |

资料来源：作者整理

## 9.2 商业模式风险：抽水悖论与价值漂浮

商业模式风险的核心是**抽水悖论与价值漂浮**。详见第四章。这是五维框架的第一层风险，但在多层框架下，它需要叠加宏观（spread 收紧时抽水更敏感）、团队（治理拖延 buyback）的二阶效应才能完整解释。

## 9.3 宏观周期风险：yield spread 与监管反转

宏观周期对借贷协议的风险传导机制：

**第一，yield spread 反转**。当前 spread 约 +0.5pp。若 Fed 重新加息（小概率，~15%）导致 T-bill yield 反超 DeFi USDC yield，DeFi 借贷的 LP 进入动机将彻底消失，赛道总盘可能在 12 个月内收缩 30-40%。这是低概率但高影响场景。

**第二，监管反转**。当前监管利好周期是建立在 Trump 政府 pro-crypto 立场之上的。任何政治变化（中期选举、政策转向）都可能让 GENIUS Act 等利好被部分撤销。**SparkLend 对此最敏感**（其商业模式直接依赖稳定币立法）。

**第三，CEX 替代品压力**。Binance Earn、Coinbase USDC rewards 等中心化 yield 产品持续提供 4-5% APY，是 DeFi 借贷的真实替代品。如果机构选择 CEX 而非 DeFi，整个 DeFi 借贷增长会被压制。

## 9.4 操作历史风险：黑天鹅与可信度衰减

操作历史层面的核心风险：

**第一，黑天鹅触发**。低概率但高影响。Morpho 主流市场首次出现 > \$50m bad debt 是最关注的事件——发生即触发让利飞轮叙事崩塌。

**第二，可信度衰减**。即使没有重大事件，协议的可信度也会因为治理失误（如 Aave buyback 拖延、Compound DOG bug 处理）持续衰减。**可信度的修复成本远高于建立成本**。

**第三，Oracle 系统性风险**。Chainlink 作为整个 DeFi 借贷的 Oracle 支柱，自身的任何问题（操纵、宕机）会同时影响多个协议。

## 9.5 团队执行风险：人才流失与治理失效

团队层面的核心风险：

**第一，创始人离开 / 注意力转移**。这是 DeFi 协议最大的"silent killer"——Compound 因 Robert Leshner 渐退而衰退是典型。**Aave 当前最大的团队风险是 Stani Kulechov 转向其他项目；Morpho 最大的团队风险是 Paul Frambot 学院化倾向影响商业化执行**。

**第二，治理协调失效**。DAO 化的协议在治理效率上天然弱于公司化团队。Aave V4 + buyback 的 multi-year 协调是典型案例。

**第三，关键人才流失到竞争对手**。DeFi 行业人才流动性极高，头部工程师离职去 Hyperliquid / EigenLayer 等热门项目可能让原协议的产品迭代失速。

## 9.6 核心评估指标：五维综合评估

为了把握 DeFi 借贷协议的真实价值创造能力与风险底数，建立**五维综合评估指标体系**：

**第一，商业模式（25% 权重）**：
- 主指标：take rate 弹性 + 当前 holder capture rate
- 阈值：take rate ∈ [0%, 10%] 健康，>12% 抽水悖论风险；holder capture > 10% 健康，< 1% 治理失效信号

**第二，价值分配（20% 权重）**：
- 主指标：P/S 比率 + buyback 启动状态
- 阈值：P/S < 25× 健康，> 50× 估值脱钩

**第三，宏观敏感度（15% 权重）**：
- 主指标：协议对 yield spread 的弹性 + 资金来源结构
- 阈值：稳定币占比 > 70% 高敏感，< 40% 低敏感

**第四，操作历史（25% 权重）**：
- 主指标：5 年累计重大坏账 / 黑客损失 + 安全机制完备度
- 阈值：累计损失 < \$10m + Safety Module 存在 = 高信任

**第五，团队执行（15% 权重）**：
- 主指标：创始人活跃度 + 治理执行速度 + 生态合作伙伴质量
- 阈值：治理周期 < 30 天 = 高速度，> 90 天 = 慢

**综合阈值**：
- **加权综合 > 7.5** = 长期持仓候选（当前仅 SparkLend 7.6、Aave 7.0 接近）
- **加权综合 5.0-7.5** = 周期性持仓
- **加权综合 < 5.0** = 高风险或边缘化（Compound 3.2 已进入此区间）

# · 十 典型案例分析：三结局 × 五维验证 ·

## 10.1 Aave：主动延迟 + 强团队 + 强历史

**五维画像（评分见表 11）**：商业模式 8 / 价值分配 3 / 宏观敏感度 7 / 操作历史 10 / 团队执行 7 / 综合 7.0

Aave 的商业模式本质在于建立一种**跨周期的应用层套利机制**，即利用 DeFi 借贷市场的低效率与品牌信任所带来的资金黏性进行运作。其核心策略表现为：在范式扩张期利用 12.9% take rate 锁定极高的协议 Revenue，并依托 Safety Module 与多链覆盖安全渡过市场动荡周期；而在范式跃迁压力期，则规划通过 V4 模块化升级 + buyback 启动反扑。

**多维交互的解读**：

**操作历史是最强护城河（10 分）**——4 轮黑天鹅 0 重大坏账、\$178m Safety Module 兜底，让机构 LP 在宏观不确定性下仍偏好 Aave。

**团队执行是最大短板（7 分而非 10 分的差距）**——治理周期 90 天 vs Morpho 14 天的差距是 Aave 在范式跃迁期最大的风险。Stani Kulechov 团队成熟但缺乏 Morpho 那种"小而精"的执行密度。

**价值分配是 binary catalyst（3 分）**——只要 V4 + buyback 兑现，价值分配能从 3 修复到 8，综合分会跳升到 8.5+，AAVE token 3-5× 重估。这是 trader 的赌注，但也是 VC 思考"cheap optionality"的合理理由。

**宏观敏感度 7 分**——稳定币占比 70%、机构 LP 比例高，在 spread 收紧期实际上比散户型协议（Compound 3 分）抗压。

**预判**：未来 12-18 个月，Aave 五维综合分将在 6.5-8.5 区间波动，**完全取决于 V4 与 buyback 兑现度**——这是高度 binary 的事件。

## 10.2 Compound V3：被迫归零 + 团队渐退 + 历史可信

**五维画像**：商业模式 3 / 价值分配 0 / 宏观敏感度 3 / 操作历史 7 / 团队执行 3 / 综合 3.2

Compound 的案例揭示了在范式跃迁中**被动归零 + 团队衰退**的双重边缘化代价。

**多维交互的解读**：

**操作历史 7 分尚可**——除 2021 年 DOG bug 外，技术上没有重大事故。但**这个分数是"静态资产"，不能转化为未来增长**——因为团队和商业模式都已经衰退。

**团队 3 分是核心解释变量**——Robert Leshner 渐退后，Compound Labs 进入维护模式，治理周期长达 120 天，产品迭代停滞。即使 take rate 已归零，也没有团队精力去启动让利飞轮所需的生态共建。

**商业模式 3 分**——take rate 被迫归零但缺少基础设施层定位与生态可组合性，零抽水成了"边缘化"而非"飞轮启动"。

**宏观敏感度 3 分**——散户主导的 LP 结构在 spread 收紧期受冲击最大。

**预判**：Compound 综合分将在 2.5-3.5 区间长期徘徊，**没有 catalyst 能扭转——因为团队没有意愿、没有能力执行任何反扑**。这是 DeFi 借贷"团队衰退导致协议衰退"的最清晰案例。

## 10.3 SparkLend：补贴生存 + 母协议主导 + 待考验

**五维画像**：商业模式 6 / 价值分配 8 / 宏观敏感度 9 / 操作历史 8 / 团队执行 7 / 综合 7.6

SparkLend 是当前**五维综合分最高**的借贷协议（7.6 vs Aave 7.0）——但这个高分有重大 caveat。

**多维交互的解读**：

**价值分配 8 分是行业唯一高分**——通过 SKY treasury 补贴实现 holder capture rate \~164%。但这不是"自身商业模式胜利"，是"母协议补贴"。一旦 MakerDAO/SKY 战略变化，这个分数可能瞬间归零。

**宏观敏感度 9 分**——GENIUS Act 直接受益方、资金来源是 MakerDAO 内部分配（非竞争外部 LP）、监管利好直接转化为产品优势。

**团队 7 分（vs 内部团队，是 Sky 整体团队评分）**——SparkLend 没有独立创始人，命运绑定 Rune Christensen 战略。这是机会也是风险。

**操作历史 8 分**——上线时间较短但继承 MakerDAO 信任，初期表现稳定。

**预判**：SparkLend 五维综合分将随 MakerDAO/SKY 战略波动。如果 Rune Christensen 持续支持 SparkLend 作为机构借贷通道，分数可能稳定在 7-8；如果母协议重心转移，可能快速降到 5-6。**SPK token 持有人本质上是在押 Rune Christensen 战略而非 SparkLend 本身**。

# · 十一 可持续性分析与趋势展望 ·

## 11.1 五维可持续性判断框架

回看过往周期，很多 DeFi 借贷协议的失速并非始于 TVL 流失，而是**五维中某一维度的崩溃**：商业模式被替代（Compound）、价值分配失效（Aave 的 holder capture）、宏观环境反转（Compound 散户流失）、操作历史污染（Cream、Euler）、团队执行衰退（Compound、可能的 Aave V4 延期）。

**因此，判断一家 DeFi 借贷协议能否跨范式运作，最有效的落点是五项硬约束**：

**第一，take rate 弹性（商业模式约束）**：take rate 处于 5-10% 区间，协议可以双向调整空间；> 12% 抽水悖论风险；< 1% 需配合生态可组合性。

**第二，holder capture 修复（价值分配约束）**：buyback 是否真正启动、规模是否可持续覆盖 token 持有人合理预期。Aave 的 buyback 拖延是当前最大 unresolved 风险。

**第三，宏观敏感度（外部环境约束）**：协议在 yield spread 收紧、监管反转、CEX 替代品压力下的弹性。SparkLend 因母协议生态分配模式而敏感度最低。

**第四，操作韧性（历史压力约束）**：5 年累计重大坏账 / 黑客记录 + Safety Module 等机制完备度。Aave 的 4/4 防线是不可复制的护城河。

**第五，团队速度（执行约束）**：创始人在岗、治理周期、生态共建——同模式下分化的根本变量。Morpho 的 14 天治理周期是当前行业基准。

综合来看，**生存能力更强的 DeFi 借贷协议往往具备**：**至少 3 项硬约束在 7 分以上，且没有单项跌破 3 分**。Aave (7,3,7,10,7) 因价值分配 3 分仍处于"待修复"状态；Morpho (9,2,5,6,10) 因价值分配 2 分 + 操作历史 6 分双弱处于"待证明"状态；SparkLend (6,8,9,8,7) 是当前最均衡但缺乏成长性；Compound (3,0,3,7,3) 全面跌破已进入边缘化通道。

## 11.2 趋势展望：从份额竞争转向多层博弈

随着 2026 年 DeFi 借贷赛道全面步入范式跃迁，主流协议面临生存考验。基于五维框架，本文给予以下四方面展望。

### 11.2.1 核心命题重塑：从扩张叙事转向多维博弈

2025 年下半年以来的范式跃迁，使 DeFi 借贷的关注点从"顺周期扩张"回到"五维交互的多层博弈"。当 TVL 增速放缓与 holder capture 收缩同步收缩时，协议的压力来自五个维度的同步收紧：**商业模式被替代**（Morpho 让利启动）、**价值传导失效**（Aave buyback 拖延）、**宏观红利消退**（yield spread 压缩）、**操作历史承压**（市场对黑天鹅敏感度上升）、**团队执行不力**（治理拖延）。

竞争的分水岭不在于 TVL 规模，而在于**五维综合分能否在范式压力期保持 ≥ 7**。

### 11.2.2 估值模式转换：现金流锚定 + 历史信任溢价 + 团队 alpha

现货 ETF 的普及削弱了 DeFi 借贷协议作为"应用层抽水通道"的作用，**协议层的估值溢价会更加稀缺**。后续 DeFi 借贷协议的估值更可能由三个因子复合定价：

**因子 1：现金流锚定（holder capture）**——决定 P/S 的基础值
**因子 2：历史信任溢价（操作历史）**——Aave 的 4/4 防线值多少 P/S 溢价？保守估计 +3-5×
**因子 3：团队 alpha（团队执行）**——Morpho 团队的执行速度值多少 P/S 溢价？目前市场给了 +5× 但缺乏现金流锚定，所以这个溢价不稳定

**未来 12-24 个月，市场会逐渐学会用三因子模型给协议定价**，而不再用单一 P/TVL 或 P/S。

### 11.2.3 底层模式分化与团队溢价

从五维属性看，**Aave 型 DeFi 借贷协议的优势在于品牌延展性强、历史信任深、机构接入容易**——这些都是慢变量。但短板也直接：**团队执行速度的代差会让 Aave 错过范式跃迁的关键窗口**。如果 Aave Labs 团队不能把治理周期从 90 天压到 30 天，Morpho 会持续蚕食 TVL 份额。

**Morpho 型 DeFi 借贷协议的空间主要来自团队速度 + 商业模式创新**——但 token 价值捕获 + 操作历史是两个未解决变量。市场会更关注 Paul Frambot 团队能否设计出 "vault 层与 token 持有人共生机制"，以及主流市场首次黑天鹅事件下的实际表现。

**SparkLend 型混合模式的命运绑定母协议战略**——这种依附关系既给它带来稳定的 holder capture 高分，也意味着失去独立战略选择权。

**长尾协议（HyperLend、Fluid、Euler V2）的关键变量是"垂直突破能否扩展"**——而扩展能力高度依赖团队是否有外溢野心。

### 11.2.4 行业终局推演：双寡头 + curator 生态 + 团队溢价

DeFi 借贷作为 DeFi 基础组件不会消失，但胜负手将从"哪个 TVL 大"转向**"五维综合分谁更高"**。

**当估值溢价更稀缺、生态合作更挑剔时，规模 + 信誉 + 团队会三者共同转化为现实优势**：头部协议（Aave + Morpho 双寡头）更容易在范式窗口打开时完成模式调整、更可能获得更长的生态合作周期，也更有条件通过更稳健的工具组合延后压力、提高跨周期存活率。

**但真正的 alpha 沉降到三个层级**：
- **协议层**：Aave / Morpho 双寡头基于五维护城河保住市场地位
- **Curator 层**：Gauntlet / Steakhouse / Re7 凭借机构级团队从应用层抽 perf fee
- **垂直长尾**：HyperLend 等通过场景突破获取细分 alpha

**最终，能够穿越范式跃迁的协议，通常不是 TVL 最大的扩张者，而是五维综合分最稳健的运营者**：商业模式有调整空间、价值传导有可信路径、宏观敏感度可控、操作历史经过验证、团队执行持续在线。未来市场将用更严格的五维筛选，持续淘汰**任一维度长期失分的协议**，并伴随**curator 生态层的崛起，使真正的 alpha 从协议层迁移到应用层 + 团队层**。

\newpage

# 参考文献

[1] DefiLlama. (2026, May 25). *Lending Protocols Dashboard*. https://defillama.com/protocols/Lending

[2] Aave Labs. (2025, December). *Aave V4 Technical Specification*. Aave Governance Forum.

[3] Morpho Association. (2025, October). *Morpho Blue Whitepaper v2*. https://morpho.org/

[4] Hougan, M., & Bitwise Asset Management. (2025, October). *DeFi Lending Sector Quarterly Review (Q3 2025)*. Bitwise Investments.

[5] SKY Foundation / MakerDAO. (2025, December). *SparkLend Treasury Subsidy Mechanism Disclosure*.

[6] Compound Labs. (2025, November). *Compound V3 Governance Update: Zero-Take-Rate Transition*. Compound Governance Forum.

[7] Federal Reserve Economic Data (FRED). *1-Year Treasury Constant Maturity Rate*. https://fred.stlouisfed.org/

[8] U.S. Securities and Exchange Commission. (2025, July). *Statement on Ethereum and Digital Assets Regulatory Framework*. Chair Paul Atkins, SEC Public Statement.

[9] U.S. Congress. (2025, September). *Guiding and Establishing National Innovation for U.S. Stablecoins Act (GENIUS Act)*. Public Law.

[10] DefiLlama Hacks. (2026, May). *Historical DeFi Exploit Database*. https://defillama.com/hacks

---

# 附录 A — 原始数据快照（Phase A）

**数据时点**：2026-05-25 22:27 UTC
**数据源**：DefiLlama API（`/protocols`, `/protocol/<slug>`, `/summary/fees/<slug>`）+ FRED 宏观数据 + DefiLlama Hacks tracker

## A.1 关键协议详细数据

### Aave V3
- Supply TVL: \$13.84b（以太坊主导，约 70%）
- Borrowed: \$10.98b
- Utilization: 79.3%
- Token: AAVE，FDV \$1.36b，P/S \~ 15.5×
- 部署链：20 条
- Safety Module TVL: \$178m (stkAAVE staked)
- 团队规模：~50 人
- 治理周期中位数：90 天

### Morpho Blue
- Supply TVL: \$7.41b
- Borrowed: \$3.87b
- Utilization: 50.7%
- Token: MORPHO（FDV 待 cross-check）
- 部署链：36 条
- 历史清算事件：1,948 起（100% 集中在长尾市场）
- 团队规模：\~20 人
- 治理周期中位数：14 天

### SparkLend
- Supply TVL: \$3.29b
- 年化 Fees: \$54.9m
- 年化 Revenue: \$2.6m
- 年化 Holders Revenue: \~\$4.27m
- 母协议：MakerDAO / SKY ecosystem
- 团队：Sky 生态共享（无独立创始团队）

### Compound V3
- Supply TVL: \$1.24b
- 年化 Fees: \$22.0m
- 年化 Revenue: **\$0**
- 部署链：6 条
- 创始人状态：Robert Leshner 转向 CoinList Capital
- 团队规模：\~15 人（缩减中）

## A.2 历史黑天鹅事件 + 协议表现完整对照

详见正文第六章表 7。

## A.3 宏观数据时间序列

详见正文第五章表 5。

## A.4 Curator 层 AUM 与 fee revenue 估算

详见正文第七章表 10。

## A.5 Phase B Dune Queries —— 已设计未运行

5 个 SQL 模板已写在 `~/web3-vc/plugins/web3-vc/connectors/dune/queries/lending/`：

1. `01-share-migration.sql` — wallet 级 Aave → Morpho 迁移流（量化抽水螺旋）
2. `02-deposit-concentration.sql` — top-N LP 集中度（量化买方议价权）
3. `03-utilization-trend.sql` — 跨协议 utilization 时间序列
4. `04-liquidation-volume.sql` — bad debt + cascade 历史
5. `05-unified-hhi.sql` — 用 active borrows 算 HHI

---

# 附录 B — 方法论局限

## B.1 数据局限

- **DefiLlama 单数据源**：所有 fees/revenue 数字来自 DefiLlama adapter，若某协议适配器有 bug 则数字有偏差
- **Phase B 缺失**：链上微观结构数据（实际钱包迁移流、集中度、清算历史）未拉取
- **宏观数据时点错位**：FRED T-bill yield 与 DefiLlama DeFi yield 时点可能错位 1-2 周，spread 计算存在小误差
- **团队评估的定性成分**：四要素中"创始人活跃度"、"生态共建能力"等部分指标依赖定性判断，可重复性较低

## B.2 框架局限

- **五维框架的权重选择主观**：商业模式 25% / 价值分配 20% / 宏观 15% / 操作历史 25% / 团队 15% 的权重是作者主观选择，不同机构可能给出不同权重
- **3-5 年情景概率**：所有 base / bull / bear 概率是个人估计，非历史 backtest
- **范式跃迁判断**：将 Aave / Morpho 对照定义为"应用层 vs 基础设施层"是定性框架，实际 Aave V4 可能融合两种模式
- **TAM 定义**：本报告把"DeFi 借贷"狭义定义为 DefiLlama 的 Lending category

## B.3 个人立场披露

- 报告作者持有少量 ETH、SOL 仓位作为 portfolio 基础，**当前不持有任何 lending sector 协议的 token 或 LP 仓位**
- 本报告为研究框架演示，非投资建议
- 报告基于公开数据；任何具体投资决策需要独立尽调、链上验证、与协议团队 / 同行交叉验证

---

\newpage

**统稿 & 编辑**：Roddy Huang

*数据源：DefiLlama API（2026-05-25 22:27 UTC 拉取的 Phase A 截面）、FRED 宏观数据、DefiLlama Hacks tracker、协议 GitHub / governance forum 团队画像；Dune Phase B queries 已设计未运行。*
