# Day 20 – Role-Based Access

## Learn

- Roles: Admin, Viewer, Operator. Secure endpoints by role.
- Document in [../../docs/rbac.md](../../docs/rbac.md); implement minimal middleware.

## Exercise

See [exercise.md](exercise.md). Use **MASTER PROMPT Phase 9** ([../../MASTER-PROMPT.md](../../MASTER-PROMPT.md)).

Design RBAC (who can do what), then implement minimal auth middleware: token or session, role check, 401/403 for unauthorized. Secure command and admin endpoints.

## Outcome

You're done when roles are documented, endpoints are protected by role (e.g. command send = Operator or Admin; config = Admin only), and unauthenticated or insufficient-role requests return 401/403.
