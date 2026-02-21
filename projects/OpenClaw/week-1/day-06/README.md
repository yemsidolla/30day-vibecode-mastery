# Day 6 – Docker Monitoring

## Learn

- How to collect Docker stats (containers, CPU, memory) and minimize performance impact.
- Minimal Docker status endpoint: container name, status, CPU %, memory %.

## Exercise

See [exercise.md](exercise.md). Use **MASTER PROMPT Phase 4** ([../../MASTER-PROMPT.md](../../MASTER-PROMPT.md)).

Design Docker monitoring (how stats are collected, frequency, performance), then implement a minimal Docker status endpoint in the backend.

## Outcome

You're done when the backend exposes an endpoint that returns container name, status, CPU %, memory % for running (and optionally stopped) containers, and the design is documented.
