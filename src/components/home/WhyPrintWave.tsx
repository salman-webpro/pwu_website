import { HandDrawnCircle } from "@/components/decor/HandDrawnCircle";
import { Squiggle } from "@/components/decor/Squiggle";
import { Container } from "@/components/layout/Container";
import { ComparisonPanels } from "@/components/sections/ComparisonPanels";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { StatRow } from "@/components/sections/StatRow";
import type { whyPrintWave } from "@/content/home";

/** "Why Print Wave USA": circled label, heading, comparison panels and the 3-stat row. */
export function WhyPrintWave({ content, className }: { content: typeof whyPrintWave; className?: string }) {
  return (
    <section className={className}>
      <Container>
        <div className="relative">
          <Squiggle variant="left" className="top-[60px] -left-[127px] w-[141px]" />
          <SectionHeading
            title={content.title}
            subtitle={content.subtitle}
            eyebrow={
              <HandDrawnCircle className="mb-4 px-[35px] py-[22px]">
                <span className="text-[22px] leading-none font-medium text-pink">{content.eyebrow}</span>
              </HandDrawnCircle>
            }
          />
          <ComparisonPanels without={content.without} with={content.with} className="mt-8" />
          <StatRow items={content.stats} className="mt-9" />
        </div>
      </Container>
    </section>
  );
}
