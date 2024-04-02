import createMiddleware from 'next-intl/middleware';
import { i18n } from './i18n-config';
const { defaultLocale, locales } = i18n;

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed',
  localeDetection: false,
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
