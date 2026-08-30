const BASES = [
  { label: 'Binary', base: 2, suffix: '₂', color: '#16a34a' },
  { label: 'Decimal', base: 10, suffix: '₁₀', color: '#0891b2' },
  { label: 'Hexadecimal', base: 16, suffix: '₁₆', color: '#0c6e31' },
]

function toBase(value: number, base: number) {
  return value.toString(base).toUpperCase()
}

export function BaseCompare({ value }: { value: number }) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {BASES.map((entry) => (
        <div
          key={entry.label}
          className="rounded-2xl border border-border bg-surface p-5 text-center"
          style={{ borderTopWidth: 3, borderTopColor: entry.color }}
        >
          <div className="text-xs font-semibold uppercase tracking-wide text-text-muted">{entry.label}</div>
          <div className="mt-2 font-mono text-2xl font-bold text-text">
            {toBase(value, entry.base)}
            <sub className="ml-0.5 text-sm" style={{ color: entry.color }}>
              {entry.suffix}
            </sub>
          </div>
        </div>
      ))}
    </div>
  )
}
