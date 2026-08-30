import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { MultipleChoice } from './MultipleChoice'

describe('MultipleChoice', () => {
  const props = {
    question: 'How many bits in a byte?',
    options: ['4', '8', '16'],
    correctIndex: 1,
    explanation: 'A byte is 8 bits.',
  }

  it('shows no feedback before an option is picked', () => {
    render(<MultipleChoice {...props} />)
    expect(screen.queryByText(props.explanation)).not.toBeInTheDocument()
  })

  it('reveals the explanation after picking any option', async () => {
    const user = userEvent.setup()
    render(<MultipleChoice {...props} />)

    await user.click(screen.getByRole('radio', { name: '4' }))

    expect(screen.getByText(props.explanation)).toBeInTheDocument()
  })

  it('marks the correct option as checked-state via aria-checked once answered', async () => {
    const user = userEvent.setup()
    render(<MultipleChoice {...props} />)

    const wrongOption = screen.getByRole('radio', { name: '4' })
    await user.click(wrongOption)

    expect(wrongOption).toHaveAttribute('aria-checked', 'true')
    // All options become disabled after answering
    for (const option of screen.getAllByRole('radio')) {
      expect(option).toBeDisabled()
    }
  })
})
