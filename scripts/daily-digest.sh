#!/bin/bash
# Daily Learning Digest — runs at noon daily + on boot via launchd
# Delegates JSON generation to TypeScript for safe serialization.
set -euo pipefail
cd "$(dirname "$0")/.."

# Dynamically resolve Node path — avoids hardcoding a specific nvm version
if [ -d "${HOME}/.nvm" ]; then
  export NVM_DIR="${HOME}/.nvm"
  # shellcheck source=/dev/null
  [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
fi
export PATH="/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:$PATH"
export GH_CONFIG_DIR="${HOME}/gh-config"

DATE=$(date +%Y-%m-%d)
TIME=$(date +%H:%M)
LOG="${HOME}/.claude-daily-digest.log"

# --- Dependency check ---
for cmd in git npm npx; do
  if ! command -v "$cmd" &>/dev/null; then
    echo "[$DATE $TIME] ERROR: '$cmd' not found" >> "$LOG"
    exit 1
  fi
done

echo "" >> "$LOG"
echo "=== [$DATE $TIME] Daily Digest Starting ===" >> "$LOG"

# --- Branch guard ---
BRANCH=$(git branch --show-current 2>/dev/null || echo "unknown")
if [[ "$BRANCH" != "main" ]]; then
  echo "  SKIP: On branch '$BRANCH', not 'main'. Aborting auto-digest." >> "$LOG"
  exit 0
fi

# --- Error handler ---
trap 'echo "=== [$DATE $TIME] FAILED at line $LINENO ===" >> "$LOG"' ERR

# 1. Generate digest JSON (safe TS serialization)
echo "  Generating digest..." >> "$LOG"
npx tsx scripts/generate-digest.ts >> "$LOG" 2>&1

# 2. Build
echo "  Building..." >> "$LOG"
npm run build >> "$LOG" 2>&1

# 3. Commit + push if changes exist
PUSHED="No"
if [[ -n $(git status --porcelain) ]]; then
  git add -A
  git commit -m "$(cat <<'EOF'
Daily digest update

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>
EOF
)" >> "$LOG" 2>&1
  git push origin main >> "$LOG" 2>&1
  PUSHED="Yes"
  echo "  Pushed to GitHub — auto-deploy triggered" >> "$LOG"
else
  echo "  No changes to push" >> "$LOG"
fi

# 4. macOS notification
NOTIF_MSG="Digest: $DATE | Pushed: $PUSHED"
if command -v terminal-notifier &>/dev/null; then
  terminal-notifier \
    -title "Claude Daily Digest" \
    -subtitle "$DATE $TIME" \
    -message "$NOTIF_MSG" \
    -sound Glass \
    -open "https://roddy95o.com#digest" \
    2>/dev/null
else
  osascript -e "display notification \"$NOTIF_MSG\" with title \"Claude Daily Digest\" subtitle \"$DATE\" sound name \"Glass\"" 2>/dev/null || true
fi

echo "=== [$DATE $TIME] Done ===" >> "$LOG"
