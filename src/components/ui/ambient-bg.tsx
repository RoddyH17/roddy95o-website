"use client";
import { motion, useScroll, useTransform } from "motion/react";

// Dalí-inspired dusk/dune palette — scroll-reactive
// Colors shift as you scroll: golden hour → twilight → deep night → dawn
export function AmbientBg() {
  const { scrollYProgress } = useScroll();

  // Background gradient shifts with scroll
  const bg1 = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [
      "radial-gradient(ellipse at 20% 20%, rgba(200,140,40,0.25) 0%, transparent 60%)",
      "radial-gradient(ellipse at 30% 30%, rgba(180,80,50,0.22) 0%, transparent 60%)",
      "radial-gradient(ellipse at 40% 50%, rgba(120,50,100,0.2) 0%, transparent 60%)",
      "radial-gradient(ellipse at 50% 60%, rgba(80,40,120,0.22) 0%, transparent 60%)",
      "radial-gradient(ellipse at 30% 80%, rgba(180,120,50,0.2) 0%, transparent 60%)",
    ]
  );

  const bg2 = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [
      "radial-gradient(ellipse at 75% 10%, rgba(180,60,50,0.18) 0%, transparent 55%)",
      "radial-gradient(ellipse at 80% 25%, rgba(200,150,50,0.16) 0%, transparent 55%)",
      "radial-gradient(ellipse at 70% 40%, rgba(160,60,80,0.18) 0%, transparent 55%)",
      "radial-gradient(ellipse at 65% 55%, rgba(100,60,140,0.2) 0%, transparent 55%)",
      "radial-gradient(ellipse at 70% 70%, rgba(160,100,40,0.18) 0%, transparent 55%)",
    ]
  );

  const bg3 = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [
      "radial-gradient(ellipse at 50% 60%, rgba(100,60,160,0.15) 0%, transparent 50%)",
      "radial-gradient(ellipse at 40% 70%, rgba(140,50,70,0.14) 0%, transparent 50%)",
      "radial-gradient(ellipse at 50% 80%, rgba(200,140,40,0.16) 0%, transparent 50%)",
      "radial-gradient(ellipse at 60% 85%, rgba(180,100,30,0.15) 0%, transparent 50%)",
      "radial-gradient(ellipse at 50% 90%, rgba(100,70,130,0.16) 0%, transparent 50%)",
    ]
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Layer 1: Primary warm glow */}
      <motion.div
        className="absolute inset-0"
        style={{ background: bg1, filter: "blur(100px)" }}
      />
      {/* Layer 2: Secondary accent */}
      <motion.div
        className="absolute inset-0"
        style={{ background: bg2, filter: "blur(120px)" }}
      />
      {/* Layer 3: Deep accent */}
      <motion.div
        className="absolute inset-0"
        style={{ background: bg3, filter: "blur(90px)" }}
      />

      {/* Floating orbs for extra dynamism */}
      {[
        { color: "rgba(210,150,50,0.12)", size: 500, x: "15%", y: "15%", dur: 20 },
        { color: "rgba(150,50,80,0.1)", size: 400, x: "80%", y: "30%", dur: 25 },
        { color: "rgba(90,60,140,0.11)", size: 450, x: "60%", y: "70%", dur: 22 },
        { color: "rgba(200,120,40,0.09)", size: 500, x: "25%", y: "85%", dur: 28 },
      ].map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 65%)`,
            filter: "blur(80px)",
          }}
          animate={{
            x: [0, 50, -30, 20, 0],
            y: [0, -30, 25, -15, 0],
            scale: [1, 1.2, 0.9, 1.1, 1],
          }}
          transition={{ duration: orb.dur, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
