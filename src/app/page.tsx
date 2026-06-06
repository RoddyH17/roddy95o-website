import data from "@/data/kol-tracking.json";
import { KOLBoard, type KOL } from "@/components/kol-board";

const kols = data.kols as KOL[];

export default function Home() {
  return (
    <main className="relative min-h-screen bg-zinc-950 px-4 py-10 md:py-16">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-neutral-100 md:text-5xl">
            KOL Tracking
          </h1>
          <p className="mt-3 text-sm text-neutral-400 md:text-base">
            综合市场影响力 crypto trader / analyst 的{" "}
            <span className="text-neutral-200">
              KOL Index · Win Rate · Sentiment · Style
            </span>
            。每位 KOL 可点击跳 X 主页，可按 tag 过滤、按列排序。
          </p>
        </header>

        <KOLBoard kols={kols} generatedDate={data.meta.generated} />

        <footer className="mt-12 border-t border-white/[0.06] pt-6 text-center text-xs text-neutral-500">
          <p>
            KOL Index = Influence(30%) + Activity(20%) + Conviction(20%) +
            Tenure(15%) + Specialty(15%)
          </p>
          <p className="mt-2">
            Win Rate 仅对已经做过历史 calls 回测的 KOL 显示，其余 N/A（v4
            会扩充）
          </p>
          <p className="mt-2">
            v3 prototype · {kols.length} KOL · powered by x-mcp ·{" "}
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
