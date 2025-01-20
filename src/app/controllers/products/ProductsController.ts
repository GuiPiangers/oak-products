import { ProductDTO } from "@/models/entities/Product";
import { IProductsRepository } from "@/models/repositories/product/ProductsRepository";

export class ProductController{
    constructor(private productRepository: IProductsRepository){}

    async create({available, name, value, description}: ProductDTO){
        try {
            if(!name) throw new Error("O campo nome é obrigatório")
            if(!value) throw new Error("O campo valor é obrigatório")
            if(!available) throw new Error("O campo disponível é obrigatório")
    
            if(typeof name !== 'string') throw new Error('O campo nome deve ser uma "string"')
            if(typeof value !== 'number') throw new Error('O campo nome deve ser uma "number"')
            if(description && typeof description !== 'string') 
                throw new Error('O campo descrição deve ser uma "string"')
            if(typeof available !== "boolean") throw new Error('O campo desponível deve ser uma "number"')
        
            await this.productRepository.create({
                available, description, name, value
            })

            return {
                message: "Produto criado com sucesso!", 
                type: "success"
            }
        } catch (error: any) {
            return {
                type: "error", 
                message: error.message
            }
        }

    }
}