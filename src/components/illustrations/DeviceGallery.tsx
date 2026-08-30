import { Camera, HardDrive, Keyboard, Mic, Monitor, Mouse, Printer, Smartphone, Volume2, type LucideIcon } from 'lucide-react'

interface Device {
  icon: LucideIcon
  name: string
  note: string
}

const GROUPS: { title: string; color: string; devices: Device[] }[] = [
  {
    title: 'Input',
    color: '#16a34a',
    devices: [
      { icon: Keyboard, name: 'Keyboard', note: 'Text and commands' },
      { icon: Mouse, name: 'Mouse', note: 'Pointing and clicking' },
      { icon: Camera, name: 'Camera', note: 'Images and video' },
      { icon: Mic, name: 'Microphone', note: 'Sound and voice' },
    ],
  },
  {
    title: 'Output',
    color: '#0891b2',
    devices: [
      { icon: Monitor, name: 'Monitor', note: 'Visual display' },
      { icon: Volume2, name: 'Speakers', note: 'Audio playback' },
      { icon: Printer, name: 'Printer', note: 'Paper output' },
    ],
  },
  {
    title: 'Both',
    color: '#0c6e31',
    devices: [
      { icon: Smartphone, name: 'Touchscreen', note: 'Displays and receives touch' },
      { icon: HardDrive, name: 'External drive', note: 'Reads and writes data' },
    ],
  },
]

export function DeviceGallery() {
  return (
    <div className="grid gap-5 sm:grid-cols-3">
      {GROUPS.map((group) => (
        <div key={group.title} className="rounded-xl border border-border bg-surface p-5">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: group.color }} />
            <h3 className="text-sm font-semibold uppercase tracking-wide text-text">{group.title}</h3>
          </div>
          <div className="flex flex-col gap-3.5">
            {group.devices.map((device) => (
              <div key={device.name} className="flex items-center gap-3">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                  style={{ backgroundColor: `color-mix(in srgb, ${group.color} 14%, transparent)`, color: group.color }}
                >
                  <device.icon className="h-4 w-4" strokeWidth={1.75} aria-hidden />
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
