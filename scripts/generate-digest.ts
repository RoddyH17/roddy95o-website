#!/usr/bin/env npx tsx
/**
 * Generate daily digest JSON for the website.
 * Replaces the fragile shell-based JSON generation in daily-digest.sh.
 *
 * Usage: npx tsx scripts/generate-digest.ts
 * Output: src/data/digest.json
 */

import { execSync } from "child_process";
import { writeFileSync, readdirSync, statSync, existsSync } from "fs";
import { join, relative } from "path";

const HOME = process.env.HOME || "/Users/roddy";
const WEBSITE_ROOT = join(__dirname, "..");
const SKILL_DIR = join(HOME, ".claude/projects/-Users-roddy/memory/skills");
const OUTPUT_PATH = join(WEBSITE_ROOT, "src/data/digest.json");

interface Digest {
  generated: string;
  date: string;
  skills: { modified: number; files: string[] };
  commits: { count: number; recent: string[] };
  heatmap: { activeDays: number; obsidianFiles: number; claudeFiles: number; gitDays: number };
  highlights: string[];
}

function findRecentSkillFiles(dir: string, cutoffMs: number): string[] {
  const results: string[] = [];
  if (!existsSync(dir)) return results;
  try {
    const entries = readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = join(dir, entry.name);
      if (entry.isDirectory() && !entry.name.startsWith(".")) {
        results.push(...findRecentSkillFiles(fullPath, cutoffMs));
      } else if (entry.isFile() && entry.name.endsWith(".md")) {
        try {
          const stat = statSync(fullPath);
          if (stat.mtimeMs >= cutoffMs) {
            results.push(relative(dir, fullPath));
          }
        } catch { /* skip unreadable files */ }
      }
    }
  } catch { /* skip unreadable dirs */ }
  return results;
}

function getRecentCommits(): { count: number; recent: string[] } {
  try {
    const log = execSync('git log --since="24 hours ago" --oneline --format="%s"', {
      cwd: WEBSITE_ROOT,
      encoding: "utf-8",
      timeout: 5000,
    });
    const lines = log.trim().split("\n").filter(Boolean);
    return { count: lines.length, recent: lines.slice(0, 10) };
  } catch {
    return { count: 0, recent: [] };
  }
}

function runHeatmapSync(): { activeDays: number; obsidianFiles: number; claudeFiles: number; gitDays: number } {
  try {
    const output = execSync("npx tsx scripts/sync-obsidian.ts", {
      cwd: WEBSITE_ROOT,
      encoding: "utf-8",
      timeout: 30000,
    });
    const activeDays = parseInt(output.match(/(\d+) active/)?.[1] || "0");
    const obsidianFiles = parseInt(output.match(/Obsidian: (\d+)/)?.[1] || "0");
    const claudeFiles = parseInt(output.match(/Claude: (\d+)/)?.[1] || "0");
    const gitDays = parseInt(output.match(/Git: (\d+)/)?.[1] || "0");
    return { activeDays, obsidianFiles, claudeFiles, gitDays };
  } catch {
    return { activeDays: 0, obsidianFiles: 0, claudeFiles: 0, gitDays: 0 };
  }
}

function generateHighlights(skills: string[], commitCount: number): string[] {
  const highlights: string[] = [];
  if (skills.length > 0) highlights.push(`Updated ${skills.length} skill files across the knowledge base`);
  if (commitCount > 3) highlights.push(`Made ${commitCount} commits — active development day`);
  else if (commitCount > 0) highlights.push(`${commitCount} commit(s) pushed to GitHub`);

  const categories = ["finance", "poker", "frontend", "devops", "macro"];
  for (const cat of categories) {
    if (skills.some((f) => f.includes(cat))) {
      const labels: Record<string, string> = {
        finance: "Finance skill library updated",
        poker: "Poker agent knowledge expanded",
        frontend: "Frontend/UI skills refined",
        devops: "DevOps pipeline knowledge updated",
        macro: "Macro policy analysis updated",
      };
      highlights.push(labels[cat]);
    }
  }

  if (highlights.length === 0) highlights.push("No significant changes in last 24h");
  return highlights;
}

function main() {
  const now = new Date();
  const cutoffMs = now.getTime() - 24 * 60 * 60 * 1000;
  const dateStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;

  const skillFiles = findRecentSkillFiles(SKILL_DIR, cutoffMs);
  const commits = getRecentCommits();
  const heatmap = runHeatmapSync();
  const highlights = generateHighlights(skillFiles, commits.count);

  const digest: Digest = {
    generated: now.toISOString(),
    date: dateStr,
    skills: { modified: skillFiles.length, files: skillFiles },
    commits,
    heatmap,
    highlights,
  };

  writeFileSync(OUTPUT_PATH, JSON.stringify(digest, null, 2));
  console.log(`✓ Digest generated: skills=${skillFiles.length} commits=${commits.count}`);
}

main();
