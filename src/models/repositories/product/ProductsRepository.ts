type createProductParam = {
    name: string,
    description?: string
    value: number
    available: boolean
}

type getProductParam = {
    id: string
}

type deleteProductParam = {
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