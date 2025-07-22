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
    <header className="bg-white shadow-sm border-b">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
                <div className="flex items-center">
                    <i className="fas fa-download text-blue-600 text-2xl mr-2"></i>
                    <a href="/" className="text-2xl font-bold text-gray-900">TeraBox Downloader</a>
                </div>
                <nav className="hidden md:flex space-x-8">
                    
                    <a href="/terabox-viewer" className="text-gray-700 hover:text-blue-600">Terabox Viewer</a>
                    <a href="/terabox-mod-apk" className="text-gray-700 hover:text-blue-600">Terabox Mod APK</a>
                    <a href="/terabox-for-pc" className="text-gray-700 hover:text-blue-600">Terabox For PC</a>
                    <a href="/terabox-for-ios" className="text-gray-700 hover:text-blue-600">Terabox For IOS</a>
                    <a href="/terabox-old-version" className="text-gray-700 hover:text-blue-600">Terabox Old Version</a>

                </nav>
            </div>
        </div>

    </header>
  )
}
