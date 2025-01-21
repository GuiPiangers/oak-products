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

type NewProductDialogProps = {
    children: React.ReactNode;
    asChild?: boolean;
} 

export default function NewProductDialog({children, asChild}: NewProductDialogProps) {
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState<string>();

    const [description, setDescription] = useState('');
    const [descriptionError, setDescriptionError] = useState<string>();

    const [value, setValue] = useState('00,00');
    const [valueError, setValueError] = useState<string>();

    const [available, setAvailable] = useState(true);
    const [availableError, setAvailableError] = useState<string>();

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
                    <Input.Label required>Nome</Input.Label>
                    <Input.Field 
                        value={name}
                        error={!!nameError}
                        onChange={e => setName(e.target.value)} 
                    />
                    {nameError && (
                            <Input.Message error>{nameError}</Input.Message>
                    )}
                </Input.Root>

                <Input.Root>
                    <Input.Label>Descrição</Input.Label>
                    <Input.Field 
                        value={description}
                        error={!!descriptionError}
                        onChange={(e) => setDescription(e.target.value)} 
                    />
                    {descriptionError && (
                        <Input.Message error>{descriptionError}</Input.Message>
                    )}
                </Input.Root>

                <Input.Root>
                    <Input.Label required>Valor</Input.Label>
                    <Input.Field
                        value={value}
                        onChange={e => setValue(Currency.format(e.target.value))}
                        error={!!valueError}
                    />
                    {valueError && (
                        <Input.Message error>{valueError}</Input.Message>
                    )}

                </Input.Root>

                <Input.Root>
                    <Input.Label required>Valor</Input.Label>
                    <Input.Switch
                        checked={available}
                        onCheckedChange={(e) => setAvailable(e)}
                    />
                    {availableError && (
                        <Input.Message error>{availableError}</Input.Message>
                    )}
                </Input.Root>

                <DialogFooter>
                    <Button onClick={async ()=>{
                        const response = await productController.create({
                            name,
                            description,
                            value: Currency.unFormat(value),
                            available
                        })
                    }}>
                        Salvar                        
                    </Button>
                </DialogFooter>
            </form>
      </DialogContent>
    </Dialog>
    )
}