import { Module } from '@nestjs/common';
import { ProductsController } from './controller/products.controller.js';
import { ProductsService } from './service/products.service.js';
import { TranslationsModule } from '../translations/translations.module.js';
import { ConfigModule } from '@nestjs/config';
import productsConfig from './config/products.config.js';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports: [TranslationsModule, ConfigModule.forFeature(productsConfig)],
})
export class ProductsModule {}
