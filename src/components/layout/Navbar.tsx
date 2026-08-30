import { NavLink } from 'react-router-dom'
import { ThemeToggle } from './ThemeToggle'

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <NavLink to="/" className="flex items-center gap-2.5">
          <img src="/wisio.svg" alt="Wisio logo" className="h-9 w-9" />
          <div className="leading-tight">
            <div className="text-lg font-bold tracking-tight text-text">Wisio</div>
            <div className="text-[11px] font-medium text-primary-600 dark:text-primary-400">
              Wisdom, Byte by Byte
            </div>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-1 md:flex">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
                isActive ? 'bg-primary-100 text-primary-700 dark:bg-primary-950 dark:text-primary-300' : 'text-text-muted hover:text-text'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/topics"
            className={({ isActive }) =>
              `rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
                isActive ? 'bg-primary-100 text-primary-700 dark:bg-primary-950 dark:text-primary-300' : 'text-text-muted hover:text-text'
              }`
            }
          >
            Topics
          </NavLink>
        </nav>

        <ThemeToggle />
      </div>
    </header>
  )
}
