// ============================================
// 网站所有文案集中管理 — 直接在这里修改文字
// 改完保存即可，组件会自动引用
// ============================================

import type {
  HeroContent,
  PokerSectionContent,
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

// ---- Research 区（暂时清空，之后再决定放什么）----
export const pokerSection: PokerSectionContent = {
  heading: "Research",
  subtitle: "Coming soon — curating what to show next.",
  projects: [],
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
      title: "Research Portfolio",
      progress: 75,
      status: "building",
      tags: ["quant", "research"],
      preview: "4 projects live on GitHub: Icarus straddle (82% WR, SR 1.89), VAR-CAPE (40% RMSE↓), EGARCH vs DL, OU stat-arb. Architecture complete; data integration ongoing.",
    },
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
