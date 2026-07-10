import { getEmployersSection } from '@/libs/getSections'
import Image from 'next/image'
import Button from '../ui/button'
import Paragraph from '../ui/paragraph'
import Section from '../ui/section'
import Container from '../utils/container'
import { Icon } from '../utils/icons'
import SectionHeading from '../utils/section-heading'

export default async function Employers({ locale = 'en' }: { locale?: string }) {
  const data = await getEmployersSection(locale as 'en' | 'ro' | 'ru')
  const list = data?.listItems?.map((i) => i.text) ?? []
  const imgSrc = data?.image?.url ?? '/workers.png'

  const subtitle = data?.subtitle
  const heading = data?.heading
  const headingSpan = data?.headingSpan
  const applyNow = data?.applyNow

  return (
    <Section>
      <Container>
        <div className='flex flex-col lg:grid lg:grid-cols-[1fr_1fr] xl:grid-cols-[600px_1fr] gap-10 lg:gap-13'>
          <div data-animate='fade-left' className='relative w-full h-64 sm:h-80 lg:h-93.5'>
            <div className='absolute inset-0 translate-y-2.5 -translate-x-2.5 bg-main w-full rounded-xl -z-10' />
            <Image
              src={imgSrc}
              alt='Workers with apply now button'
              width={600}
              height={374}
              className='w-full rounded-xl h-full object-cover'
            />
            <Button asLink href='/contact' className='absolute bottom-8 left-1/2 -translate-x-1/2'>
              {applyNow}
            </Button>
          </div>

          <div data-animate='fade-right'>
            <SectionHeading subtitle={subtitle}>
              {heading} <br className='hidden md:block' />
              {headingSpan}
            </SectionHeading>
            <Paragraph className='mt-3'>
              {data?.paragraph}
            </Paragraph>

            <ul className='mt-6 space-y-4'>
              {list.map((item, i) => (
                <li key={i} className='flex items-center gap-1.5'>
                  <Icon name='check-circle' className='text-main' /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  )
}
