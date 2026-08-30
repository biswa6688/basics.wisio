import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'

export type ThemePreference = 'light' | 'dark' | 'system'
type ResolvedTheme = 'light' | 'dark'

interface ThemeContextValue {
  preference: ThemePreference
  resolvedTheme: ResolvedTheme
  setPreference: (preference: ThemePreference) => void
}

const STORAGE_KEY = 'wisio-theme-preference'

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

function getSystemTheme(): ResolvedTheme {
  if (typeof window === 'undefined') return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function readStoredPreference(): ThemePreference {
  if (typeof window === 'undefined') return 'system'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return stored === 'light' || stored === 'dark' || stored === 'system' ? stored : 'system'
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [preference, setPreferenceState] = useState<ThemePreference>(readStoredPreference)
  const [systemTheme, setSystemTheme] = useState<ResolvedTheme>(getSystemTheme)

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const listener = (event: MediaQueryListEvent) => setSystemTheme(event.matches ? 'dark' : 'light')
    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [])

  const resolvedTheme: ResolvedTheme = preference === 'system' ? systemTheme : preference

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', resolvedTheme === 'dark')
  }, [resolvedTheme])

  const setPreference = useCallback((next: ThemePreference) => {
    setPreferenceState(next)
    window.localStorage.setItem(STORAGE_KEY, next)
  }, [])

  const value = useMemo(
    () => ({ preference, resolvedTheme, setPreference }),
    [preference, resolvedTheme, setPreference],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within a ThemeProvider')
  return ctx
}
