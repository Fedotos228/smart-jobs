import Button from '@/components/ui/button'
import { getAreaBySlug } from '@/libs/getAreas'
import type { SerializedEditorState, SerializedLexicalNode } from '@payloadcms/richtext-lexical/lexical'
import { RichText } from '@payloadcms/richtext-lexical/react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

function lexicalToText(node: SerializedLexicalNode & { text?: string; children?: SerializedLexicalNode[] }): string {
  if (node.text) return node.text
  if (node.children) return node.children.map(lexicalToText).join(' ')
  return ''
}

function extractDescription(state?: SerializedEditorState | null): string {
  if (!state?.root) return ''
  return lexicalToText(state.root as SerializedLexicalNode & { children: SerializedLexicalNode[] })
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 160)
}

export async function generateMetadata({ params }: PageProps<'/[locale]/areas/[slug]'>): Promise<Metadata> {
  const { locale, slug } = await params
  const area = await getAreaBySlug(slug, locale)

  if (!area) return {}

  const title = area.name
  const description = extractDescription(area.description)

  return {
    title,
    description,
    alternates: {
      canonical: `https://smartjobs.md/${locale}/areas/${slug}`,
      languages: {
        'en': `https://smartjobs.md/en/areas/${slug}`,
        'ro': `https://smartjobs.md/ro/areas/${slug}`,
        'ru': `https://smartjobs.md/ru/areas/${slug}`,
        'x-default': `https://smartjobs.md/ro/areas/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `https://smartjobs.md/${locale}/areas/${slug}`,
      ...(area.video?.url ? { videos: [{ url: area.video.url }] } : {}),
    },
  }
}

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
