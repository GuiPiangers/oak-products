export type createProductParam = {
    id: string
    name: string,
    description?: string
    value: number
    available: boolean
}

export type getProductParam = {
    id: string
}

export type deleteProductParam = {
    id: string
}

export interface IProductsRepository {
    create(data: createProductParam): Promise<void>
    get(data: getProductParam): Promise<void>
    delete(data: deleteProductParam): Promise<void>
    list(): Promise<void>
}

export class Product implements IProductsRepository {
    async create(data: createProductParam): Promise<void> {
        throw new Error("Method not implemented.")
    }
    async get(data: getProductParam): Promise<void> {
        throw new Error("Method not implemented.")
    }
    async delete(data: deleteProductParam): Promise<void> {
        throw new Error("Method not implemented.")
    }
    async list(): Promise<void> {
        throw new Error("Method not implemented.")
    }
    
}