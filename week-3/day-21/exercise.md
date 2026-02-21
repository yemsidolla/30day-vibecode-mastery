# Day 21 – Exercise

## Context

Simulate an AI startup shipping one feature: **"Add discount coupon system."** Use the roles from Day 16 and the handoff template from Day 17. You can run each step as a separate prompt and paste handoffs.

Optional: create `apps/agent-sim/` (or `docs/simulation/`) to store prompts and outputs for this exercise.

## Workflow

1. **CEO (you or a prompt):** "We need a discount coupon system. High level: customer enters a code at checkout; code validates and applies a discount."

2. **CTO Agent:** Input: CEO idea. Output: Scope and priorities (e.g. "MVP: one coupon per order, fixed percent or fixed amount. No stacking. Handoff to Architect for design.")

3. **Architect Agent:** Input: CTO scope. Output: Data model (coupon table? code, type, value, valid_until), API (POST /cart/apply-coupon, or add to checkout), UI (one field + apply button). Use handoff template. Hand off to Backend and Frontend.

4. **Backend Agent:** Input: Architect spec. Output: Implement coupon storage and validation API only. Hand off to Frontend.

5. **Frontend Agent:** Input: Architect spec + Backend endpoints. Output: Coupon input and apply flow in the cart/checkout UI.

6. **QA Agent:** Input: Full feature spec and code paths. Output: Test cases or validation checklist (e.g. valid code applies discount, invalid code shows error, expired code rejected). No code—only test scenarios.

7. **DevOps Agent:** Input: Feature summary. Output: Any env vars or config needed (e.g. none if coupons are in DB), and a one-line "what to monitor" (e.g. coupon validation errors in logs).

## Deliverable

Either implement the coupon feature in `apps/ecommerce/` following the handoffs, or deliver the full set of handoff documents (specs, API, test cases, DevOps notes) so the feature could be implemented in order. Document the simulation in `docs/simulation-day21.md` or in `apps/agent-sim/`.
