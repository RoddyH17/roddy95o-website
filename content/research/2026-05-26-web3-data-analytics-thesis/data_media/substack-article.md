---
title: "Crypto VC 都在用 Dune，但只有 a16z 投了 Nansen——这意味着什么"
subtitle: "Web3 数据分析赛道的三个 alpha 层 · 给初读者的友好版"
author: "Roddy Huang"
date: "2026-05-26"
reading_time: "14 分钟"
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
  \definecolor{accentgreen}{HTML}{27AE60}
  \definecolor{lightgray}{HTML}{F5F5F5}
  \definecolor{darkgray}{HTML}{4A4A4A}
  \titleformat{\section}{\normalfont\Large\bfseries\color{accentpurple}}{\thesection}{1em}{}
  \titleformat{\subsection}{\normalfont\large\bfseries\color{darkgray}}{\thesubsection}{1em}{}
  \pagestyle{fancy}
  \fancyhf{}
  \rhead{\small\color{darkgray}Roddy Huang · Web3 VC Research}
  \lhead{\small\color{darkgray}Web3 Data Analytics Thesis}
  \rfoot{\small\thepage}
  \renewcommand{\headrulewidth}{0.4pt}
  \setlength{\parskip}{6pt}
  \newtcolorbox{tldrbox}{colback=accentblue!8, colframe=accentblue, boxrule=1pt, arc=4pt, left=8pt, right=8pt, top=6pt, bottom=6pt}
  \newtcolorbox{quotebox}{colback=lightgray, colframe=darkgray!40, boxrule=0.5pt, arc=2pt, left=10pt, right=10pt, top=6pt, bottom=6pt}
  \newtcolorbox{insightbox}{colback=accentpurple!8, colframe=accentpurple, boxrule=1pt, arc=4pt, left=8pt, right=8pt, top=6pt, bottom=6pt}
  \newtcolorbox{primerbox}{colback=accentgreen!8, colframe=accentgreen, boxrule=1pt, arc=4pt, left=8pt, right=8pt, top=6pt, bottom=6pt, title={\bfseries 小白入门：}}
---

\thispagestyle{empty}
\vspace*{2cm}
\begin{center}
{\Huge\bfseries\color{accentpurple} Crypto VC 都在用 Dune}\\[0.4cm]
{\Huge\bfseries\color{accentpurple} 但只有 a16z 投了 Nansen}\\[1.2cm]
{\Large\itshape ——这意味着什么}\\[0.6cm]
{\large\itshape Web3 数据分析赛道的三个 alpha 层}\\[2.0cm]
{\large Roddy Huang}\\[0.4cm]
{\normalsize 2026-05-26 · 阅读时间 14 分钟}\\[0.4cm]
{\small\color{darkgray} Web3 VC Research · Substack 长文}\\
\vfill
{\small\color{darkgray} 基于 Web3 Data Analytics Thesis v1 (data integrity 8.2/10) 改写}\\
{\small\color{darkgray} 沿用 Aave thesis v4 的 10 节框架 + 三层口径 + 概率源标签}\\
\end{center}

\newpage

# 写在前面

这是我**第二篇** Web3 VC thesis 改写（第一篇是 Aave/Morpho lending 范式转移）。继续用同样的科普风格：开头给 hook，先认人，再讲故事。

如果你是 DeFi 老炮可直接跳到第四节。如果你只听过"Dune 上有很多 dashboard"，那从头读到尾 14 分钟，能拿到一份"crypto VC 如何用数据 + 数据公司的投资 map"。

\begin{primerbox}
\textbf{1.} 开头解释\textbf{为什么这个赛道值得 VC 关注}（hint: 你的 portfolio 80\% 决策都依赖这些公司的数据）\\
\textbf{2.} 一张\textbf{全景图}显示 18 个主要玩家在 4 象限里的位置\\
\textbf{3.} \textbf{SQL 时代如何被 MCP 时代取代}的商业模式简史\\
\textbf{4.} 谁在赚钱、谁在烧钱、谁在 forced pivot
\end{primerbox}

\newpage

# 第一节·为什么 VC 该关心 Web3 数据分析？

## 1.1 因为数据已经成为 crypto VC 的主要 alpha 来源

