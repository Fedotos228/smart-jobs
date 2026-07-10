'use client'

import { sendContactEmail, type FormState } from '@/libs/sendEmail'
import { useActionState, useState, useEffect } from 'react'
import type { ContactPageData } from '@/libs/getSections'
import { Icon } from '../utils/icons'
import Button from './button'
import { Input } from './input'
import { Textarea } from './textarea'
import ContactDialog from './contact-dialog'

const initialState: FormState = { success: false, message: '' }

export default function Form({ data }: { data?: ContactPageData | null }) {
  const [state, action, pending] = useActionState(sendContactEmail, initialState)
  const [dialogOpen, setDialogOpen] = useState(false)

  useEffect(() => {
    if (state.success) setDialogOpen(true)
  }, [state.success])

  return (
    <>
      <form action={action} className='grid md:grid-cols-2 gap-x-3 gap-y-5 lg:gap-y-9'>
        <Input
          name='name'
          label={data?.nameLabel ?? 'Full Name'}
          type='text'
          placeholder={data?.namePlaceholder ?? 'Your Name'}
          required
        />
        <Input
          name='organization'
          label={data?.orgLabel ?? 'Organization'}
          type='text'
          placeholder={data?.orgPlaceholder ?? 'Organization name'}
        />
        <Input
          name='phone'
          label={data?.phoneLabel ?? 'Phone'}
          type='text'
          placeholder={data?.phonePlaceholder ?? '+373 69 00 00 00'}
        />
        <Input
          name='email'
          label={data?.emailLabel ?? 'Email'}
          type='email'
          placeholder={data?.emailPlaceholder ?? 'Email'}
          required
        />
        <Textarea
          name='message'
          label={data?.messageLabel ?? 'Message (optional)'}
          placeholder={data?.messagePlaceholder ?? 'Tell us about your needs'}
        />

        {!state.success && state.message && (
          <p className='col-span-1 md:col-span-2 text-sm text-red-500'>
            {state.message}
          </p>
        )}

        <Button
          variant='black'
          size='full'
          className='col-span-1 lg:col-span-2'
          disabled={pending}
        >
          {pending ? 'Sending…' : (data?.submitButton ?? 'Send Message')}
          {!pending && <Icon name='arrow-right' size={16} />}
        </Button>
      </form>

      <ContactDialog open={dialogOpen} onClose={() => setDialogOpen(false)} />
    </>
  )
}
