import { Container } from "@/components/layout/Container";

/** Shown while an info page loads. Also gives `await params` the <Suspense> boundary Cache Components requires. */
export default function InfoPageLoading() {
  return (
    <Container className="mt-8 mb-6">
      <div aria-hidden className="mt-10 h-96 animate-pulse rounded-xl border border-border bg-surface" />
    </Container>
  );
}
