import { getCollection, type CollectionEntry } from 'astro:content';

const DATE_PREFIX = /^\d{4}-\d{2}-\d{2}-/;

export type Article = CollectionEntry<'articles'>;

export function articleSlug(entry: Article): string {
  return entry.id.replace(DATE_PREFIX, '');
}

export function articleUrl(entry: Article): string {
  return `/blog/${articleSlug(entry)}/`;
}

export async function getPublishedArticles(): Promise<Article[]> {
  const isProd = import.meta.env.PROD;
  const all = await getCollection('articles', ({ data }) => !isProd || !data.draft);
  return all.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}
