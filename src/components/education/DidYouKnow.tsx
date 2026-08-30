import type { ReactNode } from 'react'
import { Callout } from './Callout'

export function DidYouKnow({ children }: { children: ReactNode }) {
  return <Callout variant="tip">{children}</Callout>
}
