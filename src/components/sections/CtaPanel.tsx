import { Container } from "@/components/layout/Container";
import { ModalButton } from "@/components/ui/ModalButton";
import type { CtaPanelContent } from "@/types";

/** Centered white "Not sure where to start?" panel with two modal buttons. */
export function CtaPanel({ content, className }: { content: CtaPanelContent; className?: string }) {
  const { title, body, primary, secondary } = content;
  return (
    <section className={className}>
      <Container>
        <div className="rounded-xl border border-border bg-surface px-6 py-14 text-center sm:py-[72px]">
          <h2 className="text-h2 text-ink">{title}</h2>
          <p className="mt-7 text-body text-muted">{body}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <ModalButton modal={primary.modal} preset={primary.preset}>
              {primary.label}
            </ModalButton>
            <ModalButton modal={secondary.modal} preset={secondary.preset} variant="outline">
              {secondary.label}
            </ModalButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
