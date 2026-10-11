import { Inject, Injectable } from '@nestjs/common';
import translationsConfig from '../config/translations.config.js';
import type { ConfigType } from '@nestjs/config';

@Injectable()
export class TranslationsService {
    
    constructor(
        @Inject(translationsConfig.KEY)
        private readonly config: ConfigType<typeof translationsConfig>
    ) {}
}
