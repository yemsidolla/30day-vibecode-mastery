# Day 16 – Agent Command Protocol

## Learn

- Command format: target, command, priority, context. Enforce structure and validation.
- Validation logic and error responses.

## Exercise

See [exercise.md](exercise.md). Use [../../docs/command-protocol.md](../../docs/command-protocol.md).

Enforce the command protocol: validate all incoming commands, reject invalid payloads with clear errors, ensure UI only sends valid structure.

## Outcome

You're done when the command API enforces the protocol (required fields, valid target, allowed priority) and the UI sends only valid commands (or shows validation errors).
