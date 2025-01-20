/* eslint-disable @typescript-eslint/no-explicit-any */
import { Product, ProductDTO } from "@/models/entities/Product";
import { IProductsRepository } from "@/models/repositories/product/IProductsRepository";

export class ProductModel{
    constructor(private productRepository: IProductsRepository){}

    async create({available, name, value, description}: ProductDTO){
        const product = new Product({
            available, description, name, value
        })
    
        return await this.productRepository.create(product)
    }

    async list(){
        return await this.productRepository.list()
    }
}