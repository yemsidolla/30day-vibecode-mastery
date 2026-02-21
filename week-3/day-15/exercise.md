# Day 15 – Exercise

## Context

Instead of one big "add feature X" prompt, you simulate three agents: **Architect** (design only), **Backend** (API only), **Frontend** (UI only).

## Step 1: Pick a small feature

Example: "Add a 'wishlist' feature: user can save product IDs; list them on a simple page." Or: "Add a product search endpoint and a search box in the UI."

## Step 2: Architect agent (design only)

Prompt: "You are the Architect. Do not write code. For the e-commerce app in `apps/ecommerce`, design the [wishlist / search] feature: (1) Data: what we need to store and where. (2) API: endpoints and request/response. (3) UI: which page/components. Output a short spec (bullets). No implementation."

Save the spec. This is the handoff to Backend and Frontend.

## Step 3: Backend agent (API only)

Prompt: "You are the Backend developer. Using this spec only: [paste Architect output], implement the API part in `apps/ecommerce`. Do not change the frontend or add UI. Only the endpoints and data layer as specified."

## Step 4: Frontend agent (UI only)

Prompt: "You are the Frontend developer. Using this spec only: [paste Architect output], implement the UI part in `apps/ecommerce`. Use the existing API endpoints from the spec. Do not change the backend or add new endpoints."

## Step 5: Verify

Wire the flow: frontend calls the new API; feature works. Reflect: did separating roles reduce context and keep each prompt focused?
