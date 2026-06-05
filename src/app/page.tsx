import data from "@/data/kol-tracking.json";

interface KOLMetrics {
  engagement_avg: number;
  activity_score: number;
  conviction_score: number;
  tenure_years: number;
}

interface KOL {
  handle: string;
  display_name: string;
  bio: string;
  verified: boolean;
  language: string;
  followed: boolean;
  category: string;
  category_color: string;
  kol_index: number;
  metrics: KOLMetrics;
  sentiment_score: number;
  sentiment_label: string;
  voice: string;
  style_tags: string[];
  recent_actions: string[];
}

const kols = data.kols as KOL[];

// Color map for category badges (must be in JIT-safe literal form for Tailwind)
const categoryColors: Record<string, string> = {
  purple: "border-purple-500/30 bg-purple-500/10 text-purple-300",
  blue: "border-blue-500/30 bg-blue-500/10 text-blue-300",
  indigo: "border-indigo-500/30 bg-indigo-500/10 text-indigo-300",
  cyan: "border-cyan-500/30 bg-cyan-500/10 text-cyan-300",
  rose: "border-rose-500/30 bg-rose-500/10 text-rose-300",
  emerald: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
  amber: "border-amber-500/30 bg-amber-500/10 text-amber-300",
  teal: "border-teal-500/30 bg-teal-500/10 text-teal-300",
  orange: "border-orange-500/30 bg-orange-500/10 text-orange-300",
  violet: "border-violet-500/30 bg-violet-500/10 text-violet-300",
  fuchsia: "border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-300",
  lime: "border-lime-500/30 bg-lime-500/10 text-lime-300",
  pink: "border-pink-500/30 bg-pink-500/10 text-pink-300",
  red: "border-red-500/30 bg-red-500/10 text-red-300",
};

function categoryBadge(color: string): string {
  return (
    categoryColors[color] ||
    "border-neutral-500/30 bg-neutral-500/10 text-neutral-300"
  );
}

function indexColor(idx: number): string {
  if (idx >= 85) return "text-emerald-400";
  if (idx >= 75) return "text-green-400";
  if (idx >= 65) return "text-yellow-400";
  if (idx >= 55) return "text-orange-400";
  return "text-red-400";
}

function sentimentArrow(score: number): { icon: string; color: string; label: string } {
  if (score >= 0.5) return { icon: "▲▲", color: "text-emerald-400", label: "强 Bull" };
  if (score >= 0.1) return { icon: "▲", color: "text-green-400", label: "温和 Bull" };
  if (score >= -0.1) return { icon: "—", color: "text-neutral-400", label: "中性" };
  if (score >= -0.5) return { icon: "▼", color: "text-orange-400", label: "温和 Bear" };
  return { icon: "▼▼", color: "text-red-400", label: "强 Bear" };
}

function languageBadge(lang: string): string {
  return lang === "CN"
    ? "border-red-500/30 bg-red-500/10 text-red-300"
    : "border-sky-500/30 bg-sky-500/10 text-sky-300";
}

