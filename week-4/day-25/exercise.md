# Day 25 – Exercise

## Context

Create a **production readiness checklist** and apply it to [../../apps/ecommerce](../../apps/ecommerce).

## Checklist (create and save)

Create `docs/production-readiness-checklist.md` (or similar) with at least:

- [ ] **Logging:** Structured logs in place; errors logged with context. (See Day 19.)
- [ ] **Feature flags:** Working; no broken toggles. (See Day 13.)
- [ ] **Errors:** Handled at API and UI; no uncaught exceptions or blank screens; user sees a clear message where appropriate.
- [ ] **No debug leftovers:** No `console.log` in production paths, no TODOs that block launch, no test credentials in code.
- [ ] **Clean folder structure:** Matches architecture; no orphan or duplicate files. (Governance Agent from Day 18 can help.)
- [ ] **Secrets:** All from env; `.env` not committed; `.env.example` documents required vars. (See Day 20.)
- [ ] **Security:** Input validation and access control in place. (See Day 23.)

Add any project-specific items (e.g. "DB migrations run cleanly," "Health check endpoint exists").

## Step 2: Run the checklist

Go through each item for `apps/ecommerce/`. Mark done or "gap." For gaps, either fix now or add a short "before production" todo.

## Step 3: Document status

At the top of the checklist, add: "Last run: [date]. Status: Pass / Gaps: [list]." So you can re-run it before each release.
