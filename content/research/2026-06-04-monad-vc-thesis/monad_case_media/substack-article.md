---
title: "Monad：是下一个 Solana，还是下一个 Aptos？"
subtitle: "上线 7 个月的五维博弈 · 性能飞轮 ↔ 商品化 EVM 陷阱"
author: "Roddy Huang"
date: "2026-06-04"
reading_time: "20 分钟"
documentclass: article
geometry: "margin=2.4cm, top=2.8cm"
fontsize: 11pt
linestretch: 1.45
mainfont: "Songti SC"
sansfont: "Heiti SC"
monofont: "Menlo"
CJKmainfont: "Songti SC"
CJKsansfont: "Heiti SC"
linkcolor: "RoyalBlue"
urlcolor: "RoyalBlue"
toccolor: "black"
toc: true
toc-depth: 2
numbersections: false
header-includes: |
  \usepackage{graphicx}
  \usepackage{float}
  \usepackage{xcolor}
  \usepackage{tcolorbox}
  \usepackage{fancyhdr}
  \usepackage{titlesec}
  \usepackage{enumitem}
  \definecolor{accentblue}{HTML}{1A6FF2}
  \definecolor{accentpurple}{HTML}{9B26AF}
  \definecolor{accentred}{HTML}{E74C3C}
  \definecolor{accentgreen}{HTML}{27AE60}
  \definecolor{accentorange}{HTML}{F39C12}
  \definecolor{lightgray}{HTML}{F5F5F5}
  \definecolor{darkgray}{HTML}{4A4A4A}
  \titleformat{\section}{\normalfont\Large\bfseries\color{accentpurple}}{\thesection}{1em}{}
  \titleformat{\subsection}{\normalfont\large\bfseries\color{darkgray}}{\thesubsection}{1em}{}
  \pagestyle{fancy}
  \fancyhf{}
  \rhead{\small\color{darkgray}Roddy Huang · Web3 VC Research}
  \lhead{\small\color{darkgray}Monad 五维博弈}
  \rfoot{\small\thepage}
  \renewcommand{\headrulewidth}{0.4pt}
  \setlength{\parskip}{6pt}
  \newtcolorbox{tldrbox}{colback=accentblue!8, colframe=accentblue, boxrule=1pt, arc=4pt, left=8pt, right=8pt, top=6pt, bottom=6pt}
  \newtcolorbox{quotebox}{colback=lightgray, colframe=darkgray!40, boxrule=0.5pt, arc=2pt, left=10pt, right=10pt, top=6pt, bottom=6pt}
  \newtcolorbox{insightbox}{colback=accentpurple!8, colframe=accentpurple, boxrule=1pt, arc=4pt, left=8pt, right=8pt, top=6pt, bottom=6pt}
  \newtcolorbox{primerbox}{colback=accentgreen!8, colframe=accentgreen, boxrule=1pt, arc=4pt, left=8pt, right=8pt, top=6pt, bottom=6pt, title={\bfseries 小白入门：}}
  \newtcolorbox{macrobox}{colback=accentorange!8, colframe=accentorange, boxrule=1pt, arc=4pt, left=8pt, right=8pt, top=6pt, bottom=6pt, title={\bfseries 宏观层（外部环境）}}
  \newtcolorbox{historybox}{colback=accentred!5, colframe=accentred, boxrule=1pt, arc=4pt, left=8pt, right=8pt, top=6pt, bottom=6pt, title={\bfseries 操作历史层（压力测试）}}
  \newtcolorbox{teambox}{colback=accentgreen!5, colframe=accentgreen, boxrule=1pt, arc=4pt, left=8pt, right=8pt, top=6pt, bottom=6pt, title={\bfseries 团队执行层（同模式下的分化）}}
---

\thispagestyle{empty}
\vspace*{2cm}
\begin{center}
{\Huge\bfseries\color{accentpurple} Monad：} \\[0.4cm]
{\Huge\bfseries\color{accentpurple} 下一个 Solana 还是下一个 Aptos？}\\[1.2cm]
{\Large\itshape 上线 7 个月的五维博弈}\\[0.3cm]
{\Large\itshape 性能飞轮 ↔ 商品化 EVM 陷阱}\\[2.0cm]
{\large Roddy Huang}\\[0.4cm]
{\normalsize 2026-06-04 · 阅读时间 20 分钟}\\
\vfill
\end{center}

\newpage

# 写在前面

Monad 是 2024-2026 周期最被讨论的 L1 之一：Paradigm 领投 \$225M Series A、Jump Trading 量化背景核心团队、10,000 TPS + 400ms finality + 100% EVM 兼容的技术 claim、2025 年 11 月 13 日 mainnet 上线即处理超过 1.4 亿笔交易。但截至 2026 年 6 月初——mainnet 上线 7 个月——三组数据形成尖锐张力：

\begin{insightbox}
\textbf{Monad 上线 7 个月的真实战况}：\\[4pt]
• FDV: \$3.15b（市场预期高）\\
• Chain TVL: \$369m（DefiLlama \#14，落后 HyperLiquid 4.5×）\\
• FDV / TVL: \textbf{8.5×}（远高于行业中位）\\
• Top 15 dApp: \textbf{100\% 是多链部署的存量 EVM 协议}\\
• Monad-native killer app: \textbf{0}\\[4pt]
这是 "Solana 路径成功" 与 "Aptos 路径失败" 等概率交叉的均衡估值。
\end{insightbox}

这篇文章我用**五维框架**（与之前 Aave thesis 同一方法论，针对 L1 适配）来回答一个问题：**Monad 是下一个 Solana，还是下一个 Aptos？**

