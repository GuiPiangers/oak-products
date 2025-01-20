/* eslint-disable @typescript-eslint/no-explicit-any */
import { ProductDTO } from "@/models/entities/Product";
import { ProductModel } from "@/models/ProductModel";
export class ProductController{
    constructor(private productModel: ProductModel){}

    async create({available, name, value, description}: ProductDTO){
        try {
        
            await this.productModel.create(
                {available, name, value, description}
            )

            return {
                message: "Produto criado com sucesso!", 
                type: "success"
            }
        } catch (error: any) {
            return this.responseError(error)
        }

    }

    async list(){
        try {
            return await this.productModel.list()
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