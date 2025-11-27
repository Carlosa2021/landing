// middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import { fallbackLng, languages } from './lib/i18n/settings';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return;
  }

  const pathnameIsMissingLocale = languages.every(
    (loc) => !pathname.startsWith(`/${loc}`)
  );

  if (pathnameIsMissingLocale) {
    const locale = fallbackLng;
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  }
}

export const config = {
  matcher: ['/((?!_next|api|.*\\..*).*)'],
};
