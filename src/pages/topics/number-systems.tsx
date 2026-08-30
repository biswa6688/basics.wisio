import { Section } from '../../components/content/TopicLayout'
import { InfoCard } from '../../components/content/InfoCard'
import { StepFlow } from '../../components/content/StepFlow'
import { BitGrid } from '../../components/illustrations/BitGrid'
import { BaseCompare } from '../../components/illustrations/BaseCompare'

const steps = [
  { label: 'You type', detail: 'A key press sends an electrical signal into the machine.' },
  { label: 'It becomes bits', detail: 'Every signal is stored as a sequence of 0s and 1s.' },
  { label: 'Bits form a byte', detail: '8 bits grouped together can represent 256 distinct values.' },
  { label: 'You see meaning', detail: 'Software maps that pattern back to a letter, color, or number.' },
]

export default function NumberSystems() {
  return (
    <>
      <Section title="Why computers use binary">
        <div className="grid gap-4 sm:grid-cols-2">
          <InfoCard icon="⚡" title="It's a hardware fact" accent="#16a34a">
            A transistor is easiest to build as a reliable two-state switch — on or off. Trying to reliably
            detect ten voltage levels for decimal digits would make hardware far more error-prone.
          </InfoCard>
          <InfoCard icon="🔌" title="On / Off = 1 / 0" accent="#0891b2">
            Every bit is just the state of one switch. String enough switches together and you can represent
            any number, letter, image, or sound.
          </InfoCard>
        </div>
      </Section>

      <Section title="From a keystroke to a bit pattern">
        <StepFlow steps={steps} accent="#16a34a" />
      </Section>

      <Section title="Build a byte">
        <p className="mb-5 text-sm text-text-muted">
          A byte is 8 bits. Each position is worth double the one to its right — 128, 64, 32, 16, 8, 4, 2, 1.
          Add up the "on" positions to get the decimal value. Here's the byte for <strong className="text-text">202</strong>:
        </p>
        <div className="rounded-2xl border border-border bg-bg-subtle p-6">
          <BitGrid value={202} />
        </div>
      </Section>

      <Section title="Same value, three costumes">
        <p className="mb-5 text-sm text-text-muted">
          Binary, decimal, and hexadecimal are just different bases for writing the same number. Programmers
          use hex as shorthand for binary because each hex digit maps to exactly 4 bits.
        </p>
        <BaseCompare value={202} />
      </Section>
    </>
  )
}
