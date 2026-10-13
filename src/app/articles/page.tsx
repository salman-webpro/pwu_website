import type { Metadata } from "next";
import { ArticleCard } from "@/components/articles/ArticleCard";
import { Container } from "@/components/layout/Container";
import { CtaPanel } from "@/components/sections/CtaPanel";
import { PageHero } from "@/components/sections/PageHero";
import { Card } from "@/components/ui/Card";
import { articlesHero, articlesMeta, articlesPage } from "@/content/articles";
import { ctaPanel } from "@/content/shared";
import { getArticles } from "@/lib/api/articles";

export const metadata: Metadata = {
  title: articlesMeta.title,
  description: articlesMeta.description,
};

// TODO(design): no Articles design exists yet — on-brand placeholder built from shared sections.
export default async function ArticlesPage() {
  const result = await getArticles();
  const articles = result.ok ? result.data : [];

  return (
    <>
      <PageHero content={articlesHero} />

      <section className="mt-10">
        <Container>
          {articles.length > 0 ? (
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </ul>
          ) : (
            <Card className="text-center">
              <p className="text-body text-muted">{articlesPage.empty}</p>
            </Card>
          )}
        </Container>
      </section>

      <CtaPanel content={ctaPanel} className="mt-16 mb-6" />
    </>
  );
}
