---
title: "Twitter Thread — Monad 的五维博弈"
subtitle: "30-tweet thread · 性能飞轮 ↔ 商品化 EVM 陷阱"
author: "Roddy Huang"
date: "2026-06-04"
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
---

# Twitter Thread (30 tweets)

> 用于 Twitter / X 发布。每条 < 280 字符（中文约 130 字以内）。
> 节奏：钩子(1-2) → 现状数据(3-5) → 商业模式核心(6-9) → 宏观层(10-13) → 操作历史层(14-17) → 团队层(18-21) → 五维评分(22-25) → 应用层 alpha(26-28) → 决策+CTA(29-30)

---

## [Thread] Thread

\begin{hookbox}
\textbf{1/30} Monad 上线 7 个月。三组数据形成尖锐张力：

• FDV \$3.15b（市场期待）
• Chain TVL \$369m（rank \#14）
• FDV/TVL \textbf{8.5×}（远高于行业中位）
• Top 15 dApp: \textbf{100\% 多链部署的存量 EVM 协议}
• Monad-native killer app: \textbf{0}

是下一个 Solana？还是下一个 Aptos？

一个 thread 🧵
\end{hookbox}

---

**2/30** 五个维度（与之前 Aave thesis 同框架，L1 适配）：

1. 性能（technical moat）
2. 应用层捕获（killer app）
3. 宏观环境（alt-L1 narrative）
4. 操作历史（mainnet 稳定性）
5. 团队执行（创始人 + VC matrix）

TPS 只能解释 20%。剩下 80% 在三层情境里。

---

**3/30** 先看现状（DefiLlama, 2026-06-04）：

| 通用 L1 | TVL | 综合分 |
|---|---|---|
| Solana | \$4.93b | **7.8** |
| Hyperliquid L1 | \$1.66b | **8.6** |
| Monad | \$369m | **6.6** |
| Aptos | \$196m | **4.6** |

Monad 6.6 = 高于失败案例，低于成功案例。

---

**4/30** 但 Monad top 15 dApp 让我警觉：

LayerZero V2 / Morpho Blue / Tether Gold / Steakhouse / PancakeSwap / Curve / Uniswap V3/V2/V4 / Centrifuge / Backpack / Euler V2 ...

**100% 都是部署在 30+ 其他链的 EVM 协议**。

Monad-native: 0 in top 15。

---

**5/30** 这件事的含义：

\textbf{Monad 当前 \$369m TVL 全部是"借来的"}。

Morpho Blue 部署 33+ 链，Monad 只是其中一个。Uniswap 部署 43+ 链。

任何 dApp 对 Monad 的依赖度都极低。Monad 沦为 commodity venue。

这是商品化 EVM 陷阱的最直接证据。

---

**6/30** \textbf{维度 1：性能（Performance）}

两个对称的因果环：

**性能飞轮**（Monad 押注）：
10k TPS → 用户体验突出 → dev 涌入 → killer app 涌现 → MON 价值

**商品化 EVM 陷阱**：
EVM 兼容 → 性能改进可被 fork → Sei V2/MegaETH/Plasma 复制 → 差异化窗口关闭

---

**7/30** Monad 性能 claim：
- 10,000 TPS（理论峰值）
- 400ms finality
- 100% EVM bytecode 兼容
- Parallel EVM + MonadDB + HotStuff 共识

mainnet 7 个月处理 1.4 亿+ tx。**真实平均 ~23 tx/s**，远未触及性能极限。

为什么？因为当前 dApp 不需要 10k TPS。

---

**8/30** EVM 兼容性是双刃剑：

| | EVM 兼容 | 自研语言 |
|---|---|---|
| Dev 进入 | 低 | 高 |
| 应用粘性 | **低** | 高 |
| 差异化窗口 | **12-24mo** | 长 |
| Token 价值捕获 | 弱 | 强 |

Monad 选 EVM = dev acquisition 友好，但 dev retention 不友好。

---

**9/30** \textbf{维度 2：应用层捕获}

L1 价值锚 = native ecosystem。

Solana：Phantom + Pump.fun + Jito + Jupiter（native moat）
Aptos：0 native killer app
HyperLiquid：perp DEX = chain itself
**Monad：Folks Finance (\$10m+) + Kuru DEX = 早期 < \$50m native TVL**

---

**10/30** 🟠 \textbf{维度 3：宏观环境层}

alt-L1 占 crypto total 的变化：

- 2021 顶峰：~18%
- 2024-2026 三极化：**~6%**