五个维度：

1. **性能（Performance）**——技术差异化能否持久
2. **应用层捕获（Adoption）**——能否催生 killer app
3. **宏观环境**——alt-L1 narrative 周期 + ETF 三极化
4. **操作历史**——mainnet 稳定性 + 安全事件
5. **团队执行**——Jump 量化 + Paradigm matrix

如果你已经熟悉 Monad 的基本面，跳到第六节"宏观层"开始读。如果你只听过"Monad 是高性能 EVM L1"，从头读到尾 20 分钟。

\newpage

# 第一节·为什么你该关心 Monad？

## 1.1 Monad 是 2024-2026 周期最强 L1 押注之一

Crypto 世界每个周期都有"宿命级 L1 押注"：

- **2017-2018**：以太坊（赢家）
- **2020-2021**：Solana / Avalanche / Fantom / Polygon（多个赢家 + 多个边缘化）
- **2022-2023**：Aptos / Sui / Sei（赢家少、失败多）
- **2024-2026**：**Monad** / Berachain / MegaETH / Plasma / Sei V2（待定）

每个周期的 L1 押注命中率大约 1/5——大多数都成了"上线即顶峰"的 token。但**赢家给的回报通常是 50-100×**（Solana 从 \$1 涨到 \$259 是 260×）。这是 crypto VC 押注 L1 的核心动机。

## 1.2 为什么 Monad 比同代 L1 更值得关注？

三个 hard data：

\begin{primerbox}
\textbf{1.} \textbf{融资规模}：\$244M 累计（\$225M Series A by Paradigm + \$19M Seed）—— 2024 年最大加密 round\\[4pt]
\textbf{2.} \textbf{团队背景}：Jump Trading 量化 8 年 + Jump Crypto，是 alt-L1 唯一一个 "HFT 系统工程师" 主导的项目\\[4pt]
\textbf{3.} \textbf{技术 claim}：10,000 TPS + 400ms finality + 100\% EVM bytecode 兼容 —— 三者同时实现的唯一 L1
\end{primerbox}

这个组合在 alt-L1 历史上极其罕见——融资 + 团队 + 技术三者都进 top tier。所以问题不是"Monad 值不值得研究"，而是"在这种顶配条件下，Monad 能否避免 Aptos 路径"。

## 1.3 为什么你该用五维框架而不是 TPS 比较？

因为 **TPS 是 alt-L1 的 "假指标"**。

Aptos claim 160k TPS。Sui claim 297k TPS。MegaETH claim 100k TPS。**但 token 都在跌**。

为什么？因为 **TPS 不等于 ecosystem，ecosystem 才是 token 价值锚**。

\begin{insightbox}
\textbf{lending 赛道我们学到的}：商业模式 2x2 只能解释 40\% 的协议命运。\\[4pt]
\textbf{L1 赛道同理}：TPS / 技术 claim 只能解释 20\% 的 L1 命运。\\
剩下 80\% 在三层情境里：宏观 + 操作历史 + 团队。
\end{insightbox}

这就是为什么我用五维框架来评估 Monad。

\newpage

# 第二节·先认识所有玩家（L1 全景）

整个 L1 宇宙是**分层 + 分类**的。先看分层：

**L1（结算层 / 安全 budget 出售）**：以太坊主导，承载 L2 与 app-chain

**L2 + App-chain 层**：Base / Arbitrum / Optimism / Hyperliquid 等

**通用高性能 L1**：Solana、Aptos、Sui、Sei、**Monad**、MegaETH、Plasma、Avalanche、Cardano、Near、Cosmos——本文重点

**Vertical app-chain L1**：HyperLiquid（perp）、Berachain（PoL DeFi）、dYdX V4（perp）

## 2.1 通用高性能 L1 现状（DeFiLlama 2026-06-04）

\begin{quotebox}
\textbf{Top 10 通用 L1 by TVL}：\\[4pt]
1. Ethereum \$38.72b（结算层）\\
2. Solana \$4.93b ← \textbf{成功对照}\\
3. BSC \$5.22b\\
4. Tron \$4.51b\\
5. Hyperliquid L1 \$1.66b ← \textbf{vertical 替代路径}\\
6. Avalanche \$525m\\
7. Sui \$459m\\
8. \textbf{Monad \$369m}（rank 14）\\
9. Aptos \$196m ← \textbf{失败对照}\\
10. Sei、Movement、MegaETH 都 < \$300m
\end{quotebox}

**关键观察**：

**(1) 通用 L1 头部集中度极高**：Ethereum + Solana 合计占 alt-L1 + ETH 总 TVL 的 80%+。这是 Monad 必须挤进的核心圈。

**(2) Monad 当前位置**：rank 14，介于 Sui 和 OP Mainnet 之间。**与 HyperLiquid L1 (\$1.66b) 的 4.5× 差距，与 Aptos (\$196m) 的 1.9× 领先**。

**(3) Vertical app-chain 崛起**：HyperLiquid L1 \$1.66b 超过 Arbitrum / Polygon / Avalanche，**证明 vertical 路径已经击败大部分通用 L1**。这是 Monad 模式必须直面的结构性挑战。

## 2.2 Monad 当前生态结构（关键反直觉数据）

我从 DefiLlama 拉了 Monad chain 上的 top 15 dApp，得到一个**反直觉发现**：

