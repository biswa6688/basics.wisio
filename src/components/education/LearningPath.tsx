import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { topics } from '../../data/topics'

export function LearningPath({ currentSlug }: { currentSlug: string }) {
  const index = topics.findIndex((topic) => topic.slug === currentSlug)
  if (index === -1) return null

  const prev = index > 0 ? topics[index - 1] : null
  const next = index < topics.length - 1 ? topics[index + 1] : null

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-1.5" aria-label={`Lesson ${index + 1} of ${topics.length}`}>
        {topics.map((topic, i) => (
          <span
            key={topic.slug}
            className="h-1.5 flex-1 rounded-full"
            style={{ backgroundColor: i <= index ? 'var(--color-primary-500)' : 'var(--color-border)' }}
            aria-hidden
          />
        ))}
      </div>
      <div className="flex items-center justify-between gap-3">
        {prev ? (
          <Link
            to={`/topics/${prev.slug}`}
            className="flex items-center gap-1.5 rounded-lg border border-border px-4 py-2 text-sm font-medium text-text transition-colors hover:border-primary-400"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={2} aria-hidden />
            {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            to={`/topics/${next.slug}`}
            className="flex items-center gap-1.5 rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
          >
            {next.title}
            <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
          </Link>
        ) : (
          <Link
            to="/topics"
            className="flex items-center gap-1.5 rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
          >
            All topics
            <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
          </Link>
        )}
      </div>
    </div>
  )
}
