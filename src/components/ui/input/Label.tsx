'use client'

import { LabelHTMLAttributes } from 'react'
import useIdContext from '@/hooks/useIdContext'
import { cva, VariantProps } from 'class-variance-authority'

const labelStyle = cva('text-sm font-medium', {
  variants: {
    required: {
      true: 'after:text-red-600 after:content-["*"]',
    },
  },
})

type InputLabelProps = LabelHTMLAttributes<HTMLLabelElement> & VariantProps<typeof labelStyle>

export default function InputLabel({
  className,
  required,
  htmlFor,
  ...props
}: InputLabelProps) {
  const { id } = useIdContext()

  return (
    <div className="flex items-center">
      <label
        htmlFor={htmlFor || id}
        className={labelStyle({ required, className })}
        {...props}
      />
    </div>
  )
}