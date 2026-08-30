import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { topics } from '../data/topics'
import { TopicCard } from '../components/content/TopicCard'
import { HeroComputer } from '../components/illustrations/HeroComputer'

const highlights = [
  { icon: '🧩', title: 'Visual first', text: 'Every idea is shown as a diagram before it is explained in words.' },
  { icon: '⚡', title: 'Bite-sized', text: 'Six focused lessons — no fluff, just the fundamentals that matter.' },
  { icon: '🌗', title: 'Any theme', text: 'Light, dark, or match your system — easy on the eyes, day or night.' },
]

export function Home() {
  return (
    <div>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:py-20">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold text-primary-700 dark:bg-primary-950 dark:text-primary-300">
            Wisdom, Byte by Byte
          </span>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-text sm:text-5xl">
            Learn how computers <span className="text-primary-600 dark:text-primary-400">really work</span>
          </h1>
          <p className="mt-4 max-w-md text-lg text-text-muted">
            Wisio turns computer fundamentals into rich, illustrated lessons — built for people who understand
            better by seeing.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/topics"
              className="rounded-full bg-primary-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-primary-600/25 transition-transform hover:-translate-y-0.5 hover:bg-primary-700"
            >
              Start learning
            </Link>
            <Link
              to="/topics/number-systems"
              className="rounded-full border border-border px-6 py-3 text-sm font-bold text-text transition-colors hover:border-primary-400"
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
            <div key={item.title} className="rounded-2xl border border-border bg-surface p-6">
              <div className="mb-3 text-2xl" aria-hidden>
                {item.icon}
              </div>
              <h3 className="font-bold text-text">{item.title}</h3>
              <p className="mt-1 text-sm text-text-muted">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl font-extrabold tracking-tight text-text sm:text-3xl">Explore the topics</h2>
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
