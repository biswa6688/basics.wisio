import { CheckCircle2 } from 'lucide-react'

export function KeyTakeaways({ items }: { items: string[] }) {
  return (
    <div className="rounded-xl border border-primary-200 bg-primary-50 p-5 dark:border-primary-900 dark:bg-primary-950/40">
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-300">
        Key takeaways
      </h3>
      <ul className="flex flex-col gap-2.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-text">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary-600 dark:text-primary-400" strokeWidth={1.75} aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
