import { Injectable } from '@nestjs/common';
import {
  TranslationsRequestDto,
  TranslationsResponseDto,
} from '../../common/dto/translations.dto.js';
import { HttpClient, InjectHttpClient } from '@nestjs/http-client';

@Injectable()
export class TranslationsService {
  constructor(
    @InjectHttpClient('translations')
    private readonly translationsHttpClient: HttpClient,
  ) {}

  public async translateText(
    translationsDto: TranslationsRequestDto,
  ): Promise<TranslationsResponseDto> {
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
    return response.data;
  }
}
