'use client'

import { ProductDTO } from "@/models/entities/Product"
import { Table } from "@/components/ui/table"
import { Button } from "../ui/button"
import NewProductDialog from "./forms/NewProductDialog"
import { Currency } from "@/util/Currency"
import UpdateProductDialog from "./forms/UpdateProductDialog"
import { useRouter, useSearchParams } from "next/navigation"

import { FaSortAmountDown, FaSortAmountUp } from "react-icons/fa";
import { quickShort } from "@/util/sort"

type ProductTableProps = {
    productList: (ProductDTO & { id: string })[]
}

export default function ProductTable({
    productList
}: ProductTableProps){
    const searchParams = useSearchParams()
    const router = useRouter()

    const orderBy: "value" | "name" = searchParams.get("orderBy") as "value" | "name" ?? "value"
    const orderDirection: "asc" | "desc" = searchParams.get("direction") as "asc" | "desc" ?? "asc"

    const orderByNameDesc = orderBy === "name" && orderDirection === "desc"
    const orderByNameAsc = orderBy === "name" && orderDirection === "asc"
    const orderByValueDesc = orderBy === "value" && orderDirection === "desc"
    const orderByValueAsc = orderBy === "value" && orderDirection === "asc"

    const sortedList = quickShort(productList,((prev, next) => {
        if(orderByNameDesc) {
            return next.name.localeCompare(prev.name)
        }
        if(orderByNameAsc) {
            return prev.name.localeCompare(next.name)
        }
        if(orderByValueDesc) {
            return next.value - prev.value
        }

        return prev.value - next.value
    }))

    const toggleDirection = () =>{
        if(orderDirection === "asc") return "desc"
        if(orderDirection === "desc") return "asc"
        return orderDirection
    }

    function generateNameOrderItem () {
        if(orderByNameDesc) return <FaSortAmountDown />
        if(orderByNameAsc) return <FaSortAmountUp />
        return <FaSortAmountDown className="text-zinc-400"/>
    }

    function generateValueOrderItem () {
        if(orderByValueDesc) return <FaSortAmountDown />
        if(orderByValueAsc) return <FaSortAmountUp />
        return <FaSortAmountDown className="text-zinc-400"/>
    }

    return <div> { 
        sortedList.length > 0 ? 
            <Table.Root>
                <Table.Row columns={["1fr", "1fr"]}>
                    <Table.Head
                        className="flex items-center gap-2 cursor-pointer"
                        onClick={()=> router.push(`?orderBy=name&direction=${toggleDirection()}`)}
                    >
                        Nome {generateNameOrderItem()}
                    </Table.Head>
                    <Table.Head
                        className="flex items-center gap-2 cursor-pointer"
                        onClick={()=> router.push(`?orderBy=value&direction=${toggleDirection()}`)}
                    >
                        Valor {generateValueOrderItem()}
                    </Table.Head>
                </Table.Row >

                {sortedList.map(({available, name, value, description, id})=>(
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
                            <Table.Cell>R$ {Currency.format(value)}</Table.Cell>
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