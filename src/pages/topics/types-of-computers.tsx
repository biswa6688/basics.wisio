import { Building2, Gauge, Laptop, Server } from 'lucide-react'
import { Section } from '../../components/content/TopicLayout'
import { InfoCard } from '../../components/content/InfoCard'
import { Comparison } from '../../components/education/Comparison'
import { RealWorldExample } from '../../components/education/RealWorldExample'
import { Quiz } from '../../components/education/Quiz'
import { TrueFalse } from '../../components/education/TrueFalse'
import { KeyTakeaways } from '../../components/education/KeyTakeaways'
import { TopicPhoto } from '../../components/education/TopicPhoto'

export default function TypesOfComputers() {
  return (
    <>
      <Section title="How a computer represents data">
        <p className="mb-5 text-sm text-text-muted">
          Before sorting computers by size, there's a more basic split: how they represent the values they work
          with.
        </p>
        <Comparison
          sides={[
            {
              label: 'Analog',
              accent: '#65a30d',
              points: [
                'Represents data as a continuously varying physical quantity (pressure, voltage, temperature)',
                'Used for scientific and engineering measurement, not everyday computing',
                'Example: an old-style speedometer or a hospital blood-pressure monitor',
              ],
            },
            {
              label: 'Digital',
              accent: '#16a34a',
              points: [
                'Represents data as discrete binary values — the 0s and 1s covered in Number Systems',
                'What almost every computer around you actually is',
                'Example: laptops, phones, digital watches',
              ],
            },
            {
              label: 'Hybrid',
              accent: '#0d9488',
              points: [
                'Combines both — takes in a continuous analog signal, converts it, and processes it digitally',
                'Common in specialized scientific and medical equipment',
              ],
            },
          ]}
        />
      </Section>

      <Section title="Sorted by size and power">
        <p className="mb-5 text-sm text-text-muted">
          Nearly every digital computer you'll encounter falls somewhere on this scale, from room-sized to
          pocket-sized.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <InfoCard icon={<Server className="h-4 w-4" strokeWidth={1.75} />} title="Supercomputers" accent="#0d9488">
            The largest, fastest, most expensive computers in the world — built for tasks like weather
            forecasting, scientific simulation, and space research.
          </InfoCard>
          <InfoCard icon={<Building2 className="h-4 w-4" strokeWidth={1.75} />} title="Mainframes" accent="#16a34a">
            Extremely powerful and reliable, built to serve large organizations that process huge volumes of
            transactions at once — banks and airlines are classic examples.
          </InfoCard>
          <InfoCard icon={<Gauge className="h-4 w-4" strokeWidth={1.75} />} title="Minicomputers" accent="#65a30d">
            Mid-sized machines built to serve many users at once within a department — smaller and cheaper than
            a mainframe, but more capable than a single desktop.
          </InfoCard>
          <InfoCard icon={<Laptop className="h-4 w-4" strokeWidth={1.75} />} title="Microcomputers" accent="#0891b2">
            What you're almost certainly reading this on — desktops, laptops, and phones. The least powerful
            category per unit, but by far the most widely used.
          </InfoCard>
        </div>
        <div className="mt-5">
          <TopicPhoto
            src="/photos/datacenter-rack.jpg"
            alt="A server rack in a data center"
            caption="A server rack — the kind of hardware mainframes and supercomputers are built from at scale."
            author="Edmondo"
            authorUrl="https://commons.wikimedia.org/wiki/File:Datacenter_Rack.jpg"
            license="CC BY-SA 3.0"
            licenseUrl="https://creativecommons.org/licenses/by-sa/3.0/"
          />
        </div>
      </Section>

      <Section title="Where you'll find them">
        <RealWorldExample title="Same computer, different job everywhere">
          A microcomputer plans a family budget; a mainframe processes millions of bank transactions overnight;
          a supercomputer forecasts tomorrow's weather. Businesses, banks, hospitals, schools, and transport
          systems all lean on some point along this same size-and-power scale — just tuned to the size of the
          job.
        </RealWorldExample>
      </Section>

      <Section title="Quick check">
        <Quiz>
          <TrueFalse
            statement="A mainframe is generally more powerful than a supercomputer."
            isTrue={false}
            explanation="It's the other way around — supercomputers sit at the very top of the size-and-power scale, above mainframes."
          />
        </Quiz>
      </Section>

      <KeyTakeaways
        items={[
          'Analog computers use continuous physical signals; digital computers use discrete binary values.',
          'Hybrid computers combine both, converting an analog signal for digital processing.',
          'By size and power, computers range from supercomputers → mainframes → minicomputers → microcomputers.',
          'The same size-and-power scale shows up everywhere: business, banking, healthcare, and research all pick the tier that fits the job.',
        ]}
      />
    </>
  )
}
