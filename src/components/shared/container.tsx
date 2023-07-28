import { cn } from '@src/utils/cn'
import { type ReactNode } from 'react'

interface Props {
  children?: ReactNode
  className?: string
  as?: 'div' | 'section' | 'main' | 'nav'
}

const Container = (props: Props) => {
  const Component = props.as ?? 'div'

  return (
    <Component className={cn('w-full max-w-7xl mx-auto px-6', props.className)}>
      {props.children}
    </Component>
  )
}

export { Container }
