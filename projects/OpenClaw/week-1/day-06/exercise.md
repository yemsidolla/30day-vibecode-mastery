# Day 6 – Exercise

## Reference

[../../MASTER-PROMPT.md](../../MASTER-PROMPT.md) — **Phase 4, Steps 4.1 and 4.2**

## Steps

1. **Step 4.1:** Design Docker monitoring integration. Document: how stats are collected (e.g. Docker API or CLI), how often you poll, how you minimize performance impact. Save in [../../docs/](../../docs/) (e.g. `docker-monitoring.md` or a section in architecture). STOP.
2. **Step 4.2:** Implement minimal Docker status endpoint in `app/backend/`. Return only: container name, status (running/stopped), CPU %, memory %. Use Docker API or `docker stats` (or a mock if Docker is not available). STOP.
3. List files created; confirm no extra features. Get approval.
