# Aave Case Media Kit

DeFi 借贷范式跃迁 thesis 的传播包。基于 [aave-vc-thesis.md](../aave-vc-thesis.md) 改写而成。

## 三件套

| 文件 | 用途 | 格式 |
| --- | --- | --- |
| `substack-article.md` / `.pdf` | Substack / 公众号 / Mirror 长文 | 约 6,500 字 / 20 分钟 |
| `twitter-thread.md` / `.pdf` | Twitter / X thread | 30 tweets |
| `aave-case-media-kit.pdf` | 合并版（Substack + Thread）| 一份 PDF |

## 核心论点（一句话）

> **DeFi 借贷是五维博弈：商业模式 × 价值分配 × 宏观环境 × 操作历史 × 团队执行。商业模式 2x2 只解释 40% 的协议命运，剩下 60% 在三层情境里。Alpha 不在协议层 token，在 curator 层 equity。**

## 五维框架

```
       ┌──── 第一层：宏观环境 ────┐
       │  Fed · ETF · 监管         │
       └────────────┬──────────────┘
                    ▼ 设定 yield floor
       ┌────────────────────────────┐
       │  商业模式核心：            │
       │  Take Rate ⇄ Holder Capture│
       └────────────┬───────────────┘
                    ▼ 被压力测试
       ┌──── 第二层：操作历史 ────┐
       │  坏账 · 黑客 · 安全机制   │
       └────────────┬──────────────┘
                    ▼ 被执行
       ┌──── 第三层：团队执行 ────┐
       │  创始人 · 治理速度 · 共建 │
       └─────────────────────────────┘
```

## 五维评分（2026-05）

| 协议 | 商业模式 | 价值分配 | 宏观敏感度 | 操作历史 | 团队执行 | **综合** |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Aave V3 | 8 | **3** | 7 | **10** | 7 | **7.0** |
| Morpho Blue | 9 | 2 | 5 | 6 | **10** | **6.4** |
| SparkLend | 6 | 8 | **9** | 8 | 7 | **7.6** |
| Compound V3 | 3 | 0 | 3 | 7 | 3 | **3.2** |

权重：商业模式 25% / 价值分配 20% / 宏观 15% / 操作历史 25% / 团队 15%

## 发布建议

| 平台 | 内容 | 时机 |
| --- | --- | --- |
| Twitter / X | `twitter-thread.md`（30 tweets）| 周二 / 周四 9-11am ET |
| Substack / Mirror | `substack-article.md` | 周末发，工作日推流 |
| 公众号 | `substack-article.md` 删节版（保留 6/7/8/9 章）| 工作日中午 |
| roddy95o.com | 全文 + PDF 下载链接 | 与 Twitter 同步 |

推荐标签：`#DeFi #Aave #Morpho`（不超 3 个）

提及账号：`@aave @MorphoLabs @gauntlet_xyz @SteakhouseFi @Re7Labs`

## 配图建议

| Tweet # | 内容 | 配图 |
| --- | --- | --- |
| 1 | Hook：TVL 比值反差 | `01-tvl-trajectory.png` |
| 7 | 商业模式双轴四象限 | 自绘 2×2 |
| 10 | yield spread 25mo 压缩 | 自绘时间序列 |
| 17 | Morpho 长尾分裂 | `07-liquidation-full-sample.png` |
| 23 | 五维评分雷达图 | 自绘 5-axis radar |
| 26 | Curator landscape | `06-curator-aum-landscape.png` |

图源：`/Users/roddy/2026_class_project/roddy95o-website/content/research/2026-05-25-aave-vc-thesis/charts/`

## 引流策略

1. **Tweet 1 配图** = TVL 比值时间序列（视觉钩子）
2. **24h 后** quote 第 1 tweet 重发 5 维评分表（tweet 23）吸引第二波
3. **48h 后** 发"五维框架可推广到 8 赛道"follow-up thread
4. **Substack 长文** 在 Tweet 30 + bio link 双重曝光

## 关键升级 vs 早期版本

| 维度 | 早期 | 当前 |
| --- | --- | --- |
| 分析框架 | 商业模式 2x2 单层 | **五维博弈**（2x2 + 三层情境）|
| 章节数 | 11 节 | 11 节（结构相同，深度大增）|
| 案例对照 | 三结局定性 | 三结局 × 五维评分 |
| 风险判断 | 抽水悖论 | **5 项硬约束 + 维度间二阶交互** |
| 通用模板 | 8 赛道（中心机制层）| 8 赛道（中心机制 + 三层情境）|

## 关联资源

- **正典 thesis**：`../aave-vc-thesis.md`（76 页）
- **复现数据**：DefiLlama API 2026-05-25 22:27 UTC + FRED + DefiLlama Hacks + 5 个待运行 Dune SQL queries

## 质量自审 checklist

- [x] TL;DR 在文末（反向回顾，不在开头）
- [x] Hook tweet 有反差感（18% → 53% + 3 个反直觉数据）
- [x] 五维框架贯穿全文（不是 bolt-on）
- [x] 三层情境每层独立成节（6/7/8）
- [x] 三结局对照完整（Aave / Compound / SparkLend）
- [x] 至少 1 个反直觉点（"Compound 归零但没飞轮"）
- [x] 至少 1 个具体 unit economics（Steakhouse \$13.9m/年）
- [x] 至少 1 个类比（百货/商场、Costco/Amazon dilemma）
- [x] 关键数据加粗 + 标年/月
- [x] 投资动作具体 \$ 数字
- [x] Falsifiable predictions 表（8 条 12-month 预测）
- [x] 个人立场披露（无 lending sector token / LP 持仓）
- [x] PDF 无 missing glyph warning
