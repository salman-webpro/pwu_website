import type { Metadata } from "next";
import { BlurBlob } from "@/components/decor/BlurBlob";
import { Squiggle } from "@/components/decor/Squiggle";
import { Container } from "@/components/layout/Container";
import { ChipList } from "@/components/sections/ChipList";
import { CtaPanel } from "@/components/sections/CtaPanel";
import { FeatureCards } from "@/components/sections/FeatureCards";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { SoftCtaPanel } from "@/components/sections/SoftCtaPanel";
import { businessInLaHero, businessInLaMeta, laChips, laFeatures, laSoftCta } from "@/content/business-in-la";
import { ctaPanel } from "@/content/shared";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(businessInLaMeta, "/business-in-la");

export default function BusinessInLaPage() {
  return (
    <>
      <PageHero
        content={businessInLaHero}
        className="lg:pt-[17px]"
        decor={<Squiggle variant="right" className="top-[calc(100%-22px)] left-full w-[142px]" />}
      />

      <section className="mt-16 lg:mt-10">
        <Container>
          <SectionHeading title={laFeatures.title} />
          <FeatureCards items={laFeatures.items} className="mt-8" />
        </Container>
      </section>

      <section className="relative mt-16 lg:mt-[72px]">
        <BlurBlob className="-top-32 left-[40%] h-[260px] w-[720px] bg-lavender/30" />
        <Container className="relative">
          <div className="relative">
            <Squiggle variant="left" className="top-0 -left-[145px] w-[141px]" />
            <ChipList title={laChips.title} chips={laChips.chips} />
            <SoftCtaPanel {...laSoftCta} className="mt-6" />
          </div>
        </Container>
      </section>

      <CtaPanel content={ctaPanel} className="mt-6 mb-6" />
    </>
  );
}
