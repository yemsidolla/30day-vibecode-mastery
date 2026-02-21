"use client";

type DayCardProps = {
  day: number;
  title?: string;
  completed: boolean;
  notes: string;
  onTap: () => void;
};

export default function DayCard({ day, title, completed, onTap }: DayCardProps) {
  return (
    <button
      type="button"
      onClick={onTap}
      className={`
        w-full min-w-[7rem] max-w-[10rem] rounded-lg text-left p-3
        flex flex-col gap-1
        focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2
        ${completed ? "bg-stone-600 text-white" : "bg-stone-200 text-stone-600"}
      `}
      aria-label={title ? `Day ${day}: ${title}` : `Day ${day}`}
    >
      <span className="text-sm font-medium">Day {day}</span>
      {title && (
        <span className="text-xs line-clamp-2 opacity-90">
          {title}
        </span>
      )}
    </button>
  );
}
