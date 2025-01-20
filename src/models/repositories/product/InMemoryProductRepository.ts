import { ProductDTO } from "@/models/entities/Product";
import { createProductParam, deleteProductParam, getProductParam, IProductsRepository } from "./IProductsRepository";

let inMemoryProductDB: (ProductDTO & {id: string})[]= []

export class InMemoryProductRepository implements IProductsRepository{
    async create(data: createProductParam): Promise<void> {
        inMemoryProductDB.push(data)
    }
    async get({ id }: getProductParam) {
        return inMemoryProductDB.find(product => product.id === id)
    }
    async delete({ id }: deleteProductParam): Promise<void> {
        inMemoryProductDB = inMemoryProductDB.filter(
            (product) => product.id !== id
         )
    }
    async list() {
        return inMemoryProductDB
    }

}  