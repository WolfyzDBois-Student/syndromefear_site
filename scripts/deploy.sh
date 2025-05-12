#!/bin/bash

echo "🚀 Build Astro site..."
npm run build

echo "🔄 Pushing to GitHub repository..."
git add .
git commit -m "🚀 Déploiement site à $(date '+%Y-%m-%d %H:%M:%S')"
git push origin main

echo "✅ Push terminé"
