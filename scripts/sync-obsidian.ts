#!/usr/bin/env npx tsx
/**
 * Activity Sync: Obsidian + Claude Memory + Git → Heatmap
 *
 * Aggregates activity from multiple sources:
 *  1. Obsidian daily notes (task completions, habit tracking, word count)
 *  2. Claude memory/skills files (modification dates)
 *  3. Git commit history (if available)
 *  4. Activity feed entries from content.ts
 *
 * Usage:
 *   npx tsx scripts/sync-obsidian.ts          # last 12 weeks
 *   npx tsx scripts/sync-obsidian.ts --weeks 52  # last year
 *
 * Output:
 *   src/data/heatmap-data.json
 */

import { readdirSync, readFileSync, statSync, writeFileSync, existsSync } from "fs";
import { join, basename } from "path";
import { execSync } from "child_process";

// --- Config ---
const HOME = process.env.HOME || "/Users/roddy";
const OBSIDIAN_ROOT = join(HOME, "Desktop/Obsidian");
const CLAUDE_MEMORY = join(HOME, ".claude/projects/-Users-roddy/memory");
const WEBSITE_ROOT = join(__dirname, "..");
const OUTPUT_PATH = join(WEBSITE_ROOT, "src/data/heatmap-data.json");

const WEEKS_BACK = parseInt(process.argv.find(a => a.startsWith("--weeks="))?.split("=")[1] || "12");

// All vault folders to scan
const VAULT_FOLDERS = [
  "Daily Notes(Task Edition)",
  "Obsidian Life Planner OS",
  "Obsidian Task Manager & Template Vault",
  "Obsidian Starter Vault",
];

interface DayActivity {
  date: string;
  level: number;
  sources: string[];
  details?: { tasks?: number; completed?: number; words?: number; commits?: number };
}

// Parse date from filename
function parseDateFromFilename(filename: string): string | null {
  const name = basename(filename, ".md");
  const isoMatch = name.match(/^(\d{4}-\d{2}-\d{2})/);
  if (isoMatch) return isoMatch[1];
  const dotMatch = name.match(/^(\d{4})\.(\d{2})\.(\d{2})/);
  if (dotMatch) return `${dotMatch[1]}-${dotMatch[2]}-${dotMatch[3]}`;
  return null;
}

// Score a markdown file by tasks, habits, and word count
function scoreFile(filepath: string): { tasks: number; completed: number; words: number; habits: number } {
  try {
    const content = readFileSync(filepath, "utf-8");
    const lines = content.split("\n");
    let tasks = 0, completed = 0, habits = 0;

    for (const line of lines) {
      // Checkbox tasks: - [ ] or - [x]
      if (line.match(/^\s*- \[[ x]\]/i)) {
        tasks++;
        if (line.match(/^\s*- \[x\]/i)) completed++;
      }
      // Obsidian habit tracker: Writing:: 1, Exercise:: 1, etc.
      const habitMatch = line.match(/^>\s*\w+::\s*(\d+)/);
      if (habitMatch && parseInt(habitMatch[1]) > 0) habits++;
      // Frontmatter booleans: Writing: true
      const fmMatch = line.match(/^(\w+):\s*true$/);
      if (fmMatch && ["Writing", "Workout", "Reading", "Exercise", "Meditation"].includes(fmMatch[1])) habits++;
    }

    const words = content.split(/\s+/).filter(Boolean).length;
    return { tasks, completed, words, habits };
  } catch {
    return { tasks: 0, completed: 0, words: 0, habits: 0 };
  }
}

// Calculate activity level (0-4)
function activityLevel(score: { tasks: number; completed: number; words: number; habits?: number; commits?: number }): number {
  const { completed = 0, words = 0, habits = 0, commits = 0 } = score;
  const total = completed + habits + commits;
  if (total === 0 && words < 30) return 0;
  if (total >= 8 || words >= 800) return 4;
  if (total >= 5 || words >= 400) return 3;
  if (total >= 2 || words >= 150) return 2;
  return 1;
}

// Recursively find .md files
function findMdFiles(dir: string): string[] {
  const results: string[] = [];
  if (!existsSync(dir)) return results;
  try {
    const entries = readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = join(dir, entry.name);
      if (entry.isDirectory() && !entry.name.startsWith(".")) {
        results.push(...findMdFiles(fullPath));
      } else if (entry.isFile() && entry.name.endsWith(".md")) {
        results.push(fullPath);
      }
    }
  } catch { /* skip */ }
  return results;
}

// Get git commit counts by date
function getGitCommitsByDate(repoPath: string): Map<string, number> {
  const commits = new Map<string, number>();
  try {
    const log = execSync(
      `git -C "${repoPath}" log --format="%ai" --all 2>/dev/null`,
      { encoding: "utf-8", timeout: 5000 }
    );
    for (const line of log.split("\n")) {
      const date = line.trim().slice(0, 10);
      if (date.match(/^\d{4}-\d{2}-\d{2}$/)) {
        commits.set(date, (commits.get(date) || 0) + 1);
      }
    }
  } catch { /* not a git repo or no git */ }
  return commits;
}

