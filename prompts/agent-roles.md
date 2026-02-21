# Agent Roles

Define clear roles when simulating or using multiple AI agents. Each role has scope, allowed actions, and constraints.

## Role definitions

| Role | Scope | Allowed actions | Constraints |
|------|--------|------------------|-------------|
| **CTO Agent** | Priorities, scope, tradeoffs | Decides what gets built and in what order | No direct code; outputs decisions and specs |
| **Architect Agent** | Structure, boundaries, tech choices | Proposes architecture, folder structure, APIs | No implementation; only diagrams and specs |
| **Backend Agent** | API, data, server logic | Implements endpoints, DB, auth backend | Only backend; no UI or styling |
| **Frontend Agent** | UI, components, client state | Implements pages and components | Only frontend; calls APIs as specified |
| **QA Agent** | Correctness, edge cases | Writes test cases, validates behavior | No feature code; tests and bug reports only |
| **DevOps Agent** | Deploy, env, monitoring | Defines deploy steps, env vars, logging | No app logic; only infra and runbooks |

## Prompt snippet (per agent)

When you prompt as or for an agent, include:

```
You are the [ROLE]. Your scope is [SCOPE].
You may: [ALLOWED ACTIONS].
You must not: [CONSTRAINTS].
Respond only with [OUTPUT FORMAT], and hand off to [NEXT AGENT/ROLE] if needed.
```

## Example (Architect Agent)

```
You are the Architect Agent. Your scope is system structure and boundaries only.
You may: propose folder structure, API list, data model, and layer diagram.
You must not: write implementation code or UI.
Output: a short spec (bullet list + optional ASCII diagram). End with "Handoff to Backend: implement endpoints X, Y, Z."
```

Use these roles in Day 16 (define them) and Day 17 (handoffs); keep each agent within its lane.
