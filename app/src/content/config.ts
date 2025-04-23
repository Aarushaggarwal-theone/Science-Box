import { defineCollection, z } from 'astro:content';

const articlesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.string().transform((str) => new Date(str)),
    draft: z.boolean().optional().default(false),
    titleColor: z.string().optional().default("text-josefin-800"),
  }),
});

export const collections = {
  articles: articlesCollection,
}; 