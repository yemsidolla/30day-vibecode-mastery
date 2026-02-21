# Day 7 – Exercise

## Reference

- Chunking: [../../prompts/chunking-rules.md](../../prompts/chunking-rules.md)
- Anti-overengineering: [../../prompts/anti-overengineering.md](../../prompts/anti-overengineering.md)

## Rules (enforce in every prompt)

- No backend. No API calls.
- No unnecessary abstraction (e.g. no generic "cart service" unless needed).
- Controlled prompting only: use ROLE/GOAL/CONSTRAINTS or chunked requests.

## Suggested chunk order

1. **Architecture** — One prompt: "Define the architecture for a simple e-commerce landing: product list, cart (local state only), one page. No backend. Output bullet list + optional ASCII diagram. No code."

2. **Folder structure** — One prompt: "Given that architecture, propose folder structure. Output only folder/file tree. No code."

3. **Product list** — One prompt: "Implement only the product list component. Mock product data (id, name, price). No cart logic yet."

4. **Cart (state + UI)** — One prompt: "Implement cart: local state (array of product id + qty), add to cart, display cart, remove or update qty. One component or one small module. No backend."

5. **Landing page** — One prompt: "Combine product list and cart into one landing page. Use existing components. No new features."

## Constraints to include

- Do NOT add: search, filters, wishlist, checkout, auth, persistence (beyond in-memory for the session).
- Keep implementation minimal. One page, clear components, clean folders.

Save the app in [../../apps/ecommerce](../../apps/ecommerce).
