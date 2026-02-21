# Day 1 – Exercise

## Step 1: Uncontrolled prompt

Ask the AI (no template, no constraints):

**Prompt:** "Build me a TODO app."

Observe what you get:

- How many files?
- Did it add auth, persistence, categories, filters, or other features you didn't ask for?
- Note the folder structure and any "extra" layers (services, hooks, utils you didn't request).

## Step 2: Constrain scope

Rewrite the request so the AI can only build the minimum. For example:

**Prompt:** "Build a minimal TODO app. Only: (1) a list of tasks, (2) add task, (3) mark done/toggle. One page, no backend, no local storage unless you need it for the list to persist on refresh. No categories, no filters, no extra features. Prefer the simplest structure: e.g. one HTML file or one React app with a single main component."

Generate again and compare:

- Fewer files?
- No unnecessary services or abstractions?
- Same behavior, less code?

## Step 3: Reflect

- What did the first prompt assume that led to overgeneration?
- What constraints in the second prompt prevented it?
- How would you explain "prompting is system design" to someone else?

Save your preferred minimal TODO app in [../../apps/todo](../../apps/todo).
