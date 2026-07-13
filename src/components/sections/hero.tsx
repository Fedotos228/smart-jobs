import { getHeroSection } from '@/libs/getSections'
import Button from '../ui/button'
import Paragraph from '../ui/paragraph'
import Container from '../utils/container'
import { Icon } from '../utils/icons'

export default async function Hero({ locale = 'en' }: { locale?: string }) {
  const data = await getHeroSection(locale as 'en' | 'ro' | 'ru')

  return (
    <div
      id='hero'
      className='h-lvh 2xl:h-250'
      style={{
        background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%), url(https://novalines-cdn.stellarsolutions.md/smartjobs/gifs/hero.gif)',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <Container className='relative h-full'>
        <div className='absolute top-1/2 -translate-y-1/2'>
          <h1 data-animate='fade-up' className='mb-3'>
            {data?.title ?? 'Connecting global talent'}{data?.titleHighlight && <><br className='hidden md:block' />{' '}<span>{data.titleHighlight}</span></>}
          </h1>
          <p data-animate='fade-up' className='text-white/70 mb-8 md:mb-13.25 max-w-146'>
            {data?.subtitle}
          </p>
          <div data-animate='fade-up' className='mb-6 flex flex-col sm:flex-row gap-3 sm:gap-0'>
            <Button asLink href='/contact' className='sm:mr-1.5'>
              {data?.applyNow ?? 'Apply now'}
            </Button>
            <Button variant='outline' asLink href='#how-it-works'>
              {data?.seeHowItWorks ?? 'See How It Works'}
            </Button>
          </div>

          <div data-animate='fade-up' className='inline-flex items-center gap-1.5'>
            <Icon name='check-circle' size={24} className='text-main' />
            <Paragraph color="white70">{data?.badge ?? '100% Legal & Licensed HR Partners'}</Paragraph>
          </div>
        </div>
      </Container>
    </div>
  )
}
