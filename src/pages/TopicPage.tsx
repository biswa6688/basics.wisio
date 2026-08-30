import { Navigate, useParams } from 'react-router-dom'
import { getTopicBySlug } from '../data/topics'
import { topicPages } from './topics/registry'
import { TopicLayout } from '../components/content/TopicLayout'

function ComingSoon() {
  return (
    <div className="rounded-2xl border border-dashed border-border bg-bg-subtle p-10 text-center">
      <p className="text-lg font-semibold text-text">This lesson is being illustrated.</p>
      <p className="mt-1 text-sm text-text-muted">Check back soon — it's next on the build list.</p>
    </div>
  )
}

export function TopicPage() {
  const { slug = '' } = useParams()
  const topic = getTopicBySlug(slug)

  if (!topic) return <Navigate to="/topics" replace />

  const Content = topicPages[slug] ?? ComingSoon

  return (
    <TopicLayout topic={topic}>
      <Content />
    </TopicLayout>
  )
}
