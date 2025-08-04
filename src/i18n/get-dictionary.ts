import type { Locale } from './config'

const dictionaries = {
  'en': () => import('./dictionaries/en.json').then(module => module.default),
  'zh': () => import('./dictionaries/zh.json').then(module => module.default)
}

export const getDictionary = async (locale: Locale) => {
  const dictionaryLoader = dictionaries[locale as keyof typeof dictionaries] || dictionaries['en'];
  return dictionaryLoader();
}
