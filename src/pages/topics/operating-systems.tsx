import { FolderTree, GitBranch, MemoryStick } from 'lucide-react'
import { Section } from '../../components/content/TopicLayout'
import { InfoCard } from '../../components/content/InfoCard'
import { OsLayers } from '../../components/illustrations/OsLayers'
import { ProcessTimeline } from '../../components/illustrations/ProcessTimeline'
import { ImportantNote } from '../../components/education/ImportantNote'
import { FlashCard } from '../../components/education/FlashCard'
import { KeyTakeaways } from '../../components/education/KeyTakeaways'
import { GlossaryTerm } from '../../components/education/GlossaryTerm'
import { TopicPhoto } from '../../components/education/TopicPhoto'

export default function OperatingSystems() {
  return (
    <>
      <Section title="The layer between apps and hardware">
        <p className="mb-6 text-sm text-text-muted">
          An app never talks to hardware directly — it asks the operating system, which decides how to share
          the machine's limited resources safely.
        </p>
        <OsLayers />
        <div className="mt-5">
          <ImportantNote title="The kernel">
            The kernel is the core of the operating system — the part with direct access to hardware. Everything
            else, including the rest of the OS, runs on top of it.
          </ImportantNote>
        </div>
      </Section>

      <Section title="What the OS actually manages">
        <div className="grid gap-4 sm:grid-cols-3">
          <InfoCard icon={<GitBranch className="h-4 w-4" strokeWidth={1.75} />} title="Processes" accent="#16a34a">
            Every running app is a process. The OS decides which one gets the CPU next, and for how long.
          </InfoCard>
          <InfoCard icon={<FolderTree className="h-4 w-4" strokeWidth={1.75} />} title="Files" accent="#0891b2">
            Organizes storage into a filesystem so apps can read/write data without knowing the physical
            layout of the disk.
          </InfoCard>
          <InfoCard icon={<MemoryStick className="h-4 w-4" strokeWidth={1.75} />} title="Memory" accent="#0c6e31">
            Gives each process its own private slice of RAM, so one app can't accidentally read or corrupt
            another's data.
          </InfoCard>
        </div>
      </Section>

      <Section title="How multitasking feels instant">
        <p className="mb-6 text-sm text-text-muted">
          A single CPU core can only run one instruction at a time. The OS performs a{' '}
          <GlossaryTerm term="context switch" definition="Pausing one process, saving exactly where it left off, and loading another so it can run next." /> so
          fast — milliseconds — that it feels like everything runs simultaneously.
        </p>
        <ProcessTimeline />
        <div className="mt-5">
          <TopicPhoto
            src="/photos/terminal.jpg"
            alt="A Linux command-line terminal showing text output from several commands"
            caption="A terminal — one of the most direct ways to talk to an operating system."
            author="The GNOME Project"
            authorUrl="https://commons.wikimedia.org/wiki/File:Linux_command-line._Bash._GNOME_Terminal._screenshot.png"
            license="GPL-2.0+"
            licenseUrl="https://www.gnu.org/licenses/old-licenses/gpl-2.0.html"
          />
        </div>
      </Section>

      <Section title="Test yourself">
        <p className="mb-4 text-sm text-text-muted">Click a card to reveal the definition.</p>
        <div className="grid gap-4 sm:grid-cols-3">
          <FlashCard front="Process" back="A running instance of a program, with its own memory space." />
          <FlashCard front="Thread" back="A single sequence of execution within a process; a process can have many." />
          <FlashCard front="Kernel" back="The core of the OS with direct hardware access." />
        </div>
      </Section>

      <KeyTakeaways
        items={[
          'Apps never touch hardware directly — the OS mediates every request.',
          'The OS manages processes, memory, and files so apps stay isolated and safe.',
          'Fast context-switching between processes is what makes multitasking feel instant.',
        ]}
      />
    </>
  )
}
