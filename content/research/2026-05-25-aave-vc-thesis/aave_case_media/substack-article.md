---
title: "为什么我不会买 AAVE，但会投 Curator 的 equity"
subtitle: "DeFi 借贷的五维博弈：让利飞轮 ↔ 抽水螺旋，叠加宏观、操作历史、团队"
author: "Roddy Huang"
date: "2026-05-27"
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
  \lhead{\small\color{darkgray}DeFi 借贷的五维博弈}
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
{\Huge\bfseries\color{accentpurple} 为什么我不会买 AAVE} \\[0.4cm]
{\Huge\bfseries\color{accentpurple} 但会投 Curator 的 equity}\\[1.2cm]
{\Large\itshape DeFi 借贷的五维博弈}\\[0.3cm]
{\Large\itshape 商业模式 × 宏观 × 历史 × 团队}\\[2.0cm]
{\large Roddy Huang}\\[0.4cm]
{\normalsize 2026-05-27 · 阅读时间 20 分钟}\\
\vfill
\end{center}

\newpage

# 写在前面

DeFi 借贷正在发生一次**商业模式范式跃迁**——从应用层抽水（Aave 12.9% take rate）到基础设施让利（Morpho 0% take rate）。这不是技术之争，是**价值分配机制**的根本切换。

但这只是故事的一层。如果你只看商业模式，你会得出"Morpho 颠覆 Aave"的简单结论——然后被三个数据打脸：

\begin{insightbox}
\textbf{1.} Aave take rate 12.9\%，但 12 个月 TVL 只跌了 1\%——商业模式劣势没传导到份额\\
\textbf{2.} Morpho 已 1,948 起清算，\textbf{100\% 集中在长尾市场}（PEPE / Mog / SPX 等），主流蓝筹清算 = 0——它没真正打到 Aave\\
\textbf{3.} Compound 也归零了 take rate，但 TVL 跌 61\%、token 跌 46\%——零抽水不等于飞轮启动
\end{insightbox}

为什么同样的商业模式有完全不同的结局？因为 lending 的真实博弈是**五维**的：

1. **商业模式**（take rate）——抽水路径
2. **价值分配**（holder capture）——传导效率
3. **宏观环境**——Fed 利率 + 监管叙事，决定 LP 进入动机
4. **操作历史**——黑天鹅压力测试纪录，决定信任锚定
5. **团队执行**——创始人 + 治理速度，决定同模式下的分化

整篇文章就是在拆这五个维度——然后在 **Aave、Compound、SparkLend** 三个真实案例上用 5 维评分综合判断。

如果你已经是 DeFi 老炮，跳到第六节"宏观环境"开始读。如果你只听过"AAVE 是个币"，从头读到尾 20 分钟。

\newpage

# 第一节·为什么你该关心 DeFi 借贷？

## 1.1 它是 DeFi 里最像"银行业"的部分

加密世界里有很多稀奇古怪的东西——meme 币、NFT、Restaking、AI agent——但 DeFi 借贷（lending）是其中**最容易跟传统金融做类比**的：

\begin{quotebox}
你把钱存在协议（= 存款人 / LP），协议把钱借给别人（= 借款人），协议从中赚利差（= take rate）。在链上，这套逻辑由 \textbf{Aave、Morpho、Compound、SparkLend} 这几个协议跑。

不同的是：没有柜台、没有 KYC、利率算法实时定、所有数据公开链上可查。
\end{quotebox}

为什么这件事重要？**因为 lending 是 DeFi 里规模最大、机构最关注、跟宏观最贴近的赛道**——TVL 顶部时期超过 \$50b，相当于一家美国 30 名银行的资产规模。

## 1.2 它是 DeFi 里最受宏观影响的赛道

DeFi lending 不是孤岛。它的存款利率（你借出 USDC 拿到的 yield）**和美国 1 年期国债利率（T-bill yield）直接联动**：

- **2024 年初**：DeFi USDC 利率 \~14\%，T-bill \~5\%，差 9 个百分点 → 套利空间巨大，资金涌入 DeFi
- **2026 年中**：DeFi USDC 利率 \~5\%，T-bill \~4.5\%，差不到 0.5 个百分点 → 利率溢价基本消失

**这是 25 个月里 DeFi 借贷利率被压缩 63\% 的故事**——这件事改变了整个赛道的游戏规则。下面第六节会展开。

## 1.3 它是 DeFi 里第一个完成范式跃迁的赛道

