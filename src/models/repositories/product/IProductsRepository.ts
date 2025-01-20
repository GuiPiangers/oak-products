import { ProductDTO } from "@/models/entities/Product"

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
    get(data: getProductParam): Promise<ProductDTO & {id: string} | undefined>
    delete(data: deleteProductParam): Promise<void>
    list(): Promise<(ProductDTO & {id: string})[]>
}