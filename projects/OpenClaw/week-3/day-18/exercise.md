# Day 18 – Exercise

## Reference

[../../MASTER-PROMPT.md](../../MASTER-PROMPT.md) — **Phase 7, Steps 7.1 and 7.2**

## Steps

1. **Step 7.1:** Design health formula. Define how to combine: error count (or rate), response/task delay, CPU usage, memory, task completion. Deliver a formula (e.g. weighted sum or threshold-based). Save in [../../docs/health-scoring.md](../../docs/health-scoring.md). STOP.
2. **Step 7.2:** Implement health score calculation service in backend: input = agent(s) and/or system metrics; output = score (e.g. 0–100). Expose GET /health or GET /agents/:id/health (and overall). Use stub or real data. STOP.
3. Add a health indicator in the dashboard (overall % and optionally per agent). STOP.
4. List files created; get approval. Ready for Day 19 (Alerts).
