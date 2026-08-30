import { motion } from 'framer-motion'

const SLICES = [
  { app: 'Browser', color: '#16a34a' },
  { app: 'Music', color: '#0891b2' },
  { app: 'Editor', color: '#0c6e31' },
  { app: 'Browser', color: '#16a34a' },
  { app: 'Music', color: '#0891b2' },
  { app: 'Editor', color: '#0c6e31' },
]

export function ProcessTimeline() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex h-14 overflow-hidden rounded-xl border border-border">
        {SLICES.map((slice, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            className="flex flex-1 items-center justify-center text-xs font-semibold text-white"
            style={{ backgroundColor: slice.color, borderRight: index < SLICES.length - 1 ? '1px solid rgba(255,255,255,0.3)' : undefined }}
          >
            {slice.app}
          </motion.div>
        ))}
      </div>
      <div className="flex justify-between text-xs text-text-muted">
        <span>CPU time →</span>
        <span>Each app gets a tiny slice, over and over, so it all feels instant.</span>
      </div>
    </div>
  )
}
