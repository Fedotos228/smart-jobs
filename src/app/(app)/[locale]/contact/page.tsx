import ContactForm from '@/components/sections/contact-form'
import ContactInfo from '@/components/sections/contact-info'
import Section from '@/components/ui/section'
import Container from '@/components/utils/container'
import { getContactPage } from '@/libs/getSections'

export default async function page({ params }: PageProps<'/[locale]/contact'>) {
  const { locale } = await params
  const data = await getContactPage(locale as 'en' | 'ro' | 'ru')

  return (
    <main className='bg-light-bg'>
      <Section>
        <Container>
          <h1 className='text-foreground text-center mb-9'>
            {data?.heading ?? 'Contact Information'}
          </h1>

          <div className='grid grid-cols-1 gap-5 lg:grid-cols-2'>
            <ContactInfo locale={locale} />
            <ContactForm data={data} />
          </div>
        </Container>
      </Section>
    </main>
  )
}
