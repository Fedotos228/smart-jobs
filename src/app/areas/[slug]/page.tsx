import AreasCard from '@/components/ui/areas-card'
import Button from '@/components/ui/button'
import Paragraph from '@/components/ui/paragraph'
import Section from '@/components/ui/section'
import Container from '@/components/utils/container'
import { areas } from '@/libs/areas.constans'

export default async function page({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug

  const currentArea = areas.filter((item) => item.slug === slug)[0]

  return (
    <main className='bg-light-bg'>
      <Container>
        <Section className="flex flex-col gap-12.5">
          <div data-animate='stagger' className='flex items-center justify-center gap-3 flex-wrap order-1 lg:-order-1'>
            {areas.map((item, i) => (
              <AreasCard key={i} card={item} active={item.slug === currentArea.slug} />
            ))}
          </div>

          <div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-5'>
            <img
              src={currentArea.imageSrc}
              alt={`Representative gif for ${currentArea.name}`}
              className='w-full lg:max-w-219.5 lg:h-122.5 rounded-xl object-cover'
            />

            <div className='space-y-6'>
              {currentArea.description?.map((p, i) => (
                <Paragraph className='inline-block' key={i} color='black'>{p}</Paragraph>
              ))}

              <Button asLink href='/contacts' size={'large'}>
                Let's find the best candidates
              </Button>
            </div>
          </div>
        </Section>
      </Container>
    </main>
  )
}
