# Day 19 – Exercise

## Context

Add logging and a lightweight "monitoring" approach to [../../apps/ecommerce](../../apps/ecommerce). No need for a real PostHog install—focus on structure and prompts.

## Step 1: Structured logs

Define (or implement) a simple structured log format. Example: `{ "time": "...", "level": "info"|"error"|"warn", "message": "...", "context": { ... } }`.

- In the backend: log key events (e.g. request received, auth success/fail, cart update, error).
- In the frontend: optional—log key actions (e.g. add to cart, login attempt) to console or a stub logger.

Use a small logger utility or a few wrapper functions so format is consistent.

## Step 2: Error tracking simulation

When an error is caught, log it with level `error` and enough context (endpoint, user id if any, stack or message). No external service required—just ensure errors are logged in the same structured format so you could later send them to an error tracker.

## Step 3: Monitoring prompt

Create a short document or prompt: "When investigating an issue in production (or locally), use these steps: (1) Reproduce and capture the structured log lines around the failure. (2) List possible causes from the log context. (3) Suggest the minimal fix. (4) After fix, add a log line that would have made this easier to debug."

Save as `docs/monitoring-prompt.md` or in your prompts folder. This is your "monitoring prompt system"—you run it when you have logs and need to diagnose.