DeFi 借贷正在发生一次**商业模式范式跃迁**——而 Lending 是 DeFi 八大赛道里最先发生这种跃迁的：

\begin{insightbox}
\textbf{Lending 现在的故事，会预演 perp DEX、Restaking、Wallet、DePIN 等其他赛道未来 1-2 年的故事。}
理解 lending 的范式跃迁，等于拿到一把"通用钥匙"。
\end{insightbox}

\newpage

# 第二节·先认识所有玩家（市场全景图）

下面这张图是市场地图。**在我开始讲故事之前，请先花 30 秒看完它**：

![DeFi Lending Universe Map — 2026-05](/Users/roddy/2026_class_project/roddy95o-website/content/research/2026-05-25-aave-vc-thesis/charts/09-lending-universe-map.png){width=100%}

整个 DeFi 借贷宇宙是**分层的**，从地基到屋顶共 4 层：

**L1 · 协议层（基础设施）**——最底下那一排：

- **Aave V3** \$13.84b TVL：DeFi 老大哥，2020 年活到现在，take rate 12.9\%
- **Morpho Blue** \$7.41b TVL：2024 年才上的新王，take rate **0\%**
- **SparkLend** \$3.29b：MakerDAO/SKY 生态分支，take rate 4.82\%
- **Compound V3** \$1.24b：曾经的双王之一，take rate 已被迫归零

**L2 · Vault 层（容器）**：

- **MetaMorpho Vaults**（200+ 个）：在 Morpho Blue 之上的"策略基金"
- 总 TVL \~\$3.82b

**L3 · Curator 层（资管 / 重点[★]）**：

- **Gauntlet** 管 \$1.88b：lending 里的"黑石"，Tarun Chitra 体系
- **Steakhouse Financial** 管 \$1.26b：保守蓝筹路线
- **Re7 Labs** 管 \$610m：Wintermute 系，多协议覆盖
- 合计 \~\$5.8b curated，**年化 fee pool \~\$20m**

\begin{primerbox}
\textbf{Curator 是什么？}\\
中文叫"策展人"或"风险经理"。他们决定 Vault 里的钱具体放到 Morpho Blue 哪些市场（哪个 token 借给哪个 token），从用户存款里抽 fee。\\[4pt]
\textbf{类比}：他们就是\textbf{基金经理}，区别在于工具是 Morpho 而不是股市 ETF。
\end{primerbox}

**L4 · Token 层**——最顶上：

- **AAVE 币** \$1.36b FDV，holder capture 只有 0.28\%
- **MORPHO 币** \$2.16b FDV，0\% cash flow capture
- **COMP、SPK** 已边缘化

**看完这张图，请记住**：钱（fee）正在从 L1 → L2 → L3 向上流。L1 (Aave) 还在抽 12.9% 但 token holder 拿不到；L1 (Morpho) 主动让 0%；最后**真正赚钱的是 L3 的 curator**。

\newpage

# 第三节·DeFi 商业模式简史

读懂"Morpho 颠覆 Aave"之前，必须知道 DeFi 商业模式经历了三代。

## 3.1 DeFi 1.0（2018-2020）：MakerDAO / Compound 时代

\begin{quotebox}
\textbf{核心模型：协议是银行，抽息差}

存款人 → 协议 → 借款人。协议从借款人付的利息里抽一部分（5-15\%），剩下给存款人。
\end{quotebox}

**代表：Compound、MakerDAO（DAI 借贷部分）**

特点：池化模型（pooled lending），所有资产共享一个风险池。**劣势是利率不能精确反映个体风险**。

## 3.2 DeFi 2.0（2020-2024）：Aave 黄金时代

\begin{quotebox}
\textbf{核心模型：协议是受信任的资产管理者}

Aave V3 在池化模型基础上加了：(1) isolated mode（隔离市场），(2) E-mode（efficiency mode），(3) GHO stablecoin。\textbf{Take rate 12.9\%}，token holder 通过 stkAAVE 享 Safety Module 收益。
\end{quotebox}

这是 lending 的"百货公司时代"——Aave 选品、定价、风控、品牌。LP 付 12.9% take rate 换"放心存款"。TVL 从 \$1b 涨到 \$30b+。

**但 12.9% 的 take rate 越来越显眼**。

## 3.3 DeFi 3.0（2024-）：Morpho 基础设施时代

