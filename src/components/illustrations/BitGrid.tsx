import { motion } from 'framer-motion'

const PLACE_VALUES = [128, 64, 32, 16, 8, 4, 2, 1]

export function BitGrid({ value }: { value: number }) {
  const bits = PLACE_VALUES.map((place) => (value & place ? 1 : 0))

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex gap-1.5 sm:gap-2">
        {bits.map((bit, index) => (
          <div key={index} className="flex flex-col items-center gap-1.5">
            <span className="text-[10px] font-medium text-text-muted">{PLACE_VALUES[index]}</span>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className={`flex h-10 w-10 items-center justify-center rounded-lg text-lg font-bold sm:h-12 sm:w-12 ${
                bit
                  ? 'bg-primary-500 text-white shadow-md shadow-primary-500/30'
                  : 'bg-bg-subtle text-text-muted border border-border'
              }`}
            >
              {bit}
            </motion.div>
          </div>
        ))}
      </div>
      <div className="text-sm text-text-muted">
        <span className="font-mono font-semibold text-text">{bits.join('')}</span>
        <span className="mx-2">=</span>
        <span className="font-mono font-semibold text-primary-600 dark:text-primary-400">{value}</span>
        <span className="ml-1">in decimal</span>
      </div>
    </div>
  )
}
