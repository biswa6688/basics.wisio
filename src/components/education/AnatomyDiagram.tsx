export interface AnatomyPart {
  text: string
  label: string
  detail: string
  color: string
}

export function AnatomyDiagram({ parts }: { parts: AnatomyPart[] }) {
  return (
    <div className="rounded-xl border border-border bg-bg-subtle p-6">
      <div className="mb-6 overflow-x-auto whitespace-nowrap rounded-lg bg-surface p-4 font-mono text-sm sm:text-base">
        {parts.map((part) => (
          <span key={part.label} className="border-b-2 pb-0.5" style={{ borderColor: part.color, color: part.color }}>
            {part.text}
          </span>
        ))}
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {parts.map((part) => (
          <div key={part.label} className="flex items-start gap-2.5">
            <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: part.color }} aria-hidden />
            <div>
              <span className="font-mono text-sm font-semibold text-text">{part.label}</span>
              <p className="text-sm text-text-muted">{part.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
