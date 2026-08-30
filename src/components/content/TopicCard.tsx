import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { Topic } from '../../data/topics'
import { topicIcons } from '../../data/topicIcons'

export function TopicCard({ topic }: { topic: Topic }) {
  const Icon = topicIcons[topic.slug]

  return (
    <Link
      to={`/topics/${topic.slug}`}
      className="group flex flex-col gap-3 rounded-xl border border-border bg-surface p-6 transition-colors hover:border-primary-400/60 hover:bg-surface-raised"
    >
      <span
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg"
        style={{ backgroundColor: `color-mix(in srgb, ${topic.accent} 14%, transparent)`, color: topic.accent }}
      >
        {Icon && <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />}
      </span>
      <h3 className="text-base font-semibold text-text">{topic.title}</h3>
      <p className="text-sm font-medium" style={{ color: topic.accent }}>
        {topic.tagline}
      </p>
      <p className="text-sm leading-relaxed text-text-muted">{topic.description}</p>
      <span className="mt-auto inline-flex items-center gap-1 pt-1 text-sm font-semibold text-primary-600 dark:text-primary-400">
        Explore
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" strokeWidth={2} aria-hidden />
      </span>
    </Link>
  )
}
