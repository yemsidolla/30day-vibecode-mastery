# Day 27 – Exercise

## Steps

1. Document scaling plan: multiple backend instances behind a load balancer; shared agent registry (e.g. Redis or DB); event queue (e.g. for commands or alerts) so workers can scale; optional microservice split (e.g. Docker collector as separate service).
2. Update [../../docs/architecture.md](../../docs/architecture.md) with a "Scaling" section or a second diagram showing multi-instance and queue. No code required. STOP.
3. Get approval. Ready for Day 28 (Analytics).
