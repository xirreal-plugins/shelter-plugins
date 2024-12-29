import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const plugins = defineCollection({
   loader: glob({ base: "./src/plugins", pattern: "**/*.{md,mdx}" }),
   schema: z.object({
      title: z.string(),
      description: z.string(),
      url: z.string(),
      demoImage: z.string().optional(),
      pinned: z.boolean().optional(),
   }),
});

export const collections = { plugins };
