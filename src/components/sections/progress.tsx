"use client";
import { motion } from "motion/react";
import { weeklyProgress } from "@/data/content";

const statusColors: Record<string, string> = {
  building: "border-yellow-500/30 bg-yellow-500/10 text-yellow-400",
  live: "border-green-500/30 bg-green-500/10 text-green-400",
  planned: "border-neutral-500/30 bg-neutral-500/10 text-neutral-400",
};

const tagColors: Record<string, string> = {
  crypto: "bg-red-500/20 text-red-400",
  trading: "bg-red-500/20 text-red-400",
  ml: "bg-violet-500/20 text-violet-400",
  hft: "bg-pink-500/20 text-pink-400",
  macro: "bg-yellow-500/20 text-yellow-400",
  quant: "bg-green-500/20 text-green-400",
  poker: "bg-blue-500/20 text-blue-400",
  infra: "bg-amber-500/20 text-amber-400",
};

function ProgressBar({ percent, color = "bg-green-500" }: { percent: number; color?: string }) {
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-800">
      <motion.div
        className={`h-full rounded-full ${color}`}
        initial={{ width: 0 }}
        whileInView={{ width: `${percent}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </div>
  );
}

export function Progress() {
  const { currentTask } = weeklyProgress;
  const doneCount = currentTask.subtasks.filter((s) => s.done).length;

  return (
    <section id="progress" className="relative px-4 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-neutral-200 md:text-4xl">
            {weeklyProgress.heading}
          </h2>
          <p className="mt-2 text-neutral-500">{weeklyProgress.subtitle}</p>
        </motion.div>

        {/* Current Focus Task */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 rounded-xl border border-green-500/20 bg-zinc-950/50 p-6"
        >
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-200">{currentTask.title}</h3>
              <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-[10px] font-medium text-amber-400">
                {currentTask.type}
              </span>
            </div>
            <span className="font-mono text-sm text-neutral-400">{currentTask.completedPercent}%</span>
          </div>

          <ProgressBar percent={currentTask.completedPercent} />

          <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {currentTask.subtasks.map((sub, i) => (
              <motion.div
                key={sub.label}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.05 }}
                className="flex items-center gap-2 text-sm"
              >
                <div
                  className={`flex h-4 w-4 items-center justify-center rounded border ${
                    sub.done
                      ? "border-green-500/40 bg-green-500/20"
                      : "border-zinc-700 bg-zinc-900"
                  }`}
                >
                  {sub.done && (
                    <svg className="h-3 w-3 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <span className={sub.done ? "text-neutral-500 line-through" : "text-neutral-300"}>
                  {sub.label}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="mt-4 flex items-center gap-2 text-xs text-neutral-600">
            <span>Started {currentTask.startedAt}</span>
            <span>·</span>
            <span>{doneCount}/{currentTask.subtasks.length} subtasks</span>
            <span>·</span>
            <span>~{currentTask.estimatedDays}d sprint</span>
          </div>
        </motion.div>

        {/* Project Progress Cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {weeklyProgress.projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
              className="rounded-xl border border-white/[0.06] bg-zinc-950/50 p-5"
            >
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-semibold text-neutral-200">{project.title}</h4>
                  <span
                    className={`rounded-full border px-2 py-0.5 text-[10px] font-medium ${
                      statusColors[project.status] || statusColors.planned
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <span className="font-mono text-xs text-neutral-500">{project.progress}%</span>
              </div>

              <ProgressBar
                percent={project.progress}
                color={
                  project.status === "building"
                    ? "bg-yellow-500/80"
                    : project.status === "planned"
                    ? "bg-neutral-600"
                    : "bg-green-500"
                }
              />

              <p className="mt-3 text-xs leading-relaxed text-neutral-500">{project.preview}</p>

              <div className="mt-3 flex gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
                      tagColors[tag] || "bg-zinc-800 text-neutral-500"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
