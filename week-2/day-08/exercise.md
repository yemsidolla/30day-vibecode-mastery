# Day 8 – Exercise

## Reference

[../../prompts/architecture-first.md](../../prompts/architecture-first.md)

## Context

You will add backend, auth, and database to [../../apps/ecommerce](../../apps/ecommerce) in the coming days. Today you only design.

## Step 1: List current state

For `apps/ecommerce/` today:

- **UI layer:** Product list, cart, one page (local state).
- **API layer:** None yet.
- **Data layer:** None (in-memory only).
- **Infrastructure:** None (local dev only).

## Step 2: Draw target architecture

Draw (ASCII or bullet list) the **target** architecture after you add auth, API, and DB. For example:

```
[Browser] --> UI (React/HTML)
                |
                v
            API layer (REST: /products, /cart, /auth)
                |
                v
            Data layer (DB: users, products, cart/sessions)
                |
                v
            Infrastructure (server, env, secrets)
```

Or as bullets:

- UI: pages for shop, cart, login, register; calls API.
- API: GET /products, GET/POST/DELETE /cart, POST /login, POST /register, POST /logout, GET /me.
- Data: tables users, products, cart_items (or sessions); migrations.
- Infrastructure: one server process, env for DB URL and secrets; no hardcoded secrets.

## Step 3: Save the diagram

Put the diagram or bullet list in `apps/ecommerce/docs/architecture.md` (create the file and folder if needed). Use this as the single source of truth for Days 9–14.
