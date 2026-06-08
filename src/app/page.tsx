import data from "@/data/kol-tracking.json";
import { KOLBoard, type KOL } from "@/components/kol-board";
import { ScrollingAvatars } from "@/components/scrolling-avatars";
import { Methodology } from "@/components/methodology";

const kols = data.kols as KOL[];
const winrateCovered = kols.filter((k) => k.winrate !== null).length;

// Pre-sort avatars by KOL Index desc so marquee leads with most influential
const avatarKols = [...kols]
  .sort((a, b) => b.kol_index - a.kol_index)
  .map((k) => ({
    handle: `@${k.handle}`,
    display_name: k.display_name,
    profile_url: `https://x.com/${k.handle}`,
    category: k.category,
    verified: k.verified,
  }));

export default function Home() {
  return (
    <main className="relative min-h-screen bg-zinc-950 px-4 py-10 md:py-16">
      <div className="mx-auto max-w-7xl">
        <header className="mb-4">
          <h1 className="text-4xl font-bold text-neutral-100 md:text-5xl">
            KOL Tracking
          </h1>
          <p className="mt-3 text-sm text-neutral-400 md:text-base">
            综合市场影响力 crypto trader / analyst 的{" "}
            <span className="text-neutral-200">
              KOL Index · Win Rate · Sentiment · Style
            </span>
            。<strong>共 {kols.length} 位 KOL</strong>，可点击跳 X 主页 · tag
            过滤 · 列排序。
          </p>
        </header>

        <ScrollingAvatars kols={avatarKols} />

        <KOLBoard kols={kols} generatedDate={data.meta.generated} />

        <Methodology kolCount={kols.length} winrateCovered={winrateCovered} />

        <footer className="mt-8 border-t border-white/[0.06] pt-6 text-center text-xs text-neutral-500">
          <p>
            v3 prototype · {kols.length} KOL · 最后更新 {data.meta.generated} ·
            powered by x-mcp + CoinGecko ·{" "}
            <a
              href="https://github.com/RoddyH17"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >
              github
            </a>
          </p>
        </footer>
      </div>
    </main>
  );
}