function main() {
  const today = new Date();
  const cutoff = new Date(today);
  cutoff.setDate(cutoff.getDate() - WEEKS_BACK * 7);

  const activityMap = new Map<string, { level: number; sources: string[]; details: Record<string, number> }>();

  function addActivity(dateStr: string, level: number, source: string, details: Record<string, number> = {}) {
    const existing = activityMap.get(dateStr);
    if (existing) {
      existing.level = Math.min(4, Math.max(existing.level, level));
      if (!existing.sources.includes(source)) existing.sources.push(source);
      for (const [k, v] of Object.entries(details)) {
        existing.details[k] = (existing.details[k] || 0) + v;
      }
    } else {
      activityMap.set(dateStr, { level, sources: [source], details });
    }
  }

  // --- Source 1: Obsidian vaults ---
  let obsidianFiles = 0;
  for (const folder of VAULT_FOLDERS) {
    const vaultPath = join(OBSIDIAN_ROOT, folder);
    if (!existsSync(vaultPath)) continue;
    const mdFiles = findMdFiles(vaultPath);

    for (const filepath of mdFiles) {
      let dateStr = parseDateFromFilename(filepath);

      // Fallback: use file modification date
      if (!dateStr) {
        try {
          const stat = statSync(filepath);
          dateStr = stat.mtime.toISOString().split("T")[0];
        } catch { continue; }
      }

      const fileDate = new Date(dateStr);
      if (fileDate < cutoff || fileDate > today) continue;

      const score = scoreFile(filepath);
      const level = activityLevel(score);
      if (level > 0) {
        obsidianFiles++;
        addActivity(dateStr, level, `obsidian:${folder}`, {
          tasks: score.tasks,
          completed: score.completed,
          words: score.words,
        });
      }
    }
  }

  // --- Source 2: Claude memory files (modification dates) ---
  let claudeFiles = 0;
  if (existsSync(CLAUDE_MEMORY)) {
    const memFiles = findMdFiles(CLAUDE_MEMORY);
    for (const filepath of memFiles) {
      try {
        const stat = statSync(filepath);
        const dateStr = stat.mtime.toISOString().split("T")[0];
        if (new Date(dateStr) >= cutoff) {
          claudeFiles++;
          addActivity(dateStr, 2, "claude-memory", { skills: 1 });
        }
      } catch { /* skip */ }
    }
  }

  // --- Source 3: Git commits from website repo ---
  const gitCommits = getGitCommitsByDate(WEBSITE_ROOT);
  let gitDays = 0;
  for (const [dateStr, count] of gitCommits) {
    if (new Date(dateStr) >= cutoff) {
      gitDays++;
      const level = count >= 5 ? 4 : count >= 3 ? 3 : count >= 1 ? 2 : 0;
      addActivity(dateStr, level, "git", { commits: count });
    }
  }

  // --- Source 4: Activity feed from content.ts ---
  // Parse feed dates from the content file
  try {
    const contentFile = readFileSync(join(WEBSITE_ROOT, "src/data/content.ts"), "utf-8");
    const dateMatches = contentFile.matchAll(/date:\s*"(\d{4}-\d{2}-\d{2})"/g);
    for (const match of dateMatches) {
      const dateStr = match[1];
      if (new Date(dateStr) >= cutoff) {
        addActivity(dateStr, 3, "activity-feed");
      }
    }
  } catch { /* skip */ }

  // --- Build output ---
  const weeks: DayActivity[][] = [];
  for (let w = WEEKS_BACK - 1; w >= 0; w--) {
    const week: DayActivity[] = [];
    for (let d = 0; d < 7; d++) {
      const date = new Date(today);
      date.setDate(date.getDate() - w * 7 - (6 - d));
      const dateStr = date.toISOString().split("T")[0];
      const entry = activityMap.get(dateStr);
      week.push({
        date: dateStr,
        level: entry?.level ?? 0,
        sources: entry?.sources ?? [],
        ...(entry?.details && Object.keys(entry.details).length > 0 ? { details: entry.details } : {}),
      });
    }
    weeks.push(week);
  }

  const output = {
    generated: new Date().toISOString(),
    weeksBack: WEEKS_BACK,
    weeks,
    summary: {
      totalDays: WEEKS_BACK * 7,
      activeDays: Array.from(activityMap.values()).filter(v => v.level > 0).length,
      vaultsScanned: VAULT_FOLDERS.filter(f => existsSync(join(OBSIDIAN_ROOT, f))).length,
      obsidianFiles,
      claudeFiles,
      gitDays,
    },
  };

  writeFileSync(OUTPUT_PATH, JSON.stringify(output, null, 2));
  console.log(`✓ Heatmap synced: ${output.summary.activeDays} active days`);
  console.log(`  Obsidian: ${obsidianFiles} files | Claude: ${claudeFiles} files | Git: ${gitDays} commit-days`);
  console.log(`  Output: ${OUTPUT_PATH}`);
}

main();
