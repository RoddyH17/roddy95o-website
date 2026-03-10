// ============================================
// 网站所有文案集中管理 — 直接在这里修改文字
// 改完保存即可，组件会自动引用
// ============================================

import type {
  HeroContent,
  PokerSectionContent,
  ActivityContent,
  WeeklyProgressContent,
  ContactContent,
  FooterContent,
} from "@/types/content";

// ---- Hero 区 ----
export const hero: HeroContent = {
  name: "Roddy Huang",
  tagline: "Finding alpha where others see noise.",
  tags: ["Math & ORIE", "AI Agent", "Macro Quant", "Poker", "Product", "Continental"],
  currently: "PM Sprint 1: Frameworks & PRD · Agentic Trading Infra · Macro Strategy Pipeline",
  // Demo 面板（Hero 区内嵌的实时演示窗口）
  demos: [
    {
      title: "Portfolio Allocation",
      description: "Live weights",
      type: "portfolio",
    },
    {
      title: "Strategy Performance",
      description: "MTD returns",
      type: "performance",
    },
    {
      title: "Risk Dashboard",
      description: "Real-time metrics",
      type: "risk",
    },
  ],
};

// ---- Poker 区（项目展示占位）----
export const pokerSection: PokerSectionContent = {
  heading: "Poker Lab",
  subtitle: "Projects shipping soon.",
  projects: [],
};

// ---- Activity 区（替代传统 Experience）----
export const activity: ActivityContent = {
  heading: "Activity",
  subtitle: "What I've been building.",
  // 最近活动流 — 按时间倒序，你可以随时添加新条目
  feed: [
    {
      date: "2026-03-10",
      title: "PM Skills Blueprint launched",
      description: "AI Agent × Quant × Crypto PM skill framework. Industry research across 3 domains, 4-sprint learning plan, Obsidian tracking system.",
      tags: ["career", "research"],
    },
    {
      date: "2026-03-10",
      title: "Industry cross-sector research",
      description: "Deep dive: AI Agent ($5.25B→$53B CAGR 46%), DeFi ($130B+ TVL), Crypto Quant (55% hedge funds in crypto). MCP+A2A protocol convergence.",
      tags: ["research", "macro"],
    },
    {
      date: "2026-03-10",
      title: "Math 4500 vision OCR pipeline",
      description: "Handwritten math notes → LaTeX via pix2text + Vision LLM. Multi-backend OCR with OpenCV preprocessing.",
      tags: ["ml", "tooling"],
    },
    {
      date: "2026-03-09",
      title: "Daily auto-deploy fixed",
      description: "Vercel webhook reconnected. Daily digest now deploys directly via Vercel CLI, bypassing webhook dependency.",
      tags: ["infra", "agent"],
    },
    {
      date: "2026-03-08",
      title: "Full CI/CD pipeline deployed",
      description: "GitHub Actions → Vercel auto-deploy. Obsidian + Claude memory heatmap sync. Notion MCP integration verified.",
      tags: ["infra", "agent"],
    },
    {
      date: "2026-03-08",
      title: "Skill library expansion",
      description: "Poker agent skills, advanced UI/UX patterns, CI/CD DevOps — all self-learned and saved to memory.",
      tags: ["agent", "tooling"],
    },
    {
      date: "2026-03-07",
      title: "Personal site v2 shipped",
      description: "Next.js 15 + Framer Motion + Lenis. Particle effects, 3D card animations, Dalí-inspired ambient background.",
      tags: ["web", "design"],
    },
    {
      date: "2026-03-07",
      title: "MCP server cluster configured",
      description: "9 local MCP servers: memory, filesystem, git, github, sequential-thinking, fetch, puppeteer, postgres, time.",
      tags: ["infra", "agent"],
    },
    {
      date: "2026-03-07",
      title: "Financial toolchain installed",
      description: "OpenBB, pmxt (prediction markets), hftbacktest. Numpy 2.x compatibility resolved.",
      tags: ["quant", "tooling"],
    },
    {
      date: "2026-03-06",
      title: "Crypto trading bot pipeline",
      description: "OKX WebSocket → Kafka → Freqtrade execution. Self-aggregated candles for perpetual contracts.",
      tags: ["crypto", "trading"],
    },
    {
      date: "2026-03-05",
      title: "ML-HFT feature engineering",
      description: "Orderbook microstructure features at millisecond granularity. XGBoost signal generation for BTC/ETH.",
      tags: ["ml", "hft"],
    },
    {
      date: "2026-03-04",
      title: "VAR-enhanced CAPE ratio",
      description: "Macro regime detection model. Cross-asset allocation signals using variance-adjusted cyclical P/E.",
      tags: ["macro", "research"],
    },
    {
      date: "2026-03-03",
      title: "IV surface analysis",
      description: "Implied vol surface construction. Skew dynamics, term structure, arbitrage identification.",
      tags: ["options", "research"],
    },
    {
      date: "2026-03-01",
      title: "Cornell Poker Club event",
      description: "Weekly tournament. 40+ players. Sponsored by Jane Street, SIG, Citadel.",
      tags: ["poker", "community"],
    },
  ],
};

