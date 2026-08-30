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
        <circle cx={CENTER} cy={CENTER} r={RADIUS} fill="none" stroke="var(--color-border)" strokeWidth="2" strokeDasharray="6 6" />
        <circle cx={CENTER} cy={CENTER} r="34" fill="#052816" stroke="#16a34a" strokeWidth="2" />
        <text x={CENTER} y={CENTER + 5} textAnchor="middle" fontSize="14" fontWeight="700" fill="#a7f3c6" fontFamily="monospace">
          CPU
        </text>

        {STAGES.map((stage, index) => {
          const point = pointOn(stage.angle)
          return (
            <g key={stage.label}>
              <motion.circle
                cx={point.x}
                cy={point.y}
                r="26"
                fill="#16a34a"
                initial={{ scale: 0.8, opacity: 0.7 }}
                animate={{ scale: [0.9, 1.05, 0.9] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.4, ease: 'easeInOut' }}
              />
              <text x={point.x} y={point.y + 4} textAnchor="middle" fontSize="11" fontWeight="700" fill="white">
                {stage.label}
              </text>
            </g>
          )
        })}
      </svg>

      <div className="grid gap-3 sm:grid-cols-2">
        {STAGES.map((stage, index) => (
          <div key={stage.label} className="flex items-start gap-2.5 rounded-xl border border-border bg-surface p-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500 text-xs font-bold text-white">
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
