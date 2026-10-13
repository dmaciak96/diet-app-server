import { Temporal } from '@js-temporal/polyfill';
import { registerAs } from '@nestjs/config';
import z from 'zod';

export const translationsConfigSchema = z.object({
  baseUrl: z.url(),
  timeout: z.string(),
});

export default registerAs('translations', () =>
  translationsConfigSchema.parse({
    baseUrl: process.env.TRANSLATIONS_API_BASE_URL,
    timeout: process.env.TRANSLATIONS_API_TIMEOUT,
  }),
);
