type ProgressBarProps = {
  completed: number;
  total: number;
};

export default function ProgressBar({ completed, total }: ProgressBarProps) {
  const pct = total === 0 ? 0 : Math.round((completed / total) * 100);
  return (
    <div className="mb-6">
      <div className="flex justify-between text-sm text-stone-600 mb-1">
        <span>Progress</span>
        <span>{pct}%</span>
      </div>
      <div className="h-2 bg-stone-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-stone-600 rounded-full transition-[width] ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
