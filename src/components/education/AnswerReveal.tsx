import { useState, type ReactNode } from 'react'
import { ChevronDown } from 'lucide-react'

export function AnswerReveal({ prompt = 'Show answer', children }: { prompt?: string; children: ReactNode }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="rounded-xl border border-border bg-surface p-4">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        className="flex w-full items-center justify-between text-left text-sm font-semibold text-primary-700 dark:text-primary-400"
      >
        {open ? 'Hide answer' : prompt}
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} strokeWidth={2} aria-hidden />
      </button>
      {open && <div className="mt-3 text-sm leading-relaxed text-text-muted">{children}</div>}
    </div>
  )
}
