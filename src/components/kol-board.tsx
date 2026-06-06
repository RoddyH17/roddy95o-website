"use client";

import { useMemo, useState } from "react";

export interface KOL {
  handle: string;
  display_name: string;
  bio: string;
  verified: boolean;
  language: string;
  followed: boolean;
  category: string;
  category_color: string;
  tags: string[];
  kol_index: number;
  winrate: number | null;
  winrate_sample: number;
  metrics: {
    engagement_avg: number;
    activity_score: number;
    conviction_score: number;
    tenure_years: number;
  };
  sentiment_score: number;
  sentiment_label: string;
  voice: string;
  recent_actions: string[];
}

type SortKey =
  | "kol_index"
  | "winrate"
  | "sentiment_score"
  | "activity_score"
  | "conviction_score"
  | "engagement_avg"
  | "tenure_years";

const SORT_OPTIONS: { key: SortKey; label: string }[] = [
  { key: "kol_index", label: "KOL Index" },
  { key: "winrate", label: "Win Rate" },
  { key: "sentiment_score", label: "Sentiment" },
  { key: "activity_score", label: "Activity" },
  { key: "conviction_score", label: "Conviction" },
  { key: "engagement_avg", label: "Engagement" },
  { key: "tenure_years", label: "Tenure" },
];

const TAG_GROUPS = [
  { label: "语言", tags: ["EN", "CN"] },
  {
    label: "角色",
    tags: ["trader", "fund", "VC", "analyst", "builder", "media", "news"],
  },
  {
    label: "赛道",
    tags: [
      "macro",
      "onchain",
      "DeFi",
      "contract",
      "AI-x-crypto",
      "BTC-maxi",
      "ETH-maxi",
      "airdrop",
      "stocks",
      "NFT",
    ],
  },
];

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

function winrateColor(wr: number | null): string {
  if (wr === null) return "text-neutral-600";
  if (wr >= 70) return "text-emerald-400";
  if (wr >= 50) return "text-green-400";
  if (wr >= 30) return "text-yellow-400";
  return "text-red-400";
}