\begin{quotebox}
\textbf{核心模型：协议是 permissionless 基础设施}

任何人都可以无许可创建一个 lending market（一对 collateral / loan asset）。Morpho 不选资产、不设利率、\textbf{不抽 take rate}。所有 fee 归 LP。
\end{quotebox}

这是 lending 的"商场地产时代"——Morpho 提供场地和水电，租户（curator）自己经营，不抽销售额。

\begin{insightbox}
\textbf{每次范式跃迁，上一代 incumbent 不是被打死，是被价值链重新分配。}\\[4pt]
• AMM (Uniswap V2) → 颠覆"做市必须靠 MM"\\
• L2 (Optimism / Arbitrum) → 颠覆"DeFi 必须在 L1"\\
• Intent (CoW / UniswapX) → 颠覆"用户必须直接接触 pool"\\
• Morpho → 颠覆"借贷协议必须抽水"
\end{insightbox}

\newpage

# 第四节·现状数据：真实战况

数据时点 DefiLlama 2026-05-25 22:27 UTC：

| Rank | Protocol | TVL | 年化 Fees | 年化 Revenue | Take Rate | Holder Capture |
| ---: | --- | ---: | ---: | ---: | ---: | ---: |
| 1 | Aave V3 | \$13.84b | \$678m | \$87.4m | **12.9\%** | **0.28\%** |
| 2 | Morpho Blue | \$7.41b | \$176m | **\$0** | **0\%** | n/a |
| 3 | SparkLend | \$3.29b | \$55m | \$2.6m | 4.82\% | **\~164\%** |
| 4 | Compound V3 | \$1.24b | \$22m | **\$0** | **0\%** | n/a |

**反直觉数据 #1**：Morpho TVL = Aave 53\%（12mo 前是 18\%）。但 **Revenue = 0**。
**反直觉数据 #2**：SparkLend holder capture **161%**——SPK 持有人拿到的钱比协议自己赚的还多。只能是 SKY 国库补贴。
**反直觉数据 #3**：Aave 一年赚 \$87.4m，但分给 token holder 的只有 \$242k。**比例 0.28%**。

\newpage

# 第五节·商业模式核心：让利飞轮 ↔ 抽水螺旋

整个 lending 范式跃迁可以压成一张图——两个对称的因果环：

\begin{insightbox}
\textbf{让利飞轮（Morpho）}\\
零抽水 → LP 收益突出 → 流动性集中 / TVL 扩张 → 生态繁荣（vault, curator）→ 应用层价值上行 → 更多 LP 加入（循环强化）\\[6pt]
\textbf{抽水螺旋（Aave）}\\
高 take rate → LP 相对收益受损 → LP 向零抽水竞品迁移 → TVL 流失 → Revenue 收缩，但 holder capture 仍低 → 治理信用受损（循环弱化）
\end{insightbox}

双轴拆解：**Take rate 决定路径**（协议获利上限），**Holder capture 决定可持续**（token 持有人能否享受）。

把所有协议放到四象限：

| 协议 | Take Rate | Holder Capture | 象限 | 结局 |
| --- | ---: | ---: | --- | --- |
| Aave V3 | 12.9\% | 0.28\% | **抽水 + 不分** | 抽水螺旋（治理失效）|
| SparkLend | 4.82\% | \~164\% | **温和抽水 + 补贴分** | 母协议输血 |
| Compound V3 | 0\% | 0 | **被迫归零** | 边缘化 |
| Morpho Blue | 0\% | 0 | **主动归零 + 让利** | 让利飞轮 |

**但如果只看这个 2x2，你会问出三个解释不了的问题**：

1. Aave 抽水那么狠，为什么 TVL 没崩？（答：操作历史 + 团队是护城河）
2. Compound 也归零了，为什么没启动飞轮？（答：团队衰退）
3. SparkLend holder capture 161%，为什么 token 没起飞？（答：宏观敏感度 + 母协议绑定风险）

要回答这三个问题，必须叠加三层情境。

\newpage

# 第六节·第一层情境：宏观环境如何重塑这场仗

\begin{macrobox}
DeFi 借贷的 LP 进入动机不是看协议有多好，是看 \textbf{DeFi 相对 TradFi 的相对优势}。这个相对优势由 Fed 利率 + 监管叙事决定——而 2024-2026 这两件事都变了。
\end{macrobox}

## 6.1 yield spread 25 个月压缩 95%

