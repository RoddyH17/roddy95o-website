#!/bin/bash
# Full sync + deploy pipeline
# Usage: ./scripts/deploy.sh [commit message]
#   --dry-run   Show what would happen without executing
#   --no-push   Build and commit but don't push or deploy

set -euo pipefail

cd "$(dirname "$0")/.."

# --- Flags ---
DRY_RUN=false
NO_PUSH=false
MSG=""
for arg in "$@"; do
  case "$arg" in
    --dry-run) DRY_RUN=true ;;
    --no-push) NO_PUSH=true ;;
    *) MSG="$arg" ;;
  esac
done
MSG="${MSG:-Auto-sync: heatmap data + build}"

# --- Dependency check ---
for cmd in git npm npx; do
  if ! command -v "$cmd" &>/dev/null; then
    echo "ERROR: '$cmd' not found in PATH" >&2
    exit 1
  fi
done

# --- Branch guard ---
BRANCH=$(git branch --show-current)
if [[ "$BRANCH" != "main" ]]; then
  if [[ "$DRY_RUN" == "true" ]]; then
    echo "[dry-run] On branch '$BRANCH', would prompt for confirmation"
  elif [[ -t 0 ]]; then
    echo "WARNING: On branch '$BRANCH', not 'main'. Continue? (y/N)"
    read -r CONFIRM
    [[ "$CONFIRM" =~ ^[yY]$ ]] || exit 0
  else
    echo "ERROR: On branch '$BRANCH', not 'main'. Use main or add --dry-run." >&2
    exit 1
  fi
fi

# --- Error handler ---
trap 'echo "ERROR: Deploy failed at line $LINENO" >&2' ERR

echo "→ Syncing heatmap data..."
if [[ "$DRY_RUN" == "true" ]]; then
  echo "[dry-run] Would run: npx tsx scripts/sync-obsidian.ts"
else
  npx tsx scripts/sync-obsidian.ts
fi

echo "→ Building..."
if [[ "$DRY_RUN" == "true" ]]; then
  echo "[dry-run] Would run: npm run build"
else
  npm run build
fi

# Check if there are changes to commit
if [[ -n $(git status --porcelain) ]]; then
  if [[ "$DRY_RUN" == "true" ]]; then
    echo "[dry-run] Would commit: $MSG"
    git status --short
  else
    git add -A
    git commit -m "$MSG

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
  fi

  if [[ "$NO_PUSH" == "false" && "$DRY_RUN" == "false" ]]; then
    echo "→ Pushing to GitHub..."
    git push origin "$BRANCH"
    echo "→ Vercel will auto-deploy via Git Integration"
  else
    echo "[skipped] Push and deploy"
  fi
else
  echo "→ No changes to commit"
fi

echo "✓ Done!"
