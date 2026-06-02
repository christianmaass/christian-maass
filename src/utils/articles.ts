import { getCollection, type CollectionEntry } from 'astro:content';

const DATE_PREFIX = /^\d{4}-\d{2}-\d{2}-/;
const NUMERIC_SLUG = /^\d+$/;

export type Article = CollectionEntry<'articles'>;

export function articleSlug(entry: Article): string {
  const slug = entry.id.replace(DATE_PREFIX, '');
  if (!slug || NUMERIC_SLUG.test(slug)) {
    throw new Error(
      `Invalid article slug "${slug}" derived from "${entry.id}". ` +
      `Slugs must contain at least one non-digit character to avoid ` +
      `collisions with pagination URLs like /blog/2/.`,
    );
  }
  return slug;
}

export function articleUrl(entry: Article): string {
  return `/blog/${articleSlug(entry)}/`;
}

export async function getPublishedArticles(): Promise<Article[]> {
  const isProd = import.meta.env.PROD;
  const all = await getCollection('articles', ({ data }) => !isProd || !data.draft);
  // Trigger slug validation upfront, so build errors point at the bad file.
  all.forEach(articleSlug);
  return all.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}
