import { cn } from "@/lib/utils";

/** 38px gradient circle with a step number. */
export function NumberBadge({ n, className }: { n: number; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex size-[38px] shrink-0 items-center justify-center rounded-pill bg-gradient-brand text-body font-semibold text-white",
        className,
      )}
    >
      {n}
    </span>
  );
}
