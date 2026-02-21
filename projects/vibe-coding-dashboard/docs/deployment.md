# Deployment Guide — 30-Day Vibe Coding Dashboard

## Deploy with Docker on a VPS

You can run the dashboard in Docker on your own server. SQLite data is stored in a volume so it persists across restarts.

### Prerequisites

- Docker and Docker Compose on your VPS

### Build and run

From the project root:

```bash
docker compose up -d --build
```

The app listens on port **3000**. Open `http://YOUR_VPS_IP:3000`.

### Options

- **Port:** Change the host port in `docker-compose.yml`, e.g. `"8080:3000"`.
- **DB path:** The database file is stored in a Docker volume `dashboard-data`. To use a host path instead, replace the volume with:
  ```yaml
  volumes:
    - /path/on/host:/data
  ```
- **Restart:** The service uses `restart: unless-stopped` so it comes back after a reboot.

### Useful commands

```bash
# View logs
docker compose logs -f dashboard

# Stop
docker compose down

# Stop and remove the data volume (deletes all progress)
docker compose down -v
```

### Environment variables

| Variable   | Default              | Description                    |
| ---------- | -------------------- | ------------------------------ |
| `DB_PATH`  | `/data/progress.db`  | Path to the SQLite database.   |
| `NODE_ENV` | `production`         | Set by docker-compose.         |

---

## Push to GitHub

1. Create a new repository on GitHub (e.g. `vibe-coding-dashboard`).
2. From the project root:

   ```bash
   git init
   git add .
   git commit -m "Initial commit: 30-day vibe coding dashboard"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/vibe-coding-dashboard.git
   git push -u origin main
   ```

3. Ensure `.gitignore` is in place so `node_modules`, `.next`, and `*.db` are not committed.

---

## Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in (GitHub).
2. Click **Add New** → **Project** and import your GitHub repo.
3. Leave **Root Directory** as `.` and **Framework Preset** as Next.js.
4. Click **Deploy**. Vercel will run `npm install` and `next build`.

### Environment variables

This app does not require any environment variables for basic use. If you add a production database URL later (e.g. Turso), add it in Vercel: **Project → Settings → Environment Variables**.

---

## SQLite on Vercel (serverless)

The app uses **file-based SQLite** with `better-sqlite3`. Important points:

- **Local dev:** The database file is created in the project root (`progress.db`) or in `data/progress.db` in production (see `src/lib/db.ts`). It persists between runs.
- **Vercel serverless:** The filesystem is **read-only** except for `/tmp`. Each serverless function invocation can use `/tmp`, but files in `/tmp` are **ephemeral** (not shared across invocations and not guaranteed to persist).

**Options for production:**

1. **Ephemeral (demo only):** Point the DB path to a file under `/tmp` in production. Data will not persist across deployments or between cold starts. Suitable for a quick demo or learning.
2. **Persistent:** Use a hosted SQLite-compatible service (e.g. **Turso**) or **Vercel Postgres** and change `src/lib/db.ts` to use that client instead of `better-sqlite3`. The API (`GET/POST /api/progress`) stays the same; only the database layer changes.

To use `/tmp` on Vercel for an ephemeral demo, set in `src/lib/db.ts` something like:

```ts
const dbPath =
  process.env.VERCEL
    ? path.join("/tmp", "progress.db")
    : path.join(process.cwd(), "progress.db");
```

(You would need to ensure the `data` directory or `/tmp` is used consistently and that the schema is created on first access.)

For a **persistent** production dashboard, plan on switching to Turso, Vercel Postgres, or another hosted database and updating the DB layer accordingly.

---

## Summary

- **Docker (VPS):** Run `docker compose up -d --build`; SQLite persists in volume `dashboard-data`. Set `DB_PATH` if needed.
- **GitHub:** Push the repo; ignore `node_modules`, `.next`, and `*.db`.
- **Vercel:** Import the repo and deploy; no env vars required for the minimal app.
- **SQLite:** Local dev uses a file that persists. In Docker, use `DB_PATH=/data/progress.db` with a mounted volume. On Vercel, use `/tmp` for ephemeral behavior or replace with a hosted DB for persistence.
