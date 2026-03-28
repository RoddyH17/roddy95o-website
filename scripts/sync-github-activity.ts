#!/usr/bin/env npx tsx
/**
 * Sync GitHub Activity → src/data/github-activity.json
 *
 * Fetches recent public GitHub events for RoddyH17 using the GitHub CLI (gh).
 * Produces a structured JSON feed for the Activity section.
 *
 * Usage: npx tsx scripts/sync-github-activity.ts
 * Runs every 3 days via GitHub Actions.
 */

import { execSync } from "child_process";
import { writeFileSync } from "fs";
import { join } from "path";

const GITHUB_USER = "RoddyH17";
const OUTPUT_PATH = join(__dirname, "..", "src/data/github-activity.json");
const MAX_EVENTS = 60; // GitHub events API returns up to 100

interface GitHubEvent {
  type: string;
  repo: { name: string };
  created_at: string;
  payload: {
    action?: string;
    ref?: string;
    ref_type?: string;
    commits?: { message: string; sha: string }[];
    pull_request?: { title: string; number: number; merged?: boolean };
    issue?: { title: string; number: number };
    release?: { tag_name: string; name: string };
    description?: string;
  };
}

interface ActivityItem {
  date: string;
  type: string;
  repo: string;
  title: string;
  description: string;
  url: string;
}

function repoShortName(fullName: string): string {
  return fullName.replace(`${GITHUB_USER}/`, "");
}

function formatEvent(event: GitHubEvent): ActivityItem | null {
  const repo = repoShortName(event.repo.name);
  const date = event.created_at.slice(0, 10);
  const repoUrl = `https://github.com/${event.repo.name}`;

  switch (event.type) {
    case "PushEvent": {
      const commits = event.payload.commits ?? [];
      if (commits.length === 0) return null;
      const messages = commits.map((c) => c.message.split("\n")[0]);
      // Skip auto-generated digest commits
      if (messages.every((m) => m === "Daily digest update")) return null;
      return {
        date,
        type: "push",
        repo,
        title: `Pushed ${commits.length} commit${commits.length > 1 ? "s" : ""} to ${repo}`,
        description: messages.filter((m) => m !== "Daily digest update").slice(0, 3).join("; "),
        url: repoUrl,
      };
    }
    case "CreateEvent": {
      const refType = event.payload.ref_type;
      if (refType === "repository") {
        return {
          date,
          type: "create-repo",
          repo,
          title: `Created repository ${repo}`,
          description: event.payload.description || "",
          url: repoUrl,
        };
      }
      if (refType === "branch") {
        return {
          date,
          type: "create-branch",
          repo,
          title: `Created branch ${event.payload.ref} in ${repo}`,
          description: "",
          url: repoUrl,
        };
      }
      return null;
    }
    case "PullRequestEvent": {
      const pr = event.payload.pull_request;
      if (!pr) return null;
      const action = event.payload.action;
      if (action === "opened" || action === "closed") {
        const merged = action === "closed" && pr.merged;
        return {
          date,
          type: merged ? "pr-merged" : `pr-${action}`,
          repo,
          title: `${merged ? "Merged" : action === "opened" ? "Opened" : "Closed"} PR #${pr.number}: ${pr.title}`,
          description: "",
          url: `${repoUrl}/pull/${pr.number}`,
        };
      }
      return null;
    }
    case "IssuesEvent": {
      const issue = event.payload.issue;
      if (!issue || event.payload.action !== "opened") return null;
      return {
        date,
        type: "issue",
        repo,
        title: `Opened issue #${issue.number}: ${issue.title}`,
        description: "",
        url: `${repoUrl}/issues/${issue.number}`,
      };
    }
    case "ReleaseEvent": {
      const release = event.payload.release;
      if (!release) return null;
      return {
        date,
        type: "release",
        repo,
        title: `Released ${release.tag_name} of ${repo}`,
        description: release.name || "",
        url: repoUrl,
      };
    }
    case "ForkEvent":
      return {
        date,
        type: "fork",
        repo,
        title: `Forked ${event.repo.name}`,
        description: "",
        url: repoUrl,
      };
    case "WatchEvent":
      return {
        date,
        type: "star",
        repo,
        title: `Starred ${event.repo.name}`,
        description: "",
        url: repoUrl,
      };
    default:
      return null;
  }
}

