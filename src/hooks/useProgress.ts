import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'wisio-completed-topics'

function readStored(): string[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as string[]) : []
  } catch {
    return []
  }
}

export function useProgress() {
  const [completed, setCompleted] = useState<string[]>(readStored)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(completed))
  }, [completed])

  const isComplete = useCallback((slug: string) => completed.includes(slug), [completed])

  const markComplete = useCallback((slug: string) => {
    setCompleted((prev) => (prev.includes(slug) ? prev : [...prev, slug]))
  }, [])

  const markIncomplete = useCallback((slug: string) => {
    setCompleted((prev) => prev.filter((item) => item !== slug))
  }, [])

  const toggle = useCallback((slug: string) => {
    setCompleted((prev) => (prev.includes(slug) ? prev.filter((item) => item !== slug) : [...prev, slug]))
  }, [])

  return { completed, isComplete, markComplete, markIncomplete, toggle }
}
