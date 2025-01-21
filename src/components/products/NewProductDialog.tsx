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
import { useState } from "react";
import { productController } from "@/controllers/products";
import { Validate } from "@/util/Validate";
import { useRouter } from "next/navigation";

type NewProductDialogProps = {
    children: React.ReactNode;
    asChild?: boolean;
} 

const initialErrorState = {
    name: undefined,
    description: undefined,
    value: undefined,
    available: undefined
}

type Field = keyof typeof initialErrorState

export default function NewProductDialog({children, asChild}: NewProductDialogProps) {
    const router = useRouter();

    const [dialogOpen, setDialogOpen] = useState(false);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('00,00');
    const [available, setAvailable] = useState(true);

    const [errors, setErrors] = useState(initialErrorState);

    function setError(field: Field, message: string) {
        setErrors(prev => ({...prev, [field]: message}))
    }

    return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogTrigger asChild={asChild}>
            {children}
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
                <DialogTitle>Novo Produto</DialogTitle>
          </DialogHeader>

            <form className="flex flex-col gap-4">
                <Input.Root>
                    <Input.Label required>Nome</Input.Label>
                    <Input.Field 
                        value={name}
                        error={!!errors.name}
                        onChange={e => setName(e.target.value)} 
                    />
                    {!!errors.name && (
                            <Input.Message error>{errors.name}</Input.Message>
                    )}
                </Input.Root>

                <Input.Root>
                    <Input.Label>Descrição</Input.Label>
                    <Input.Field 
                        value={description}
                        error={!!errors.description}
                        onChange={(e) => setDescription(e.target.value)} 
                    />
                    {!!errors.description && (
                        <Input.Message error>{errors.description}</Input.Message>
                    )}
                </Input.Root>

                <Input.Root>
                    <Input.Label required>Valor</Input.Label>
                    <Input.Field
                        value={value}
                        onChange={e => setValue(Currency.format(e.target.value))}
                        error={!!errors.value}
                    />
                    {!!errors.value && (
                        <Input.Message error>{errors.value}</Input.Message>
                    )}

                </Input.Root>

                <Input.Root className="flex-row gap-2">
                    <Input.Switch
                        checked={available}
                        onCheckedChange={(e) => setAvailable(e)}
                    />
                    <Input.Label>Está disponível para venda?</Input.Label>
                    {errors.available && (
                        <Input.Message error>{errors.available}</Input.Message>
                    )}
                </Input.Root>

                <DialogFooter>
                    <Button onClick={async (e)=>{
                        e.preventDefault()
                        const response = await productController.create({
                            name,
                            description,
                            value: Currency.unFormat(value),
                            available
                        })

                        if(Validate.isError(response) && response.field) {
                            return setError(response.field as Field, response.message)
                        }
                        router.refresh()
                        setDialogOpen(false)
                    }}>
                        Salvar                        
                    </Button>
                </DialogFooter>
            </form>
      </DialogContent>
    </Dialog>
    )
}