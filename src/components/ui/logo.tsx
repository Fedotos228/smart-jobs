import Image from 'next/image'

export default function Logo({ variant = 'white' }: { variant?: 'black' | 'white' | 'color' }) {
  return (
    <Image
      src={`/logo-${variant}.png`}
      alt='Logo'
      width={82}
      height={80}
      className='w-auto h-20'
      loading='eager'
    />
  )
}
