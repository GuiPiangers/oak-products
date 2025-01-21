'use server'

/* eslint-disable @typescript-eslint/no-explicit-any */
import { ProductDTO } from "@/models/entities/Product";
import { productUseCaseFactory } from "@/models/useCases/ProductUseCaseFactory";

export type ResponseError = {
    type: "error",
    message: string
    field: string | undefined
} 

const productUseCases = productUseCaseFactory()

export abstract class ProductController{
    static async create({available, name, value, description}: ProductDTO){
        try {
            await productUseCases.create(
                {available, name, value, description}
            )

            return {
                message: "Produto criado com sucesso!", 
                type: "success"
            }
        } catch (error: any) {
            return responseError(error)
        }

    }

    static async list(){
        try {
            return await productUseCases.list()
        } catch (error: any) {
            return responseError(error)
        }

    }
}

function responseError(error: any): ResponseError {
    return {
        type: "error", 
        message: error.message,
        field: error.field
    }
}
