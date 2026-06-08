"use client";

import { useMemo } from "react";

interface KOLLite {
  handle: string;
  display_name: string;
  profile_url: string;
  category: string;
  verified?: boolean;
}

interface ScrollingAvatarsProps {
  kols: KOLLite[];
}

// Deterministic gradient based on handle hash
function gradientFor(handle: string): string {
  let h = 0;
  for (let i = 0; i < handle.length; i++) {
    h = (h * 31 + handle.charCodeAt(i)) | 0;
  }
  const hue = Math.abs(h) % 360;
  const hue2 = (hue + 60) % 360;
  return `linear-gradient(135deg, hsl(${hue} 70% 35%) 0%, hsl(${hue2} 70% 25%) 100%)`;
}

function initials(displayName: string, handle: string): string {
  // Chinese: first character
  if (/[一-龥]/.test(displayName)) return displayName[0];
  const parts = displayName.split(/\s+/).filter(Boolean);
  if (parts.length === 0) return handle.slice(1, 3).toUpperCase();
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function AvatarRow({
  kols,
  direction,
}: {
  kols: KOLLite[];
  direction: "left" | "right";
}) {
  // Duplicate for seamless loop
  const doubled = useMemo(() => [...kols, ...kols], [kols]);
  const animClass =
    direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div className="relative overflow-hidden">
      <div className={`flex w-max gap-3 ${animClass}`}>
        {doubled.map((kol, i) => (
          <a
            key={`${kol.handle}-${i}`}
            href={kol.profile_url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex shrink-0 items-center gap-2 rounded-full border border-white/[0.06] bg-zinc-900/40 py-1.5 pl-1.5 pr-3 transition-all hover:border-blue-500/40 hover:bg-zinc-800/60"
            title={`${kol.display_name} (${kol.handle})`}
          >
            <span
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white shadow-sm"
              style={{ background: gradientFor(kol.handle) }}
            >
              {initials(kol.display_name, kol.handle)}
            </span>
            <span className="flex flex-col">
              <span className="max-w-[120px] truncate text-sm font-medium text-neutral-200 group-hover:text-white">
                {kol.display_name}
              </span>
              <span className="text-[10px] text-neutral-500 group-hover:text-blue-400">
                {kol.handle}
              </span>
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

export function ScrollingAvatars({ kols }: ScrollingAvatarsProps) {
  // Split into two roughly equal halves for two opposing rows
  const half = Math.ceil(kols.length / 2);
  const row1 = kols.slice(0, half);
  const row2 = kols.slice(half);

  return (
    <div className="relative -mx-4 mb-8 md:-mx-8">
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-zinc-950 to-transparent md:w-24" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-zinc-950 to-transparent md:w-24" />

      <div className="space-y-3 px-4 py-4 md:px-8">
        <AvatarRow kols={row1} direction="left" />
        <AvatarRow kols={row2} direction="right" />
      </div>

      <p className="px-4 pt-1 text-center text-[11px] text-neutral-600 md:px-8">
        Hover 暂停滚动 · 点击跳 X 主页 · 共 {kols.length} KOL
      </p>
    </div>
  );
}