\begin{insightbox}
\textbf{Monad top 15 dApp 中，0 个是 Monad-native}。\\[4pt]
LayerZero V2、Morpho Blue、Tether Gold、Steakhouse Financial、PancakeSwap、Curve DEX、Uniswap V3/V2/V4、Centrifuge、Backpack、Euler V2 —— 全部都在 30+ 其他链上同时部署。\\[6pt]
Monad-native 项目（Folks Finance、Kuru DEX 等）合计 TVL < \$50m，未进入 top 15。
\end{insightbox}

这件事的意思是：**Monad 当前 \$369m TVL 全部是"借来的"**。

这些 dApp 部署到 Monad 的动机不是"Monad 独特"，而是"多链部署是标准动作"。Morpho Blue 部署在 33+ 链上——Monad 只是其中一个。

**类比传统行业**：这就像 Monad 是一个新开的商场。Uniswap、Curve、PancakeSwap 这些"全国连锁品牌"开了分店，给商场带来了客流和租金。但**这些品牌的核心客户关系不在 Monad，是在 Uniswap 自己**。

如果 Monad 不能孵化"商场独有"的店铺（Monad-native 杀手级应用），Monad 就只是众多商场之一——客流来来去去，商场本身没有粘性。

\newpage

# 第三节·L1 范式简史：三代商业模式

## 3.1 L1 1.0（2014-2020）：Ethereum 的"通用计算"时代

\begin{quotebox}
\textbf{核心模型}：L1 是通用计算基础设施，应用百花齐放，价值通过 gas + ETH burn 捕获
\end{quotebox}

**代表**：Ethereum

特点：图灵完备 + 智能合约 + EVM。性能不重要——TPS 30 也跑出了 DeFi summer。**应用价值 = ETH 价值**，因为 ETH 是 gas 唯一支付方式。

## 3.2 L1 2.0（2020-2024）：高性能通用 L1 时代

\begin{quotebox}
\textbf{核心模型}：L1 在通用计算基础上加性能，通过 TPS / fees 优势抢 ETH 应用
\end{quotebox}

**代表**：Solana、Avalanche、Aptos、Sui、Sei、**Monad**

特点：自研架构（Solana）或 Move 语言（Aptos/Sui）或 EVM 兼容 + 并行执行（Sei V2 / Monad）。**性能成为 differentiation 的核心 selling point**。

**结果分化**：Solana 成功（凭借 ecosystem 复活），Aptos / Sui / Sei 失败（无 killer app）。**胜负不在 TPS，在应用层捕获**。

## 3.3 L1 3.0（2023-）：Vertical App-Chain 时代

\begin{quotebox}
\textbf{核心模型}：L1 与 anchor application 合一，链层与应用层深度协同
\end{quotebox}

**代表**：HyperLiquid（perp）、Berachain（PoL DeFi）、dYdX V4（perp）

特点：单一杀手级应用就是 chain 本身。**应用价值 = L1 价值**，捕获效率极高。

**HyperLiquid 的证明**：3 年时间，从 0 到 \$1.66b TVL + 70-80% perp 市场份额。同期通用 L1 Aptos token 跌 95.93%。

\begin{insightbox}
\textbf{每次范式跃迁，价值链都会重新分配一次}：\\[4pt]
• L1 1.0：ETH 捕获所有应用价值\\
• L1 2.0：通用高性能 L1 抢 ETH 应用，但只有 Solana 成功\\
• L1 3.0：vertical app-chain 跳过通用 L1，直接 anchor app 捕获\\[6pt]
\textbf{Monad 押注的是 L1 2.0 范式（通用高性能 + EVM 兼容）}。问题是：L1 2.0 还没赢家，L1 3.0 已经在收割。
\end{insightbox}

\newpage

# 第四节·现状数据：FDV \$3.15b 隐含什么？

## 4.1 关键数据快照（DefiLlama + Tokenomist 2026-06-04）

| 项目 | 数值 | 解读 |
| --- | --- | --- |
| Mainnet 上线 | 2025-11-13 | 7 个月 |
| Chain TVL | \$369m | rank \#14 |
| 累计 tx | 1.4 亿+（截至 2026-02）| 链稳定运行 |
| MON FDV | \$3.15b | 市场期待较高 |
| 流通比例 | 11.82% | 高度未稀释 |
| FDV / TVL | **8.5×** | 远高于行业中位（2-4×）|
| 首次 unlock | 2026-11-24 | 还有 ~5 个月窗口 |
| 累计融资 | \$244M | 2024 年最大加密 round |
| Native killer app | 0 | 核心缺位 |

## 4.2 FDV \$3.15b 隐含的"未来路径"反推

通过 DCF-style 反推，Monad 当前估值隐含什么样的成功概率？

\begin{insightbox}
\textbf{情景反推}：\\[4pt]
\textbf{情景 1：Solana 路径成功（概率 35\%）}\\
TVL 达 \$5b+ + killer app 涌现 → FDV \$8-12b（2.5-4× 上行）\\[4pt]
\textbf{情景 2：中等结局（概率 40\%）}\\
TVL \$1-2b + 无 killer app → FDV \$2-4b（持平）\\[4pt]
\textbf{情景 3：Aptos 路径失败（概率 25\%）}\\
TVL < \$500m + token unlock 承压 → FDV \$800m-1.5b（-50\% to -75\%）\\[6pt]
\textbf{期望收益}：35\% × 2.5× + 40\% × 1.0× + 25\% × 0.4× = \textbf{1.375× 在 3-5 年}\\
\textbf{年化}：~7-10\%，勉强 beat T-bill
\end{insightbox}

**这是典型的 "binary catalyst" 估值结构**——市场已经定价了一个"成功概率 35\% + 失败概率 25\%"的预期，所以 token 的下一步走势完全取决于**催化剂**（killer app 涌现 vs unlock 压力）。

