#!/usr/bin/env npx tsx
/**
 * Generate weekly digest JSON for the website.
 * Scans ALL Claude project memory directories (not just one),
 * uses a 7-day window for skills/commits, and produces a weekly summary.
 *
 * Usage: npx tsx scripts/generate-digest.ts
 * Output: src/data/digest.json
 */

import { execSync } from "child_process";
import { writeFileSync, readdirSync, statSync, existsSync } from "fs";
import { join, relative, basename } from "path";

const HOME = process.env.HOME || "/Users/roddy";
const WEBSITE_ROOT = join(__dirname, "..");
const CLAUDE_PROJECTS_DIR = join(HOME, ".claude/projects");
const OUTPUT_PATH = join(WEBSITE_ROOT, "src/data/digest.json");

// Window: 7 days for weekly digest
const WINDOW_DAYS = 7;

interface Digest {
  generated: string;
  date: string;
  window: string; // e.g. "7d"
  skills: { modified: number; files: string[] };
  memory: { modified: number; files: string[]; projects: string[] };
  commits: { count: number; recent: string[] };
  heatmap: { activeDays: number; obsidianFiles: number; claudeFiles: number; gitDays: number };
  highlights: string[];
}

/** Recursively find .md files modified after cutoffMs */
function findRecentMdFiles(dir: string, cutoffMs: number, baseDir?: string): string[] {
  const results: string[] = [];
  if (!existsSync(dir)) return results;
  const root = baseDir || dir;
  try {
    const entries = readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = join(dir, entry.name);
      if (entry.isDirectory() && !entry.name.startsWith(".")) {
        results.push(...findRecentMdFiles(fullPath, cutoffMs, root));
      } else if (entry.isFile() && entry.name.endsWith(".md")) {
        try {
          const stat = statSync(fullPath);
          if (stat.mtimeMs >= cutoffMs) {
            results.push(relative(root, fullPath));
          }
        } catch { /* skip unreadable files */ }
      }
    }
  } catch { /* skip unreadable dirs */ }
  return results;
}

/** Scan ALL Claude project memory directories for recent changes */
function scanAllClaudeMemory(cutoffMs: number): {
  skills: { modified: number; files: string[] };
  memory: { modified: number; files: string[]; projects: string[] };
} {
  const allSkillFiles: string[] = [];
  const allMemoryFiles: string[] = [];
  const activeProjects: Set<string> = new Set();

  if (!existsSync(CLAUDE_PROJECTS_DIR)) {
    return {
      skills: { modified: 0, files: [] },
      memory: { modified: 0, files: [], projects: [] },
    };
  }

  try {
    const projectDirs = readdirSync(CLAUDE_PROJECTS_DIR, { withFileTypes: true });
    for (const projEntry of projectDirs) {
      if (!projEntry.isDirectory()) continue;
      const projName = projEntry.name;
      const memoryDir = join(CLAUDE_PROJECTS_DIR, projName, "memory");
      if (!existsSync(memoryDir)) continue;

      // Scan skills subdirectory
      const skillsDir = join(memoryDir, "skills");
      if (existsSync(skillsDir)) {
        const recentSkills = findRecentMdFiles(skillsDir, cutoffMs);
        for (const f of recentSkills) {
          const label = `${projName}/skills/${f}`;
          allSkillFiles.push(label);
          activeProjects.add(projName);
        }
      }

      // Scan top-level memory files (non-skills)
      const recentMemory = findRecentMdFiles(memoryDir, cutoffMs);
      for (const f of recentMemory) {
        // Skip skills/ subdirectory files (already counted above)
        if (f.startsWith("skills/") || f.startsWith("skills\\")) continue;
        const label = `${projName}/${f}`;
        allMemoryFiles.push(label);
        activeProjects.add(projName);
      }
    }
  } catch { /* skip if projects dir unreadable */ }

  // Simplify display names: strip the long project prefix
  const simplify = (path: string) => {
    return path
      .replace(/-Users-roddy-conductor-workspaces-roddy95o-website-nairobi/g, "website-workspace")
      .replace(/-Users-roddy-roddy95o-website/g, "website")
      .replace(/-Users-roddy/g, "global");
  };

  return {
    skills: {
      modified: allSkillFiles.length,
      files: allSkillFiles.map(simplify).slice(0, 30),
    },
    memory: {
      modified: allMemoryFiles.length,
      files: allMemoryFiles.map(simplify).slice(0, 30),
      projects: Array.from(activeProjects).map(simplify),
    },
  };
}

function getRecentCommits(days: number): { count: number; recent: string[] } {
  try {
    const log = execSync(`git log --since="${days} days ago" --oneline --format="%s"`, {
      cwd: WEBSITE_ROOT,
      encoding: "utf-8",
      timeout: 5000,
    });
    const lines = log.trim().split("\n").filter(Boolean);
    // Deduplicate repeated "Daily digest update" entries
    const dedupedRecent: string[] = [];
    let digestCount = 0;
    for (const line of lines) {
      if (line === "Daily digest update") {
        digestCount++;
      } else {
        dedupedRecent.push(line);
      }
    }
    if (digestCount > 0) {
      dedupedRecent.push(`Daily digest update (x${digestCount})`);
    }
    return { count: lines.length, recent: dedupedRecent.slice(0, 15) };
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

function generateHighlights(
  skills: { modified: number; files: string[] },
  memory: { modified: number; files: string[]; projects: string[] },
  commitCount: number,
): string[] {
  const highlights: string[] = [];

  const totalFiles = skills.modified + memory.modified;
  if (totalFiles > 0) {
    highlights.push(`${totalFiles} Claude memory files updated this week`);
  }
  if (memory.projects.length > 1) {
    highlights.push(`Active across ${memory.projects.length} Claude project contexts`);
  }
  if (commitCount > 10) highlights.push(`${commitCount} commits this week — heavy development`);
  else if (commitCount > 3) highlights.push(`${commitCount} commits this week`);
  else if (commitCount > 0) highlights.push(`${commitCount} commit(s) this week`);

  const categories = ["finance", "poker", "frontend", "devops", "macro"];
  const allFiles = [...skills.files, ...memory.files];
  for (const cat of categories) {
    if (allFiles.some((f) => f.includes(cat))) {
      const labels: Record<string, string> = {
        finance: "Finance knowledge updated",
        poker: "Poker agent knowledge expanded",
        frontend: "Frontend/UI skills refined",
        devops: "DevOps pipeline knowledge updated",
        macro: "Macro policy analysis updated",
      };
      highlights.push(labels[cat]);
    }
  }

  if (highlights.length === 0) highlights.push("Quiet week — no significant Claude activity");
  return highlights;
}

function main() {
  const now = new Date();
  const cutoffMs = now.getTime() - WINDOW_DAYS * 24 * 60 * 60 * 1000;
  const dateStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;

  const { skills, memory } = scanAllClaudeMemory(cutoffMs);
  const commits = getRecentCommits(WINDOW_DAYS);
  const heatmap = runHeatmapSync();
  const highlights = generateHighlights(skills, memory, commits.count);

  const digest: Digest = {
    generated: now.toISOString(),
    date: dateStr,
    window: `${WINDOW_DAYS}d`,
    skills,
    memory,
    commits,
    heatmap,
    highlights,
  };

  writeFileSync(OUTPUT_PATH, JSON.stringify(digest, null, 2));
  console.log(`✓ Digest generated: skills=${skills.modified} memory=${memory.modified} commits=${commits.count} projects=${memory.projects.length}`);
}

main();
