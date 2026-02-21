# Architecture First

Before writing or generating code, define the system in layers and then prompt per layer or per chunk.

## Layers (system thinking)

- **UI layer** — Pages, components, client state. What the user sees and interacts with.
- **API layer** — Endpoints, request/response shapes. What the frontend calls.
- **Data layer** — Persistence, schema, queries. Where data lives and how it’s accessed.
- **Infrastructure layer** — Hosting, env, secrets, containers. Where it runs.

## Workflow

1. **Draw (or describe) first.** ASCII diagram or bullet list: which layer does what, and how they connect. No code yet.
2. **Prompt for one layer at a time.** e.g. "Given this architecture, define the API layer: list endpoints and request/response for products and cart."
3. **Then implement.** Use chunking: one module or one endpoint at a time.

## Example (before adding auth)

```
Before writing any auth code:

1. Draw the flow: Login page → API (POST /login) → Session/token → Protected routes. Same for Register and Logout.
2. List endpoints: POST /register, POST /login, POST /logout, GET /me. Request/response for each.
3. Then implement: start with schema and one endpoint, then the next.
```

## When to use

- Day 8: Draw ASCII architecture for the whole app.
- Day 10: Auth flow design first, then code.
- Day 11: Endpoints and schemas first, then implementation.
- Any new feature: 5 minutes of "where does this live and what does it touch?" before prompting for code.