## 4.3 反直觉数据：MON 当前估值已经"不便宜"

很多 KOL 把 Monad 称为"早期 alpha"。但从 FDV/TVL 8.5× 看，**MON 不是早期定价**——是"高质量项目 + 高期待 + 早期数据"的混合定价。

对比：
- Solana 当前 FDV \$130b / TVL \$4.93b → FDV/TVL 约 26×（但 Solana 有 5 年 ecosystem moat 撑这个倍数）
- Aptos FDV \$926m-2.69b / TVL \$196m → FDV/TVL 约 5-14×（市场不再相信 Aptos）
- HyperLiquid FDV ~\$10b / TVL \$1.66b → FDV/TVL ~6×（vertical app-chain，有真实 cash flow）

**Monad 当前 8.5× 是"未兑现的高期待"区间**——如果 catalyst 不来，估值会向 Aptos 区间收敛。

\newpage

# 第五节·性能核心：性能飞轮 ↔ 商品化 EVM 陷阱

整个通用 L1 范式可以压成一张图——两个对称的因果环：

\begin{insightbox}
\textbf{性能飞轮（Monad 押注）}\\
高 TPS / 低 fees → 用户体验突出 → dev 涌入 → killer app 涌现 → ecosystem 网络效应 → MEV/fees 流向 MON（循环强化）\\[6pt]
\textbf{商品化 EVM 陷阱（Monad 风险）}\\
EVM 兼容 → 任何性能改进可被 fork → Sei V2/MegaETH/Plasma 等竞争对手复制 → 差异化窗口关闭 → 应用流向 Solana/HL → MON 缺乏独立锚（循环弱化）
\end{insightbox}

## 5.1 性能飞轮的三个启动条件

**条件 1：性能优势可被用户感知**

Monad 当前 mainnet 平均 ~23 tx/s（1.4 亿 tx / 7 个月），**远低于 10k TPS claim**。这不是 Monad 性能不行，是**当前 dApp 不需要 10k TPS**——多链部署的 Uniswap V4 / Curve / PancakeSwap 在 Monad 上的吞吐量远小于其在以太坊的吞吐量。

\textbf{含义}：性能优势在 mainnet 上**还未真正展示**。要让用户感知性能，需要 high-throughput 原生应用（高频 perp、AI agents、orderbook DEX、game tick）出现。

**条件 2：早期 dev 留存**

Monad Ecosystem Development 38.5% allocation 是同代 L1 中偏高的——意味着 Foundation 有充足资金 grant dev 团队。

但 **dev 来部署 ≠ dev 长期留存**。Aptos / Sui 早期都给了大量 grant，但 dev 拿了钱就走的现象很普遍。Monad 当前数据看，dev 留存表现介于"温和"和"良好"之间，但太早判断。

**条件 3：killer app 涌现**

这是飞轮启动的**最关键门槛**。Solana 2020-2021 飞轮启动靠 Phantom + Serum + Raydium（三个 native dApp）。HyperLiquid 直接以 perp DEX 为 chain。

**Monad 当前没有这样的 anchor**。Folks Finance、Kuru 等 native dApp 体量 < \$10-15m，未到 anchor 级别。

## 5.2 商品化 EVM 陷阱的三个机制

\begin{insightbox}
\textbf{机制 1：性能改进可被 fork}\\
Monad 的 parallel EVM 设计并非数学不可复制。Sei V2、Plasma、MegaETH 已实现类似 claim。\textbf{差异化窗口期 18-24 个月，正在关闭}。\\[6pt]
\textbf{机制 2：dApp 对 chain 缺乏粘性}\\
Morpho Blue 部署 33+ 链，LayerZero 部署 60+ 链。\textbf{任何 dApp 对单一 L1 的依赖度极低}。Monad 只是 venue 之一。\\[6pt]
\textbf{机制 3：价值流向多链聚合}\\
当 Uniswap V4 在 Monad 部署，gas 给 Monad，但\textbf{品牌价值、token 价值仍归 Uniswap}——Monad 沦为 commodity venue。
\end{insightbox}

## 5.3 EVM 兼容性的双刃剑

| 维度 | EVM 兼容 (Monad, MegaETH, Sei V2) | 自研语言 (Solana, Aptos Move) |
| --- | --- | --- |
| Dev 进入门槛 | **低**（Solidity 现成）| 高（需学新语言）|
| 应用迁移速度 | **快**（一键部署）| 慢（需重写）|
| 应用粘性 | **低**（同时部署 30+ 链）| 高（原生应用）|
| 性能差异化窗口 | **短**（12-24 个月可被 fork）| 长（架构更难复制）|
| Token 价值捕获 | 弱（应用价值不归 L1）| 强（应用绑定 L1）|

**EVM 兼容性是 dev acquisition 友好 + dev retention 不友好的组合**。Monad 选择 EVM 路径的代价：初期获取 dev 快，但难以建立 sustained moat。

**这是 Monad 在性能层之外，必须用其他维度（团队 / 生态执行）补偿的核心结构性弱点**。

\newpage

# 第六节·🟠 宏观环境层：alt-L1 narrative 衰退

\begin{macrobox}
通用 L1 token 的需求端本质是"机构资金寻找下一个 ETH-killer 的 yield"。但 2024-2026 这个需求结构发生了根本变化。
\end{macrobox}

## 6.1 alt-L1 narrative 完整周期

