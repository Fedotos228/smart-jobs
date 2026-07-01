import ContactForm from '@/components/sections/contact-form'
import ContactInfo from '@/components/sections/contact-info'
import Section from '@/components/ui/section'
import Container from '@/components/utils/container'

export default function page() {
  return (
    <main className='bg-light-bg'>
      <Section>
        <Container>
          <h1 className='text-foreground text-center mb-9'>Contact Information</h1>

          <div className='grid grid-cols-1 gap-5 lg:grid-cols-2'>
            <ContactInfo />
            <ContactForm />
          </div>
        </Container>
      </Section>
    </main>
  )
}
