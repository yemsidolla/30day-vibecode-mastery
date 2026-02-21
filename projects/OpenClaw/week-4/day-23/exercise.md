# Day 23 – Exercise

## Steps

1. **WebSocket:** Review broadcast frequency; avoid sending duplicate or unchanged payloads; consider throttling status updates if many agents update at once.
2. **Frontend:** Ensure components that depend on agent list or WebSocket messages do not re-render unnecessarily (e.g. memoize, stable keys, scoped state).
3. **Docker:** Ensure polling interval is reasonable (e.g. 5–10 s); return only needed fields; avoid heavy Docker API calls.
4. Document changes and any before/after (e.g. "reduced WebSocket messages per second"). STOP. Get approval. Ready for Day 24 (Security).
