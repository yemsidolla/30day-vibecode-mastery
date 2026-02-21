# Day 22 – Exercise

## Context

Audit and refactor [../../apps/ecommerce](../../apps/ecommerce) for performance. Focus on three areas.

## Step 1: Frontend — unnecessary re-renders

- Are there components that re-render on every parent update but only depend on a small piece of state? Consider memoization (e.g. `React.memo`, `useMemo`, or stable callbacks).
- Are list items re-rendering when only one item changes? Consider keys and scoped state.
- Prompt the AI if needed: "Review the e-commerce frontend for unnecessary re-renders. List components that could be memoized or that trigger broad re-renders. Suggest minimal changes. Do not change behavior."

## Step 2: Backend — unnecessary DB calls

- Are you running N+1 queries (e.g. one query per cart item to get product details)? Batch or join.
- Are you fetching full entities when only a few fields are needed? Reduce selected columns or add a slim DTO.
- Prompt: "Review the e-commerce backend for redundant or N+1 database calls. Suggest minimal changes to batch or reduce queries. Do not change API contract or behavior."

## Step 3: API payload

- Do any endpoints return more data than the client needs? (e.g. full user object when only `id` and `name` are displayed.)
- Add or use a slim response shape for list endpoints; keep full detail for single-resource endpoints if needed.
- Refactor one endpoint to return a smaller payload and update the frontend to use it.

## Step 4: Verify

Confirm behavior is unchanged; optionally measure (e.g. fewer requests, smaller response size, or smoother UI).
