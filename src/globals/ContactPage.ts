import type { GlobalConfig } from 'payload'

export const ContactPage: GlobalConfig = {
  slug: 'contact-page',
  fields: [
    {
      name: 'heading',
      label: 'Page heading',
      type: 'text',
      localized: true,
    },
    {
      name: 'formHeading',
      label: 'Form card heading',
      type: 'text',
      localized: true,
    },
    {
      name: 'nameLabel',
      label: 'Full Name label',
      type: 'text',
      localized: true,
    },
    {
      name: 'namePlaceholder',
      label: 'Full Name placeholder',
      type: 'text',
      localized: true,
    },
    {
      name: 'orgLabel',
      label: 'Organization label',
      type: 'text',
      localized: true,
    },
    {
      name: 'orgPlaceholder',
      label: 'Organization placeholder',
      type: 'text',
      localized: true,
    },
    {
      name: 'phoneLabel',
      label: 'Phone label',
      type: 'text',
      localized: true,
    },
    {
      name: 'phonePlaceholder',
      label: 'Phone placeholder',
      type: 'text',
      localized: true,
    },
    {
      name: 'emailLabel',
      label: 'Email label',
      type: 'text',
      localized: true,
    },
    {
      name: 'emailPlaceholder',
      label: 'Email placeholder',
      type: 'text',
      localized: true,
    },
    {
      name: 'messageLabel',
      label: 'Message label',
      type: 'text',
      localized: true,
    },
    {
      name: 'messagePlaceholder',
      label: 'Message placeholder',
      type: 'text',
      localized: true,
    },
    {
      name: 'submitButton',
      label: 'Submit button text',
      type: 'text',
      localized: true,
    },
  ],
}
