import { IconSquare } from "@/components/ui/IconSquare";
import type { whyPrintWave } from "@/content/home";
import { cn } from "@/lib/utils";
import type { IconItem } from "@/types";

type Content = typeof whyPrintWave;

function ItemList({ items, tone }: { items: IconItem[]; tone: "light" | "gradient" }) {
  return (
    <ul className="mt-6 flex flex-col gap-4">
      {items.map((item) => (
        <li key={item.label} className="flex items-center gap-3 text-body">
          <IconSquare icon={item.icon} tone={tone} className={tone === "light" ? "border border-border" : undefined} />
          {item.label}
        </li>
      ))}
    </ul>
  );
}

const panel = "flex flex-col rounded-xl p-6 sm:p-[30px] lg:min-h-[400px]";

/** Side-by-side "Without a system" vs "With Print Wave USA" panels. */
export function ComparisonPanels({
  without,
  with: withUs,
  className,
}: {
  without: Content["without"];
  with: Content["with"];
  className?: string;
}) {
  return (
    <div className={cn("grid gap-6 lg:grid-cols-2", className)}>
      <div className={cn(panel, "bg-sand text-ink")}>
        <h3 className="text-lg font-bold">{without.title}</h3>
        <ItemList items={without.items} tone="light" />
        <p className="mt-auto pt-10 text-[32px] leading-tight font-light tracking-[-0.01em] text-faint sm:text-[40px]">
          {without.footer}
        </p>
      </div>

      <div className={cn(panel, "bg-gradient-ink-panel text-white")}>
        <h3 className="text-lg font-bold">{withUs.title}</h3>
        <ItemList items={withUs.items} tone="gradient" />
        <div className="mt-auto pt-10">
          <p className="inline-flex h-[70px] items-center rounded-pill border-2 border-orange px-[18px] text-[36px] leading-none font-light sm:text-[44px]">
            {withUs.highlight}
          </p>
          <p className="mt-1 origin-left -rotate-3 font-script text-[32px] leading-tight text-orange">{withUs.script}</p>
        </div>
      </div>
    </div>
  );
}
