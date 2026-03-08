#!/bin/bash
# Daily Learning Digest — runs at noon daily + on boot via launchd
# 1. Generates digest.json for website  2. Syncs heatmap  3. Pushes to GitHub  4. macOS notification
set -e
cd "$(dirname "$0")/.."

export PATH="/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:$HOME/.nvm/versions/node/v22.17.1/bin:$PATH"
export GH_CONFIG_DIR="$HOME/gh-config"

DATE=$(date +%Y-%m-%d)
TIME=$(date +%H:%M)
LOG="$HOME/.claude-daily-digest.log"

echo "" >> "$LOG"
echo "=== [$DATE $TIME] Daily Digest Starting ===" >> "$LOG"

# 1. Scan skill files modified in last 24h
SKILL_DIR="$HOME/.claude/projects/-Users-roddy/memory/skills"
SKILLS_MODIFIED=$(find "$SKILL_DIR" -name "*.md" -mtime -1 2>/dev/null | wc -l | tr -d ' ')
SKILL_FILES_JSON=$(find "$SKILL_DIR" -name "*.md" -mtime -1 2>/dev/null | while read f; do
  echo "\"$(echo "$f" | sed "s|$SKILL_DIR/||")\""
done | sort | paste -sd "," -)
SKILL_FILES_JSON="[${SKILL_FILES_JSON}]"

# 2. Git commits in last 24h
COMMITS=$(git log --since="24 hours ago" --oneline 2>/dev/null | wc -l | tr -d ' ')
COMMIT_MSGS_JSON=$(git log --since="24 hours ago" --oneline --format="%s" 2>/dev/null | head -10 | while read line; do
  echo "\"$(echo "$line" | sed 's/"/\\"/g')\""
done | paste -sd "," -)
COMMIT_MSGS_JSON="[${COMMIT_MSGS_JSON:-}]"

# 3. Sync heatmap
SYNC_OUTPUT=$(npx tsx scripts/sync-obsidian.ts 2>&1)
echo "  Heatmap: $SYNC_OUTPUT" >> "$LOG"

# Extract heatmap stats
ACTIVE_DAYS=$(echo "$SYNC_OUTPUT" | grep -oE '[0-9]+ active' | grep -oE '[0-9]+' || echo "0")
OBS_FILES=$(echo "$SYNC_OUTPUT" | grep -oE 'Obsidian: [0-9]+' | grep -oE '[0-9]+' || echo "0")
CLAUDE_FILES=$(echo "$SYNC_OUTPUT" | grep -oE 'Claude: [0-9]+' | grep -oE '[0-9]+' || echo "0")
GIT_DAYS=$(echo "$SYNC_OUTPUT" | grep -oE 'Git: [0-9]+' | grep -oE '[0-9]+' || echo "0")

# 4. Generate highlights
HIGHLIGHTS=""
[[ "$SKILLS_MODIFIED" -gt 0 ]] && HIGHLIGHTS="$HIGHLIGHTS\"Updated $SKILLS_MODIFIED skill files across the knowledge base\","
[[ "$COMMITS" -gt 3 ]] && HIGHLIGHTS="$HIGHLIGHTS\"Made $COMMITS commits — active development day\","
[[ "$COMMITS" -gt 0 && "$COMMITS" -le 3 ]] && HIGHLIGHTS="$HIGHLIGHTS\"$COMMITS commit(s) pushed to GitHub\","
echo "$SKILL_FILES_JSON" | grep -q "finance" && HIGHLIGHTS="$HIGHLIGHTS\"Finance skill library updated\","
echo "$SKILL_FILES_JSON" | grep -q "poker" && HIGHLIGHTS="$HIGHLIGHTS\"Poker agent knowledge expanded\","
echo "$SKILL_FILES_JSON" | grep -q "frontend" && HIGHLIGHTS="$HIGHLIGHTS\"Frontend/UI skills refined\","
echo "$SKILL_FILES_JSON" | grep -q "devops" && HIGHLIGHTS="$HIGHLIGHTS\"DevOps pipeline knowledge updated\","
HIGHLIGHTS="${HIGHLIGHTS%,}"
[[ -z "$HIGHLIGHTS" ]] && HIGHLIGHTS="\"No significant changes in last 24h\""

# 5. Write digest.json for website
cat > src/data/digest.json <<JSONEOF
{
  "generated": "$(date -u +%Y-%m-%dT%H:%M:%S.000Z)",
  "date": "$DATE",
  "skills": {
    "modified": $SKILLS_MODIFIED,
    "files": $SKILL_FILES_JSON
  },
  "commits": {
    "count": $COMMITS,
    "recent": $COMMIT_MSGS_JSON
  },
  "heatmap": {
    "activeDays": ${ACTIVE_DAYS:-0},
    "obsidianFiles": ${OBS_FILES:-0},
    "claudeFiles": ${CLAUDE_FILES:-0},
    "gitDays": ${GIT_DAYS:-0}
  },
  "highlights": [$HIGHLIGHTS]
}
JSONEOF

echo "  Digest JSON written (skills: $SKILLS_MODIFIED, commits: $COMMITS)" >> "$LOG"

# 6. Build + push
PUSHED="No"
npm run build >> "$LOG" 2>&1

if [[ -n $(git status --porcelain) ]]; then
  git add -A
  git commit -m "Daily digest: $DATE

Skills: $SKILLS_MODIFIED modified | Commits: $COMMITS | Active days: ${ACTIVE_DAYS:-0}

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>" >> "$LOG" 2>&1
  git push origin main >> "$LOG" 2>&1
  PUSHED="Yes"
  echo "  Pushed to GitHub — auto-deploy triggered" >> "$LOG"
else
  echo "  No changes to push" >> "$LOG"
fi

# 7. macOS notification
NOTIF_MSG="Skills: ${SKILLS_MODIFIED} | Commits: ${COMMITS} | Pushed: ${PUSHED}"
if command -v terminal-notifier &>/dev/null; then
  terminal-notifier \
    -title "Claude Daily Digest" \
    -subtitle "$DATE $TIME" \
    -message "$NOTIF_MSG" \
    -sound Glass \
    -open "https://roddy95o.com#digest" \
    2>/dev/null
  echo "  Notification: sent" >> "$LOG"
else
  osascript -e "display notification \"$NOTIF_MSG\" with title \"Claude Daily Digest\" subtitle \"$DATE\" sound name \"Glass\"" 2>/dev/null || true
fi

echo "=== [$DATE $TIME] Done ===" >> "$LOG"
