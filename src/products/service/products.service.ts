import { Inject, Injectable } from '@nestjs/common';
import productsConfig from '../config/products.config.js';
import type { ConfigType } from '@nestjs/config';
import { TranslationsService } from '../../translations/service/translations.service.js';
import { HttpClient, InjectHttpClient } from '@nestjs/http-client';
import { ProductsSearchRequest } from '../model/products-search.request.js';
import { ProductsSearchResponse } from '../model/products-search.response.js';

@Injectable()
export class ProductsService {
  constructor(
    @Inject(productsConfig.KEY)
    private readonly config: ConfigType<typeof productsConfig>,

    @Inject()
    private readonly translationsService: TranslationsService,

    @InjectHttpClient('products')
    private readonly productsHttpClient: HttpClient,
  ) {}

  public async searchProducts(
    request: ProductsSearchRequest,
  ): Promise<ProductsSearchResponse> {
    throw Error('Method not implemented');
  }
}
