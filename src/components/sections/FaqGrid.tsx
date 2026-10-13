import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import type { Faq } from "@/types";
import { SectionHeading } from "./SectionHeading";

/** Heading + static FAQ cards (3 per row on desktop). */
export function FaqGrid({ id, title, faqs, className }: { id?: string; title: string; faqs: Faq[]; className?: string }) {
  return (
    <section id={id} className={cn("scroll-mt-24", className)}>
      <SectionHeading title={title} />
      <ul className="mt-8 grid gap-6 md:grid-cols-3">
        {faqs.map((faq) => (
          <Card as="li" key={faq.q}>
            <h3 className="text-xl leading-snug font-bold text-ink">{faq.q}</h3>
            <p className="mt-3 text-body text-muted">{faq.a}</p>
          </Card>
        ))}
      </ul>
    </section>
  );
}
