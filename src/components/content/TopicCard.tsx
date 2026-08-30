import { Link } from 'react-router-dom'
import type { Topic } from '../../data/topics'

export function TopicCard({ topic }: { topic: Topic }) {
  return (
    <Link
      to={`/topics/${topic.slug}`}
      className="group relative flex flex-col gap-3 overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-900/5"
    >
      <span
        className="absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-10 transition-opacity group-hover:opacity-20"
        style={{ backgroundColor: topic.accent }}
        aria-hidden
      />
      <span
        className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-lg font-bold text-white"
        style={{ backgroundColor: topic.accent }}
        aria-hidden
      >
        {topic.title.charAt(0)}
      </span>
      <h3 className="text-lg font-bold text-text">{topic.title}</h3>
      <p className="text-sm font-medium text-primary-600 dark:text-primary-400">{topic.tagline}</p>
      <p className="text-sm text-text-muted">{topic.description}</p>
      <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-primary-600 dark:text-primary-400">
        Explore
        <span className="transition-transform group-hover:translate-x-1" aria-hidden>
          →
        </span>
      </span>
    </Link>
  )
}
