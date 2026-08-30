import { Cpu as CpuIcon, HardDrive, MemoryStick } from 'lucide-react'
import { Section } from '../../components/content/TopicLayout'
import { InfoCard } from '../../components/content/InfoCard'
import { CpuCycle } from '../../components/illustrations/CpuCycle'
import { MemoryHierarchy } from '../../components/illustrations/MemoryHierarchy'
import { DidYouKnow } from '../../components/education/DidYouKnow'
import { Comparison } from '../../components/education/Comparison'
import { KeyTakeaways } from '../../components/education/KeyTakeaways'
import { DefinitionCard } from '../../components/education/DefinitionCard'
import { GlossaryTerm } from '../../components/education/GlossaryTerm'
import { TopicPhoto } from '../../components/education/TopicPhoto'

export default function HowComputersWork() {
  return (
    <>
      <DefinitionCard
        term="Computer"
        definition="An electronic device that takes in input, follows a set of instructions to process it, and produces output — the same three-step pattern whether it's adding two numbers or rendering a video."
        tag="Core concept"
      />

      <Section title="The three core parts">
        <div className="grid gap-4 sm:grid-cols-3">
          <InfoCard icon={<CpuIcon className="h-4 w-4" strokeWidth={1.75} />} title="CPU" accent="#16a34a">
            The brain. Runs <GlossaryTerm term="instructions" definition="Tiny, exact commands a CPU can carry out, like 'add these two numbers.'" /> one
            step at a time, incredibly fast — billions per second.
          </InfoCard>
          <InfoCard icon={<MemoryStick className="h-4 w-4" strokeWidth={1.75} />} title="Memory (RAM)" accent="#0891b2">
            Short-term workspace. Holds whatever the CPU is actively using — cleared when power is off.
          </InfoCard>
          <InfoCard icon={<HardDrive className="h-4 w-4" strokeWidth={1.75} />} title="Storage" accent="#0c6e31">
            Long-term memory. Keeps files and programs even after the computer shuts down.
          </InfoCard>
        </div>
      </Section>

      <Section title="The fetch-decode-execute cycle">
        <p className="mb-6 text-sm text-text-muted">
          This four-step loop repeats for every single instruction a program runs — from opening an app to
          rendering this very page.
        </p>
        <CpuCycle />
        <div className="mt-5">
          <DidYouKnow>
            A modern CPU can execute several billion of these fetch-decode-execute cycles every second —
            that's why even complex programs feel instant.
          </DidYouKnow>
        </div>
      </Section>

      <Section title="Why some memory is faster than others">
        <p className="mb-6 text-sm text-text-muted">
          There's a trade-off between speed and size. The fastest memory sits closest to the CPU but can only
          hold a little; the largest storage is far cheaper per byte but much slower to reach. The{' '}
          <GlossaryTerm term="cache" definition="A small pool of very fast memory that keeps a copy of data the CPU is likely to need again soon." /> sits
          right in the middle of that trade-off.
        </p>
        <MemoryHierarchy />
        <div className="mt-5">
          <TopicPhoto
            src="/photos/cpu-macro.jpg"
            alt="Macro close-up photo of a computer CPU"
            caption="A real CPU — the chip where fetch, decode, execute, and store actually happen."
            author="Gormé"
            authorUrl="https://commons.wikimedia.org/wiki/File:GPU_macro.JPG"
            license="CC BY-SA 3.0"
            licenseUrl="https://creativecommons.org/licenses/by-sa/3.0/"
          />
        </div>
      </Section>

      <Section title="Hardware and software">
        <p className="mb-5 text-sm text-text-muted">
          Everything in a computer falls into one of two categories: the physical parts you can touch, and the
          instructions that tell those parts what to do.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <InfoCard icon={<CpuIcon className="h-4 w-4" strokeWidth={1.75} />} title="Hardware" accent="#16a34a">
            The physical components — CPU, memory, storage, screen, keyboard. If you can touch it, it's hardware.
          </InfoCard>
          <InfoCard icon={<HardDrive className="h-4 w-4" strokeWidth={1.75} />} title="Software" accent="#0891b2">
            The instructions hardware runs — from the operating system to the app you're using right now.
          </InfoCard>
        </div>
      </Section>

      <Section title="Why computers help — and where they fall short">
        <p className="mb-5 text-sm text-text-muted">
          A computer isn't just fast — it's fast, consistent, and tireless in ways people aren't. But that same
          rigidity is also its biggest weakness.
        </p>
        <Comparison
          sides={[
            {
              label: 'What computers are good at',
              accent: '#16a34a',
              points: [
                'Speed — billions of operations every second',
                'Accuracy — no fatigue-driven mistakes',
                'Consistency — the same input always gives the same output',
                'Tirelessly repeating the same task for hours',
              ],
            },
            {
              label: 'Where they fall short',
              accent: '#0c6e31',
              points: [
                "Can't improvise outside what they were explicitly told to do",
                'A situation nobody programmed for causes errors, not creativity',
                'No judgment — they follow instructions exactly, even bad ones',
              ],
            },
          ]}
        />
      </Section>

      <Section title="SSD vs HDD">
        <p className="mb-5 text-sm text-text-muted">
          Both are long-term storage, but they work very differently — which is why swapping an HDD for an
          SSD is one of the biggest speed upgrades an older computer can get.
        </p>
        <Comparison
          sides={[
            {
              label: 'HDD (Hard Disk Drive)',
              accent: '#0c6e31',
              points: [
                'Spinning magnetic disks read by a moving arm',
                'Cheaper per gigabyte',
                'Slower — mechanical parts take time to move',
                'More vulnerable to physical shock',
              ],
            },
            {
              label: 'SSD (Solid State Drive)',
              accent: '#16a34a',
              points: [
                'Flash memory chips, no moving parts',
                'More expensive per gigabyte',
                'Much faster read/write speeds',
                'More durable — nothing to physically break',
              ],
            },
          ]}
        />
      </Section>

      <KeyTakeaways
        items={[
          'The CPU, memory, and storage form the core loop every program runs on.',
          'Hardware is the physical machine; software is the instructions it runs.',
          'Fetch-decode-execute repeats billions of times per second.',
          'Computers win on speed, accuracy, and consistency — but can\'t improvise beyond their instructions.',
          'Faster memory is more expensive and holds less — hence the speed/size hierarchy.',
          'SSDs beat HDDs on speed and durability by having no moving parts.',
        ]}
      />
    </>
  )
}