function getInitials(displayName: string): string {
  const parts = displayName
    .replace(/[^一-龥a-zA-Z\s]/g, "")
    .trim()
    .split(/\s+/);
  if (parts.length === 0 || !parts[0]) return "?";
  if (parts[0].match(/[一-龥]/)) return parts[0].slice(0, 1);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

// Sort by KOL Index descending
const sortedKols = [...kols].sort((a, b) => b.kol_index - a.kol_index);
const followedCount = kols.filter((k) => k.followed).length;
const avgIndex = Math.round(
  kols.reduce((sum, k) => sum + k.kol_index, 0) / kols.length,
);

export default function Home() {
  return (
    <main className="relative min-h-screen bg-zinc-950 px-4 py-12 md:py-20">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 md:mb-14">
          <h1 className="text-4xl font-bold text-neutral-100 md:text-6xl">
            KOL Tracking
          </h1>
          <p className="mt-3 text-base text-neutral-400 md:text-lg">
            综合市场影响力 crypto trader / analyst 的{" "}
            <span className="text-neutral-200">actions · style · sentiment</span>
            。每位 KOL 都可以点击跳 X 主页。
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-neutral-500">
            <span>
              <span className="text-neutral-300">{kols.length}</span> KOL 跟踪
            </span>
            <span className="text-neutral-700">·</span>
            <span>
              <span className="text-neutral-300">{followedCount}</span> 已关注
            </span>
            <span className="text-neutral-700">·</span>
            <span>
              平均 KOL Index{" "}
              <span className="text-neutral-300">{avgIndex}</span>
            </span>
            <span className="text-neutral-700">·</span>
            <span>更新 {data.meta.generated}</span>
          </div>
        </header>

        <section className="space-y-3">
          {sortedKols.map((k, rank) => {
            const sent = sentimentArrow(k.sentiment_score);
            const initials = getInitials(k.display_name);
            return (
              <a
                key={k.handle}
                href={`https://x.com/${k.handle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl border border-white/[0.06] bg-zinc-950/60 p-4 transition hover:border-white/[0.15] hover:bg-zinc-900/60 md:p-5"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start">
                  <div className="flex items-start gap-3 md:w-72 md:flex-shrink-0">
                    <span className="flex h-7 w-6 flex-shrink-0 items-center justify-center text-xs font-mono text-neutral-500">
                      {String(rank + 1).padStart(2, "0")}
                    </span>
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 text-sm font-bold text-neutral-200">
                      {initials}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="truncate font-semibold text-neutral-100">
                          {k.display_name}
                        </span>
                        {k.verified && (
                          <span className="text-xs text-blue-400">✓</span>
                        )}
                        {k.followed && (
                          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-1.5 py-0.5 text-[10px] text-emerald-400">
                            following
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-neutral-500">@{k.handle}</div>
                      <div className="mt-1 line-clamp-1 text-xs text-neutral-500">
                        {k.bio}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-wrap items-start gap-3 md:gap-5">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-wider text-neutral-600">
                        KOL Index
                      </span>
                      <span
                        className={`font-mono text-2xl font-bold ${indexColor(
                          k.kol_index,
                        )}`}
                      >
                        {k.kol_index}
                      </span>
                    </div>

                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-wider text-neutral-600">
                        Sentiment
                      </span>
                      <span className={`font-bold ${sent.color}`}>
                        {sent.icon} {sent.label}
                      </span>
                      <span className="text-[10px] text-neutral-500">
                        {k.sentiment_label}
                      </span>
                    </div>

                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-wider text-neutral-600">
                        Style
                      </span>
                      <div className="flex items-center gap-1.5">
                        <span
                          className={`rounded-full border px-2 py-0.5 text-[10px] font-medium ${categoryBadge(
                            k.category_color,
                          )}`}
                        >
                          {k.category}
                        </span>
                        <span
                          className={`rounded-full border px-1.5 py-0.5 text-[10px] font-mono ${languageBadge(
                            k.language,
                          )}`}
                        >
                          {k.language}
                        </span>
                      </div>
                      <span className="mt-0.5 line-clamp-1 max-w-xs text-[10px] text-neutral-500">
                        {k.voice}
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col md:min-w-0">
                      <span className="text-[10px] uppercase tracking-wider text-neutral-600">
                        Recent Actions
                      </span>
                      <ul className="space-y-0.5 text-xs text-neutral-400">
                        {k.recent_actions.slice(0, 3).map((a, i) => (
                          <li key={i} className="line-clamp-1">
                            · {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-white/[0.04] pt-2 text-[10px] text-neutral-500">
                  <span>
                    Engagement:{" "}
                    <span className="text-neutral-300">
                      {k.metrics.engagement_avg.toLocaleString()}
                    </span>{" "}
                    avg
                  </span>
                  <span className="text-neutral-700">·</span>
                  <span>
                    Activity:{" "}
                    <span className="text-neutral-300">
                      {k.metrics.activity_score}/10
                    </span>
                  </span>
                  <span className="text-neutral-700">·</span>
                  <span>
                    Conviction:{" "}
                    <span className="text-neutral-300">
                      {k.metrics.conviction_score}/10
                    </span>
                  </span>
                  <span className="text-neutral-700">·</span>
                  <span>
                    Tenure:{" "}
                    <span className="text-neutral-300">
                      {k.metrics.tenure_years}y
                    </span>
                  </span>
                  <span className="text-neutral-700">·</span>
                  <span className="flex flex-wrap gap-1">
                    {k.style_tags.map((t) => (
                      <span
                        key={t}
                        className="rounded bg-white/5 px-1.5 py-0.5 text-[10px] text-neutral-400"
                      >
                        {t}
                      </span>
                    ))}
                  </span>
                </div>
              </a>
            );
          })}
        </section>

        <footer className="mt-12 border-t border-white/[0.06] pt-6 text-center text-xs text-neutral-500">
          <p>
            KOL Index = Influence(30%) + Activity(20%) + Conviction(20%) +
            Tenure(15%) + Specialty(15%)
          </p>
          <p className="mt-2">
            v2 prototype · {kols.length} KOL · powered by x-mcp ·{" "}
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
