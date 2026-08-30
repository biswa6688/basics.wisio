import { Binary, Boxes, Cpu, Globe2, History, LayoutGrid, Usb, Waypoints, type LucideIcon } from 'lucide-react'

export const topicIcons: Record<string, LucideIcon> = {
  'number-systems': Binary,
  'how-computers-work': Cpu,
  'input-output': Usb,
  'operating-systems': LayoutGrid,
  'networking-basics': Waypoints,
  'internet-basics': Globe2,
  'history-of-computers': History,
  'types-of-computers': Boxes,
}
