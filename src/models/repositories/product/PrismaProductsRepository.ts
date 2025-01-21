import { ProductDTO } from "@/models/entities/Product";
import { createProductParam, deleteProductParam, getProductParam, IProductsRepository } from "./IProductsRepository";
import { PrismaClient } from "@prisma/client";

export class PrismaProductsRepository implements IProductsRepository{
    private db: PrismaClient = new PrismaClient()

    async create(data: createProductParam): Promise<void> {
        await this.db.products.create({
            data: data
        })
    }
    async get({ id }: getProductParam): Promise<(ProductDTO & { id: string; }) | undefined> {
        const data = await this.db.products.findUnique({
            where: { id }
        })

        return data ? {
            id,
            available: data.available,
            description: data.description ?? undefined,
            name: data.name,
            value: data.value
        } : undefined
    }
    async delete({id}: deleteProductParam): Promise<void> {
        await this.db.products.delete({
            where: { id }
        })
    }
    async list(): Promise<(ProductDTO & { id: string; })[]> {
        const products = await this.db.products.findMany()

        return products.map((product) => ({
            ...product, 
            description: product.description ?? undefined
        }))
    }
}