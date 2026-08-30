const LAYERS = [
  { label: 'Apps', detail: 'Browser, editor, games — what you interact with', accent: '#16a34a' },
  { label: 'Operating System', detail: 'Manages processes, memory, files, devices', accent: '#0c6e31' },
  { label: 'Hardware', detail: 'CPU, RAM, storage, screen, network card', accent: '#0891b2' },
]

export function OsLayers() {
  return (
    <div className="flex flex-col gap-2.5">
      {LAYERS.map((layer) => (
        <div
          key={layer.label}
          className="flex items-center gap-4 rounded-lg border border-border bg-surface py-4 pl-4 pr-5"
          style={{ borderLeftWidth: 3, borderLeftColor: layer.accent }}
        >
          <span className="w-40 shrink-0 font-mono text-sm font-semibold text-text">{layer.label}</span>
          <span className="text-sm text-text-muted">{layer.detail}</span>
        </div>
      ))}
    </div>
  )
}
