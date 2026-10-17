import { Inject, Injectable, Logger } from '@nestjs/common';
import productsConfig from '../config/products.config.js';
import type { ConfigType } from '@nestjs/config';
import { HttpClient, InjectHttpClient } from '@nestjs/http-client';
import { ProductsSearchResponse } from '../model/products-search.response.js';
import { ProductsSearchRequest } from '../model/products-search.request.js';

@Injectable()
export class ProductsService {
  private readonly logger = new Logger(ProductsService.name);

  constructor(
    @Inject(productsConfig.KEY)
    private readonly config: ConfigType<typeof productsConfig>,

    @InjectHttpClient('products')
    private readonly productsHttpClient: HttpClient,
  ) {}

  public async searchProducts(
    request: Partial<ProductsSearchRequest>,
  ): Promise<ProductsSearchResponse> {
    /*
      0. Sprawdź Cache i zwróć obiekt jeżeli istnieje
      2. Wyślij request po produkty (sort by score)
      5. Zapisz w Cache (klucz to query a wartość to response, TTL 1h)
      6. Zwróć obiekt
    */
   this.logger.log("Sending products search request", {...request})
    const response = await this.productsHttpClient.post<ProductsSearchResponse>(
      '/v1/foods/search',
      {
        json: request,
      },
    );
    this.logger.debug('Searching products finished', {status: response.status, body: response.data})
    return response.data;
  }
}
