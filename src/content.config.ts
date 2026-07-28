import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const reports = defineCollection({
  loader: glob({ pattern: "*.md", base: "./reports" }),
  schema: z.object({}),
});

const reportsEn = defineCollection({
  loader: glob({ pattern: "*.md", base: "./reports/en" }),
  schema: z.object({}),
});

export const collections = { reports, reportsEn };
