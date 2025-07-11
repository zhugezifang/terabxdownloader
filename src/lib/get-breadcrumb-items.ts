import type { Locale } from "@/i18n/config"

export function getBreadcrumbItems(pathname: string, dict: any) {
  const paths = pathname.split('/').filter(Boolean)
  const items = []
  console.log("getBreadcrumbItems:"+paths)
    
  // 检查第一个路径段是否为语言代码，如果是则移除，如果不是则默认为英文
  let lang: Locale = 'en'
  if (paths.length > 0 && (paths[0] === 'zh' || paths[0] === 'en')) {
    lang = paths.shift() as Locale
  }
  
  // 生成语言前缀：英文时为空字符串，其他语言时包含语言代码
  const langPrefix = lang === 'en' ? '' : `/${lang}`
  
  for (const path of paths) {
    switch(path) {
      case 'blog':
        // 只有当不是最后一个路径时才添加链接
        if (paths.length > 1) {
          items.push({
            label: dict.nav.blog,
            href: `${langPrefix}/blog`
          })
        } else {
          items.push({
            label: dict.nav.blog
          })
        }
        break
      case 'pricing':
        items.push({
          label: dict.nav.pricing,
          href: `${langPrefix}/pricing`
        })
        break
      case 'profile':
        items.push({
          label: dict.nav.profile,
          href: `${langPrefix}/profile`
        })
        break
      case 'signin':
        items.push({
          label: dict.nav.signin,
          href: `${langPrefix}/signin`
        })
        break
      case 'signup':
        items.push({
          label: dict.auth.signup.title,
          href: `${langPrefix}/signup`
        })
        break
      case 'country':
        // country 路径通常不显示为单独的面包屑，而是直接显示国家名称
        break
      default:
        // 处理博客文章等动态路由
        if (paths[paths.length - 2] === 'blog') {
          const post = dict.blog.posts.find((p: any) => p.slug === path)
          items.push({
            label: post ? post.title : path
          })
        } else if (paths[paths.length - 2] === 'country') {
          // 处理国家页面的动态路由，显示解码后的国家名称
          const decodedCountry = decodeURIComponent(path)
          items.push({
            label: decodedCountry
          })
        }
    }
  }
  
  return items
}
