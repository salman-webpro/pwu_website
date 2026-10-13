import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { notFoundPage } from "@/content/info-pages";

/** Shown for any URL that doesn't exist (and when a page calls notFound()). */
export default function NotFound() {
  return (
    <Container className="pt-6 pb-6 lg:pt-8">
      <div className="flex flex-col items-start justify-center rounded-xl bg-gradient-hero px-6 py-16 sm:rounded-hero sm:px-12 xl:min-h-[520px] xl:px-[72px]">
        <Eyebrow>{notFoundPage.eyebrow}</Eyebrow>
        <h1 className="mt-4 text-display-l text-ink">{notFoundPage.title}</h1>
        <p className="mt-8 max-w-[680px] text-lead text-copy">{notFoundPage.lead}</p>
        <Button href={notFoundPage.cta.href} className="mt-6">
          {notFoundPage.cta.label}
        </Button>
      </div>
    </Container>
  );
}
