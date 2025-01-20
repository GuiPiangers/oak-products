import { Product, ProductDTO } from "@/models/entities/Product";
import { IProductsRepository } from "@/models/repositories/product/ProductsRepository";

export class ProductController{
    constructor(private productRepository: IProductsRepository){}

    async create({available, name, value, description}: ProductDTO){
        try {
            const product = new Product({
                available, description, name, value
            })
        
            await this.productRepository.create(product)

            return {
                message: "Produto criado com sucesso!", 
                type: "success"
            }
        } catch (error: any) {
            return this.responseError(error)
        }

    }

    private responseError(error: any){
        return {
            type: "error", 
            message: error.message
        }
    }
}