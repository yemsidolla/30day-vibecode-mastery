# Day 10 – Exercise

## Reference

[../../prompts/architecture-first.md](../../prompts/architecture-first.md) — design flow before code.

## Step 1: Design the auth flow (no code)

Prompt the AI (or write yourself):

"Design the authentication flow for the e-commerce app. Include: (1) Register: form fields, validation, where credentials are sent, response. (2) Login: same. (3) Session: how is the session stored (cookie, token in storage), and how is it sent on each request? (4) Logout: what is cleared? (5) Protected state: how does the frontend know the user is logged in? Output a short flow (bullet list or diagram). No code yet."

Review and adjust. Decide: JWT in cookie/localStorage, or server-side session IDs. Decide: which routes/pages require auth (e.g. cart might be per-user after login).

## Step 2: Define endpoints and contracts

One prompt: "Given that auth flow, list the API endpoints: e.g. POST /register, POST /login, POST /logout, GET /me. For each: request body/params and response shape. No implementation yet."

## Step 3: Implement in chunks

- Chunk 1: Backend auth (register, login, session creation, logout, get current user). Use the folder structure from Day 9.
- Chunk 2: Frontend: login and register pages, form submission, store token/session, redirect.
- Chunk 3: Use session on requests (e.g. attach token or cookie) and show "logged in" state in UI.

Work in [../../apps/ecommerce](../../apps/ecommerce). Persist the flow and endpoint doc in `apps/ecommerce/docs/auth.md` (or similar).
