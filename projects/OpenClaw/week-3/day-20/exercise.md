# Day 20 – Exercise

## Reference

[../../MASTER-PROMPT.md](../../MASTER-PROMPT.md) — **Phase 9, Step 9.2**

## Steps

1. Design RBAC: Admin (full access), Viewer (read-only), Operator (read + send commands). Map endpoints to required role. Save in [../../docs/rbac.md](../../docs/rbac.md). STOP.
2. Implement minimal auth: e.g. API key or token in header, or simple login that sets role. Middleware: resolve user/role from token, attach to request; for protected routes, check role and return 403 if insufficient. Apply to command endpoint and any admin-only routes. STOP.
3. Frontend: send token (or use dev bypass for now); handle 401/403. STOP.
4. List files created; get approval. Ready for Day 21 (Week 3 demo).
