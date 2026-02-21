# Architecture — 30-Day Vibe Coding Dashboard

## Folder structure (minimal)

```
vibe-coding-dashboard/
├── MASTER-BUILD-PROMPT.md
├── README.md
├── docs/
│   ├── architecture.md
│   └── deployment.md
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── api/
│   │       └── progress/
│   │           └── route.ts
│   ├── lib/
│   │   └── db.ts
│   └── components/
│       ├── DayCard.tsx
│       ├── ProgressBar.tsx
│       └── NoteModal.tsx
├── package.json
├── tailwind.config.ts
├── next.config.js
└── tsconfig.json
```

No `components/ui/`, no `services/`, no `repositories/`.

---

## SQLite schema

**Single table: progress**

| Column     | Type      | Description                |
| ---------- | --------- | -------------------------- |
| id         | INTEGER   | Primary key                |
| day        | INTEGER   | Unique, 1–30                |
| completed  | INTEGER   | 0 or 1 (SQLite boolean)    |
| notes      | TEXT      | Optional notes for the day |
| updated_at | TEXT      | ISO timestamp              |

No other tables.

---

## API endpoints

| Method | Path              | Purpose                          |
| ------ | ----------------- | -------------------------------- |
| GET    | /api/progress     | Return all 30 progress rows      |
| POST   | /api/progress     | Upsert one day (day, completed?, notes?) |

Request body for POST: `{ day: number, completed?: boolean, notes?: string }`.

No validation libraries. No middleware. Minimal logic.

---

## UI components

| Component     | Responsibility                                  |
| ------------- | ----------------------------------------------- |
| layout.tsx    | Root layout, viewport, header, mobile container |
| page.tsx      | Dashboard: fetch progress, render sections      |
| DayCard       | One day (1–30): completed state, click to open modal |
| ProgressBar   | Progress percentage (completed / 30)            |
| NoteModal     | Modal: show/edit notes, save via POST          |

No sidebar. No extra panels. Four weekly sections (Days 1–7, 8–14, 15–21, 22–30).

---

## Data flow

1. **Page load:** `page.tsx` fetches `GET /api/progress` → gets array of `{ day, completed, notes, updated_at }`.
2. **Render:** Map to 30 DayCards; pass completed and notes. Compute progress % for ProgressBar.
3. **Click day:** Open NoteModal with that day’s notes; user can edit.
4. **Save notes:** POST `/api/progress` with `{ day, notes }` (and optionally `completed`). On success, refetch or update local state, close modal.

Single source of truth: SQLite. No global state library. Fetch on load; after POST, refetch or update in memory.
