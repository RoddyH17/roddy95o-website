---
title: "Twitter Thread — DeFi 借贷的五维博弈"
subtitle: "30-tweet thread · 商业模式 × 宏观 × 历史 × 团队"
author: "Roddy Huang"
date: "2026-05-27"
documentclass: article
geometry: "margin=2cm"
fontsize: 11pt
mainfont: "Songti SC"
sansfont: "Heiti SC"
monofont: "Menlo"
CJKmainfont: "Songti SC"
header-includes: |
  \usepackage{tcolorbox}
  \usepackage{xcolor}
  \definecolor{twitterblue}{HTML}{1DA1F2}
  \definecolor{accentpurple}{HTML}{9B26AF}
  \definecolor{accentred}{HTML}{E74C3C}
  \definecolor{accentgreen}{HTML}{27AE60}
  \definecolor{accentorange}{HTML}{F39C12}
  \definecolor{darkgray}{HTML}{4A4A4A}
  \newtcolorbox{tweetbox}{colback=twitterblue!5, colframe=twitterblue!50, boxrule=0.6pt, arc=4pt, left=8pt, right=8pt, top=4pt, bottom=4pt}
  \newtcolorbox{hookbox}{colback=accentpurple!8, colframe=accentpurple, boxrule=1.2pt, arc=4pt, left=8pt, right=8pt, top=6pt, bottom=6pt}
  \newtcolorbox{macrotag}{colback=accentorange!10, colframe=accentorange, boxrule=0.6pt, arc=3pt, left=6pt, right=6pt, top=2pt, bottom=2pt}
  \newtcolorbox{historytag}{colback=accentred!8, colframe=accentred, boxrule=0.6pt, arc=3pt, left=6pt, right=6pt, top=2pt, bottom=2pt}
  \newtcolorbox{teamtag}{colback=accentgreen!8, colframe=accentgreen, boxrule=0.6pt, arc=3pt, left=6pt, right=6pt, top=2pt, bottom=2pt}
---

# Twitter Thread (30 tweets)

> 用于 Twitter / X 发布。每条 < 280 字符（中文约 130 字以内）。
> 节奏：钩子(1-2) → 现状数据(3-5) → 商业模式核心(6-9) → 宏观层(10-13) → 操作历史层(14-18) → 团队层(19-22) → 五维评分(23-25) → curator alpha(26-28) → 决策+CTA(29-30)

---

## [Thread] Thread

\begin{hookbox}
\textbf{1/30} 12 个月前 Morpho TVL 是 Aave 的 18\%。

现在是 53\%。

但只看 TVL 会被三个数据打脸：

• Aave take rate 12.9\%，但 12mo TVL 只跌 1\%
• Morpho 已 1,948 起清算，\textbf{100\% 在长尾}
• Compound 也归零了 take rate，但跌 61\%

为什么？因为 lending 是\textbf{五维博弈}。

一个 thread 🧵
\end{hookbox}

---

**2/30** 五个维度：

1. 商业模式（take rate）
2. 价值分配（holder capture）
3. 宏观环境（Fed + 监管）
4. 操作历史（坏账纪录）
5. 团队执行（创始人 + 治理速度）

商业模式 2x2 只能解释 40\% 的协议命运。

---

**3/30** 先看现状（DefiLlama, 2026-05-25）：

| 协议 | TVL | Revenue | Take Rate |
|---|---|---|---|
| Aave V3 | \$13.84b | \$87.4m | 12.9\% |
| Morpho | \$7.41b | \$0 | **0\%** |
| SparkLend | \$3.29b | \$2.6m | 4.82\% |
| Compound | \$1.24b | \$0 | 0\% |

---

**4/30** 但 Aave 的 \$87.4m revenue 里，**真正流向 token holder 的只有 \$242k**。

Holder capture = 0.28\%。

意思：协议赚钱 ≠ token 持有人赚钱。

---

**5/30** SparkLend 数字更怪：

- 年化 Revenue: \$2.6m
- 年化 Holders Revenue: \~\$4.3m
- **Holder capture: 164\%**

分给 holder 的钱**比协议自己赚的还多**。只能是 MakerDAO 国库在补贴。

---

**6/30** \textbf{维度 1-2：商业模式 × 价值分配}

两个对称的因果环：

**让利飞轮**（Morpho）：0\% 抽水 → LP 收益高 → TVL 集中 → 生态繁荣

**抽水螺旋**（Aave）：12.9\% 抽水 → LP 流失 → fees 缩 → 治理失效

