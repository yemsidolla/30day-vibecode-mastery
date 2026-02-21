# Day 25 – Exercise

## Steps

1. Use NODE_ENV (or APP_ENV): in production, disable or gate debug endpoints, reduce log verbosity, avoid stack traces in API responses.
2. Document in `docs/environment.md`: what changes between dev and prod; which env vars are required; optional note on multi-server (e.g. "future: agent registry could be shared across instances").
3. Add .env.example with required variables; ensure .env is gitignored. STOP. Get approval. Ready for Day 26 (Deployment).
