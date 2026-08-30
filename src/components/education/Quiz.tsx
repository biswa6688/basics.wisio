import type { ReactNode } from 'react'
import { HelpCircle } from 'lucide-react'

export function Quiz({ title = 'Quick check', children }: { title?: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <HelpCircle className="h-4 w-4 text-primary-600 dark:text-primary-400" strokeWidth={1.75} aria-hidden />
        <h3 className="text-sm font-semibold uppercase tracking-wide text-text-muted">{title}</h3>
      </div>
      {children}
    </div>
  )
}
