// Shared type definitions for content data

export type DemoType = "pnl" | "hand" | "macro";

export interface Demo {
  title: string;
  description: string;
  type: DemoType;
}

export interface HeroContent {
  name: string;
  tagline: string;
  tags: string[];
  currently: string;
  demos: Demo[];
}

export type ProjectStatus = "live" | "building" | "planned";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  status: ProjectStatus;
  link?: string;
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

export interface DigestData {
  generated: string;
  date: string;
  skills: { modified: number; files: string[] };
  commits: { count: number; recent: string[] };
  heatmap: { activeDays: number; obsidianFiles: number; claudeFiles: number; gitDays: number };
  highlights: string[];
}