---

**7/30** 双轴拆解：

- **Take rate 决定路径**
- **Holder capture 决定可持续**

四象限对应四种命运。Aave 在最坏的象限：**抽到了水但分不下去**。

---

**8/30** Aave 的 dilemma：

- 学 Morpho 降 take rate → AAVE 失价值锚 → 价格崩
- 不降 → LP 持续流向 Morpho → TVL 流失

**双输 corner**。

类比：Costco 不能学 Amazon 降价，会破坏 membership 模式。

---

**9/30** Aave = 百货公司（curated，加 12.9\% 毛利）
Morpho = 商场地产（permissionless，不抽销售额）

经典 commoditize-your-complement 战略。

**但仅靠这个 2x2 解释不了三个事实**。

---

**10/30** 🟠 \textbf{维度 3：宏观环境层}

T-bill vs DeFi USDC yield spread：

- 2024-01: +9 pp
- 2025-01: +3.2 pp
- **2026-05: +0.5 pp**（基本消失）

25 个月，spread 被压缩 95\%。

---

**11/30** 🟠 spread 压缩的三个结构性后果：

1. **LP 结构换血**：散户失去动机，剩机构 + 加密原生用户
2. **take rate 差异被放大**：spread 大时 12.9\% 不显眼，spread 小时是流失催化剂
3. **借款人结构转向 farming + LST 循环**

---

**12/30** 🟠 2025 监管利好叠加：

- GENIUS Act（稳定币立法）→ SparkLend 直接受益
- SEC Atkins 确认 ETH 非证券
- SAB 121 撤销 → 机构托管放松
- Trump 政府轻触监管

监管溢价从"风险折价"变"合规升水"。

---

**13/30** 🟠 协议宏观敏感度排序：

- SparkLend：**最低**（资金来自 MakerDAO 内部分配）
- Aave：中（机构 LP 不太 yield-sensitive）
- Morpho：中-高（permissionless）
- **Compound：最高**（散户 LP 流失最快）

这就解释了 Compound 为什么跌 61\%。

---

**14/30** 🔴 \textbf{维度 4：操作历史层}

LP 不在意 take rate 是 12.9\% 还是 0\%——他们在意**这个协议明天会不会爆掉**。

信任来自历史压力测试，不是白皮书。

---

**15/30** 🔴 Aave 的"4/4 防线"：

| 事件 | 损失 |
|---|---|
| Black Thursday 2020 | \$7k |
| LUNA/UST 2022 | \$0 |
| FTX 2022 | \$0 |
| Eisenberg CRV 2022 | \$1.6m |

5 年累计 < \$10m。DeFi 借贷**独一无二**纪录。

---

**16/30** 🔴 加上 Safety Module \$178m stkAAVE 兜底——协议级首损保险。

**Morpho 没有。Compound 没有。所有人都没有。**

这就是为什么 take rate 12.9\% 的 Aave 没崩——机构 LP 在为这份信任付溢价。

---

**17/30** 🔴 但 Morpho 数据吓到我了：

- 全历史 1,948 起清算
- **主流市场（WETH/USDC/WBTC）清算 = 0**
- **100\% 在长尾**（PEPE/Mog/SPX/REKT）

**Morpho 是 long-tail king，不是 Aave killer。**

主流市场尚未真正压力测试过。

---

**18/30** 🔴 这是 Morpho 估值上限的核心约束。

**未来 12-18 个月最关键 catalyst**：Morpho 主流市场首次出现 > \$50m bad debt？

我估算概率 15\%——低概率但发生即 thesis 反转，让利飞轮叙事崩塌。

---

**19/30** 🟢 \textbf{维度 5：团队执行层}

最被低估的维度。同模式 + 同宏观 + 同信任下，**结局分化的根本解释变量是团队**。

---

**20/30** 🟢 治理周期对比：

- **Morpho：14 天**
- SparkLend: 60 天
- Aave: 90 天
- Compound: 120 天

**Morpho 18mo 追到 Aave 53\% 的根本团队因素**——不是技术，不是商业模式，是执行速度的代差。

---

**21/30** 🟢 四家协议团队画像：

- Aave (Stani Kulechov): **A**，成熟但需提速
- Morpho (Paul Frambot): **A+**，学院派精英 + 速度
- Compound (Robert Leshner 渐退): **C**，衰退
- SparkLend (Rune 主导): **B+**，强但非纯借贷

---

