export function DefinitionCard({ term, definition, tag }: { term: string; definition: string; tag?: string }) {
  return (
    <div className="rounded-xl border border-border bg-surface p-5">
      <div className="flex items-baseline justify-between gap-2">
        <dt className="font-mono text-base font-bold text-text">{term}</dt>
        {tag && (
          <span className="rounded-md bg-primary-100 px-2 py-0.5 text-xs font-semibold text-primary-700 dark:bg-primary-950 dark:text-primary-300">
            {tag}
          </span>
        )}
      </div>
      <dd className="mt-1.5 text-sm leading-relaxed text-text-muted">{definition}</dd>
    </div>
  )
}
