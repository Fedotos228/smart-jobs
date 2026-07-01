import { IArea } from '@/libs/areas.constans'
import { cn } from '@/libs/cn'
import Image from 'next/image'
import Link from 'next/link'
import Paragraph from './paragraph'

export default function AreasCard({ card, active }: { card: IArea, active?: boolean }) {
  return (
    <Link
      href={`/areas/${card.slug}`}
      className={cn(
        'relative w-fit h-auto lg:h-20 flex items-center gap-3 bg-background p-4 lg:p-6 border  hover:border-main transition-colors rounded-xl'
        , active ? 'border-main' : 'border-stroke-white'
      )}>
      <Image
        src={card.iconSrc}
        alt={`Icon ${card.name}`}
        width={32}
        height={32}
        className='w-auto h-5 lg:h-8 text-main'
      />
      <Paragraph color='black' className='underline text-base lg:text-xl font-semibold'>{card.name}</Paragraph>
    </Link>
  )
}
