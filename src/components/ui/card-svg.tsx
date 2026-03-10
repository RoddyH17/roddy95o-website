import { cn } from "@/lib/utils";

export const spadePath =
  "M16 3C16 3 6 12 6 18c0 3.3 2.7 6 6 6 1.7 0 3.2-.7 4.3-1.8-.3 1.5-1.2 3-2.8 4.3h5c-1.6-1.3-2.5-2.8-2.8-4.3C16.8 23.3 18.3 24 20 24c3.3 0 6-2.7 6-6C26 12 16 3 16 3z";
export const diamondPath = "M16 2l6 14-6 14-6-14L16 2z";

export function CardSVG({ rank, suitPath, color, className }: { rank: string; suitPath: string; color: string; className?: string }) {
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
