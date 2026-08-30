import { NavLink } from 'react-router-dom'
import { ThemeToggle } from './ThemeToggle'

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <NavLink to="/" className="flex items-center gap-2.5">
          <img src="/wisio.svg" alt="Wisio logo" className="h-8 w-8" />
          <div className="leading-tight">
            <div className="text-base font-bold tracking-tight text-text">Wisio</div>
            <div className="text-[10.5px] font-medium uppercase tracking-wide text-text-muted">
              Learn the Basics. Build Your Wisdom.
            </div>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-6 md:flex">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `border-b-2 py-1 text-sm font-medium transition-colors ${
                isActive
                  ? 'border-primary-600 text-text dark:border-primary-400'
                  : 'border-transparent text-text-muted hover:text-text'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/topics"
            className={({ isActive }) =>
              `border-b-2 py-1 text-sm font-medium transition-colors ${
                isActive
                  ? 'border-primary-600 text-text dark:border-primary-400'
                  : 'border-transparent text-text-muted hover:text-text'
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
