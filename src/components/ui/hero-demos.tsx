"use client";
import { cn } from "@/lib/utils";

/* ── Portfolio Allocation ── */
const allocations = [
  { name: "Crypto", weight: 35, color: "bg-amber-400" },
  { name: "Macro Equity", weight: 25, color: "bg-blue-400" },
  { name: "Options Vol", weight: 20, color: "bg-violet-400" },
  { name: "Cash / MM", weight: 20, color: "bg-neutral-500" },
];

export function PortfolioDemo() {
  return (
    <div className="space-y-3">
      {/* Horizontal stacked bar */}
      <div className="flex h-3 w-full overflow-hidden rounded-full">
        {allocations.map((a) => (
          <div key={a.name} className={cn("h-full", a.color)} style={{ width: `${a.weight}%` }} />
        ))}
      </div>
      {/* Legend */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
        {allocations.map((a) => (
          <div key={a.name} className="flex items-center justify-between text-[10px]">
            <div className="flex items-center gap-1.5">
              <span className={cn("inline-block h-2 w-2 rounded-sm", a.color)} />
              <span className="text-neutral-400">{a.name}</span>
            </div>
            <span className="font-mono text-neutral-300">{a.weight}%</span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between pt-1 text-[10px] text-neutral-600">
        <span>AUM: $50K (paper)</span>
        <span>Rebal: Weekly</span>
      </div>
    </div>
  );
}

/* ── Strategy Performance ── */
const strategies = [
  { name: "BTC Momentum", ret: "+12.4%", color: "text-green-400", bar: 62 },
  { name: "CAPE Regime", ret: "+5.1%", color: "text-green-400", bar: 25 },
  { name: "Vol Arb", ret: "-2.3%", color: "text-red-400", bar: 12 },
  { name: "Event Macro", ret: "+8.7%", color: "text-green-400", bar: 44 },
];

export function PerformanceDemo() {
  return (
    <div className="space-y-2">
      <div className="flex items-baseline justify-between">
        <span className="font-mono text-lg font-bold text-green-400">+6.2%</span>
        <span className="font-mono text-[10px] text-green-400/60">MTD Composite</span>
      </div>
      <div className="space-y-1.5">
        {strategies.map((s) => (
          <div key={s.name} className="flex items-center gap-2 text-[10px]">
            <span className="w-20 truncate text-neutral-500">{s.name}</span>
            <div className="h-1 flex-1 overflow-hidden rounded-full bg-zinc-800">
              <div
                className={cn("h-full rounded-full", s.ret.startsWith("+") ? "bg-green-500/70" : "bg-red-500/70")}
                style={{ width: `${s.bar}%` }}
              />
            </div>
            <span className={cn("w-12 text-right font-mono", s.color)}>{s.ret}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Risk Dashboard ── */
const metrics = [
  { label: "Sharpe", value: "1.42", good: true },
  { label: "Max DD", value: "-8.3%", good: false },
  { label: "Win Rate", value: "61%", good: true },
  { label: "Kelly f*", value: "0.18", good: true },
  { label: "VaR 95%", value: "-3.2%", good: false },
  { label: "Sortino", value: "1.87", good: true },
];

export function RiskDemo() {
  return (
    <div className="grid grid-cols-3 gap-2">
      {metrics.map((m) => (
        <div key={m.label} className="rounded-lg bg-zinc-900/60 p-2 text-center">
          <div className="text-[9px] text-neutral-600">{m.label}</div>
          <div className={cn("font-mono text-sm font-semibold", m.good ? "text-green-400" : "text-red-400")}>
            {m.value}
          </div>
        </div>
      ))}
    </div>
  );
}

export const demoComponents: Record<string, () => React.JSX.Element> = {
  portfolio: PortfolioDemo,
  performance: PerformanceDemo,
  risk: RiskDemo,
};
