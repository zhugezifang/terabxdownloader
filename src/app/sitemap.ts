import { locales, defaultLocale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://your-domain.com'
  const sitemapEntries = []

  // 为每个语言版本添加基础页面
  for (const locale of locales) {
    const dict = await getDictionary(locale)
    const posts = dict.blog.posts
    
    // 构建语言前缀URL
    const localePrefix = locale === defaultLocale ? '' : `/${locale}`

    // 添加主页
    sitemapEntries.push({
      url: `${baseUrl}${localePrefix}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    })
    
    // 添加固定页面
    const staticPages = ['terabox-viewer','terabox-mod-apk','terabox-for-pc','terabox-for-ios','terabox-old-version']
    for (const page of staticPages) {
      sitemapEntries.push({
        url: `${baseUrl}${localePrefix}/${page}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      })
    }
    /*
    // 添加博客文章页面
    for (const post of posts) {
      sitemapEntries.push({
        url: `${baseUrl}${localePrefix}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly',
        priority: 0.6,
      })
    }*/
  }

  return sitemapEntries
}
