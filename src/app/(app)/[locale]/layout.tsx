import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import GSAPAnimations from '@/components/utils/gsap-animations'
import type { Metadata } from 'next'
import { Onest } from 'next/font/google'
import { notFound } from 'next/navigation'
import '../../globals.css'

const onest = Onest({
  variable: '--font-onest',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://smartjobs.md'),
  title: {
    template: '%s | SmartJobs',
    default: 'SmartJobs',
  },
  openGraph: {
    siteName: 'SmartJobs',
    type: 'website',
    images: [{ url: '/workers.png', width: 1200, height: 630, alt: 'SmartJobs' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/workers.png'],
  },
  robots: { index: true, follow: true },
}

const locales = ['en', 'ro', 'ru']

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<'/[locale]'>) {
  const { locale } = await params

  if (!locales.includes(locale)) notFound()

  return (
    <html lang={locale} className={`${onest.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header locale={locale} />
        {children}
        <Footer locale={locale as 'en' | 'ro' | 'ru'} />
        <GSAPAnimations />
      </body>
    </html>
  )
}
