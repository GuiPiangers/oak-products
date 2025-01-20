import { ProductDTO } from "@/models/entities/Product"
import { Table } from "@/components/ui/table"
import { Button } from "../ui/button"

type ProductTableProps = {
    productList: ProductDTO[] 
}

export default function ProductTable({
    productList
}: ProductTableProps){
    return <div> { 
        productList.length > 0 ? 
            <Table.Root>
                <Table.Row columns={["1fr", "1fr"]}>
                    <Table.Head>Nome</Table.Head>
                    <Table.Head>Valor</Table.Head>
                </Table.Row >

                    <Table.Row columns={["1fr", "1fr"]} clickable>
                        <Table.Cell>Nome</Table.Cell>
                        <Table.Cell>Valor</Table.Cell>
                    </Table.Row >                     
            </Table.Root>
            
            : "Nenhum produto cadastrado"}

        < Button className="w-full mt-2" variant={"outline"}>
            Novo Produto
        </Button >
        </div>
}