#!/bin/bash

echo "🐳 Build et lancement de Docker..."
docker compose down
docker compose build --no-cache
docker compose up
