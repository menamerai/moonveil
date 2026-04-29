import { z, defineCollection } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    author: z.string().default("RAI"),
    tags: z.array(z.string()).default([]),
    transmission: z.string().optional(),
  }),
});

export const collections = { blog };
