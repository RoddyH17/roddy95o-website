# Reproducibility Scripts — Aave VC Thesis v3

执行顺序（每个 script 独立可跑）：

| # | Script | 作用 | 输出 |
| --- | --- | --- | --- |
| 01 | `01-fetch-defillama-tvl.py` | 从 DefiLlama 拉 4 个协议的月度 TVL 时间序列 | `/tmp/dl_<slug>_tvl.json` × 4 |
| 02 | `02-make-charts.py` | 生成 4 张设计图表 (matplotlib) | `../charts/01-04.png` |
| 03 | `03-compute-metrics.py` | 计算关键指标（YoY、ratio、CAGR、volatility）| stdout |
| 04 | `04-morpho-tvl-reconcile.py` | 对账 Morpho TVL 多个 DefiLlama slug | stdout |

## 依赖

```bash
pip install matplotlib numpy
# 系统需要：xelatex (TeX Live), pandoc
```

## Dune 部分（不在这些 script 里，因为是 plugin MCP 调用）

参考 `../sql/README.md`。

简版：用 `/tmp/dune_mcp_client.py`（自定义 HTTP MCP client）+ REST fallback `GET /api/v1/query/{id}/results`。

## 重要的方法学说明

### 1. 为什么用 DefiLlama 历史 TVL 而非 Dune

Dune 上有大量 "Lending TVL" query，但：
- 多数是 hildobby 的 query 3913837 — 当前 schema drift，failed
- 自己写 query 在 free tier 受限（402 Payment Required for createDuneQuery）

DefiLlama `/protocol/<slug>` 提供完整每日 TVL 时间序列，免费且 stable。**适合这类时间序列分析**。

### 2. Morpho/Aave ratio 的"分母效应"

Naive 看：Morpho/Aave 从 14.5%（2024-12）涨到 55.2%（2026-05）= 18 个月 5x。

但拆解：
- Morpho 涨幅：$2.85b → $7.53b = +2.6x
- Aave 跌幅：$19.72b → $13.64b = -31%

Morpho 涨 2.6x → ratio 涨约 2.6x（如果 Aave 不变）；Aave 跌 31% → ratio 再涨约 1.45x。
合计 ≈ 5x。

但 Aave 跌 31% 主要是 2026 Q1 加密回调（不是 Morpho 抢的，是 ETH 价格跌的）。**剥离市场效应**，看 stable 期 (2024-12 → 2026-03)：
- 14.5% → 29.2% = +2x in 16 months
- 这才是 Morpho 真实"抢份额"速率

### 3. Mean reversion 假设

Morpho 25-month CAGR 是 +730%。这不能外推：
- 任何快速 ramp 都会 saturate（市场容量物理上限）
- TVL volatility σ ≈ 60% 年化 — 单点波动巨大
- v3 base case 假设 Morpho YoY 从 108% mean-revert 到 30-40%

### 4. Sensitivity matrix vs point estimate

v2 给出 Gordon model 单点 estimate（"P/S 15x → implied g = X%"）。v3 给出 5×5 matrix（5 P/S 档 × 5 margin 档），让读者能看到自己关心 scenario 的隐含 g。

这是 VC research 的标准做法 — 不给单一数字，给 sensitivity 让 LP 自己挑视角。
