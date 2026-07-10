import config from '@payload-config'
import { getPayload } from 'payload'
import type { IconName } from '@/components/utils/icons'
import type { PayloadMedia } from './getAreas'

export type HeroData = {
  title: string
  titleHighlight?: string
  subtitle?: string
  applyNow?: string
  seeHowItWorks?: string
  badge?: string
}

export type HowWorksStep = {
  icon: IconName
  title: string
  description: string
}

export type HowWorksData = {
  subtitle?: string
  heading?: string
  headingSpan?: string
  steps: HowWorksStep[]
}

export type ProvideCard = {
  icon: IconName
  title: string
  desc: string
}

export type ProvideData = {
  subtitle?: string
  heading?: string
  headingSpan?: string
  zeroFees?: string
  zeroFeesSuffix?: string
  paragraph?: string
  cards: ProvideCard[]
}

export type EmployersData = {
  subtitle?: string
  heading?: string
  headingSpan?: string
  applyNow?: string
  image?: PayloadMedia
  paragraph?: string
  listItems?: { text: string }[]
}

export type ContactInfoData = {
  callUsLabel?: string
  emailLabel?: string
  officeLabel?: string
  phones?: { number: string; href: string }[]
  email?: string
  address?: string
  mapsEmbedUrl?: string
}

export type CountriesSectionData = {
  subtitle?: string
  heading?: string
  paragraph?: string
}

export type AreasSectionData = {
  heading?: string
  paragraph?: string
}

export type ContactPageData = {
  heading?: string
  formHeading?: string
  nameLabel?: string
  namePlaceholder?: string
  orgLabel?: string
  orgPlaceholder?: string
  phoneLabel?: string
  phonePlaceholder?: string
  emailLabel?: string
  emailPlaceholder?: string
  messageLabel?: string
  messagePlaceholder?: string
  submitButton?: string
}

export type FooterData = {
  tagline?: string
  contactsLabel?: string
  quickLinksLabel?: string
  homeLabel?: string
  howWorksLabel?: string
  contactLabel?: string
  legalLabel?: string
  privacyPolicyLabel?: string
  termsOfServiceLabel?: string
  licenseNumber?: string
  allRightsReserved?: string
  location?: string
}

export type PayloadCountry = {
  id: string
  name: string
  flag: PayloadMedia
}

type Locale = 'en' | 'ro' | 'ru'

async function getPayloadInstance() {
  return getPayload({ config })
}

export async function getHeroSection(locale: Locale = 'ro'): Promise<HeroData | null> {
  const payload = await getPayloadInstance()
  const data = await payload.findGlobal({ slug: 'hero-section', locale })
  return data as HeroData
}

export async function getHowWorksSection(locale: Locale = 'ro'): Promise<HowWorksData | null> {
  const payload = await getPayloadInstance()
  const data = await payload.findGlobal({ slug: 'how-works-section', locale })
  return data as HowWorksData
}

export async function getProvideSection(locale: Locale = 'ro'): Promise<ProvideData | null> {
  const payload = await getPayloadInstance()
  const data = await payload.findGlobal({ slug: 'provide-section', locale })
  return data as ProvideData
}

export async function getEmployersSection(locale: Locale = 'ro'): Promise<EmployersData | null> {
  const payload = await getPayloadInstance()
  const data = await payload.findGlobal({ slug: 'employers-section', locale, depth: 1 })
  return data as EmployersData
}

export async function getContactInfoSection(locale: Locale = 'ro'): Promise<ContactInfoData | null> {
  const payload = await getPayloadInstance()
  const data = await payload.findGlobal({ slug: 'contact-info-section', locale })
  return data as ContactInfoData
}

export async function getCountriesSection(locale: Locale = 'ro'): Promise<CountriesSectionData | null> {
  const payload = await getPayloadInstance()
  const data = await payload.findGlobal({ slug: 'countries-section', locale })
  return data as CountriesSectionData
}

export async function getAreasSection(locale: Locale = 'ro'): Promise<AreasSectionData | null> {
  const payload = await getPayloadInstance()
  const data = await payload.findGlobal({ slug: 'areas-section', locale })
  return data as AreasSectionData
}

export async function getContactPage(locale: Locale = 'ro'): Promise<ContactPageData | null> {
  const payload = await getPayloadInstance()
  const data = await payload.findGlobal({ slug: 'contact-page', locale })
  return data as ContactPageData
}

export async function getCountries(locale: Locale = 'ro'): Promise<PayloadCountry[]> {
  const payload = await getPayloadInstance()
  const result = await payload.find({ collection: 'countries', locale, depth: 1, limit: 100 })
  return result.docs as PayloadCountry[]
}

export async function getFooter(locale: Locale = 'ro'): Promise<FooterData | null> {
  const payload = await getPayloadInstance()
  const data = await payload.findGlobal({ slug: 'footer', locale })
  return data as FooterData
}
