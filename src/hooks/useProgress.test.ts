import { act, renderHook } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import { useProgress } from './useProgress'

describe('useProgress', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('starts with no completed topics', () => {
    const { result } = renderHook(() => useProgress())
    expect(result.current.completed).toEqual([])
    expect(result.current.isComplete('number-systems')).toBe(false)
  })

  it('marks a topic complete and persists it to localStorage', () => {
    const { result } = renderHook(() => useProgress())

    act(() => result.current.markComplete('number-systems'))

    expect(result.current.isComplete('number-systems')).toBe(true)
    expect(JSON.parse(window.localStorage.getItem('wisio-completed-topics') ?? '[]')).toContain('number-systems')
  })

  it('does not add duplicates when marking the same topic complete twice', () => {
    const { result } = renderHook(() => useProgress())

    act(() => result.current.markComplete('number-systems'))
    act(() => result.current.markComplete('number-systems'))

    expect(result.current.completed).toEqual(['number-systems'])
  })

  it('toggle flips completion state', () => {
    const { result } = renderHook(() => useProgress())

    act(() => result.current.toggle('number-systems'))
    expect(result.current.isComplete('number-systems')).toBe(true)

    act(() => result.current.toggle('number-systems'))
    expect(result.current.isComplete('number-systems')).toBe(false)
  })
})
