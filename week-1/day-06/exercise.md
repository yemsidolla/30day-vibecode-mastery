# Day 6 – Exercise

## Reference

Use the refactor template: [../../prompts/refactor-no-behavior-change.md](../../prompts/refactor-no-behavior-change.md).

## Step 1: Choose scope

Pick what to refactor in [../../apps/blog](../../apps/blog): one module, the whole app, or a few files that feel messy (naming, duplication, long functions).

## Step 2: Prompt for refactor (no behavior change)

Use the template from `refactor-no-behavior-change.md`. Example:

"Refactor [the blog app / the post list module / files X and Y] without changing behavior. Do not add or remove features. Do not change how the app looks or behaves to the user. Focus on: [e.g. removing duplicate helpers, simplifying props, clearer file names]. Output the changed files and a short list of what you refactored. Do not rewrite unrelated files."

## Step 3: Apply and verify

Apply the suggested changes. Run the app and confirm:

- Same pages, same data, same interactions.
- No new bugs.

If the AI suggested "improvements" that change behavior, reject those and ask for a second pass that only cleans structure and naming.
