# Day 5 – Exercise

## Reference

Use the debug pattern: [../../prompts/debug-pattern.md](../../prompts/debug-pattern.md).

## Step 1: Break something

In [../../apps/blog](../../apps/blog), introduce a small bug on purpose. Examples:

- Pass the wrong prop to the post view (e.g. `postId` instead of `post`), or
- Misspell a key in the mock data so a field is undefined, or
- Break the route so the post view never receives the selected post.

Reproduce the bug: note the exact steps and the error message or wrong behavior.

## Step 2: Fix using the debug pattern

Write a prompt that follows the pattern:

1. **Analyze:** Describe what’s wrong (expected vs actual, error message, steps to reproduce).
2. **List possible causes:** Ask the AI to list 2–4 plausible causes (one line each).
3. **Identify most likely:** Ask which is most likely and why.
4. **Suggest minimal fix:** Ask for the smallest code change that fixes it—no refactors or new features.

Example (adapt to your bug):

"My blog app is broken: when I click a post title, [X happens]. Error: [paste]. Steps: 1) … 2) …  
1. Analyze the issue.  
2. List 2–4 possible causes (one line each).  
3. Which cause is most likely? Why?  
4. Suggest the minimal code change to fix it. No other refactors or new features."

Apply the fix and verify.

## Step 3: Reflect

Did the structured prompt lead to a small, targeted fix instead of a big rewrite?
