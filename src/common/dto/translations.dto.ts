export type SupportedLanguage = 'en' | 'pl';
export type TranslationsDataFormat = 'text' | 'html';

export interface TranslationsRequestDto {
  textToTranslate: string;
  sourceLang: SupportedLanguage;
  targetLang: SupportedLanguage;
  format: TranslationsDataFormat;
}

export interface TranslationsResponseDto {
  translatedText: string;
}
