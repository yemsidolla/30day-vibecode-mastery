# Day 18 – Health Scoring Engine

## Learn

- Health score based on: error rate, task completion delay, CPU overload, memory spikes.
- Overall "AI Company Health %" for the dashboard.

## Exercise

See [exercise.md](exercise.md). Use **MASTER PROMPT Phase 7** ([../../MASTER-PROMPT.md](../../MASTER-PROMPT.md)).

Design the health scoring formula, then implement a health score calculation service. Expose overall health % (and optionally per-agent) via API and show in the UI.

## Outcome

You're done when [../../docs/health-scoring.md](../../docs/health-scoring.md) exists with the formula, and the backend computes (and optionally caches) health score and the dashboard displays AI Company Health %.
