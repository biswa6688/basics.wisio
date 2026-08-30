import type { ReactNode } from 'react'

interface InfoCardProps {
  icon?: ReactNode
  title: string
  children: ReactNode
  accent?: string
}

export function InfoCard({ icon, title, children, accent = 'var(--color-primary-500)' }: InfoCardProps) {
  return (
    <div className="rounded-xl border border-border bg-surface p-5">
      <div className="mb-3 flex items-center gap-3">
        {icon && (
          <span
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
            style={{ backgroundColor: `color-mix(in srgb, ${accent} 14%, transparent)`, color: accent }}
            aria-hidden
          >
            {icon}
          </span>
        )}
        <h3 className="font-semibold text-text">{title}</h3>
      </div>
      <div className="text-sm leading-relaxed text-text-muted">{children}</div>
    </div>
  )
}
