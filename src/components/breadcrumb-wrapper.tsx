"use client"

import { usePathname } from 'next/navigation'
import { Breadcrumb } from "./breadcrumb"
import { getBreadcrumbItems } from "@/lib/get-breadcrumb-items"
import type { Locale } from "@/i18n/config"

interface BreadcrumbWrapperProps {
  lang: Locale
  dict: any
}

export function BreadcrumbWrapper({ lang, dict }: BreadcrumbWrapperProps) {
  const pathname = usePathname()

  console.log(pathname)

  if (pathname === `/`) {
    return null
  }
  
  if (pathname === `/${lang}`) {
    return null
  }

  if (pathname.includes("terabox-viewer")||pathname.includes("terms")||pathname.includes("privacy")||pathname.includes("terabox")) {
    return null
  }

  const items = getBreadcrumbItems(pathname, dict)

  return (
    <div className="container py-4 md:py-6">
      <Breadcrumb 
        lang={lang}
        items={items}
      />
    </div>
  )
}
