import type { Metadata } from "next";
import { Squiggle } from "@/components/decor/Squiggle";
import { Container } from "@/components/layout/Container";
import { CtaPanel } from "@/components/sections/CtaPanel";
import { FaqGrid } from "@/components/sections/FaqGrid";
import { MemoryPanel } from "@/components/sections/MemoryPanel";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { StepsGrid } from "@/components/sections/StepsGrid";
import { faqs } from "@/content/faqs";
import { howItWorksFaq, howItWorksHero, howItWorksMeta, howItWorksSteps, memoryPanel } from "@/content/how-it-works";
import { ctaPanel } from "@/content/shared";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(howItWorksMeta, "/how-it-works");

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        content={howItWorksHero}
        decor={<Squiggle variant="left" className="top-[calc(100%-88px)] -left-[130px] w-[141px]" />}
      />

      <section className="mt-16 lg:mt-10">
        <Container>
          <SectionHeading title={howItWorksSteps.title} />
          <StepsGrid steps={howItWorksSteps.steps} columns={4} className="mt-8" />
        </Container>
      </section>

      <Container className="mt-16">
        <div className="relative">
          <Squiggle variant="right" className="top-[344px] left-full ml-5 w-[165px]" />
          <MemoryPanel
            id="business-memory"
            title={memoryPanel.title}
            subtitle={memoryPanel.subtitle}
            items={memoryPanel.items}
          />
          <FaqGrid id="faq" title={howItWorksFaq.title} faqs={faqs} className="mt-16 lg:mt-10" />
        </div>
      </Container>

      <CtaPanel content={ctaPanel} className="mt-16 mb-6" />
    </>
  );
}
