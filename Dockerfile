# Multi-stage Dockerfile for Next.js (Node 24.21.0 LTS, pnpm, standalone runtime)

# Base settings shared across stages
FROM node:26.12.1-alpine AS base
WORKDIR /app
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PNPM_HOME=/pnpm
ENV PATH="$PNPM_HOME:$PATH"
# Some Next.js deps on Alpine require this for libc compatibility
RUN apk add --no-cache libc6-compat
# Use corepack to manage pnpm safely
RUN npm install --global --allow-scripts=pnpm pnpm@12.15.0

# Install dependencies (separate layer for better caching)
FROM base AS deps
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile --prod=false

# Build stage
FROM base AS build
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm run build

# Production runtime using Next.js standalone output
FROM node:26.12.1-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000
RUN apk add --no-cache libc6-compat \
  && addgroup -S nodejs && adduser -S nextjs -G nodejs

# Copy necessary build artifacts
COPY --from=build /app/public ./public
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static

# Use non-root user
USER nextjs

EXPOSE 3000
CMD ["node", "server.js"]
