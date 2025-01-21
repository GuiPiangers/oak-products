'use client'

import { Currency } from "@/util/Currency";
import { Button } from "../ui/button";
import {
    Dialog,
    DialogHeader,
    DialogContent,
    DialogTitle, 
    DialogTrigger,
    DialogFooter,
    DialogDescription
} from "../ui/dialog/dialog";
import { useState } from "react";
import { updateProduct } from "@/controllers/products/ProductsController";
import { Validate } from "@/util/Validate";
import { useRouter } from "next/navigation";
import ProductFormFields from "./ProductFormFields";


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

type UpdateProductDialogProps = {
    children: React.ReactNode;
    asChild?: boolean;
    formData: typeof initialFieldsState & { id: string}
} 
export type FieldProducts = keyof typeof initialFieldsState

export default function UpdateProductDialog({
    children, 
    asChild,
    formData: {id, ...formData}
}: UpdateProductDialogProps) {
    const router = useRouter();

    const [dialogOpen, setDialogOpen] = useState(false);
    const [fields, setFields] = useState(formData)
    const [errors, setErrors] = useState(initialErrorState);

    function setValue<T>(field: FieldProducts, value: T) {
        setFields(prev => ({...prev, [field]: value}))
    }
    
    function setError(field: FieldProducts, message: string) {
        setErrors(prev => ({...prev, [field]: message}))
    }

    const handleUpdateProduct = async () => {
        const response = await updateProduct({
            id,
            name: fields.name,
            description: fields.description,
            value: Currency.unFormat(fields.value),
            available: fields.available
        })

        if(Validate.isError(response) && response.field) {
            return setError(response.field as FieldProducts, response.message)
        }
        setErrors(initialErrorState)
        router.refresh()
        setDialogOpen(false)
    }

    return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogTrigger asChild={asChild}>
            {children}
        </DialogTrigger>

        <DialogContent aria-describedby="dialog-title">
          <DialogHeader>
                <DialogTitle id="dialog-title">Atualizar Produto</DialogTitle>
          </DialogHeader>

            <form className="flex flex-col gap-4">
                <ProductFormFields 
                    errors={errors} 
                    setValues={(field, value) => setValue(field, value)}
                    values={fields}
                />

                <DialogFooter className="justify-between">
                    <Button onClick={async (e)=>{
                        e.preventDefault()
                        handleUpdateProduct()
                    }}>
                        Salvar                        
                    </Button>

                    <Button variant={"outline"} onClick={async (e)=>{
                        e.preventDefault()
                        handleUpdateProduct()
                    }}>
                        Excluir                        
                    </Button>
                </DialogFooter>
            </form>
      </DialogContent>
    </Dialog>
    )
}