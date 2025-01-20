import { ProductDTO } from "@/models/entities/Product";
import { createProductParam, deleteProductParam, getProductParam, IProductsRepository } from "./ProductsRepository";

const inMemoryProductDB: (ProductDTO & {id: string})[]= []

export class InMemoryProductRepository implements IProductsRepository{
    async create(data: createProductParam): Promise<void> {
        inMemoryProductDB.push(data)
    }
    async get(data: getProductParam): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async delete(data: deleteProductParam): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async list(): Promise<void> {
        throw new Error("Method not implemented.");
    }

}  