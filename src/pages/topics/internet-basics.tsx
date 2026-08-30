import { FileText, Globe, MapPin } from 'lucide-react'
import { Section } from '../../components/content/TopicLayout'
import { InfoCard } from '../../components/content/InfoCard'
import { StepFlow } from '../../components/content/StepFlow'
import { RequestJourney } from '../../components/illustrations/RequestJourney'
import { AnatomyDiagram } from '../../components/education/AnatomyDiagram'
import { Timeline } from '../../components/education/Timeline'
import { Quiz } from '../../components/education/Quiz'
import { TrueFalse } from '../../components/education/TrueFalse'
import { KeyTakeaways } from '../../components/education/KeyTakeaways'

const urlParts = [
  { text: 'https://', label: 'Scheme', detail: 'The protocol used — here, HTTPS (secure HTTP).', color: '#16a34a' },
  { text: 'www.wisio', label: 'Subdomain + name', detail: "The site's registered domain name.", color: '#0891b2' },
  { text: '.example', label: 'Top-level domain', detail: 'The suffix that categorizes the domain.', color: '#0c6e31' },
  { text: '/topics', label: 'Path', detail: 'The specific resource being requested on the server.', color: '#d97706' },
]

const history = [
  { label: '1969 — ARPANET', detail: 'The first packet-switched network connects four university computers.' },
  { label: '1991 — World Wide Web', detail: 'Tim Berners-Lee publishes the first website, built on HTTP and HTML.' },
  { label: '2000s — Broadband', detail: 'Always-on, high-speed home internet replaces dial-up for most users.' },
  { label: '2010s — Mobile internet', detail: 'Smartphones make the internet the default way most people go online.' },
]

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
        <div className="rounded-xl border border-border bg-bg-subtle p-6">
          <RequestJourney />
        </div>
      </Section>

      <Section title="Step by step">
        <StepFlow steps={steps} accent="#0891b2" />
      </Section>

      <Section title="Key building blocks">
        <div className="grid gap-4 sm:grid-cols-3">
          <InfoCard icon={<Globe className="h-4 w-4" strokeWidth={1.75} />} title="Domain name" accent="#16a34a">
            A human-friendly name (like wisio.example) that stands in for a hard-to-remember IP address.
          </InfoCard>
          <InfoCard icon={<MapPin className="h-4 w-4" strokeWidth={1.75} />} title="DNS" accent="#0891b2">
            The internet's phonebook — translates domain names into the IP addresses computers actually use.
          </InfoCard>
          <InfoCard icon={<FileText className="h-4 w-4" strokeWidth={1.75} />} title="HTTP" accent="#0c6e31">
            The common language browsers and servers use to request and send back web content.
          </InfoCard>
        </div>
      </Section>

      <Section title="Anatomy of a URL">
        <p className="mb-5 text-sm text-text-muted">
          A web address is made of distinct parts, each with its own job:
        </p>
        <AnatomyDiagram parts={urlParts} />
      </Section>

      <Section title="A brief history">
        <Timeline events={history} accent="#0891b2" />
      </Section>

      <Section title="Quick check">
        <Quiz>
          <TrueFalse
            statement="DNS translates domain names into IP addresses."
            isTrue={true}
            explanation="Correct — DNS is the internet's phonebook, mapping human-friendly names to the addresses computers use."
          />
        </Quiz>
      </Section>

      <KeyTakeaways
        items={[
          'Loading a page involves a DNS lookup, a request, and a response before anything renders.',
          'A domain name is a human-friendly stand-in for a numeric IP address.',
          'HTTP is the shared language browsers and servers use to exchange web content.',
        ]}
      />
    </>
  )
}
