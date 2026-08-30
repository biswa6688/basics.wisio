import type { ComponentType } from 'react'
import NumberSystems from './number-systems'
import HowComputersWork from './how-computers-work'
import InputOutput from './input-output'
import OperatingSystems from './operating-systems'
import NetworkingBasics from './networking-basics'

/**
 * Maps a topic slug to its page component. Populated incrementally —
 * one entry added per topic feature. Slugs not yet present fall back
 * to the "coming soon" placeholder in TopicPage.
 */
export const topicPages: Record<string, ComponentType> = {
  'number-systems': NumberSystems,
  'how-computers-work': HowComputersWork,
  'input-output': InputOutput,
  'operating-systems': OperatingSystems,
  'networking-basics': NetworkingBasics,
}
