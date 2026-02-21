# Day 18 – Exercise

## Context

The Governance Agent does not implement features. It reviews and enforces: structure, no duplication, architecture rules, clean workspace.

## Step 1: Define the Governance Agent role

Add to your agent roles (e.g. in `docs/agent-roles.md`):

- **Governance Agent** — Scope: repo structure, duplication, architecture compliance, cleanup. Allowed: list issues, suggest file moves/renames, suggest refactors, output checklist. Constraints: no implementation; only review and recommendations.

## Step 2: Write the governance prompt

Create a prompt that, when run, acts as the Governance Agent. It should:

1. **Review structure** — Does the folder layout match the architecture (e.g. UI / API / Data)? List violations.
2. **Prevent duplication** — Are there repeated patterns or logic that should be centralized? List them.
3. **Enforce architecture** — Are there files or code in the wrong layer (e.g. DB logic in UI)? List them.
4. **Clean workspace** — Unused files, dead code, outdated comments? List them.

Output format: bullet lists per category, plus a short "Recommended actions" (prioritized). No code changes—only the report.

Save this as `docs/governance-agent-prompt.md` or `prompts/governance-agent.md`.

## Step 3: Run it once

Run the Governance Agent prompt against `apps/ecommerce/` (paste structure or key file paths if needed). Use the output as a backlog for future refactors (you don’t have to fix everything today).
