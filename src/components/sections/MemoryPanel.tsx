import { cn } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";

/** Soft gradient panel with 4 big pink words ("What Business Memory keeps"). */
export function MemoryPanel({
  id,
  title,
  subtitle,
  items,
  className,
}: {
  id?: string;
  title: string;
  subtitle: string;
  items: { word: string; title: string; body: string }[];
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 rounded-xl border border-border/60 bg-gradient-hero px-6 py-12 sm:p-14 lg:min-h-[459px]",
        className,
      )}
    >
      <SectionHeading title={title} subtitle={subtitle} />
      {/* Desktop: words spread edge to edge, like the design. */}
      <ul className="mt-10 grid gap-10 sm:grid-cols-2 lg:mt-11 lg:flex lg:justify-between lg:gap-8">
        {items.map((item) => (
          <li key={item.word}>
            <p aria-hidden className="text-big-word text-pink">
              {item.word}
            </p>
            <h3 className="mt-4 text-body font-bold text-copy lg:mt-8">{item.title}</h3>
            <p className="mt-0.5 text-body text-muted">{item.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
