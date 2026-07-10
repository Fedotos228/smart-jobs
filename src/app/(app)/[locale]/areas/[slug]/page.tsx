import Button from '@/components/ui/button'
import { getAreaBySlug } from '@/libs/getAreas'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { notFound } from 'next/navigation'

export default async function page({ params }: PageProps<'/[locale]/areas/[slug]'>) {
  const { locale, slug } = await params
  const area = await getAreaBySlug(slug, locale)

  if (!area) return notFound()

  return (
    <div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-5'>
      {area.video?.url && (
        <video
          src={area.video.url}
          className='w-full lg:max-w-219.5 lg:h-122.5 rounded-xl object-cover'
          autoPlay
          muted
          loop
          playsInline
        />
      )}

      <div className='space-y-6'>
        {area.description && (
          <RichText
            data={area.description}
            className='prose prose-p:text-foreground'
          />
        )}

        <Button asLink href={`/${locale}/contact`} size={'large'}>
          Let's find the best candidates
        </Button>
      </div>
    </div>
  )
}
