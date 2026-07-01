import CountriesCard from '../ui/countries-card'
import Paragraph from '../ui/paragraph'
import SectionHeading from '../utils/section-heading'

export interface ICountriesCard {
  src: string,
  name: string
}

const countriesMap: ICountriesCard[] = [
  {
    src: '/flags/nepal.svg',
    name: 'Nepal'
  },
  {
    src: '/flags/india.svg',
    name: 'India'
  },
  {
    src: '/flags/philippines.svg',
    name: 'Philippines'
  },
  {
    src: '/flags/bangladesh.svg',
    name: 'Bangladesh'
  },
  {
    src: '/flags/uzbekistán.svg',
    name: 'Uzbekistan'
  },
]

export default function Countries() {
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
        <SectionHeading subtitle='international recruitment' className='mb-1 text-white' align='center'>
          Qualified personnel from all over the world
        </SectionHeading>
        <Paragraph color='white70' className='text-center text-base md:text-xl'>
          We connect B2B companies from Moldova with a selected workforce from over 5 countries.
        </Paragraph>
      </div>

      <div data-animate='stagger' className='flex items-center justify-center gap-1.5 flex-wrap'>
        {countriesMap.map((item, i) => (
          <CountriesCard key={i} card={item} />
        ))}
      </div>
    </div>
  )
}