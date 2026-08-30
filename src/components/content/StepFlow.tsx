import { motion } from 'framer-motion'

export interface Step {
  label: string
  detail: string
}

export function StepFlow({ steps, accent = '#16a34a' }: { steps: Step[]; accent?: string }) {
  return (
    <div className="relative flex flex-col gap-0 sm:flex-row sm:items-start sm:gap-2">
      {steps.map((step, index) => (
        <motion.div
          key={step.label}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4, delay: index * 0.08 }}
          className="relative flex flex-1 gap-3 pb-8 sm:flex-col sm:gap-2 sm:pb-0"
        >
          <div className="flex flex-col items-center sm:w-full">
            <div
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
              style={{ backgroundColor: accent }}
            >
              {index + 1}
            </div>
            {index < steps.length - 1 && (
              <span
                className="mt-1 w-px flex-1 sm:mt-0 sm:h-px sm:w-full"
                style={{ backgroundColor: 'var(--color-border)' }}
                aria-hidden
              />
            )}
          </div>
          <div className="pt-1 sm:pt-0 sm:text-center">
            <div className="font-semibold text-text">{step.label}</div>
            <div className="mt-0.5 text-sm text-text-muted">{step.detail}</div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
