import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { useDocumentTitle } from './useDocumentTitle'

function TitleSetter({ title }: { title: string }) {
  useDocumentTitle(title)
  return null
}

describe('useDocumentTitle', () => {
  it('sets document.title on mount', () => {
    render(<TitleSetter title="Number Systems — Wisio" />)
    expect(document.title).toBe('Number Systems — Wisio')
  })

  it('updates document.title when the title prop changes', () => {
    const { rerender } = render(<TitleSetter title="Home — Wisio" />)
    expect(document.title).toBe('Home — Wisio')

    rerender(<TitleSetter title="Topics — Wisio" />)
    expect(document.title).toBe('Topics — Wisio')
  })

  it('restores the previous title on unmount', () => {
    document.title = 'Original'
    const { unmount } = render(<TitleSetter title="Temporary — Wisio" />)
    expect(document.title).toBe('Temporary — Wisio')

    unmount()
    expect(document.title).toBe('Original')
  })
})
