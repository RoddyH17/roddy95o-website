"use client";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { labSection } from "@/data/content";
import { CardContainer, CardBody, CardItem } from "@/components/ui/card-3d";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import { SectionReveal, StaggerContainer, StaggerItem } from "@/components/ui/section-reveal";
import type { LabProject, LabProjectStatus } from "@/types/content";

const statusConfig: Record<LabProjectStatus, { label: string; cls: string }> = {
  live: { label: "Live", cls: "border-green-500/30 bg-green-500/10 text-green-400" },
  building: { label: "Building", cls: "border-yellow-500/30 bg-yellow-500/10 text-yellow-400" },
  "coming-soon": {
    label: "Coming Soon",
    cls: "border-neutral-500/30 bg-neutral-500/10 text-neutral-400",
  },
};

const tagColors: Record<string, string> = {
  poker: "bg-blue-500/20 text-blue-400",
  crypto: "bg-red-500/20 text-red-400",
  trading: "bg-red-500/20 text-red-400",
  bot: "bg-cyan-500/20 text-cyan-400",
  tool: "bg-amber-500/20 text-amber-400",
  GTO: "bg-emerald-500/20 text-emerald-400",
  analytics: "bg-violet-500/20 text-violet-400",
  options: "bg-emerald-500/20 text-emerald-400",
  viz: "bg-purple-500/20 text-purple-400",
  macro: "bg-yellow-500/20 text-yellow-400",
  dashboard: "bg-orange-500/20 text-orange-400",
  math: "bg-green-500/20 text-green-400",
};

function LabCard({ project }: { project: LabProject }) {
  const [hovered, setHovered] = useState(false);
  const status = statusConfig[project.status];
  const isComingSoon = project.status === "coming-soon";

  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <CardContainer>
        <CardBody
          className={`relative w-full transition-colors ${isComingSoon ? "opacity-50" : ""}`}
        >
          <CardItem translateZ={20}>
            <div className="flex items-center gap-3">
              <span className="text-2xl">{project.icon}</span>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold text-neutral-200">{project.title}</h3>
                <span
                  className={`rounded-full border px-2 py-0.5 text-[10px] font-medium ${status.cls}`}
                >
                  {status.label}
                </span>
              </div>
            </div>
          </CardItem>

          <CardItem translateZ={10} className="mt-3">
            <p className="text-sm leading-relaxed text-neutral-400">{project.description}</p>
          </CardItem>

          <CardItem translateZ={15} className="mt-4">
            <div className="flex flex-wrap gap-1.5">
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
          </CardItem>

          {/* Hover preview footer */}
          <AnimatePresence>
            {hovered && !isComingSoon && (
              <CardItem translateZ={30}>
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="mt-4 flex items-center justify-between border-t border-white/[0.06] pt-4"
                >
                  <span className="text-xs text-neutral-500">{project.preview}</span>
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-600 transition hover:text-neutral-300"
                      >
                        <IconBrandGithub className="h-4 w-4" />
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-600 transition hover:text-neutral-300"
                      >
                        <IconExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </motion.div>
              </CardItem>
            )}
          </AnimatePresence>

          {/* Coming soon shimmer overlay */}
          {isComingSoon && (
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-xl">
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="rounded-full border border-white/[0.08] bg-black/70 px-3 py-1 font-mono text-[11px] text-neutral-500 backdrop-blur-sm"
              >
                Coming Soon
              </motion.span>
            </div>
          )}
        </CardBody>
      </CardContainer>
    </div>
  );
}

export function Lab() {
  return (
    <section id="lab" className="relative px-4 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionReveal className="mb-12">
          <h2 className="text-3xl font-bold text-neutral-200 md:text-4xl">
            {labSection.heading}
          </h2>
          <p className="mt-2 text-neutral-500">{labSection.subtitle}</p>
        </SectionReveal>

        <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-2" staggerDelay={0.1}>
          {labSection.projects.map((project) => (
            <StaggerItem key={project.title}>
              <LabCard project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