**22/30** 🟢 Compound 的悲剧：

Robert Leshner 转去 CoinList Capital 后，Compound Labs 进入"维护模式"。

**协议在表面没事的情况下慢性衰退——DeFi 协议的 silent killer。**

Aave 当前隐性风险：Stani 如果转向其他项目，evaluation 快速下行。

---

**23/30** **五维综合评分**（权重见报告）：

| 协议 | 评分 |
|---|---|
| SparkLend | **7.6** |
| Aave V3 | 7.0 |
| Morpho Blue | 6.4 |
| Compound V3 | 3.2 |

注意：SparkLend 第一靠母协议补贴；Compound 已边缘化。

---

**24/30** Aave 7.0：**四高一低**——商业模式 8 / 宏观 7 / 操作历史 **10** / 团队 7 / 价值分配 **3**。

只要 V4 + buyback 兑现 → 综合分跳到 8.5+，token 3-5×。

继续拖 → 下行到 5.5-6.0。

**Binary catalyst**。

---

**25/30** Morpho 6.4：商业模式 + 团队**双 10 分**，但操作历史 6 分。

主流市场未验证是 token 估值上限。

零抽水悖论：协议层 Revenue = 0，token 缺现金流锚定，需要未来 fee switch。但承诺零抽水 → fee switch 即信任崩塌。

---

**26/30** \textbf{Alpha 在哪？}

让利飞轮启动后，**fee pool 不是消失了，是沉降到下一层——curator**。

Top 3：
- Gauntlet \$1.88b → \~\$8.5m/年
- Steakhouse \$1.26b → \~\$5m/年
- Re7 \$610m → \~\$2-3m/年

---

**27/30** Steakhouse unit economics：

- AUM \$1.26b
- 0.5\% mgmt + 15\% × 4\% perf ≈ **\$13.9m/年**
- Net margin \~60\%
- 早期 VC entry \$50m → 3-5× in 3 年

**这是 lending 里唯一有真实现金流的可投载体。**

---

**28/30** Gauntlet 是 DeFi 借贷的"黑石"：

- Tarun Chitra (Stanford CS PhD)
- 2018 年成立，60+ 人
- 多协议 risk advisor（Aave/Compound/Uniswap）
- 现 MetaMorpho 直接管 \$1.88b

**整个 lending 赛道唯一一个机构级团队**。

---

**29/30** 我的实际动作（\$100m fund）：

- **Curator equity \$3-5m** ← highest EV
- **LP cash \$10-15m** ← yield 4-6\%
- **AAVE token \$1.5m** ← cheap optionality
- **MORPHO \$0** + **SPK \$0**

总 sector 15-21\%，剩 80\% 部署到 perps / intent / agentic。

---

**30/30** 真正的 thesis lesson：

每次范式跃迁，价值链都会重新分配一次。

不是问"哪个协议会赢"，而是问"**赢家形成后，五维博弈的胜方在哪一层**"。

完整 76 页 thesis：

[Link] roddy95o.com
[Link] github.com/RoddyH17/web3-vc

/end

---

## 发布 metadata

| 项目 | 内容 |
| --- | --- |
| 总 tweet 数 | 30 |
| 估算阅读时间 | 4-5 分钟 |
| 最佳发布时间 | 周二/周四 9-11am ET |
| 推荐 hashtag | #DeFi #Aave #Morpho（不超 3 个）|
| 提及账号 | @aave @MorphoLabs @gauntlet\_xyz @SteakhouseFi @Re7Labs |
| 中心机制 | 让利飞轮 ↔ 抽水螺旋 + 三层情境 |

## 配图建议

| Tweet # | 内容 | 配图 |
| --- | --- | --- |
| 1 | TVL 比值反差 | `01-tvl-trajectory.png` |
| 7 | 双轴四象限 | 自绘 2×2 |
| 10 | yield spread 25mo 压缩 | 自绘时间序列 |
| 17 | Morpho 长尾分裂 | `07-liquidation-full-sample.png` |
| 23 | 五维评分雷达图 | 自绘 5-axis radar |
| 26 | Curator landscape | `06-curator-aum-landscape.png` |

## 引流策略

- Tweet 1 配图 = TVL 比值时间序列（视觉钩子）
- 24h 后 quote 第 1 tweet 重发 5 维评分表（tweet 23）吸引第二波
- 48h 后发"五维框架可推广到 8 赛道"的 follow-up thread
- Substack 长文 + bio link 双重曝光