| 时期 | alt-L1 状态 | 占 crypto total |
| --- | --- | --- |
| 2021 顶峰 | Solana 260× / AVAX 48× / FTM 173× | **~18%** |
| 2022 崩盘 | FTX + LUNA 联动崩盘，alt-L1 -85% | ~10% |
| 2023-2024 复苏 | Solana 凭借 ecosystem 复活，其他承压 | ~8% |
| **2024-2026 三极化** | **BTC + ETH + SOL ETF 抽干长尾** | **~6%** |

**关键转折点**：

- **2024-01 BTC ETF**：BTC 重估，但 alt-L1 缺乏催化剂
- **2024-05 ETH ETF**：ETH +20%，alt-L1 持平
- **2025-Q4 SOL ETF**：SOL +80%，**alt-L1 整体 -25%**（资金被 SOL 吸走）
- **2026 至今**：Aptos -40%、Sui -30%、长尾 alt-L1 普跌

## 6.2 Monad 上线时点的宏观窗口

Monad 上线时间 2025-11-13。**这是 alt-L1 整体最弱的窗口之一**：

- SOL ETF 刚通过 2 个月，机构资金继续涌入 SOL
- Aptos / Sui token 持续下跌
- alt-L1 sector beta 高位（系统性风险）

**对比 Solana 2020-03 上线时**：
- BTC 牛市启动期
- DeFi summer 即将开始
- alt-L1 narrative 启动

\begin{insightbox}
\textbf{宏观维度的 takeaway}：Monad 上线时机比 Solana 差，比 Aptos 略好。\\[4pt]
当前 \$3.15b FDV 已部分反映宏观逆风。但\textbf{2026-11 首次大规模 unlock} 是关键节点——届时如果还没 native killer app，token 会进入承压通道。
\end{insightbox}

## 6.3 协议宏观敏感度

| 维度 | Monad | Solana | Aptos | HyperLiquid |
| --- | --- | --- | --- | --- |
| ETF 通过可能 | 极低（2026-2027 不太可能）| **已通过** | 极低 | 极低 |
| Token unlock 节奏 | 2026-11 首次大解锁 | 解锁完成 | 持续解锁中 | 2025-Q4 首次大解锁完成 |
| 宏观敏感度评分 | **6** | **8** | **4** | **7** |

\newpage

# 第七节·🔴 操作历史层：mainnet 7 个月 + Bugfinder

\begin{historybox}
L1 的核心信任是"我把应用部署到这条链上，它明天不会停"。
\end{historybox}

## 7.1 通用 L1 历史压力测试对照

| L1 | 上线 | Consensus Halt | Major Incident | 当前 TVL |
| --- | --- | --- | --- | --- |
| Solana | 2020-03 | **多次（累计 30+ 小时）** | FTX 关联 | \$4.93b（复活）|
| Aptos | 2022-10 | 0 | 无重大 | \$196m（边缘化）|
| Sui | 2023-05 | 0 | 无重大 | \$459m（稳定但不增）|
| HyperLiquid | 2023-08 | **0** | 0 | **\$1.66b** |
| **Monad** | **2025-11** | **0** | Upbit node sync（2026-05）| **\$369m** |

\begin{insightbox}
\textbf{反直觉 takeaway}：Solana 的 halt 历史并未阻止其复活——\textbf{应用层粘性 > operational perfectionism}。但这只适用于已经有 ecosystem moat 的 L1。Monad 早期一次重大 halt 可能直接团灭 narrative。
\end{insightbox}

## 7.2 Monad mainnet 7 个月的真实记录

**正面**：
- 0 重大 consensus halt
- 处理 1.4 亿+ tx 无重大故障
- EVM 兼容性 100% 兑现，dApp 一键部署后正常运行
- 无重大 protocol-layer 漏洞

**负面**：
- **2026-05 Upbit node sync error** → Upbit 暂停 MON deposit/withdrawal
  - 这是 liveness failure 不是 consensus halt
  - 单点节点同步问题，不影响链整体
  - 但反映 mainnet 早期 node operator coordination 问题
- **未经过真正的高负载压力测试**：1.4 亿 tx / 7 个月 ≈ 23 tx/s 平均，远低于 10k TPS claim。**Monad 的性能 claim 在 mainnet 上未被真正 stress test**

## 7.3 Bugfinder AI：创新但未验证的护城河

2026-05-28，Monad Foundation 推出 **Bugfinder**——基于 AI 的智能合约漏洞自动检测工具。

\begin{quotebox}
\textbf{为什么这个有意思}：\\[4pt]
其他 L1 把安全审计责任完全推给 dApp 或第三方审计公司。Monad 通过 Bugfinder \textbf{主动承担生态层安全责任}——这是 alt-L1 首例。\\[6pt]
如果有效，将形成显著差异化：dev 在选择部署链时，"链层提供自动安全工具"是新颖卖点。\\[6pt]
但 \textbf{上线仅一周，未被验证}。需要未来 12-18 个月观察真实 case。
\end{quotebox}

\newpage

# 第八节·🟢 团队层：Jump 量化 + Paradigm matrix

\begin{teambox}
同样的性能 claim + 同样的宏观 + 同样的 mainnet 稳定下，\textbf{L1 结局的最终分化解释变量是团队}——尤其是团队催生 killer app 的速度。
\end{teambox}

## 8.1 Monad 核心团队画像

| 角色 | 姓名 | 背景 | 在岗状态 |
| --- | --- | --- | --- |
| Co-Founder & CEO | **Keone Hon** | Jump Trading 量化 8 年 + Jump Crypto，MIT BS Math/Physics | **极活跃** |
| Co-Founder & CTO | James Hunsaker | Jump Trading 系统工程师 | **活跃** |
| Co-Founder | Eunice Giarta | MIT Media Lab researcher + Shutterstock / Broadway Tech PM | 活跃 |
| 团队规模 | ~80+ 人 | 跨技术 / 生态 / BD | 持续扩张 |

