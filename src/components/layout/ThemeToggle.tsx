import { useEffect, useRef, useState } from 'react'
import { useTheme, type ThemePreference } from '../../theme/ThemeProvider'

const OPTIONS: { value: ThemePreference; label: string; icon: string }[] = [
  { value: 'light', label: 'Light', icon: '☀️' },
  { value: 'dark', label: 'Dark', icon: '🌙' },
  { value: 'system', label: 'System', icon: '🖥️' },
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

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label="Change theme"
        aria-expanded={open}
        className="flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1.5 text-sm font-medium text-text-muted transition-colors hover:border-primary-400 hover:text-text"
      >
        <span aria-hidden>{active.icon}</span>
        <span className="hidden sm:inline">{active.label}</span>
      </button>
      {open && (
        <div className="absolute right-0 z-20 mt-2 w-36 overflow-hidden rounded-xl border border-border bg-surface-raised shadow-lg shadow-black/5">
          {OPTIONS.map((option) => (
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
              <span aria-hidden>{option.icon}</span>
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
