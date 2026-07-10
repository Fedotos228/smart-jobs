import { getAreas } from '@/libs/getAreas'
import { getAreasSection } from '@/libs/getSections'
import AreasCard from '../ui/areas-card'
import Paragraph from '../ui/paragraph'
import Section from '../ui/section'
import Container from '../utils/container'
import SectionHeading from '../utils/section-heading'

export default async function Areas({ locale = 'en' }: { locale?: string }) {
  const [areas, section] = await Promise.all([
    getAreas(locale),
    getAreasSection(locale as 'en' | 'ro' | 'ru'),
  ])

  const heading = section?.heading
  const paragraph = section?.paragraph

  return (
    <Section topSpace>
      <Container>
        <div data-animate='fade-up'>
          <SectionHeading subtitle={''} align='center'>
            {heading}
          </SectionHeading>
          <Paragraph className='text-center mb-6'>
            {paragraph}
          </Paragraph>
        </div>

        <div data-animate='stagger' className='flex items-center justify-center gap-3 flex-wrap'>
          {areas.map((item) => (
            <AreasCard key={item.id} card={item} locale={locale} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