## 8.2 Jump Trading 量化背景是 Monad 最独特的 asset

这是 Monad 与同代 L1 团队最大的差异：

\begin{insightbox}
\textbf{Monad 的 unique team asset}：\\[4pt]
• Aptos 团队：ex-Meta/Diem，研究背景\\
• Sui 团队：ex-Meta/Diem，PL 设计\\
• HyperLiquid 团队：匿名，但 prop trading 背景\\
• \textbf{Monad 团队：Jump Trading HFT 量化}\\[6pt]
HFT 量化对低延迟、高吞吐量系统的工程经验，是 parallel EVM + MonadDB + HotStuff 架构的直接基础。\textbf{这是任何 alt-L1 团队都没有的特定优势}。
\end{insightbox}

## 8.3 VC matrix：顶配组合

| 阶段 | 时间 | 金额 | 领投 + 主要参与 |
| --- | --- | --- | --- |
| Seed | 2023 | \$19M | Dragonfly Capital + 其他 |
| Series A | 2024-04 | **\$225M** | **Paradigm** + Electric Capital + Greenoaks |
| **累计** | | **\$244M** | **2024 年最大加密 round** |

**关键解读**：

- **Paradigm 领投**：Solana / Uniswap / Optimism 都是他们 portfolio 的 winner。他们在 L1 投资上的命中率极高
- **Electric Capital**：dev 生态侧（Electric Capital Developer Report 是行业 ref）
- **Greenoaks**：traditional growth investor，带来机构 LP 关系
- **缺点**：没有亚洲一线 VC 显著参与（可能影响亚洲市场扩张）

\textbf{VC matrix 综合评分}：**A**（接近完美）。

## 8.4 生态执行节奏（mainnet 7 个月）

\begin{quotebox}
\textbf{Monad 上线 7 个月的主要 ecosystem 动作}：\\[4pt]
• 2026-05-28 \textbf{Open Transaction Layer}（联合 24+ 公司，机构 on-chain 标准化）\\
• 2026-05 \textbf{TownSquare USD1 \$100M 流动性计划}\\
• 2026-05 \textbf{FalconX tokenized credit facility}\\
• 2026-05-28 \textbf{Bugfinder AI 安全工具}\\
• \textbf{Folks Finance、Kuru DEX 等 native dApp 持续启动}
\end{quotebox}

**节奏对比**：
- Monad 7 个月 ecosystem 动作 = Solana 早期相当
- 远快于 Aptos / Sui 早期
- 慢于 HyperLiquid（vertical 模式天然快）

**但缺乏 killer app**——这是核心问题。

## 8.5 团队 alpha 的 3 个 leading indicator

\textbf{信号 1：Keone Hon 在岗活跃度}——mainnet 上线后保持公开发言节奏。这是 alt-L1 创始人最关键指标（参考 Compound 因 Robert Leshner 渐退衰退）

\textbf{信号 2：Monad-native dApp 启动速度}——Folks Finance / Kuru / 其他 native 项目能否在 12 个月内出现至少 1 个 \$100m+ TVL 的 anchor

\textbf{信号 3：与机构合作伙伴的执行}——Open Transaction Layer / FalconX / TownSquare 的实际兑现度

\newpage

# 第九节·三结局 × 五维评分

把前面五个维度合起来给协议打分（权重：性能 20% / 应用 30% / 宏观 15% / 操作 15% / 团队 20%）：

| 维度 | Monad | Solana | Aptos | HyperLiquid |
| --- | ---: | ---: | ---: | ---: |
| 性能 | **9** | 8 | 7 | 8 |
| 应用层捕获 | **4** | **9** | **2** | **10** |
| 宏观敏感度 | 6 | 8 | 4 | 7 |
| 操作历史 | 6 | 8 | 7 | **9** |
| 团队执行 | **9** | 8 | 6 | **9** |
| **加权综合** | **6.6** | **7.8** | **4.6** | **8.6** |

## 9.1 Monad 6.6：双 9 + 双中位 + 一短板

\begin{insightbox}
\textbf{Monad "双 9 双中位 + 一短板"}：\\[4pt]
• 性能 9 + 团队 9 → \textbf{优于同代 L1 显著}\\
• 宏观 6 + 操作 6 → \textbf{mainnet 早期阶段标准评分}\\
• 应用层捕获 4 → \textbf{绝对短板，决定 thesis 走向的关键变量}
\end{insightbox}

**6.6 综合分意味着什么**？高于 Aptos（4.6）和 Sui（~5.5），低于 Solana（7.8）和 HyperLiquid（8.6）。**这是"有竞争力但仍需证明"的中间区间——matches Monad 7 个月 mainnet 的实际状态**。

## 9.2 Solana 7.8：应用层捕获 9 是绝对护城河

Solana 是通用高性能 L1 的"完整成功"案例：
- 应用层捕获 **9**：Phantom（60M+ users）、Pump.fun（月成交 \$3-5b）、Jito（\$2.5b TVL）、Jupiter（DEX aggregator）—— Solana-native 深度生态
- 性能 8（非 9）：历史多次 halt 是扣分项
- 团队 8：Anatoly 持续在岗 + Firedancer 即将上线

