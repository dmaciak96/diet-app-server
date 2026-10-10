import { Module } from '@nestjs/common';
import { TranslationsService } from './translations.service.js';

@Module({
  providers: [TranslationsService]
})
export class TranslationsModule {}
