import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it } from 'vitest'
import { ThemeProvider } from '../../theme/ThemeProvider'
import { ThemeToggle } from './ThemeToggle'

describe('ThemeToggle', () => {
  beforeEach(() => {
    window.localStorage.clear()
    document.documentElement.classList.remove('dark')
  })

  it('defaults to System when no preference is stored', () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>,
    )
    expect(screen.getByRole('button', { name: /change theme/i })).toHaveTextContent('System')
  })

  it('switches to Dark, applies the dark class, and persists the choice', async () => {
    const user = userEvent.setup()
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>,
    )

    await user.click(screen.getByRole('button', { name: /change theme/i }))
    await user.click(screen.getByRole('button', { name: 'Dark' }))

    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(window.localStorage.getItem('wisio-theme-preference')).toBe('dark')
  })
})
