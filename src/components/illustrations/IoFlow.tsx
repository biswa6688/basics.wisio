import { motion } from 'framer-motion'

const NODES = [
  { x: 40, label: 'Input', sub: 'Keyboard, mouse…', color: '#16a34a' },
  { x: 220, label: 'Computer', sub: 'CPU processes it', color: '#0c6e31' },
  { x: 400, label: 'Output', sub: 'Screen, speakers…', color: '#0891b2' },
]

export function IoFlow() {
  return (
    <svg viewBox="0 0 480 140" className="w-full">
      {NODES.slice(0, -1).map((node, index) => (
        <g key={`arrow-${index}`}>
          <line x1={node.x + 70} y1="60" x2={NODES[index + 1].x + 10} y2="60" stroke="var(--color-border)" strokeWidth="2" />
          <motion.circle
            r="4"
            fill={node.color}
            initial={{ cx: node.x + 70, cy: 60 }}
            animate={{ cx: [node.x + 70, NODES[index + 1].x + 10] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'linear', delay: index * 0.5 }}
          />
        </g>
      ))}

      {NODES.map((node) => (
        <g key={node.label}>
          <rect x={node.x} y="30" width="80" height="60" rx="12" fill="var(--color-surface)" stroke={node.color} strokeWidth="2" />
          <text x={node.x + 40} y="55" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--color-text)">
            {node.label}
          </text>
          <text x={node.x + 40} y="72" textAnchor="middle" fontSize="8" fill="var(--color-text-muted)">
            {node.sub}
          </text>
        </g>
      ))}
    </svg>
  )
}
