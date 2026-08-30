import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, LayoutTemplate, MonitorCog, Zap } from 'lucide-react'
import { topics } from '../data/topics'
import { TopicCard } from '../components/content/TopicCard'
import { HeroComputer } from '../components/illustrations/HeroComputer'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

const highlights = [
  { icon: LayoutTemplate, title: 'Visual first', text: 'Every idea is shown as a diagram before it is explained in words.' },
  { icon: Zap, title: 'Bite-sized', text: 'Eight focused lessons — no fluff, just the fundamentals that matter.' },
  { icon: MonitorCog, title: 'Any theme', text: 'Light, dark, or match your system — easy on the eyes, day or night.' },
]

export function Home() {
  useDocumentTitle('Wisio — Learn the Basics. Build Your Wisdom.')

  return (
    <div>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:py-20">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-700 dark:bg-primary-950 dark:text-primary-300">
            Learn the Basics. Build Your Wisdom.
          </span>
          <h1 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight text-text sm:text-5xl">
            Learn how computers <span className="text-primary-600 dark:text-primary-400">really work</span>
          </h1>
          <p className="mt-4 max-w-md text-lg text-text-muted">
            Wisio turns computer fundamentals into rich, illustrated lessons — built for people who understand
            better by seeing.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/topics"
              className="inline-flex items-center gap-1.5 rounded-lg bg-primary-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-primary-900/10 transition-colors hover:bg-primary-700"
            >
              Start learning
              <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
            </Link>
            <Link
              to="/topics/number-systems"
              className="rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-text transition-colors hover:border-primary-400"
            >
              First lesson: Number Systems
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto w-full max-w-md"
        >
          <HeroComputer />
        </motion.div>
      </section>

      <section className="border-y border-border bg-bg-subtle">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-12 sm:px-6 sm:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.title} className="rounded-xl border border-border bg-surface p-6">
              <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary-100 text-primary-700 dark:bg-primary-950 dark:text-primary-300">
                <item.icon className="h-4 w-4" strokeWidth={1.75} aria-hidden />
              </span>
              <h3 className="font-semibold text-text">{item.title}</h3>
              <p className="mt-1 text-sm text-text-muted">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-text sm:text-3xl">Explore the topics</h2>
          <Link to="/topics" className="text-sm font-semibold text-primary-600 hover:underline dark:text-primary-400">
            View all →
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <TopicCard key={topic.slug} topic={topic} />
          ))}
        </div>
      </section>
    </div>
  )
}
