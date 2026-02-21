# Day 4 – Exercise

## Reference

Use the anti-overengineering guide: [../../prompts/anti-overengineering.md](../../prompts/anti-overengineering.md).

## Step 1: Audit the blog

Look at [../../apps/blog](../../apps/blog). Note:

- Are there services or layers that only wrap one or two calls?
- Are there many small files that could be merged without losing clarity?
- Is the same pattern repeated in several places?

## Step 2: Refactor with constraints

Ask the AI to refactor the blog with explicit constraints. Example prompt:

"Refactor the blog app in `apps/blog` to reduce overengineering. Do NOT add any new features. Keep behavior identical. Focus on: (1) Remove unnecessary services or abstraction layers—inline or simplify. (2) Reduce over-modularization—merge tiny files where it makes sense. (3) Remove duplicate patterns—deduplicate repeated logic. Output the changed files and a short list of what you removed or merged. Do not rewrite everything; only touch what’s needed for these three goals."

Use the phrases from `prompts/anti-overengineering.md` as needed (e.g. "No abstraction unless required").

## Step 3: Verify

Run or open the app. Confirm it still works the same. Fewer files and less indirection is success.
