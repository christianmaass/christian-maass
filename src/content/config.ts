import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string().min(1),
    summary: z.string().min(1).max(320),
    date: z.coerce.date(),
    author: z.string().default('Christian Maaß'),
    category: z.enum(['Essay', 'Notiz', 'Interview', 'Allgemein']),
    image: z.object({
      src: z.string().startsWith('/'),
      alt: z.string().min(1),
    }),
    draft: z.boolean().default(false),
  }),
});

export const collections = { articles };
