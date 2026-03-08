#!/bin/bash
# Daily Learning Digest — runs at noon daily via launchd
# Syncs heatmap, generates activity entry, pushes to GitHub
set -e
cd "$(dirname "$0")/.."

export PATH="/usr/local/bin:/usr/bin:/bin:$HOME/.nvm/versions/node/v22.17.1/bin:$PATH"
export GH_CONFIG_DIR="$HOME/gh-config"

DATE=$(date +%Y-%m-%d)
LOG="$HOME/.claude-daily-digest.log"

echo "[$DATE] Starting daily digest..." >> "$LOG"

# 1. Count recent skill files modified in last 24h
SKILL_DIR="$HOME/.claude/projects/-Users-roddy/memory/skills"
SKILLS_MODIFIED=$(find "$SKILL_DIR" -name "*.md" -mtime -1 2>/dev/null | wc -l | tr -d ' ')

# 2. Count git commits in last 24h
COMMITS=$(git log --since="24 hours ago" --oneline 2>/dev/null | wc -l | tr -d ' ')

# 3. Sync heatmap
npx tsx scripts/sync-obsidian.ts >> "$LOG" 2>&1

# 4. Check if there are meaningful changes to report
if [[ "$SKILLS_MODIFIED" -gt 0 ]] || [[ "$COMMITS" -gt 0 ]]; then
  echo "[$DATE] Skills modified: $SKILLS_MODIFIED, Commits: $COMMITS" >> "$LOG"

  # 5. Build
  npm run build >> "$LOG" 2>&1

  # 6. Commit and push if there are changes
  if [[ -n $(git status --porcelain) ]]; then
    git add -A
    git commit -m "Daily digest sync: $DATE

Heatmap refreshed. Skills: $SKILLS_MODIFIED modified, Commits: $COMMITS.

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>" >> "$LOG" 2>&1
    git push origin main >> "$LOG" 2>&1
    echo "[$DATE] Pushed to GitHub — auto-deploy triggered" >> "$LOG"
  else
    echo "[$DATE] No changes to push" >> "$LOG"
  fi
else
  echo "[$DATE] No new activity in last 24h, skipping push" >> "$LOG"
fi

echo "[$DATE] Done." >> "$LOG"
