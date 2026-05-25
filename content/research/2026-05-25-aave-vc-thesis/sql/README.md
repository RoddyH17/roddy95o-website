# SQL Artifacts — Aave VC Thesis (2026-05-25)

本研究使用的 Dune SQL 查询清单。所有 query 都是 Dune Wizards 维护的公开 query，
通过 `executeQueryById` 经 Dune MCP 调用，**不是新写的 SQL**。这样做的理由：

1. Wizards 维护的 query 已经 battle-tested（schema 准、口径稳）
2. 任何人可以独立 fork 复现
3. Dune 免费 tier 不允许通过 API 创建新 query（402 Payment Required），
   只能 execute 已存在的 saved query

## 本次研究执行的 Query

| Query ID | 作者 | 名称 | 回答的问题 |
|---:|---|---|---|
| [3913837](https://dune.com/queries/3913837) | hildobby | Lending TVL by Project | 验证 DefiLlama 的 Lending TVL 排名 — cross-source sanity check |
| [3431820](https://dune.com/queries/3431820) | Morpho (官方) | Morpho Blue liquidation history | Force 5 supplier power — bad debt 频次 |
| [6930431](https://dune.com/queries/6930431) | Morpho (官方) | Morpho Blue USD Avg Borrow Rate Monthly | Force 1 rivalry — Morpho 利率 vs Aave |
| [1897983](https://dune.com/queries/1897983) | harshtodi97 | AAVE morpho users | Force 1 rivalry — 共享用户 / 迁移路径 |

## 自定义 SQL 模板（未运行，作为 reference 保留）

`web3-vc` plugin 在 `connectors/dune/queries/lending/` 下有 5 个自定义模板。这些
模板**未在本次研究中运行**，因为：

- 免费 tier 不支持 API 创建新 query
- 这些模板需要先 fork 进 Dune workspace 才能 execute
- 当前用 Wizard 已发布的 query 覆盖率更高、风险更低

模板列表（如需要 customization 时手动 fork 到 Dune UI 跑）：
- `01-share-migration.sql` — wallet-level migration Aave → Morpho
- `02-deposit-concentration.sql` — top-N LP concentration
- `03-utilization-trend.sql` — cross-protocol utilization
- `04-liquidation-volume.sql` — bad debt + cascade history
- `05-unified-hhi.sql` — sector HHI using consistent metric

完整模板：https://github.com/RoddyH17/web3-vc/tree/main/plugins/web3-vc/connectors/dune/queries/lending

## 执行结果

每个 query 的执行结果（snapshot at 2026-05-25）见 `../data/dune-*.json`。

## 引擎工程审计要点

任何 Dune 数字必须经过以下 sanity check 后才能进 thesis：

1. **Cross-source comparison**: 同一指标的 Dune 数字 vs DefiLlama 数字差异 < 5%
   （超过则有口径差异，必须 reconcile）
2. **Time alignment**: window boundary（30d, 7d）和 timezone 一致
3. **Null handling**: Dune 返回 null 不等于 0，要明确标注
4. **Magnitude check**: USD 数字在 sane range 内（不是 NaN / overflow）

## 如何复现本研究

```python
# 1. 准备 Dune API key（free tier 即可）
export DUNE_API_KEY="..."

# 2. Clone web3-vc plugin
gh repo clone RoddyH17/web3-vc

# 3. 通过 MCP 执行
# 在 Claude Code 里安装 plugin: /plugin install web3-vc@web3-vc
# 然后: Use dune MCP to executeQueryById with query_id=3913837

# 4. 或者用直接 HTTP client（本研究的 fallback 路径，因为 MCP env-var 未通）
# 见仓库内 /tmp/dune_mcp_client.py 示例
```
