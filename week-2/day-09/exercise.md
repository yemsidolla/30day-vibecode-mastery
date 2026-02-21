# Day 9 – Exercise

## Context

You have [../../apps/ecommerce](../../apps/ecommerce) and the architecture from Day 8. Prepare the repo for backend, auth, and DB by cleaning structure and naming.

## Step 1: Define conventions

Decide (or prompt the AI to propose) simple rules, e.g.:

- Frontend: `src/` or `client/` with `components/`, `pages/`, `api/` (client-side API calls).
- Backend: `server/` or `api/` with routes by domain (e.g. `auth`, `products`, `cart`).
- Shared: `shared/` for types/schemas used by both if needed.
- Config: one place for env and config (e.g. `config.js` or `.env.example`).
- Naming: kebab-case for files, PascalCase for components, camelCase for functions.

## Step 2: Restructure e-commerce

Restructure `apps/ecommerce/` to match. If the app is still frontend-only, at least create placeholder folders for the future API and docs, e.g.:

- `apps/ecommerce/client/` (or `src/`) — existing UI.
- `apps/ecommerce/server/` (or `api/`) — placeholder for Day 11.
- `apps/ecommerce/docs/` — architecture from Day 8.

Prompt example: "Restructure the project in `apps/ecommerce` to match this layout: [paste your conventions]. Do not change behavior. Only move/rename files and add missing folders. Output the new folder tree and list of file moves."

## Step 3: Optional — blog

If you want, apply similar folder cleanup to `apps/blog/` so it follows one clear convention.

## Step 4: Document

Add a short `apps/ecommerce/README.md` (or `docs/structure.md`) that describes the folder layout and naming so future prompts stay consistent.
