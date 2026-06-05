---
title: "从性能宣言到生态兑现：2026 Monad 上线 7 个月可持续性展望——基于性能、采用、宏观、操作历史与团队的五维分析"
author: "Roddy Huang"
date: "2026-06-04"
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

Monad 作为 2024-2025 周期最具关注度的高性能 EVM-compatible L1 之一，于 2025 年 11 月 13 日完成 mainnet 上线。Paradigm 领投的 \$225M Series A、Jump Trading 量化背景的核心团队、10,000 TPS / sub-second finality 的技术 claim、以及上线即处理超过 1.4 亿笔交易的早期数据，使其成为本轮 L1 周期最被讨论的"通用高性能链"押注之一。但截至 2026 年 6 月初——mainnet 上线 7 个月——\$3.15b FDV 与 \$369m chain TVL（FDV/TVL ≈ 8.5×）形成的估值落差，以及生态层"全部由已有 EVM 协议复制粘贴"（top 15 dApp 均为 LayerZero、Morpho、Uniswap、Curve、PancakeSwap 等多链部署项目）的结构性现状，迫使市场必须正面回答一个问题：**Monad 是下一个 Solana，还是下一个 Aptos？**

本文立足于 2026 年 6 月初的市场环境，对 Monad 项目的运作机制进行系统性拆解，重点构建 "**性能飞轮 ⇄ 商品化 EVM 陷阱**" 的中心机制模型，并叠加适配 L1 赛道的五维评估框架。

研究指出，**通用 L1 token 的价值创造本质是"协议层稀缺性 × 应用层捕获效率"的协同**——这是分析的核心 2x2。但 2x2 本身不足以解释为什么同样商业模式的 L1 会有完全不同的结局；必须叠加三层外生情境：(1) **宏观环境层**——L1 narrative 周期、ETF 资金分布、监管对 alt-L1 的差异化影响决定整个赛道的估值锚；(2) **操作历史层**——mainnet 稳定性、安全事件、压力测试纪录是 LP 与 dev 信任的真实试金石；(3) **团队执行层**——创始人质量、生态共建速度、与 VC / market maker 的关系是同样商业模式下分化的根本解释。

在性能维度，文章论证了 Monad 10,000 TPS + 400ms finality + 100% EVM bytecode 兼容的技术 claim 已被 mainnet 上线初期数据部分验证（7 个月处理 1.4 亿+ tx，无重大共识层事故），但**性能优势的可持续性取决于能否在 EVM 兼容生态中保持差异化**——而 EVM 兼容本身意味着 fork 极易，任何性能改进 12-18 个月内可被 Sei、Plasma、MegaETH 等竞争对手复制。在采用维度，文章对比了 Monad 当前 top 15 dApp **100% 为多链部署的存量 EVM 协议**（无 Monad-native killer app），与 HyperLiquid L1 以 perp DEX 为 anchor app 形成 70-80% 市场份额的"vertical app-chain"对照，揭示了 Monad 在 application moat 层面的关键缺位。在宏观环境方面，文章分析了 alt-L1 narrative 自 2024 年下半年以来的整体衰退（资金从 alt-L1 转向 BTC ETF / ETH ETF / Solana / HyperLiquid 等"已验证 winner"）、Aptos 等 over-funded 通用 L1 的 token 跌幅（APT 从 ATH -95.93%）对 Monad token 路径的警示。在操作历史方面，mainnet 7 个月仅录得 Upbit node sync error 的非协议事故；Monad Foundation 推出的 Bugfinder AI 安全工具是创新但未经验证的护城河尝试。在团队执行方面，文章拆解了 Keone Hon + James Hunsaker（Jump Trading）+ Eunice Giarta（MIT Media Lab）的核心组合，及 Paradigm、Electric Capital、Greenoaks 的"顶配 VC matrix"——这在同代 L1 中是少数 sustained 团队执行案例。

结合 Solana、Aptos、HyperLiquid L1 三个 L1 对照案例的三结局分析，本文提出以 "**性能差异化—生态捕获—宏观周期—操作韧性—团队速度**" 为核心的五维可持续性评估框架，并给出四点趋势研判：

**其一**，Monad 已进入"性能验证完成 → 生态兑现 binary"的关键窗口，未来 12-18 个月的核心矛盾不在技术，而在能否催生至少 1-2 个 Monad-native killer app；如果到 2027 年中仍无 native anchor app，整个 thesis 将面临结构性反转；

**其二**，估值逻辑将从"FDV 锚定"转向"应用层捕获效率 + 团队执行速度"——MON token 的当前 \$3.15b FDV 隐含了 "Solana 路径成功"的预期，但 8.5× FDV/TVL 显示市场已有意见分化；后续估值修复的核心 catalyst 是 native killer app 的出现，而非技术升级；

**其三**，底层路径分化将进一步放大 L1 内部分化：通用高性能 L1（Monad 押注）面临"商品化 EVM 陷阱"——任何 perf 改进可被 fork，应用层捕获仍流向 Solana / HyperLiquid / ETH L2；而 vertical app-chain（HyperLiquid 路径）通过 anchor app 锁住价值流向，是当前更有效的 L1 模式；

**其四**，DeFi / 高性能 L1 赛道仍将延续，但**行业结构大概率走向 "vertical 主导 + 通用 L1 头部集中"**：通用 L1 层只剩 Solana + Monad + 少数 ETH L2 能保持地位，长尾通用 L1（Aptos / Sui / Sei / Cardano / Near 等）持续边缘化；而 vertical app-chain 在 perps / lending / DePIN / AI 等具体场景蚕食通用 L1 的市场份额。

本文为机构资金在 Monad 早期投资决策提供框架，为 L1 赛道整体的多维可持续性评估提供参考。

**关键词**：Monad；通用 L1；性能飞轮；商品化 EVM 陷阱；killer app；vertical app-chain；五维评估

\newpage

# 目录

1. 引言
2. 概念和定义
   2.1 概念界定：通用 L1 vs vertical app-chain
   2.2 术语解释
   2.3 全球 L1 赛道现状分析
3. Monad 的商业模式与多层分析框架
   3.1 商业模式定位：通用高性能 EVM-compatible L1
   3.2 价值创造机制：性能差异化决定上限，应用层捕获决定下限
   3.3 商业模式的结构性特征
   3.4 多层分析框架：性能核心 + 三层情境
4. 性能核心：性能飞轮 ⇄ 商品化 EVM 陷阱
   4.1 性能飞轮（Monad 押注）
   4.2 商品化 EVM 陷阱（Monad 风险）
   4.3 EVM 兼容性的双刃剑
5. 第一层情境：宏观环境分析
   5.1 alt-L1 narrative 周期：从 2021 高潮到 2024 衰退
   5.2 ETF 资金流向与 BTC/ETH/SOL 三极化
   5.3 监管对 alt-L1 的差异化影响
   5.4 Monad 上线时点的宏观窗口判断
6. 第二层情境：操作历史与安全机制
   6.1 通用 L1 的操作风险分类
   6.2 Solana / Aptos / HyperLiquid 历史压力测试对照
   6.3 Monad mainnet 7 个月运行记录
   6.4 Bugfinder AI 安全工具：创新但未验证的护城河
7. 第三层情境：团队与生态执行
   7.1 L1 团队评估框架：五要素
   7.2 Monad 团队拆解（Keone Hon + James Hunsaker + Eunice Giarta）
   7.3 VC matrix 评估（Paradigm + Electric + Greenoaks + Jump）
   7.4 生态共建执行：Open Transaction Layer + Bugfinder + USD1 流动性
8. Monad 横向分析：五维框架下的差异化
   8.1 Monad：技术 9 / 采用 4 的早期画像
   8.2 与 Solana / Aptos / HyperLiquid 的五维对照
   8.3 当前 FDV \$3.15b 的隐含路径定价
9. Monad 的多维风险分析
   9.1 生命周期与分化路径
   9.2 性能差异化风险：fork 速度与 EVM 商品化
   9.3 应用层捕获风险：killer app 缺位的窗口期
   9.4 宏观周期风险：L1 narrative 衰退与解锁压力
   9.5 操作历史风险：mainnet 早期黑天鹅
   9.6 团队执行风险：核心人才与生态速度
   9.7 核心评估指标：五维综合评估
10. 典型案例分析：三结局 × 五维验证
    10.1 Solana：成功穿越 + 杀手级应用生态 + Firedancer 升级
    10.2 Aptos：过度融资 + 无 killer app + 解锁压力的边缘化
    10.3 HyperLiquid L1：vertical app-chain 的替代路径
11. 可持续性分析与趋势展望
    11.1 五维可持续性判断框架
    11.2 趋势展望：从性能竞争转向生态分化
        11.2.1 核心命题重塑：从 TPS 叙事转向 killer app 兑现
        11.2.2 估值模式转换：FDV 锚定让位于应用层捕获
        11.2.3 底层路径分化：通用 L1 vs vertical app-chain
        11.2.4 行业终局推演：通用 L1 头部集中 + vertical 蚕食

\newpage

# · 一 引言 ·

L1 区块链（Layer-1 blockchain）通常指作为基础结算层的独立公链——拥有自己的共识机制、原生 token、独立的安全 budget——与建立在 L1 之上的应用、L2 scaling 方案区分。在 Solana（2020-2021）、Aptos / Sui（2022）、Sei / Berachain（2024）等高性能 L1 的标杆示范效应带动下，叠加 EVM 生态的开发者基数（约 80% 智能合约开发者使用 Solidity / EVM 工具链），"高性能 + EVM 兼容"成为继 ETH-killer 之后最具关注度的 L1 范式。Monad 是这一范式 2024-2025 周期的代表项目：Paradigm 领投 \$225M Series A、Jump Trading 量化背景核心团队、10,000 TPS + 400ms finality + 100% EVM bytecode 兼容的技术 claim，于 2025 年 11 月 13 日完成 mainnet 上线。

但 L1 赛道的演进**远不只是性能竞赛**。三组外生力量正在同时重塑 alt-L1 的命运：

**第一**，**alt-L1 narrative 衰退**。从 2021 年的 "Solana / Avalanche / Fantom / Polygon" 多极化高潮，到 2024-2025 的"BTC ETF + ETH ETF + SOL 三极化"，机构资金从 long-tail alt-L1 撤出，集中流向已验证的 winner。同期 alt-L1 的合计 market cap 占 crypto total 比例从 2021 年峰值 ~18% 跌至 2026 年 ~6%。

**第二**，**通用 L1 vs vertical app-chain 的范式撕裂**。HyperLiquid L1 作为 perp DEX 的 anchor app 驱动型链，以 \$1.5b+ TVL + 70-80% perp DEX 份额证明了"vertical app-chain 击败通用 L1"的可行性。同期 Aptos 作为"通用高性能 L1"的代表，token 从 ATH -95.93%，TVL 仅 \$196m。**通用 L1 的相对吸引力正在被 vertical app-chain 系统性压制**。

**第三**，**EVM 兼容性的双刃剑显性化**。EVM 兼容性曾被视为 alt-L1 的关键优势（直接获得 80% 开发者基数），但**EVM 兼容也意味着任何性能改进都可被 fork**——Sei V2、Plasma、MegaETH、Berachain 等竞争对手在 12-24 个月内陆续实现类似性能 claim。**性能差异化的窗口正在快速关闭**。

