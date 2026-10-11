import { Controller, Get, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {

    @Get()
    findProduct(@Query('name') name: string) {
        
    }
}
