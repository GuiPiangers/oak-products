import { ProductModel } from "@/models/ProductModel";
import { InMemoryProductRepository } from "@/models/repositories/product/InMemoryProductRepository";
import { ProductController } from "./ProductsController";

const productsRepository = new InMemoryProductRepository()
const productModel = new ProductModel(productsRepository)
const productController = new ProductController(productModel)

export { productController }