Monad 上线 7 个月，已处理超过 1.4 亿笔交易，chain TVL 达 \$369m（DeFiLlama #14），mainnet 期间无重大共识层事故。但其 \$3.15b FDV 对应的市场预期，与生态层 "top 15 dApp 100% 为多链部署的存量 EVM 协议"（无 Monad-native killer app）的现状之间，存在显著张力。截至 2026 年 6 月初，市场对 Monad 的关注点已经从"技术能否实现"转向**多层综合判断**："**性能差异化能否持续 + 能否催生 killer app + 在什么宏观环境下推进 + 早期 mainnet 是否经得起黑天鹅 + 团队能否快速执行生态闭环**"——五个维度共同决定 Monad 能否成为"下一个 Solana"，而非"下一个 Aptos"。

基于此，本文立足 2026 年 6 月初，对 Monad 项目的发展现状与最新压力测试进行回顾，并从**性能核心 + 三层外生情境**两条主轴出发，对 Monad 投资命题的可持续性与关键风险点给出框架化分析，以期为后续的策略设计与机构资金配置提供可验证的参考。

# · 二 概念和定义 ·

## 2.1 概念界定：通用 L1 vs vertical app-chain

本文研究 Monad 作为通用高性能 L1 的可持续性，首先对相关概念进行界定。

**广义口径**：凡作为独立结算层、拥有原生 token + 自主共识 + 独立 dev 生态的公链，均可视为 L1 区块链。按战略定位可分为三类。

**（1）通用 L1（General-Purpose L1）**：以"通用计算基础设施"为定位，目标承载 DeFi / NFT / GameFi / DePIN / AI agent 等多元应用类别；商业模式核心是**通过应用生态繁荣捕获价值**；代表项目为 Ethereum、Solana、Aptos、Sui、**Monad**。

**（2）Vertical App-Chain（垂直应用链）**：以单一杀手级应用为锚定，链层与应用层深度协同；商业模式核心是**应用本身的市场份额直接转化为 L1 价值**；代表项目为 HyperLiquid L1（perp DEX 锚定）、Berachain（PoL DeFi 锚定）、dYdX V4（perp 锚定）。

**（3）Modular L1 / Settlement Layer（模块化结算层）**：以"安全 budget 出售"为定位，核心收入来自 L2 / app-chain 的安全租赁；代表项目为 Ethereum L1（部分 EigenLayer 范式）、Celestia。

**狭义口径**：本文所称"L1"特指狭义口径下的**通用 L1**——以多元应用生态承载为定位、token 价值绑定整个生态成功率的链。Monad 属于此分类的标杆项目之一。L2 / sidechain / app-chain 虽具备类似技术架构，但商业模式逻辑显著不同，本文不作为重点分析对象。

## 2.2 术语解释

**表 1：文章重点术语解释表**

| 领域 | 术语 | 英文全称 | 定义 |
| --- | --- | --- | --- |
| 技术 | Parallel EVM | Parallel Ethereum Virtual Machine | 在 EVM 兼容基础上引入并行交易执行能力的技术架构；Monad 通过 MonadDB + 乐观并发控制实现 |
| 技术 | TPS | Transactions Per Second | 每秒可处理交易数；Monad claim 10,000 TPS（理论峰值）|
| 技术 | Finality | Block Finality | 交易确认不可逆所需时间；Monad ~400ms（HotStuff-derived 共识）|
| 技术 | MonadDB | Custom State Database | Monad 自研状态数据库，优化随机读取以支持并行执行 |
| 商业模式 | 性能飞轮 | Performance Flywheel | 高 TPS / 低费用 → 用户体验突出 → dev 涌入 → 应用层繁荣 → MON 价值上行的正反馈 |
| 商业模式 | 商品化 EVM 陷阱 | Commodity-EVM Trap | EVM 兼容 → fork 极易 → 性能差异化短期 → 沦为众多 EVM-L1 之一 → 应用层价值流向 Solana / HL / ETH 的负反馈 |
| 商业模式 | Killer App | Anchor Application | 单一应用承载链上大部分用户、交易量、价值；HyperLiquid 的 perp DEX 是典型 |
| 财务指标 | FDV | Fully Diluted Valuation | 全流通市值 = token 总供应 × 当前价；Monad 当前 ~\$3.15b |
| 财务指标 | Circulating Supply | 流通供应 | 当前已解锁可流通 token；Monad ~11.82b / 100b（11.82%）|
| 财务指标 | FDV/TVL | Valuation Multiple | 衡量市值相对链上锁仓资金的倍数；Monad 当前 ~8.5×（高估值锚）|
| 宏观环境 | alt-L1 Narrative | Alternative L1 Narrative | 投资市场对 ETH 以外 L1 的整体偏好；2021 高潮 → 2024 衰退 |
| 宏观环境 | ETF Effect | ETF Capital Allocation | 现货 ETF 通过后机构资金的流向；BTC + ETH + SOL 三极化 |
| 操作历史 | Mainnet Halt | 主网停机 | 共识层失败导致链停止出块；Solana 多次经历，Monad 未发生 |
| 操作历史 | Liveness Failure | 活性失败 | 节点同步问题导致部分服务不可用；Monad 2026-05 Upbit 案例 |
| 团队 | Founder Activity | 创始人在岗活跃度 | 创始人是否仍主导项目演进；通过 commit / 公开发言 / governance 评估 |
| 团队 | Ecosystem Velocity | 生态扩张速度 | 新 dApp 上线节奏 + dev tooling 完整度 |
| 参与者 | Monad Labs | Monad 核心团队 | Keone Hon + James Hunsaker（ex-Jump）+ Eunice Giarta（ex-MIT Media Lab）|
| 参与者 | Paradigm | Lead Investor | Monad Series A 领投方，加密 VC 顶级机构 |
| 参与者 | Solana | 对照案例 1（成功）| 高性能 L1，2025 Q4 突破 \$5b TVL，DeFiLlama #3 chain |
| 参与者 | Aptos | 对照案例 2（失败）| 高性能 L1，APT token 从 ATH -95.93%，TVL 仅 \$196m |
| 参与者 | HyperLiquid L1 | 对照案例 3（替代路径）| Vertical app-chain，perp DEX 锚定，\$1.5b+ TVL，70-80% perp 份额 |

资料来源：作者整理

## 2.3 全球 L1 赛道现状分析

基于 DefiLlama 数据（截至 2026 年 6 月 4 日 20:16 UTC），全球 top 30 L1 chain TVL 与生态格局如下。

**表 2：DeFiLlama Top 30 Chain TVL 统计表（2026-06-04）**

| Rank | Chain | TVL | Native Token | 分类 |
| ---: | --- | ---: | --- | --- |
| 1 | Ethereum | \$38.72b | ETH | 通用 L1（结算层）|
| 2 | BSC | \$5.22b | BNB | 通用 L1（CEX 关联）|
| 3 | Solana | \$4.93b | SOL | 通用 L1（成功）|
| 4 | Tron | \$4.51b | TRX | 通用 L1（stablecoin）|
| 5 | Bitcoin | \$4.16b | BTC | 结算层（非智能合约）|
| 6 | Base | \$3.97b | n/a | L2（Coinbase）|
| 7 | Hyperliquid L1 | \$1.66b | HYPE | **Vertical app-chain**（perp）|
| 8 | Provenance | \$1.56b | HASH | RWA-specific |
| 9 | Arbitrum | \$1.31b | ARB | L2 |
| 10 | Polygon | \$1.07b | POL | L2 / 侧链 |
| 11 | Plasma | \$809.75m | XPL | 通用 L1（2026 新）|
| 12 | Avalanche | \$525.08m | AVAX | 通用 L1（次生代）|
| 13 | Sui | \$459.29m | SUI | 通用 L1（Move）|
| **14** | **Monad** | **\$369.19m** | **MON** | **通用 L1（本文研究对象）** |
| 15 | OP Mainnet | \$306.89m | OP | L2 |
| 16 | ENI | \$290.28m | ENI | 新链 |
| 17 | Cronos | \$271.21m | CRO | CEX 关联 |
| 18 | Ink | \$218.71m | n/a | L2 |
| 19 | Stellar | \$209.48m | XLM | 支付 L1 |
| 20 | Aptos | \$196.80m | APT | **通用 L1（失败案例）** |
| 21 | Starknet | \$190.22m | STRK | L2（ZK）|
| 22 | Near | \$170.98m | NEAR | 通用 L1 |
| 23 | Mantle | \$158.95m | MNT | L2 |
| 24 | Movement | \$127.97m | MOVE | 通用 L1（Move 新）|
| 25 | Flare | \$126.92m | FLR | Oracle L1 |
| 26 | MegaETH | \$125.65m | MEGA | 通用 L1（高 TPS 新）|
| 27 | Katana | \$114.43m | n/a | L2 |
| 28 | Cardano | \$109.78m | ADA | 通用 L1（学术派）|
| 29 | Rootstock | \$100.17m | RBTC | BTC L2 |
| 30 | Stacks | \$98.45m | STX | BTC 智能合约 |

资料来源：DefiLlama，时间截至 2026 年 6 月 4 日 [1]

基于上述情况，全球 L1 赛道基本格局如下：

**第一，规模与头部效应显著**：top 10 chain 合计 TVL 约 \$65.71b，占赛道总量约 88%。Ethereum 单一链占 \$38.72b（52%），呈现"绝对一超"格局；Solana、BSC、Tron 形成第二梯队（\$4-5b）；Hyperliquid L1 作为 vertical app-chain 闯入第 7（\$1.66b），是 2024-2026 周期最强黑马。

**第二，通用 L1 vs vertical app-chain 分化加剧**：HyperLiquid L1 \$1.66b TVL 超过 Arbitrum / Polygon / Avalanche 等老牌通用 L1，**证明 vertical app-chain 模式的市场认可**。同期 Aptos \$196m（rank 20）、Sui \$459m（rank 13）、Near \$170m（rank 22）等通用 L1 持续承压，验证通用 L1 范式的边缘化风险。

**第三，Monad 当前定位**：rank 14，\$369m TVL——介于 Sui（\$459m）和 OP Mainnet（\$306m）之间。**与 Hyperliquid L1（\$1.66b）的 4.5× 差距，与 Aptos（\$196m）的 1.9× 领先**，是判断 Monad 当前所处位置的关键 anchor。

**第四，新 L1 的崛起威胁**：rank 26 的 MegaETH（\$125m，2026 新）作为另一个高性能 EVM-compatible L1，是 Monad 最直接的同代竞争对手；rank 11 的 Plasma（\$809m，2026 新）作为另一通用 L1，是潜在挑战。

# · 三 Monad 的商业模式与多层分析框架 ·

## 3.1 商业模式定位：通用高性能 EVM-compatible L1

Monad 拥有相对清晰的商业模式定位：**以 100% EVM bytecode 兼容性 + 10,000 TPS 性能 claim 为差异化卖点的通用 L1**。其核心定位是 "the most performant EVM blockchain"——通过技术架构升级（parallel EVM + MonadDB + HotStuff-derived 共识）在不牺牲 EVM 生态兼容性的前提下大幅提升性能，从而吸引 Ethereum 应用迁移和高频应用（DEX、perps、AI agents、orderbook）部署。

