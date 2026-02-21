# Day 17 – Exercise

## Reference

[../../MASTER-PROMPT.md](../../MASTER-PROMPT.md) — **Phase 9, Step 9.1**

## Steps

1. Design governance: what is allowed vs not (e.g. "agent cannot modify architecture files," "agent cannot touch another agent's domain," "no duplicate service creation"). Document in [../../docs/governance.md](../../docs/governance.md). STOP.
2. Implement violation logging: when a command (or simulated check) would violate a rule, log it (in-memory or table: timestamp, agent, command, rule violated). No need to block the command yet if you're only logging. STOP.
3. Add Violation Log panel in dashboard: fetch or subscribe to violations, show recent list. STOP.
4. List files created; get approval. Ready for Day 18 (Health Scoring).
