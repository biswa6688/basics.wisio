import { useState } from 'react'
import { RotateCw } from 'lucide-react'

export function FlashCard({ front, back }: { front: string; back: string }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <button
      type="button"
      onClick={() => setFlipped((value) => !value)}
      aria-label={flipped ? `Answer: ${back}. Click to flip back.` : `${front}. Click to reveal answer.`}
      className="flex h-40 w-full flex-col items-center justify-center gap-2 rounded-xl border border-border bg-surface p-6 text-center transition-colors hover:border-primary-400"
    >
      <p className="text-base font-semibold text-text">{flipped ? back : front}</p>
      <span className="flex items-center gap-1 text-xs font-medium text-text-muted">
        <RotateCw className="h-3 w-3" strokeWidth={2} aria-hidden />
        {flipped ? 'Term' : 'Reveal'}
      </span>
    </button>
  )
}
