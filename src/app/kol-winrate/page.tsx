import type { Metadata } from "next";
import Link from "next/link";
import data from "@/data/kol-winrate.json";

export const metadata: Metadata = {
  title: "KOL Winrate · Roddy Huang",
  description:
    "Crypto KOL prediction accuracy tracker — Snowflake-decoded timestamps × CoinGecko historical prices. Methodology-first leaderboard.",
};

type Verdict = "CORRECT" | "WRONG";

interface CallWindow {
  window: string;
  token: string;
  price_at_call: number;
  price_at_end: number;
  return_pct: number;
  verdict: Verdict;
  note: string;
}

interface Call {
  id: string;
  kol: string;
  date: string;
  datetime_utc: string;
  content: string;
  stance: string;
  tokens: string[];
  url: string;
  likes: number;
  retweets: number;
  windows: CallWindow[];
}

interface LeaderboardEntry {
  kol: string;
  handle: string;
  bio: string;
  calls_tracked: number;
  windows_evaluated: number;
  wins: number;
  losses: number;
  win_rate: number;
  avg_stance_adjusted_return: number;
  voice: string;
  specialty: string[];
}

const leaderboard = data.leaderboard as LeaderboardEntry[];
const calls = data.calls as Call[];
const insights = data.insights as { title: string; detail: string }[];
const limitations = data.limitations as string[];

function winRateColor(rate: number): string {
  if (rate >= 70) return "text-green-400";
  if (rate >= 40) return "text-yellow-400";
  return "text-red-400";
}

function verdictBadge(verdict: Verdict): string {
  return verdict === "CORRECT"
    ? "border border-green-500/40 bg-green-500/10 text-green-400"
    : "border border-red-500/40 bg-red-500/10 text-red-400";
}

function returnColor(ret: number): string {
  return ret > 0 ? "text-green-400" : ret < 0 ? "text-red-400" : "text-neutral-400";
}