| 时点 | T-bill 1Y | DeFi USDC | Spread |
| --- | ---: | ---: | ---: |
| 2024-01 | \~5.0\% | \~14\% | **+9 pp** |
| 2025-01 | \~4.8\% | \~8\% | +3.2 pp |
| **2026-05** | **\~4.5\%** | **\~5\%** | **+0.5 pp** |

**这件事的结构性含义有三层**：

**第一，spread 压缩改变 LP 结构**。当 spread > 5pp 时，进入 DeFi 的 LP 主要是普通散户与寻求 alpha 的小型基金；当 spread < 1pp 时，散户失去进入动机，剩下的主要是**机构 LP + 加密原生用户**（用 DeFi 借贷做杠杆或对冲）。

**第二，spread 压缩放大商业模式差异**。当 spread 大时，LP 不在意 take rate 高低；当 spread 小时，每个百分点都敏感。**这就是 Morpho 0% take rate 在 2025-2026 才真正爆发的宏观原因**——不是商业模式忽然变好，是宏观环境让 take rate 差异从"无关紧要"变成"流失催化剂"。

**第三，spread 压缩重塑借款人结构**。借款利率从 14% 降到 5% 后，DeFi 借贷的核心 use case 从"杠杆套利"转向"杠杆 farming + 衍生品 margin + LST 循环"。**这正是 Morpho permissionless markets 的优势区**。

## 6.2 2025 年的监管转向

**4 个关键事件**：

1. **GENIUS Act（2025-09）**：美国稳定币立法明确合规发行商门槛。SparkLend 直接受益（DAI/USDS 是合规稳定币）
2. **SEC Atkins 确认 ETH 非证券（2025-07）**：解除 ETH staking + DeFi 协议的合规悬剑
3. **SAB 121 撤销（2025-01）**：传统金融机构可以更容易托管加密资产
4. **Trump 政府 pro-crypto 立场**：监管轻触 + BTC 战略储备

## 6.3 协议宏观敏感度差异

| 协议 | 资金来源 | yield spread 敏感度 | 监管敏感度 | 综合宏观风险 |
| --- | --- | --- | --- | --- |
| Aave V3 | 机构 + 大户 | 中 | 低（合规友好）| 中 |
| Morpho Blue | 加密原生 + curator | 高 | 中 | 中-高 |
| SparkLend | MakerDAO 生态内分配 | 低 | **极低（GENIUS 受益）**| **最低** |
| Compound V3 | 散户为主 | **高** | 中 | **最高** |

\begin{insightbox}
\textbf{宏观维度的关键 takeaway}：\\[4pt]
• SparkLend 在五维评分里 7.6 排第一，\textbf{很大一部分是宏观红利}（资金来源不竞争外部 LP）\\
• Compound 跌 61\% 不是商业模式失败，是\textbf{宏观敏感度太高 + 散户 LP 流失}\\
• Aave 在 spread 收紧期反而抗压（机构 LP 不那么 yield-sensitive）
\end{insightbox}

\newpage

# 第七节·第二层情境：4/4 防线 vs 长尾分裂

\begin{historybox}
LP 把钱存进协议时，根本不在意 take rate 是 12.9\% 还是 0\%——他们在意\textbf{这个协议明天会不会爆掉}。这个信任来自历史压力测试纪录，不是白皮书。
\end{historybox}

## 7.1 Aave 的"4/4 防线"

过去 5 年的 4 轮黑天鹅事件中：

| 事件 | 时间 | Aave 损失 |
| --- | --- | --- |
| Black Thursday (ETH -50%/day) | 2020-03 | **\$7k** |
| LUNA / UST 崩盘 | 2022-05 | **\$0** |
| FTX 崩盘 | 2022-11 | **\$0** |
| Eisenberg CRV 攻击 | 2022-11 | **\$1.6m** |

**累计重大坏账 < \$10m，相对 \$13.84b TVL 可忽略**。这是 DeFi 借贷整个赛道里**独一无二**的纪录。

加上 **Safety Module（stkAAVE 兜底）\$178m**——协议级首损保险。Morpho 没有，Compound 没有，所有人都没有。

**这就是为什么 take rate 12.9% 的 Aave 没崩**：机构 LP 对每一笔黑天鹅纪录都计入信任溢价。

## 7.2 Morpho 的"长尾 vs 主流"分裂

我从 Dune 拉了 Morpho Blue 全部 1,948 起清算事件：

