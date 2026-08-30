import { useEffect, useRef, useState } from 'react'
import { Monitor, Moon, Sun, type LucideIcon } from 'lucide-react'
import { useTheme, type ThemePreference } from '../../theme/ThemeProvider'

const OPTIONS: { value: ThemePreference; label: string; icon: LucideIcon }[] = [
  { value: 'light', label: 'Light', icon: Sun },
  { value: 'dark', label: 'Dark', icon: Moon },
  { value: 'system', label: 'System', icon: Monitor },
]

export function ThemeToggle() {
  const { preference, setPreference } = useTheme()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  const active = OPTIONS.find((option) => option.value === preference) ?? OPTIONS[2]
  const ActiveIcon = active.icon

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label="Change theme"
        aria-expanded={open}
        className="flex items-center gap-1.5 rounded-lg border border-border bg-surface px-2.5 py-1.5 text-sm font-medium text-text-muted transition-colors hover:border-primary-400 hover:text-text"
      >
        <ActiveIcon className="h-4 w-4" strokeWidth={1.75} aria-hidden />
        <span className="hidden sm:inline">{active.label}</span>
      </button>
      {open && (
        <div className="absolute right-0 z-20 mt-2 w-36 overflow-hidden rounded-lg border border-border bg-surface-raised shadow-md shadow-black/5">
          {OPTIONS.map((option) => {
            const Icon = option.icon
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  setPreference(option.value)
                  setOpen(false)
                }}
                className={`flex w-full items-center gap-2 px-3 py-2 text-left text-sm transition-colors hover:bg-primary-50 dark:hover:bg-primary-950 ${
                  option.value === preference ? 'text-primary-600 dark:text-primary-400 font-semibold' : 'text-text'
                }`}
              >
                <Icon className="h-4 w-4" strokeWidth={1.75} aria-hidden />
                {option.label}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
