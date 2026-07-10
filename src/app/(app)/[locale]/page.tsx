import Areas from '@/components/sections/areas'
import Countries from '@/components/sections/countries'
import Employers from '@/components/sections/employers'
import Hero from '@/components/sections/hero'
import HowWorks from '@/components/sections/how-works'
import Provide from '@/components/sections/provide'

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
