# Day 4 – Exercise

## Reference

[../../MASTER-PROMPT.md](../../MASTER-PROMPT.md) — **Phase 2, Step 2.3**

## Steps

1. Ensure WebSocket layer broadcasts agent status updates to all connected clients when any agent's status changes.
2. Add a minimal simulated activity stream (e.g. a timer or script that updates one agent's status every few seconds: idle → thinking → coding → idle or error) so you can test without real AI.
3. Verify: connect a client (or use a simple test script), trigger status changes, confirm broadcast is received.
4. STOP. No extra features (e.g. no persistence of activity stream yet). List files changed; get approval.