/** Fetch PR titles for repos that have PRs with null titles */
function fetchPrTitles(repos: string[]): Map<string, Map<number, string>> {
  const result = new Map<string, Map<number, string>>();
  for (const repo of repos) {
    try {
      const json = execSync(
        `gh api "/repos/${GITHUB_USER}/${repo}/pulls?state=all&per_page=30" --jq '[.[] | {number, title}]'`,
        { encoding: "utf-8", timeout: 10000 }
      );
      const prs: { number: number; title: string }[] = JSON.parse(json);
      const prMap = new Map<number, string>();
      for (const pr of prs) prMap.set(pr.number, pr.title);
      result.set(repo, prMap);
    } catch { /* skip */ }
  }
  return result;
}

function main() {
  console.log(`Fetching GitHub events for ${GITHUB_USER}...`);

  let rawEvents: GitHubEvent[];
  try {
    const json = execSync(
      `gh api "/users/${GITHUB_USER}/events?per_page=${MAX_EVENTS}"`,
      { encoding: "utf-8", timeout: 15000 }
    );
    rawEvents = JSON.parse(json);
  } catch (err) {
    console.error("Failed to fetch GitHub events:", err);
    process.exit(1);
  }

  const items: ActivityItem[] = [];
  for (const event of rawEvents) {
    const item = formatEvent(event);
    if (item) items.push(item);
  }

  // Enrich PR titles (events API often returns null for title)
  const reposWithPRs = [...new Set(items.filter((i) => i.type.startsWith("pr-")).map((i) => i.repo))];
  if (reposWithPRs.length > 0) {
    const prTitles = fetchPrTitles(reposWithPRs);
    for (const item of items) {
      if (item.type.startsWith("pr-") && item.title.includes("undefined")) {
        const prNum = parseInt(item.title.match(/#(\d+)/)?.[1] || "0");
        const repoTitles = prTitles.get(item.repo);
        const realTitle = repoTitles?.get(prNum);
        if (realTitle) {
          item.title = item.title.replace("undefined", realTitle);
        } else {
          item.title = item.title.replace(": undefined", "");
        }
      }
    }
  }

  // Deduplicate: merge consecutive push events to the same repo on the same day
  const deduped: ActivityItem[] = [];
  for (const item of items) {
    const last = deduped[deduped.length - 1];
    if (
      last &&
      last.type === "push" &&
      item.type === "push" &&
      last.repo === item.repo &&
      last.date === item.date
    ) {
      // Merge descriptions
      const existingMessages = last.description.split("; ");
      const newMessages = item.description.split("; ");
      const allMessages = [...new Set([...existingMessages, ...newMessages])];
      last.description = allMessages.slice(0, 5).join("; ");
      // Update commit count in title
      const totalMatch = last.title.match(/Pushed (\d+)/);
      const newMatch = item.title.match(/Pushed (\d+)/);
      if (totalMatch && newMatch) {
        const total = parseInt(totalMatch[1]) + parseInt(newMatch[1]);
        last.title = `Pushed ${total} commits to ${last.repo}`;
      }
    } else {
      deduped.push({ ...item });
    }
  }

  // Collect unique repos
  const repos = [...new Set(deduped.map((d) => d.repo))];

  const output = {
    generated: new Date().toISOString(),
    user: GITHUB_USER,
    totalEvents: deduped.length,
    repos,
    feed: deduped,
  };

  writeFileSync(OUTPUT_PATH, JSON.stringify(output, null, 2));
  console.log(`✓ GitHub activity synced: ${deduped.length} events across ${repos.length} repos`);
}

main();
