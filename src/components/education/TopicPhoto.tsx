interface TopicPhotoProps {
  src: string
  alt: string
  caption: string
  author: string
  authorUrl: string
  license: string
  licenseUrl: string
}

export function TopicPhoto({ src, alt, caption, author, authorUrl, license, licenseUrl }: TopicPhotoProps) {
  return (
    <figure className="overflow-hidden rounded-xl border border-border bg-surface">
      <img src={src} alt={alt} className="h-56 w-full object-cover sm:h-72" loading="lazy" />
      <figcaption className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 px-4 py-2.5 text-xs text-text-muted">
        <span>{caption}</span>
        <span>
          Photo:{' '}
          <a href={authorUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-text">
            {author}
          </a>
          ,{' '}
          <a href={licenseUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-text">
            {license}
          </a>
        </span>
      </figcaption>
    </figure>
  )
}
