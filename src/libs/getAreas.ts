import config from '@payload-config'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import { getPayload } from 'payload'

export type PayloadMedia = {
  id: string
  url: string
  filename: string
  alt?: string
}

export type PayloadArea = {
  id: string
  name: string
  slug: string
  icon: PayloadMedia
  video?: PayloadMedia
  description?: SerializedEditorState
}

export async function getAreas(locale = 'ro'): Promise<PayloadArea[]> {
  const payload = await getPayload({ config })
  const result = await payload.find({
    collection: 'areas',
    locale: locale as 'en' | 'ro' | 'ru',
    depth: 1,
    limit: 100,
  })
  return result.docs as PayloadArea[]
}

export async function getAreaBySlug(slug: string, locale = 'ro'): Promise<PayloadArea | null> {
  const payload = await getPayload({ config })
  const result = await payload.find({
    collection: 'areas',
    locale: locale as 'en' | 'ro' | 'ru',
    where: { slug: { equals: slug } },
    depth: 1,
    limit: 1,
  })
  return (result.docs[0] as PayloadArea) ?? null
}
