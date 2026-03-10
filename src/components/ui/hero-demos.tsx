import { cn } from "@/lib/utils";

export function PnlDemo() {
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

export function HandDemo() {
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

export function MacroDemo() {
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

export const demoComponents: Record<string, () => React.JSX.Element> = {
  pnl: PnlDemo,
  hand: HandDemo,
  macro: MacroDemo,
};
