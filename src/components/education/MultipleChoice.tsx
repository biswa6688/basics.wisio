import { useState } from 'react'
import { Check, X } from 'lucide-react'

export interface MultipleChoiceProps {
  question: string
  options: string[]
  correctIndex: number
  explanation?: string
}

export function MultipleChoice({ question, options, correctIndex, explanation }: MultipleChoiceProps) {
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <div className="rounded-xl border border-border bg-surface p-5">
      <p className="mb-4 font-semibold text-text">{question}</p>
      <div className="flex flex-col gap-2" role="radiogroup" aria-label={question}>
        {options.map((option, index) => {
          const isSelected = selected === index
          const isCorrect = index === correctIndex
          const showState = selected !== null && (isSelected || isCorrect)

          return (
            <button
              key={option}
              type="button"
              role="radio"
              aria-checked={isSelected}
              disabled={selected !== null}
              onClick={() => setSelected(index)}
              className={`flex items-center justify-between rounded-lg border px-4 py-2.5 text-left text-sm transition-colors ${
                showState && isCorrect
                  ? 'border-primary-500 bg-primary-50 text-primary-800 dark:bg-primary-950/60 dark:text-primary-200'
                  : showState && isSelected
                    ? 'border-amber-500 bg-amber-50 text-amber-800 dark:bg-amber-950/40 dark:text-amber-200'
                    : 'border-border text-text hover:border-primary-400 disabled:hover:border-border'
              }`}
            >
              {option}
              {showState && isCorrect && <Check className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />}
              {showState && isSelected && !isCorrect && <X className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />}
            </button>
          )
        })}
      </div>
      {selected !== null && explanation && <p className="mt-3 text-sm text-text-muted">{explanation}</p>}
    </div>
  )
}
