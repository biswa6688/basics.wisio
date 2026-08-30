import type { ReactNode } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Topic } from '../../data/topics'
import { topicIcons } from '../../data/topicIcons'
import { MarkCompleteButton } from '../education/ProgressTracker'
import { LearningPath } from '../education/LearningPath'
import { RelatedTopics } from '../education/RelatedTopics'

export function TopicLayout({ topic, children }: { topic: Topic; children: ReactNode }) {
  const Icon = topicIcons[topic.slug]

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
      <Link
        to="/topics"
        className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-text-muted hover:text-primary-600 dark:hover:text-primary-400"
      >
        <ArrowLeft className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
        All topics
      </Link>
      <div className="mb-10">
        <span
          className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg"
          style={{ backgroundColor: `color-mix(in srgb, ${topic.accent} 14%, transparent)`, color: topic.accent }}
        >
          {Icon && <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />}
        </span>
        <h1 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">{topic.title}</h1>
        <p className="mt-2 text-lg font-medium" style={{ color: topic.accent }}>
          {topic.tagline}
        </p>
        <p className="mt-3 max-w-2xl text-text-muted">{topic.description}</p>
      </div>
      <div className="flex flex-col gap-12">{children}</div>

      <div className="mt-14 flex flex-col gap-12 border-t border-border pt-10">
        <MarkCompleteButton slug={topic.slug} />
        <RelatedTopics currentSlug={topic.slug} />
        <LearningPath currentSlug={topic.slug} />
      </div>
    </div>
  )
}

export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="mb-4 text-xl font-bold text-text">{title}</h2>
      {children}
    </section>
  )
}
