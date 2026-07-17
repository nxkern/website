FROM node:26-alpine AS builder
RUN apk add --no-cache wget
RUN wget -qO- https://get.pnpm.io/install.sh | ENV="$HOME/.shrc" SHELL="$(which sh)" sh -
ENV PNPM_HOME="/root/.local/share/pnpm"
ENV PATH="$PNPM_HOME/bin:$PATH"
WORKDIR /app
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
run pnpm i --frozen-lockfile

COPY . . 
RUN pnpm build


FROM node:20-alpine AS runnner
WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/.output ./.output
COPY --from=builder /app/.nuxt ./.nuxt

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