\begin{quotebox}
• \textbf{全历史 1,948 起清算}\\
• \textbf{主流市场（WETH / USDC / WBTC）清算事件 = 0}\\
• \textbf{100\% 集中在长尾}（PEPE / Mog / SPX / REKT）
\end{quotebox}

**Morpho 在长尾市场赢麻了，但在主流蓝筹市场没真正与 Aave 短兵相接过**。

**这意味着什么？** Morpho 的"防黑天鹅能力" **在 2026-05 时点上尚未被主流市场验证**。这是它估值上限的最大约束。

**未来 12-18 个月最关键的 catalyst**：如果 Morpho 主流市场首次出现 > \$50m 重大坏账，**整个让利飞轮叙事可能崩塌**——LP 会重新评估 isolated markets 模型的实际防御能力。我估算概率 15%，但发生即 thesis 反转。

## 7.3 Cream / Euler 教训：信任修复极难

**Cream Finance（2021-10）**：\$130m 黑客，从未恢复 LP 信任，逐步消失。

**Euler V2（2023-03）**：\$200m 黑客（DeFi 史上罕见的回收案例），但 V2 重启后 TVL 仅 \$347m，token 长期承压。

**Compound DOG bug（2021-09）**：技术上没有重大坏账，但 \$90m token 错发事件 + Robert Leshner "求用户归还"的应对方式严重损伤治理可信度。**这是 Compound 治理信用衰减的起点**。

\begin{insightbox}
\textbf{操作历史维度的关键 takeaway}：\\[4pt]
• \textbf{信任建立慢、损毁快、修复极难}——一次黑天鹅可能让协议需要 5-10 年才能恢复\\
• Aave 的 4/4 防线值多少 P/S 溢价？保守估计 +3-5×\\
• Morpho 的主流市场"未验证"状态是隐性折价——一旦验证成功，估值有重估空间
\end{insightbox}

\newpage

# 第八节·第三层情境：团队执行的代差

\begin{teambox}
同样的商业模式、同样的宏观环境、同样的历史信任水平下，\textbf{协议结局的最终分化解释变量是团队}。这是 DeFi 投研中最被低估的维度。
\end{teambox}

## 8.1 四家协议团队画像

| 维度 | Aave Labs | Morpho Labs | Compound Labs | SparkLend |
| --- | --- | --- | --- | --- |
| 创始人 | Stani Kulechov（芬兰）| Paul Frambot（法国 Polytechnique）| Robert Leshner（美国，渐退）| Rune Christensen（MakerDAO 主导）|
| 团队规模 | \~50 人 | \~20 人（小而精）| \~15 人（缩减中）| Sky 共享团队 |
| 创始人活跃度 | **高** | **极高** | **低** | 高（Rune）|
| 治理执行速度 | 90 天 | **14 天** | 120 天 | 60 天 |
| 生态共建 | 中 | **极强** | 弱 | 强（依附 MakerDAO）|
| 综合团队评分 | **A**（成熟但需提速）| **A+**（精英 + 速度）| **C**（衰退）| **B+**（强但非纯借贷）|

## 8.2 治理周期 14 天 vs 90 天的代差

\begin{insightbox}
\textbf{Morpho 治理周期 14 天 vs Aave 90 天}——这是 Morpho 在 18 个月内追到 Aave 53\% 的\textbf{根本团队因素}。\\[4pt]
不是技术更好（Aave V4 设计也很强）；不是商业模式更优（Morpho 0\% take rate 是双刃剑）；是\textbf{执行速度的代差}。
\end{insightbox}

**Aave 的最大短板**：Stani Kulechov 带的 Aave Labs 是 DeFi 借贷最成熟的团队之一，5+ 年持续运营、人才稳定。但 **DAO 协调成本让治理周期 90 天**——V4 多次延期、buyback 提案讨论年余才落地。在范式跃迁压力期，这种"慢但稳"的风格可能成为致命弱点。

**Morpho 的最大特点**：Paul Frambot 学院派背景给协议设计带来罕见的清晰性（Morpho Blue isolated markets 是数学美感的体现）。\~20 人小团队 + 14 天治理周期 = 行业最高执行密度。**风险是规模化时能否保持文化纯粹**。

**Compound 的悲剧**：Robert Leshner 转向 CoinList Capital 后，Compound Labs 进入"维护模式"。**这就是为什么 Compound 在 Morpho 出现后无法做出有效回应**——不是技术问题，是创始人不在了。

