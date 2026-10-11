import { Inject, Injectable } from '@nestjs/common';
import productsConfig from '../config/products.config.js';
import type { ConfigType } from '@nestjs/config';

@Injectable()
export class ProductsService {
  constructor(
    @Inject(productsConfig.KEY)
    private readonly config: ConfigType<typeof productsConfig>,
  ) {}
}
