'use client'

import { cn } from '@/libs/cn'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import Logo from '../ui/logo'
import Container from '../utils/container'
import Languages from './languages'

export default function Header({ locale = 'en' }: { locale?: string }) {
  const pathname = usePathname()
  const isHome = pathname === '/en' || pathname === '/ro' || pathname === '/ru'
  const [scrolled, setScrolled] = useState<boolean>(false)

  useEffect(() => {
    if (!isHome) return

    const hero = document.getElementById('hero')
    if (!hero) return

    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { rootMargin: '-96px 0px 0px 0px' }
    )

    observer.observe(hero)

    return () => observer.disconnect()
  }, [isHome])

  if (!isHome) {
    return (
      <header className='w-full py-5 bg-light-bg'>
        <Container>
          <div className='flex items-center justify-between'>
            <Link href={`/${locale}`}>
              <Logo variant='color' />
            </Link>
            <Languages dark />
          </div>
        </Container>
      </header>
    )
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 w-full py-5 z-50 transition-[background] duration-300',
        scrolled && 'bg-white/80 backdrop-blur-md shadow-sm border-b border-stroke-white'
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          <Link href={`/${locale}`}>
            <Logo variant={scrolled ? 'color' : 'white'} />
          </Link>
          <Languages dark={scrolled} />
        </div>
      </Container>
    </header>
  )
}
