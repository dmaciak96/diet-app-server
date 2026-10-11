import { registerAs } from "@nestjs/config";
import z from "zod";

export const translationsConfigSchema = z.object({
  baseUrl: z.url(),
});

export default registerAs('translations', () =>
  translationsConfigSchema.parse({
    baseUrl: process.env.TRANSLATIONS_API_BASE_URL,
  }),
);