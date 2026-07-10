import type { GlobalConfig } from 'payload'

export const AreasSection: GlobalConfig = {
  slug: 'areas-section',
  fields: [
    {
      name: 'heading',
      type: 'text',
      localized: true,
    },
    {
      name: 'paragraph',
      type: 'text',
      localized: true,
    },
  ],
}
