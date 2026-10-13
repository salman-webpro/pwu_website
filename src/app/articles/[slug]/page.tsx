import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { articlesPage } from "@/content/articles";
import { getArticle } from "@/lib/api/articles";

// TODO(design): no article design exists yet.

async function loadArticle(params: Promise<{ slug: string }>) {
  const { slug } = await params;
  const result = await getArticle(slug);
  return result.ok ? result.data : null;
}

export async function generateMetadata({ params }: PageProps<"/articles/[slug]">): Promise<Metadata> {
  const article = await loadArticle(params);
  return article ? { title: article.title, description: article.excerpt } : {};
}

export default async function ArticlePage({ params }: PageProps<"/articles/[slug]">) {
  const article = await loadArticle(params);
  if (!article) notFound();

  return (
    <Container className="mt-8 mb-6 max-w-[calc(860px+3rem)]">
      <Link
        href="/articles"
        className="inline-flex items-center gap-2 rounded-sm text-small font-semibold text-muted hover:text-ink focus-visible:ring-2 focus-visible:ring-pink focus-visible:outline-none"
      >
        <ArrowLeft aria-hidden className="size-4" />
        {articlesPage.backLabel}
      </Link>
      <article className="mt-6 rounded-xl border border-border bg-surface p-6 sm:p-12">
        <Eyebrow>{article.category}</Eyebrow>
        <h1 className="mt-4 text-h2 text-ink lg:text-5xl lg:leading-tight">{article.title}</h1>
        <p className="mt-6 text-lead text-body">{article.excerpt}</p>
        {article.body && (
          <div className="mt-8 flex flex-col gap-5 text-body text-body">
            {article.body.split(/\n{2,}/).map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        )}
      </article>
    </Container>
  );
}
