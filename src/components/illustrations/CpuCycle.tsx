import { motion } from 'framer-motion'

const STAGES = [
  { label: 'Fetch', detail: 'Get the next instruction from memory', angle: -90 },
  { label: 'Decode', detail: 'Figure out what the instruction means', angle: 0 },
  { label: 'Execute', detail: 'Perform the operation (add, compare, move…)', angle: 90 },
  { label: 'Store', detail: 'Write the result back to a register or memory', angle: 180 },
]

const RADIUS = 120
const CENTER = 150

function pointOn(angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180
  return { x: CENTER + RADIUS * Math.cos(rad), y: CENTER + RADIUS * Math.sin(rad) }
}

export function CpuCycle() {
  return (
    <div className="flex flex-col items-center gap-6">
      <svg viewBox="0 0 300 300" className="h-72 w-72">
        <circle cx={CENTER} cy={CENTER} r={RADIUS} fill="none" stroke="var(--color-border)" strokeWidth="1.5" strokeDasharray="5 5" />
        <rect x={CENTER - 32} y={CENTER - 24} width="64" height="48" rx="8" fill="var(--color-surface)" stroke="#16a34a" strokeWidth="1.5" />
        <text x={CENTER} y={CENTER + 5} textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--color-text)" fontFamily="monospace">
          CPU
        </text>

        {STAGES.map((stage, index) => {
          const point = pointOn(stage.angle)
          return (
            <g key={stage.label}>
              <motion.circle
                cx={point.x}
                cy={point.y}
                r="24"
                fill="var(--color-surface)"
                stroke="#16a34a"
                strokeWidth="1.5"
                initial={{ opacity: 0.75 }}
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2.2, repeat: Infinity, delay: index * 0.4, ease: 'easeInOut' }}
              />
              <text x={point.x} y={point.y + 4} textAnchor="middle" fontSize="10.5" fontWeight="600" fill="var(--color-text)">
                {stage.label}
              </text>
            </g>
          )
        })}
      </svg>

      <div className="grid gap-3 sm:grid-cols-2">
        {STAGES.map((stage, index) => (
          <div key={stage.label} className="flex items-start gap-2.5 rounded-lg border border-border bg-surface p-3">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-primary-100 text-[11px] font-bold text-primary-700 dark:bg-primary-950 dark:text-primary-300">
              {index + 1}
            </span>
            <div>
              <div className="text-sm font-semibold text-text">{stage.label}</div>
              <div className="text-xs text-text-muted">{stage.detail}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