老 crypto VC 的 edge 是关系——能拿到 hot deal 的 allocation。新 crypto VC 的 edge 是什么？看下面这 3 个 case：

| 案例 | 故事 | 含义 |
| --- | --- | --- |
| **Hyperliquid (2024-25)** | TVL $564M → $6B，revenue $844M 超过 Ethereum $524M。**零 VC backing** | 所有 VC 失去 deal flow edge，只能在 DefiLlama / Dune 上重 thesis |
| **Pump.fun (2024-26)** | 匿名分析师 `@adam_tehc` 的 Dune dashboard 成为全行业 reference | 忽视 dashboard 的 VC 错过 36% of Solana app income |
| **Friend.tech (2023)** | Cohort retention dashboard 直接 expose 周 2 retention drop-off | 数据驱动负面 thesis，杀死交易 |

\begin{insightbox}
\textbf{当 \$6B TVL 协议能在零 VC backing 下存在，VCs 失去 deal flow edge，on-chain data 成为他们\textbf{唯一可以 build 的 research edge}。}
\end{insightbox}

## 1.2 这跟你的 portfolio 直接相关

如果你买过 AAVE / MORPHO / Hyperliquid token，你的 thesis 估值大半依赖 Dune dashboard 或 DefiLlama 数字。**你已经在使用这层基础设施，但你 portfolio 里很可能没有这个赛道的 exposure**。

这是 supply-demand mismatch：**每个 crypto VC 都在消费数据 infra，但只有 a16z 一家系统性投资了**（Nansen 领投、Goldsky portfolio、Allium portfolio）。其他 7 家 top VC 都是消费者不是 owner。

这是这篇 thesis 的核心 anchor——**有一个赛道，需求侧已经验证（所有 VC 都用），但供给侧投资严重不足**。

## 1.3 这个赛道有多大？

| TAM 估算 | 当前 (2025) | 2030 投影 | CAGR |
| --- | ---: | ---: | ---: |
| Compliance & Analytics | $2.45-3.5b | $10-14b | 22-26% |
| 加 discretionary analytics | $5-7b | $20-25b | 25%+ |
| 加 dev infra | $7-10b | $30-40b | 30%+ |

**$30b 的 5 年增长**——这是个 mid-sized 赛道，不是 trillion。但 **valuations 已被 compression 到 reasonable**（Chainalysis $8.6b → $2.5b mark），意味着进入估值低于历史峰值。

\newpage

# 第二节·先认识所有玩家（市场全景图）

\textbf{在我开始讲故事之前，请先花 30 秒看完这张图}——把后文会提到的所有玩家、它们在哪个象限、谁是谁都展示出来了：

![Web3 Data Analytics Universe](../charts/01-data-analytics-universe.png){width=100%}

## 2.1 怎么读这张图（4 象限）

整个 Web3 Data Analytics 宇宙是**两维分类**的：

**横轴**：Free/Open ↔ Paid/Enterprise  
**纵轴**：Query/Dashboard（给人用）↔ API/Infra（给机器/开发者用）

四个象限里各有谁：

**Q1 · 免费 + Query/Dashboard**（左上）：
- **DefiLlama**（10M monthly users, $300/mo Pro）—— 所有 TVL 数字的 canonical 源
- **Etherscan / Blockscout** —— 浏览器层
- **Dune Free** —— 200K 公共 dashboard
- **Flipside 已死**（2025-07 杀掉 SQL Studio，转 AI/MCP only）

\begin{primerbox}
\textbf{Q1 的存在压低了 Q2 的 pricing} —— DefiLlama 免费给 TVL，所以 Glassnode / Nansen 无法对"基础 TVL"再收费，必须靠"labels / smart money"差异化。
\end{primerbox}

**Q2 · 付费 + Query/Dashboard**（右上，**discretionary SaaS**）：
- **Dune Paid** $13M ARR（估）—— 25% layoff 刚刚发生
- **Nansen** $9M ARR —— wallet labels + smart money，已转 mobile AI trader
- **Glassnode** —— macro 量化 + 衍生品
- **Token Terminal** —— 协议财务标准化
- **Messari** —— 研究报告 + screener
- **Arkham** —— **已 pivot 到 perp DEX**（不再是数据公司）

