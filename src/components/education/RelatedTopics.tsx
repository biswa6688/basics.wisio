import { topics } from '../../data/topics'
import { TopicCard } from '../content/TopicCard'

export function RelatedTopics({ currentSlug, count = 2 }: { currentSlug: string; count?: number }) {
  const currentIndex = topics.findIndex((topic) => topic.slug === currentSlug)
  const related =
    currentIndex === -1
      ? topics.slice(0, count)
      : Array.from({ length: count }, (_, i) => topics[(currentIndex + i + 1) % topics.length])

  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-text-muted">Continue learning</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        {related.map((topic) => (
          <TopicCard key={topic.slug} topic={topic} />
        ))}
      </div>
    </div>
  )
}
