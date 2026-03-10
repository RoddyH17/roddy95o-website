"use client";
import { Spotlight } from "@/components/ui/spotlight";
import { ParticlesBg } from "@/components/ui/particles-bg";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { CardSVG, spadePath, diamondPath } from "@/components/ui/card-svg";
import { demoComponents } from "@/components/ui/hero-demos";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { hero } from "@/data/content";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden"
    >
      {/* Grid background */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 select-none [background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)]"
        )}
      />
      <div className="pointer-events-none absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <ParticlesBg />
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="white" />
      <Spotlight className="top-10 left-full -translate-x-80" fill="rgba(180,120,40,0.15)" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4">
        {/* Top section: cards + name + tagline */}
        <div className="mb-12 text-center">
          <div className="mb-6 flex items-center justify-center gap-2">
            <motion.div
              initial={{ opacity: 0, rotate: -15, y: 20 }}
              animate={{ opacity: 1, rotate: -8, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ rotate: 0, y: -8, scale: 1.05 }}
              className="cursor-pointer"
            >
              <CardSVG rank="9" suitPath={spadePath} color="#e5e5e5" className="h-20 w-14 md:h-28 md:w-20" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, rotate: 15, y: 20 }}
              animate={{ opacity: 1, rotate: 8, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              whileHover={{ rotate: 0, y: -8, scale: 1.05 }}
              className="-ml-4 cursor-pointer"
            >
              <CardSVG rank="5" suitPath={diamondPath} color="#dc2626" className="h-20 w-14 md:h-28 md:w-20" />
            </motion.div>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-4xl font-bold text-transparent md:text-6xl"
          >
            {hero.name}
          </motion.h1>

          <TextGenerateEffect
            words={hero.tagline}
            className="mx-auto mt-4 max-w-2xl text-base md:text-lg"
            duration={0.4}
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-2"
          >
            {hero.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/[0.06] bg-zinc-950/50 px-3 py-1 text-xs text-neutral-500 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="mt-4 font-mono text-[11px] text-neutral-600"
          >
            {hero.currently}
          </motion.p>
        </div>

        {/* Demo panels */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="grid grid-cols-1 gap-4 md:grid-cols-3"
        >
          {hero.demos.map((demo, i) => {
            const DemoComponent = demoComponents[demo.type];
            return (
              <motion.div
                key={demo.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7 + i * 0.15, duration: 0.6 }}
                className="rounded-xl border border-white/[0.06] bg-black/60 p-4 backdrop-blur-md"
              >
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-xs font-medium text-neutral-400">{demo.title}</h3>
                  <div className="flex items-center gap-1">
                    <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
                    <span className="text-[9px] text-neutral-600">{demo.description}</span>
                  </div>
                </div>
                <DemoComponent />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="mt-12 flex justify-center"
        >
          <motion.div
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="h-8 w-px origin-top bg-gradient-to-b from-neutral-600 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
