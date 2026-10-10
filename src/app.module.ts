import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module.js';
import { TranslationsModule } from './translations/translations.module.js';

@Module({
  imports: [ProductsModule, TranslationsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
