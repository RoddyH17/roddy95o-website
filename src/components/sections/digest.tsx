"use client";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { IconChevronDown } from "@tabler/icons-react";
import { SectionReveal, StaggerContainer, StaggerItem } from "@/components/ui/section-reveal";
import type { DigestData } from "@/types/content";
import rawDigest from "@/data/digest.json";

const digestData: DigestData | null = rawDigest ?? null;

const categoryConfig: Record<string, { icon: string; color: string; barColor: string }> = {
  finance: { icon: "💹", color: "text-green-400", barColor: "bg-green-500/60" },
  poker: { icon: "🃏", color: "text-blue-400", barColor: "bg-blue-500/60" },
  frontend: { icon: "🎨", color: "text-purple-400", barColor: "bg-purple-500/60" },
  devops: { icon: "⚙️", color: "text-amber-400", barColor: "bg-amber-500/60" },
  ml: { icon: "🧠", color: "text-violet-400", barColor: "bg-violet-500/60" },
  trading: { icon: "📊", color: "text-red-400", barColor: "bg-red-500/60" },
  macro: { icon: "🌐", color: "text-yellow-400", barColor: "bg-yellow-500/60" },
  default: { icon: "📄", color: "text-neutral-400", barColor: "bg-neutral-500/60" },
};

function getCategoryFromFile(file: string): string {
  for (const key of Object.keys(categoryConfig)) {
    if (key !== "default" && file.toLowerCase().startsWith(key)) return key;
  }
  // Try to infer from content
  if (file.includes("options") || file.includes("vol") || file.includes("straddle")) return "finance";
  if (file.includes("poker") || file.includes("gto") || file.includes("range")) return "poker";
  if (file.includes("react") || file.includes("css") || file.includes("ui")) return "frontend";
  if (file.includes("docker") || file.includes("ci") || file.includes("deploy")) return "devops";
  return "default";
}

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const hours = Math.floor(diff / (1000 * 60 * 60));
  if (hours < 1) return "just now";
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

// Group skills by category for expandable display
function groupSkillsByCategory(files: string[]) {
  const groups: Record<string, string[]> = {};
  for (const file of files) {
    const cat = getCategoryFromFile(file);
    if (!groups[cat]) groups[cat] = [];
    groups[cat].push(file);
  }
  return Object.entries(groups).map(([name, skills]) => ({
    name,
    config: categoryConfig[name] || categoryConfig.default,
    skills,
  }));
}

