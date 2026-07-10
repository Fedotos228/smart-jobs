import type { GlobalConfig } from 'payload'

export const CountriesSection: GlobalConfig = {
  slug: 'countries-section',
  fields: [
    {
      name: 'subtitle',
      type: 'text',
      localized: true,
    },
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
