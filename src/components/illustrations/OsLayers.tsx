const LAYERS = [
  { label: 'Apps', detail: 'Browser, editor, games — what you interact with', color: '#a7f3c6' },
  { label: 'Operating System', detail: 'Manages processes, memory, files, devices', color: '#16a34a' },
  { label: 'Hardware', detail: 'CPU, RAM, storage, screen, network card', color: '#0c6e31' },
]

export function OsLayers() {
  return (
    <div className="flex flex-col gap-2">
      {LAYERS.map((layer) => (
        <div
          key={layer.label}
          className="flex items-center gap-4 rounded-xl px-5 py-4"
          style={{ backgroundColor: layer.color }}
        >
          <span className="w-40 shrink-0 font-bold text-primary-950">{layer.label}</span>
          <span className="text-sm text-primary-950/80">{layer.detail}</span>
        </div>
      ))}
    </div>
  )
}
