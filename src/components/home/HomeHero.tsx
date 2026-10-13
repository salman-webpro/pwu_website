import { BlurBlob } from "@/components/decor/BlurBlob";
import { Squiggle } from "@/components/decor/Squiggle";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { ModalButton } from "@/components/ui/ModalButton";
import type { dashboardMockup, homeHero } from "@/content/home";
import { DashboardMockup } from "./DashboardMockup";

/** Home hero: gradient card with the headline on the left and the dashboard illustration on the right. */
export function HomeHero({ hero, mockup }: { hero: typeof homeHero; mockup: typeof dashboardMockup }) {
  return (
    <section className="relative pt-5">
      {/* Pink haze at the far left */}
      <BlurBlob className="top-48 -left-40 size-[420px] bg-pink/10" />

      <Container>
        <div className="relative">
          <div className="grid items-center gap-12 rounded-xl bg-gradient-hero px-6 py-10 sm:rounded-hero sm:px-12 sm:py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,577px)] lg:gap-10 xl:px-[72px] xl:py-[88px]">
            <div>
              <h1 className="text-display-xl text-ink">
                {hero.titleLines.map((line) =>
                  line.gradient ? (
                    <GradientText key={line.text} className="block pb-[0.06em]">
                      {line.text}
                    </GradientText>
                  ) : (
                    <span key={line.text} className="block">
                      {line.text}
                    </span>
                  ),
                )}
              </h1>
              <p className="mt-8 max-w-[520px] text-lead text-body">{hero.lead}</p>
              <div className="mt-10 flex flex-wrap gap-3.5">
                <ModalButton modal={hero.primaryCta.modal} preset={hero.primaryCta.preset}>
                  {hero.primaryCta.label}
                </ModalButton>
                <Button variant="secondary" href={hero.secondaryCta.href} className="shadow-none">
                  {hero.secondaryCta.label}
                </Button>
              </div>
              <p className="mt-5 max-w-[520px] text-body text-muted">{hero.note}</p>
            </div>

            <DashboardMockup data={mockup} />
          </div>

          <Squiggle variant="right" className="top-[calc(100%-35px)] left-full ml-1 w-[142px]" />
        </div>
      </Container>
    </section>
  );
}
