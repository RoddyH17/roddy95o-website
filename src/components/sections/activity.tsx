"use client";
import { motion } from "motion/react";
import { useMemo } from "react";
import { SectionReveal } from "@/components/ui/section-reveal";
import githubData from "@/data/github-activity.json";
import heatmapData from "@/data/heatmap-data.json";

interface GitHubFeedItem {
  date: string;
  type: string;
  repo: string;
  title: string;
  description: string;
  url: string;
}

interface GitHubActivity {
  generated: string;
  user: string;
  totalEvents: number;
  repos: string[];
  feed: GitHubFeedItem[];
}

const activity = githubData as GitHubActivity;

const typeIcons: Record<string, string> = {
  push: "🔨",
  "create-repo": "📦",
  "create-branch": "🌿",
  "pr-opened": "🔀",
  "pr-merged": "🟣",
  "pr-closed": "❌",
  issue: "🐛",
  release: "🚀",
  fork: "🍴",
  star: "⭐",
};

const typeColors: Record<string, string> = {
  push: "bg-green-500/60",
  "create-repo": "bg-blue-500/60",
  "create-branch": "bg-emerald-500/40",
  "pr-opened": "bg-blue-400/60",
  "pr-merged": "bg-purple-500/60",
  "pr-closed": "bg-red-500/40",
  issue: "bg-yellow-500/50",
  release: "bg-orange-500/60",
  fork: "bg-cyan-500/40",
  star: "bg-yellow-400/50",
};

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const hours = Math.floor(diff / (1000 * 60 * 60));
  if (hours < 1) return "just now";
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days === 1) return "yesterday";
  if (days < 7) return `${days}d ago`;
  const weeks = Math.floor(days / 7);
  return `${weeks}w ago`;
}

function Heatmap() {
  const weeks = useMemo(() => {
    if (!heatmapData?.weeks) return [];
    return (heatmapData.weeks as { date: string; level: number }[][]).map((week) =>
      week.map((day) => day.level)
    );
  }, []);

  const levelColors = [
    "bg-zinc-900",
    "bg-green-900/40",
    "bg-green-700/50",
    "bg-green-500/60",
    "bg-green-400/70",
  ];

  return (
    <div className="flex gap-[3px]">
      {weeks.map((week, wi) => (
        <div key={wi} className="flex flex-col gap-[3px]">
          {week.map((level, di) => (
            <motion.div
              key={`${wi}-${di}`}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: wi * 0.03 + di * 0.01, duration: 0.3 }}
              className={`h-[11px] w-[11px] rounded-[2px] ${levelColors[level]} transition-colors hover:ring-1 hover:ring-white/20`}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export function Activity() {
  return (
    <section id="activity" className="relative px-4 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionReveal className="mb-12">
          <div className="flex items-center gap-3">
            <h2 className="text-3xl font-bold text-neutral-200 md:text-4xl">
              Activity
            </h2>
            <span className="rounded-full border border-green-500/30 bg-green-500/10 px-2.5 py-0.5 text-xs font-medium text-green-400">
              {timeAgo(activity.generated)}
            </span>
          </div>
          <p className="mt-2 text-neutral-500">
            Live from GitHub — synced every 3 days.{" "}
            <a
              href={`https://github.com/${activity.user}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 underline decoration-neutral-700 hover:text-neutral-300"
            >
              @{activity.user}
            </a>
          </p>
        </SectionReveal>

        {/* Heatmap */}
        <SectionReveal delay={0.1} className="mb-12">
          <div className="overflow-x-auto rounded-xl border border-white/[0.06] bg-zinc-950/50 p-6">
            <div className="mb-3 flex items-center justify-between">
              <span className="font-mono text-xs text-neutral-500">
                {activity.repos.length} repos · {activity.totalEvents} events
              </span>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] text-neutral-600">Less</span>
                {[0, 1, 2, 3, 4].map((l) => (
                  <div
                    key={l}
                    className={`h-[10px] w-[10px] rounded-[2px] ${
                      ["bg-zinc-900", "bg-green-900/40", "bg-green-700/50", "bg-green-500/60", "bg-green-400/70"][l]
                    }`}
                  />
                ))}
                <span className="text-[10px] text-neutral-600">More</span>
              </div>
            </div>
            <Heatmap />
          </div>
        </SectionReveal>

        {/* Activity feed */}
        <div className="relative">
          <div className="absolute left-[7px] top-0 h-full w-px bg-gradient-to-b from-green-500/30 via-zinc-800 to-transparent" />

          <div className="space-y-6">
            {activity.feed.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.04, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="flex gap-4"
              >
                <div className="relative mt-1.5 flex-shrink-0">
                  <div className="h-[15px] w-[15px] rounded-full border-2 border-zinc-800 bg-zinc-950">
                    <div className={`m-auto mt-[2.5px] h-[6px] w-[6px] rounded-full ${typeColors[item.type] || "bg-green-500/60"}`} />
                  </div>
                </div>

                <div className="flex-1 pb-2">
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-[10px] text-neutral-600">{item.date}</span>
                    <span className="text-xs">{typeIcons[item.type] || "📌"}</span>
                    <span className="rounded-full bg-zinc-800/60 px-1.5 py-0.5 font-mono text-[9px] text-neutral-500">
                      {item.repo}
                    </span>
                  </div>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-0.5 block text-sm font-medium text-neutral-200 hover:text-neutral-100"
                  >
                    {item.title}
                  </a>
                  {item.description && (
                    <p className="mt-1 text-xs leading-relaxed text-neutral-500">
                      {item.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
