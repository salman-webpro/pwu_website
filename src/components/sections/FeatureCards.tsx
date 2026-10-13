import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import type { FeatureItem } from "@/types";

/** Row of plain feature cards (title + body, no number badge). Pair with SectionHeading. */
export function FeatureCards({ items, className }: { items: FeatureItem[]; className?: string }) {
  return (
    <ul className={cn("grid gap-6 sm:grid-cols-2 xl:grid-cols-4", className)}>
      {items.map((item) => (
        <Card as="li" key={item.title}>
          <h3 className="text-xl leading-snug font-bold text-ink">{item.title}</h3>
          <p className="mt-3 text-body text-muted">{item.body}</p>
        </Card>
      ))}
    </ul>
  );
}
