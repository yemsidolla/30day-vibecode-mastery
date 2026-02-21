# Day 28 – Exercise

## Context

Design the **full AI-first development workflow** you’ve been practicing. Output is a document, not code. Save in the repo (e.g. [../../docs/ai-first-workflow.md](../../docs/ai-first-workflow.md)).

## Workflow sections to cover

1. **Idea intake** — How do you capture the idea (user story, one-liner, acceptance criteria)? What prompt or template do you use to turn it into a spec?

2. **Architecture design** — When do you draw the architecture (before any code)? What layers do you define? Reference `prompts/architecture-first.md`.

3. **Implementation chunks** — In what order do you implement (e.g. schema → API → UI)? How do you enforce one chunk per prompt? Reference `prompts/chunking-rules.md`.

4. **Review loop** — When do you run the Governance Agent or refactor? How do you use "refactor without changing behavior" and complexity audit?

5. **Deployment** — What’s in your production checklist? Env, secrets, migrations. Reference Day 25 and Day 20.

6. **Monitoring** — How do you use logs and the monitoring prompt when something goes wrong? Reference Day 19.

7. **Iteration** — How do you add a new feature (e.g. multi-agent flow: Architect → Backend → Frontend)? Reference Week 3.

## Deliverable

A single markdown doc that a new team member (or you in 6 months) could follow to run an AI-first project from idea to ship and beyond. Link to the relevant prompt templates in this repo.
