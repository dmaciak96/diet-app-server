import { registerAs } from '@nestjs/config';
import z from 'zod';

export const productsConfigSchema = z.object({
  baseUrl: z.url(),
  apiKey: z.string(),
  timeout: z.string(),
});

export default registerAs('products', () =>
  productsConfigSchema.parse({
    baseUrl: process.env.PRODUCTS_API_BASE_URL,
    apiKey: process.env.PRODUCTS_API_KEY,
    timeout: process.env.PRODUCTS_API_TIMEOUT,
  }),
);
