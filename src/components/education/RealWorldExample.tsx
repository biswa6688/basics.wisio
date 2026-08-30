import type { ReactNode } from 'react'
import { Callout } from './Callout'

export function RealWorldExample({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <Callout variant="example" title={title}>
      {children}
    </Callout>
  )
}
