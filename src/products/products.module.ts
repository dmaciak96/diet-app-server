import { Module } from '@nestjs/common';
import { ProductsController } from './controller/products.controller.js';
import { ProductsService } from './service/products.service.js';
import { TranslationsModule } from '../translations/translations.module.js';
import { ConfigModule, ConfigType } from '@nestjs/config';
import productsConfig from './config/products.config.js';
import { HttpClientModule } from '@nestjs/http-client';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports: [
    TranslationsModule,
    ConfigModule.forFeature(productsConfig),
    HttpClientModule.registerAsync({
      name: 'products',
      imports: [ConfigModule.forFeature(productsConfig)],
      inject: [productsConfig.KEY],
      useFactory: (config: ConfigType<typeof productsConfig>) => ({
        baseUrl: config.baseUrl,
        timeout: config.timeout as any,
        headers: {
          'x-api-key': config.apiKey,
        },
      }),
    }),
  ],
})
export class ProductsModule {}
