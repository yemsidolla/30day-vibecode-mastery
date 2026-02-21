# Day 24 – Exercise

## Steps

1. **Rate limiting:** Add middleware to limit requests per IP (or per user) per minute for auth and command endpoints. Return 429 when exceeded.
2. **Input validation:** Validate all request bodies and params (command payload, agent id, etc.); return 400 with clear message on validation failure.
3. **Command authorization:** Ensure only Operator or Admin can send commands; enforce in middleware (already partially done in Day 20; reinforce).
4. **Token:** If using tokens, add expiry and secure storage; do not log tokens. Document in `docs/security.md` or extend `docs/rbac.md`. STOP. Get approval. Ready for Day 25.
