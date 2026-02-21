# Day 2 – Define Agent Model

## Learn

- AI Agent schema: id, name, role, status (idle/thinking/coding/error), current_task, health_score, last_active_at, cpu_usage, memory_usage.
- Sub-Agent: parent_agent_id, responsibility.
- This is the "AI HR system" data model.

## Exercise

See [exercise.md](exercise.md). Use **MASTER PROMPT Phase 1** ([../../MASTER-PROMPT.md](../../MASTER-PROMPT.md)).

Define database schema only for Agent, Sub-Agent, Project, Task, Docker Container, Server, Scheduled Job, Alert, Command Log. No implementation.

## Outcome

You're done when [../../docs/schema.md](../../docs/schema.md) exists with table definitions, field descriptions, and relationships.
