import type { GlobalConfig } from 'payload'

export const HeroSection: GlobalConfig = {
  slug: 'hero-section',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
      admin: { description: 'First line, e.g. "Connecting global talent"' },
    },
    {
      name: 'titleHighlight',
      type: 'text',
      localized: true,
      admin: { description: 'Second line shown in orange, e.g. "with Moldavian industry."' },
    },
    {
      name: 'subtitle',
      type: 'text',
      localized: true,
    },
    {
      name: 'applyNow',
      label: 'Apply Now button',
      type: 'text',
      localized: true,
    },
    {
      name: 'seeHowItWorks',
      label: 'See How It Works button',
      type: 'text',
      localized: true,
    },
    {
      name: 'badge',
      label: 'Badge text',
      type: 'text',
      localized: true,
    },
  ],
}