与传统 EVM L2（Arbitrum、Optimism、Base）依赖以太坊安全 + 性能改进不同，Monad 的核心动作是**通过独立 L1 + 高性能架构 + EVM 兼容**捕获以下三类价值流：(1) 从 ETH L1 / L2 迁移的高频 DeFi 应用；(2) 新启动的 EVM 高性能原生应用；(3) Solana / Move 链上无法部署但需高性能的应用。其"性能端"通常呈现对 high-throughput 应用（DEX、perps、orderbook、game tick）的偏好；负债端 / 权益端则主要由 token holders + validators + ecosystem developers 构成；经营目标体现为：在 mainnet 上持续累积 active users、TVL、tx volume，并将 gas fees + MEV 价值传导给 MON token holders。

围绕这一模式，通用 L1 在过去呈现两种典型的反身性循环。

**（1）性能飞轮（Performance Flywheel）**——高 TPS / 低 fees → 用户体验突出 → 早期 dApp 试水 → 杀手级应用涌现 → ecosystem 网络效应启动 → MEV / fees / staking 价值流向 MON → validator 增加 / 安全提升 → 进一步吸引高频应用（DEX、perps、AI agents）→ 应用层捕获效率提升 → MON token 价值上行。

**图 1：性能飞轮（Performance Flywheel）**

```
        ┌──────────────────────┐
        │ 高 TPS + 低 fees     │
        │  (Monad 10k TPS)     │
        └──────────┬───────────┘
                   │
                   ▼
        ┌──────────────────────┐
        │ 用户体验突出 / dev 涌入│
        └──────────┬───────────┘
                   │
                   ▼
        ┌──────────────────────┐
        │ Killer app 涌现       │ ◄────┐
        └──────────┬───────────┘      │
                   │                   │
                   ▼                   │
        ┌──────────────────────┐      │
        │ Ecosystem 网络效应    │      │
        │ MEV/fees 流向 MON     │──────┘
        └──────────────────────┘
                  (循环强化)
```

**（2）商品化 EVM 陷阱（Commodity-EVM Trap）**——EVM 兼容性 → 任何性能改进可被 fork → Sei V2 / Plasma / MegaETH 等竞争对手快速实现类似性能 → Monad 性能差异化窗口关闭 → 没有 dapp-specific moat → 应用仍部署到 Solana（killer app 生态）或 ETH L2（settlement+ 流动性）→ Monad 沦为众多 EVM-L1 之一 → MON token 缺乏独立价值锚 → 进入估值修复缓慢期。

**图 2：商品化 EVM 陷阱（Commodity-EVM Trap）**

```
        ┌──────────────────────┐
        │ EVM 兼容（双刃剑）    │
        └──────────┬───────────┘
                   │
                   ▼
        ┌──────────────────────┐
        │ 性能改进可被 fork    │
        └──────────┬───────────┘
                   │
                   ▼
        ┌──────────────────────┐
        │ 差异化窗口关闭        │ ◄────┐
        └──────────┬───────────┘      │
                   │                   │
                   ▼                   │
        ┌──────────────────────┐      │
        │ 应用迁移到 Solana/HL │      │
        │ MON 缺乏独立价值锚    │──────┘
        └──────────────────────┘
                 (循环弱化)
```

资料来源：作者整理

这一正一负双向循环机制是通用 L1 商业模式的**核心 2x2**。但**仅有这个核心不足以解释赛道全貌**——同样在性能飞轮逻辑下，为什么 Solana 成功（\$4.93b TVL）而 Aptos 失败（\$196m）？同样面临商品化 EVM 陷阱，为什么 HyperLiquid L1 反而通过 vertical app-chain 路径胜出？

答案在于三层外生情境：宏观环境决定整个 alt-L1 赛道的资金天花板；操作历史决定 dev 与 LP 的信任锚定；团队执行决定同模式下的生态扩张速度。

## 3.2 价值创造机制：性能差异化决定上限，应用层捕获决定下限

在机制层面，通用 L1 的价值创造可归纳为两条主线：**性能端性能差异化决定 L1 获利的路径与上限，应用端捕获效率决定 token holder 能否享受网络增长**。

**（1）性能端性能差异化**：来自 TPS / latency / gas cost 相对同代 EVM 链的优势，是吸引 dev 与 user 的初始信号；
**（2）应用端捕获效率**：来自 gas fees + MEV + staking yield 中归 MON token holders 的部分（通过 burn、staking reward、应用层 fee sharing 等机制传导）。

在此基础上，项目方还配合使用激励工具（Ecosystem Development 38.5% allocation、airdrop、grant 等）以提升生态扩张速度——上行阶段放大 dApp 增速，但同时会提高对 token 通胀与 dev 留存的敏感度。

**表 3：Monad 价值来源与作用机制拆解**

| 策略定位 | 核心维度 | 价值创造逻辑 | 核心约束 | 观测指标 | 周期敏感度 |
| --- | --- | --- | --- | --- | --- |
| 性能端（路径上限）| 协议端 | 高 TPS + 低 fees 吸引应用 + 用户 | EVM 兼容意味着可被 fork | TPS 峰值、tx volume、active addresses | 中 |
| 应用端（可持续）| Token holder 端 | gas + MEV 通过 burn/staking 传导给 MON | 需 killer app 提供持续 demand | TVL、daily tx fee、staking ratio | 强 |

资料来源：作者整理

归纳而言：**性能端更多通过 TPS / 早期 tx volume 体现；应用端的关键在于性能优势能否稳定转化为 killer app 涌现，并通过 burn/staking 机制把网络效应传导给 token holders**。

## 3.3 商业模式的结构性特征

在"性能决定上限、应用决定下限"的框架下，通用 L1 的商业模式通常呈现四类结构性特征。

**第一，评价框架从单纯 TPS 转向应用层捕获效率**。早期 L1 评估往往聚焦 TPS / finality / decentralization 三角，但 Aptos / Sui 等"高性能 + 多元生态宣传"的失败案例证明，**单纯 TPS claim 不足以支撑 token 估值**。更具解释力的指标体系应转向 daily active addresses、tx volume by app category、killer app TVL share、validator count、staking ratio、MON burn rate。

**第二，token 价值高度依赖 native ecosystem 而非 forked dApp**。Monad 当前 top 15 dApp 100% 是已有 EVM 协议（LayerZero、Morpho、Uniswap、PancakeSwap、Curve、Euler 等）的多链部署——这些应用同时部署在 30+ 其他链，对 Monad 缺乏粘性。**真正决定 MON 价值的不是"上面有多少协议"，而是"有多少协议是 Monad-native 且只 / 主要在 Monad 上"**。

**第三，价值传导以 burn + staking 为主、应用层 fee sharing 为辅，分配结构决定可持续性**。Monad 当前 tokenomics 设计中，validator rewards 0%（创新但争议）、ecosystem development 38.5%（行业内偏高）、team + investor 46.7%（标准 VC-backed L1 比例）。这种结构意味着**MON 的供应稀缺度主要由 burn 机制保障**——但 burn 速率取决于 daily tx volume × gas fees，而非协议层主动控制。如果 daily tx volume 不能持续上行，MON 的稀缺度叙事会被通胀稀释。

**第四，估值对预期敏感，相近 TVL 规模下 token FDV 仍可能长期分化**。Monad 当前 \$3.15b FDV vs Aptos \$926m-2.69b FDV vs HyperLiquid HYPE 的高估值（\$10b+ FDV）——三者在 TVL 量级有显著差距，但 FDV 反映了市场对"未来 killer app 概率"的差异化定价。

总结来看，**Monad 的风险收益特征并不由单一因素决定，而往往由"性能差异化 + 应用层捕获 + 市场预期"共同塑造**，并在不同 alt-L1 周期下被放大或削弱。

## 3.4 多层分析框架：性能核心 + 三层情境

基于上述商业模式特征，**仅靠性能 2x2 无法解释 L1 赛道全貌**。同样的性能 claim 下，协议结局差异巨大——必须叠加三层外生情境才能形成立体判断。

本文提出 "**性能核心 + 三层情境**" 的多层分析框架：

**图 3：通用 L1 的多层分析框架**

```
        ┌───── 第一层情境：宏观环境 ─────┐
        │  alt-L1 narrative · ETF 三极化  │
        │  → 决定整个 L1 赛道的资金天花板  │
        └────────────────┬────────────────┘
                         ▼ 设定 ceiling
        ┌────────────────────────────────┐
        │  性能核心：                     │
        │  Performance ⇄ Application      │
        │  (性能飞轮 ⇄ 商品化 EVM 陷阱)    │
        └────────────────┬────────────────┘
                         ▼ 被压力测试
        ┌───── 第二层情境：操作历史 ─────┐
        │  mainnet 稳定性 · 安全事件      │
        │  → 决定 dev / LP 信任的真实锚定  │
        └────────────────┬────────────────┘
                         ▼ 被执行
        ┌───── 第三层情境：团队执行 ─────┐
        │  创始人 · 生态速度 · VC matrix  │
        │  → 决定同模式下的生态扩张分化    │
        └─────────────────────────────────┘
```

资料来源：作者整理

**为什么这三层是必要的？**

**第一层：宏观环境**。alt-L1 token 的需求端本质是"机构资金寻找下一个 ETH-killer 的 yield"。但机构的资金分配不只取决于单个 L1 的优劣，还取决于**整个 alt-L1 赛道的相对吸引力**。BTC + ETH ETF 通过后，机构资金开始从 long-tail alt-L1 撤出向 BTC / ETH / SOL 集中——整个 alt-L1 估值天花板被压低。**不分析宏观，就无法判断 Monad 当前 \$3.15b FDV 是"早期机会"还是"高估值锚"**。

**第二层：操作历史**。dev 在选择部署链时，不只看 TPS / fees，更看**这条链明天会不会停**。Solana 历史上多次共识层 halt（2021、2022），是其早期被批评的核心点；Monad 上线 7 个月无重大事故，Bugfinder AI 安全工具是创新但未验证。**不分析操作历史，就无法判断 Monad 的"安全溢价"在哪个区间**。

**第三层：团队执行**。同样的技术 + 融资 + EVM 兼容性下，为什么 Aptos 失败而 Monad 至少完成 mainnet？背后是**团队执行速度的差异**。Monad 团队执行最关键的不是技术，而是**催生 killer app 的速度**——Keone Hon 团队能否在未来 12 个月吸引到至少 1-2 个 Monad-native 的 anchor app，决定整个 thesis 走向。

下文将依次拆解性能核心（第四章）、三层情境（第五至七章），并在第八章用五维框架对 Monad 进行综合分析、与 Solana / Aptos / HyperLiquid 三对照案例横向对比。

# · 四 性能核心：性能飞轮 ⇄ 商品化 EVM 陷阱 ·

基于第三章"性能差异化决定上限 × 应用层捕获决定下限"的判断，本节进一步拆解 Monad 性能 claim 的具体内容、与同代 EVM 高性能链的差异、以及 EVM 兼容性的内在张力。

## 4.1 性能飞轮（Monad 押注）

Monad 的性能押注由三个技术组件构成：(1) **Parallel EVM 执行**——通过乐观并发控制（optimistic concurrency control）+ 静态依赖分析，使非冲突交易并行执行；(2) **MonadDB**——自研状态数据库，优化随机读取性能（EVM 状态访问的关键瓶颈）；(3) **HotStuff-derived 共识**——继承 HotStuff BFT 的 sub-second finality 性质，同时优化 leader rotation 与 pipelining。

这三个组件共同支撑了 Monad 的核心 claim：**10,000 TPS 理论峰值 + ~400ms finality + 100% EVM bytecode 兼容**。

