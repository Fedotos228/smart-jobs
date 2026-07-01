import { areas } from '@/libs/areas.constans'
import AreasCard from '../ui/areas-card'
import Paragraph from '../ui/paragraph'
import Section from '../ui/section'
import Container from '../utils/container'
import SectionHeading from '../utils/section-heading'


export default function Areas() {
  return (
    <Section topSpace>
      <Container>
        <div data-animate='fade-up'>
          <SectionHeading subtitle={''} align='center'>
            Areas covered
          </SectionHeading>
          <Paragraph className='text-center mb-6'>
            You can click on the cards to see more details.
          </Paragraph>
        </div>

        <div data-animate='stagger' className='flex items-center justify-center gap-3 flex-wrap'>
          {areas.map((item, i) => (
            <AreasCard key={i} card={item} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
