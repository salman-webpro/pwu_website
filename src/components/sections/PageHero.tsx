import type { ReactNode } from "react";
import { BlurBlob } from "@/components/decor/BlurBlob";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { GradientText } from "@/components/ui/GradientText";
import { ModalButton } from "@/components/ui/ModalButton";
import { cn } from "@/lib/utils";
import type { PageHeroContent } from "@/types";

/**
 * Inner-page hero (How it works, Business in LA, Contact, Articles):
 * gradient card with eyebrow pill, h1 with a gradient part, lead and optional modal button.
 * `decor` is rendered inside the hero's positioning box, e.g. a <Squiggle /> placed per page.
 */
export function PageHero({
  content,
  decor,
  className,
  cardClassName,
}: {
  content: PageHeroContent;
  decor?: ReactNode;
  className?: string;
  /** Per-page tweaks to the gradient card, e.g. padding. */
  cardClassName?: string;
}) {
  const { eyebrow, titleStart, titleGradient, titleEnd, gradientOnNewLine, lead, cta } = content;
  return (
    <section className={cn("relative pt-6 lg:pt-8", className)}>
      {/* Pink haze at the far left */}
      <BlurBlob className="top-24 -left-40 size-[420px] bg-pink/10" />

      <Container>
        <div className="relative">
          <div
            className={cn(
              // Content is vertically centered in a card at least 520px tall on desktop.
              "flex flex-col items-start justify-center rounded-xl bg-gradient-hero px-6 py-12 sm:rounded-hero sm:px-12 sm:py-16 xl:min-h-[520px] xl:px-[72px] xl:py-[88px]",
              cardClassName,
            )}
          >
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="mt-4 text-display-l text-ink">
              {gradientOnNewLine ? <span className="block">{titleStart}</span> : titleStart}
              {titleGradient && (
                <GradientText className={cn(gradientOnNewLine && "block pb-[0.06em]")}>{titleGradient}</GradientText>
              )}
              {titleEnd}
            </h1>
            <p className="mt-8 max-w-[680px] text-lead text-body lg:mt-10">{lead}</p>
            {cta && (
              <ModalButton modal={cta.modal} preset={cta.preset} className="mt-6">
                {cta.label}
              </ModalButton>
            )}
          </div>
          {decor}
        </div>
      </Container>
    </section>
  );
}
