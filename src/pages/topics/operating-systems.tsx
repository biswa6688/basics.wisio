import { Section } from '../../components/content/TopicLayout'
import { InfoCard } from '../../components/content/InfoCard'
import { OsLayers } from '../../components/illustrations/OsLayers'
import { ProcessTimeline } from '../../components/illustrations/ProcessTimeline'

export default function OperatingSystems() {
  return (
    <>
      <Section title="The layer between apps and hardware">
        <p className="mb-6 text-sm text-text-muted">
          An app never talks to hardware directly — it asks the operating system, which decides how to share
          the machine's limited resources safely.
        </p>
        <OsLayers />
      </Section>

      <Section title="What the OS actually manages">
        <div className="grid gap-4 sm:grid-cols-3">
          <InfoCard icon="🧵" title="Processes" accent="#16a34a">
            Every running app is a process. The OS decides which one gets the CPU next, and for how long.
          </InfoCard>
          <InfoCard icon="🗂️" title="Files" accent="#0891b2">
            Organizes storage into a filesystem so apps can read/write data without knowing the physical
            layout of the disk.
          </InfoCard>
          <InfoCard icon="🚦" title="Memory" accent="#0c6e31">
            Gives each process its own private slice of RAM, so one app can't accidentally read or corrupt
            another's data.
          </InfoCard>
        </div>
      </Section>

      <Section title="How multitasking feels instant">
        <p className="mb-6 text-sm text-text-muted">
          A single CPU core can only run one instruction at a time. The OS switches between processes so
          fast — milliseconds — that it feels like everything runs simultaneously.
        </p>
        <ProcessTimeline />
      </Section>
    </>
  )
}
