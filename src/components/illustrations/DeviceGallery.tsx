interface Device {
  icon: string
  name: string
  note: string
}

const GROUPS: { title: string; color: string; devices: Device[] }[] = [
  {
    title: 'Input',
    color: '#16a34a',
    devices: [
      { icon: '⌨️', name: 'Keyboard', note: 'Text and commands' },
      { icon: '🖱️', name: 'Mouse', note: 'Pointing and clicking' },
      { icon: '📷', name: 'Camera', note: 'Images and video' },
      { icon: '🎙️', name: 'Microphone', note: 'Sound and voice' },
    ],
  },
  {
    title: 'Output',
    color: '#0891b2',
    devices: [
      { icon: '🖥️', name: 'Monitor', note: 'Visual display' },
      { icon: '🔊', name: 'Speakers', note: 'Audio playback' },
      { icon: '🖨️', name: 'Printer', note: 'Paper output' },
    ],
  },
  {
    title: 'Both',
    color: '#0c6e31',
    devices: [
      { icon: '📱', name: 'Touchscreen', note: 'Displays and receives touch' },
      { icon: '💽', name: 'External drive', note: 'Reads and writes data' },
    ],
  },
]

export function DeviceGallery() {
  return (
    <div className="grid gap-5 sm:grid-cols-3">
      {GROUPS.map((group) => (
        <div key={group.title} className="rounded-2xl border border-border bg-surface p-5">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: group.color }} />
            <h3 className="font-bold text-text">{group.title}</h3>
          </div>
          <div className="flex flex-col gap-3">
            {group.devices.map((device) => (
              <div key={device.name} className="flex items-center gap-3">
                <span className="text-xl" aria-hidden>
                  {device.icon}
                </span>
                <div>
                  <div className="text-sm font-semibold text-text">{device.name}</div>
                  <div className="text-xs text-text-muted">{device.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
