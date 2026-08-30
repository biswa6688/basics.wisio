export interface Topic {
  slug: string
  title: string
  tagline: string
  description: string
  accent: string
}

export const topics: Topic[] = [
  {
    slug: 'number-systems',
    title: 'Number Systems',
    tagline: 'Binary, decimal, hex — one idea, four costumes',
    description:
      'See how computers count using only 0 and 1, and how binary, decimal, and hexadecimal are just different lenses on the same value.',
    accent: '#16a34a',
  },
  {
    slug: 'how-computers-work',
    title: 'How a Computer Works',
    tagline: 'CPU, memory, and storage in one loop',
    description:
      'Follow a single instruction as it travels from storage to memory to the CPU, and watch the fetch-decode-execute cycle come alive.',
    accent: '#0f8a3d',
  },
  {
    slug: 'input-output',
    title: 'Input & Output Devices',
    tagline: 'How the world gets in and out of a machine',
    description:
      'Explore the devices that carry information into a computer and the ones that bring results back out to us.',
    accent: '#0891b2',
  },
  {
    slug: 'operating-systems',
    title: 'Operating Systems',
    tagline: 'The manager behind every running app',
    description:
      'Understand how an operating system juggles processes, memory, and files so every app thinks it owns the machine.',
    accent: '#0c6e31',
  },
  {
    slug: 'networking-basics',
    title: 'Networking Basics',
    tagline: 'How machines find and talk to each other',
    description:
      'Trace how devices are addressed, connected, and how data hops across a network to reach the right destination.',
    accent: '#22d3ee',
  },
  {
    slug: 'internet-basics',
    title: 'Internet Basics',
    tagline: 'From a click to a loaded page',
    description:
      'Walk through what really happens between typing a web address and seeing a page appear on your screen.',
    accent: '#0891b2',
  },
]

export function getTopicBySlug(slug: string): Topic | undefined {
  return topics.find((topic) => topic.slug === slug)
}