\begin{insightbox}
\textbf{这个象限 ex-compliance 没有一家 player ARR 超过 \$50M。} 这是个物理天花板——crypto VC + 主要 protocol team 全行业 < 2000 个机构买家，单家最多卖到 \$50M ARR 就饱和。
\end{insightbox}

**Q3 · 免费 + API/Infra**（左下）：
- **The Graph**（GRT token）—— 去中心化 indexer
- **Bitquery free** —— GraphQL + WebSockets
- **Self-hosted indexers**（Reth, Foundry）—— Paradigm 路线

**Q4 · 付费 + API/Infra ★**（右下，**本文重点**）：
- **Chainalysis** —— ~$250M ARR，政府合规之王
- **Allium** —— $3.5M ARR, Visa/Stripe/Phantom 客户
- **Goldsky** —— Polymarket/Privy/Monad 客户
- **Dune Sim**（收购 smlXL）—— 转身故事
- **Sentio** —— smart-contract observability

\begin{primerbox}
\textbf{Curator 是什么？Allium 是什么？}\\
\textbf{Allium = 数据界的 Stripe}。它把链上数据 ETL 干净，按企业 ACV (\$50-500K/年) 卖给 Visa / Stripe / Phantom 等，让他们直接读到 Snowflake / BigQuery。\\
\textbf{Goldsky = 类似 Allium，更侧重 dapp 开发者}（Polymarket / Privy 用）。\\
\textbf{Chainalysis = 链上数据界的 Bloomberg + LexisNexis}，主要客户是政府和银行。
\end{primerbox}

## 2.2 看完这张图，请记住这件事

\textbf{$50M ARR 是 discretionary SaaS（Q2）的天花板。multi-billion outcomes 都在 Q4：要么合规（Chainalysis 路线），要么企业 infra（Allium 路线），要么 trading 垂直整合（Arkham 路线）。}

\newpage

# 第三节·商业模式简史——从 SQL 到 MCP

这个赛道一共经历了三代。

## 3.1 Era 1 (2017-2021): Explorer 时代

\textbf{核心模型：地址 + 交易展示，靠流量收广告费}

代表：**Etherscan**（2015 创立）。Block Solutions 收购了 Solscan（2024-01）。FY23 收入 ~$25.8M。

**问题**：只能查"已发生的事"。无法做 fee revenue 趋势、wallet cohort 等 thesis 分析。

## 3.2 Era 2 (2018-2024): SQL/Dashboard 时代

\textbf{核心模型：把链上数据 ETL 成 SQL warehouse，社区 SQL 写 dashboard}

代表：**Dune Analytics**（2018, Coatue $69.42M Series B @ $1b in Feb 2022）、**Flipside Crypto**（$50M Series A）、**Nansen**（labels + dashboard, $75M Series B @ $750m）。

这是 crypto data 起飞的时代。Dune 的 200K dashboards、1.5M datasets、6.5M queries、100K+ analysts 形成了**带标签的 query network effect**——竞争对手很难复制。

**问题**：
- SaaS 订阅模型 ARR 天花板低（Nansen $9M 证实）
- AI/MCP 让用户 bypass dashboard，直接问 LLM
- 企业客户要 warehouse-native delivery，不要 web UI

## 3.3 Era 3 (2024-): MCP/AI Agent 时代

\textbf{核心模型：数据通过 MCP server 喂给 LLM agent，agent 替用户写 SQL + 做分析}

代表事件：

![AI / MCP 时间轴](../charts/03-ai-mcp-timeline.png){width=100%}

- **Flipside 2025-07**：**杀掉 SQL Studio**，转 FlipsideAI + MCP only
- **Dune 2026-03**：上线 Dune MCP（12 tools，100+ chains）
- **Dune 2026-05**：25% layoff，CEO Haga 公开说 "AI 工具替代 headcount"
- **Nansen 2025-Q3**：mobile AI trading agent（Solana + Base）
- **Arkham 2026-Q1**：从 data SaaS 转**全去中心化 DEX**

\begin{insightbox}
\textbf{为什么这次范式转移更剧烈：用户不再打开 dune.com，而是在 Claude / Cursor 里 prompt}。价值从 UI 层（dashboard）迁到数据层（labels / clean schema）。
\end{insightbox}

