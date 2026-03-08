#!/bin/bash
# Full sync + deploy pipeline
# Usage: ./scripts/deploy.sh [commit message]

set -e
cd "$(dirname "$0")/.."

echo "→ Syncing heatmap data..."
npx tsx scripts/sync-obsidian.ts

echo "→ Building..."
npm run build

# Check if there are changes to commit
if [[ -n $(git status --porcelain) ]]; then
  git add -A
  MSG="${1:-Auto-sync: heatmap data + build}"
  git commit -m "$MSG

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
  echo "→ Pushing to GitHub..."
  git push origin main
fi

echo "→ Deploying to Vercel..."
npx vercel --prod --yes

echo "✓ Done! Live at https://roddy95o.com"
