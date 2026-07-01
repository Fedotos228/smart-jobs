import { cn } from '@/libs/cn'
import { IStepsCard } from '../sections/how-works'
import { Icon } from '../utils/icons'
import Paragraph from './paragraph'

export default function StepsCard({
  card,
  index,
  last
}: {
  card: IStepsCard
  index: number,
  last: boolean
}) {
  return (
    <div className={cn('border  rounded-xl py-9 px-6', last ? 'border-main bg-main/10' : 'border-stroke-white bg-white')}>
      <div className={cn('w-fit mx-auto rounded-full p-4.75 mb-4.5', last ? 'bg-main' : 'bg-foreground')}>
        <Icon name={card.icon} className='text-white' />
      </div>
      <p className={cn('text-sm text-center uppercase mb-2', last ? 'text-main' : 'text-foreground/40')}>Step {index}</p>
      <h3 className='text-center mb-3'>{card.title}</h3>
      <Paragraph className='text-center leading-[150%]'>{card.description}</Paragraph>
    </div>
  )
}
