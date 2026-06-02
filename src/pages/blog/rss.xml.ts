import type { APIRoute } from 'astro';
import rss from '@astrojs/rss';
import { getPublishedArticles, articleSlug } from '../../utils/articles';

const SITE_URL = 'https://christianmaass.com';

export const GET: APIRoute = async (context) => {
  const articles = await getPublishedArticles();
  const site = context.site?.toString() ?? SITE_URL;

  return rss({
    title: 'Christian Maaß — Beiträge',
    description:
      'Notizen zur Übersetzung zwischen Strategie, Technologie und Organisation — und zur Operating-Realität, in der sich Wertschöpfung entscheidet.',
    site,
    items: articles.map((entry) => ({
      title: entry.data.title,
      description: entry.data.summary,
      pubDate: entry.data.date,
      link: `/blog/${articleSlug(entry)}/`,
      author: 'christian@christianmaass.com (Christian Maaß)',
      categories: [entry.data.category],
    })),
    customData: '<language>de-DE</language>',
    stylesheet: false,
  });
};