\newpage

# 第四节·数据：谁在赚钱，谁在烧钱

## 4.1 ARR vs 累计融资对比

![ARR vs Funding](../charts/02-arr-vs-funding.png){width=100%}

**4 个关键事实**：

1. **Chainalysis 一家吃掉合规市场** —— ~$250M ARR > 所有其他 player 总和的 5 倍
2. **Discretionary SaaS 普遍 < $20M ARR** —— Dune $13M、Nansen $9M、Allium $3.5M
3. **融资 vs ARR 比值**：Chainalysis 2.1x（健康），Dune 6.1x（估值已被打高 3x）
4. **Allium $21.5M raised on $3.5M ARR** = 正常 Series A，**增速快**（Visa / Stripe 都已是客户）

## 4.2 8 大 VC 怎么用这些工具

我从公开 report / 数据访谈 反推了 8 大 crypto VC 的工具使用模式：

![VC tool matrix](../charts/04-vc-tool-matrix.png){width=100%}

**关键结论**：

1. **Dune + DefiLlama 是真正的 8/8 default stack** —— 任何 thesis 都默认引用
2. **只有 a16z 系统性投资了这层 stack**（Nansen、Goldsky、Allium 都在 portfolio）—— 其他 7 家是 free rider
3. **5 of 8 VC 有命名的 data scientist**：a16z (Daren Matsuoka)、Variant (Jack Gorman)、Dragonfly (Hildebert Moulié)、Pantera (Research Lab)、Electric (Curtis Spencer 等)
4. **Hire from data analytics → VC 比想象的少** —— supply 端可利用的 hiring gap

\newpage

# 第五节·商业模式之战：4 种 multi-billion paths

## 5.1 Path A: 合规 + 政府（Chainalysis 路线）

唯一一个 ACV >$100K 是常态的 segment。政府 buyer 一旦签约，churn 极低。Chainalysis 已经 5 起收购，最新 Alterya $150M（2025-01）。

**护城河**：(1) 法庭可采纳的证据；(2) 监管/培训 contracts；(3) 政府合同 cycle 极长

**Bear case**：Chainalysis 自己 $2.5b mark，下一个进入者要从零 build 5 年 + $500M+ 资金。**Alterya 路径（被 Chainalysis $150M 收购）可能是早期 VC 更现实的 outcome**。

## 5.2 Path B: 企业 data warehouse（Allium / Goldsky 路线）★

**这是本 thesis 最高 conviction 的 alpha 层**：

| 维度 | Allium | Goldsky |
| --- | --- | --- |
| 累计融资 | $21.5M | $20M |
| ARR | $3.5M | undisclosed |
| 关键客户 | **Visa, Stripe, Phantom, Uniswap Foundation, Brevan Howard** | **Polymarket, POAP, Privy, Monad, Arweave** |
| 产品定位 | 企业 SOC-cert blockchain data warehouse | Subgraph hosting + real-time streaming |
| 推算 valuation | $80-120M | $60-100M |

**4 个 bull case 理由**：

1. **Visa / Stripe 已经是客户** = institutional 接受 $50K+ ACV 单价
2. **The Graph 退出 hosted service**（2026）打开 Goldsky 的 institutional 市场
3. **AI/MCP 需要干净 schema** = Allium/Goldsky "Stripe of blockchain data pipes" 定位**正好**适配新范式
4. **早期估值合理** —— $80-120M Series A，3 年 5-10x potential 不奇怪

\begin{insightbox}
\textbf{这是整个赛道里 risk-adjusted EV 最高的}：BUY \textbf{Allium} 下一轮 / \textbf{Goldsky} 下一轮，3-8x EV in 3yr。
\end{insightbox}

## 5.3 Path C: 垂直整合到 trading（Arkham / Nansen 路线）

**逻辑**：Forced pivot——纯 data SaaS cap 在 $50M ARR，trading（% of volume）才有 multi-billion outcome。

- Arkham 已 ship perp DEX，日 volume ~$640K（modest）
- Nansen AI 移动 trading agent 还在 ramp

**判断**：要么 10x，要么 -70%。**只配 < 2% portfolio 作为 speculative bet**。

