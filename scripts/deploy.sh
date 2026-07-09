#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

npm run build

if [ ! -f dist/.nojekyll ]; then
  echo "Error: dist/.nojekyll missing — GitHub Pages will ignore _astro assets"
  exit 1
fi

cd dist
rm -rf .git
git init -b gh-pages
git remote add origin https://github.com/javimartosdev/javimartosdev.github.io.git
git add -A
git commit -m "deploy: update portfolio site"
git push -f origin gh-pages

echo "Deployed to https://javimartosdev.github.io"
