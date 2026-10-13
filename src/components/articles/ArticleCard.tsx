import Link from "next/link";
import { Card } from "@/components/ui/Card";
import type { Article } from "@/types";

const dateFormat = new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });

/** One article in the Articles grid. The whole card is a link. */
export function ArticleCard({ article }: { article: Article }) {
  return (
    <Card as="li" className="relative flex flex-col transition-shadow focus-within:shadow-elevated hover:shadow-elevated">
      <p className="text-eyebrow text-pink uppercase">{article.category}</p>
      <h2 className="mt-3 text-h3 text-ink">
        <Link
          href={`/articles/${article.slug}`}
          className="after:absolute after:inset-0 after:rounded-lg focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-pink"
        >
          {article.title}
        </Link>
      </h2>
      <p className="mt-2.5 text-body text-muted">{article.excerpt}</p>
      <time dateTime={article.publishedAt} className="mt-auto pt-6 text-small text-muted">
        {dateFormat.format(new Date(article.publishedAt))}
      </time>
    </Card>
  );
}
