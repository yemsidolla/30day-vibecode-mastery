# 30-Day Vibe Coding Dashboard — Docker build for VPS
# Multi-stage: build then run standalone Next.js server

FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat python3 make g++
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN mkdir -p public && npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000

# Copy standalone output (includes minimal node_modules + server)
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Default DB path; override with DB_PATH when using a volume
ENV DB_PATH=/data/progress.db
RUN mkdir -p /data && chown -R node:node /data

USER node
CMD ["node", "server.js"]