## 5.4 Path D: 开源公共物品（DefiLlama / Blockscout）

不是投资标的。但**是顶级 thesis 数据源 + 团队招聘候选池**。0xngmi 类型创始人是顶级 hire target。

\newpage

# 第六节·价值捕获栈——alpha 集中在哪一层？

![Value Capture Stack](../charts/05-value-capture-stack.png){width=100%}

5 层从 foundation 到 interface：

| 层 | 主要玩家 | 价值捕获 | 投资动作 |
| --- | --- | --- | --- |
| **L1 · 原始数据 + 合规** | Chainalysis / Etherscan / DefiLlama | Chainalysis $250M ARR，其余趋零 | BUY Chainalysis-类，pass 其余 |
| **L2 · 企业 Warehouse ★** | Allium / Goldsky / Sentio | Visa/Stripe 必买 = stable enterprise revenue | **STRONG BUY** Allium/Goldsky |
| **L3 · Discretionary SaaS** | Nansen / Messari / Glassnode | $50M ARR 天花板 | **PASS** unless trading-pivot |
| **L4 · MCP/API 中间件 ★** | Dune MCP / Token Terminal MCP | Cleanest label graph 谁赢 | **EXPLORE** — watchlist #1 |
| **L5 · AI Agent 接口** | Cursor / Claude Code | LLM 厂商 (Anthropic / OpenAI) 抽 token 费 | N/A — 不是 crypto VC 域 |

\newpage

# 第七节·但慢一点——3 个反直觉问题

## 7.1 既然 demand 那么强，为什么 ARR 都这么小？

Ex-Chainalysis 没有一家 $50M ARR。原因：

1. TAM 测算 inflate（把 chain-analytics + compliance 加总）
2. 客户高度 concentration（crypto VC + 主要 protocol team 全行业 < 2000 个机构买家）
3. 熊市削减预算（2022-2024 多次 layoff 削掉了 SaaS budget）

**含义**：任何 thesis 都不该基于"Dune 成为下一个 Snowflake"。**目标 outcome 是 $200M-$2B exit，不是 $100B Snowflake-like**。

## 7.2 Dune $1b 估值还合理吗？

Stale mark 数学：

- $1b@Feb 2022 时 ARR 估 $5-8M = P/S 150-200x（牛市估值）
- 现在 $13M ARR 同 P/S 150x = $2b（假设增长合理）
- 但 sector multiple 已 compress 到 10-30x = $130M-400M
- 加 Sim/Echo（real-time API）dev infra story = $400M-800M

\textbf{结论}：$1b 是 stale，公允区间 \textbf{$400M-1.2B}。如果有 secondary 在 $500-700M，可能值得 consider。

## 7.3 AI/MCP 会不会反而救 Dune？

Bull：MCP server + Spellbook + 200K dashboard 语料库 = LLM-on-Dune 比 LLM-on-Bitquery 准；25% layoff 减少 burn → runway 延长

Bear：按 query 收费会被 DefiLlama-style 公共物品压低；用户在 Claude Code 里跑 Dune MCP = Anthropic 抽 + Dune 抽**两头都抽**

**净判断**：Dune 不会死，但**估值不会 reflate 到 $5b**。最可能 path 是 $500M-1.5B 区间停 3-5 年，等 Sim ARR ramp。

\newpage

# 第八节·我的实际动作（$100M fund 示例）

| 类别 | 金额 | 占比 | 标的 |
| --- | ---: | ---: | --- |
| **L2 企业 infra ★** | $4-6m | **4-6%** | **Allium + Goldsky equity (2 deals)** |
| L1 合规 | $2-3m | 2-3% | Chainalysis pre-IPO secondary or 早期 compliance startup |
| L3 trading-pivot 投机 | $1-2m | 1-2% | ARKM token + Nansen secondary (if available) |
| L4 watchlist | $0 | 0% | 暂不动手，6-12 mo 再 reassess |
| **总 sector exposure** | **$7-11m** | **7-11%** | — |

其余 ~85-90% portfolio 仍配在 Lending（Curator equity per Aave thesis）、Perp DEX、Intent。

\newpage

# 第九节·12 个月可证伪预测

