import ProductTable from "@/components/products/ProductTable";
import { Box } from "@/components/ui/Box";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <section className="w-full flex flex-col gap-4 items-center bg-zinc-50 h-full px-4 py-8">
      <Box className="flex justify-between w-full max-w-screen-md gap-2 items-center">
        <h1 className="text-xl font-bold">Lista de produtos OAK</h1>
        <Button>Novo Produto</Button>
      </Box>
      <Box className="w-full max-w-screen-md overflow-y-auto">
        <ProductTable productList={[]}/>
      </Box>
    </section>
  );
}
