import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['en', 'ro', 'ru']
const defaultLocale = 'ro'

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip files with extensions (static assets)
  if (/\.\w+$/.test(pathname)) return

  // Check if pathname already has a locale prefix
  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  )
  if (hasLocale) return

  // Detect preferred locale from Accept-Language header
  const acceptLanguage = request.headers.get('accept-language') ?? ''
  const locale = acceptLanguage.toLowerCase().startsWith('en') ? 'en' : defaultLocale

  request.nextUrl.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: ['/((?!_next|admin|api).*)'],
}
