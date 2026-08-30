import type { ReactNode } from 'react'
import { Callout } from './Callout'

export function ImportantNote({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <Callout variant="note" title={title}>
      {children}
    </Callout>
  )
}
