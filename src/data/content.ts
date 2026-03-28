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
  LabSectionContent,
} from "@/types/content";

// ---- Hero 区 ----
export const hero: HeroContent = {
  name: "Roddy Huang",
  tagline: "Finding alpha where others see noise.",
  tags: ["Poker", "Math", "Quant", "Agent Philosophy"],
  bankroll: {
    total: 53000,
    categories: [
      {
        name: "Poker",
        icon: "🃏",
        accounts: [
          { label: "Cash Game", amount: 10000, color: "bg-green-500" },
          { label: "Tournament", amount: 25000, color: "bg-emerald-400" },
        ],
      },
      {
        name: "Trading",
        icon: "📈",
        accounts: [
          { label: "A-Shares", amount: 10000, color: "bg-blue-400", detail: "CN equities" },
          { label: "US Equities", amount: 5000, color: "bg-sky-400", detail: "US market" },
        ],
      },
      {
        name: "Daily Expense",
        icon: "💳",
        accounts: [
          { label: "Living", amount: 3000, color: "bg-amber-400", detail: "Car, rent, lifestyle" },
        ],
      },
    ],
  },
};

// ---- Research 区 ----
export const pokerSection: PokerSectionContent = {
  heading: "Research",
  subtitle: "Quantitative research & prediction systems.",
  projects: [
    {
      title: "Vol Forecasting: EGARCH vs Deep Learning",
      description:
        "Comparing EGARCH(2,3,2) with LSTM/Transformer on 1-min BTC-USD intraday data. EGARCH performs comparably to DL models — faster, interpretable, captures leverage effect. Student-t distribution for crypto fat tails.",
      tags: ["volatility", "EGARCH", "deep-learning", "crypto"],
      status: "live",
      github: "https://github.com/RoddyH17/vol_forecasting",
      metrics: { "Models": "EGARCH vs LSTM vs Transformer", "Data": "BTC-USD 1-min", "Finding": "EGARCH ≈ DL" },
    },
    {
      title: "Options Research: IV Surface & Straddle Strategy",
      description:
        "NVDA IV surface modeling (RBF interpolation) + Icarus Trading Group internship straddle strategy. Skew-based long-short straddle with VIX overlay hedge and continuous delta hedging.",
      tags: ["options", "IV-surface", "straddle", "skew"],
      status: "live",
      github: "https://github.com/RoddyH17/options_research",
      metrics: { "Win Rate": "82%", "Sharpe": "1.89", "Hedge": "VIX overlay + delta" },
    },
    {
      title: "NCAA March Madness Prediction",
      description:
        "Probabilistic tournament prediction combining mixture models, gradient boosting, and sequence models. 12 years of Kaggle data + KenPom/Barttorvik ratings. Targeting Kaggle competition & Kalshi live trading.",
      tags: ["NCAA", "prediction", "ensemble", "Kalshi"],
      status: "building",
      github: "https://github.com/RoddyH17/ncaa_prediction",
      metrics: { "Data": "12yr Kaggle + KenPom", "Models": "XGB + DL ensemble", "Target": "Kalshi trading" },
    },
  ],
};

// ---- Lab 区（扑克/交易工具 & 实战项目）----
export const labSection: LabSectionContent = {
  heading: "Lab",
  subtitle: "Poker tools, trading programs & experiments.",
  projects: [
    {
      title: "Poker Range Trainer",
      description:
        "GTO preflop range explorer with position-aware charts. Interactive drill mode for NL Hold'em 6-max.",
      tags: ["poker", "tool", "GTO"],
      status: "building",
      github: "https://github.com/RoddyH17/poker-range-trainer",
      icon: "🃏",
      preview: "Train preflop decisions against GTO solutions",
    },
    {
      title: "OKX Trading Bot",
      description:
        "Perpetual futures execution engine. OKX WebSocket → Kafka → Freqtrade pipeline with self-aggregated candles.",
      tags: ["crypto", "trading", "bot"],
      status: "building",
      github: "https://github.com/RoddyH17/okx-bot",
      icon: "🤖",
      preview: "Live trading on OKX perpetual contracts",
    },
    {
      title: "Hand History Analyzer",
      description:
        "Import PokerStars / GGPoker hand histories. Auto-tag leaks, calculate VPIP/PFR/3Bet, generate session reports.",
      tags: ["poker", "analytics"],
      status: "coming-soon",
      icon: "📈",
      preview: "Automated leak-finding from hand histories",
    },
    {
      title: "Vol Surface Visualizer",
      description:
        "3D implied volatility surface with real-time options chain data. Interactive term structure & skew dynamics.",
      tags: ["options", "viz"],
      status: "coming-soon",
      icon: "📊",
      preview: "Interactive IV surface exploration",
    },
    {
      title: "Macro Dashboard",
      description:
        "Cross-asset regime detection. VAR-CAPE signals, yield curve monitor, sentiment indices.",
      tags: ["macro", "dashboard"],
      status: "coming-soon",
      icon: "🌐",
      preview: "Real-time macro regime signals",
    },
    {
      title: "Poker Equity Calculator",
      description:
        "Monte Carlo equity calculator with range vs range support. Hand equity, fold equity, ICM calculations for tournaments.",
      tags: ["poker", "math", "tool"],
      status: "coming-soon",
      icon: "🎰",
      preview: "Fast equity calculations for multi-way pots",
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
