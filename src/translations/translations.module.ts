import { Module } from '@nestjs/common';
import { TranslationsService } from './service/translations.service.js';
import { ConfigModule, ConfigService } from '@nestjs/config';
import translationsConfig from './config/translations.config.js';
import { HttpClientModule } from '@nestjs/http-client';
import type { ConfigType } from '@nestjs/config';
import { Temporal } from '@js-temporal/polyfill';

@Module({
  providers: [TranslationsService],
  exports: [TranslationsService],
  imports: [
    ConfigModule.forFeature(translationsConfig),
    HttpClientModule.registerAsync({
      name: 'translations',
      imports: [ConfigModule.forFeature(translationsConfig)],
      inject: [translationsConfig.KEY],
      useFactory: (config: ConfigType<typeof translationsConfig>) => ({
        baseUrl: config.baseUrl,
        timeout: config.timeout as any,
      }),
    }),
  ],
})
export class TranslationsModule {}
