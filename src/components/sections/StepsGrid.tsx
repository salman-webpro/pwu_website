import { Card } from "@/components/ui/Card";
import { NumberBadge } from "@/components/ui/NumberBadge";
import { cn } from "@/lib/utils";
import type { Step } from "@/types";

const columns = {
  3: "lg:grid-cols-3",
  4: "sm:grid-cols-2 xl:grid-cols-4",
};

/** Numbered step cards (Home: 3 columns, How it works: 4 columns). Pair with SectionHeading. */
export function StepsGrid({ steps, columns: cols = 3, className }: { steps: Step[]; columns?: 3 | 4; className?: string }) {
  return (
    <ol className={cn("grid gap-6", columns[cols], className)}>
      {steps.map((step, i) => (
        <Card as="li" key={step.title}>
          <NumberBadge n={i + 1} />
          <h3 className="mt-4 text-h3 text-ink">{step.title}</h3>
          <p className="mt-2.5 text-body text-muted">{step.body}</p>
        </Card>
      ))}
    </ol>
  );
}
