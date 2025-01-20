import { HTMLAttributes } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'

type BoxProps = { asChild?: boolean } & HTMLAttributes<HTMLDivElement>

export function Box({ children, className, asChild, ...props }: BoxProps) {
  const Element = asChild ? Slot : 'div'
  return (
    <Element
      {...props}
      className={cn(
        'rounded-xl bg-white p-4 shadow-md shadow-slate-200',
        className,
      )}
    >
      {children}
    </Element>
  )
}