function sentimentArrow(score: number): {
  icon: string;
  color: string;
  label: string;
} {
  if (score >= 0.5)
    return { icon: "▲▲", color: "text-emerald-400", label: "强 Bull" };
  if (score >= 0.1)
    return { icon: "▲", color: "text-green-400", label: "温和 Bull" };
  if (score >= -0.1) return { icon: "—", color: "text-neutral-400", label: "中性" };
  if (score >= -0.5)
    return { icon: "▼", color: "text-orange-400", label: "温和 Bear" };
  return { icon: "▼▼", color: "text-red-400", label: "强 Bear" };
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

interface KOLBoardProps {
  kols: KOL[];
  generatedDate: string;
}

export function KOLBoard({ kols, generatedDate }: KOLBoardProps) {
  const [search, setSearch] = useState("");
  const [activeTags, setActiveTags] = useState<Set<string>>(new Set());
  const [sortKey, setSortKey] = useState<SortKey>("kol_index");
  const [sortDesc, setSortDesc] = useState(true);
  const [expandedHandle, setExpandedHandle] = useState<string | null>(null);

  const toggleTag = (tag: string) => {
    setActiveTags((prev) => {
      const next = new Set(prev);
      if (next.has(tag)) next.delete(tag);
      else next.add(tag);
      return next;
    });
  };

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return kols.filter((k) => {
      if (q) {
        const hay = `${k.handle} ${k.display_name} ${k.bio}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      if (activeTags.size > 0) {
        for (const t of activeTags) {
          if (!k.tags.includes(t)) return false;
        }
      }
      return true;
    });
  }, [kols, search, activeTags]);

  const sorted = useMemo(() => {
    const arr = [...filtered];
    arr.sort((a, b) => {
      const getVal = (k: KOL): number | null => {
        if (sortKey === "kol_index") return k.kol_index;
        if (sortKey === "winrate") return k.winrate;
        if (sortKey === "sentiment_score") return k.sentiment_score;
        if (sortKey === "activity_score") return k.metrics.activity_score;
        if (sortKey === "conviction_score") return k.metrics.conviction_score;
        if (sortKey === "engagement_avg") return k.metrics.engagement_avg;
        if (sortKey === "tenure_years") return k.metrics.tenure_years;
        return 0;
      };
      const va = getVal(a);
      const vb = getVal(b);
      if (va === null && vb === null) return 0;
      if (va === null) return 1;
      if (vb === null) return -1;
      return sortDesc ? vb - va : va - vb;
    });
    return arr;
  }, [filtered, sortKey, sortDesc]);

  const followedCount = kols.filter((k) => k.followed).length;
  const cnCount = kols.filter((k) => k.language === "CN").length;
  const withWinrate = kols.filter((k) => k.winrate !== null).length;

  return (
    <>
      <div className="mb-4 flex flex-wrap items-center gap-3 rounded-xl border border-white/[0.06] bg-zinc-950/50 p-3 text-xs text-neutral-400">
        <span>
          <span className="text-neutral-200">{kols.length}</span> tracked
        </span>
        <span className="text-neutral-700">·</span>
        <span>
          <span className="text-neutral-200">{followedCount}</span> followed
        </span>
        <span className="text-neutral-700">·</span>
        <span>
          <span className="text-neutral-200">{cnCount}</span> CN /{" "}
          <span className="text-neutral-200">{kols.length - cnCount}</span> EN
        </span>
        <span className="text-neutral-700">·</span>
        <span>
          <span className="text-neutral-200">{withWinrate}</span> with win rate
        </span>
        <span className="text-neutral-700">·</span>
        <span>Updated {generatedDate}</span>
      </div>

      <div className="mb-4 rounded-xl border border-white/[0.06] bg-zinc-950/50 p-4">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search handle / name / bio..."
            className="flex-1 min-w-[200px] rounded-md border border-white/10 bg-zinc-900 px-3 py-1.5 text-sm text-neutral-200 placeholder:text-neutral-600 focus:border-blue-500/50 focus:outline-none"
          />
          <div className="flex items-center gap-2 text-xs">
            <span className="text-neutral-500">Sort:</span>
            <select
              value={sortKey}
              onChange={(e) => setSortKey(e.target.value as SortKey)}
              className="rounded-md border border-white/10 bg-zinc-900 px-2 py-1 text-neutral-200 focus:outline-none"
            >
              {SORT_OPTIONS.map((o) => (
                <option key={o.key} value={o.key}>
                  {o.label}
                </option>
              ))}
            </select>
            <button
              type="button"
              onClick={() => setSortDesc((d) => !d)}
              className="rounded-md border border-white/10 bg-zinc-900 px-2 py-1 text-neutral-200 hover:bg-zinc-800"
            >
              {sortDesc ? "↓ desc" : "↑ asc"}
            </button>
          </div>
        </div>

        <div className="space-y-2">
          {TAG_GROUPS.map((group) => (
            <div key={group.label} className="flex flex-wrap items-center gap-1.5">
              <span className="mr-1 w-10 text-[10px] uppercase tracking-wider text-neutral-600">
                {group.label}
              </span>
              {group.tags.map((tag) => {
                const active = activeTags.has(tag);
                return (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => toggleTag(tag)}
                    className={`rounded-full border px-2 py-0.5 text-[11px] transition ${
                      active
                        ? "border-blue-500/40 bg-blue-500/20 text-blue-200"
                        : "border-white/10 bg-zinc-900 text-neutral-400 hover:border-white/20 hover:text-neutral-200"
                    }`}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>
          ))}
          {activeTags.size > 0 && (
            <button
              type="button"
              onClick={() => setActiveTags(new Set())}
              className="mt-1 text-xs text-neutral-500 hover:text-neutral-300"
            >
              clear filters ({activeTags.size})
            </button>
          )}
        </div>
      </div>

      <div className="mb-2 flex items-center justify-between text-xs text-neutral-500">
        <span>
          Showing{" "}
          <span className="text-neutral-200">{sorted.length}</span> of{" "}
          {kols.length}
        </span>
        <span>Click row to expand · click name to open X profile</span>
      </div>

      <section className="space-y-2">
        {sorted.map((k, rank) => {
          const sent = sentimentArrow(k.sentiment_score);
          const initials = getInitials(k.display_name);
          const isExpanded = expandedHandle === k.handle;
          return (
            <article
              key={k.handle}
              className={`rounded-xl border bg-zinc-950/60 transition ${
                isExpanded
                  ? "border-white/[0.18]"
                  : "border-white/[0.06] hover:border-white/[0.12]"
              }`}
            >
              <div
                role="button"
                tabIndex={0}
                onClick={() =>
                  setExpandedHandle(isExpanded ? null : k.handle)
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setExpandedHandle(isExpanded ? null : k.handle);
                  }
                }}
                className="grid cursor-pointer grid-cols-12 items-center gap-3 p-3 md:p-4"
              >
                <div className="col-span-1 flex items-center gap-2 md:col-span-1">
                  <span className="hidden font-mono text-xs text-neutral-600 md:inline">
                    {String(rank + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="col-span-7 flex min-w-0 items-center gap-2 md:col-span-5">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 text-xs font-bold text-neutral-200">
                    {initials}
                  </div>
                  <div className="min-w-0 flex-1">
                    <a
                      href={`https://x.com/${k.handle}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex flex-wrap items-center gap-1.5 font-semibold text-neutral-100 hover:text-blue-400"
                    >
                      <span className="truncate">{k.display_name}</span>
                      {k.verified && (
                        <span className="text-xs text-blue-400">✓</span>
                      )}
                      {k.followed && (
                        <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-1.5 py-0.5 text-[9px] text-emerald-400">
                          following
                        </span>
                      )}
                    </a>
                    <div className="text-xs text-neutral-500">@{k.handle}</div>
                    <div className="mt-0.5 flex flex-wrap items-center gap-1">
                      <span
                        className={`rounded-full border px-1.5 py-0.5 text-[9px] font-medium ${categoryBadge(
                          k.category_color,
                        )}`}
                      >
                        {k.category}
                      </span>
                      <span
                        className={`rounded-full border px-1.5 py-0.5 text-[9px] font-mono ${
                          k.language === "CN"
                            ? "border-red-500/30 bg-red-500/10 text-red-300"
                            : "border-sky-500/30 bg-sky-500/10 text-sky-300"
                        }`}
                      >
                        {k.language}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-span-2 md:col-span-2">
                  <div className="text-[9px] uppercase tracking-wider text-neutral-600">
                    Index
                  </div>
                  <div
                    className={`font-mono text-xl font-bold ${indexColor(
                      k.kol_index,
                    )}`}
                  >
                    {k.kol_index}
                  </div>
                </div>

                <div className="col-span-2 md:col-span-2">
                  <div className="text-[9px] uppercase tracking-wider text-neutral-600">
                    Win Rate
                  </div>
                  <div className={`font-mono text-lg font-bold ${winrateColor(k.winrate)}`}>
                    {k.winrate !== null ? `${k.winrate}%` : "N/A"}
                  </div>
                  <div className="text-[9px] text-neutral-600">
                    {k.winrate_sample > 0 ? `n=${k.winrate_sample}` : "—"}
                  </div>
                </div>

                <div className="hidden md:col-span-2 md:block">
                  <div className="text-[9px] uppercase tracking-wider text-neutral-600">
                    Sentiment
                  </div>
                  <div className={`font-semibold ${sent.color}`}>
                    {sent.icon} {sent.label}
                  </div>
                  <div className="text-[9px] text-neutral-500 line-clamp-1">
                    {k.sentiment_label}
                  </div>
                </div>
              </div>

              {isExpanded && (
                <div className="border-t border-white/[0.06] px-4 pb-4 pt-3 text-xs text-neutral-400">
                  <div className="mb-3 text-neutral-500">{k.bio}</div>
                  <div className="mb-3 grid grid-cols-2 gap-2 md:grid-cols-4">
                    <div>
                      <span className="text-[10px] uppercase text-neutral-600">
                        Engagement avg
                      </span>
                      <div className="font-mono text-neutral-200">
                        {k.metrics.engagement_avg.toLocaleString()}
                      </div>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase text-neutral-600">
                        Activity
                      </span>
                      <div className="font-mono text-neutral-200">
                        {k.metrics.activity_score}/10
                      </div>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase text-neutral-600">
                        Conviction
                      </span>
                      <div className="font-mono text-neutral-200">
                        {k.metrics.conviction_score}/10
                      </div>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase text-neutral-600">
                        Tenure
                      </span>
                      <div className="font-mono text-neutral-200">
                        {k.metrics.tenure_years}y
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <span className="text-[10px] uppercase text-neutral-600">
                      Voice
                    </span>
                    <div className="text-neutral-300">{k.voice}</div>
                  </div>
                  <div className="mb-3">
                    <span className="text-[10px] uppercase text-neutral-600">
                      Recent Actions
                    </span>
                    <ul className="mt-1 space-y-0.5 text-neutral-300">
                      {k.recent_actions.map((a, i) => (
                        <li key={i}>· {a}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {k.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded bg-white/5 px-1.5 py-0.5 text-[10px] text-neutral-400"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </article>
          );
        })}
        {sorted.length === 0 && (
          <div className="rounded-xl border border-dashed border-white/10 p-8 text-center text-sm text-neutral-500">
            No KOL matches the filters. Clear filters to see all.
          </div>
        )}
      </section>
    </>
  );
}
