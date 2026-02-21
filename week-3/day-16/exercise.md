# Day 16 – Exercise

## Reference

[../../prompts/agent-roles.md](../../prompts/agent-roles.md) — template and example.

## Step 1: Define each role

For each role, write (or prompt the AI to fill):

- **CTO Agent** — Scope: priorities, scope, tradeoffs. Allowed: decisions, specs. Constraints: no direct code.
- **Architect Agent** — Scope: structure, boundaries, tech choices. Allowed: architecture, folder structure, API design. Constraints: no implementation.
- **Backend Agent** — Scope: API, data, server logic. Allowed: endpoints, DB, auth backend. Constraints: no UI or styling.
- **Frontend Agent** — Scope: UI, components, client state. Allowed: pages, components, API calls. Constraints: no backend or DB code.
- **QA Agent** — Scope: correctness, edge cases. Allowed: test cases, validation, bug reports. Constraints: no feature code.
- **DevOps Agent** — Scope: deploy, env, monitoring. Allowed: deploy steps, env vars, logging. Constraints: no app logic.

Use the prompt snippet from `agent-roles.md`: "You are the [ROLE]. Your scope is [SCOPE]. You may: [ALLOWED]. You must not: [CONSTRAINTS]."

## Step 2: Save the role definitions

Create `docs/agent-roles.md` in the repo root (or in `apps/ecommerce/docs/`) with all six definitions. You will use these in Day 17 (handoffs) and Day 21 (simulation).
