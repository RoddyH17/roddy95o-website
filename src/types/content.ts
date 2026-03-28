// Shared type definitions for content data

export interface BankrollAccount {
  label: string;
  amount: number;
  color: string;
  detail?: string;
}

export interface BankrollCategory {
  name: string;
  icon: string;
  accounts: BankrollAccount[];
}

export interface HeroContent {
  name: string;
  tagline: string;
  tags: string[];
  bankroll: {
    total: number;
    categories: BankrollCategory[];
  };
}

export type ProjectStatus = "live" | "building" | "planned";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  status?: ProjectStatus;
  link?: string;
  github?: string;
  metrics?: Record<string, string>;
}

export interface PokerSectionContent {
  heading: string;
  subtitle: string;
  projects: Project[];
}

export interface FeedEntry {
  date: string;
  title: string;
  description: string;
  tags: string[];
}

export interface ActivityContent {
  heading: string;
  subtitle: string;
  feed: FeedEntry[];
}

export interface Subtask {
  label: string;
  done: boolean;
}

export type TaskType = "infra" | "research" | "trading" | "ml" | "web" | "agent";

export interface CurrentTask {
  title: string;
  type: TaskType;
  startedAt: string;
  estimatedDays: number;
  completedPercent: number;
  subtasks: Subtask[];
}

export interface ProgressProject {
  title: string;
  progress: number;
  status: ProjectStatus;
  tags: string[];
  preview: string;
}

export interface WeeklyProgressContent {
  heading: string;
  subtitle: string;
  currentTask: CurrentTask;
  projects: ProgressProject[];
}

export interface ContactLink {
  label: string;
  value: string;
  href: string;
}

export interface ContactContent {
  heading: string;
  subtitle: string;
  links: ContactLink[];
}

export interface FooterContent {
  tech: string;
}

// ---- Lab Section ----
export type LabProjectStatus = "live" | "building" | "coming-soon";

export interface LabProject {
  title: string;
  description: string;
  tags: string[];
  status: LabProjectStatus;
  link?: string;
  github?: string;
  icon: string;
  preview?: string;
}

export interface LabSectionContent {
  heading: string;
  subtitle: string;
  projects: LabProject[];
}

export interface DigestData {
  generated: string;
  date: string;
  window?: string;
  skills: { modified: number; files: string[] };
  memory?: { modified: number; files: string[]; projects: string[] };
  commits: { count: number; recent: string[] };
  heatmap: { activeDays: number; obsidianFiles: number; claudeFiles: number; gitDays: number };
  highlights: string[];
}
