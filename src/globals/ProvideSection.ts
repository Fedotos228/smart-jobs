import type { GlobalConfig } from 'payload'

const iconOptions = [
  { label: 'Note Pencil', value: 'note-pencil' },
  { label: 'Exam', value: 'exam' },
  { label: 'Users', value: 'users' },
  { label: 'Scroll', value: 'scroll' },
  { label: 'Airplane Tilt', value: 'airplane-tilt' },
  { label: 'Headset', value: 'headset' },
  { label: 'File Doc', value: 'fuile-doc' },
  { label: 'Check Circle', value: 'check-circle' },
  { label: 'Phone', value: 'phone' },
  { label: 'Outlook', value: 'outlook' },
  { label: 'Map Pin', value: 'map-pit' },
  { label: 'Arrow Right', value: 'arrow-right' },
  { label: 'Caret Right', value: 'caret-right' },
  { label: 'Caret Down', value: 'caret-down' },
]

export const ProvideSection: GlobalConfig = {
  slug: 'provide-section',
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
      name: 'zeroFees',
      type: 'text',
      localized: true,
    },
    {
      name: 'zeroFeesSuffix',
      type: 'text',
      localized: true,
    },
    {
      name: 'paragraph',
      type: 'textarea',
      localized: true,
    },
    {
      name: 'cards',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'icon',
          type: 'select',
          options: iconOptions,
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          localized: true,
        },
        {
          name: 'desc',
          type: 'textarea',
          required: true,
          localized: true,
        },
      ],
    },
  ],
}
