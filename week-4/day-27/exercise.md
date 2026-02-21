# Day 27 – Exercise

## Context

Rebuild the **same** e-commerce scope (products, cart, auth, optional feature flags) in a **new** folder: [../../apps/ecommerce-rebuild](../../apps/ecommerce-rebuild) (create it). Rules: architecture first, strict chunking, zero overgeneration.

## Step 1: Architecture first

Before any code: write or prompt for the full architecture (UI / API / Data / Infrastructure) and folder structure. Save in `apps/ecommerce-rebuild/docs/architecture.md`. Do not write code until this is done.

## Step 2: Chunked implementation

Use [../../prompts/chunking-rules.md](../../prompts/chunking-rules.md). One chunk per prompt:

- Chunk 1: Folder and file skeleton only (empty or stubs).
- Chunk 2: Data layer (schema + migrations or equivalent).
- Chunk 3: Products API only.
- Chunk 4: Auth API only.
- Chunk 5: Cart API only.
- Chunk 6: Frontend: product list and cart UI only.
- Chunk 7: Frontend: auth (login/register) and wiring.

Do not ask for "full backend" or "full frontend" in one go. Review after each chunk.

## Step 3: Anti-overengineering

Use [../../prompts/anti-overengineering.md](../../prompts/anti-overengineering.md) in every prompt: no extra features, minimal implementation, no abstraction unless required.

## Step 4: Compare

When the rebuild is functional, compare with `apps/ecommerce/`: fewer files? Clearer boundaries? Document in `apps/ecommerce-rebuild/docs/rebuild-notes.md` what you did differently and what you’d carry back to the main app.
