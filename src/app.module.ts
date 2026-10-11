import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module.js';
import { TranslationsModule } from './translations/translations.module.js';
import { ConfigModule } from '@nestjs/config';
import appConfig from './app.config.js';

@Module({
  imports: [ProductsModule, TranslationsModule,
    ConfigModule.forRoot({
      load: [appConfig],
      isGlobal: true,
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