## 8.3 Curator 层团队

| Curator | AUM | 核心团队 | 评分 |
| --- | ---: | --- | --- |
| Gauntlet | \$1.88b | **Tarun Chitra (Stanford PhD)** + 60+ 人，2018 年成立 | **A+** |
| Steakhouse Financial | \$1.26b | Sébastien Derivaux（前对冲基金）| A |
| Re7 Labs | \$610m | **Evgeny Gaevoy (Wintermute 创始人)** | A |

\begin{insightbox}
\textbf{Gauntlet 是 DeFi 借贷的"黑石"}——Stanford CS PhD 背景，2018 年成立，行业最早的量化风险管理公司。在 Aave、Compound、Uniswap 多协议担任 risk advisor，现通过 MetaMorpho 直接管理 \$1.88b。\textbf{这是整个 lending 赛道唯一一个"机构级"团队，对早期 VC 是最稀缺的标的}。
\end{insightbox}

## 8.4 VC 识别 team alpha 的 3 个信号

我用三个 leading indicator 评估借贷协议团队：

**信号 1：GitHub commit 速度**——Morpho Labs 过去 24mo commit 数是 Compound Labs 的 5.8 倍

**信号 2：创始人 governance 回应速度**——Paul Frambot 每周至少 3 次实质回应 vs Robert Leshner 每月 < 1 次

**信号 3：头部 curator 的"用脚投票"**——Gauntlet / Steakhouse 2024-2025 几乎所有新 vault 都选 Morpho 而非 Aave

\newpage

# 第九节·三结局 × 五维评分

把前面五个维度合起来给协议打分（权重：商业模式 25% / 价值分配 20% / 宏观 15% / 操作历史 25% / 团队 15%）：

| 维度 | Aave V3 | Morpho | SparkLend | Compound V3 |
| --- | ---: | ---: | ---: | ---: |
| 商业模式 | 8 | 9 | 6 | 3 |
| 价值分配 | **3** | 2 | 8 | 0 |
| 宏观敏感度 | 7 | 5 | **9** | 3 |
| 操作历史 | **10** | 6 | 8 | 7 |
| 团队执行 | 7 | **10** | 7 | 3 |
| **加权综合** | **7.0** | **6.4** | **7.6** | **3.2** |

## 9.1 Aave 7.0：四高一低，等 buyback 兑现

**"四高一低"**——商业模式、宏观、操作历史、团队都强，唯独价值分配 3 分极弱。

**Aave 的命运取决于一件事——buyback 是否真启动**。

- 如果 V4 + buyback 在 2026 Q4 - 2027 Q1 兑现 → 价值分配从 3 修复到 8 → 综合分跳升到 8.5+ → AAVE token 3-5× 重估
- 如果继续拖延 → 综合分下行到 5.5-6.0 → token 持续承压

**这是 binary catalyst**。Trader 的赌注，不是 VC 的 conviction。

## 9.2 Morpho 6.4：商业模式 + 团队双 10 分，但操作历史 6 分

**Morpho 已经在商业模式与团队两个维度做到行业第一**——但 6 分的操作历史是它估值上限的核心约束。

1,948 起清算 100% 在长尾的数据是双刃剑：证明 isolated markets 设计有效，但也证明 Morpho 没有真正抗过黑天鹅。**主流市场首次坏账 = thesis 反转风险**（概率 15%）。

MORPHO token 仍有"零抽水悖论"——零抽水意味着 token 缺现金流锚定，价值取决于团队能否设计 vault 层共生机制。**目前无明确路径**。

## 9.3 SparkLend 7.6：综合分第一，但有母协议绑定 caveat

**SparkLend 是当前五维综合分最高的借贷协议**（7.6 vs Aave 7.0）。

- 价值分配 8 分（行业唯一高分）：通过 SKY treasury 补贴实现 holder capture 161%
- 宏观敏感度 9 分（最低）：资金来源是 MakerDAO 内部分配，不竞争外部 LP
- 操作历史 8 分：继承 MakerDAO 信任

**但有重大 caveat**：这些高分**不是来自 SparkLend 自身**，是来自 MakerDAO/SKY 战略支持。**SPK 持有人本质上在押 Rune Christensen 战略而非 SparkLend 本身**。一旦母协议战略变化，分数可能瞬间下行。

## 9.4 Compound 3.2：全面跌破，没有 catalyst

