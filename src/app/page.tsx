import type { Metadata } from "next";
import { BlurBlob } from "@/components/decor/BlurBlob";
import { Squiggle } from "@/components/decor/Squiggle";
import { HomeHero } from "@/components/home/HomeHero";
import { WhyPrintWave } from "@/components/home/WhyPrintWave";
import { Container } from "@/components/layout/Container";
import { CtaPanel } from "@/components/sections/CtaPanel";
import { FeatureStrip } from "@/components/sections/FeatureStrip";
import { ProductGrid } from "@/components/sections/ProductGrid";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { StatsBand } from "@/components/sections/StatsBand";
import { StepsGrid } from "@/components/sections/StepsGrid";
import {
  businessMemoryBand,
  dashboardMockup,
  featureStrip,
  homeHero,
  homeMeta,
  homeProducts,
  homeSteps,
  whyPrintWave,
} from "@/content/home";
import { products } from "@/content/products";
import { ctaPanel } from "@/content/shared";

export const metadata: Metadata = {
  title: { absolute: homeMeta.title },
  description: homeMeta.description,
};

export default function HomePage() {
  return (
    <>
      <HomeHero hero={homeHero} mockup={dashboardMockup} />

      <FeatureStrip items={featureStrip} className="mt-10 lg:mt-[123px]" />

      <section id="how" className="mt-[72px] scroll-mt-24 lg:mt-[120px]">
        <Container>
          <div className="relative">
            <Squiggle variant="left" className="top-5 -left-[152px] w-[141px]" />
            <SectionHeading title={homeSteps.title} subtitle={homeSteps.subtitle} />
            <StepsGrid steps={homeSteps.steps} className="mt-8" />
          </div>
        </Container>
      </section>

      <section id="products" className="relative mt-[72px] scroll-mt-24 lg:mt-[155px]">
        <BlurBlob className="-top-24 right-[15%] size-[560px] bg-lavender/30" />
        <Container className="relative">
          <SectionHeading title={homeProducts.title} subtitle={homeProducts.subtitle} />
          <ProductGrid products={products} className="mt-8" />
        </Container>
      </section>

      <StatsBand
        id="business-memory"
        title={businessMemoryBand.title}
        subtitle={businessMemoryBand.subtitle}
        stats={businessMemoryBand.stats}
        className="mt-[72px] scroll-mt-20 lg:mt-[120px]"
      />

      <WhyPrintWave content={whyPrintWave} className="mt-[72px] lg:mt-[110px]" />

      <CtaPanel content={ctaPanel} className="mt-[72px] mb-6 lg:mt-[60px]" />
    </>
  );
}
