'use client'

import { Currency } from "@/util/Currency";
import { Button } from "../ui/button";
import {
    Dialog,
    DialogHeader,
    DialogContent,
    DialogTitle, 
    DialogTrigger,
    DialogFooter
} from "../ui/dialog/dialog";
import { Input } from "../ui/input";

type NewProductDialogProps = {
    children: React.ReactNode;
    asChild?: boolean;
} 

export default function NewProductDialog({children, asChild}: NewProductDialogProps) {
    return (
    <Dialog>
        <DialogTrigger asChild={asChild}>
            {children}
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
                <DialogTitle>Novo Produto</DialogTitle>
          </DialogHeader>

            <form className="flex flex-col gap-4">
                <Input.Root>
                    <Input.Label>Nome</Input.Label>
                    <Input.Field />
                </Input.Root>

                <Input.Root>
                    <Input.Label>Descrição</Input.Label>
                    <Input.Field />
                </Input.Root>

                <Input.Root>
                    <Input.Label>Valor</Input.Label>
                    <Input.Field onChange={e => 
                        e.target.value = Currency.format(e.target.value)
                    } />
                </Input.Root>

                <DialogFooter>
                    <Button>
                        Salvar                        
                    </Button>
                </DialogFooter>
            </form>
      </DialogContent>
    </Dialog>
    )
}