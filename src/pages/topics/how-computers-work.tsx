import { Cpu as CpuIcon, HardDrive, MemoryStick } from 'lucide-react'
import { Section } from '../../components/content/TopicLayout'
import { InfoCard } from '../../components/content/InfoCard'
import { CpuCycle } from '../../components/illustrations/CpuCycle'
import { MemoryHierarchy } from '../../components/illustrations/MemoryHierarchy'

export default function HowComputersWork() {
  return (
    <>
      <Section title="The three core parts">
        <div className="grid gap-4 sm:grid-cols-3">
          <InfoCard icon={<CpuIcon className="h-4 w-4" strokeWidth={1.75} />} title="CPU" accent="#16a34a">
            The brain. Runs instructions one step at a time, incredibly fast — billions per second.
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
      </Section>

      <Section title="Why some memory is faster than others">
        <p className="mb-6 text-sm text-text-muted">
          There's a trade-off between speed and size. The fastest memory sits closest to the CPU but can only
          hold a little; the largest storage is far cheaper per byte but much slower to reach.
        </p>
        <MemoryHierarchy />
      </Section>
    </>
  )
}
