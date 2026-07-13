import ContactForm from '@/components/sections/contact-form'
import ContactInfo from '@/components/sections/contact-info'
import Section from '@/components/ui/section'
import Container from '@/components/utils/container'
import { getContactPage } from '@/libs/getSections'
import type { Metadata } from 'next'

const meta = {
  en: {
    title: 'Contact Us',
    description: 'Get in touch with SmartJobs. Our team is ready to help with your international recruitment needs.',
  },
  ro: {
    title: 'Contactează-ne',
    description: 'Contactează echipa SmartJobs. Suntem pregătiți să te ajutăm cu nevoile tale de recrutare internațională.',
  },
  ru: {
    title: 'Связаться с нами',
    description: 'Свяжитесь с командой SmartJobs. Мы готовы помочь с вашими потребностями в международном найме.',
  },
}

export async function generateMetadata({ params }: PageProps<'/[locale]/contact'>): Promise<Metadata> {
  const { locale } = await params
  const l = (locale as keyof typeof meta) in meta ? (locale as keyof typeof meta) : 'ro'
  const { title, description } = meta[l]

  return {
    title,
    description,
    alternates: {
      canonical: `https://smartjobs.md/${locale}/contact`,
      languages: {
        'en': 'https://smartjobs.md/en/contact',
        'ro': 'https://smartjobs.md/ro/contact',
        'ru': 'https://smartjobs.md/ru/contact',
        'x-default': 'https://smartjobs.md/ro/contact',
      },
    },
    openGraph: { title, description, url: `https://smartjobs.md/${locale}/contact` },
  }
}

export default async function page({ params }: PageProps<'/[locale]/contact'>) {
  const { locale } = await params
  const data = await getContactPage(locale as 'en' | 'ro' | 'ru')

  return (
    <main className='bg-light-bg'>
      <Section>
        <Container>
          <h1 className='text-foreground text-center mb-9'>
            {data?.heading ?? 'Contact Information'}
          </h1>

          <div className='grid grid-cols-1 gap-5 lg:grid-cols-2'>
            <ContactInfo locale={locale} />
            <ContactForm data={data} />
          </div>
        </Container>
      </Section>
    </main>
  )
}
