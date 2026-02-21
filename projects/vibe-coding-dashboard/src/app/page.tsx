"use client";

import { useEffect, useState } from "react";
import DayCard from "@/components/DayCard";
import ProgressBar from "@/components/ProgressBar";
import NoteModal from "@/components/NoteModal";
import { getCourseDay } from "@/data/course";

type ProgressItem = {
  id: number;
  day: number;
  completed: boolean;
  notes: string;
  updated_at: string;
};

export default function Home() {
  const [progress, setProgress] = useState<ProgressItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalDay, setModalDay] = useState<number | null>(null);

  function fetchProgress() {
    fetch("/api/progress")
      .then((res) => res.json())
      .then((data: ProgressItem[]) => {
        setProgress(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }

  useEffect(() => {
    fetchProgress();
  }, []);

  const completedCount = progress.filter((p) => p.completed).length;
  const getProgressForDay = (day: number) =>
    progress.find((p) => p.day === day) ?? {
      day,
      completed: false,
      notes: "",
    };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12 text-stone-500">
        Loading…
      </div>
    );
  }

  const weeks = [
    { title: "Week 1", days: [1, 2, 3, 4, 5, 6, 7] },
    { title: "Week 2", days: [8, 9, 10, 11, 12, 13, 14] },
    { title: "Week 3", days: [15, 16, 17, 18, 19, 20, 21] },
    { title: "Week 4", days: [22, 23, 24, 25, 26, 27, 28, 29, 30] },
  ];

  return (
    <>
      <ProgressBar completed={completedCount} total={30} />
      <div className="space-y-8">
        {weeks.map((week) => (
          <section key={week.title}>
            <h2 className="text-sm font-medium text-stone-500 mb-3">
              {week.title}
            </h2>
            <div className="flex flex-wrap gap-3">
              {week.days.map((day) => {
                const p = getProgressForDay(day);
                const courseDay = getCourseDay(day);
                return (
                  <DayCard
                    key={day}
                    day={day}
                    title={courseDay?.title}
                    completed={p.completed}
                    notes={p.notes}
                    onTap={() => setModalDay(day)}
                  />
                );
              })}
            </div>
          </section>
        ))}
      </div>
      {modalDay !== null && (() => {
        const p = getProgressForDay(modalDay);
        const courseDay = getCourseDay(modalDay);
        return (
          <NoteModal
            day={modalDay}
            title={courseDay?.title}
            summary={courseDay?.summary}
            learn={courseDay?.learn}
            exercise={courseDay?.exercise}
            outcome={courseDay?.outcome}
            checklist={courseDay?.checklist}
            initialNotes={p.notes}
            initialCompleted={p.completed}
            onClose={() => setModalDay(null)}
            onSaved={() => {
              fetchProgress();
              setModalDay(null);
            }}
          />
        );
      })()}
    </>
  );
}
