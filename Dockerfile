# Étape 1 : build Astro
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --include=dev

COPY . .
RUN npm run build && ls -la dist

# Étape 2 : image finale pour preview
FROM node:20-alpine

WORKDIR /app

# Copie seulement les fichiers nécessaires pour preview
COPY --from=builder /app/package.json .
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

EXPOSE 4321

CMD ["npx", "astro", "preview", "--host"]
