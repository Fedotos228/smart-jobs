import { getHowWorksSection } from '@/libs/getSections'
import Section from '../ui/section'
import StepsCard from '../ui/steps-card'
import Container from '../utils/container'
import Grid from '../utils/grid'
import SectionHeading from '../utils/section-heading'

export default async function HowWorks({ locale = 'en' }: { locale?: string }) {
  const data = await getHowWorksSection(locale as 'en' | 'ro' | 'ru')
  const steps = data?.steps ?? []

  const subtitle = data?.subtitle
  const heading = data?.heading
  const headingSpan = data?.headingSpan

  return (
    <Section topSpace id='how-it-works'>
      <Container>
        <div data-animate='fade-up'>
          <SectionHeading className='mb-13' subtitle={subtitle} align='center' spanColor='black'>
            {heading} <br />
            <span>{headingSpan}</span>
          </SectionHeading>
        </div>

        <Grid cols={{ base: 1, sm: 2, lg: 4 }} data-animate='stagger'>
          {steps.map((item, i) => (
            <StepsCard key={i} card={item} index={i + 1} last={i === steps.length - 1} />
          ))}
        </Grid>
      </Container>
    </Section>
  )
}
