# Day 20 – Exercise

## Context

Harden [../../apps/ecommerce](../../apps/ecommerce) for environment and secrets. No hardcoded secrets; dev vs prod awareness.

## Step 1: Environment variables

- List what should be configurable: e.g. `PORT`, `DATABASE_URL`, `JWT_SECRET` or `SESSION_SECRET`, `NODE_ENV` (dev/prod).
- Ensure the app reads these from `process.env` (or a small config module that reads env). Remove any hardcoded secrets from the codebase.
- Add a `.env.example` (no real values) listing required variables and a one-line description each. Add `.env` to `.gitignore` if not already.

## Step 2: Dev vs Prod

- Document (or implement) differences: e.g. in dev, verbose logs; in prod, no stack traces to client, HTTPS only. Keep it minimal—even a short `docs/infra.md` that says "In prod we must: set NODE_ENV=production, use real DB URL, set secrets from env" is enough.

## Step 3: Container awareness

- Add a short section to your docs: "If we run in Docker or a PaaS: (1) All config from env. (2) Listen on PORT from env. (3) No file-system assumptions for secrets. (4) Health check endpoint optional." You don’t have to build a container today—just document what the app assumes so it’s container-ready later.

Save in `docs/infra.md` or `docs/environment.md`.
