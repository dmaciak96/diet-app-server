import { Injectable, Logger } from '@nestjs/common';
import {
  TranslationsRequestDto,
  TranslationsResponseDto,
} from '../../common/dto/translations.dto.js';
import { HttpClient, InjectHttpClient } from '@nestjs/http-client';

@Injectable()
export class TranslationsService {
  private readonly logger = new Logger(TranslationsService.name);

  constructor(
    @InjectHttpClient('translations')
    private readonly translationsHttpClient: HttpClient,
  ) {}

  public async translateText(
    translationsDto: TranslationsRequestDto,
  ): Promise<TranslationsResponseDto> {
    this.logger.log('Sending translation request', {
      text: translationsDto.textToTranslate,
      sourceLang: translationsDto.sourceLang,
      targetlang: translationsDto.targetLang,
    });
    const response =
      await this.translationsHttpClient.post<TranslationsResponseDto>(
        '/translate',
        {
          json: {
            q: translationsDto.textToTranslate,
            source: translationsDto.sourceLang,
            target: translationsDto.targetLang,
            format: translationsDto.format,
          },
        },
      );
    this.logger.debug('Translation finished', {
      status: response.status,
      body: response.data,
    });
    return response.data;
  }
}
