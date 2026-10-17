import { Controller, Get, Inject, Query } from '@nestjs/common';
import { ProductsService } from '../service/products.service.js';
import { TranslationsService } from '../../translations/service/translations.service.js';

@Controller('products')
export class ProductsController {
  constructor(
    @Inject()
    private readonly productService: ProductsService,

    @Inject()
    private readonly translationsService: TranslationsService,
  ) {}

  @Get()
  async findProduct(@Query('name') name: string) {
    const translatedProductName = await this.translationsService.translateText({
      textToTranslate: name,
      format: 'text',
      sourceLang: 'pl',
      targetLang: 'en',
    });

    const productsSearchResponse = await this.productService.searchProducts({
      query: translatedProductName.translatedText,
      pageNumber: 1,
      pageSize: 5,
      sortBy: 'score',
      sortOrder: 'desc',
    });

    return productsSearchResponse.foods;
  }
}