\textbf{对 Monad 的对照含义}：**Solana 上线 7 个月时（2020-10），TVL 仅 ~\$10m，综合分约 6.0**。**Monad 当前 6.6 实际优于 Solana 上线 7 个月时的状态**——但 Solana 的转折是 2020-21 ecosystem 爆发，Monad 是否能复制是核心 catalyst。

## 9.3 Aptos 4.6：通用 L1 失败的完整教训

\begin{insightbox}
\textbf{Aptos 4.6 是 Monad 必须避免的路径}：\\[4pt]
• 应用层捕获 \textbf{2}——\textbf{3.5 年仍无 native killer app}\\
• Move 语言曾被视为优势，反而成 dev 进入门槛\\
• Token 从 ATH 跌 \textbf{95.93\%}\\
• 操作历史 7（实际比 Solana 好），但救不了应用层 2 分的绝对短板\\[6pt]
\textbf{核心教训}：技术领先 + 团队靠谱 + 操作完美都不够，\textbf{应用层捕获是 L1 唯一的最终标尺}。
\end{insightbox}

## 9.4 HyperLiquid 8.6：vertical 替代路径

HyperLiquid 是 2024-2026 周期最强 L1 案例：
- 应用层捕获 **10**：perp DEX 锚定，70-80% 市场份额
- 操作历史 **9**：零 halt + 零事故
- 团队 **9**：持续高速迭代

\textbf{对 Monad 的对照含义}：HyperLiquid 证明 **"killer app 不是涌现，是 founded along with the chain"**——vertical 路径直接 by design 解决了 Monad 当前最大问题（无 anchor app）。

**Monad 是否应该 vertical pivot？** 如果 12-18 个月后 native ecosystem 仍未起色，Monad 可能需要"重金孵化 1 个 anchor app"——这是 thesis 二次反转的关键 catalyst。

\newpage

# 第十节·Alpha 在哪？三类应用层机会

如果 MON token 不是首选（FDV 8.5× TVL 已部分定价 Solana 路径），**alpha 在哪里**？

## 10.1 类别 1：Monad-native 早期 dApp（最高 EV）

如果 Monad 真的走 Solana 路径，**最大的 alpha 是早期 native dApp equity**——类似 2020-2021 投早期 Solana 生态的 Phantom / Serum / Raydium 的回报（10-100×）。

当前可投的 Monad-native 项目：
- **Kuru DEX**（hybrid orderbook + AMM）——具备成为 Monad-native DEX anchor 的潜力
- **Folks Finance**（lending）——\$10m+ TVL，早期 leader
- **其他即将出现的 native 项目**——通过 Monad Foundation grant 跟踪

\begin{insightbox}
\textbf{投资逻辑}：押 Monad 走 Solana 路径 = 押 Monad-native dApp 增长。\\[4pt]
不需要押 MON token 价值捕获（FDV 已高）；直接投 dApp equity 拿应用层 perf fee。\\[6pt]
\textbf{这是 Aave thesis "投 curator equity 而非 token" 逻辑的 L1 版本}。
\end{insightbox}

## 10.2 类别 2：跨链桥接套利（中等 EV）

Monad TVL \$369m 中大量是通过 LayerZero V2、Stargate 等桥接进入。早期阶段桥接 fee + 套利机会显著。

具体操作：
- 监控 Monad 与以太坊 / Base / Arbitrum 的 stablecoin 利率差
- 通过 LayerZero V2 / Wormhole 桥接套利
- 早期阶段 fee 较高 + 流动性碎片化，套利空间存在

风险：随着 Monad 流动性深度增加，套利空间会快速收敛。

## 10.3 类别 3：等待应用层 catalyst 后再配 MON（保守 EV）

如果你不想押 native dApp（早期项目失败率高），**等待 catalyst 出现后再配 MON token**：

\textbf{Catalyst 1}：Monad-native dApp 进入 chain top 5（reflects ecosystem 转折）
\textbf{Catalyst 2}：2026-11 unlock 后 token 价格稳定（reflects 卖压消化）
\textbf{Catalyst 3}：Bugfinder AI 实际拦截重大漏洞（reflects 差异化护城河兑现）

任何 1-2 个 catalyst 出现，再决定是否配 MON token。

## 10.4 我为什么暂时不直接配 MON token？

\begin{insightbox}
\textbf{三个理由}：\\[4pt]
\textbf{1.} FDV \$3.15b + FDV/TVL 8.5× 已部分定价 Solana 路径\\
\textbf{2.} 2026-11 首次大解锁是显著卖压\\
\textbf{3.} 当前无 native killer app catalyst → token 上行催化剂不明确\\[6pt]
\textbf{但我会 cheap optionality（1-2\% portfolio）}——如果 12 个月内 catalyst 兑现，从 1\% 加到 5\%。
\end{insightbox}

\newpage

# 第十一节·我的实际动作 + 12mo 对账

## 11.1 实际动作（\$100m fund 假设）

\begin{tldrbox}
\textbf{Monad 总配置 3-8\%}：\\[4pt]
1. \textbf{Monad-native dApp equity \$2-3m (2-3\%)} ← \textbf{highest EV}\\
   重点：Kuru、Folks Finance、其他 Foundation grant winners\\[4pt]
2. \textbf{MON token cheap optionality \$1-2m (1-2\%)} ← 不超过 portfolio 2\%\\
   原则：等 catalyst 出现后加配\\[4pt]
