import Paragraph from '../ui/paragraph'
import ProvideCard from '../ui/provide-card'
import Section from '../ui/section'
import Container from '../utils/container'
import Grid from '../utils/grid'
import { IconName } from '../utils/icons'
import SectionHeading from '../utils/section-heading'

export interface IProvideCard {
  icon: IconName
  title: string,
  desc: string
}

const provideCards: IProvideCard[] = [
  {
    icon: 'fuile-doc',
    title: 'Legal & Documentation',
    desc: 'We handle all visas, work permits, and employment contracts, ensuring full legal compliance for your business.'
  },
  {
    icon: 'airplane-tilt',
    title: 'Relocation & Logistics',
    desc: 'We manage all transportation and housing logistics, ensuring your new team is safely settled near your facilities.'
  },
  {
    icon: 'headset',
    title: '24/7 Corporate Support',
    desc: 'We provide a dedicated account manager available around the clock to support your ongoing business operations.'
  }
]

export default function Provide() {
  return (
    <Section>
      <Container className='flex flex-col lg:flex-row items-center gap-10 2xl:gap-[100px]'>
        <div data-animate='fade-left' className='w-full lg:flex-1 2xl:flex-none 2xl:w-fit'>
          <SectionHeading subtitle='We provide' align='left' className='mb-3'>
            We Don't Just Find You Personnel. <br className='hidden md:block' />
            <span>We Support Your Business.</span>
          </SectionHeading>
          <Paragraph>
            Every company is assigned a dedicated account manager based in Moldova.<br className='hidden md:block' />
            From the moment your new workers arrive through every operational milestone,<br className='hidden md:block' />
            we are here. This is not just a recruitment service — it is a lifelong partnership.
          </Paragraph>
          <Grid cols={{ base: 1, sm: 2, lg: 3 }} gap={3} className='mt-9 2xl:[grid-template-columns:repeat(3,242px)]'>
            {provideCards.map((item, i) => (
              <ProvideCard key={i} card={item} />
            ))}
          </Grid>
        </div>
        <div data-animate='fade-right' className='w-full lg:flex-1 2xl:flex-none 2xl:w-[670px] 2xl:shrink-0'>
          <h4 className='text-center mb-4'>
            <span className='text-main'>Zero Fees</span> first 3 months
          </h4>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className='w-full shadow-[0px_4px_30px_0px_rgba(0,0,0,0.2)]'>
            <img src="https://novalines-cdn.stellarsolutions.md/smartjobs/gifs/provideVideo.gif" alt="Onboarding process preview" className='w-full aspect-video 2xl:w-[670px] 2xl:h-[417px] rounded-xl object-cover' />
          </div>
        </div>
      </Container>
    </Section>
  )
}