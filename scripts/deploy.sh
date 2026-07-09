#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

npm run build

cd dist
if [ ! -d .git ]; then
  git init -b gh-pages
  git remote add origin https://github.com/javimartosdev/javimartosdev.github.io.git
fi

git add -A
git commit -m "deploy: update portfolio site" || true
git push -f origin gh-pages

echo "Deployed to https://javimartosdev.github.io"
