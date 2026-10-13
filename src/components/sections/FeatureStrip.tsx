import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";
import type { FeatureItem } from "@/types";

/** White elevated strip of short features under the Home hero, separated by thin dividers. */
export function FeatureStrip({ items, className }: { items: FeatureItem[]; className?: string }) {
  return (
    <Container className={cn("relative z-10", className)}>
      {/* gap-px over a border-colored background draws the dividers in any column layout */}
      <ul className="grid gap-px overflow-hidden rounded-lg bg-border shadow-elevated sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <li key={item.title} className="bg-surface px-6 py-7 sm:px-8 lg:min-h-[132px] lg:py-9">
            <p className="text-body font-bold text-ink">{item.title}</p>
            <p className="mt-2 text-[15px] leading-[22px] text-muted">{item.body}</p>
          </li>
        ))}
      </ul>
    </Container>
  );
}
