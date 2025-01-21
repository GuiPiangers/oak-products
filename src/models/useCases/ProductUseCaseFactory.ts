import { InMemoryProductRepository } from "../repositories/product/InMemoryProductRepository";
import { ProductUseCases } from "./ProductUseCases";
export function productUseCaseFactory(){
    const productsRepository = new InMemoryProductRepository()
    const productModel = new ProductUseCases(productsRepository)

    return productModel
}