BTC + ETH + SOL ETF 抽干长尾。Aptos -40%、Sui -30%、长尾 alt-L1 普跌。

---

**11/30** 🟠 关键转折点：

- 2024-01 BTC ETF → alt-L1 +30% follow
- 2024-05 ETH ETF → alt-L1 持平
- **2025-Q4 SOL ETF → SOL +80%, alt-L1 -25%**
- 2026 至今：长尾 alt-L1 持续承压

Monad 上线时机（2025-11）= alt-L1 最弱窗口之一。

---

**12/30** 🟠 vs Solana 2020-03 上线：

Solana：BTC 牛市启动 + DeFi summer 即将开始 + alt-L1 narrative 顶峰
Monad：alt-L1 narrative 低位 + SOL 已抽干长尾

\textbf{宏观窗口比 Solana 差}。Monad 估值修复完全靠自身基本面。

---

**13/30** 🟠 关键风险点：**2026-11 首次大规模 unlock**

- 当前流通仅 11.82%
- Team + investor 解锁开始
- 预计 +15-20% 流通

如果届时还没 native killer app，token 会进入承压通道。

---

**14/30** 🔴 \textbf{维度 4：操作历史层}

历史 halt 对照：

| L1 | 上线 | 重大 halt | Status |
|---|---|---|---|
| Solana | 2020 | **多次（30+ 小时）** | 复活到 \$4.93b |
| Aptos | 2022 | 0 | 边缘化 \$196m |
| HyperLiquid | 2023 | **0** | \$1.66b |
| **Monad** | **2025-11** | **0** | \$369m |

---

**15/30** 🔴 反直觉：Solana 的 halt 历史没阻止其复活。

为什么？**应用层粘性 > operational perfectionism**。

但这只适用于已经有 ecosystem moat 的 L1。Monad 早期一次重大 halt 可能直接团灭 narrative。

---

**16/30** 🔴 Monad mainnet 7 个月真实记录：

✅ 0 重大 consensus halt
✅ 1.4 亿+ tx 无重大故障
✅ EVM 兼容 100% 兑现
⚠️ **2026-05 Upbit node sync error** → 暂停 MON deposit
⚠️ 未经过真正高负载压力测试

---

**17/30** 🔴 Bugfinder AI（2026-05-28 上线）：

Monad Foundation 推出**链层主动安全工具**。

其他 L1 把安全责任完全推给 dApp。Monad \textbf{主动承担生态层安全} = alt-L1 首例。

但上线仅一周，未被验证。需要 12-18 个月观察。

---

**18/30** 🟢 \textbf{维度 5：团队执行层}

| 项目 | 团队背景 |
|---|---|
| Aptos | ex-Meta/Diem，研究背景 |
| Sui | ex-Meta/Diem，PL 设计 |
| HyperLiquid | 匿名，prop trading |
| **Monad** | **Jump Trading HFT 量化** |

Monad 的 unique team asset = HFT 系统工程经验。

---

**19/30** 🟢 Keone Hon 简历：

- MIT BS Math/Physics
- Jump Trading 量化 8 年（quant + trading team lead）
- Jump Crypto
- 2022 创立 Monad Labs

James Hunsaker（CTO）：Jump 系统工程师
Eunice Giarta：MIT Media Lab + Shutterstock PM

团队规模：~80+ 人

---

**20/30** 🟢 VC matrix（\$244M 累计）：

- Seed 2023: \$19M（Dragonfly + 其他）
- **Series A 2024-04: \$225M**
- 领投：**Paradigm**
- 跟投：Electric Capital + Greenoaks

**2024 年最大加密 round**。Paradigm 在 alt-L1 投资命中率极高（Solana/Uniswap/Optimism）。

---

**21/30** 🟢 生态执行节奏（mainnet 7 个月）：

- 2026-05-28 Open Transaction Layer（联合 24+ 公司）
- 2026-05 TownSquare USD1 \$100M 流动性
- 2026-05 FalconX tokenized credit
- 2026-05-28 Bugfinder AI
- Folks Finance、Kuru DEX 等 native dApp

**比 Aptos / Sui 早期快，比 HyperLiquid 慢**。

---

**22/30** **五维综合评分**（权重：性能 20% / 应用 30% / 宏观 15% / 操作 15% / 团队 20%）：

