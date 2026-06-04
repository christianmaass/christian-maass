import { getCollection, type CollectionEntry } from 'astro:content';

const DATE_PREFIX = /^\d{4}-\d{2}-\d{2}-/;
const NUMERIC_SLUG = /^\d+$/;

export type Essay = CollectionEntry<'essays'>;

export function essaySlug(entry: Essay): string {
  const slug = entry.id.replace(DATE_PREFIX, '');
  if (!slug || NUMERIC_SLUG.test(slug)) {
    throw new Error(
      `Invalid essay slug "${slug}" derived from "${entry.id}". ` +
      `Slugs must contain at least one non-digit character to avoid ` +
      `collisions with pagination URLs like /fachartikel/2/.`,
    );
  }
  return slug;
}

export async function getPublishedEssays(): Promise<Essay[]> {
  const isProd = import.meta.env.PROD;
  const all = await getCollection('essays', ({ data }) => !isProd || !data.draft);
  all.forEach(essaySlug);
  return all.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}
