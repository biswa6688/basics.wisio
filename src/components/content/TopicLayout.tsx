import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import type { Topic } from '../../data/topics'

export function TopicLayout({ topic, children }: { topic: Topic; children: ReactNode }) {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
      <Link to="/topics" className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-text-muted hover:text-primary-600 dark:hover:text-primary-400">
        ← All topics
      </Link>
      <div className="mb-10">
        <span
          className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl text-xl font-bold text-white"
          style={{ backgroundColor: topic.accent }}
        >
          {topic.title.charAt(0)}
        </span>
        <h1 className="text-3xl font-extrabold tracking-tight text-text sm:text-4xl">{topic.title}</h1>
        <p className="mt-2 text-lg font-medium text-primary-600 dark:text-primary-400">{topic.tagline}</p>
        <p className="mt-3 max-w-2xl text-text-muted">{topic.description}</p>
      </div>
      <div className="flex flex-col gap-12">{children}</div>
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
