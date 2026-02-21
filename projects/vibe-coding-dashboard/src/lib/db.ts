import Database from "better-sqlite3";
import path from "path";

const dbPath =
  process.env.DB_PATH ||
  (process.env.VERCEL ? path.join("/tmp", "progress.db") : path.join(process.cwd(), "progress.db"));

let db: Database.Database | null = null;

function getDb(): Database.Database {
  if (!db) {
    db = new Database(dbPath);
    db.exec(`
      CREATE TABLE IF NOT EXISTS progress (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        day INTEGER UNIQUE NOT NULL,
        completed INTEGER NOT NULL DEFAULT 0,
        notes TEXT,
        updated_at TEXT NOT NULL
      )
    `);
    const count = db.prepare("SELECT COUNT(*) as c FROM progress").get() as { c: number };
    if (count.c === 0) {
      const now = new Date().toISOString();
      const insert = db.prepare(
        "INSERT INTO progress (day, completed, notes, updated_at) VALUES (?, 0, ?, ?)"
      );
      for (let day = 1; day <= 30; day++) {
        insert.run(day, "", now);
      }
    }
  }
  return db;
}

export type ProgressRow = {
  id: number;
  day: number;
  completed: number;
  notes: string | null;
  updated_at: string;
};

export function getAllProgress(): ProgressRow[] {
  const database = getDb();
  return database.prepare("SELECT * FROM progress ORDER BY day").all() as ProgressRow[];
}

export function getProgressByDay(day: number): ProgressRow | undefined {
  const database = getDb();
  return database.prepare("SELECT * FROM progress WHERE day = ?").get(day) as
    | ProgressRow
    | undefined;
}

export function upsertProgress(
  day: number,
  completed?: boolean,
  notes?: string
): void {
  const database = getDb();
  const now = new Date().toISOString();
  const row = database.prepare("SELECT * FROM progress WHERE day = ?").get(day) as
    | ProgressRow
    | undefined;
  if (row) {
    const newCompleted = completed !== undefined ? (completed ? 1 : 0) : row.completed;
    const newNotes = notes !== undefined ? notes : row.notes;
    database
      .prepare(
        "UPDATE progress SET completed = ?, notes = ?, updated_at = ? WHERE day = ?"
      )
      .run(newCompleted, newNotes ?? "", now, day);
  } else {
    database
      .prepare(
        "INSERT INTO progress (day, completed, notes, updated_at) VALUES (?, ?, ?, ?)"
      )
      .run(day, completed ? 1 : 0, notes ?? "", now);
  }
}
