import { getCountries, getCountriesSection } from '@/libs/getSections'
import CountriesCard from '../ui/countries-card'
import Paragraph from '../ui/paragraph'
import SectionHeading from '../utils/section-heading'

export default async function Countries({ locale = 'en' }: { locale?: string }) {
  const [countries, section] = await Promise.all([
    getCountries(locale as 'en' | 'ro' | 'ru'),
    getCountriesSection(locale as 'en' | 'ro' | 'ru'),
  ])

  const subtitle = section?.subtitle
  const heading = section?.heading
  const paragraph = section?.paragraph

  return (
    <div
      style={{
        background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 100%), url(https://novalines-cdn.stellarsolutions.md/smartjobs/gifs/globe.gif)',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
      className='w-full py-16 md:py-30 flex flex-col items-center justify-center gap-10 md:gap-13 px-4'
    >
      <div data-animate='fade-up' className='px-4 text-center'>
        <SectionHeading subtitle={subtitle} className='mb-1 text-white' align='center'>
          {heading}
        </SectionHeading>
        <Paragraph color='white70' className='text-center text-base md:text-xl'>
          {paragraph}
        </Paragraph>
      </div>

      <div data-animate='stagger' className='flex items-center justify-center gap-1.5 flex-wrap'>
        {countries.map((item) => (
          <CountriesCard key={item.id} card={{ src: item.flag.url, name: item.name }} />
        ))}
      </div>
    </div>
  )
}
