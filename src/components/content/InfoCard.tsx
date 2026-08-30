import type { ReactNode } from 'react'

interface InfoCardProps {
  icon?: ReactNode
  title: string
  children: ReactNode
  accent?: string
}

export function InfoCard({ icon, title, children, accent = 'var(--color-primary-500)' }: InfoCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
      <div className="mb-3 flex items-center gap-3">
        {icon && (
          <span
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-base"
            style={{ backgroundColor: `color-mix(in srgb, ${accent} 15%, transparent)`, color: accent }}
            aria-hidden
          >
            {icon}
          </span>
        )}
        <h3 className="font-bold text-text">{title}</h3>
      </div>
      <div className="text-sm leading-relaxed text-text-muted">{children}</div>
    </div>
  )
}
