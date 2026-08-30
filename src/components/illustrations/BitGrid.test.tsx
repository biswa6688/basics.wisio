import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BitGrid } from './BitGrid'

describe('BitGrid', () => {
  it('renders the correct bit pattern and decimal value for 202', () => {
    render(<BitGrid value={202} />)
    // 202 = 11001010
    expect(screen.getByText('11001010')).toBeInTheDocument()
    expect(screen.getByText('202')).toBeInTheDocument()
  })

  it('renders an all-zero pattern for 0', () => {
    render(<BitGrid value={0} />)
    expect(screen.getByText('00000000')).toBeInTheDocument()
  })

  it('renders an all-one pattern for 255', () => {
    render(<BitGrid value={255} />)
    expect(screen.getByText('11111111')).toBeInTheDocument()
  })
})
