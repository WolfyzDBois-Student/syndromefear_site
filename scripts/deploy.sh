#!/bin/bash

echo "🚀 Build Astro site..."
npm run build

# Initialise Git LFS si pas encore fait
if [ ! -d ".git/lfs" ]; then
  echo "🔁 Initializing Git LFS..."
  git lfs install
fi

# Cherche les fichiers >50MB et les tracke avec LFS
echo "📦 Checking for large files (>50MB)..."
find . -type f -size +50M ! -path "./.git/*" | while read -r file; do
  echo "📂 Tracking large file with Git LFS: $file"
  git lfs track "$file"
done

# Ajoute .gitattributes si modifié
git add .gitattributes

echo "🔄 Pushing to GitHub repository..."
git add .
git commit -m "🚀 Déploiement site à $(date '+%Y-%m-%d %H:%M:%S')" || echo "✅ Rien à valider (commit déjà à jour)"
git push origin main

echo "✅ Push terminé"
