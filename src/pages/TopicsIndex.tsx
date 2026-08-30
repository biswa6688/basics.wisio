import { topics } from '../data/topics'
import { TopicCard } from '../components/content/TopicCard'
import { ProgressSummary } from '../components/education/ProgressTracker'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export function TopicsIndex() {
  useDocumentTitle('All Topics — Wisio')

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="mb-6 max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">All topics</h1>
        <p className="mt-2 text-text-muted">
          Eight illustrated lessons covering the core ideas behind every computer — pick one and start exploring.
        </p>
      </div>
      <div className="mb-10 max-w-sm">
        <ProgressSummary total={topics.length} />
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {topics.map((topic) => (
          <TopicCard key={topic.slug} topic={topic} />
        ))}
      </div>
    </div>
  )
}
