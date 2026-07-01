import Image from 'next/image'
import { ICountriesCard } from '../sections/countries'
import Paragraph from './paragraph'

export default function da({ card }: { card: ICountriesCard }) {
  return (
    <div className='w-45 py-6 border border-foreground rounded-xl bg-[#0C0C0C80] backdrop-blur-sm '>
      <Image
        src={card.src}
        alt={`Flag of ${card.name}`}
        width={24}
        height={24}
        className='mb-3 mx-auto'
      />
      <Paragraph color='white' className='text-center'>{card.name}</Paragraph>
    </div>
  )
}
