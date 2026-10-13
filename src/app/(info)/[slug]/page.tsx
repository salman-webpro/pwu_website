import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/sections/PageHero";
import { faqs } from "@/content/faqs";
import { getInfoPage, infoPages } from "@/content/info-pages";
import { pageMetadata } from "@/lib/seo";

// Placeholder pages behind the footer links: /about, /faqs, /shipping, /returns, /accessibility, /privacy, /terms.

export function generateStaticParams() {
  return infoPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[slug]">): Promise<Metadata> {
  const page = getInfoPage((await params).slug);
  return page ? pageMetadata({ title: page.eyebrow, description: page.description }, `/${page.slug}`) : {};
}

export default async function InfoPage({ params }: PageProps<"/[slug]">) {
  const page = getInfoPage((await params).slug);
  if (!page) notFound();

  return (
    <>
      <PageHero content={{ eyebrow: page.eyebrow, titleStart: page.title, lead: page.description }} />

      <Container className="mt-8 mb-6">
        <div className="rounded-xl border border-border bg-surface p-6 sm:p-12">
          {page.body.length > 0 && (
            <div className="flex max-w-[760px] flex-col gap-5 text-body text-copy">
              {page.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          )}
          {page.showFaqs && (
            <dl className="flex max-w-[760px] flex-col divide-y divide-border">
              {faqs.map((faq) => (
                <div key={faq.q} className="py-6 first:pt-0 last:pb-0">
                  <dt className="text-xl leading-snug font-bold text-ink">{faq.q}</dt>
                  <dd className="mt-2 text-body text-muted">{faq.a}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </Container>
    </>
  );
}
