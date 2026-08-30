import type { ComponentType } from 'react'

/**
 * Maps a topic slug to its page component. Populated incrementally —
 * one entry added per topic feature. Slugs not yet present fall back
 * to the "coming soon" placeholder in TopicPage.
 */
export const topicPages: Record<string, ComponentType> = {}
