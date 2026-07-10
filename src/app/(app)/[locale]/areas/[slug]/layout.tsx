import AreasCard from '@/components/ui/areas-card'
import Section from '@/components/ui/section'
import Container from '@/components/utils/container'
import { getAreas } from '@/libs/getAreas'

export default async function Layout({ children, params }: LayoutProps<'/[locale]/areas/[slug]'>) {
  const { locale, slug } = await params
  const areas = await getAreas(locale)
  const currentArea = areas.find((item) => item.slug === slug)

  if (!currentArea) return null

  return (
    <main className='bg-light-bg'>
      <Container>
        <Section className="flex flex-col gap-12.5">
          <div data-animate='stagger' className='flex items-center justify-center gap-3 flex-wrap order-1 lg:-order-1'>
            {areas.map((item) => (
              <AreasCard key={item.id} card={item} active={item.slug === currentArea.slug} locale={locale} />
            ))}
          </div>

          {children}
        </Section>
      </Container>
    </main>
  )
}
