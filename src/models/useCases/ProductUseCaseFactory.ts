import { PrismaProductsRepository } from "../repositories/product/PrismaProductsRepository";
import { ProductUseCases } from "./ProductUseCases";
export function productUseCaseFactory(){
    const productsRepository = new PrismaProductsRepository()
    const productModel = new ProductUseCases(productsRepository)

    return productModel
}