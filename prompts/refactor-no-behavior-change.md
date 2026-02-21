# Refactor Without Changing Behavior

Use when you want to clean up AI-generated (or existing) code without changing what it does.

## Instructions to give the AI

- **Refactor only.** Do not add features, fix bugs (unless you ask), or change APIs visible to the user.
- **Preserve behavior.** Inputs and outputs must stay the same; same UI, same responses.
- **Scope.** Specify what to refactor: "this file", "this module", "the auth layer", or "the whole app".
- **Goals.** Typical goals: remove duplication, simplify conditionals, rename for clarity, split long functions, align with project structure. List the goals explicitly.

## Example prompt

```
Refactor the blog app in [apps/blog] without changing behavior.

- Do not add or remove features. Do not change how the app looks or behaves to the user.
- Focus on: removing duplicate helper logic, simplifying component props, and aligning file names with the folder structure we defined.
- Output the changed files and a short list of what you refactored. Do not rewrite unrelated files.
```

## Rules

- Run tests or manual checks after refactors to confirm behavior is unchanged.
- If the AI suggests "improvements" that change behavior, reject them or ask for a second pass that only cleans structure and naming.
