import Section from '../ui/section'
import StepsCard from '../ui/steps-card'
import Container from '../utils/container'
import Grid from '../utils/grid'
import { IconName } from '../utils/icons'
import SectionHeading from '../utils/section-heading'

export interface IStepsCard {
  icon: IconName,
  title: string,
  description: string
}

const steps: IStepsCard[] = [
  {
    icon: 'note-pencil',
    title: 'Needs Alignment',
    description: 'We sign the collaboration agreement and deeply analyze your ideal candidate profile, mapping out the precise skills and competencies required for your business success.'
  },
  {
    icon: 'exam',
    title: 'Sourcing & Evaluation',
    description: 'Our team identifies and assesses potential candidates using rigorous, well-defined practical tests. We focus on delivering specialized human resources to maximize company potential.'
  },
  {
    icon: 'users',
    title: 'Interview & Selection',
    description: 'Following our pre-selection process, we organize targeted interviews for you to choose the perfect fit. If requested, we can arrange practical testing directly in their home country.'
  },
  {
    icon: 'scroll',
    title: 'Legal & Onboarding',
    description: 'Once you select your team, you simply provide the basic paperwork. We fully manage the legal documentation process to ensure a smooth and compliant entry into Moldova.'
  }
]

export default function HowWorks() {
  return (
    <Section topSpace id='how-it-works'>
      <Container>
        <div data-animate='fade-up'>
          <SectionHeading className='mb-13' subtitle='how it works' align='center' spanColor='black'>
            How We Secure Top Talent <br />
            <span>for Your Business</span>
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