import { Module } from '@nestjs/common';
import { TranslationsService } from './service/translations.service.js';
import { ConfigModule } from '@nestjs/config';
import translationsConfig from './config/translations.config.js';

@Module({
  providers: [TranslationsService],
  exports: [TranslationsService],
  imports: [ConfigModule.forFeature(translationsConfig)]
})
export class TranslationsModule { }
