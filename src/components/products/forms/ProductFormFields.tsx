import { Currency } from "@/util/Currency";
import { Input } from "../../ui/input";
import { FieldProducts } from "./NewProductDialog";


type ProductFormFieldsProps = {
    values: {
        name: string,
        description: string,
        value: string
        available: boolean
    }
    setValues: <T>(field: FieldProducts, value: T) => void
    errors: Record<FieldProducts, string | undefined>
}

export default function ProductFormFields({
    values: {
        available, description, name, value
    },
    setValues,
    errors 
}: ProductFormFieldsProps){
    return (
    <>
        <Input.Root>
            <Input.Label required>Nome</Input.Label>
            <Input.Field 
                value={name}
                error={!!errors.name}
                onChange={e => setValues("name", e.target.value)} 
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
                onChange={(e) => setValues("description", e.target.value)} 
            />
            {!!errors.description && (
                <Input.Message error>{errors.description}</Input.Message>
            )}
        </Input.Root>

        <Input.Root>
            <Input.Label required>Valor</Input.Label>
            <Input.Field
                value={value}
                onChange={e => setValues("value", Currency.format(e.target.value))}
                error={!!errors.value}
            />
            {!!errors.value && (
                <Input.Message error>{errors.value}</Input.Message>
            )}

        </Input.Root>

        <Input.Root className="flex-row gap-2">
            <Input.Switch
                checked={available}
                onCheckedChange={(e) => setValues("available", e)}
            />
            <Input.Label>Está disponível para venda?</Input.Label>
            {errors.available && (
                <Input.Message error>{errors.available}</Input.Message>
            )}
        </Input.Root>
    </>
)}