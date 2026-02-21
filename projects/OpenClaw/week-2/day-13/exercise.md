# Day 13 – Exercise

## Steps

1. Ensure Scheduled Job is in schema. Implement minimal scheduler service in backend: store jobs (name, schedule expression or next run, last run time, last result). You can use a simple in-memory list and a timer, or integrate with node-cron or similar. Small chunk. STOP.
2. Expose GET /scheduler/jobs (and optional POST to add a job). Return next run time and last run result per job. STOP.
3. Add a Scheduler panel or section in the dashboard: list scheduled tasks, next run, last run result. STOP.
4. List files created; get approval. Ready for Week 2 demo.
