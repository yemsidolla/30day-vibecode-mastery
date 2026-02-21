# Day 24 – Security Hardening

## Learn

- Token authentication (already started in Day 20; strengthen if needed).
- Rate limiting, input validation, command authorization.

## Exercise

See [exercise.md](exercise.md).

Add rate limiting (e.g. per IP or per user), validate all inputs (command payload, query params), and ensure command execution (or forwarding) is authorized by role. Harden token handling (e.g. expiry, secure storage).

## Outcome

You're done when endpoints are rate-limited, inputs are validated, commands are authorized, and auth tokens are handled securely.