| 预测 | 概率 | 概率源 | 证伪条件 |
| --- | ---: | --- | --- |
| Allium 12mo 内融资 Series B > $40m | 65% | 【数据】Visa/Stripe 客户增长 | 12mo 内无 Series B 或 < $40m |
| Goldsky 12mo 内被 acquired or 大 Series B | 50% | 【类比】The Graph 退出 | 12mo 内既不被收购也无 Series B |
| Chainalysis 12mo 内 IPO 或 announce | 55% | 【数据】$250M ARR + markdown 后估值合理 | 12mo 内不动 |
| Nansen 大 layoff (再次 > 20%) 或被收购 | 40% | 【类比】Messari 创始人 step down | 12mo 内 happy normal operation |
| Dune ARR 12mo > $25M | 35% | 【主观】Sim/Echo ramp 时间表 | < $25M |
| 至少 2 家 small data startup 被 Chainalysis-style 收购（$50-200M）| 70% | 【数据】历史 4 起收购节奏 | 0-1 起 |
| Nansen/Glassnode/Messari 之一官宣 token | 45% | 【类比】SaaS → token rev-share | 无 token 公告 |

**2027-05 见**。

\newpage

# 第十节·最后：跟 Aave thesis 的连接

这是我第二篇 thesis。跟第一篇（Aave/Morpho lending 范式转移）放在一起看，能看出一个共同模式：

| Aave thesis 的 alpha | Data Analytics thesis 的 alpha |
| --- | --- |
| Curator 层 (Gauntlet / Steakhouse / Re7) | Enterprise Infra 层 (Allium / Goldsky / Chainalysis) |
| 服务 LP（asset managers）| 服务 Visa / Stripe / 政府 |
| 收 perf fee 10-20% | 收企业 ACV $50-500K/年 |

\begin{insightbox}
\textbf{共同模式：真正赚钱的不是有名的 protocol / dashboard，是那些 institutional 客户必须每月付钱的 infrastructure 供应商。Curator 服务 LP，Allium 服务 Visa——本质是同一种"to-business 必须服务"逻辑。}
\end{insightbox}

每一次范式转移，价值链都会重新分配一次。**抓住正确的层级，alpha 自然来。**

\vspace{1cm}

\begin{tldrbox}
\textbf{TL;DR 反向回顾}（现在你能完整读懂了）：

\begin{itemize}[leftmargin=*, itemsep=4pt]
\item \textbf{Crypto VC 全在用 Dune，但只有 a16z 投了 Nansen / Goldsky / Allium}——demand 验证，supply 投资严重不足
\item \textbf{Discretionary SaaS 的天花板是 \$50M ARR}（Dune \$13M, Nansen \$9M 证实）——multi-billion outcomes 不在这里
\item \textbf{真正的 alpha 在 3 个边缘}：(1) 合规 (Chainalysis \$250M ARR)、(2) 企业 infra (Allium / Goldsky，已被 Visa / Stripe 买单)、(3) trading 垂直整合 (Arkham / Nansen 的 forced pivot)
\item \textbf{我的动作}：\textbf{Allium / Goldsky equity 重仓 4-6\% (STRONG BUY)} + Chainalysis 2-3\% + ARKM 1-2\% 投机 + Dune/Nansen token PASS
\end{itemize}
\end{tldrbox}

\vspace{0.6cm}

\begin{tldrbox}
\textbf{披露}：作者持有少量 ETH、SOL；不持有任何 data analytics 公司的 equity 或 token。本文为研究框架演示，\textbf{非投资建议}。

\textbf{完整数据 + 复现代码}：roddy95o.com/research/web3-data-analytics-thesis + github.com/RoddyH17/web3-vc

\textbf{数据源}：3 parallel research agents + DefiLlama API + Crunchbase + Tracxn + Sacra + Dune Orchestrator (自建)
\end{tldrbox}

\vfill

\begin{center}
\small\color{darkgray}
\textit{Roddy Huang · Cornell ORIE · 2026 · Web3 VC Research alpha} \\
\textit{Substack: roddy95o.com · Twitter: @Roddyzh} \\[0.2cm]
\textit{第二篇 thesis · 套用 Aave thesis v4 框架（10 节 + 三层口径 + 概率源标签）}
\end{center}
