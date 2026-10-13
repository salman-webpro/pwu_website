import type { Metadata } from "next";
import { BlurBlob } from "@/components/decor/BlurBlob";
import { Squiggle } from "@/components/decor/Squiggle";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactOptions } from "@/components/contact/ContactOptions";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/sections/PageHero";
import { contactForm, contactHero, contactMeta, contactOptions } from "@/content/contact";

export const metadata: Metadata = {
  title: contactMeta.title,
  description: contactMeta.description,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        content={contactHero}
        decor={<Squiggle variant="right" className="top-[calc(100%-48px)] left-full w-[142px]" />}
      />

      <section className="relative mt-8 mb-6">
        <BlurBlob className="top-40 left-[40%] h-[200px] w-[720px] bg-lavender/30" />
        <Container className="relative">
          <ContactOptions content={contactOptions} />
          <ContactForm copy={contactForm} className="mt-16" />
        </Container>
      </section>
    </>
  );
}