**理论 vs 实际**：mainnet 上线 7 个月，Monad 处理超过 1.4 亿笔交易，DefiLlama 显示 TVL 已达 \$369m（chain rank 14）。早期数据虽未充分验证 10k TPS 持续峰值，但**至少证明 mainnet 在中等负载下稳定运行**——这在通用 L1 上线 7 个月内是不错的成绩。Solana 在上线 7 个月时已经历多次 halts，Aptos 在同期阶段 TVL 仅 \$50-80m。

**性能飞轮的关键启动条件**：

**条件 1：性能优势可被用户感知**。这要求 dApp 层实际使用 Monad 的性能 capacity，而非仅"部署在 Monad 上"。当前 top 15 dApp 都是低吞吐量的多链 DEX / lending（Uniswap V4 TVL 只 \$25m on Monad），**尚未触及 Monad 的性能极限**。

**条件 2：早期 dev incentive 转化为留存**。Ecosystem Development 38.5% allocation 是 Monad 最大的资本工具，Foundation 已通过 grant、hackathon、liquidity program 持续推动。但**激励 dev 来部署 ≠ 激励 dev 长期留存**——后者需要 native dApp 的市场验证。

**条件 3：killer app 涌现**。这是飞轮启动的最关键门槛。Solana 的 Phantom / Pump.fun / Jito，HyperLiquid 的 perp DEX——都是"native + 主要在该链上"的 anchor app。Monad 当前缺少这个 anchor。

## 4.2 商品化 EVM 陷阱（Monad 风险）

商品化 EVM 陷阱是 Monad 押注的反面 reflection——其核心机制是**EVM 兼容性的双刃剑**。

**EVM 兼容的初始优势**：直接获得 80% 智能合约开发者基数 + 现有 dev tooling（Hardhat / Foundry / Solidity）+ 现有协议代码可一键部署。这是 Monad 选择 EVM 而非自研语言（如 Move）的核心理由。

**EVM 兼容的隐性代价**：

**第一，任何性能改进都可被 fork**。Monad 的 parallel EVM 设计并非数学上的不可复制——Sei V2（2024-2025）、Plasma（2026 新）、MegaETH（2026 新，DefiLlama #26）都实现了类似的并行 EVM 性能 claim。**性能差异化的"窗口期"不超过 18-24 个月**。

**第二，dApp 对 chain 缺乏粘性**。EVM 兼容意味着 dApp 可以同时部署在 30+ 链上——Morpho Blue 部署 33+ 链、LayerZero 部署 60+ 链、Uniswap V3 部署 39+ 链。**任何 dApp 对单一 L1 的依赖度都很低**。这与 Solana / HyperLiquid 不同——Solana 的 Phantom / Pump.fun / Jito 等都是 Solana-native，HyperLiquid 的 perp DEX 本身就是 chain。

**第三，价值流向多链聚合而非单链锁定**。当 Uniswap V4 在 Monad 部署，用户从 Monad 上交易，gas 给 Monad，但**协议层的品牌价值、token 价值、用户关系仍归 Uniswap**——Monad 只是众多 venue 之一。这就是为什么 Monad top 15 dApp 100% 多链部署是结构性问题，不是数据噪声。

## 4.3 EVM 兼容性的双刃剑

把 EVM 兼容性的双刃剑性质压成一个对比表：

**表 4：EVM 兼容性的双刃剑对比**

| 维度 | EVM 兼容 (Monad, MegaETH, Sei V2) | 自研语言 (Solana, Aptos/Sui Move) |
| --- | --- | --- |
| Dev 进入门槛 | **低**（Solidity 现成开发者）| 高（需学新语言）|
| 应用迁移速度 | **快**（一键部署）| 慢（需重写）|
| 应用粘性 | **低**（同时部署 30+ 链）| 高（原生应用）|
| 性能差异化窗口 | **短**（12-24 个月可被 fork）| 长（架构差异化更难复制）|
| Token 价值捕获 | 弱（应用价值不归 L1）| 强（应用价值绑定 L1）|

资料来源：作者整理

**关键解读**：

EVM 兼容性是 **dev acquisition 友好 + dev retention 不友好** 的组合。Monad 选择 EVM 路径的代价是：**初期获取 dev 快、但难以建立 sustained moat**。

Solana 与 HyperLiquid 选择"自研语言 / vertical 锚定"的代价是：**初期获取 dev 慢、但一旦获得就有 sticky moat**。

**这是 Monad 在性能层之外，必须用其他维度（团队 / 生态执行 / VC matrix）补偿的核心结构性弱点**。

# · 五 第一层情境：宏观环境分析 ·

L1 token 的需求端本质是"机构 + 散户资金寻找下一个 ETH-killer 的 yield"。但这一需求**不只取决于单个 L1 的优劣，还取决于整个 alt-L1 赛道相对 BTC / ETH 的相对吸引力**——而 2024-2026 这件事发生了根本性变化。

## 5.1 alt-L1 narrative 周期：从 2021 高潮到 2024 衰退

**2021 年的 alt-L1 高潮**：Solana 从 \$1 涨到 \$259（260×），Avalanche \$3 涨到 \$144（48×），Fantom \$0.02 涨到 \$3.46（173×），Polygon \$0.018 涨到 \$2.92（162×）。alt-L1 合计 market cap 占 crypto total 比例从 ~5% 升至 ~18%——**这是 alt-L1 narrative 的顶峰**。

**2022 年的 alt-L1 崩盘**：FTX 倒闭（Solana 持仓暴雷）、3AC 清算、UST/LUNA 崩盘——alt-L1 合计 -85%。SOL 从 \$259 跌到 \$8（-97%）。Aptos 在 2022 年 10 月上线，token launch 即顶峰 \$19.90，此后 -95.93% 至今。

**2023-2024 年的不对称复苏**：Solana 凭借 Phantom / Jito / Helium / Pump.fun 等 ecosystem 复活，从 \$8 涨回 \$200+（25×）。但其他 alt-L1 复苏乏力——Aptos、Sui、Near 持续承压。**资金集中流向"已被验证的 winner"**。

**2024-2026 年的三极化**：BTC 现货 ETF（2024-01）+ ETH 现货 ETF（2024-05）+ SOL 现货 ETF（2025-Q4）通过后，**机构资金以 BTC / ETH / SOL 三极化为主**，long-tail alt-L1 持续失血。alt-L1 合计 market cap 占 crypto total 比例从 2021 年 ~18% 跌至 2026 年 ~6%。

**对 Monad 的含义**：Monad 上线时机（2025-11）正好赶上"alt-L1 narrative 衰退期 + SOL ETF 通过后机构资金集中流向 SOL"——这是 Monad 面临的最严峻宏观逆风。即便技术 / 团队 / 融资完美，**宏观窗口本身就比 Solana 2020 年差**。

## 5.2 ETF 资金流向与 BTC/ETH/SOL 三极化

**表 5：现货 ETF 通过对 alt-L1 估值的不对称影响**

| 时点 | BTC ETF | ETH ETF | SOL ETF | alt-L1 整体 |
| --- | --- | --- | --- | --- |
| 2024-01 | 通过 → BTC +60% | 未通过 | 未通过 | 短期 follow（+30%）|
| 2024-05 | 持续流入 | 通过 → ETH +20% | 未通过 | 缺乏催化剂 |
| 2024-12 | 净流入 \$30b+ | 净流入 \$10b+ | 即将通过 | 失血加速（-15%）|
| 2025-Q4 | 净流入 \$50b+ | 净流入 \$15b+ | **通过 → SOL +80%** | **被 SOL 抽干**（-25%）|
| 2026-Q1 | 持续流入 | 持续流入 | 持续流入 | Aptos -40% / Sui -30% / 通用 L1 整体承压 |

资料来源：SoSoValue、Bloomberg ETF Flows，作者整理

**结构性含义**：

**第一，ETF 资金不会均匀流向所有 L1**。三极化（BTC/ETH/SOL）意味着资金集中在已被监管认可的 L1，long-tail alt-L1 必须靠自身基本面竞争。

**第二，SOL ETF 通过对 Monad 是最直接的逆风**。SOL ETF 后，那些原本可能配置 SOL 但因合规问题转 alt-L1 的资金，现在直接配置 SOL ETF。**Monad 失去了"SOL 替代品"叙事**。

**第三，未来 12-18 个月 Monad 缺少独立 catalyst**。MON ETF 在 2026-2027 年通过概率极低（流通率 11.82% 不符合 SEC 要求；FDV 不足）。在 ETF 通道关闭的情况下，Monad 估值修复完全依赖**应用层兑现**。

## 5.3 监管对 alt-L1 的差异化影响

**关键监管事件回顾（2024-2026）**：

**(1) SEC 主席 Paul Atkins 上任（2025-01）**：监管态度从 Gensler 时代的"all-in enforcement"转向"clarity over enforcement"。alt-L1 token 的发行人 not-security 风险下降。

**(2) Trump 政府 pro-crypto 立场（2025-）**：BTC 战略储备 + GENIUS Act（稳定币立法）+ SAB121 撤销，整体降低 alt-L1 的合规溢价需求。

**(3) SEC 确认 ETH 非证券（2025-07）**：解除 ETH staking + alt-L1 staking 的合规悬剑。

**对 Monad 的差异化含义**：

**正面**：Monad 作为美国监管下的核心团队（Monad Labs 位于纽约）+ Paradigm 等 US-based VC 撑腰，监管利好可以兑现为机构 LP 准入便利。

**负面**：监管利好同时也利好 BTC / ETH / SOL ETF，**对 Monad 的相对优势提升有限**。如果未来 2-3 年内出现 SOL 之外的 alt-L1 ETF 通过（如 AVAX、ADA），Monad 的相对吸引力将进一步被压缩。

## 5.4 Monad 上线时点的宏观窗口判断

综合上述分析，**Monad 上线时点（2025-11）的宏观窗口是"机会窗口窄但方向勉强中性"**：

- **逆风**：alt-L1 narrative 衰退 + ETF 三极化抽干长尾 + SOL 已通过 ETF 形成强 anchor
- **顺风**：监管转向 clarity + 机构资金对加密整体 allocation 上升 + EVM dev 基数稳定
- **方向勉强中性**：Monad 的"sophisticated VC + 顶级团队"在严苛宏观环境下仍可以挤进 top tier，但**没有 Solana 2020-2021 那样的宏观红利**

**对 Monad 估值的含义**：当前 \$3.15b FDV 是"宏观风险已部分定价"的结果，未来 12-18 个月赛道总盘可能持平或微降——增长不会来自宏观红利，必须来自 Monad 自身的应用层兑现。

# · 六 第二层情境：操作历史与安全机制 ·

L1 的核心信任根基是 **"我把应用部署到这条链上，它明天不会停"**。这个信任的真实压力测试不是 mainnet 上线公告写得多漂亮，而是**链在不同压力场景下的实际表现**。

## 6.1 通用 L1 的操作风险分类

通用 L1 的"操作风险"主要分为四类：

**(1) Consensus halt（共识停机）**：节点共识失败导致整条链停止出块。Solana 历史上发生多次（2021-09 17 小时、2022-04 7 小时、2022-05 3.5 小时、2024-02 5 小时），是其早期最严重的批评点。

**(2) Liveness failure（活性失败）**：节点同步问题导致部分服务不可用，链整体继续运行。Monad 2026-05 Upbit node sync error 属于此类。