// ---- Weekly Progress 区 ----
export const weeklyProgress: WeeklyProgressContent = {
  heading: "This Week",
  subtitle: "Current sprint & project progress.",
  // 当前正在进行的任务
  currentTask: {
    title: "PM Sprint 1: Frameworks & PRD Writing",
    type: "research",
    startedAt: "2026-03-10",
    estimatedDays: 14,
    completedPercent: 5,
    subtasks: [
      { label: "Read Inspired (Marty Cagan) core chapters", done: false },
      { label: "Read The Mom Test + interview design", done: false },
      { label: "RICE/JTBD/NSM frameworks practiced", done: false },
      { label: "Write PRD for okx_bot", done: false },
      { label: "Write PRFAQ for AI DeFi Trading Agent", done: false },
    ],
  },
  // 本周项目进度概览
  projects: [
    {
      title: "Image Agent",
      progress: 70,
      status: "building",
      tags: ["ml", "tooling"],
      preview: "Handwritten math → LaTeX. Multi-backend OCR with OpenCV preprocessing + Vision LLM verification.",
    },
    {
      title: "Personal Site v2",
      progress: 90,
      status: "building",
      tags: ["web", "infra"],
      preview: "Portfolio dashboard, daily auto-deploy via Vercel CLI, Obsidian heatmap sync, Claude digest.",
    },
    {
      title: "PM Skill Building",
      progress: 5,
      status: "building",
      tags: ["career", "product"],
      preview: "8-week sprint: PM frameworks → AI Agent PM → Crypto PM → Portfolio projects. Targeting AI×Quant×Crypto PM roles.",
    },
    {
      title: "Job Search System",
      progress: 65,
      status: "building",
      tags: ["career", "agent"],
      preview: "Obsidian pipeline. 27 companies, 19 applications tracked, daily briefs. Now expanded to PM roles.",
    },
    {
      title: "Crypto Bot",
      progress: 65,
      status: "building",
      tags: ["crypto", "trading"],
      preview: "OKX perpetual futures. Kafka signal pipeline with self-aggregated candles. Freqtrade execution.",
    },
  ],
};

// ---- Contact 区 ----
export const contact: ContactContent = {
  heading: "Let's Connect",
  subtitle: "Interested in quant research, philosophy, or poker? I'm always open to a good conversation.",
  links: [
    { label: "Email", value: "zh89@cornell.edu", href: "mailto:zh89@cornell.edu" },
    { label: "LinkedIn", value: "roddy-huang", href: "https://linkedin.com/in/roddy-huang" },
    { label: "GitHub", value: "RoddyH17", href: "https://github.com/RoddyH17" },
  ],
};

// ---- Footer ----
export const footer: FooterContent = {
  tech: "Built with Next.js · Tailwind CSS · Motion",
};
