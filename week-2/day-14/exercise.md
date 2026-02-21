# Day 14 – Exercise

## Context

You have [../../apps/ecommerce](../../apps/ecommerce) with: frontend, backend API, auth, database, feature flags. Today you refactor for clarity and boundaries, not new features.

## Step 1: Audit

Review the codebase. Note:

- **Boundaries:** Is API logic only in the server? Is UI only in the client? Any business logic duplicated between frontend and backend?
- **Separation:** Are auth, products, cart, and flags each in their own modules/routes with clear entry points?
- **Duplication:** Repeated validation, formatting, or data-shaping logic that could live in one place?

## Step 2: Refactor with clear goals

Use the refactor template from [../../prompts/refactor-no-behavior-change.md](../../prompts/refactor-no-behavior-change.md). Prompt the AI (or do it yourself):

"Refactor the e-commerce app in `apps/ecommerce` for clean boundaries and separation. Do not change behavior or add features. Focus on: (1) Move any duplicated logic into a single place (shared types, shared validation, or server-only). (2) Ensure API layer does not contain UI logic and frontend does not contain DB or auth secrets. (3) Group routes/handlers by domain (auth, products, cart, flags). Output the list of changes and affected files. Minimal edits—only what’s needed for these goals."

## Step 3: Verify

Run the app and test: auth, products, cart, feature flag. Behavior should be unchanged.
