import Link from "next/link"
//import { Chrome } from "lucide-react"
import { getDictionary } from "@/i18n/get-dictionary"
import type { Locale } from "@/i18n/config"
import { NavbarActions } from "./navbar-actions"
import { MobileNav } from "./mobile-nav"

export default async function Navbar({
  lang
}: {
  lang: Locale
}) {
  const dict = await getDictionary(lang)

  return (
    <header className="bg-gradient-to-br from-pink-500 via-rose-400 to-orange-300 text-white pb-2 pt-2 relative z-10 overflow-hidden">
      
      <div className="container mx-auto px-4 py-2">
            <div className="flex items-center justify-between opacity-100 transition-opacity duration-500">
                <div className="flex items-center space-x-4">
                    <div className="relative">
                        <i className="fas fa-flask text-4xl relative overflow-hidden"></i>
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-300 rounded-full animate-ping"></div>
                    </div>
                    <div>
                        <a href={`/${lang}`}><span className="text-3xl font-bold bg-gradient-to-r from-white to-pink-100 bg-clip-text text-transparent">
                            {dict.indexLanguageText.h1Text}
                        </span>
                        </a>
                        <p className="text-sm opacity-90 font-medium">
                        </p>
                    </div>
                </div>
                <nav className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                  <div className="flex-1 md:flex-none">
                    <div className="hidden items-center space-x-4 md:flex">
                    {/*
                    <Link href={`/${lang}/blog`} className="text-base font-medium transition-colors hover:text-primary">
                        {dict.nav.blog}
                    </Link>
                    
                    {dict.nav.menu.map((menu) => (
                      <Link href={`/${lang}/${menu.href}`} className="text-base font-medium transition-colors hover:text-primary">
                      {menu.name}
                      </Link>
                    ))}
                      
                      
                      
                      
                      <Link href={`/${lang}/pricing`} className="text-sm font-medium transition-colors hover:text-primary">
                        {dict.nav.pricing}
                      </Link>
                      */}
                    </div>
                  </div>
          {/*<NavbarActions lang={lang} dict={dict} />*/}
                <NavbarActions />
                <MobileNav lang={lang} dict={dict} />
                </nav>
                
            </div>
      </div>

    </header>
  )
}
