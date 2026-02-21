# Day 22 – Logging and Observability

## Learn

- Structured logs: agent activity, command logs, audit logs.
- One consistent format (e.g. JSON with time, level, message, context).

## Exercise

See [exercise.md](exercise.md).

Add structured logging across the backend: agent activity, commands, and audit events. Optionally expose a log viewer or log stream in the dashboard.

## Outcome

You're done when key events (agent status change, command sent, violation, alert) are logged in a structured format and you can trace activity from logs.
