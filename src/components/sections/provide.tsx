import { getProvideSection } from '@/libs/getSections'
import Paragraph from '../ui/paragraph'
import ProvideCard from '../ui/provide-card'
import Section from '../ui/section'
import Container from '../utils/container'
import Grid from '../utils/grid'
import SectionHeading from '../utils/section-heading'

export default async function Provide({ locale = 'en' }: { locale?: string }) {
  const data = await getProvideSection(locale as 'en' | 'ro' | 'ru')
  const cards = data?.cards ?? []

  const subtitle = data?.subtitle
  const heading = data?.heading
  const headingSpan = data?.headingSpan
  const zeroFees = data?.zeroFees
  const zeroFeesSuffix = data?.zeroFeesSuffix

  return (
    <Section>
      <Container className='flex flex-col lg:flex-row items-center gap-10 2xl:gap-[100px]'>
        <div data-animate='fade-left' className='w-full lg:flex-1 2xl:flex-none 2xl:w-fit'>
          <SectionHeading subtitle={subtitle} align='left' className='mb-3'>
            {heading} <br className='hidden md:block' />
            <span>{headingSpan}</span>
          </SectionHeading>
          <Paragraph className="max-w-149.25">
            {data?.paragraph}
          </Paragraph>
          <Grid cols={{ base: 1, sm: 2, lg: 3 }} gap={3} className='mt-9 2xl:[grid-template-columns:repeat(3,242px)]'>
            {cards.map((item, i) => (
              <ProvideCard key={i} card={item} />
            ))}
          </Grid>
        </div>
        <div data-animate='fade-right' className='w-full lg:flex-1 2xl:flex-none 2xl:w-[670px] 2xl:shrink-0'>
          <h4 className='text-center mb-4'>
            <span className='text-main'>{zeroFees}</span> {zeroFeesSuffix}
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
