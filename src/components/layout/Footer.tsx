export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-subtle">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 py-8 text-center sm:px-6">
        <div className="flex items-center gap-2">
          <img src="/wisio.svg" alt="Wisio logo" className="h-6 w-6" />
          <span className="font-semibold text-text">Wisio</span>
        </div>
        <p className="text-sm text-text-muted">Wisdom, Byte by Byte — computer fundamentals, made visual.</p>
        <p className="text-xs text-text-muted/70">© {new Date().getFullYear()} Wisio. Built for curious minds.</p>
      </div>
    </footer>
  )
}
