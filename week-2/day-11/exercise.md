# Day 11 – Exercise

## Reference

- Architecture first: [../../prompts/architecture-first.md](../../prompts/architecture-first.md)
- Chunking: [../../prompts/chunking-rules.md](../../prompts/chunking-rules.md)

## Step 1: Define endpoints and schemas (no code)

Prompt (or write):

"For the e-commerce app backend, define: (1) **Products API:** GET /products (list), GET /products/:id (one). Request/response shape for each. (2) **Cart API:** GET /cart (current user's cart), POST /cart (add item), PATCH /cart/:itemId (update qty), DELETE /cart/:itemId (remove). Request/response for each. (3) **Auth API:** already designed on Day 10—list endpoints and shapes again for reference. Output a single doc: endpoint, method, request body/params, response shape. No implementation."

Save this as `apps/ecommerce/docs/api.md` (or similar).

## Step 2: Implement in chunks

- **Chunk 1:** Products API only — implement GET /products and GET /products/:id to match the schema. Use mock data or a simple in-memory store for now.
- **Chunk 2:** Cart API only — implement GET /cart, POST /cart, PATCH /cart/:itemId, DELETE /cart/:itemId. Session/user from auth; cart stored in memory or DB stub.
- **Chunk 3:** Wire frontend to the API — replace local-only product list and cart with API calls. Keep auth calls as already implemented.

Do not ask for "full backend" in one prompt; one API group per chunk.

## Step 3: Verify

Call endpoints (browser, curl, or frontend) and confirm responses match the schema.