3. \textbf{LP 跨链桥套利 \$0-2m (0-2\%)} ← 早期阶段窗口\\[4pt]
4. \textbf{2026-11 解锁前观察 MON} ← 解锁后如有反弹再加 \\[6pt]
剩余 \textbf{92\%} 部署到：\\
• Solana ecosystem dApp equity（已验证）\\
• HyperLiquid ecosystem（vertical 范式）\\
• 其他赛道（lending / perp / intent / agentic）\\[6pt]
\textbf{Monad 不是核心仓位，是 cheap optionality + dApp early-stage}。
\end{tldrbox}

## 11.2 12 个月后回来对账（2027-06-04）

\begin{insightbox}
\textbf{可证伪预测}：\\[4pt]
• Monad TVL 是否突破 \$1b？预测 \textbf{35\%}\\
• Monad-native dApp 是否进入 chain top 5？预测 \textbf{45\%}\\
• MON token 12mo return 是否跑赢 alt-L1 sector index？预测 \textbf{40\%}\\
• Bugfinder 是否拦截至少 1 个重大漏洞？预测 \textbf{30\%}（成功即重估护城河）\\
• Keone Hon 是否仍主导项目？预测 \textbf{90\%}\\
• Monad 是否发生重大 consensus halt？预测 \textbf{20\%}（发生即 thesis 反转）\\
• 是否 vertical pivot（重金孵化 anchor app）？预测 \textbf{25\%}\\
• 2026-11 unlock 后 MON token 跌幅是否 > 30\%？预测 \textbf{45\%}
\end{insightbox}

如果以上预测大部分错了，我会写"打脸复盘"。**没有 falsifiable 的 thesis 不算 thesis**。

## 11.3 五维框架可推广（8 个 L1 / app-chain 场景）

| 场景 | 中心机制 | 三层情境 | Alpha 层 |
| --- | --- | --- | --- |
| **通用 L1**（Monad / MegaETH）| 性能飞轮 ↔ 商品化陷阱 | alt-L1 narrative / halt 历史 / 创始人 | Native dApp equity |
| **vertical app-chain**（HyperLiquid / dYdX V4）| 应用飞轮 ↔ 单点风险 | 应用市场份额 / 单点黑天鹅 / 团队迭代 | Token + 关联应用 equity |
| **L2 / Rollup**（Arbitrum / Base）| 安全租赁飞轮 ↔ centralization 陷阱 | L1 安全溢价 / sequencer 集中 / 团队治理 | Token + LP 收益 |
| **Modular L1**（Celestia）| DA fee 飞轮 ↔ 替代品压力 | DA 市场需求 / 安全模型 / 团队节奏 | DA 应用层 |
| **DA + Settlement**（EigenLayer 类）| Restaking 飞轮 ↔ slashing 螺旋 | ETH 安全租赁 / slashing 历史 / 团队治理 | AVS operator |
| **BTC L2**（Stacks / Rootstock）| BTC 安全 + 智能合约飞轮 ↔ 流动性陷阱 | BTC narrative / 桥接安全 / 团队 | Stablecoin / lending |
| **DePIN L1**（Helium / Render）| 物理网络飞轮 ↔ 补贴依赖 | tokenomics / 设备激励 / 创始人 | Revenue-positive 设备运营 |
| **AI L1**（Bittensor / Akash）| 算力飞轮 ↔ 中心化 ML 压力 | AI 监管 / 算力实际使用 / 团队 | 模型 / 数据集 / Validator |

\begin{insightbox}
\textbf{真正的 thesis lesson}：每次范式跃迁，价值链都会重新分配一次。\\[4pt]
不是问 "哪个 L1 性能最高"，而是问 "\textbf{赢家形成后，五维博弈的胜方在哪一层}"。
\end{insightbox}

## 11.4 结尾

如果你能从这篇文章里只带走一个点，就是这个：

> **看 token 不如看应用层。Monad FDV \$3.15b 已部分定价 Solana 路径，但 alpha 在 native dApp。**\\
> **看商业模式不如看五维。同模式下，宏观周期 + 操作韧性 + 团队速度决定结局。**

\newpage

\begin{tldrbox}
\textbf{TL;DR（反向回顾）}\\[6pt]
1. Monad 上线 7 个月：FDV \$3.15b + TVL \$369m + FDV/TVL 8.5×，Top 15 dApp 100\% 多链部署，\textbf{0 Monad-native killer app}\\[3pt]
2. 中心机制：\textbf{性能飞轮 ↔ 商品化 EVM 陷阱}——EVM 兼容是 dev acquisition 友好 + dev retention 不友好的双刃剑\\[3pt]
3. 宏观层：alt-L1 narrative 从 2021 高潮（18\%）到 2026 低位（6\%），Monad 上线时机比 Solana 差比 Aptos 略好\\[3pt]
4. 操作历史层：mainnet 7 个月 0 重大 halt（vs Solana 早期多次）+ Upbit liveness 事故 + Bugfinder AI 创新但未验证\\[3pt]
5. 团队层：\textbf{Jump Trading 量化 + Paradigm 领投 + 80 人团队} = 同代 L1 最强组合之一\\[3pt]
6. 五维评分：\textbf{Monad 6.6 / Solana 7.8 / Aptos 4.6 / HyperLiquid 8.6}\\[3pt]
7. Alpha 不在 MON token（FDV 已部分定价），\textbf{在 Monad-native dApp equity}（Kuru, Folks Finance 等）\\[3pt]
8. 我的动作：Native dApp 2-3\% + MON optionality 1-2\% + 桥接套利 0-2\% + 等 catalyst 加配
\end{tldrbox}

---

*完整 76 页 thesis + 数据 + Phase B Dune queries（已设计未运行）：*

[Link] **roddy95o.com**
[Link] **github.com/RoddyH17/web3-vc**

*不是投资建议。是研究框架。*
