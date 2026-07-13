import Areas from '@/components/sections/areas'
import Countries from '@/components/sections/countries'
import Employers from '@/components/sections/employers'
import Hero from '@/components/sections/hero'
import HowWorks from '@/components/sections/how-works'
import Provide from '@/components/sections/provide'
import type { Metadata } from 'next'

const meta = {
  en: {
    title: 'International Recruitment Agency',
    description: 'Premium international recruitment and HR consulting services. Connecting global talent with Moldova industry since 2015.',
  },
  ro: {
    title: 'Agenție de Recrutare Internațională',
    description: 'Servicii premium de recrutare internațională și consultanță HR. Conectăm talente globale cu industria din Moldova din 2015.',
  },
  ru: {
    title: 'Международное Рекрутинговое Агентство',
    description: 'Премиальные услуги международного рекрутинга и HR-консалтинга. Связываем глобальные таланты с молдавской индустрией с 2015 года.',
  },
}

export async function generateMetadata({ params }: PageProps<'/[locale]'>): Promise<Metadata> {
  const { locale } = await params
  const l = (locale as keyof typeof meta) in meta ? (locale as keyof typeof meta) : 'ro'
  const { title, description } = meta[l]

  return {
    title,
    description,
    alternates: {
      canonical: `https://smartjobs.md/${locale}`,
      languages: {
        'en': 'https://smartjobs.md/en',
        'ro': 'https://smartjobs.md/ro',
        'ru': 'https://smartjobs.md/ru',
        'x-default': 'https://smartjobs.md/ro',
      },
    },
    openGraph: { title, description, url: `https://smartjobs.md/${locale}` },
  }
}

export default async function Home({ params }: PageProps<'/[locale]'>) {
  const { locale } = await params

  return (
    <main>
      <Hero locale={locale} />
      <HowWorks locale={locale} />
      <Provide locale={locale} />
      <Countries locale={locale} />
      <Areas locale={locale} />
      <Employers locale={locale} />
    </main>
  )
}
