import { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

type THeadProps = HTMLAttributes<HTMLDivElement>

export default function THead({ children, className, ...props }: THeadProps) {
 
  return (
    <div {...props} className={cn("font-semibold text-main", className)} role="columnheader">
      {children}
    </div>
  )
}
