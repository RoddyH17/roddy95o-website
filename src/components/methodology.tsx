interface MethodologyProps {
  kolCount: number;
  winrateCovered: number;
}

export function Methodology({ kolCount, winrateCovered }: MethodologyProps) {
  return (
    <section className="my-12">
      <h2 className="mb-6 text-2xl font-semibold text-neutral-100">
        Methodology · 怎么算的
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {/* KOL Index */}
        <div className="rounded-xl border border-purple-500/20 bg-purple-500/[0.03] p-5">
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded-md bg-purple-500/20 px-2 py-0.5 text-xs font-bold uppercase tracking-wider text-purple-300">
              KOL Index
            </span>
            <span className="text-xs text-neutral-500">0 – 100</span>
          </div>
          <p className="mb-3 text-sm text-neutral-300">
            综合影响力 + 活跃 + 信号清晰度的加权综合分。<strong>5 维加权</strong>：
          </p>
          <ul className="space-y-1.5 text-sm text-neutral-400">
            <li>
              <span className="font-mono text-purple-300">Influence 30%</span>
              <span className="ml-1 text-neutral-500">
                · 平均 engagement / 估计粉丝量级
              </span>
            </li>
            <li>
              <span className="font-mono text-purple-300">Activity 20%</span>
              <span className="ml-1 text-neutral-500">
                · 发推频率 0-10（每周几条算高）
              </span>
            </li>
            <li>
              <span className="font-mono text-purple-300">Conviction 20%</span>
              <span className="ml-1 text-neutral-500">
                · 具体 call vs 模糊评论 0-10
              </span>
            </li>
            <li>
              <span className="font-mono text-purple-300">Tenure 15%</span>
              <span className="ml-1 text-neutral-500">
                · 入行年数 + verified
              </span>
            </li>
            <li>
              <span className="font-mono text-purple-300">Specialty 15%</span>
              <span className="ml-1 text-neutral-500">
                · niche 深度（专家 vs 通才）
              </span>
            </li>
          </ul>
          <p className="mt-3 border-t border-purple-500/10 pt-3 text-[11px] text-neutral-500">
            <strong>当前</strong>：v3 是作者主观打分 + 公开 engagement 数据。
            <strong>v4</strong>：迁移到自动化抓取 follower count + 7d engagement
            加权回归。
          </p>
        </div>

        {/* Sentiment */}
        <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/[0.03] p-5">
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded-md bg-emerald-500/20 px-2 py-0.5 text-xs font-bold uppercase tracking-wider text-emerald-300">
              Sentiment
            </span>
            <span className="text-xs text-neutral-500">−1 ~ +1</span>
          </div>
          <p className="mb-3 text-sm text-neutral-300">
            最近 10-15 条推文的整体倾向，做仓位 / 评论 / cycle 表态的综合判断：
          </p>
          <div className="space-y-1.5 text-sm">
            <div className="flex items-center gap-2">
              <span className="font-mono text-emerald-400">▲▲</span>
              <span className="text-neutral-400">+0.5 – +1.0</span>
              <span className="text-neutral-500">强 Bull（明确 long call）</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-green-400">▲</span>
              <span className="text-neutral-400">+0.1 – +0.5</span>
              <span className="text-neutral-500">温和 Bull（偏多）</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-neutral-400">—</span>
              <span className="text-neutral-400">−0.1 – +0.1</span>
              <span className="text-neutral-500">中性 / 观望</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-orange-400">▼</span>
              <span className="text-neutral-400">−0.5 – −0.1</span>
              <span className="text-neutral-500">温和 Bear（偏空）</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-red-400">▼▼</span>
              <span className="text-neutral-400">−1.0 – −0.5</span>
              <span className="text-neutral-500">
                强 Bear（明确 short call）
              </span>
            </div>
          </div>
          <p className="mt-3 border-t border-emerald-500/10 pt-3 text-[11px] text-neutral-500">
            <strong>当前</strong>：作者按推文 keyword + 立场标注。
            <strong>v4</strong>：用 LLM 自动对 30 天滚动窗口推文做情感打分。
          </p>
        </div>

        {/* Win Rate */}
        <div className="rounded-xl border border-blue-500/20 bg-blue-500/[0.03] p-5">
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded-md bg-blue-500/20 px-2 py-0.5 text-xs font-bold uppercase tracking-wider text-blue-300">
              Win Rate
            </span>
            <span className="text-xs text-neutral-500">% of correct calls</span>
          </div>
          <p className="mb-3 text-sm text-neutral-300">
            <strong>方向准确率</strong>：对 KOL 公开做过的具体 call 做 backtest：
          </p>
          <ol className="ml-5 list-decimal space-y-1 text-sm text-neutral-400">
            <li>
              从 X status URL 解码时间戳
              <br />
              <code className="rounded bg-zinc-900 px-1 py-0.5 font-mono text-[10px]">
                ts = (id&gt;&gt;22) + 1288834974657
              </code>
            </li>
            <li>CoinGecko 拉历史 token 价格</li>
            <li>计算 7d / 30d / 90d 收益</li>
            <li>立场修正：bullish + 价涨 = 对，bearish + 价跌 = 对</li>
          </ol>
          <p className="mt-3 text-[11px] text-neutral-500">
            当前已 backtest{" "}
            <span className="font-mono text-blue-300">
              {winrateCovered} / {kolCount}
            </span>{" "}
            KOL，其他显示 <span className="font-mono">N/A</span>。
          </p>
          <p className="mt-3 border-t border-blue-500/10 pt-3 text-[11px] text-neutral-500">
            <strong>当前</strong>：手工抓取关键 call。<strong>v4</strong>
            ：自动按 cashtag 全量抓取 + 按周更新 winrate。
          </p>
        </div>
      </div>

      <details className="mt-6 rounded-xl border border-white/[0.06] bg-zinc-900/30 p-5">
        <summary className="cursor-pointer text-sm font-semibold text-neutral-200 hover:text-white">
          展开看 Tag 分类标准
        </summary>
        <div className="mt-4 grid gap-4 text-sm md:grid-cols-3">
          <div>
            <div className="mb-1 text-xs font-bold uppercase tracking-wider text-neutral-500">
              语言 (2)
            </div>
            <p className="text-neutral-400">
              <code className="text-blue-300">EN</code> ·{" "}
              <code className="text-blue-300">CN</code>{" "}
              <span className="text-neutral-500">
                （主推文语言，双语 KOL 取主流派）
              </span>
            </p>
          </div>
          <div>
            <div className="mb-1 text-xs font-bold uppercase tracking-wider text-neutral-500">
              角色 (7)
            </div>
            <p className="text-neutral-400">
              <code className="text-blue-300">trader</code>{" "}
              <code className="text-blue-300">fund</code>{" "}
              <code className="text-blue-300">VC</code>{" "}
              <code className="text-blue-300">analyst</code>{" "}
              <code className="text-blue-300">builder</code>{" "}
              <code className="text-blue-300">media</code>{" "}
              <code className="text-blue-300">news</code>
            </p>
          </div>
          <div>
            <div className="mb-1 text-xs font-bold uppercase tracking-wider text-neutral-500">
              赛道 (10)
            </div>
            <p className="text-neutral-400">
              <code className="text-blue-300">macro</code>{" "}
              <code className="text-blue-300">onchain</code>{" "}
              <code className="text-blue-300">DeFi</code>{" "}
              <code className="text-blue-300">contract</code>{" "}
              <code className="text-blue-300">AI-x-crypto</code>{" "}
              <code className="text-blue-300">BTC-maxi</code>{" "}
              <code className="text-blue-300">ETH-maxi</code>{" "}
              <code className="text-blue-300">airdrop</code>{" "}
              <code className="text-blue-300">stocks</code>{" "}
              <code className="text-blue-300">NFT</code>
            </p>
          </div>
        </div>
      </details>
    </section>
  );
}
