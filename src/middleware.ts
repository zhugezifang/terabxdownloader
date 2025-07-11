import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { locales, defaultLocale } from './i18n/config'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // 检查路径是否已经包含语言前缀
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  // 如果路径包含语言前缀
  if (pathnameHasLocale) {
    // 如果是默认语言（英语），重定向到不带语言前缀的路径
    if (pathname.startsWith(`/${defaultLocale}/`) || pathname === `/${defaultLocale}`) {
      const newPathname = pathname.startsWith(`/${defaultLocale}/`) 
        ? pathname.replace(`/${defaultLocale}/`, '/') || '/'
        : '/'
      
      return NextResponse.redirect(new URL(newPathname, request.url))
    }
    // 非默认语言，保持原样
    return NextResponse.next()
  }

  // 路径不包含语言前缀，重写到默认语言路径
  // 这样可以确保使用 [lang] 结构而不会导致水合错误
  return NextResponse.rewrite(new URL(`/${defaultLocale}${pathname}`, request.url))
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|js|favicon.ico|robots.txt|ads.txt|google59c7010f61a72e2d.html|sitemap.xml|images|download|posts|html).*)',
  ],
} 