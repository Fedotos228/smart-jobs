'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect } from 'react'

gsap.registerPlugin(ScrollTrigger)

export default function GSAPAnimations() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-animate="fade-up"]').forEach((el) => {
        gsap.fromTo(el,
          { y: 50, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%' }
          }
        )
      })

      gsap.utils.toArray<HTMLElement>('[data-animate="stagger"]').forEach((container) => {
        gsap.fromTo(Array.from(container.children),
          { y: 40, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.6, ease: 'power2.out',
            stagger: 0.12,
            scrollTrigger: { trigger: container, start: 'top 88%' }
          }
        )
      })

      gsap.utils.toArray<HTMLElement>('[data-animate="fade-left"]').forEach((el) => {
        gsap.fromTo(el,
          { x: -60, opacity: 0 },
          {
            x: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%' }
          }
        )
      })

      gsap.utils.toArray<HTMLElement>('[data-animate="fade-right"]').forEach((el) => {
        gsap.fromTo(el,
          { x: 60, opacity: 0 },
          {
            x: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%' }
          }
        )
      })
    })

    return () => ctx.revert()
  }, [])

  return null
}
