"use client";
import { cn } from "@/lib/utils";

export function Ripple({
  numCircles = 8,
  className,
}: {
  numCircles?: number;
  className?: string;
}) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      {Array.from({ length: numCircles }, (_, i) => {
        const size = 120 + i * 100;
        const opacity = 0.12 - i * 0.012;
        const delay = i * 0.6;
        return (
          <div
            key={i}
            className="absolute left-1/2 top-1/2 animate-ripple rounded-full border border-red-500/20"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              marginLeft: `-${size / 2}px`,
              marginTop: `-${size / 2}px`,
              opacity: Math.max(opacity, 0.02),
              animationDelay: `${delay}s`,
              animationDuration: "5s",
            }}
          />
        );
      })}
    </div>
  );
}
