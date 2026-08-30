import type { ReactNode } from 'react'
import { Cpu, Landmark } from 'lucide-react'
import { Section } from '../../components/content/TopicLayout'
import { InfoCard } from '../../components/content/InfoCard'
import { Timeline } from '../../components/education/Timeline'
import { DidYouKnow } from '../../components/education/DidYouKnow'
import { Quiz } from '../../components/education/Quiz'
import { MultipleChoice } from '../../components/education/MultipleChoice'
import { KeyTakeaways } from '../../components/education/KeyTakeaways'
import { GlossaryTerm } from '../../components/education/GlossaryTerm'
import { TopicPhoto } from '../../components/education/TopicPhoto'

const earlyMachines = [
  { label: 'The abacus', detail: 'Beads sliding along rods, used for thousands of years to track numbers by hand — the earliest known calculating tool.' },
  { label: "Pascal's calculator (1642)", detail: 'Blaise Pascal builds a mechanical device that can add and subtract on its own — one of the first true calculating machines.' },
  { label: "Leibniz's stepped reckoner (1670s–1694)", detail: 'Gottfried Leibniz extends the idea to handle multiplication and division too, using a stepped-drum mechanism.' },
  { label: 'The Analytical Engine (1830s)', detail: "Charles Babbage designs a machine that could follow a changeable set of instructions — the conceptual ancestor of programmable computers, earning him the nickname \"father of the computer.\"" },
]

const generations: { label: string; detail: ReactNode }[] = [
  { label: '1st generation — vacuum tubes', detail: 'Room-sized machines built from thousands of fragile glass tubes; slow to build, hot, and failure-prone.' },
  {
    label: '2nd generation — transistors',
    detail: (
      <>
        <GlossaryTerm term="Transistors" definition="Tiny electronic switches that replaced vacuum tubes — smaller, faster, and far more reliable." /> replace
        vacuum tubes: smaller, faster, cheaper, and far more reliable.
      </>
    ),
  },
  { label: '3rd generation — integrated circuits', detail: 'Many transistors are etched onto a single silicon chip, shrinking computers dramatically.' },
  {
    label: '4th generation — microprocessors',
    detail: (
      <>
        An entire{' '}
        <GlossaryTerm term="microprocessor" definition="A complete CPU built onto a single chip — the innovation that made personal computers possible." /> fits
        on one chip, making personal computers possible for the first time.
      </>
    ),
  },
  { label: '5th generation — smart, connected systems', detail: 'Today\'s software runs on that same hardware lineage but adds networking and AI, making devices more autonomous and adaptive.' },
]

export default function HistoryOfComputers() {
  return (
    <>
      <Section title="Early calculating machines">
        <p className="mb-6 text-sm text-text-muted">
          Long before electricity, people built physical tools to make counting and arithmetic faster and more
          reliable than doing it in their heads.
        </p>
        <Timeline events={earlyMachines} accent="#0d9488" />
        <div className="mt-5">
          <TopicPhoto
            src="/photos/abacus.jpg"
            alt="A wooden abacus with beads on rods"
            caption="An abacus — beads on rods doing the same basic job as a modern calculator, just by hand."
            author="Pearson Scott Foresman"
            authorUrl="https://commons.wikimedia.org/wiki/File:Abacus_(PSF).jpg"
            license="Public Domain"
            licenseUrl="https://creativecommons.org/publicdomain/mark/1.0/"
          />
        </div>
      </Section>

      <Section title="The five generations of computers">
        <p className="mb-6 text-sm text-text-muted">
          Once electronics entered the picture, computers evolved through distinct eras — each one defined by
          the core technology used to build them.
        </p>
        <Timeline events={generations} accent="#0d9488" />
        <div className="mt-5">
          <DidYouKnow>
            Early first-generation computers like ENIAC used over 17,000{' '}
            <GlossaryTerm term="vacuum tubes" definition="Fragile glass-tube components that switched electrical signals before transistors existed." /> and
            filled an entire room — a single modern smartphone has vastly more computing power than that room
            ever did.
          </DidYouKnow>
        </div>
        <div className="mt-5">
          <TopicPhoto
            src="/photos/eniac.jpg"
            alt="The ENIAC computer, a room full of large electronic cabinets and control panels"
            caption="ENIAC (1946) — one of the first electronic computers, filling an entire room."
            author="U.S. Army"
            authorUrl="https://commons.wikimedia.org/wiki/File:Classic_shot_of_the_ENIAC.jpg"
            license="Public Domain"
            licenseUrl="https://creativecommons.org/publicdomain/mark/1.0/"
          />
        </div>
      </Section>

      <Section title="Why the timeline matters">
        <div className="grid gap-4 sm:grid-cols-2">
          <InfoCard icon={<Landmark className="h-4 w-4" strokeWidth={1.75} />} title="Ideas came before electronics" accent="#0d9488">
            The core idea behind a computer — store instructions, follow them automatically — was designed on
            paper by Babbage a century before the electronics existed to build it well.
          </InfoCard>
          <InfoCard icon={<Cpu className="h-4 w-4" strokeWidth={1.75} />} title="Smaller has always meant better" accent="#16a34a">
            Every generation shrank the core technology — tubes to transistors to chips — and each shrink made
            computers faster, cheaper, and more reliable at the same time.
          </InfoCard>
        </div>
      </Section>

      <Section title="Quick check">
        <Quiz>
          <MultipleChoice
            question="Which invention is considered the conceptual ancestor of the modern programmable computer?"
            options={['The abacus', "Pascal's calculator", 'The Analytical Engine', 'The transistor']}
            correctIndex={2}
            explanation="Babbage's Analytical Engine (1830s) could be given a changeable set of instructions — the key idea that separates a programmable computer from a fixed calculator."
          />
        </Quiz>
      </Section>

      <KeyTakeaways
        items={[
          'Mechanical calculating machines existed centuries before electronic computers.',
          "Babbage's Analytical Engine introduced the idea of a programmable machine.",
          'Each of the five computer generations is defined by a core technology: tubes, transistors, integrated circuits, microprocessors, and today\'s AI-driven systems.',
          'Every generation got smaller, faster, cheaper, and more reliable than the one before it.',
        ]}
      />
    </>
  )
}
