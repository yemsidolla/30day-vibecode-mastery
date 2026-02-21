# Day 29 – Exercise

## Context

Extend [../../apps/ecommerce](../../apps/ecommerce) into a small SaaS-style product. Add: admin dashboard, order management, analytics, and optionally feature flags per user segment.

## Scope (chunk and prompt per area)

1. **Admin dashboard** — Protected route(s) for admin only. Dashboard page: list of orders, list of products (with simple edit?), toggle feature flags. Design first (who can access, what actions), then implement in chunks (backend role check, then UI).

2. **Order management** — If not already present: orders table, "place order" from cart, order history for the user. Admin: view all orders, optional status update. Design schema and API first, then implement.

3. **Analytics** — Minimal: e.g. total orders, revenue, top products (from DB). Expose via API; show on admin dashboard. No need for a separate analytics stack—queries and a simple summary view are enough.

4. **Feature flags per segment (optional)** — Extend the flag system so a flag can be "on for segment X" (e.g. by role or by user id list). Simple implementation: flag + segment column or a small mapping table. Toggle in admin. If time is short, document the design and do a minimal implementation.

## Rules

- Use architecture-first and chunking. One feature (or sub-feature) per prompt.
- Reuse your agent roles and handoff template if it helps (e.g. Architect → Backend → Frontend for each area).
- Run the production checklist and governance audit after adding features.

## Deliverable

Working e-commerce app with admin, orders, analytics, and (optionally) segment-level flags. Document what you added in `apps/ecommerce/docs/capstone.md` or the main README.
