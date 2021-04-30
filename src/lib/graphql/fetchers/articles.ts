import { executeGraphqlQuery } from "../client";
import { GET_ARTICLE_DATA, GET_PAGE_ARTICLES } from "../queries/articles";
import { ArticlesGraphqlResponse } from "../../../types/shared/graphql.types";
import {
  Article,
  ArticlesMap,
  SlugStaticPath,
} from "../../../types/shared/articles.types";
import {
  mapArticleElement,
  mapResponseToArticlesMap,
} from "../mappers/articlesGraphqlResponse";

export async function fetchPageArticles(): Promise<ArticlesMap> {
  const response = await executeGraphqlQuery<ArticlesGraphqlResponse>(
    GET_PAGE_ARTICLES,
    {}
  );

  return mapResponseToArticlesMap(response);
}

export async function fetchArticleCompleteData(
  slug: string
): Promise<Article | undefined> {
  const response = await executeGraphqlQuery<ArticlesGraphqlResponse>(
    GET_ARTICLE_DATA,
    { slug }
  );

  if (response && response.data.allPost.length > 0) {
    return mapArticleElement(response?.data.allPost[0]);
  }
}

export async function fetchAllArticleSlugs(): Promise<SlugStaticPath[]> {
  const response = await executeGraphqlQuery<ArticlesGraphqlResponse>(
    GET_ARTICLE_DATA,
    {}
  );

  const slugs: SlugStaticPath[] = [];

  if (response) {
    response.data.allPost.forEach((article) => {
      slugs.push({ slug: article.slug.current });
    });
  }

  return slugs;
}
