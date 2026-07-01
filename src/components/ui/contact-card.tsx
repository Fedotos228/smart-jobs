import { cn } from '@/libs/cn'
import Link from 'next/link'
import { IContactCard } from '../sections/contact-info'
import { Icon } from '../utils/icons'

export default function ContactCard({ card, firstItem }: { card: IContactCard, firstItem: boolean }) {
  return (
    <div className={cn(
      'w-full h-full lg:h-20.25 flex items-center justify-between',
      'bg-white border border-stroke-white rounded-xl px-4 md:px-6 py-4',
      firstItem ? 'col-span-1 lg:col-span-2' : 'col-span-1'
    )}>
      <div className='space-y-1'>
        <h4 className='text-foreground/60'>{card.title}</h4>
        <div className='flex items-center flex-col sm:flex-row gap-1 sm:gap-6'>
          {card.items.map((item, i) => (
            <Link href={item.href} key={i} target='_blank' className='text-sm'>{item.name}</Link>
          ))}
        </div>
      </div>

      <Icon name={card.icon} />
    </div>
  )
}
