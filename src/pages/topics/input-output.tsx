import { LogIn, LogOut } from 'lucide-react'
import { Section } from '../../components/content/TopicLayout'
import { InfoCard } from '../../components/content/InfoCard'
import { IoFlow } from '../../components/illustrations/IoFlow'
import { DeviceGallery } from '../../components/illustrations/DeviceGallery'
import { DefinitionCard } from '../../components/education/DefinitionCard'
import { GlossaryTerm } from '../../components/education/GlossaryTerm'
import { RealWorldExample } from '../../components/education/RealWorldExample'
import { Quiz } from '../../components/education/Quiz'
import { TrueFalse } from '../../components/education/TrueFalse'
import { KeyTakeaways } from '../../components/education/KeyTakeaways'
import { TopicPhoto } from '../../components/education/TopicPhoto'

export default function InputOutput() {
  return (
    <>
      <Section title="The Input → Process → Output model">
        <p className="mb-6 text-sm text-text-muted">
          Nearly everything a computer does follows this pattern: information comes in, the CPU processes it,
          and a result comes back out.
        </p>
        <div className="rounded-xl border border-border bg-bg-subtle p-6">
          <IoFlow />
        </div>
        <div className="mt-5">
          <RealWorldExample title="Booking a seat, step by step">
            You fill in a name, date, and destination — that's the input. The system checks which seats are
            still free and matches your request against them — that's the process. A confirmation (or a "fully
            booked" message) comes back — that's the output. Swap "seats" for library books, hotel rooms, or
            food orders and the exact same three-step pattern still holds.
          </RealWorldExample>
        </div>
      </Section>

      <Section title="Two directions, one goal: moving information">
        <div className="grid gap-4 sm:grid-cols-2">
          <InfoCard icon={<LogIn className="h-4 w-4" strokeWidth={1.75} />} title="Input devices" accent="#16a34a">
            Translate human action (typing, clicking, speaking) or the physical world (light, sound) into a{' '}
            <GlossaryTerm term="signal" definition="A stream of electrical pulses a device uses to send information — the raw form input takes before software makes sense of it." /> the
            computer can process.
          </InfoCard>
          <InfoCard icon={<LogOut className="h-4 w-4" strokeWidth={1.75} />} title="Output devices" accent="#0891b2">
            Translate the computer's internal results back into something humans can see, hear, or hold.
          </InfoCard>
        </div>
      </Section>

      <Section title="Common devices, grouped">
        <DeviceGallery />
        <div className="mt-5">
          <TopicPhoto
            src="/photos/keyboard-mouse.jpg"
            alt="A computer keyboard with a mouse resting beside it"
            caption="The two most common input devices — still the fastest way to tell a computer exactly what you want."
            author="Jreph"
            authorUrl="https://commons.wikimedia.org/wiki/File:Keyboard_with_mouse.jpg"
            license="CC BY-SA 3.0"
            licenseUrl="https://creativecommons.org/licenses/by-sa/3.0/"
          />
        </div>
        <div className="mt-5">
          <DefinitionCard
            term="Peripheral"
            definition="Any input or output device connected to a computer that isn't part of its core processing hardware — a keyboard, mouse, monitor, or printer, for example."
          />
        </div>
      </Section>

      <Section title="Real world">
        <RealWorldExample>
          A touchscreen phone is both input and output at once: your finger tap (input) is read by the same
          panel that displays the app (output) — which is why it's grouped separately from single-direction
          devices.
        </RealWorldExample>
      </Section>

      <Section title="Quick check">
        <Quiz>
          <TrueFalse
            statement="A monitor is an example of an input device."
            isTrue={false}
            explanation="A monitor only displays information from the computer — that makes it an output device, not input."
          />
        </Quiz>
      </Section>

      <KeyTakeaways
        items={[
          'Input devices translate human/physical action into signals the computer can process.',
          'Output devices translate computed results back into something humans can perceive.',
          'Some devices, like touchscreens, do both at once.',
        ]}
      />
    </>
  )
}