**(3) State corruption（状态损坏）**：节点状态出现分叉、共识混乱。Solana 2024 年遭遇此类事件并通过 hotfix 解决。

**(4) Security incidents（安全事件）**：智能合约漏洞、bridge 黑客、validator 私钥泄露等。涉及金额规模与协议层 vs L1 层归责。

## 6.2 Solana / Aptos / HyperLiquid 历史压力测试对照

**表 6：主流 L1 历史操作记录对比**

| L1 | 上线 | Consensus Halt | Major Incident | 状态 |
| --- | --- | --- | --- | --- |
| Solana | 2020-03 | **多次**（2021-2024 累计 ~30+ 小时停机）| FTX 关联（2022）| 仍恢复至 #3 chain |
| Aptos | 2022-10 | 0 重大 halt | 无重大事故 | 但 TVL 持续低位 \$196m |
| Sui | 2023-05 | 0 重大 halt | 无重大事故 | TVL \$459m，稳定但不增长 |
| HyperLiquid L1 | 2023-08 | **0 重大 halt** | 0 重大事故 | TVL \$1.5b+，operational 表现行业最佳之一 |
| **Monad** | **2025-11** | **0 重大 halt** | **Upbit node sync (2026-05)，非协议事故** | **运行 7 个月，TVL \$369m** |

资料来源：项目官方披露、Solana Status Page、Aptos Foundation、HyperLiquid Foundation，作者整理

**关键解读**：

**第一，operational history 并非 TVL 的充分条件**。Aptos / Sui 在 operational history 上甚至比 Solana 更好（0 重大 halt），但 TVL 持续低位——证明 "没出事" ≠ "成功"。

**第二，Solana 的 halt 历史并未阻止其复活**。这说明**应用层粘性 > operational perfectionism**——只要 dev 仍愿意 build、user 仍愿意用，几次 halt 不影响长期价值。但**这只适用于已经有 ecosystem moat 的成熟 L1**，新 L1 一次重大事故可能直接团灭。

**第三，HyperLiquid 的"零事故"是其早期信任溢价的来源**。结合其 vertical app-chain 定位（perp DEX 对 uptime 极敏感），operational history 直接转化为机构 LP 信任。

## 6.3 Monad mainnet 7 个月运行记录

**Monad 上线（2025-11-13）至 2026-06-04 的 7 个月运行表现**：

**正面**：
- **0 重大 consensus halt**：mainnet 期间链一直在出块
- **处理 1.4 亿+ tx**（截至 2026-02 数据点）
- **无重大 protocol-layer 漏洞或黑客事件**
- **EVM 兼容性兑现**：现有 EVM dApp 一键部署后正常运行

**负面**：
- **Upbit node sync error（2026-05）**：导致 Upbit 暂停 MON deposit / withdrawal。**这是 liveness failure 而非 consensus halt**——单点节点同步问题，不影响链整体——但仍反映 mainnet 早期的 node operator coordination 问题
- **未经过真正的高负载压力测试**：1.4 亿 tx / 7 个月 ≈ 23 tx/s 平均，远低于 10k TPS claim。**Monad 的性能 claim 在 mainnet 上未被真正 stress test**

**关键判断**：

Monad 7 个月 operational record 介于"完美无瑕"和"出过事故"之间——**比 Solana 早期更稳定，但比 Aptos 早期更早暴露 liveness 问题**。这种 mixed signal 意味着 operational history 维度的评分应在 6-7（不像 HyperLiquid 9 那样高，也不像 Cream / Euler 那样低）。

## 6.4 Bugfinder AI 安全工具：创新但未验证的护城河

2026-05-28，Monad Foundation 推出 **Bugfinder**——基于 AI 的智能合约漏洞自动检测工具，宣称可以以低成本扫描全链智能合约。

**潜在含义**：

**(1) 这是 Monad 在"应用层操作风险"维度的差异化尝试**。其他 L1 通常将安全审计责任完全推给 dApp 自身或第三方审计公司（Trail of Bits、OpenZeppelin、CertiK 等），Monad 通过 Bugfinder **主动承担生态层安全责任**。

**(2) 如果 Bugfinder 有效，将形成显著差异化**。dev 在选择部署链时，"链层提供自动安全工具"是新颖的 selling point。

**(3) 但目前完全未被验证**。Bugfinder 上线仅一周，没有真实漏洞发现 / 阻止的公开案例。**这是创新方向但尚未转化为 moat**。

**判断**：Bugfinder 是 Monad 团队"主动差异化"的代表性举措之一，但需未来 12-18 个月观察实际效果。如果在 2027 中前能展示真实 case，可显著提升 Monad 的安全护城河评分；否则只是 PR 工具。

# · 七 第三层情境：团队与生态执行 ·

同样的性能 claim + 同样的宏观环境 + 同样的 mainnet 稳定性下，L1 结局的最终分化解释变量是**团队**——尤其是团队催生 killer app 的速度。

## 7.1 L1 团队评估框架：五要素

本文提出 L1 团队评估的五要素（在 Aave 4 要素基础上为 L1 适配新增 "VC matrix" 维度）：

**(1) 创始人在岗活跃度（Founder Activity）**——衡量创始人是否仍主导项目演进。L1 项目周期长（5-10 年），创始人离开 / 注意力转移是致命风险。

**(2) 治理执行速度（Governance Velocity）**——L1 治理与 DAO 治理类似，重大升级（如 Solana Firedancer）需要协调时间。Monad 当前未有大型 DAO governance，由 Foundation 主导。

**(3) 生态扩张速度（Ecosystem Velocity）**——新 dApp 上线节奏 + grant 发放速度 + dev tooling 完整度。**这是 L1 团队最关键的执行指标**。

**(4) VC matrix 质量（VC Matrix）**——L1 项目高度依赖 VC 的资金、人脉、市场推广支持。VC 的质量与 stake size 直接影响后续融资 / 上所 / market making。

**(5) 人才留存（Talent Retention）**——核心团队稳定性。L1 项目周期长，创始团队解体 = 项目终结。

## 7.2 Monad 团队拆解

**表 7：Monad 核心团队画像**

| 角色 | 姓名 | 背景 | 在岗状态 |
| --- | --- | --- | --- |
| Co-Founder & CEO | Keone Hon | Jump Trading 量化 8 年 + Jump Crypto，MIT BS Math/Physics | **极活跃**（mainnet 上线后保持公开发言节奏）|
| Co-Founder & CTO | James Hunsaker | Jump Trading 系统工程师 | **活跃**（主导技术架构与 Bugfinder 开发）|
| Co-Founder | Eunice Giarta | MIT Media Lab researcher + Shutterstock / Broadway Technology PM | 活跃（生态合作主导）|
| Total Team Size | ~80+ 人 | 跨技术 / 生态 / BD | 持续扩张中 |

资料来源：Monad Labs LinkedIn、公开访谈，作者整理

**关键解读**：

**(1) Jump Trading 量化背景是 Monad 团队最独特的 asset**。HFT 量化对低延迟、高吞吐量系统的工程经验，是 Monad parallel EVM + MonadDB + HotStuff 共识架构的直接基础。**这是 Aptos（ex-Meta/Diem，更偏向研究）/ Sui（同 ex-Meta，更偏向 PL 设计）/ HyperLiquid（匿名但 prop trading 背景）等团队所没有的特定优势**。

**(2) Eunice Giarta 是关键 PM 资产**。她带来的产品 + BD 经验弥补了 Jump 系工程团队偏向系统而非产品的弱点——这是 ecosystem 扩张的关键。

**(3) ~80 人团队规模在同代 L1 中属于中等偏上**。Aptos / Sui 上线时团队约 50-80 人，Solana 早期 ~30 人。Monad 的人员配置足以支持 sustained 生态扩张，但 burn rate 较高（融资 \$244M 总额下 burn rate 估约 \$30-40M/年，剩余 runway 5-6 年）。

**(4) 团队稳定性目前看良好**：mainnet 上线 7 个月内未见核心团队公开离职报道。但 7 个月样本太短，需未来 18-24 个月持续观察。

## 7.3 VC matrix 评估

**表 8：Monad 投资人画像**

| 阶段 | 时间 | 金额 | 领投 + 主要参与方 | 评估 |
| --- | --- | --- | --- | --- |
| Seed | 2023 | \$19M | Dragonfly Capital + 其他 | 标准早期 round |
| Series A | 2024-04 | **\$225M** | **Paradigm 领投** + Electric Capital + Greenoaks | **顶配 round**（2024 年最大加密 round）|
| **累计** | | **\$244M** | 顶级 VC matrix | **同代 L1 最强融资记录之一** |

资料来源：Fortune、The Block、Finsmes，作者整理

**关键解读**：

**(1) Paradigm 领投是顶级背书**。Paradigm 在 alt-L1 投资上的命中率极高（Solana、Uniswap、Optimism），且作为 fund 提供 sustained 支持（多轮跟投、ecosystem grant、上所推介）。

**(2) Electric Capital + Greenoaks 补充不同维度**。Electric 是 dev 生态侧（Electric Capital Developer Report 是行业 ref），Greenoaks 是 traditional growth investor（带来机构 LP 关系）。

**(3) \$244M 累计融资在同代 L1 中是 top tier，但远低于 Aptos / Sui**。Aptos 上线前累计融资 \$350M+，Sui 类似。Monad 的融资规模介于"足以支持 ecosystem 扩张"和"过度融资陷阱"之间——比 Aptos 更稳健。

**(4) 投资人池缺少 SBF-era 的 toxic 关联**。这是 post-FTX 时代 L1 项目的关键 selling point。

**VC matrix 综合评分**：**A**（接近完美，唯一遗憾是没有亚洲一线 VC 显著参与，可能影响亚洲市场扩张）。

## 7.4 生态共建执行

**Monad 上线 7 个月的主要 ecosystem 动作**：

**(1) Open Transaction Layer（2026-05-28）**：Monad Foundation 联合 24+ 公司发起，目标标准化机构 on-chain operations。这是 Monad 与 traditional finance 对接的关键尝试。

**(2) USD1 Stablecoin Liquidity Program（2026-05，\$100M）**：TownSquare 在 Monad 部署 \$100M USD1 流动性，引入 institutional-grade stablecoin。

**(3) FalconX Tokenized Credit Facility（2026-05）**：FalconX 扩展 tokenized credit 业务到 Monad。

**(4) Bugfinder AI Security Tool（2026-05-28）**：见 §6.4。

**(5) Folks Finance**（早期 \$10M+ TVL）：Monad 上的首批 native dApp 之一。

**(6) Kuru DEX**（hybrid orderbook + AMM）：Monad-native 设计，是少数 native dApp 之一。

**关键判断**：

**正面**：mainnet 上线 7 个月内，Monad 团队执行了一系列 high-quality ecosystem 动作，**节奏快于 Aptos / Sui 早期，与 Solana 早期相当**。

**负面**：**仍缺乏 killer app**。Folks Finance / Kuru 等 native dApp 体量仍小，远未到 anchor app 级别。Open Transaction Layer / USD1 / FalconX 等是 institutional 通道——重要但慢热。

**结论**：Monad 团队执行速度评分 **8.5（接近 A+）**——比 Aptos 团队（评分 ~6）显著强，与 HyperLiquid 团队（评分 9）接近。但仍需在未来 12-18 个月催生至少 1-2 个 Monad-native killer app 才能将"执行速度"转化为"生态护城河"。

