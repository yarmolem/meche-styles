import { HTMLAttributes, type ReactNode } from 'react'

import { cn } from '@src/utils/cn'
import { type VariantProps, cva } from 'class-variance-authority'

const typographyVariants = cva('transition-colors', {
  variants: {
    size: {
      h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
      h2: 'scroll-m-20 text-3xl font-semibold tracking-tight',
      h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
      h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
      p: 'leading-7 [&:not(:first-child)]:mt-6',
      small: 'text-sm text-muted-foreground'
    }
  },
  defaultVariants: { size: 'h1' }
})

interface Props
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof typographyVariants> {
  children?: ReactNode
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p'
}

export const Typography = ({ size, children, className, ...props }: Props) => {
  const Component = size ?? 'h1'

  return (
    <Component
      {...props}
      className={cn(typographyVariants({ size }), className)}
    >
      {children}
    </Component>
  )
}
