import { Injectable } from '@nestjs/common';

import { CreateProductRequest, Product } from '@repo/types';

@Injectable()
export class ProductsService {
    private products: Product[] = [];

    createProduct(createProductRequest: CreateProductRequest) {
        const product: Product = {
            id: Math.random().toString(36).substring(2, 9),
            ...createProductRequest,
        };
        this.products.push(product);
        return product;
    }

    getProducts() {
        return this.products;
    }
}
