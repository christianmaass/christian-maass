import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://christianmaass.com',
  prefetch: {
    defaultStrategy: 'hover',
  },
  compressHTML: true,
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
  integrations: [
    sitemap({
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date(),
      filter: (page) => {
        // Pagination-URLs (/blog/2/, /blog/3/, …) und RSS aus dem
        // Sitemap ausschließen — sind keine kanonischen Inhalte.
        if (/\/blog\/\d+\/?$/.test(page)) return false;
        if (/\/blog\/rss\.xml$/.test(page)) return false;
        // /thomann ist eine nicht-öffentliche Präsentation (nur direkte URL)
        if (/\/thomann(\/|$)/.test(page)) return false;
        return true;
      },
      serialize(item) {
        const path = new URL(item.url).pathname.replace(/\/$/, '');
        if (path === '' || path === '/') {
          item.priority = 1.0;
        } else if (path === '/christian-maass') {
          item.priority = 0.9;
        } else if (path === '/fachartikel') {
          item.priority = 0.85;
          item.changefreq = 'weekly';
        } else if (path === '/blog') {
          item.priority = 0.85;
          item.changefreq = 'weekly';
        } else if (path.startsWith('/blog/')) {
          item.priority = 0.7;
          item.changefreq = 'monthly';
        } else if (path === '/buecher' || path === '/beirat') {
          item.priority = 0.8;
        } else if (path === '/lehre') {
          item.priority = 0.75;
        } else if (path === '/kontakt') {
          item.priority = 0.7;
          item.changefreq = 'yearly';
        } else if (
          path === '/impressum' ||
          path === '/datenschutz' ||
          path === '/barrierefreiheit'
        ) {
          item.priority = 0.3;
          item.changefreq = 'yearly';
        }
        return item;
      },
    }),
  ],
});
