export type ProductDTO = {
    name: string
    description: string
    value: number
    avalible: boolean
}

export class Product {
    readonly name: string
    readonly description: string
    readonly value: number
    readonly avalible: boolean

    constructor({avalible, description, name, value}: ProductDTO){
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