# Day 16 – Exercise

## Steps

1. Review [../../docs/command-protocol.md](../../docs/command-protocol.md). Define: required fields (target, command), optional (priority, context), allowed values (e.g. priority: low/medium/high; target must be existing agent id or name).
2. In backend: add validation middleware or inline checks; return 400 with a clear message when invalid. Log rejected attempts if useful.
3. In frontend: validate before send (e.g. require target and command); show inline errors. Optionally restrict target to a dropdown of current agents.
4. Test: send valid command (success), send missing target (error), send invalid priority (error). List changes; get approval.
