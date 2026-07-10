import type { ContactPageData } from '@/libs/getSections'
import Form from '../ui/form'

export default function ContactForm({ data }: { data?: ContactPageData | null }) {
  return (
    <div className='bg-white border border-stroke-white rounded-xl p-6 lg:p-9'>
      <h2 className='mb-9'>{data?.formHeading ?? 'Contact Information'}</h2>

      <Form data={data} />
    </div>
  )
}
