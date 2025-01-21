'use client'

import { ProductDTO } from "@/models/entities/Product"
import { Table } from "@/components/ui/table"
import { Button } from "../ui/button"
import NewProductDialog from "./forms/NewProductDialog"
import { Currency } from "@/util/Currency"
import UpdateProductDialog from "./forms/UpdateProductDialog"
import { useSearchParams } from "next/navigation"
import { FieldProducts } from "./forms/productFormTypes"

type ProductTableProps = {
    productList: (ProductDTO & { id: string })[]
}

export default function ProductTable({
    productList
}: ProductTableProps){
    const searchParams = useSearchParams()
    const orderBy: FieldProducts = searchParams.get("orderBy") ?? "value"
    const orderDirection: "asc" | "des" = searchParams.get("direction") ?? "asc"

    return <div> { 
        productList.length > 0 ? 
            <Table.Root>
                <Table.Row columns={["1fr", "1fr"]}>
                    <Table.Head>Nome</Table.Head>
                    <Table.Head>Valor</Table.Head>
                </Table.Row >

                {productList.map(({available, name, value, description, id})=>(
                    <UpdateProductDialog 
                    key={id}
                    asChild 
                    formData={{
                        id,
                        name,
                        value: Currency.format(value),
                        description: description ?? '',
                        available
                    }}>
                        <Table.Row columns={["1fr", "1fr"]} clickable>
                            <Table.Cell>{name}</Table.Cell>
                            <Table.Cell>{Currency.format(value)}</Table.Cell>
                        </Table.Row >
                    </UpdateProductDialog>
                ))}                   
            </Table.Root>
            
            : "Nenhum produto cadastrado"}

        <NewProductDialog asChild>
            <Button className="w-full mt-2" variant={"outline"}>
                Novo Produto
            </Button>
        </NewProductDialog>
        </div>
}