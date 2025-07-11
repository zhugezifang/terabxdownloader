export const defaultLocale = 'en'
export const locales = ['en', 'zh'] as const
export type Locale = typeof locales[number]

export const localeNames: Record<Locale, string> = {
  'en': 'English',
  'zh': '简体中文'
} 