import type { GlobalConfig } from 'payload'

export const FooterGlobal: GlobalConfig = {
  slug: 'footer',
  fields: [
    { name: 'tagline', type: 'text', localized: true },
    { name: 'contactsLabel', type: 'text', localized: true },
    { name: 'quickLinksLabel', type: 'text', localized: true },
    { name: 'homeLabel', type: 'text', localized: true },
    { name: 'howWorksLabel', type: 'text', localized: true },
    { name: 'contactLabel', type: 'text', localized: true },
    { name: 'legalLabel', type: 'text', localized: true },
    { name: 'privacyPolicyLabel', type: 'text', localized: true },
    { name: 'termsOfServiceLabel', type: 'text', localized: true },
    { name: 'licenseNumber', type: 'text' },
    { name: 'allRightsReserved', type: 'text', localized: true },
    { name: 'location', type: 'text' },
  ],
}
