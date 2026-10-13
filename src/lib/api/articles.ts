import type { ApiResult, Article } from "@/types";
import { apiGet, isMock } from "./client";
import { mocks } from "./mocks";

/** All articles (newest first). Cached for an hour when a backend/CMS is connected. */
export function getArticles(): Promise<ApiResult<Article[]>> {
  if (isMock) return mocks.getArticles();
  return apiGet("/articles", { revalidate: 3600 });
}

/** One article, or null when the slug doesn't exist. */
export function getArticle(slug: string): Promise<ApiResult<Article | null>> {
  if (isMock) return mocks.getArticle();
  return apiGet(`/articles/${encodeURIComponent(slug)}`, { revalidate: 3600 });
}
