# Day 26 – Exercise

## Reference

[../../MASTER-PROMPT.md](../../MASTER-PROMPT.md) — **Phase 10, Steps 10.1 and 10.2**

## Steps

1. **Step 10.1:** Design containerization. Document: which services (frontend, backend, db, worker), networks, environment variables, secrets handling (no secrets in images). Save in [../../docs/containerization.md](../../docs/containerization.md). STOP.
2. **Step 10.2:** Write minimal docker-compose.yml (and optional Dockerfiles): frontend, backend, database if used, monitoring worker if separate. Use env files for config. STOP.
3. Test: run `docker-compose up` (or equivalent) and verify the app is reachable. List files created; get approval. Ready for Day 27 (Scaling design).
