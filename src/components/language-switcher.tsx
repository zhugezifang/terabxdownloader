"use client"

import { usePathname, useRouter } from 'next/navigation'
import { Button } from './ui/button'
import { locales, localeNames, defaultLocale, type Locale } from '@/i18n/config'
import { 
  DropdownMenu, 
  DropdownMenuTrigger, 
  DropdownMenuContent, 
  DropdownMenuItem 
} from '@/components/ui/dropdown-menu'
import { Globe } from 'lucide-react'

export function LanguageSwitcher() {
  const pathname = usePathname()
  const router = useRouter()

  const switchLanguage = (locale: Locale) => {
    // 获取当前路径，移除语言前缀
    const pathWithoutLang = pathname.replace(/^\/[^\/]*/, '') || '/'
    
    let newPath: string
    if (locale === defaultLocale) {
      // 默认语言不显示前缀
      newPath = pathWithoutLang
    } else {
      // 非默认语言显示前缀
      newPath = `/${locale}${pathWithoutLang}`
    }
    router.push('/');
    //router.push(locale === 'zh' ? '/zh' : '/')
  }

  // 获取当前语言，如果没有语言前缀则为默认语言
  const getCurrentLocale = (): Locale => {
    const segments = pathname.split('/').filter(Boolean)
    if (segments.length === 0) return defaultLocale
    
    const firstSegment = segments[0] as Locale
    return locales.includes(firstSegment) ? firstSegment : defaultLocale
  }

  const currentLocale = getCurrentLocale()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="hover:bg-transparent"
        >
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">切换语言</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[120px]">
        {locales.map((locale) => (
          <DropdownMenuItem
            key={locale}
            onClick={() => switchLanguage(locale)}
            className={`
              flex items-center justify-center cursor-pointer
              transition-colors duration-200
              ${currentLocale === locale ? 'bg-muted' : 'hover:bg-muted/50'}
              ${currentLocale === locale ? 'text-primary font-medium' : ''}
            `}
          >
            {localeNames[locale]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
