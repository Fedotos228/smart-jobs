import type { GlobalConfig } from 'payload'

export const ContactInfoSection: GlobalConfig = {
  slug: 'contact-info-section',
  fields: [
    {
      name: 'callUsLabel',
      label: 'Call Us Label',
      type: 'text',
      localized: true,
    },
    {
      name: 'emailLabel',
      label: 'Email Label',
      type: 'text',
      localized: true,
    },
    {
      name: 'officeLabel',
      label: 'Office Label',
      type: 'text',
      localized: true,
    },
    {
      name: 'phones',
      type: 'array',
      fields: [
        {
          name: 'number',
          type: 'text',
          required: true,
        },
        {
          name: 'href',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'email',
      type: 'email',
    },
    {
      name: 'address',
      type: 'text',
      localized: true,
    },
    {
      name: 'mapsEmbedUrl',
      label: 'Google Maps Embed URL',
      type: 'text',
    },
  ],
}