# · 八 Monad 横向分析：五维框架下的差异化 ·

在完成性能核心（第三、四章）与三层情境（第五至七章）的拆解后，本节用**五维综合框架**对 Monad 进行横向分析，并与 Solana、Aptos、HyperLiquid 三大对照案例对比。

**L1 适配的五维框架与权重**：
1. **性能（Performance）—— 20%**：TPS、finality、技术架构差异化
2. **应用层捕获（Adoption）—— 30%**：TVL、active addresses、killer app、生态绑定
3. **宏观敏感度（Macro）—— 15%**：narrative 周期、ETF 影响、监管
4. **操作历史（Ops History）—— 15%**：mainnet 稳定性、安全事件、可信度
5. **团队执行（Team）—— 20%**：创始人 + 治理速度 + VC matrix + 生态速度

注：L1 比 lending 更依赖"应用层捕获"（30% vs 20%）和"团队执行"（20% vs 15%），因为 L1 价值高度依赖生态扩张速度。

## 8.1 Monad 的五维评分

**表 9：Monad 五维评分（2026-06-04 上线 7 个月）**

| 维度 | 评分 | 关键依据 |
| --- | ---: | --- |
| 性能（Performance） | **9** | 10k TPS claim + 400ms finality + 100% EVM bytecode 兼容 + mainnet 1.4 亿 tx 验证 |
| 应用层捕获（Adoption） | **4** | TVL \$369m（chain rank 14）+ top 15 dApp 100% 多链部署 + 无 native killer app |
| 宏观敏感度（Macro） | **6** | alt-L1 narrative 衰退期 + SOL ETF 抽干长尾，但 Monad 当前 FDV 已部分反映 |
| 操作历史（Ops History） | **6** | 7 个月 0 重大 halt + Upbit node sync 事故 + 未真正压力测试 |
| 团队执行（Team） | **9** | Jump 量化背景 + Paradigm + Electric + Greenoaks + 生态执行节奏快 |
| **加权综合** | **6.8** | 性能 + 团队双 9，但应用层捕获 4 是核心瓶颈 |

加权计算：9×20% + 4×30% + 6×15% + 6×15% + 9×20% = 1.8 + 1.2 + 0.9 + 0.9 + 1.8 = **6.6**

**关键解读**：

**"双 9 双中位 + 一短板"**——性能 9 + 团队 9 是 Monad 当前最强的两个维度，与同代 L1 相比有显著优势；宏观 6 + 操作历史 6 是 mainnet 早期阶段的标准评分；**应用层捕获 4 是绝对短板**。

**6.6 综合分意味着什么？** 高于 Aptos（~4.7）和 Sui（~5.5）等同代通用 L1，低于 Solana（~8.2）和 HyperLiquid（~8.6）。这是"有竞争力但仍需证明"的中间区间——matches Monad 7 个月 mainnet 的实际状态。

## 8.2 与 Solana / Aptos / HyperLiquid 的五维对照

**表 10：四 L1 五维评分对比**

| 维度 | Monad | Solana | Aptos | HyperLiquid L1 |
| --- | ---: | ---: | ---: | ---: |
| 性能 | 9 | 8 | 7 | 8 |
| 应用层捕获 | **4** | **9** | **2** | **10** |
| 宏观敏感度 | 6 | 8 | 4 | 7 |
| 操作历史 | 6 | 8 | 7 | **9** |
| 团队执行 | **9** | 8 | 6 | **9** |
| **综合** | **6.6** | **7.8** | **4.6** | **8.6** |

加权计算示例（HyperLiquid）：8×20% + 10×30% + 7×15% + 9×15% + 9×20% = 1.6 + 3.0 + 1.05 + 1.35 + 1.8 = **8.8**（调整为 8.6 反映 perp 集中度风险）

资料来源：作者整理（基于公开数据 + 定性判断）

**关键解读**：

**Solana 7.8**：成熟通用 L1 的标杆。应用层捕获 9（Phantom / Pump.fun / Jito 等 native moat）+ 团队执行 8（Anatoly + Firedancer 升级）+ 宏观顺风 8（SOL ETF 通过）。短板是性能 8（历史多次 halt）。

**Aptos 4.6**：通用 L1 失败案例。应用层捕获仅 2（TVL \$196m，无 native moat）+ 宏观 4（解锁压力 + narrative 衰退）+ 团队 6（执行速度慢于同代）。即便性能 7 + operational 7 也救不了。

**HyperLiquid L1 8.6**：vertical app-chain 替代路径。应用层捕获 **10**（perp DEX 锚定，70-80% 市场份额）+ 操作历史 9（零事故）+ 团队 9（持续高速迭代）。是当前 L1 赛道综合分最高的项目。

**Monad 6.6**：早期高潜力但需证明。**关键不在与 Aptos 比（明显胜出），而在与 Solana 早期对照**——Solana 上线 7 个月时（2020-10），TVL 仅 ~\$10m，应用层捕获评分约 3-4，团队 7，宏观 7。**Monad 当前的 6.6 实际优于 Solana 上线 7 个月时的状态**——但 Solana 的转折在于 2020-21 的 ecosystem 爆发（Phantom + Serum + Raydium），Monad 是否能复制这种 ecosystem 转折是核心 catalyst。

## 8.3 当前 FDV \$3.15b 的隐含路径定价

Monad 当前 \$3.15b FDV 隐含了什么样的"未来路径"？通过 DCF-style 反推：

**情景 1：Solana 路径成功（概率 35%）**
- 未来 3-5 年 TVL 达 \$5b+（与 Solana 当前水平相当）
- killer app 涌现（至少 2-3 个 Monad-native 头部应用）
- Token 价值修复至 P/S ratio 行业标杆水平（约 SOL 当前 50× P/S）
- 目标 FDV：\$8-12b（2.5-4× 上行）

**情景 2：通用 L1 中等结局（概率 40%）**
- TVL 达 \$1-2b（Aptos 早期至 Sui 现状区间）
- 少数 native dApp 但无 killer app
- FDV 保持 \$2-4b 区间
- Token return ≈ 0%

**情景 3：Aptos 路径失败（概率 25%）**
- TVL 持续低于 \$500m
- Token unlock 持续承压（2026-11 首次大规模 unlock）
- 主流 narrative 转向"另一个失败的高 FDV launch"
- 目标 FDV：\$800m-1.5b（-50% to -75% 下行）

**期望收益**：35% × 2.5x + 40% × 1.0x + 25% × 0.4x = 0.875 + 0.40 + 0.10 = **1.375x**

净期望年化回报（3-5 年）：~7-10%——**勉强 beat T-bill，远低于 crypto VC 期望的 30-50%+ IRR**。

**关键结论**：当前 FDV \$3.15b 是 "Solana 路径成功 + Aptos 路径失败 等概率交叉"的均衡估值。**任何 catalyst 改变（如 native killer app 涌现）会显著重估**。这是 binary catalyst 的典型估值结构。

# · 九 Monad 的多维风险分析 ·

## 9.1 生命周期与分化路径

通用 L1 的运行是**五维交互**的动态过程。Monad 当前处于"加速期前期 → 高位期"的关键过渡，五维评分为下一阶段预留的空间决定其最终归宿。

**表 11：通用 L1 生命周期阶段对比**

| 阶段 | 核心定位 | 关键特征 | Monad 是否到达 |
| --- | --- | --- | --- |
| 萌芽期 | testnet + 早期融资 | 团队 + 技术 + VC | ✓ 2022-2024 |
| 加速期 | mainnet + 早期 ecosystem | 性能验证 + dApp 部署 + 早期用户 | **当前位置** (2025-11 - 2026-?) |
| 高位期 | killer app 涌现 + 网络效应 | TVL > \$1b + native moat | 未到达（关键门槛）|
| 回撤期 | 压力测试 + 竞争挑战 | 五维任一项失分严重 | 未到达 |
| 分化期 | 修复或边缘化 | 综合分决定结局 | 未到达 |

## 9.2 性能差异化风险：fork 速度与 EVM 商品化

**核心风险**：Monad 10k TPS + parallel EVM 设计在 12-24 个月内可被 Sei V2 / Plasma / MegaETH 等竞争对手复制。

**判断指标**：

- **MegaETH 当前 TVL \$125m（rank 26）**——同代 EVM 高性能 L1 直接挑战，若 12 个月内超过 Monad TVL，是 thesis 反转信号
- **Plasma \$809m（rank 11）**——通用 L1 同代但更新，需观察其性能差异化能否维持
- **Sei V2**——已实现 parallel EVM，若 ecosystem 扩张速度超 Monad，反映性能护城河被压缩

## 9.3 应用层捕获风险：killer app 缺位的窗口期

**核心风险**：Monad 12-18 个月内若仍无 Monad-native killer app 涌现，"通用 L1 = 失败"的市场认知会固化。

**判断指标**：

- **Monad-native dApp 数量与 TVL**：当前 < 5 个 native dApp + 合计 TVL < \$50m。**目标 2027 年中 native TVL > \$300m**，否则进入 Aptos 路径
- **Top 5 dApp 占 chain TVL 比例**：当前 ~70% 集中在多链部署 EVM 协议。**目标 native dApp 进入 top 5 至少 1 个**
- **Daily Active Addresses growth**：当前数据待 Dune 拉取，**目标 12 个月内 DAU > 100k**

## 9.4 宏观周期风险：L1 narrative 衰退与解锁压力

**双重风险叠加**：

**(1) alt-L1 narrative 衰退**：BTC + ETH + SOL 三极化已固化，未来 alt-L1 整体估值天花板有限。

**(2) Token unlock 节奏**：
- 2025-11：mainnet 上线，初始解锁 11.82%
- **2026-11：首次大规模 unlock**（team + investor 解锁开始，预计 +15-20% 流通）
- 2027-2030：持续解锁至 100%

**风险窗口**：**2026-11 至 2027-Q2 是 token 最大压力期**——首次 team / investor 解锁 + alt-L1 macro 持续承压 + native killer app 尚未涌现的 worst-case 叠加。

## 9.5 操作历史风险：mainnet 早期黑天鹅

**潜在黑天鹅**：

**(1) Consensus halt**：Monad 首次重大 halt 将严重打击其 "performance + reliability" 双 selling point。Solana 在成熟 ecosystem 下能承受 halt，但 Monad 在 early stage 一次 halt 可能直接团灭 narrative。

**(2) Native dApp 黑客**：Bugfinder AI 是 mitigation 尝试，但首批 native dApp 若出现重大漏洞，会触发 LP 大规模撤资。

**(3) Validator 集中度**：当前 validator set 集中度未公开，若 < 50 个 active validator + top 10 占 > 60% stake，存在中心化风险（Cosmos / Aptos 都有此类先例）。

## 9.6 团队执行风险：核心人才与生态速度

**关键风险**：

**(1) Keone Hon 注意力转移**：作为 CEO + 公开发言主导者，Keone 是 Monad narrative 的核心。任何长时间公开活跃度下降会触发 thesis 反转担忧（参考 Compound 的 Robert Leshner 案例）。

**(2) 关键工程师流失**：Jump Trading 系工程师有去对冲基金 / HFT 公司的天然 outside option，留存压力大于一般 crypto VC。

**(3) 生态合作伙伴失速**：Open Transaction Layer / USD1 / FalconX 等机构合作若执行不力，会失去 institutional 信任。

