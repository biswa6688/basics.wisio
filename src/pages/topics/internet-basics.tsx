import { Section } from '../../components/content/TopicLayout'
import { InfoCard } from '../../components/content/InfoCard'
import { StepFlow } from '../../components/content/StepFlow'
import { RequestJourney } from '../../components/illustrations/RequestJourney'

const steps = [
  { label: 'You type a URL', detail: 'e.g. wisio.example and hit enter' },
  { label: 'DNS lookup', detail: 'The domain name is translated into a server IP address' },
  { label: 'Request sent', detail: 'Your browser asks that server for the page' },
  { label: 'Page rendered', detail: 'HTML, CSS, and JS arrive and your browser draws the page' },
]

export default function InternetBasics() {
  return (
    <>
      <Section title="From a click to a loaded page">
        <p className="mb-6 text-sm text-text-muted">
          The internet is a global network of networks. Loading a single page involves several quick
          round-trips before anything appears on screen.
        </p>
        <div className="rounded-2xl border border-border bg-bg-subtle p-6">
          <RequestJourney />
        </div>
      </Section>

      <Section title="Step by step">
        <StepFlow steps={steps} accent="#0891b2" />
      </Section>

      <Section title="Key building blocks">
        <div className="grid gap-4 sm:grid-cols-3">
          <InfoCard icon="🌐" title="Domain name" accent="#16a34a">
            A human-friendly name (like wisio.example) that stands in for a hard-to-remember IP address.
          </InfoCard>
          <InfoCard icon="🗺️" title="DNS" accent="#0891b2">
            The internet's phonebook — translates domain names into the IP addresses computers actually use.
          </InfoCard>
          <InfoCard icon="📄" title="HTTP" accent="#0c6e31">
            The common language browsers and servers use to request and send back web content.
          </InfoCard>
        </div>
      </Section>
    </>
  )
}
