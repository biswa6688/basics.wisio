import { Zap, Cable } from 'lucide-react'
import { Section } from '../../components/content/TopicLayout'
import { InfoCard } from '../../components/content/InfoCard'
import { StepFlow } from '../../components/content/StepFlow'
import { BitGrid } from '../../components/illustrations/BitGrid'
import { BaseCompare } from '../../components/illustrations/BaseCompare'
import { GlossaryTerm } from '../../components/education/GlossaryTerm'
import { KeyTakeaways } from '../../components/education/KeyTakeaways'
import { Quiz } from '../../components/education/Quiz'
import { MultipleChoice } from '../../components/education/MultipleChoice'
import { TopicPhoto } from '../../components/education/TopicPhoto'

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
          <InfoCard icon={<Zap className="h-4 w-4" strokeWidth={1.75} />} title="It's a hardware fact" accent="#16a34a">
            A transistor is easiest to build as a reliable two-state switch — on or off. Trying to reliably
            detect ten voltage levels for decimal digits would make hardware far more error-prone.
          </InfoCard>
          <InfoCard icon={<Cable className="h-4 w-4" strokeWidth={1.75} />} title="On / Off = 1 / 0" accent="#0891b2">
            Every <GlossaryTerm term="bit" definition="The smallest unit of data a computer stores: a single 0 or 1." /> is
            just the state of one switch. String enough switches together and you can represent any number,
            letter, image, or sound.
          </InfoCard>
        </div>
      </Section>

      <TopicPhoto
        src="/photos/binary-code.jpg"
        alt="Rows of glowing binary digits, 0s and 1s"
        caption="Every value a computer stores eventually comes down to patterns like this."
        author="Graph+sas"
        authorUrl="https://commons.wikimedia.org/wiki/File:Binary-code.png"
        license="CC BY-SA 4.0"
        licenseUrl="https://creativecommons.org/licenses/by-sa/4.0/"
      />

      <Section title="From a keystroke to a bit pattern">
        <StepFlow steps={steps} accent="#16a34a" />
      </Section>

      <Section title="Build a byte">
        <p className="mb-5 text-sm text-text-muted">
          A <GlossaryTerm term="byte" definition="A group of 8 bits, the smallest unit of memory a computer typically addresses." /> is
          8 bits. Each position is worth double the one to its right — 128, 64, 32, 16, 8, 4, 2, 1. Add up the
          "on" positions to get the decimal value. Here's the byte for <strong className="text-text">202</strong>:
        </p>
        <div className="rounded-xl border border-border bg-bg-subtle p-6">
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

      <Section title="Quick check">
        <Quiz>
          <MultipleChoice
            question="How many distinct values can one byte (8 bits) represent?"
            options={['8', '16', '256', '1024']}
            correctIndex={2}
            explanation="Each bit doubles the possibilities: 2^8 = 256 distinct values, from 0 to 255."
          />
        </Quiz>
      </Section>

      <KeyTakeaways
        items={[
          'Computers use binary because a transistor is a reliable two-state (on/off) switch.',
          'A byte is 8 bits and can represent 256 distinct values (0–255).',
          'Binary, decimal, and hexadecimal are different bases for writing the same number.',
        ]}
      />
    </>
  )
}
