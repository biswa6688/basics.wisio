import { Monitor, Moon, Sun, type LucideIcon } from 'lucide-react'
import { useTheme, type ThemePreference } from '../../theme/ThemeProvider'

const OPTIONS: { value: ThemePreference; label: string; icon: LucideIcon }[] = [
  { value: 'dark', label: 'Dark', icon: Moon },
  { value: 'system', label: 'System', icon: Monitor },
  { value: 'light', label: 'Light', icon: Sun },
]

export function ThemeToggle() {
  const { preference, setPreference } = useTheme()

  return (
    <div role="radiogroup" aria-label="Theme" className="flex items-center gap-0.5 rounded-lg border border-border bg-surface p-0.5">
      {OPTIONS.map((option) => {
        const Icon = option.icon
        const active = option.value === preference
        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={option.label}
            title={option.label}
            onClick={() => setPreference(option.value)}
            className={`flex h-7 w-7 items-center justify-center rounded-md transition-colors ${
              active
                ? 'bg-primary-100 text-primary-700 dark:bg-primary-950 dark:text-primary-300'
                : 'text-text-muted hover:text-text'
            }`}
          >
            <Icon className="h-4 w-4" strokeWidth={1.75} aria-hidden />
          </button>
        )
      })}
    </div>
  )
}
