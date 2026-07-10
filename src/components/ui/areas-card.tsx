import { PayloadArea } from '@/libs/getAreas'
import { cn } from '@/libs/cn'
import Image from 'next/image'
import Link from 'next/link'
import Paragraph from './paragraph'

export default function AreasCard({ card, active, locale = 'en' }: { card: PayloadArea, active?: boolean, locale?: string }) {
  return (
    <Link
      href={`/${locale}/areas/${card.slug}`}
      className={cn(
        'relative w-fit h-auto 2xl:h-20 flex items-center gap-3 bg-background p-4 2xl:p-6 border hover:border-main transition-colors rounded-xl',
        active ? 'border-main' : 'border-stroke-white'
      )}>
      {card.icon?.url && (
        <Image
          src={card.icon.url}
          alt={card.icon.alt ?? `Icon ${card.name}`}
          width={32}
          height={32}
          className='w-auto h-5 2xl:h-8 text-main'
        />
      )}
      <Paragraph color='black' className='underline text-base lg:text-lg 2xl:text-xl font-semibold'>
        {card.name}
      </Paragraph>
    </Link>
  )
}
