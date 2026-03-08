"use client";
import { Spotlight } from "@/components/ui/spotlight";
import { ParticlesBg } from "@/components/ui/particles-bg";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { hero } from "@/data/content";

const spadePath =
  "M16 3C16 3 6 12 6 18c0 3.3 2.7 6 6 6 1.7 0 3.2-.7 4.3-1.8-.3 1.5-1.2 3-2.8 4.3h5c-1.6-1.3-2.5-2.8-2.8-4.3C16.8 23.3 18.3 24 20 24c3.3 0 6-2.7 6-6C26 12 16 3 16 3z";
const diamondPath = "M16 2l6 14-6 14-6-14L16 2z";

function CardSVG({ rank, suitPath, color, className }: { rank: string; suitPath: string; color: string; className?: string }) {
  return (
    <svg viewBox="0 0 120 168" className={cn("drop-shadow-2xl", className)}>
      <defs>
        <linearGradient id={`hc-${rank}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#0d0d0d" />
        </linearGradient>
      </defs>
      <rect width="120" height="168" rx="10" fill={`url(#hc-${rank})`} stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      <text x="12" y="30" fontFamily="var(--font-sans)" fontSize="20" fontWeight="700" fill={color}>{rank}</text>
      <svg x="10" y="34" width="18" height="18" viewBox="0 0 32 32"><path d={suitPath} fill={color} /></svg>
      <svg x="36" y="58" width="48" height="48" viewBox="0 0 32 32" opacity="0.5"><path d={suitPath} fill={color} /></svg>
      <g transform="rotate(180, 60, 84)">
        <text x="12" y="30" fontFamily="var(--font-sans)" fontSize="20" fontWeight="700" fill={color}>{rank}</text>
        <svg x="10" y="34" width="18" height="18" viewBox="0 0 32 32"><path d={suitPath} fill={color} /></svg>
      </g>
    </svg>
  );
}

// Simulated PnL sparkline
function PnlDemo() {
  const points = [0, 12, 8, 25, 18, 35, 28, 42, 38, 55, 48, 60, 52, 70, 65, 78];
  const max = Math.max(...points);
  const pathD = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${(i / (points.length - 1)) * 200} ${60 - (p / max) * 50}`)
    .join(" ");

  return (
    <div className="space-y-2">
      <div className="flex items-baseline justify-between">
        <span className="font-mono text-lg font-bold text-green-400">+$2,847</span>
        <span className="font-mono text-xs text-green-400/60">+18.3% MTD</span>
      </div>
      <svg viewBox="0 0 200 65" className="w-full">
        <defs>
          <linearGradient id="pnl-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(74,222,128,0.3)" />
            <stop offset="100%" stopColor="rgba(74,222,128,0)" />
          </linearGradient>
        </defs>
        <path d={pathD + " L 200 60 L 0 60 Z"} fill="url(#pnl-grad)" />
        <path d={pathD} fill="none" stroke="rgba(74,222,128,0.8)" strokeWidth="1.5" />
      </svg>
      <div className="flex justify-between font-mono text-[10px] text-neutral-600">
        <span>Mar 1</span>
        <span>Today</span>
      </div>
    </div>
  );
}

// Hand analysis demo
function HandDemo() {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <div className="flex gap-1">
          <div className="flex h-8 w-6 items-center justify-center rounded border border-white/10 bg-zinc-900 text-xs font-bold text-neutral-200">A</div>
          <div className="flex h-8 w-6 items-center justify-center rounded border border-white/10 bg-zinc-900 text-xs font-bold text-red-400">K</div>
        </div>
        <div className="flex-1">
          <div className="mb-1 flex justify-between text-[10px]">
            <span className="text-neutral-500">Equity</span>
            <span className="font-mono text-green-400">67.2%</span>
          </div>
          <div className="h-1.5 rounded-full bg-zinc-800">
            <div className="h-full w-[67%] rounded-full bg-gradient-to-r from-green-500/80 to-green-400/60" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 font-mono text-[10px]">
        <div className="rounded bg-zinc-900/50 p-1.5 text-center">
          <div className="text-neutral-600">Pot Odds</div>
          <div className="text-neutral-300">2.3:1</div>
        </div>
        <div className="rounded bg-zinc-900/50 p-1.5 text-center">
          <div className="text-neutral-600">EV</div>
          <div className="text-green-400">+$42</div>
        </div>
        <div className="rounded bg-zinc-900/50 p-1.5 text-center">
          <div className="text-neutral-600">Action</div>
          <div className="text-yellow-400">RAISE</div>
        </div>
      </div>
    </div>
  );
}

// Macro/geopolitical demo
function MacroDemo() {
  const positions = [
    { asset: "BTC", bias: "Long", signal: "strong", color: "text-green-400" },
    { asset: "Gold", bias: "Long", signal: "moderate", color: "text-green-400" },
    { asset: "EUR/USD", bias: "Short", signal: "weak", color: "text-red-400" },
  ];

  return (
    <div className="space-y-2">
      <div className="rounded bg-zinc-900/50 p-2">
        <div className="mb-1 text-[10px] text-amber-400/80">EVENT</div>
        <div className="text-xs text-neutral-300">Fed rate decision — hawkish hold expected</div>
      </div>
      <div className="space-y-1.5">
        {positions.map((p) => (
          <div key={p.asset} className="flex items-center justify-between font-mono text-xs">
            <span className="text-neutral-400">{p.asset}</span>
            <div className="flex items-center gap-2">
              <span className={p.color}>{p.bias}</span>
              <div className="flex gap-0.5">
                {[1, 2, 3].map((bar) => (
                  <div
                    key={bar}
                    className={cn(
                      "h-2 w-1 rounded-sm",
                      bar <= (p.signal === "strong" ? 3 : p.signal === "moderate" ? 2 : 1)
                        ? p.bias === "Long" ? "bg-green-400/70" : "bg-red-400/70"
                        : "bg-zinc-800"
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const demoComponents: Record<string, () => React.JSX.Element> = {
  pnl: PnlDemo,
  hand: HandDemo,
  macro: MacroDemo,
};

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
