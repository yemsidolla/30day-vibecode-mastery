# Day 15 – Exercise

## Reference

[../../MASTER-PROMPT.md](../../MASTER-PROMPT.md) — **Phase 6, Steps 6.1 and 6.2**

## Steps

1. **Step 6.1:** Design command protocol: `{ target_agent, command, priority, context }`. Document validation (required fields, allowed targets). Save in [../../docs/command-protocol.md](../../docs/command-protocol.md). STOP.
2. **Step 6.2:** Implement command endpoint in backend: accept POST with command payload, validate, log to Command Log (in-memory or DB), broadcast via WebSocket. Do not execute the command with real AI yet; optional stub response. STOP.
3. Build Command Center panel in frontend: list or dropdown to select target agent, input for command (and optional priority/context), Send button. On send: call API, show "sent" and optional response placeholder. Optionally show recent command log. STOP.
4. List files created; get approval.
