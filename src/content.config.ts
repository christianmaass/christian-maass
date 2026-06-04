import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string().min(1),
    summary: z.string().min(1).max(320),
    date: z.coerce.date(),
    lastModified: z.coerce.date().optional(),
    author: z.string().default('Christian Maaß'),
    category: z.enum(['Essay', 'Notiz', 'Interview', 'Allgemein']),
    image: z.object({
      src: z.string().startsWith('/'),
      alt: z.string().min(1),
      width: z.number().optional(),
      height: z.number().optional(),
    }),
    draft: z.boolean().default(false),
  }),
});

const essays = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/essays' }),
  schema: z.object({
    title: z.string().min(1),
    summary: z.string().min(1).max(320),
    date: z.coerce.date(),
    type: z.enum(['Essay', 'Interview']),
    externalUrl: z.string().url(),
    publisher: z.string().default('eTailment'),
    image: z.object({
      src: z.string().startsWith('/'),
      alt: z.string().min(1),
    }),
    draft: z.boolean().default(false),
  }),
});

export const collections = { articles, essays };
