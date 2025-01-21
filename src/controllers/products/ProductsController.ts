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

export async function createProduct({available, name, value, description}: ProductDTO){
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

export async function updateProduct({
    available, 
    name, 
    value, 
    description, 
    id        
}: ProductDTO & { id: string }){
    try {
        await productUseCases.update(
            {available, name, value, description, id}
        )

        return {
            message: "Produto atualizado com sucesso!", 
            type: "success"
        }
    } catch (error: any) {
        return responseError(error)
    }

}

export async function listProduct(){
    try {
        return await productUseCases.list()
    } catch (error: any) {
        return responseError(error)
    }

}

export async function deleteProduct({ id }: { id: string}){
    try {
        return await productUseCases.delete({ id })
    } catch (error: any) {
        return responseError(error)
    }

}

function responseError(error: any): ResponseError {
    return {
        type: "error", 
        message: error.message,
        field: error.field
    }
}
