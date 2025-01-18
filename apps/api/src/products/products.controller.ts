import { Controller, Get, Post, Body } from '@nestjs/common';

import { CreateProductRequest } from '@repo/types';

import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Get()
    getProducts() {
        return this.productsService.getProducts();
    }

    @Post()
    async createProduct(@Body() createProductRequest: CreateProductRequest) {
        return this.productsService.createProduct(createProductRequest);
    }
}
