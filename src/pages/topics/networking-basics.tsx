import { Fingerprint, PackageCheck, Route, Router } from 'lucide-react'
import { Section } from '../../components/content/TopicLayout'
import { InfoCard } from '../../components/content/InfoCard'
import { NetworkMap } from '../../components/illustrations/NetworkMap'

export default function NetworkingBasics() {
  return (
    <>
      <Section title="A network is just addressed connections">
        <p className="mb-6 text-sm text-text-muted">
          Every device on a network gets an address so data knows where to go. A router sits in the middle,
          forwarding traffic between devices and out to the wider internet.
        </p>
        <div className="rounded-xl border border-border bg-bg-subtle p-6">
          <NetworkMap />
        </div>
      </Section>

      <Section title="Two kinds of addresses">
        <div className="grid gap-4 sm:grid-cols-2">
          <InfoCard icon={<Router className="h-4 w-4" strokeWidth={1.75} />} title="IP address" accent="#16a34a">
            A logical address like 192.168.1.10 — assigned by the network, and can change. Like a street
            address for a device.
          </InfoCard>
          <InfoCard icon={<Fingerprint className="h-4 w-4" strokeWidth={1.75} />} title="MAC address" accent="#0891b2">
            A physical address burned into the network hardware itself — unique and permanent, like a serial
            number.
          </InfoCard>
        </div>
      </Section>

      <Section title="Data travels in packets">
        <div className="grid gap-4 sm:grid-cols-3">
          <InfoCard icon={<PackageCheck className="h-4 w-4" strokeWidth={1.75} />} title="Broken into packets" accent="#16a34a">
            Large messages are split into small packets before being sent, each with source/destination
            addresses attached.
          </InfoCard>
          <InfoCard icon={<Route className="h-4 w-4" strokeWidth={1.75} />} title="Routed independently" accent="#0c6e31">
            Packets can take different paths across the network and may arrive out of order.
          </InfoCard>
          <InfoCard icon={<PackageCheck className="h-4 w-4" strokeWidth={1.75} />} title="Reassembled on arrival" accent="#0891b2">
            The receiving device puts the packets back in the correct order to rebuild the original message.
          </InfoCard>
        </div>
      </Section>
    </>
  )
}
