"use client";
import { cn } from "@/lib/utils";
import { useMotionValue, motion, useMotionTemplate } from "motion/react";
import { useEffect } from "react";

export function Spotlight({
  className,
  fill = "white",
}: {
  className?: string;
  fill?: string;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className={cn(
        "pointer-events-none absolute z-0 h-[300px] w-[300px] rounded-full opacity-20 blur-[100px]",
        className
      )}
      style={{
        background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, ${fill}, transparent 80%)`,
      }}
    />
  );
}
