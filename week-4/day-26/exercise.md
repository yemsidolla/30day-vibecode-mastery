# Day 26 – Exercise

## Context

Audit [../../apps/ecommerce](../../apps/ecommerce) for unnecessary complexity and refactor aggressively. Behavior stays; complexity goes down.

## Step 1: Complexity audit prompt

Prompt the AI (or do it yourself):

"Review the e-commerce app in `apps/ecommerce`. List all unnecessary complexity: (1) Over-abstraction (layers or indirection that don’t add value). (2) Duplicate or near-duplicate logic. (3) Unused code or dead paths. (4) Overly generic code (e.g. frameworks or patterns that are heavier than the problem needs). (5) Naming or structure that makes the codebase hard to follow. For each item, say where it is and what a simpler alternative would be. Do not implement yet—only the list."

Save the list (e.g. in `docs/complexity-audit.md`).

## Step 2: Prioritize and refactor

Pick the top 2–3 items that will have the most impact (e.g. remove a redundant layer, merge two similar modules, delete dead code). Refactor one at a time. After each change, run the app and confirm behavior.

Use the refactor template from [../../prompts/refactor-no-behavior-change.md](../../prompts/refactor-no-behavior-change.md) if you want the AI to suggest edits.

## Step 3: Re-run audit (optional)

After refactors, run the same audit again and see if the list shortened. Document what you removed in `docs/complexity-audit.md`.
