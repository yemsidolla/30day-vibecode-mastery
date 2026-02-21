# Day 5 – Basic Dashboard UI

## Learn

- Dashboard layout: Agent Status, Docker Status, Project Overview, Alerts, Command Center panels.
- Agent panel: list agents, status badges, active task, realtime updates via WebSocket.
- No fancy animation yet.

## Exercise

See [exercise.md](exercise.md). Use **MASTER PROMPT Phase 3** ([../../MASTER-PROMPT.md](../../MASTER-PROMPT.md)) — Steps 3.1 and 3.2.

Design layout in docs, then implement the Agent panel only in [../../app/frontend](../../app/frontend) with live WebSocket updates.

## Outcome

You're done when the dashboard shows an Agent list with status badges and last active, and updates in real time when the backend broadcasts status changes.
