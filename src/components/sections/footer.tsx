import { footer } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.05] px-4 pb-24 pt-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 md:flex-row">
        <div className="font-mono text-sm text-neutral-500">
          <span className="text-neutral-300">9</span>
          <span className="text-red-500">&spades;</span>
          <span className="text-neutral-300">5</span>
          <span className="text-red-500">&diams;</span>
          <span className="ml-2">Roddy Huang &copy; {new Date().getFullYear()}</span>
        </div>
        <div className="font-mono text-xs text-neutral-600">
          {footer.tech}
        </div>
      </div>
    </footer>
  );
}
