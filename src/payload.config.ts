import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import path from 'path'
import { buildConfig } from 'payload'
import type { SharpDependency } from 'payload'
import _sharp from 'sharp'
import { fileURLToPath } from 'url'
import { Areas } from './collections/Areas'
import { Countries } from './collections/Countries'
import { Media } from './collections/Media'
import { Users } from './collections/Users'
import { AreasSection } from './globals/AreasSection'
import { ContactInfoSection } from './globals/ContactInfoSection'
import { ContactPage } from './globals/ContactPage'
import { CountriesSection } from './globals/CountriesSection'
import { EmployersSection } from './globals/EmployersSection'
import { FooterGlobal } from './globals/FooterGlobal'
import { HeroSection } from './globals/HeroSection'
import { HowWorksSection } from './globals/HowWorksSection'
import { ProvideSection } from './globals/ProvideSection'

const sharp = _sharp as unknown as SharpDependency

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  localization: {
    locales: ['en', 'ro', 'ru'],
    defaultLocale: 'ro',
    fallback: true,
  },
  collections: [Users, Media, Areas, Countries],
  globals: [HeroSection, HowWorksSection, ProvideSection, EmployersSection, ContactInfoSection, CountriesSection, AreasSection, ContactPage, FooterGlobal],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.MONGODB_URI || '',
  }),
  plugins: [
    vercelBlobStorage({
      enabled: true,
      collections: {
        media: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),
  ],
  sharp,
})