function SkillCategories({ files }: { files: string[] }) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const categories = groupSkillsByCategory(files);

  return (
    <div className="space-y-2">
      {categories.map((cat, i) => (
        <motion.div
          key={cat.name}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.05 }}
        >
          {/* Category header */}
          <button
            onClick={() => setExpanded(expanded === cat.name ? null : cat.name)}
            className="flex w-full items-center gap-2 rounded-lg bg-zinc-900/50 px-3 py-2 text-left transition hover:bg-zinc-900"
          >
            <span className="text-xs">{cat.config.icon}</span>
            <span className={`flex-1 text-xs font-medium capitalize ${cat.config.color}`}>
              {cat.name}
            </span>
            <span className="rounded-full bg-zinc-800 px-1.5 py-0.5 text-[9px] text-neutral-500">
              {cat.skills.length}
            </span>
            <motion.span
              animate={{ rotate: expanded === cat.name ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-neutral-600"
            >
              <IconChevronDown size={12} />
            </motion.span>
          </button>

          {/* Expandable skill list with animated bars */}
          <AnimatePresence>
            {expanded === cat.name && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="space-y-1.5 px-2 pt-2 pb-1">
                  {cat.skills.map((skill, j) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: j * 0.04, duration: 0.3 }}
                      className="flex items-center gap-2"
                    >
                      <span className="w-full truncate font-mono text-[10px] text-neutral-400">
                        {skill}
                      </span>
                      <div className="h-1 w-16 flex-shrink-0 overflow-hidden rounded-full bg-zinc-800">
                        <motion.div
                          className={`h-full rounded-full ${cat.config.barColor}`}
                          initial={{ width: 0 }}
                          animate={{ width: "75%" }}
                          transition={{ duration: 0.6, delay: 0.1 + j * 0.05, ease: "easeOut" }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}

export function Digest() {
  if (!digestData) return null;

  const { date, skills, commits, heatmap, highlights, generated } = digestData;

  return (
    <section id="digest" className="relative px-4 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionReveal className="mb-10">
          <div className="flex items-center gap-3">
            <h2 className="text-3xl font-bold text-neutral-200 md:text-4xl">
              Claude Digest
            </h2>
            <span className="rounded-full border border-green-500/30 bg-green-500/10 px-2.5 py-0.5 text-xs font-medium text-green-400">
              {timeAgo(generated)}
            </span>
          </div>
          <p className="mt-2 text-neutral-500">
            What I learned and built — auto-synced daily.
          </p>
        </SectionReveal>

        {/* Stats Bar */}
        <StaggerContainer className="mb-8 grid grid-cols-2 gap-3 md:grid-cols-4" staggerDelay={0.06}>
          {[
            { label: "Skills Updated", value: skills.modified, color: "text-violet-400", border: "border-violet-500/20" },
            { label: "Git Commits", value: commits.count, color: "text-green-400", border: "border-green-500/20" },
            { label: "Active Days", value: heatmap.activeDays, color: "text-yellow-400", border: "border-yellow-500/20" },
            { label: "Memory Files", value: heatmap.claudeFiles, color: "text-blue-400", border: "border-blue-500/20" },
          ].map((stat) => (
            <StaggerItem key={stat.label}>
              <div className={`rounded-xl border ${stat.border} bg-zinc-950/50 p-4 text-center`}>
                <motion.div
                  className={`text-2xl font-bold ${stat.color}`}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  {stat.value}
                </motion.div>
                <div className="mt-1 text-xs text-neutral-500">{stat.label}</div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Highlights */}
          <SectionReveal delay={0.1}>
            <div className="rounded-xl border border-white/[0.06] bg-zinc-950/50 p-5">
              <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-neutral-300">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded bg-amber-500/20 text-[10px]">
                  ⚡
                </span>
                Highlights
              </h3>
              <ul className="space-y-2.5">
                {highlights.map((h, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                    className="flex gap-2 text-xs leading-relaxed text-neutral-400"
                  >
                    <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-amber-500/60" />
                    {h}
                  </motion.li>
                ))}
              </ul>
            </div>
          </SectionReveal>

          {/* Skills - Expandable Categories */}
          <SectionReveal delay={0.15}>
            <div className="rounded-xl border border-white/[0.06] bg-zinc-950/50 p-5">
              <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-neutral-300">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded bg-violet-500/20 text-[10px]">
                  📚
                </span>
                Skills Learned
              </h3>
              <SkillCategories files={skills.files} />
            </div>
          </SectionReveal>

          {/* Recent Commits */}
          <SectionReveal delay={0.2} className="md:col-span-2">
            <div className="rounded-xl border border-white/[0.06] bg-zinc-950/50 p-5">
              <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-neutral-300">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded bg-green-500/20 text-[10px]">
                  🔨
                </span>
                Recent Commits
              </h3>
              <div className="space-y-1.5">
                {commits.recent.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.35 + i * 0.04 }}
                    className="flex items-center gap-2 text-xs"
                  >
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500/40" />
                    <span className="font-mono text-neutral-500">{msg}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-3 text-[10px] text-neutral-600">
                {date} · {commits.count} commits · auto-synced to{" "}
                <a
                  href="https://github.com/RoddyH17/roddy95o-website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-500 underline decoration-neutral-700 hover:text-neutral-400"
                >
                  GitHub
                </a>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
