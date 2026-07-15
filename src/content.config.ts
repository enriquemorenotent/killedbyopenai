import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    category: z.enum(['model', 'product', 'api', 'research', 'company']),
    status: z.enum(['retired', 'deprecated', 'rebranded', 'paused']),
    launched: z.string().optional(),
    retired: z.string(),
    replacement: z.string().optional(),
    summary: z.string(),
    epitaph: z.string(),
    cause: z.string(),
    officialUrl: z.string().url().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

export const collections = { projects };
