'use client'

import { useEffect, useRef } from 'react'
import Button from './button'
import Paragraph from './paragraph'

export default function ContactDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    if (open) ref.current?.showModal()
    else ref.current?.close()
  }, [open])

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      className='fixed inset-0 top-1/2 left-1/2 -translate-1/2 z-50 border border-stroke-white bg-white rounded-xl backdrop:bg-foreground/40 backdrop:backdrop-blur-sm p-0'
    >
      <div className='flex items-center justify-center flex-col text-center p-8 w-[90vw] max-w-xl lg:w-187.5 lg:h-148.5'>
        <span className='text-main text-sm uppercase tracking-wider'>SUCCESS !</span>
        <h2 className='text-foreground text-center font-bold mt-3'>Thank You for Reaching Out!</h2>

        <Paragraph color='black60' className='mt-1.5'>
          We have received your inquiry. A dedicated account manager will review your requirements and contact you within 24 hours.
        </Paragraph>

        <Button variant='black' className='mt-6' onClick={onClose}>
          Close window
        </Button>
      </div>
    </dialog>
  )
}
