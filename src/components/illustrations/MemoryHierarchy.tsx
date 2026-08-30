const LAYERS = [
  { label: 'CPU Registers', speed: 'Fastest', size: 'Bytes', accent: '#16a34a', width: '38%' },
  { label: 'Cache (L1/L2/L3)', speed: 'Very fast', size: 'Kilobytes–Megabytes', accent: '#0f8a3d', width: '58%' },
  { label: 'RAM (Main Memory)', speed: 'Fast', size: 'Gigabytes', accent: '#0891b2', width: '78%' },
  { label: 'Storage (SSD/HDD)', speed: 'Slow', size: 'Terabytes', accent: '#0c6e31', width: '100%' },
]

export function MemoryHierarchy() {
  return (
    <div className="flex flex-col items-center gap-3">
      {LAYERS.map((layer) => (
        <div key={layer.label} className="flex items-center gap-4" style={{ width: layer.width }}>
          <div
            className="flex h-12 flex-1 items-center justify-between rounded-lg border bg-surface px-4 text-sm"
            style={{ borderColor: `color-mix(in srgb, ${layer.accent} 45%, var(--color-border))` }}
          >
            <span className="font-mono font-semibold text-text">{layer.label}</span>
            <span className="hidden text-xs font-medium text-text-muted sm:inline">{layer.size}</span>
          </div>
          <span className="w-20 shrink-0 text-right text-xs font-medium" style={{ color: layer.accent }}>
            {layer.speed}
          </span>
        </div>
      ))}
    </div>
  )
}
