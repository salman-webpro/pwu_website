import { ModalButton } from "@/components/ui/ModalButton";
import { cn } from "@/lib/utils";
import type { ModalCta } from "@/types";

/** Left-aligned soft gradient panel with one modal button ("Typical LA reorder"). */
export function SoftCtaPanel({
  title,
  body,
  cta,
  className,
}: {
  title: string;
  body: string;
  cta: ModalCta;
  className?: string;
}) {
  return (
    <section
      className={cn("rounded-xl border border-border/60 bg-gradient-hero px-6 py-12 sm:px-14 sm:pt-16 sm:pb-14", className)}
    >
      <h2 className="text-h2 text-ink">{title}</h2>
      <p className="mt-7 text-body text-muted">{body}</p>
      <ModalButton modal={cta.modal} preset={cta.preset} size="md" className="mt-5">
        {cta.label}
      </ModalButton>
    </section>
  );
}
