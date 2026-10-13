import { Container } from "@/components/layout/Container";

/** Shown while an article loads. */
export default function ArticleLoading() {
  return (
    <Container className="mt-8 mb-6 max-w-[calc(860px+3rem)]">
      <div aria-hidden className="mt-10 h-96 animate-pulse rounded-xl border border-border bg-surface" />
    </Container>
  );
}
