import type { ReactNode } from 'react'
import { Callout } from './Callout'

export function Warning({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <Callout variant="warning" title={title}>
      {children}
    </Callout>
  )
}
