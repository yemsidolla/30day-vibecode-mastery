"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getCourseDay } from "@/data/course";

type ProgressItem = {
  id: number;
  day: number;
  completed: boolean;
  notes: string;
  updated_at: string;
};

export default function DayPage({
  params,
}: {
  params: Promise<{ day: string }>;
}) {
  const [dayParam, setDayParam] = useState<string | null>(null);
  const [progress, setProgress] = useState<ProgressItem | null>(null);
  const [notes, setNotes] = useState("");
  const [completed, setCompleted] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    params.then((p) => setDayParam(p.day));
  }, [params]);

  const day = dayParam ? parseInt(dayParam, 10) : NaN;
  const courseDay =
    Number.isInteger(day) && day >= 1 && day <= 30
      ? getCourseDay(day)
      : undefined;

  useEffect(() => {
    if (!Number.isInteger(day) || day < 1 || day > 30) return;
    fetch("/api/progress")
      .then((res) => res.json())
      .then((data: ProgressItem[]) => {
        const p = data.find((x) => x.day === day);
        setProgress(p ?? { day, completed: false, notes: "", id: 0, updated_at: "" });
        if (p) {
          setNotes(p.notes);
          setCompleted(p.completed);
        }
      })
      .catch(() => setProgress({ day, completed: false, notes: "", id: 0, updated_at: "" }));
  }, [day]);

  function handleSave() {
    setSaving(true);
    fetch("/api/progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ day, notes, completed }),
    })
      .then((res) => {
        if (res.ok) setProgress((p) => (p ? { ...p, notes, completed } : p));
      })
      .finally(() => setSaving(false));
  }

  if (dayParam === null) {
    return (
      <div className="py-8 text-stone-500 text-center">Loading…</div>
    );
  }

  if (!courseDay) {
    return (
      <div className="py-8">
        <p className="text-stone-500 mb-4">Day not found.</p>
        <Link href="/" className="text-stone-600 hover:text-stone-800 underline">
          Back to dashboard
        </Link>
      </div>
    );
  }

  const { title, summary, learn, exercise, outcome, checklist } = courseDay;

  return (
    <article className="pb-12">
      <div className="mb-6">
        <Link
          href="/"
          className="text-sm text-stone-500 hover:text-stone-700 inline-flex items-center gap-1"
        >
          ← Back to dashboard
        </Link>
      </div>

      <header className="mb-6">
        <h1 className="text-xl font-semibold text-stone-800">
          Day {day} – {title}
        </h1>
        {summary && (
          <p className="text-sm text-stone-500 mt-1">{summary}</p>
        )}
      </header>

      <div className="space-y-6 text-stone-700">
        {learn && learn.length > 0 && (
          <section>
            <h2 className="text-sm font-medium text-stone-500 mb-2">Learn</h2>
            <ul className="list-disc list-inside space-y-1 text-sm">
              {learn.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {exercise && (
          <section>
            <h2 className="text-sm font-medium text-stone-500 mb-2">
              Exercise
            </h2>
            <pre className="text-sm whitespace-pre-wrap font-sans bg-white rounded-lg p-4 border border-stone-200 overflow-x-auto">
              {exercise}
            </pre>
          </section>
        )}

        {outcome && (
          <section>
            <h2 className="text-sm font-medium text-stone-500 mb-2">
              Outcome
            </h2>
            <p className="text-sm">{outcome}</p>
          </section>
        )}

        {checklist && checklist.length > 0 && (
          <section>
            <h2 className="text-sm font-medium text-stone-500 mb-2">
              Before moving on
            </h2>
            <ul className="list-disc list-inside space-y-1 text-sm">
              {checklist.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        <section className="pt-6 border-t border-stone-200 space-y-4">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={completed}
              onChange={(e) => setCompleted(e.target.checked)}
              className="rounded border-stone-300"
            />
            <span className="text-sm text-stone-600">Completed</span>
          </label>
          <div>
            <label className="block text-sm font-medium text-stone-500 mb-1">
              Notes
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Notes…"
              className="w-full min-h-[120px] p-3 border border-stone-200 rounded-lg text-stone-800 placeholder-stone-400 resize-y text-sm"
              rows={4}
            />
          </div>
          <button
            type="button"
            onClick={handleSave}
            disabled={saving}
            className="py-2 px-4 rounded-lg bg-stone-700 text-white text-sm disabled:opacity-50"
          >
            {saving ? "Saving…" : "Save"}
          </button>
        </section>
      </div>
    </article>
  );
}
