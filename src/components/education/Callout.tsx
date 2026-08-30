import type { ReactNode } from 'react'
import { AlertTriangle, Lightbulb, Sparkles, Wrench, type LucideIcon } from 'lucide-react'

export type CalloutVariant = 'tip' | 'note' | 'warning' | 'example'

const VARIANTS: Record<CalloutVariant, { icon: LucideIcon; label: string; accent: string }> = {
  tip: { icon: Sparkles, label: 'Did you know?', accent: '#16a34a' },
  note: { icon: Lightbulb, label: 'Important', accent: '#0891b2' },
  warning: { icon: AlertTriangle, label: 'Watch out', accent: '#d97706' },
  example: { icon: Wrench, label: 'Real world', accent: '#0c6e31' },
}

interface CalloutProps {
  variant: CalloutVariant
  title?: string
  children: ReactNode
}

export function Callout({ variant, title, children }: CalloutProps) {
  const { icon: Icon, label, accent } = VARIANTS[variant]

  return (
    <div
      role={variant === 'warning' ? 'note' : undefined}
      className="flex gap-3 rounded-xl border bg-surface p-4"
      style={{ borderColor: `color-mix(in srgb, ${accent} 35%, var(--color-border))` }}
    >
      <span
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
        style={{ backgroundColor: `color-mix(in srgb, ${accent} 14%, transparent)`, color: accent }}
        aria-hidden
      >
        <Icon className="h-4 w-4" strokeWidth={1.75} />
      </span>
      <div className="text-sm leading-relaxed text-text-muted">
        <div className="mb-0.5 font-semibold text-text">{title ?? label}</div>
        {children}
      </div>
    </div>
  )
}
