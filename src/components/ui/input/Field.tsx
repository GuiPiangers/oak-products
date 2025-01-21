'use client'

import * as React from "react"

import useIdContext from "@/hooks/useIdContext"
import { cva, VariantProps } from "class-variance-authority"

const fieldStyles = cva(
  "flex h-10 w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-base ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-zinc-950 placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:border-zinc-800 dark:bg-zinc-950 dark:ring-offset-zinc-950 dark:file:text-zinc-50 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300",
  {
  variants: {
    error: {
      true: 'bg-red-50 text-red-600 border-red-600 placeholder:text-red-300 autofill:shadow-[0_0_0px_1000px_inset] autofill:shadow-red-50 autofill:focus:shadow-white',
    },
  },
})

const Field = React.forwardRef<HTMLInputElement, React.ComponentProps<"input"> 
& VariantProps<typeof fieldStyles>>(
  ({ className, error, type, ...props }, ref) => {
    const { id } = useIdContext()

    return (
      <input
        id={id}
        type={type}
        className={fieldStyles({error, className}
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Field.displayName = "Input"

export default Field 