操作历史 7 分尚可，**但这是"静态资产"，不能转化为未来增长**——团队 3 分、商业模式 3 分都已经衰退。

**Compound 综合分将在 2.5-3.5 区间长期徘徊**——没有 catalyst 能扭转，因为团队没有意愿、没有能力执行任何反扑。

\begin{insightbox}
\textbf{Compound 的最大教训}：当创始人离开 / 注意力转移时，协议会在表面没事的情况下\textbf{慢性衰退}——这是 DeFi 协议的"silent killer"。Aave 当前最大的隐性风险也是这个——\textbf{Stani Kulechov 如果转向其他项目，Aave 五维评分会快速下行}。
\end{insightbox}

\newpage

# 第十节·Alpha 在哪一层？

**Morpho 是赢家，但 MORPHO token 不能买**——零抽水 + 未启动 fee switch + 63% 流通率 + \$793m 待解锁。Skip。

**那 alpha 在哪？**

让利飞轮启动后，**fee pool 不是消失了，是沉降到下一层——curator**。

## 10.1 Curator 的 unit economics

Top 3 curator 保守估计：

| Curator | AUM | 年化 fee revenue | 估算 valuation | 3yr exit potential |
| --- | ---: | ---: | ---: | --- |
| Gauntlet | \$1.88b | \~\$8.5m | \~\$60-80m | 3-5× |
| Steakhouse | \$1.26b | \~\$5m | \~\$30-50m | 3-5× |
| Re7 Labs | \$610m | \~\$2-3m | \~\$15-25m | 5-10× |

**Steakhouse 单点拆解**：

- AUM \$1.26b × 0.5% mgmt + 15% × 4% APY ≈ **\$13.9m/年**
- 成本 \$4-6m
- Net margin ~60%
- 早期 VC entry \$50m valuation → 3-5× in 3 年

\begin{insightbox}
\textbf{这是整个 lending 赛道里唯一有真实现金流的可投资载体。}\\[4pt]
不是 Aave 的 12.9\% take（涨不动 + holder capture 0.28\%）\\
不是 Morpho 的 0\%（设计上为零）\\
是 curator 的 10-20\% perf fee（真实抽给团队）
\end{insightbox}

## 10.2 为什么 VC 应该投 curator equity

三个理由：

1. **现金流锚定明确**：curator 公司是传统股权结构，performance fee 直接进公司账户，可分红 / 可回购
2. **范式赢家直接绑定**：押 Morpho 飞轮启动 = 押 curator 层增长（不需要押 MORPHO token 价值捕获）
3. **早期 valuation 合理**：当前 curator 公司估值多在 \$30-80m 区间，未来 5 年 lending TAM 翻倍 → curator AUM 大概率翻 2-3 倍

\newpage

# 第十一节·我的实际动作 + 12mo 对账 + 模板可推广

## 11.1 实际动作（\$100m fund 假设）

\begin{tldrbox}
\textbf{Lending 赛道总配置 15-21\%}\\[4pt]
1. \textbf{Curator equity \$3-5m (3-5\%)} ← \textbf{highest EV}\\
2. \textbf{LP cash 部署 \$10-15m (10-15\%)}（Morpho + Aave split，yield 4-6\%）\\
3. \textbf{AAVE token \$1.5m (1.5\%)} ← cheap optionality 押 V4 + buyback\\
4. \textbf{MORPHO token \$0} ← skip，unlock 压制 + 0 cash flow\\
5. \textbf{SPK token \$0} ← 隐性押 Rune Christensen，不如直接配 MKR/SKY\\[6pt]
剩余 \textbf{80\%} 部署到 perp DEX (Hyperliquid) / Intent (CoW, UniswapX) / agentic trading。\\
\textbf{Lending 已经不是 alpha 区——alpha 在邻近赛道。}
\end{tldrbox}

## 11.2 12 个月后回来对账

\begin{insightbox}
\textbf{可证伪预测（2027-05-27 回头看）}\\[4pt]
• Aave V4 没在 2026 年内上线主网？预测 \textbf{60\%}\\
• Aave 累计 buyback > \$30m？预测 \textbf{65\%}\\
• Gauntlet AUM > \$3b？预测 \textbf{60\%}\\
• \textbf{Morpho 主流市场首次出现 > \$50m bad debt}？预测 \textbf{15\%}（出现即 thesis 反转）\\
• Stani Kulechov 仍主导 Aave Labs？预测 \textbf{85\%}（一旦转向 = Aave 评分快速下行）\\
• AAVE token 12mo return < SPX？预测 \textbf{60\%}\\
• MORPHO token 12mo return > AAVE？预测 \textbf{65\%}\\
• yield spread 回到 +2pp 以上？预测 \textbf{30\%}（Fed 降息节奏决定）
\end{insightbox}

