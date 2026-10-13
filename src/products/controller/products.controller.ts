import { Controller, Get, Inject, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  async findProduct(@Query('name') name: string) {}
}
