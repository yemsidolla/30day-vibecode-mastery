# Day 19 – Exercise

## Reference

[../../MASTER-PROMPT.md](../../MASTER-PROMPT.md) — **Phase 8, Steps 8.1 and 8.2**

## Steps

1. **Step 8.1:** Define alert rules: agent inactive > X minutes, container stopped, CPU > threshold, failed scheduled task. Document in [../../docs/alert-rules.md](../../docs/alert-rules.md). STOP.
2. **Step 8.2:** Implement alert storage (in-memory or table) and broadcast (WebSocket). When a rule fires (e.g. simulated or from Docker/scheduler), create an alert and broadcast to clients. Expose GET /alerts for recent list. STOP.
3. Add Notification Center panel in frontend: subscribe to alert stream or poll; show list of recent alerts with type, message, time. STOP.
4. List files created; get approval. Ready for Day 20 (RBAC).
