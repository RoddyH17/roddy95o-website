"use client";
import { cn } from "@/lib/utils";
import { hero } from "@/data/content";
import type { BankrollCategory } from "@/types/content";

function formatMoney(n: number) {
  return n >= 1000 ? `$${(n / 1000).toFixed(n % 1000 === 0 ? 0 : 1)}k` : `$${n}`;
}

function CategoryCard({ cat }: { cat: BankrollCategory }) {
  const subtotal = cat.accounts.reduce((s, a) => s + a.amount, 0);
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="text-sm">{cat.icon}</span>
          <span className="text-xs font-medium text-neutral-300">{cat.name}</span>
        </div>
        <span className="font-mono text-sm font-bold text-neutral-200">{formatMoney(subtotal)}</span>
      </div>

      {/* Stacked bar */}
      <div className="flex h-2 w-full overflow-hidden rounded-full bg-zinc-800/60">
        {cat.accounts.map((a) => (
          <div
            key={a.label}
            className={cn("h-full transition-all", a.color)}
            style={{ width: `${(a.amount / subtotal) * 100}%` }}
          />
        ))}
      </div>

      {/* Account breakdown */}
      <div className="space-y-1">
        {cat.accounts.map((a) => (
          <div key={a.label} className="flex items-center justify-between text-[10px]">
            <div className="flex items-center gap-1.5">
              <span className={cn("inline-block h-1.5 w-1.5 rounded-full", a.color)} />
              <span className="text-neutral-500">{a.label}</span>
              {a.detail && <span className="text-neutral-700">· {a.detail}</span>}
            </div>
            <span className="font-mono text-neutral-400">{formatMoney(a.amount)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function BankrollTracker() {
  const { bankroll } = hero;
  return (
    <div className="rounded-xl border border-white/[0.06] bg-black/60 p-5 backdrop-blur-md">
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h3 className="text-xs font-medium text-neutral-500">Bankroll Challenge</h3>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="font-mono text-2xl font-bold text-neutral-100">
              {formatMoney(bankroll.total)}
            </span>
            <div className="flex items-center gap-1">
              <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
              <span className="text-[9px] text-neutral-600">Live tracking</span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="font-mono text-[10px] text-neutral-600">PnL Tracker</div>
          <div className="font-mono text-xs text-green-400/80">Active</div>
        </div>
      </div>

      {/* Category grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {bankroll.categories.map((cat) => (
          <div
            key={cat.name}
            className="rounded-lg border border-white/[0.04] bg-zinc-950/40 p-3"
          >
            <CategoryCard cat={cat} />
          </div>
        ))}
      </div>

      {/* Allocation bar across all categories */}
      <div className="mt-4 flex h-1.5 w-full overflow-hidden rounded-full bg-zinc-800/40">
        {bankroll.categories.map((cat) => {
          return cat.accounts.map((a) => (
            <div
              key={`${cat.name}-${a.label}`}
              className={cn("h-full", a.color)}
              style={{ width: `${(a.amount / bankroll.total) * 100}%`, opacity: 0.7 }}
            />
          ));
        })}
      </div>
      <div className="mt-2 flex justify-between text-[9px] text-neutral-700">
        {bankroll.categories.map((cat) => {
          const subtotal = cat.accounts.reduce((s, a) => s + a.amount, 0);
          const pct = ((subtotal / bankroll.total) * 100).toFixed(0);
          return (
            <span key={cat.name}>
              {cat.name} {pct}%
            </span>
          );
        })}
      </div>
    </div>
  );
}
