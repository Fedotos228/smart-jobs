import type { GlobalConfig } from 'payload'

export const EmployersSection: GlobalConfig = {
  slug: 'employers-section',
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
      name: 'headingSpan',
      type: 'text',
      localized: true,
    },
    {
      name: 'applyNow',
      type: 'text',
      localized: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'paragraph',
      type: 'textarea',
      localized: true,
    },
    {
      name: 'listItems',
      label: 'Bullet List',
      type: 'array',
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
          localized: true,
        },
      ],
    },
  ],
}
