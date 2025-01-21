import { ApiError } from "@/util/ApiError"
import { generateUUID } from "@/util/generateUUID"


export type ProductDTO = {
    name: string
    description?: string
    value: number
    available: boolean
}

export class Product {
    readonly id: string
    readonly name: string
    readonly description?: string
    readonly value: number
    readonly available: boolean

    constructor({
        available, description, name, value, id
    }: ProductDTO & {id?: string}){
        this.validateTypes({ available, description, name, value })

        this.id = id ?? generateUUID()
        this.name = name
        this.description = description
        this.available = available

        this.validateValue(value)
        this.value = value
    }

    private validateValue(value: number) {
        if(value < 0) throw new ApiError("O valor precisa ser um número positivo", {
            field: "value"
        })
    }

    private validateTypes({available, description, name, value}: ProductDTO){
        if(!name) throw new ApiError("O campo nome é obrigatório", {
            field: "name"
        })
            if(!value) throw new ApiError("O campo valor é obrigatório", {
                field: "value"
            })
    
            if(typeof name !== 'string') throw new ApiError('O campo nome deve ser uma "string"', {
                field: "name"
            })
            if(typeof value !== 'number') throw new ApiError('O campo nome deve ser uma "number"', {
                field: "value"
            })
            if(description && typeof description !== 'string') 
                throw new ApiError('O campo descrição deve ser uma "string"', {
                field: "description"
            })
            if(typeof available !== "boolean") throw new ApiError('O campo disponível deve ser uma "boolean"', {
                field: "available"
            })
    }
}