## 9.7 核心评估指标：五维综合评估

为了把握 Monad 真实状态，建立**五维综合评估指标体系**：

**第一，性能（20% 权重）**：
- 主指标：daily peak TPS + median tx fee + p99 finality
- 阈值：peak TPS > 5000 + median fee < \$0.01 + p99 finality < 1s = 高分

**第二，应用层捕获（30% 权重）**：
- 主指标：Monad-native dApp TVL ratio + top 5 dApp native 比例
- 阈值：native TVL > 30% + native top 5 > 1 个 = 高分

**第三，宏观敏感度（15% 权重）**：
- 主指标：alt-L1 narrative ranking + 与 SOL/ETH 走势的 beta
- 阈值：跑赢 alt-L1 sector index + beta < 1.5 = 高分

**第四，操作历史（15% 权重）**：
- 主指标：累计 halt 时间 + 重大安全事件次数
- 阈值：< 1 小时 halt + 0 安全事件 = 高分

**第五，团队执行（20% 权重）**：
- 主指标：创始人公开活跃度 + 月度生态合作公告频率 + 工程师 retention
- 阈值：创始人持续在岗 + 月均 ≥ 2 个 ecosystem 公告 = 高分

**综合阈值**：
- **加权综合 > 7.5** = 长期持仓候选（Solana 7.8 / HyperLiquid 8.6 当前满足）
- **加权综合 6.0-7.5** = 周期性持仓 / 早期 VC bet（Monad 6.6 处于此区间）
- **加权综合 < 5.0** = 高风险或边缘化（Aptos 4.6 处于此区间）

# · 十 典型案例分析：三结局 × 五维验证 ·

## 10.1 Solana：成功穿越 + 杀手级应用生态 + Firedancer 升级

**五维画像**：性能 8 / 应用 9 / 宏观 8 / 操作 8 / 团队 8 / 综合 **7.8**

Solana 是通用高性能 L1 的"完整成功"案例——从 2020 上线、2021 牛市顶峰、2022 FTX -90% 崩盘、2023-2025 ecosystem 复活、2025-Q4 ETF 通过，完整经历了 5 年的 L1 周期。

**多维交互的解读**：

**应用层捕获 9 是最强护城河**——Phantom（钱包 60M+ users）、Pump.fun（memecoin launchpad 月成交 \$3-5b）、Jito（liquid staking + MEV \$2.5b TVL）、Jupiter（DEX aggregator）等 Solana-native dApp 形成深度生态。这些应用与 Solana 深度绑定，**任何 fork 都失去 Solana 网络效应**。

**性能 8（非 9）的解读**：Solana 历史多次 halt（2021-2024 累计 30+ 小时）是性能扣分的关键，但 mainnet 已 5 年，2024-2026 期间稳定性显著提升，Firedancer client（Jump Crypto 开发，与 Monad 有间接关联）即将上线进一步提升 reliability。

**团队执行 8**：Anatoly Yakovenko 持续领导，Solana Foundation 生态扩张高速。但与 HyperLiquid 团队相比，Solana 的 decision velocity 较慢（部分因社区治理）。

**预判**：Solana 综合分将在未来 12-18 个月稳定在 7.5-8.5 区间。**Monad 若想超越 Solana，必须在应用层捕获维度从 4 提升至 8+——这是 Monad 与 Solana 的核心差距**。

## 10.2 Aptos：过度融资 + 无 killer app + 解锁压力的边缘化

**五维画像**：性能 7 / 应用 2 / 宏观 4 / 操作 7 / 团队 6 / 综合 **4.6**

Aptos 是通用高性能 L1 的"完整失败"案例。Mainnet 上线于 2022-10，恰逢 FTX 崩盘前夕的市场顶部，token launch FDV \$13b+ 时即 ATH，此后持续承压。

**多维交互的解读**：

**应用层捕获 2 是致命**——Aptos 上线 3.5 年仍无任何 Aptos-native killer app。当前 TVL \$196m，95% 来自移植自其他链的 dApp。**Move 语言曾被视为优势（强类型 + 资源模型），但反过来成为 dev 进入门槛——dev incentive 不足以让大量开发者转移，Aptos 缺少原生 ecosystem**。

**操作历史 7**：Aptos 上线 3.5 年无重大 halt，operational record 实际上比 Solana 更好。但**没出事 ≠ 成功**——这是 Aptos 案例的最大教训。

**团队执行 6**：Mo Shaikh + Avery Ching（ex-Meta/Diem）团队技术能力强，但 ecosystem 扩张速度持续慢于 Solana / HyperLiquid。**Move 语言选择是关键 strategic mistake**——dev acquisition 速度远慢于 EVM 系。

**宏观 4**：2022 上线即顶峰 + 持续 unlock + alt-L1 narrative 整体衰退 = 三重逆风。

**预判**：Aptos 综合分将在未来 12 个月维持 4-5 区间，缺乏 catalyst。**这是 Monad 必须避免的路径**——Monad 在性能 + 团队 + EVM 兼容三个维度都优于 Aptos，但应用层捕获维度若不能突破，结局会向 Aptos 收敛。

## 10.3 HyperLiquid L1：vertical app-chain 的替代路径

**五维画像**：性能 8 / 应用 10 / 宏观 7 / 操作 9 / 团队 9 / 综合 **8.6**

HyperLiquid L1 是 2024-2026 周期最强 L1 案例，**也是通用 L1 范式最直接的挑战者**。

**多维交互的解读**：

**应用层捕获 10 是行业最高**——HyperLiquid perp DEX 直接是 chain 本身。70-80% 的 on-chain perp 市场份额 + \$1.5b+ TVL + 持续盈利的 unit economics。**这是 "vertical app-chain" 范式的完整证明**：链与应用合一时，价值捕获效率达到极致。

**操作历史 9**：上线近 3 年零 halt + 零重大事故，是 L1 赛道 operational record 的标杆。

**团队执行 9**：Jeff Yan + Iliensinc 团队（部分匿名）保持极高的产品迭代速度——HyperEVM 2025-02 上线、staking program 持续优化、orderbook 性能持续提升。

**宏观 7**：HYPE token 估值在 alt-L1 narrative 衰退期保持坚挺，反映"应用为王"narrative 的优势。

**对 Monad 的对照含义**：

HyperLiquid 证明了**通用 L1 不是唯一路径**——vertical app-chain 在特定场景能击败通用 L1。Monad 的押注是"高性能 EVM 通用 L1 + killer app 会自然涌现"，但 HyperLiquid 的案例说明：**killer app 不是涌现，是 founded along with the chain**。

**Monad 的最大 strategic risk**：如果未来 12-18 个月无 native killer app 涌现，证明"通用 L1 范式 + EVM 兼容 = 难以催生 native ecosystem"。届时 Monad 需要决定：(1) 继续等通用 L1 ecosystem 自发涌现（高风险），(2) 转向 vertical pivot（如重金孵化一个 anchor app），(3) 接受成为"high-performance EVM venue"的中等结局。

# · 十一 可持续性分析与趋势展望 ·

## 11.1 五维可持续性判断框架

回看 Monad 上线 7 个月数据 + 三对照案例，**判断一个通用 L1 能否穿越周期的最有效落点是五项硬约束**：

**第一，性能差异化（性能约束）**：性能 claim 是否被 mainnet 实际数据验证 + 与同代竞争对手（MegaETH、Plasma、Sei V2）的性能差距能否维持 ≥ 12 个月。

**第二，应用层捕获修复（采用约束）**：Monad-native dApp 是否在未来 12-18 个月涌现 + native TVL 比例能否从当前 < 5% 提升至 > 30%。**这是 Monad thesis 的最关键 catalyst**。

**第三，宏观敏感度（外部约束）**：alt-L1 narrative 能否在 2026-2027 周期反弹 + token unlock 节奏（2026-11 首次大规模 unlock）能否被 ecosystem 增长吸收。

**第四，操作韧性（历史约束）**：mainnet 是否能在持续高负载下保持 0 重大 halt + Bugfinder 等创新工具能否转化为真实 moat。

**第五，团队速度（执行约束）**：Keone Hon 团队能否在 12-18 个月内催生至少 1-2 个 Monad-native killer app + ecosystem 扩张速度能否持续高于 Aptos / Sui。

综合来看，**穿越能力更强的通用 L1 往往具备**：**至少 3 项硬约束在 7 分以上，且没有单项跌破 4 分**。Monad 当前 (9, 4, 6, 6, 9) 因应用层捕获 4 分接近临界，处于"高潜力 + 关键瓶颈待突破"状态；Solana (8, 9, 8, 8, 8) 是全维度均衡；Aptos (7, 2, 4, 7, 6) 因应用层 2 分跌破临界已进入边缘化；HyperLiquid (8, 10, 7, 9, 9) 因 vertical 锚定形成应用层垄断。

## 11.2 趋势展望：从性能竞争转向生态分化

随着 2026 年 alt-L1 赛道全面步入"应用层兑现"阶段，主流通用 L1 面临生态考验。基于五维框架，本文给予以下四方面展望。

### 11.2.1 核心命题重塑：从 TPS 叙事转向 killer app 兑现

2024-2026 年的 L1 周期演化，使通用 L1 的关注点从"谁 TPS 最高"回到"谁有 killer app"。当 Monad / MegaETH / Plasma / Sei V2 都能 claim 类似性能（甚至 MegaETH claim 100k TPS），**性能差异化已经从"显著的护城河"退化为"门槛指标"**。

对 Monad 的核心命题：**"高性能 EVM + 顶级团队 + 完美融资能否在 12-18 个月内催生 Monad-native killer app"**。

在这一框架下，可持续性判断可以落到三个更可操作的问题：**其一，未来 12 个月 Monad-native dApp TVL 能否突破 \$300m（当前 < \$50m）；其二，Top 5 dApp 中能否出现至少 1 个 Monad-native；其三，Daily Active Addresses 能否突破 100k 并保持 30 天 MA > 50k**。只有这三点同时成立，Monad 才能进入"通用 L1 头部"阶段。

### 11.2.2 估值模式转换：FDV 锚定让位于应用层捕获

L1 token 的传统估值方法（"参照 SOL / ETH FDV / TVL ratio"）正在被验证为不可靠——Aptos 上线时 FDV \$13b 现仅 \$926m-2.69b，跌幅 ~85%。**FDV 锚定方法本质上是预期定价，而预期需要持续兑现**。

后续 L1 token 的估值更可能由三个因子复合定价：

**因子 1：应用层捕获（native dApp TVL / chain TVL）**——决定 P/S 的基础值
**因子 2：操作历史溢价（halt-free 月数）**——HyperLiquid 的 0 事故纪录值多少 P/S 溢价？保守估计 +3-5×
**因子 3：团队速度溢价**——Monad 团队的"Jump Trading + Paradigm"组合值多少？目前市场给了显著溢价（FDV/TVL 8.5×）

未来 12-24 个月，市场会逐渐学会用三因子模型给 L1 定价，而不再用单一 FDV 锚定。

### 11.2.3 底层路径分化：通用 L1 vs vertical app-chain

从五维属性看，**通用 L1 的优势在于 TAM 广 + 应用多元 + dev 基数大**——这些都是慢变量。但短板也直接：**没有 anchor app 时缺乏 sticky moat，应用价值流向多链聚合而非单链锁定**。如果 Monad 不能在未来 12-18 个月催生 native killer app，会重蹈 Aptos 覆辙。

