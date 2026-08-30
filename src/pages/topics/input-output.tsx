import { Section } from '../../components/content/TopicLayout'
import { InfoCard } from '../../components/content/InfoCard'
import { IoFlow } from '../../components/illustrations/IoFlow'
import { DeviceGallery } from '../../components/illustrations/DeviceGallery'

export default function InputOutput() {
  return (
    <>
      <Section title="The Input → Process → Output model">
        <p className="mb-6 text-sm text-text-muted">
          Nearly everything a computer does follows this pattern: information comes in, the CPU processes it,
          and a result comes back out.
        </p>
        <div className="rounded-2xl border border-border bg-bg-subtle p-6">
          <IoFlow />
        </div>
      </Section>

      <Section title="Two directions, one goal: moving information">
        <div className="grid gap-4 sm:grid-cols-2">
          <InfoCard icon="📥" title="Input devices" accent="#16a34a">
            Translate human action (typing, clicking, speaking) or the physical world (light, sound) into
            signals the computer can process.
          </InfoCard>
          <InfoCard icon="📤" title="Output devices" accent="#0891b2">
            Translate the computer's internal results back into something humans can see, hear, or hold.
          </InfoCard>
        </div>
      </Section>

      <Section title="Common devices, grouped">
        <DeviceGallery />
      </Section>
    </>
  )
}
