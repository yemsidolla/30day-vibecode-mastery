"use client";

import { useState } from "react";
import Link from "next/link";

type NoteModalProps = {
  day: number;
  title?: string;
  summary?: string;
  learn?: string[];
  exercise?: string;
  outcome?: string;
  checklist?: string[];
  initialNotes: string;
  initialCompleted: boolean;
  onClose: () => void;
  onSaved: () => void;
};

export default function NoteModal({
  day,
  title,
  summary,
  learn,
  exercise,
  outcome,
  checklist,
  initialNotes,
  initialCompleted,
  onClose,
  onSaved,
}: NoteModalProps) {
  const [notes, setNotes] = useState(initialNotes);
  const [completed, setCompleted] = useState(initialCompleted);
  const [saving, setSaving] = useState(false);

  function handleSave() {
    setSaving(true);
    fetch("/api/progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ day, notes, completed }),
    })
      .then((res) => {
        if (res.ok) onSaved();
      })
      .finally(() => setSaving(false));
  }

  const hasLesson = learn?.length || exercise || outcome || checklist?.length;

  return (
    <div
      className="fixed inset-0 z-10 flex items-end sm:items-center justify-center bg-stone-900/50"
      role="dialog"
      aria-modal="true"
      aria-label={`Notes for Day ${day}`}
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-lg rounded-t-2xl sm:rounded-2xl p-6 shadow-lg max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start gap-2 mb-3 shrink-0">
          <div className="min-w-0 flex-1">
            <h3 className="text-lg font-semibold text-stone-800">
              Day {day}{title ? ` – ${title}` : ""}
            </h3>
            {summary && (
              <p className="text-sm text-stone-500 mt-1">{summary}</p>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-stone-500 hover:text-stone-700 p-1"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <div className="overflow-y-auto flex-1 min-h-0 space-y-5 pr-1 -mr-1">
          {hasLesson && (
            <>
              {learn && learn.length > 0 && (
                <section>
                  <h4 className="text-sm font-medium text-stone-500 mb-2">
                    Learn
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-stone-700 text-sm">
                    {learn.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </section>
              )}
              {exercise && (
                <section>
                  <h4 className="text-sm font-medium text-stone-500 mb-2">
                    Exercise
                  </h4>
                  <pre className="text-stone-700 text-sm whitespace-pre-wrap font-sans bg-stone-50 rounded-lg p-3 border border-stone-100">
                    {exercise}
                  </pre>
                </section>
              )}
              {outcome && (
                <section>
                  <h4 className="text-sm font-medium text-stone-500 mb-2">
                    Outcome
                  </h4>
                  <p className="text-stone-700 text-sm">{outcome}</p>
                </section>
              )}
              {checklist && checklist.length > 0 && (
                <section>
                  <h4 className="text-sm font-medium text-stone-500 mb-2">
                    Before moving on
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-stone-700 text-sm">
                    {checklist.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </section>
              )}
              <Link
                href={`/day/${day}`}
                className="inline-block text-sm text-stone-600 hover:text-stone-800 underline"
              >
                Read full lesson
              </Link>
            </>
          )}

          <label className="flex items-center gap-2 pt-2 border-t border-stone-100">
            <input
              type="checkbox"
              checked={completed}
              onChange={(e) => setCompleted(e.target.checked)}
              className="rounded border-stone-300"
            />
            <span className="text-sm text-stone-600">Completed</span>
          </label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Notes…"
            className="w-full min-h-[100px] p-3 border border-stone-200 rounded-lg text-stone-800 placeholder-stone-400 resize-y text-sm"
            rows={3}
          />
        </div>

        <div className="flex gap-2 mt-4 shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-2 px-4 rounded-lg border border-stone-200 text-stone-600"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSave}
            disabled={saving}
            className="flex-1 py-2 px-4 rounded-lg bg-stone-700 text-white disabled:opacity-50"
          >
            {saving ? "Saving…" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}
