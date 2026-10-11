import { registerAs } from '@nestjs/config';
import { z } from 'zod';

export const appConfigSchema = z.object({
  port: z.coerce.number().int().min(1).max(65535),
});

export default registerAs('app', () =>
  appConfigSchema.parse({
    port: process.env.PORT,
  }),
);
