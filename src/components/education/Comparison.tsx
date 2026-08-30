interface ComparisonSide {
  label: string
  accent: string
  points: string[]
}

export function Comparison({ sides }: { sides: ComparisonSide[] }) {
  return (
    <div className={`grid gap-4 ${sides.length === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2'}`}>
      {sides.map((side) => (
        <div
          key={side.label}
          className="rounded-xl border bg-surface p-5"
          style={{ borderTopWidth: 3, borderTopColor: side.accent, borderColor: 'var(--color-border)' }}
        >
          <h3 className="mb-3 font-semibold text-text">{side.label}</h3>
          <ul className="flex flex-col gap-2 text-sm text-text-muted">
            {side.points.map((point) => (
              <li key={point} className="flex items-start gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full" style={{ backgroundColor: side.accent }} aria-hidden />
                {point}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
