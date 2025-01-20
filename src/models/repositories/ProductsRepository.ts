type createProductParam = {
    id: string
    name: string,
    description: string
    value: number
    avalible: boolean
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
    create(data: createProductParam): Promise<void> {
        throw new Error("Method not implemented.")
    }
    get(data: createProductParam): Promise<void> {
        throw new Error("Method not implemented.")
    }
    delete(data: createProductParam): Promise<void> {
        throw new Error("Method not implemented.")
    }
    list(): Promise<void> {
        throw new Error("Method not implemented.")
    }
    
}