import { motion } from 'framer-motion'

const DEVICES = [
  { x: 60, y: 40, label: 'Laptop', ip: '192.168.1.10' },
  { x: 60, y: 220, label: 'Phone', ip: '192.168.1.11' },
  { x: 420, y: 40, label: 'Printer', ip: '192.168.1.20' },
  { x: 420, y: 220, label: 'Smart TV', ip: '192.168.1.21' },
]

const ROUTER = { x: 240, y: 130 }

export function NetworkMap() {
  return (
    <svg viewBox="0 0 480 260" className="w-full">
      {DEVICES.map((device, index) => (
        <line
          key={`line-${index}`}
          x1={ROUTER.x}
          y1={ROUTER.y}
          x2={device.x + 30}
          y2={device.y + 20}
          stroke="var(--color-border)"
          strokeWidth="2"
        />
      ))}

      {DEVICES.map((device, index) => (
        <motion.circle
          key={`packet-${index}`}
          r="4"
          fill="#16a34a"
          initial={{ cx: ROUTER.x, cy: ROUTER.y }}
          animate={{ cx: [ROUTER.x, device.x + 30], cy: [ROUTER.y, device.y + 20] }}
          transition={{ duration: 1.8, repeat: Infinity, delay: index * 0.35, ease: 'easeInOut' }}
        />
      ))}

      <g>
        <rect x={ROUTER.x - 34} y={ROUTER.y - 24} width="68" height="48" rx="10" fill="#16a34a" />
        <text x={ROUTER.x} y={ROUTER.y - 2} textAnchor="middle" fontSize="11" fontWeight="700" fill="white">
          Router
        </text>
        <text x={ROUTER.x} y={ROUTER.y + 14} textAnchor="middle" fontSize="8" fill="white" opacity="0.85">
          gateway
        </text>
      </g>

      {DEVICES.map((device) => (
        <g key={device.label}>
          <rect x={device.x} y={device.y} width="60" height="40" rx="8" fill="var(--color-surface)" stroke="#0891b2" strokeWidth="2" />
          <text x={device.x + 30} y={device.y + 17} textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--color-text)">
            {device.label}
          </text>
          <text x={device.x + 30} y={device.y + 30} textAnchor="middle" fontSize="7" fill="var(--color-text-muted)" fontFamily="monospace">
            {device.ip}
          </text>
        </g>
      ))}
    </svg>
  )
}
