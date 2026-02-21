import Link from "next/link";
import { course } from "@/data/course";

export default function RoadmapPage() {
  const weeks = [
    { title: "Week 1 — Prompt Thinking & Controlled Code", days: [1, 2, 3, 4, 5, 6, 7] },
    { title: "Week 2 — Architecture Before Code", days: [8, 9, 10, 11, 12, 13, 14] },
    { title: "Week 3 — Multi-Agent & AI Team Thinking", days: [15, 16, 17, 18, 19, 20, 21] },
    { title: "Week 4 — Production & Mastery", days: [22, 23, 24, 25, 26, 27, 28, 29, 30] },
  ];

  return (
    <div className="space-y-8 pb-12">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-xl font-semibold text-stone-800">Full roadmap</h1>
        <Link
          href="/"
          className="text-sm text-stone-500 hover:text-stone-700"
        >
          Back to dashboard
        </Link>
      </div>

      <p className="text-sm text-stone-600">
        By Day 30 you can: design systems before prompting, control AI code generation,
        prevent complexity explosion, refactor safely, structure multi-agent teams,
        run an AI-first workflow, and ship production-ready software.
      </p>

      {weeks.map((week) => (
        <section key={week.title}>
          <h2 className="text-sm font-medium text-stone-500 mb-3">{week.title}</h2>
          <ul className="space-y-3">
            {week.days.map((dayNum) => {
              const d = course.find((x) => x.day === dayNum);
              return (
                <li key={dayNum} className="border-b border-stone-100 pb-3 last:border-0">
                  <span className="text-stone-400 font-medium">Day {dayNum}</span>
                  <p className="font-medium text-stone-800 mt-0.5">{d?.title ?? `Day ${dayNum}`}</p>
                  <p className="text-sm text-stone-500 mt-1">{d?.summary}</p>
                </li>
              );
            })}
          </ul>
        </section>
      ))}

      <section className="pt-4 border-t border-stone-200">
        <h2 className="text-sm font-medium text-stone-500 mb-2">Daily practice rule</h2>
        <ul className="text-sm text-stone-600 space-y-1">
          <li>• Never ask AI for &quot;complete system&quot;</li>
          <li>• Always define architecture first</li>
          <li>• Always limit scope</li>
          <li>• Always review before expanding</li>
          <li>• Always refactor</li>
        </ul>
      </section>
    </div>
  );
}
