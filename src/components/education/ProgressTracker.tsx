import { CheckCircle2, Circle } from 'lucide-react'
import { useProgress } from '../../hooks/useProgress'

export function MarkCompleteButton({ slug }: { slug: string }) {
  const { isComplete, toggle } = useProgress()
  const done = isComplete(slug)

  return (
    <button
      type="button"
      onClick={() => toggle(slug)}
      aria-pressed={done}
      className={`inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-semibold transition-colors ${
        done
          ? 'border-primary-500 bg-primary-50 text-primary-700 dark:bg-primary-950/60 dark:text-primary-300'
          : 'border-border text-text hover:border-primary-400'
      }`}
    >
      {done ? <CheckCircle2 className="h-4 w-4" strokeWidth={1.75} aria-hidden /> : <Circle className="h-4 w-4" strokeWidth={1.75} aria-hidden />}
      {done ? 'Completed' : 'Mark as complete'}
    </button>
  )
}

export function ProgressSummary({ total }: { total: number }) {
  const { completed } = useProgress()
  const done = completed.length
  const pct = total > 0 ? Math.round((done / total) * 100) : 0

  return (
    <div className="rounded-xl border border-border bg-surface p-4">
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="font-semibold text-text">Your progress</span>
        <span className="text-text-muted">
          {done} / {total} lessons
        </span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-bg-subtle">
        <div className="h-full rounded-full bg-primary-500 transition-all" style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}
