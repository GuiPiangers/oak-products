import { ProductDTO } from "@/models/entities/Product"
import { Table } from "@/components/ui/table"
import { Button } from "../ui/button"
import NewProductDialog from "./NewProductDialog"

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

                {productList.map((product)=>(
                    <Table.Row columns={["1fr", "1fr"]} clickable>
                        <Table.Cell>{product.name}</Table.Cell>
                        <Table.Cell>{product.value}</Table.Cell>
                    </Table.Row >  
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