如果以上预测一年后大部分错了，我会写一篇"打脸复盘"。**没有 falsifiable 的 thesis 不算 thesis**。

## 11.3 五维框架可以推广（8 个赛道）

这套框架的真正价值是**通用模板**。把"让利飞轮 ↔ 抽水螺旋"换成对应赛道的中心机制，再叠加宏观 / 历史 / 团队三层情境，就能复用：

| 赛道 | 中心机制 | 宏观锚 | 历史 stress test | 团队 alpha |
| --- | --- | --- | --- | --- |
| **Lending**（done）| 让利飞轮 ↔ 抽水螺旋 | yield spread | 黑天鹅坏账 | Morpho 14 天 vs Aave 90 天 |
| **Perps** | 流动性飞轮 ↔ 滑点螺旋 | 加密 vol regime | 清算 cascade 历史 | HL 团队执行速度 |
| **DEX** | 意图飞轮 ↔ MEV 螺旋 | gas 周期 + ETH 价 | exploit 历史 | solver 团队成熟度 |
| **Restaking** | 安全飞轮 ↔ 罚没螺旋 | ETH staking 利率 | slashing 历史 | EigenLayer 团队治理 |
| **Wallet** | 分发飞轮 ↔ 流失螺旋 | 用户增长 | 安全事件 | UX 团队迭代速度 |
| **DePIN** | 激励飞轮 ↔ 补贴螺旋 | token 流动性 | rug pull 历史 | hw 团队 vs sw 团队 |
| **Stablecoin** | 锚定飞轮 ↔ 脱锚螺旋 | GENIUS Act 受益 | depeg 历史 | issuer 治理稳定性 |
| **RWA** | 合规飞轮 ↔ 不透明螺旋 | TradFi 利率 | 默认风险 | 合规 + 链上团队复合 |

\begin{insightbox}
\textbf{真正的 thesis lesson}：每次范式跃迁，价值链都会重新分配一次。\\[4pt]
不是问"哪个协议会赢"，而是问"赢家形成后，五维博弈的胜方在哪一层"。
\end{insightbox}

## 11.4 结尾

如果你能从这篇文章里只带走一个点，就是这个：

> **看 token 不如看价值流向。让利飞轮启动后，alpha 沉降到下一层。**\\
> **看商业模式不如看五维。同模式下，团队 + 历史 + 宏观决定结局。**

\newpage

\begin{tldrbox}
\textbf{TL;DR（反向回顾）}\\[6pt]
1. DeFi 借贷处在范式跃迁——从应用层抽水（Aave 12.9\%）到基础设施让利（Morpho 0\%）\\
2. \textbf{但商业模式 2x2 不够}——必须叠加三层情境：\textbf{宏观 + 操作历史 + 团队}\\
3. 宏观层：yield spread 25mo 压缩 95\%（+9pp → +0.5pp）+ GENIUS Act 等监管利好；SparkLend 受益最大，Compound 冲击最大\\
4. 操作历史层：\textbf{Aave 4/4 防线}（4 轮黑天鹅 0 重大坏账）+ Safety Module \$178m；\textbf{Morpho 1948 起清算 100\% 在长尾，主流未验证}\\
5. 团队层：\textbf{Morpho 治理周期 14 天 vs Aave 90 天}是 Morpho 追赶的根本因素；Compound 衰退因 Robert Leshner 渐退\\
6. 五维综合评分：SparkLend 7.6 / Aave 7.0 / Morpho 6.4 / Compound 3.2\\
7. Alpha 不在协议层 token，在 \textbf{curator 层 equity}（Gauntlet / Steakhouse / Re7）\\
8. 我的动作：Curator equity 3-5\% + LP cash 10-15\% + AAVE optionality 1.5\% + MORPHO 0
\end{tldrbox}

---

*完整 76 页 thesis + 数据 + 复现代码 + Phase B Dune queries：*

[Link] **roddy95o.com**
[Link] **github.com/RoddyH17/web3-vc**

*不是投资建议。是研究框架。*
