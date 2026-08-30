export interface TimelineEvent {
  label: string
  detail: string
}

export function Timeline({ events, accent = '#16a34a' }: { events: TimelineEvent[]; accent?: string }) {
  return (
    <ol className="flex flex-col gap-6">
      {events.map((event, index) => (
        <li key={event.label} className="relative flex gap-4 pl-1">
          <div className="flex flex-col items-center">
            <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: accent }} aria-hidden />
            {index < events.length - 1 && <span className="mt-1 w-px flex-1 bg-border" aria-hidden />}
          </div>
          <div className="pb-1">
            <div className="font-semibold text-text">{event.label}</div>
            <div className="mt-0.5 text-sm text-text-muted">{event.detail}</div>
          </div>
        </li>
      ))}
    </ol>
  )
}
