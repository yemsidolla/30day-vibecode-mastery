# Day 9 – Exercise

## Reference

[../../MASTER-PROMPT.md](../../MASTER-PROMPT.md) — **Phase 5, Step 5.1**

## Steps

1. Define states: idle, thinking, coding, error, offline. For each state: what triggers entry (e.g. "task assigned" → thinking; "started coding" → coding; "exception" → error).
2. Define transitions: which states can move to which (e.g. thinking → coding, coding → idle or error). Document in [../../docs/ai-office-state-machine.md](../../docs/ai-office-state-machine.md). STOP.
3. Optional: in backend, ensure agent status updates follow this state machine (e.g. simulated stream or API only allows valid transitions). Do not add UI animation yet.
4. Get approval. Ready for Day 10 (animated office UI).
