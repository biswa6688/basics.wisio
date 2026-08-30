import { motion } from 'framer-motion'

const STOPS = [
  { x: 30, label: 'Browser', sub: 'You hit enter' },
  { x: 170, label: 'DNS', sub: 'Name → IP address' },
  { x: 310, label: 'Server', sub: 'Finds the page' },
  { x: 170, label: 'Response', sub: 'HTML, CSS, JS sent back', y: 150 },
]

export function RequestJourney() {
  return (
    <svg viewBox="0 0 400 220" className="w-full">
      <path d="M 70 40 L 200 40 L 200 40 L 330 40" fill="none" stroke="var(--color-border)" strokeWidth="2" />
      <path d="M 330 60 L 330 150 L 210 150" fill="none" stroke="var(--color-border)" strokeWidth="2" strokeDasharray="4 4" />
      <path d="M 170 150 L 70 150 L 70 60" fill="none" stroke="var(--color-border)" strokeWidth="2" strokeDasharray="4 4" />

      <motion.circle
        r="4"
        fill="#16a34a"
        initial={{ cx: 70, cy: 40 }}
        animate={{ cx: [70, 200, 330, 330, 170, 70], cy: [40, 40, 40, 150, 150, 40] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
      />

      {STOPS.map((stop) => (
        <g key={stop.label + stop.sub}>
          <rect x={stop.x} y={(stop.y ?? 40) - 22} width="80" height="46" rx="10" fill="var(--color-surface)" stroke="#0891b2" strokeWidth="2" />
          <text x={stop.x + 40} y={(stop.y ?? 40) - 4} textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--color-text)">
            {stop.label}
          </text>
          <text x={stop.x + 40} y={(stop.y ?? 40) + 12} textAnchor="middle" fontSize="7.5" fill="var(--color-text-muted)">
            {stop.sub}
          </text>
        </g>
      ))}
    </svg>
  )
}
