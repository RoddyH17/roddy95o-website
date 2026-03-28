"use client";
import { motion } from "motion/react";
import { Ripple } from "@/components/ui/ripple";
import { SectionReveal, StaggerContainer, StaggerItem } from "@/components/ui/section-reveal";
import { pokerSection } from "@/data/content";

export function Poker() {
  return (
    <section id="poker" className="relative overflow-hidden px-4 py-24 md:py-32">
      <Ripple numCircles={8} />

      <div className="relative mx-auto max-w-5xl">
        <SectionReveal className="mb-12">
          <h2 className="text-3xl font-bold text-neutral-200 md:text-4xl">
            {pokerSection.heading}
          </h2>
          <p className="mt-2 text-neutral-500">{pokerSection.subtitle}</p>
        </SectionReveal>

        {pokerSection.projects.length > 0 ? (
          <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-2" staggerDelay={0.1}>
            {pokerSection.projects.map((project) => (
              <StaggerItem key={project.title}>
                <div className="group rounded-xl border border-white/[0.06] bg-zinc-950/50 p-6 transition-colors hover:border-white/[0.12] hover:bg-zinc-950/70">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold text-neutral-200">{project.title}</h3>
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
                        project.status === "live"
                          ? "border border-green-500/30 bg-green-500/10 text-green-400"
                          : project.status === "building"
                          ? "border border-yellow-500/30 bg-yellow-500/10 text-yellow-400"
                          : "border border-neutral-500/30 bg-neutral-500/10 text-neutral-400"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-neutral-400">{project.description}</p>

                  {/* Metrics row */}
                  {project.metrics && (
                    <div className="mt-3 flex gap-3">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="flex items-baseline gap-1">
                          <span className="font-mono text-sm font-bold text-neutral-200">{value}</span>
                          <span className="text-[10px] text-neutral-600">{key}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/[0.06] bg-zinc-900 px-2.5 py-0.5 text-xs text-neutral-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-600 transition-colors hover:text-neutral-300"
                      >
                        <span className="font-mono text-[10px]">GitHub →</span>
                      </a>
                    )}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex min-h-[200px] flex-col items-center justify-center rounded-xl border border-dashed border-white/[0.06] bg-zinc-950/30 p-12"
          >
            <div className="mb-4 text-4xl opacity-20">
              <span className="text-neutral-300">9</span>
              <span className="text-red-500">&spades;</span>
              <span className="text-neutral-300">5</span>
              <span className="text-red-500">&diams;</span>
            </div>
            <p className="font-mono text-sm text-neutral-600">Projects loading...</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
