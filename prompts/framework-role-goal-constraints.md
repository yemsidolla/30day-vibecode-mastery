# Prompt Structure Framework

Use this structure for any prompt where you want controlled, scoped output.

## Sections

- **ROLE** — Who the AI is acting as (e.g. "Frontend developer using React").
- **GOAL** — One clear outcome (e.g. "Build a small landing page with hero and CTA").
- **CONSTRAINTS** — What NOT to do (e.g. "No backend, no extra pages, no animations").
- **CONTEXT** — Brief context if needed (e.g. "This is for a product launch").
- **OUTPUT FORMAT** — How you want the answer (e.g. "Single HTML file" or "React component only").

## Example prompt

```
ROLE: You are a frontend developer building a minimal landing page.

GOAL: Create a single-page landing with a hero section and one call-to-action button.

CONSTRAINTS:
- No backend or API calls.
- No extra pages or routes.
- Use only HTML and CSS (or one framework if specified).
- No animations or heavy dependencies.

CONTEXT: This is for a 30-day vibe coding exercise focused on scope control.

OUTPUT FORMAT: One file (or one component) with clear section comments. No README unless asked.
```

Adapt ROLE, GOAL, CONSTRAINTS, CONTEXT, and OUTPUT FORMAT for each task.
