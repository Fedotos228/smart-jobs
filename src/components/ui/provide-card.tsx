import { IProvideCard } from '../sections/provide'
import { Icon } from '../utils/icons'
import Paragraph from './paragraph'

export default function ProvideCard({ card }: { card: IProvideCard }) {
  return (
    <div className='border border-stroke-white py-9 px-6 rounded-xl'>
      <div className='bg-[#F3F4F3] mb-4.5 w-13 h-13 rounded-full flex items-center justify-center'>
        <Icon name={card.icon} />
      </div>
      <h5 className='mb-1.5'>{card.title}</h5>
      <Paragraph className='text-xs'>
        {card.desc}
      </Paragraph>
    </div>
  )
}
