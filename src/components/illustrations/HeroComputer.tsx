import { motion } from 'framer-motion'

const bits = ['0', '1', '0', '1', '1', '0']

export function HeroComputer() {
  return (
    <svg viewBox="0 0 480 380" className="h-full w-full" role="img" aria-labelledby="hero-title">
      <title id="hero-title">Illustration of a computer with a glowing circuit board and binary data</title>
      <defs>
        <linearGradient id="screenGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0c6e31" />
          <stop offset="100%" stopColor="#052816" />
        </linearGradient>
        <linearGradient id="baseGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#16a34a" />
          <stop offset="100%" stopColor="#0c6e31" />
        </linearGradient>
      </defs>

      <ellipse cx="240" cy="345" rx="170" ry="16" fill="#16a34a" opacity="0.08" />

      <rect x="90" y="40" width="300" height="200" rx="16" fill="url(#screenGrad)" />
      <rect x="90" y="40" width="300" height="200" rx="16" fill="none" stroke="#34d17a" strokeOpacity="0.4" strokeWidth="2" />

      <g stroke="#6ee7a3" strokeWidth="1.5" opacity="0.55" fill="none">
        <path d="M120 70 h60 v25 h40" />
        <path d="M120 130 h30 v40 h100 v-25 h60" />
        <path d="M300 70 v50 h50" />
        <circle cx="180" cy="70" r="3" fill="#a7f3c6" stroke="none" />
        <circle cx="220" cy="170" r="3" fill="#a7f3c6" stroke="none" />
        <circle cx="360" cy="120" r="3" fill="#a7f3c6" stroke="none" />
      </g>

      <motion.rect
        x="205"
        y="105"
        width="70"
        height="70"
        rx="10"
        fill="#052816"
        stroke="#34d17a"
        strokeWidth="2"
        initial={{ opacity: 0.6 }}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <text x="240" y="148" textAnchor="middle" fontSize="20" fontWeight="700" fill="#a7f3c6" fontFamily="monospace">
        CPU
      </text>

      <rect x="70" y="240" width="340" height="20" rx="6" fill="url(#baseGrad)" />
      <rect x="150" y="260" width="180" height="14" rx="4" fill="#0a5629" />

      {bits.map((bit, index) => (
        <motion.text
          key={`${bit}-${index}`}
          x={110 + index * 55}
          y={310}
          fontFamily="monospace"
          fontSize="18"
          fontWeight="700"
          fill="#16a34a"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: [0, 1, 0], y: [-6, 6, -6] }}
          transition={{ duration: 3, repeat: Infinity, delay: index * 0.3, ease: 'easeInOut' }}
        >
          {bit}
        </motion.text>
      ))}
    </svg>
  )
}
