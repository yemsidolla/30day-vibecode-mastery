# Day 12 – Exercise

## Reference

[../../prompts/chunking-rules.md](../../prompts/chunking-rules.md) — schema and migration before implementation.

## Step 1: Schema design (no code)

Prompt (or write):

"For the e-commerce app, design the database schema. Tables needed: users (from auth), products, cart_items (or equivalent for cart). For each table: column names, types, primary key, and foreign keys. Mention any indexes. No SQL or migration code yet—only the design."

Review. Save as `apps/ecommerce/docs/schema.md`.

## Step 2: Migration plan

Prompt: "Given that schema, propose a migration plan: (1) order of table creation (e.g. users first, then products, then cart_items). (2) One sentence per step. (3) How to handle existing in-memory or mock data—do we seed products? No implementation yet."

Save the plan (e.g. in `docs/schema.md` or `docs/migrations.md`).

## Step 3: Implement in chunks

- **Chunk 1:** Create tables (migrations or SQL scripts). Use the DB of your choice (SQLite, Postgres, etc.).
- **Chunk 2:** Seed products (if applicable) and connect the Products API to the DB.
- **Chunk 3:** Connect auth (user storage) and Cart API to the DB. Remove in-memory fallbacks.

Work in [../../apps/ecommerce](../../apps/ecommerce). Do not ask for "full backend with DB" in one prompt.

## Step 4: Verify

Ensure app still works: products and cart persist; auth still works.