export default function KOLWinratePage() {
  return (
    <main className="relative min-h-screen bg-zinc-950 px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <header className="mb-12">
          <Link
            href="/"
            className="mb-6 inline-block text-sm text-neutral-500 hover:text-neutral-300"
          >
            ← Roddy Huang
          </Link>
          <h1 className="text-4xl font-bold text-neutral-100 md:text-5xl">
            KOL Winrate
          </h1>
          <p className="mt-3 text-base text-neutral-400 md:text-lg">
            Crypto KOL 预测准确率追踪 · Snowflake-decoded 推文时间戳 × CoinGecko
            历史价格 × 立场修正方向准确率
          </p>
          <p className="mt-2 text-sm text-neutral-500">
            最后更新 {data.meta.generated} ·{" "}
            <span className="text-amber-400">v1 prototype</span> · {calls.length}{" "}
            calls × {leaderboard.length} KOL
          </p>
        </header>

        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-semibold text-neutral-200">
            Leaderboard
          </h2>
          <div className="overflow-x-auto rounded-xl border border-white/[0.06] bg-zinc-950/50">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/[0.06] bg-zinc-900/50 text-left text-xs uppercase tracking-wider text-neutral-500">
                  <th className="px-4 py-3">KOL</th>
                  <th className="px-4 py-3">Voice</th>
                  <th className="px-4 py-3 text-right">Calls</th>
                  <th className="px-4 py-3 text-right">Windows</th>
                  <th className="px-4 py-3 text-right">Wins</th>
                  <th className="px-4 py-3 text-right">Losses</th>
                  <th className="px-4 py-3 text-right">Win Rate</th>
                  <th className="px-4 py-3 text-right">Avg Stance-Adj Return</th>
                </tr>
              </thead>
              <tbody>
                {leaderboard.map((entry) => (
                  <tr
                    key={entry.kol}
                    className="border-b border-white/[0.04] last:border-0 hover:bg-white/[0.02]"
                  >
                    <td className="px-4 py-3">
                      <div className="font-semibold text-neutral-100">
                        {entry.kol}
                      </div>
                      <div className="text-xs text-neutral-500">{entry.bio}</div>
                    </td>
                    <td className="px-4 py-3 text-neutral-400">{entry.voice}</td>
                    <td className="px-4 py-3 text-right text-neutral-300">
                      {entry.calls_tracked}
                    </td>
                    <td className="px-4 py-3 text-right text-neutral-300">
                      {entry.windows_evaluated}
                    </td>
                    <td className="px-4 py-3 text-right text-green-400">
                      {entry.wins}
                    </td>
                    <td className="px-4 py-3 text-right text-red-400">
                      {entry.losses}
                    </td>
                    <td
                      className={`px-4 py-3 text-right font-bold ${winRateColor(
                        entry.win_rate,
                      )}`}
                    >
                      {entry.win_rate}%
                    </td>
                    <td
                      className={`px-4 py-3 text-right font-mono ${returnColor(
                        entry.avg_stance_adjusted_return,
                      )}`}
                    >
                      {entry.avg_stance_adjusted_return > 0 ? "+" : ""}
                      {entry.avg_stance_adjusted_return.toFixed(1)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-semibold text-neutral-200">
            Tracked Calls
          </h2>
          <div className="space-y-4">
            {calls.map((call) => (
              <article
                key={call.id}
                className="rounded-xl border border-white/[0.06] bg-zinc-950/50 p-5"
              >
                <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-neutral-100">
                        {call.kol}
                      </span>
                      <span
                        className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
                          call.stance.startsWith("BULLISH")
                            ? "border border-green-500/30 bg-green-500/10 text-green-400"
                            : "border border-red-500/30 bg-red-500/10 text-red-400"
                        }`}
                      >
                        {call.stance}
                      </span>
                      <span className="text-xs text-neutral-500">
                        {call.date} ({call.datetime_utc.split("T")[1].split(":").slice(0, 2).join(":")} UTC)
                      </span>
                    </div>
                    <div className="mt-1 text-xs text-neutral-500">
                      {call.likes.toLocaleString()} likes ·{" "}
                      {call.retweets.toLocaleString()} RT ·{" "}
                      <a
                        href={call.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300"
                      >
                        original
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {call.tokens.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs font-mono text-neutral-300"
                      >
                        ${t}
                      </span>
                    ))}
                  </div>
                </div>

                <blockquote className="mb-4 border-l-2 border-neutral-700 pl-3 text-sm text-neutral-300">
                  {call.content}
                </blockquote>

                <div className="grid gap-2 sm:grid-cols-2">
                  {call.windows.map((w, i) => (
                    <div
                      key={i}
                      className="rounded-lg border border-white/[0.06] bg-zinc-900/30 p-3"
                    >
                      <div className="mb-1 flex items-center justify-between">
                        <span className="text-xs font-mono uppercase tracking-wider text-neutral-500">
                          {w.window} · {w.token}
                        </span>
                        <span
                          className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${verdictBadge(
                            w.verdict,
                          )}`}
                        >
                          {w.verdict}
                        </span>
                      </div>
                      <div className="font-mono text-sm text-neutral-300">
                        ${w.price_at_call.toFixed(4)} → ${w.price_at_end.toFixed(4)}{" "}
                        <span className={returnColor(w.return_pct)}>
                          ({w.return_pct > 0 ? "+" : ""}
                          {w.return_pct.toFixed(1)}%)
                        </span>
                      </div>
                      <div className="mt-1 text-xs text-neutral-500">{w.note}</div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-semibold text-neutral-200">
            Key Insights
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {insights.map((insight, i) => (
              <div
                key={i}
                className="rounded-xl border border-purple-500/20 bg-purple-500/[0.03] p-5"
              >
                <h3 className="mb-2 font-semibold text-neutral-100">
                  {insight.title}
                </h3>
                <p className="text-sm text-neutral-400">{insight.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-semibold text-neutral-200">
            Methodology
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-zinc-950/50 p-5">
            <p className="mb-3 text-sm text-neutral-400">{data.meta.methodology}</p>
            <ul className="ml-5 list-disc text-sm text-neutral-400">
              <li>
                <strong className="text-neutral-200">
                  Snowflake ID 解码
                </strong>
                ：Twitter status URL 包含 64-bit ID，前 41 bit 编码 epoch time。
                <code className="ml-1 rounded bg-zinc-900 px-1 py-0.5 font-mono text-xs">
                  ts_ms = (id &gt;&gt; 22) + 1288834974657
                </code>
              </li>
              <li className="mt-1">
                <strong className="text-neutral-200">Windows</strong>：
                {data.meta.windows.join(" / ")}（部分新近 calls 仅有早期窗口）
              </li>
              <li className="mt-1">
                <strong className="text-neutral-200">Stance 修正</strong>：
                bullish call + 价涨 = correct； bearish call + 价跌 = correct。
                Structural critique 仍按主方向判定但弱化权重。
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-semibold text-neutral-200">
            Limitations
          </h2>
          <ul className="space-y-2 rounded-xl border border-amber-500/20 bg-amber-500/[0.03] p-5">
            {limitations.map((l, i) => (
              <li
                key={i}
                className="flex gap-2 text-sm text-neutral-400"
              >
                <span className="text-amber-500">⚠</span>
                <span>{l}</span>
              </li>
            ))}
          </ul>
        </section>

        <footer className="mt-16 border-t border-white/[0.06] pt-6 text-center text-sm text-neutral-500">
          <p>
            v1 prototype · 6 calls × 4 KOL · powered by x-mcp + CoinGecko
          </p>
          <p className="mt-2">
            Methodology:{" "}
            <Link
              href="/"
              className="text-blue-400 hover:text-blue-300"
            >
              x-scan workflow
            </Link>{" "}
            · Roddy Huang ·{" "}
            <a
              href="https://github.com/RoddyH17"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >
              github
            </a>
          </p>
        </footer>
      </div>
    </main>
  );
}
