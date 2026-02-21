# Day 30 – Exercise

## Context

Design your **AI-First Dev Company System**. Deliverable: a single document that defines how the company builds and ships software with AI. Save as [../../docs/final-system-design.md](../../docs/final-system-design.md).

## Sections to include

1. **Org structure** — How are roles organized? (e.g. CTO, Architect, Backend/Frontend/QA/DevOps agents or teams.) Who owns prompt governance? Who owns the production checklist?

2. **Prompt governance** — Where do approved prompts live? Who can add or change them? How do you enforce "no full-system prompts" and "architecture first"? Reference the `prompts/` folder and workflow doc.

3. **Multi-agent rules** — When do you use single vs multi-agent? What handoff format is mandatory? How do you prevent cross-role interference? Reference `prompts/agent-roles.md` and `prompts/inter-agent-handoff.md`.

4. **Code standards** — What do you enforce? (e.g. folder structure, no hardcoded secrets, validation on every API, logging format.) How is it checked? (Governance Agent, checklist, review.)

5. **Deployment process** — What steps are required before a release? (Tests, production checklist, env and secrets, migrations.) Who approves? What’s the rollback plan?

6. **Monitoring system** — What do you monitor? (Errors, key business events, performance.) How do you use the monitoring prompt when something breaks? Who is on call?

## Tone

Write as if you are the CTO defining the playbook. The doc should be usable by a new hire or a new AI agent to stay within the system. Link to the relevant files in this repo (ROADMAP, prompts, workflow, production checklist).
