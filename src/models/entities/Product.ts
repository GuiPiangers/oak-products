import { generateUUID } from "@/util/generateUUID"


export type ProductDTO = {
    name: string
    description?: string
    value: number
    avalible: boolean
}

export class Product {
    readonly id: string
    readonly name: string
    readonly description?: string
    readonly value: number
    readonly avalible: boolean

    constructor({
        avalible, description, name, value, id
    }: ProductDTO & {id?: string}){
        this.id = id ?? generateUUID()
        this.name = name
        this.description = description
        this.avalible = avalible

        this.validateValue(value)
        this.value = value
    }

    private validateValue(value: number) {
        if(value < 0) throw new Error("O valor precisa ser um número positivo")
    }
}