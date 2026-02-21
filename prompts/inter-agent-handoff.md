# Inter-Agent Handoff

When multiple agents (or prompts) work in sequence, use a clear output format and handoff structure so the next agent knows what to do.

## Output format (each agent)

1. **Deliverable** — The actual artifact (spec, code, list, etc.).
2. **Summary** — 2–3 sentences of what was done.
3. **Handoff** — Explicit instructions for the next agent: what to do, what to use, what to avoid.

## Handoff structure

- **To:** [Role or agent name]
- **Context:** [What was just done; link or paste key output]
- **Task:** [Next task in one sentence]
- **Constraints:** [Anything the next agent must respect]
- **No cross-role work:** Remind the next agent to stay in scope (e.g. "Do not change backend; only implement the frontend as specified.")

## Example (Architect → Backend)

```
DELIVERABLE:
- API spec: POST /cart, GET /cart, DELETE /cart/:id. Request/response shapes in the doc below.
- Folder structure: /api/cart.ts, /api/products.ts.

SUMMARY:
Defined cart and product API boundaries. Cart is session-scoped; product list is read-only.

HANDOFF:
To: Backend Agent
Context: Use the API spec above. Folder structure is in repo under /docs/api-spec.md.
Task: Implement the three cart endpoints and one GET /products endpoint. Use the existing auth middleware for session.
Constraints: Do not add new endpoints. Do not change the request/response shapes.
No cross-role work: Do not implement frontend or database migrations; only API handlers.
```

## Rules

- No cross-role interference: each handoff states what the next agent must not do.
- Reference concrete artifacts (file paths, doc names) so the next agent has a single source of truth.
- Keep handoffs short; the next agent can ask for clarification if needed.

Use this template in Day 17 when you create the inter-agent communication prompt.
