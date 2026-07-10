'use client'

import { cn } from '@/libs/cn'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import { Icon } from '../utils/icons'

interface ILanguage {
  name: string
  prefix: string
  flag: string
}

const languageMap: ILanguage[] = [
  {
    name: 'English',
    prefix: 'en',
    flag: 'united-states'
  },
  {
    name: 'Română',
    prefix: 'ro',
    flag: 'romania'
  },
  {
    name: 'Русский',
    prefix: 'ru',
    flag: 'russia'
  },
]

export default function Languages({ dark = false }: { dark?: boolean }) {
  const pathname = usePathname()
  const router = useRouter()

  const currentLocale = languageMap.find((l) => pathname.startsWith(`/${l.prefix}`)) ?? languageMap[0]
  const [active, setActive] = useState<ILanguage>(currentLocale)
  const [open, setOpen] = useState<boolean>(false)

  const handleClick = (lang: ILanguage) => {
    setActive(lang)
    setOpen(false)
    // Replace the locale segment in the current path
    const segments = pathname.split('/')
    segments[1] = lang.prefix
    router.push(segments.join('/'))
  }

  return (
    <div className={cn(
      'relative w-38 border rounded-xl backdrop-blur-md transition-colors duration-300',
      dark ? 'border-stroke-white bg-white' : 'border-[#AEAEAE] bg-white/10'
    )}>
      <div
        className='inline-flex items-center gap-3.5 pr-4 cursor-pointer'
        onClick={() => setOpen(prev => !prev)}
      >
        <div className='flex items-center gap-1.5 py-3 px-4'>
          <Image
            src={`/flags/${active.flag}.svg`}
            alt={`${active.name} flag`}
            width={20}
            height={20}
            className='w-auto h-5'
          />
          <span className={cn('transition-colors duration-300', dark ? 'text-foreground' : 'text-white')}>
            {active.name}
          </span>
        </div>

        <Icon
          name='caret-down'
          size={20}
          className={cn(
            'transition-[transform,color] duration-300',
            dark ? 'text-foreground' : 'text-white',
            open ? 'rotate-180' : ''
          )}
        />
      </div>

      <div
        className={cn(
          'absolute left-0 top-full w-full z-10 rounded-xl p-0.5 border border-[#AEAEAE] bg-white transition-all duration-200 ease-in-out origin-top',
          open ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-95 pointer-events-none'
        )}
      >
        {languageMap.filter((item) => item.prefix !== active.prefix).map((item) => (
          <div
            key={item.prefix}
            className='flex items-center gap-1.5 py-3 px-4 rounded-xl group hover:bg-foreground cursor-pointer'
            onClick={() => handleClick(item)}
          >
            <Image
              src={`/flags/${item.flag}.svg`}
              alt={`${item.name} flag`}
              width={20}
              height={20}
              className='w-auto h-5'
            />
            <span className='group-hover:text-background'>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
