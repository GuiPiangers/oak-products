import { KnexProductReposiotry } from "../repositories/product/KnexProductReposiotry";
import { ProductUseCases } from "./ProductUseCases";
export function productUseCaseFactory(){
    const productsRepository = new KnexProductReposiotry()
    const productModel = new ProductUseCases(productsRepository)

    return productModel
}