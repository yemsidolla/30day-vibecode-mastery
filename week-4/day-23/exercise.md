# Day 23 – Exercise

## Context

Harden [../../apps/ecommerce](../../apps/ecommerce): validation, access control, and optional rate limiting.

## Step 1: Input validation

- For every API that accepts body or params (login, register, cart add, coupon apply, etc.): validate types, required fields, and ranges (e.g. quantity > 0, code length).
- Reject invalid input with 400 and a clear message. Do not pass invalid data to DB or business logic.
- Prompt if needed: "Add input validation to all e-commerce API endpoints. Validate types and required fields. Return 400 with a short message on validation failure. List the validations you added."

## Step 2: Role-based access

- Identify who can do what: e.g. any user can add to cart; only authenticated users can see their cart; only admin (if you have it) can create products or toggle feature flags.
- Enforce in middleware or route handlers: e.g. "this route requires auth," "this route requires admin." Return 401/403 when not allowed.
- If you don’t have roles yet, at least protect cart and profile so only the logged-in user can access their own data.

## Step 3: Rate limiting (basic)

- Add simple rate limiting to auth endpoints (login, register) and optionally to cart or coupon apply: e.g. max N requests per minute per IP (or per user).
- Use a small in-memory store or a library; document the limit in `docs/` or code comments.
- Return 429 when exceeded.

## Step 4: Document

Short note in `docs/security.md`: what you validate, what access rules you enforce, and what rate limits you added.
