import { ProductDTO } from "@/models/entities/Product";
import { createProductParam, deleteProductParam, getProductParam, IProductsRepository } from "./IProductsRepository";
import { database } from "@/lib/knex";


export class KnexProductReposiotry implements IProductsRepository{
    async create(data: createProductParam): Promise<void> {
        await database("products").insert(data)
    }
    async get({ id }: getProductParam): Promise<(ProductDTO & { id: string; }) | undefined> {
        return await database("products").first("name, description, value, available")
            .where({ id })
    }
    async delete({ id }: deleteProductParam): Promise<void> {
        await database("products").where({ id }).del()
    }
    async list(): Promise<(ProductDTO & { id: string; })[]> {
        return await database("products").select("name, description, value, available")
    }
    
}