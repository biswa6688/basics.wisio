const LAYERS = [
  { label: 'CPU Registers', speed: 'Fastest', size: 'Bytes', color: '#16a34a', width: '35%' },
  { label: 'Cache (L1/L2/L3)', speed: 'Very fast', size: 'Kilobytes–Megabytes', color: '#34d17a', width: '55%' },
  { label: 'RAM (Main Memory)', speed: 'Fast', size: 'Gigabytes', color: '#6ee7a3', width: '75%' },
  { label: 'Storage (SSD/HDD)', speed: 'Slow', size: 'Terabytes', color: '#a7f3c6', width: '100%' },
]

export function MemoryHierarchy() {
  return (
    <div className="flex flex-col items-center gap-2.5">
      {LAYERS.map((layer) => (
        <div key={layer.label} className="flex items-center gap-4" style={{ width: layer.width }}>
          <div
            className="flex h-14 flex-1 items-center justify-between rounded-lg px-4 text-sm font-semibold text-primary-950"
            style={{ backgroundColor: layer.color }}
          >
            <span>{layer.label}</span>
            <span className="hidden text-xs font-medium opacity-80 sm:inline">{layer.size}</span>
          </div>
          <span className="w-20 shrink-0 text-right text-xs font-medium text-text-muted">{layer.speed}</span>
        </div>
      ))}
    </div>
  )
}
