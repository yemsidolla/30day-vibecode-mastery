# Day 13 – Exercise

## Context

Add a minimal feature flag system to [../../apps/ecommerce](../../apps/ecommerce): a table of flags and a way to toggle them (e.g. for "show discount banner" or "enable reviews").

## Step 1: Design (minimal)

Prompt: "Design a minimal feature flag system for the e-commerce app: (1) One table: flag key (string), enabled (boolean). (2) One API: GET /flags (list all), PATCH /flags/:key (set enabled true/false). No user targeting or segments yet—global flags only. Output the schema and endpoint contract. No code yet."

## Step 2: Implement

- **Chunk 1:** DB table for flags + GET /flags and PATCH /flags/:key (backend only).
- **Chunk 2:** Frontend: fetch flags and use one flag to conditionally show something (e.g. a banner). Add a simple admin or dev UI to toggle one flag (dropdown or button that calls PATCH).

Keep it minimal: no extra SDK, no A/B logic—just on/off per flag key.

## Step 3: Verify

Toggle the flag in the UI and confirm the feature (e.g. banner) appears or disappears.
