# OpenClaw application

Single app: backend + frontend. All build happens here.

- **backend/** — API server, WebSocket, Agent Registry, Docker collector, Scheduler, Reporting, Governance. Stack TBD (e.g. Node/Express or similar).
- **frontend/** — Dashboard UI, panels (Agent, Docker, Projects, Alerts, Command Center), AI office view. Stack TBD (e.g. React or similar).

Design first in `../docs/`. Implement in small chunks per MASTER-PROMPT.md. No full-system generation.
