import { cn } from "@/lib/utils";

/** Row of thin bars showing progress through a multi-step modal. `current` is 1-based. */
export function ProgressSteps({ total, current, className }: { total: number; current: number; className?: string }) {
  return (
    <div
      role="progressbar"
      aria-valuemin={1}
      aria-valuemax={total}
      aria-valuenow={current}
      aria-valuetext={`Step ${current} of ${total}`}
      className={cn("flex gap-1.5", className)}
    >
      {Array.from({ length: total }, (_, i) => (
        <span
          key={i}
          className={cn("h-1 flex-1 rounded-pill transition-colors", i < current ? "bg-pink" : "bg-border")}
        />
      ))}
    </div>
  );
}
