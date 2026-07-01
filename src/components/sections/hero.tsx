import Button from '../ui/button'
import Container from '../utils/container'
import { Icon } from '../utils/icons'

export default function Hero() {
  return (
    <div
      id='hero'
      className=' h-lvh 2xl:h-250'
      style={{
        background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%), url(https://novalines-cdn.stellarsolutions.md/smartjobs/gifs/hero.gif)',
        backgroundPosition: '50% 50%',
        backgroundSize: "cover",
        backgroundRepeat: 'no-repeat'
      }}
    >
      <Container className='relative h-full'>
        <div className='absolute top-1/2 -translate-y-1/2'>
          <h1 data-animate='fade-up' className='mb-3'>
            Connecting global talent <br className='hidden md:block' />
            <span>with Moldavian industry.</span>
          </h1>
          <p data-animate='fade-up' className='text-white/70 mb-8 md:mb-13.25'>Streamlined HR consulting and permanent placement <br className='hidden md:block' /> services with lifetime personal assistance.</p>
          <div data-animate='fade-up' className='mb-6 flex flex-col sm:flex-row gap-3 sm:gap-0'>
            <Button asLink href='/contact' className='sm:mr-1.5'>
              Apply now
            </Button>
            <Button variant='outline' asLink href='#how-it-works'>
              See How It Works
            </Button>
          </div>

          <div data-animate='fade-up' className='inline-flex items-center gap-1.5'>
            <Icon name='check-circle' size={24} className='text-main' />
            <p className='text-white/70'>100% Legal & Licensed HR Partners</p>
          </div>
        </div>
      </Container>
    </div>
  )
}