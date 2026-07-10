import Link from 'next/link'
import { getContactInfoSection, getFooter } from '@/libs/getSections'
import Logo from '../ui/logo'
import Paragraph from '../ui/paragraph'
import Container from '../utils/container'

type Locale = 'en' | 'ro' | 'ru'

export default async function Footer({ locale }: { locale: Locale }) {
  const [footer, contact] = await Promise.all([
    getFooter(locale),
    getContactInfoSection(locale),
  ])

  const currentYear = new Date().getFullYear()

  return (
    <footer data-animate='fade-up' className='border-t border-t-stroke-white pt-25 pb-12.5'>
      <Container>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-b-stroke-white pb-15.75'>

          {/* LOGO + TAGLINE */}
          <div className='max-w-91.25'>
            <Logo variant='color' />
            <Paragraph className='mt-3'>
              {footer?.tagline ?? 'Premium international recruitment and HR consulting services. Connecting global talent with Moldova industry since 2015'}
            </Paragraph>
          </div>

          {/* CONTACTS */}
          <div>
            <p className='text-xs font-medium uppercase tracking-widest text-foreground/40 mb-5'>
              {footer?.contactsLabel ?? 'Contacts'}
            </p>
            <ul className='flex flex-col gap-4'>
              {contact?.phones?.map((p) => (
                <li key={p.href}>
                  <a href={p.href} className='text-foreground hover:text-main transition-colors duration-200'>
                    {p.number}
                  </a>
                </li>
              ))}
              {contact?.email && (
                <li>
                  <a href={`mailto:${contact.email}`} className='text-foreground hover:text-main transition-colors duration-200'>
                    {contact.email}
                  </a>
                </li>
              )}
              {contact?.address && (
                <li><Paragraph color='black'>{contact.address}</Paragraph></li>
              )}
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div>
            <p className='text-xs font-medium uppercase tracking-widest text-foreground/40 mb-5'>
              {footer?.quickLinksLabel ?? 'Quick Links'}
            </p>
            <ul className='flex flex-col gap-4'>
              <li>
                <Link href={`/${locale}`} className='text-foreground hover:text-main transition-colors duration-200'>
                  {footer?.homeLabel ?? 'Home'}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/#how-it-works`} className='text-foreground hover:text-main transition-colors duration-200'>
                  {footer?.howWorksLabel ?? 'How it works'}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className='text-foreground hover:text-main transition-colors duration-200'>
                  {footer?.contactLabel ?? 'Contact'}
                </Link>
              </li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <p className='text-xs font-medium uppercase tracking-widest text-foreground/40 mb-5'>
              {footer?.legalLabel ?? 'Legal'}
            </p>
            <ul className='flex flex-col gap-4'>
              <li>
                <Link href={`/${locale}/privacy-policy`} className='text-foreground hover:text-main transition-colors duration-200'>
                  {footer?.privacyPolicyLabel ?? 'Privacy Policy'}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/terms`} className='text-foreground hover:text-main transition-colors duration-200'>
                  {footer?.termsOfServiceLabel ?? 'Terms of Service'}
                </Link>
              </li>
              {footer?.licenseNumber && (
                <li><Paragraph color='black'>{footer.licenseNumber}</Paragraph></li>
              )}
            </ul>
          </div>

        </div>

        <div className='flex flex-col sm:flex-row items-center justify-between gap-2 pt-6'>
          <Paragraph>© {currentYear} SmartJobs SRL. {footer?.allRightsReserved ?? 'All rights reserved.'}</Paragraph>
          <Paragraph>{footer?.location ?? 'Chișinău, Moldova'}</Paragraph>
        </div>
      </Container>
    </footer>
  )
}