| 维度 | Monad | Solana | Aptos | HL |
|---|---|---|---|---|
| 性能 | **9** | 8 | 7 | 8 |
| 应用层 | **4** | **9** | **2** | **10** |
| 宏观 | 6 | 8 | 4 | 7 |
| 操作 | 6 | 8 | 7 | 9 |
| 团队 | **9** | 8 | 6 | 9 |
| **综合** | **6.6** | **7.8** | **4.6** | **8.6** |

---

**23/30** Monad 6.6："双 9 双中位 + 一短板"

✅ 性能 9 + 团队 9 = 同代 L1 最强组合
✅ 宏观 6 + 操作 6 = mainnet 早期标准
❌ **应用层捕获 4** = 决定 thesis 的关键短板

Monad 7 月时优于 Solana 7 月时（综合 ~6.0）。但 Solana 之后有 ecosystem 爆发。

---

**24/30** Aptos 4.6 是 Monad 必须避免的路径：

❌ 应用层捕获 **2** = 3.5 年无 native killer app
❌ Token 从 ATH **-95.93%**
❌ Move 语言成 dev 障碍

操作历史 7 救不了应用层 2 分。

**核心教训：技术 + 团队 + 操作完美都不够，应用层是 L1 唯一最终标尺。**

---

**25/30** HyperLiquid 8.6 是 vertical 替代路径的完整证明：

✅ 应用层 **10**：perp DEX = chain（70-80% 市场份额）
✅ 操作 9 + 团队 9

**Killer app 不是涌现，是 founded along with the chain**。

Monad 押通用 L1 = 期待 killer app 自然涌现 = 高难度赌注。

---

**26/30** **Alpha 在哪？** 不在 MON token。

FDV \$3.15b + FDV/TVL 8.5× = 已部分定价"Solana 路径成功 + Aptos 失败 等概率交叉"。

期望年化 ~7-10%，勉强 beat T-bill。

**真正的 alpha 在 native dApp equity**。

---

**27/30** Monad-native 早期 dApp（最高 EV）：

- **Kuru DEX**（hybrid orderbook + AMM，可能成为 Monad-native DEX anchor）
- **Folks Finance**（\$10m+ TVL，lending early leader）
- Foundation grant 跟踪的其他 native 项目

类似 2020-2021 投早期 Solana 生态（10-100× 回报）。

---

**28/30** 投资逻辑：

押 Monad 走 Solana 路径 = 押 Monad-native dApp 增长。

**不需要押 MON token 价值捕获**（FDV 已高）；直接投 dApp equity 拿应用层 perf fee。

这是 Aave thesis "投 curator equity 而非 token" 逻辑的 L1 版本。

---

**29/30** 我的实际动作（\$100m fund）：

- **Native dApp equity \$2-3m (2-3\%)** ← highest EV
- **MON token \$1-2m (1-2\%)** ← cheap optionality
- **桥接套利 \$0-2m (0-2\%)** ← 早期窗口
- **等 catalyst 后加配**

总 Monad 配置 **3-8%**。剩 92% → Solana / HyperLiquid / 其他。

---

**30/30** 真正的 thesis lesson：

每次范式跃迁，价值链都会重新分配一次。

不是问"哪个 L1 性能最高"，而是问"**赢家形成后，五维博弈的胜方在哪一层**"。

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
| 最佳发布时间 | 周二 / 周四 9-11am ET |
| 推荐 hashtag | #Monad #L1 #DeFi（不超 3 个）|
| 提及账号 | @monad\_xyz @keoneHD @paradigm @electriccapital |
| 中心机制 | 性能飞轮 ↔ 商品化 EVM 陷阱 + 三层情境 |

## 配图建议

| Tweet # | 内容 | 配图建议 |
| --- | --- | --- |
| 1 | Hook：7mo data + FDV/TVL ratio | 自绘 stats card |
| 4 | Top 15 dApp 全部多链部署 | DefiLlama Monad chain 截图 |
| 6 | 性能飞轮 ↔ 商品化陷阱 | 自绘 2 个对称环 |
| 10 | alt-L1 占 total 变化 | 自绘 2021-2026 时间序列 |
| 14 | L1 halt 历史对照 | 自绘 4×3 表 |
| 22 | 五维评分雷达图 | 自绘 5-axis radar |
| 26 | FDV/TVL 行业对照 | 自绘 bar chart |

## 引流策略

1. Tweet 1 配图 = 7mo 数据反差（视觉钩子）
2. 24h 后 quote 第 1 tweet 重发 5 维评分表（tweet 22）吸引第二波
3. 48h 后发"五维框架可推广到 8 个 L1 场景"follow-up thread
4. Substack 长文 + bio link 双重曝光
