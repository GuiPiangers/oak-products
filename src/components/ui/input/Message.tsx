import { cva, VariantProps } from 'class-variance-authority'
import { HTMLAttributes } from 'react'

const messageStyle = cva('flex items-start gap-1 text-sm',{
  variants: {
    error: {
      true: 'text-red-600',
    },
  },
})

type Variants = VariantProps<typeof messageStyle>
type InputMessageProps = HTMLAttributes<HTMLInputElement> & Variants

export default function Message({
  className,
  error,
  children,
  ...props
}: InputMessageProps) {
  return (
    <span {...props} className={messageStyle({ error, className })}>
      {children}
    </span>
  )
}
