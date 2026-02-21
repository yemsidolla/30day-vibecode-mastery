# Day 22 – Exercise

## Steps

1. Define log format: e.g. `{ time, level, message, context: { agentId, commandId, ... } }`. Use one logger utility or wrapper.
2. Add logging for: agent status updates, command received/completed, governance violations, alerts fired. Use consistent levels (info, warn, error).
3. Optional: add GET /logs (or tail) for recent entries, or a Logs panel in the dashboard. Do not log secrets. STOP.
4. List files changed; get approval. Ready for Day 23 (Performance).
