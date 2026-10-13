import { IconSquare } from "@/components/ui/IconSquare";
import { cn } from "@/lib/utils";
import type { IconStat } from "@/types";

/** Three icon + big number + label columns, no cards. */
export function StatRow({ items, className }: { items: IconStat[]; className?: string }) {
  return (
    <ul className={cn("grid gap-8 md:grid-cols-3", className)}>
      {items.map((item) => (
        <li key={item.label}>
          <IconSquare icon={item.icon} tone="ink" size={34} />
          <p className="mt-3.5 text-stat-light text-ink">{item.value}</p>
          <p className="mt-2 text-[15px] text-muted">{item.label}</p>
        </li>
      ))}
    </ul>
  );
}
