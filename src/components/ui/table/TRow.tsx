'use client'

import { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

type TrowProps = HTMLAttributes<HTMLDivElement> & {
  columns: string[]
  clickable?: boolean
  handleOnClick?(): void
}

const TRowStyle = 'grid w-full items-center justify-items-start gap-2 border-b bg-white px-2 py-1.5 data-[clickable=true]:hover:bg-slate-100'

export default function Trow({
  children,
  className,
  columns,
  clickable = false,
  handleOnClick,
  ...props
}: TrowProps) {
   const renderChildren = () => {
    if (!clickable) return children
    return (
      <div
        role="button"
        className={
          cn(TRowStyle,
            className)
        }
        tabIndex={0}
        data-clickable={clickable}
        onClick={handleOnClick || undefined}
        style={{ gridTemplateColumns: columns.join(' ') }}
        onKeyDown={(e) => {
          if (handleOnClick)
            if (e.key === ' ' || e.key === 'Enter') handleOnClick()
        }}
      >
        {children}
      </div>
    )
  }

  return (
    <div
      role="row"
      data-clickable={clickable}
      className={clickable ? '' : cn(TRowStyle, { className })}
      style={{ gridTemplateColumns: columns.join(' ') }}
      {...props}
    >
      {renderChildren()}
    </div>
  )
}
