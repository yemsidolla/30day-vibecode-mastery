# Day 17 – Exercise

## Reference

- Roles: [../../prompts/agent-roles.md](../../prompts/agent-roles.md)
- Handoffs: [../../prompts/inter-agent-handoff.md](../../prompts/inter-agent-handoff.md)

## Step 1: Write the handoff template

Create a markdown template that every agent must use when handing off. Include:

1. **DELIVERABLE** — The actual artifact (spec, code, list).
2. **SUMMARY** — 2–3 sentences of what was done.
3. **HANDOFF** — To: [Role]. Context: [what was done]. Task: [next task]. Constraints: [what to respect]. No cross-role work: [what the next agent must not do].

Save as `docs/inter-agent-handoff-template.md` (or in `prompts/`). Base it on [../../prompts/inter-agent-handoff.md](../../prompts/inter-agent-handoff.md).

## Step 2: Create a prompt for "when you hand off"

Prompt text that you (or the AI) will use: "When you finish your part, respond using the handoff template in `docs/inter-agent-handoff-template.md`. Include DELIVERABLE, SUMMARY, and HANDOFF with To, Context, Task, Constraints, and No cross-role work."

## Step 3: Run one handoff (optional but recommended)

- Act as Architect: output a small spec for one change (e.g. "add GET /products?q= for search") using the handoff format.
- Hand that output to the Backend agent prompt: "You are the Backend agent. Here is the handoff from Architect: [paste]. Implement only what the handoff asks. Do not change frontend or add features."

Verify the Backend only did what the handoff said.