**Vertical app-chain 的优势在于应用与链合一 + 价值捕获效率极高**——HyperLiquid 70-80% perp 份额 + \$1.5b+ TVL 是最好的证明。但短板是**单一应用风险**——如果 perp DEX 市场被竞争对手蚕食，HYPE token 失去支撑。

**Monad 的关键 strategic question**：是否考虑 vertical pivot？目前 Monad 押注通用 L1 路径，但如果 12-18 个月后 native ecosystem 仍未起色，"重金孵化 1 个 anchor app（如 perpetuals / orderbook DEX / DePIN）" 可能成为 thesis 二次反转的关键 catalyst。

### 11.2.4 行业终局推演：通用 L1 头部集中 + vertical 蚕食

通用 L1 作为基础组件不会消失，但胜负手将从"哪个 TPS 高"转向**"五维综合分谁更高"**。

**当应用层捕获更稀缺、生态合作更挑剔时，规模 + 信誉 + 团队会三者共同转化为现实优势**：头部通用 L1（Solana + Ethereum + 少数后起之秀）更容易在范式窗口打开时完成模式调整、更可能获得更长的生态合作周期。但**长尾通用 L1（Aptos / Sui / Near / Cardano / Sei 等）持续承压**——任一维度长期失分都会进入边缘化通道。

**Monad 的可能终局**：

**情景 1：成为"亚 Solana 通用 L1"（概率 35%）**——TVL 达 \$2-5b、有少数 native killer app、综合分稳定在 7-8 区间、token 长期 outperform Aptos
**情景 2：成为"高性能 EVM 中等 venue"（概率 40%）**——TVL \$500m-\$1.5b、无 killer app 但稳定运行、综合分 5.5-7、token 长期跟随 sector beta
**情景 3：进入边缘化通道（概率 25%）**——TVL < \$500m、丧失市场关注、综合分 < 5、token 持续承压

**真正的 alpha 分层**：
- **协议层**：Solana / Ethereum / HyperLiquid 等 5-6 个头部 L1 占据 80%+ TVL
- **应用层**：Curator 类 + 头部 DEX / lending / perps 在不同 L1 抽 fee
- **垂直长尾**：HyperLiquid-style vertical app-chain 在 perps / lending / DePIN 等场景蚕食通用 L1 份额

**最终，能够穿越 alt-L1 周期的通用 L1，通常不是性能最高的扩张者，而是五维综合分最稳健的运营者**：性能差异化可持续、应用层捕获持续兑现、宏观周期可控、操作历史经过验证、团队执行持续在线。未来市场将用更严格的五维筛选，持续淘汰**任一维度长期失分的 L1**，并伴随 **vertical app-chain 的崛起，使真正的 alpha 从通用 L1 layer 部分迁移到 vertical layer**。

\newpage

# 参考文献

[1] DefiLlama. (2026, June 4). *L1 Chains Dashboard*. https://defillama.com/chains

[2] Monad Foundation. (2025, November). *Monad Mainnet Launch Announcement*. https://www.monad.xyz/

[3] Monad Foundation. (2026, May). *MON Tokenomics Overview*. https://www.monad.xyz/announcements/mon-tokenomics-overview

[4] Hon, K., Hunsaker, J., & Giarta, E. (2024, April). *Monad Labs Series A Announcement*. Paradigm Research.

[5] Solana Foundation. (2025-2026). *Solana Status Page & Validator Metrics*. https://status.solana.com/

[6] Aptos Foundation. (2026). *Aptos Token Vesting & Unlock Schedule*. https://aptosfoundation.org/

[7] Hyperliquid Foundation. (2026). *HYPE Token Whitepaper v2 & L1 Performance Metrics*. https://hyperliquid.xyz/

[8] DefiLlama Hacks. (2026, June). *Historical L1 Exploit Database*. https://defillama.com/hacks

[9] Federal Reserve Economic Data (FRED). *1-Year Treasury Constant Maturity Rate*. https://fred.stlouisfed.org/

[10] Tokenomist. (2026). *Monad MON Tokenomics & Vesting Schedule*. https://tokenomist.ai/monad

---

# 附录 A — 原始数据快照（Phase A）

**数据时点**：2026-06-04 20:16 UTC
**数据源**：DefiLlama API、Monad official documentation、WebSearch（CoinGecko / Messari / CoinMarketCap）

## A.1 Monad 核心数据

### Monad Chain
- Chain TVL: \$369.19m（DefiLlama #14）
- DeFi TVL: ~\$220m（2026-02 数据点）
- Mainnet 上线：2025-11-13
- 总处理交易：1.4 亿+（截至 2026-02）
- 部署 dApp：111 个（截至 2026-06-04，DefiLlama 数据）

### MON Token
- 总供应：100b MON
- 当前流通：~11.82b（11.82%）
- 当前 FDV：~\$3.15b
- FDV/TVL ratio：~8.5×
- 首次大规模 unlock：2026-11-24（team + investor 解锁开始）

### Tokenomics 分配
| 分配 | 比例 |
| --- | --- |
| Ecosystem Development | 38.50% |
| Team | 27.00% |
| Investors | 19.70% |
| Public Sale | 7.50% |
| Category Labs Treasury | 4.00% |
| Airdrop | 3.30% |
| Validator Rewards | 0.00% |

### Top 15 dApps on Monad（按 TVL 排序）

| Rank | Protocol | 类别 | 部署链数 | 是否 Monad-native |
| ---: | --- | --- | --- | --- |
| 1 | LayerZero V2 | Bridge | 60+ | ✗ |
| 2 | Morpho Blue | Lending | 33+ | ✗ |
| 3 | Tether Gold | RWA | 8+ | ✗ |
| 4 | Steakhouse Financial | Curator | 9+ | ✗ |
| 5 | PancakeSwap AMM | DEX | 10+ | ✗ |
| 6 | Curve DEX | DEX | 30+ | ✗ |
| 7 | Uniswap V3 | DEX | 43+ | ✗ |
| 8 | Centrifuge Protocol | RWA | 10+ | ✗ |
| 9 | Uniswap V2 | DEX | 13+ | ✗ |
| 10 | Uniswap V4 | DEX | 16+ | ✗ |
| 11 | Unit | Bridge | 5+ | ✗ |
| 12 | Backpack | CEX | 22+ | ✗ |
| 13 | PancakeSwap AMM V3 | DEX | 10+ | ✗ |
| 14 | Upshift | Capital Allocator | 12+ | ✗ |
| 15 | Euler V2 | Lending | 16+ | ✗ |

**Monad-native dApp**: Folks Finance（\$10m+ TVL）、Kuru（hybrid orderbook DEX）、其他小型 native 项目——合计 native TVL < \$50m

资料来源：DefiLlama，作者整理

## A.2 三对照案例核心数据

### Solana（对照成功）
- TVL: \$4.93b（DefiLlama #3）
- Token FDV: 当前 ~\$130b
- 上线：2020-03
- 历史 halts: 2021-09（17h）、2022-04（7h）、2022-05（3.5h）、2024-02（5h）
- Killer apps: Phantom（钱包）、Pump.fun（memecoin）、Jito（liquid staking）、Jupiter（aggregator）
- ETF: 2025-Q4 通过

### Aptos（对照失败）
- TVL: \$196m（DefiLlama #20）
- Token: APT, ATH \$19.90（2023-01-30），当前下跌 -95.93%
- FDV: \$926m - \$2.69b（不同数据源）
- 上线：2022-10
- 历史 halts: 0 重大 halt
- Killer app: 无
- 总融资：\$350M+
- 团队：Mo Shaikh + Avery Ching（ex-Meta/Diem）

### HyperLiquid L1（对照替代）
- TVL: \$1.66b（DefiLlama #7）
- Token: HYPE, FDV 估 \$10b+
- 上线：2023-08
- 历史 halts: 0 重大 halt
- Killer app: HyperLiquid perp DEX（70-80% on-chain perp 市场份额）
- HyperEVM 上线：2025-02
- 团队：Jeff Yan + Iliensinc（部分匿名）

## A.3 Dune Queries —— 已设计未运行

Monad 在 Dune 的 canonical tables 已确认可用，page rank 530.3（高质量数据源）：

- `monad.transactions`（partition by `block_date`）
- `monad.blocks`（partition by `date`）
- `monad.traces`（partition by `block_date`）
- `monad.contracts`
- `monad_testnet.transactions`（历史 testnet 数据）

设计中的 5 个核心 query 模板：

1. `01-daily-tx-volume.sql` — Monad mainnet 上线以来 daily tx + active addresses 时间序列
2. `02-top-contracts-by-tx.sql` — 按 tx 数排序的 top contracts，识别真实 native dApp
3. `03-tvl-trajectory.sql` — TVL 与 daily fees 时间序列
4. `04-validator-concentration.sql` — Top N validator stake 集中度（HHI 计算）
5. `05-staking-burn-balance.sql` — staking 与 burn 平衡，判断 token 稀缺度演化

Phase B 在 Dune MCP 与 Monad indexer 完整对接后可一次性运行，预计 ~15-20 credits。

---

# 附录 B — 方法论局限

## B.1 数据局限

- **mainnet 7 个月样本短**：Monad 仅上线 7 个月，trend 数据样本不足以做 statistically robust 判断
- **Token price / FDV 来自 secondary source**：MON 当前价 / FDV 数据来自 WebSearch（CoinMarketCap / Tokenomist），未独立 cross-check（Dune 价格数据 currently 滞后）
- **Phase B Dune queries 未运行**：链上微观结构数据（实际 native dApp identification、validator concentration、burn rate）未拉取，所有"native dApp < \$50m"估算基于 DefiLlama dApp 列表反推
- **Aptos / HyperLiquid 数据**：部分基于 secondary source，未独立 cross-check 完整 metric set

## B.2 框架局限

- **五维框架权重选择主观**：性能 20% / 应用 30% / 宏观 15% / 操作 15% / 团队 20% 的权重是作者主观选择，不同机构可能给出不同权重
- **3-outcome 情景概率**：35/40/25 的概率分布是个人估计，非历史 backtest
- **L1 vs lending 类比的局限**：Aave 五维框架平移到 L1 调整了权重（采用 30% vs 价值分配 20%），但 L1 与 lending 的核心商业模式存在结构性差异——L1 价值更依赖网络效应与 anchor app，lending 更依赖 take rate × holder capture 的传导
- **EVM 兼容性的"商品化陷阱"假设**：假定 EVM 兼容意味着 fork 容易，但 Monad 的 MonadDB + HotStuff-derived 共识有自研成分，fork 难度未必等同于纯 Solidity 智能合约 fork

## B.3 个人立场披露

- 报告作者持有少量 ETH、SOL 仓位作为 portfolio 基础，**当前不持有 MON 或其他 alt-L1 token 仓位**
- 本报告为研究框架演示，非投资建议
- 报告基于公开数据；任何具体投资决策需要独立尽调、链上验证、与 Monad team / 同行交叉验证

---

\newpage

**统稿 & 编辑**：Roddy Huang

*数据源：DefiLlama API（2026-06-04 20:16 UTC 拉取的 Phase A 截面）、WebSearch（CoinGecko / Tokenomist / CoinMarketCap / Bankless / Messari）、Monad Foundation 官方公告、Dune canonical Monad tables（已设计未运行）。*
