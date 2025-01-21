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
import { createProduct } from "@/controllers/products/ProductsController";
import { Validate } from "@/util/Validate";
import { useRouter } from "next/navigation";
import ProductFormFields from "./ProductFormFields";

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
const initialFieldsState = {
    name: '',
    description: '',
    value: '00,00',
    available: true
}

export type FieldProducts = keyof typeof initialFieldsState

export default function NewProductDialog({children, asChild}: NewProductDialogProps) {
    const router = useRouter();

    const [dialogOpen, setDialogOpen] = useState(false);
    const [fields, setFields] = useState(initialFieldsState)
    const [errors, setErrors] = useState(initialErrorState);

    function setValue<T>(field: FieldProducts, value: T) {
        setFields(prev => ({...prev, [field]: value}))
    }
    
    function setError(field: FieldProducts, message: string) {
        setErrors(prev => ({...prev, [field]: message}))
    }

    const handelCreateProduct = async () =>{
        const response = await createProduct({
            name: fields.name,
            description: fields.description,
            value: Currency.unFormat(fields.value),
            available: fields.available
        })

        if(Validate.isError(response) && response.field) {
            return setError(response.field as FieldProducts, response.message)
        }
        setFields(initialFieldsState)
        setErrors(initialErrorState)
        router.refresh()
        setDialogOpen(false)
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
                <ProductFormFields 
                    errors={errors} 
                    setValues={(field, value) => setValue(field, value)}
                    values={fields}
                />

                <DialogFooter>
                    <Button onClick={async (e)=>{
                        e.preventDefault()
                        handelCreateProduct() 
                    }}>
                        Salvar                        
                    </Button>
                </DialogFooter>
            </form>
      </DialogContent>
    </Dialog>
    )
}