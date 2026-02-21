# Debug Prompt Pattern

Use this structure when something is broken and you want a focused fix.

## Steps (in the prompt)

1. **Analyze issue** — Describe what’s wrong: expected vs actual, error message, or steps to reproduce.
2. **List possible causes** — Ask the AI to list 2–4 plausible causes (brief).
3. **Identify most likely** — Ask which one is most likely and why.
4. **Suggest minimal fix** — Ask for the smallest change that fixes it (no refactors or extra features).

## Example prompt

```
My blog app is broken: when I click a post title, the page goes blank and the console shows "Cannot read property 'id' of undefined."

1. Analyze: The error happens on click; the single-post view is trying to read an id from something that’s undefined.
2. List 2–4 possible causes (one line each).
3. Which cause is most likely? Why?
4. Suggest the minimal code change to fix it. No other refactors or new features.
```

## Rules

- Always include enough context (what you did, what you see, error if any).
- Insist on "minimal fix" so the AI doesn’t rewrite large sections.
- If the first fix doesn’t work, paste the new behavior and ask again using the same pattern.
