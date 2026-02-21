# Anti-Overengineering

Use these constraints whenever you want minimal, scoped output from the AI.

## Phrases to include in prompts

- **"Do NOT add extra features."** — Only what was asked.
- **"Keep implementation minimal."** — No "nice to have" or future-proofing unless you asked.
- **"No abstraction unless required."** — No generic services, base classes, or patterns "for later."
- **"One [X] only."** — e.g. "One component only," "One API route only."

## What to avoid (tell the AI explicitly if needed)

- Unnecessary services or layers (e.g. a "TodoService" for three functions).
- Over-modularization (e.g. one file per tiny helper).
- Duplicate patterns (e.g. the same boilerplate in every file).
- "We might need it later" — only build what the current task needs.

## Example prompt (e.g. e-commerce landing)

```
Build a simple e-commerce landing page: product list and cart (local state only).

CONSTRAINTS:
- Do NOT add extra features (no search, no filters, no wishlist).
- Keep implementation minimal. No backend, no API.
- No abstraction unless required: no generic "product service" unless we need it for this page.
- Clean folder structure: one page, one cart component, one product list component. No more.
```

Use this template (or its bullets) in Day 4 and Day 7, and whenever you see the AI adding scope.
