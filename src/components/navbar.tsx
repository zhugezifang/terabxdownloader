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
                    <span className="text-2xl font-bold text-gray-900">TeraBox Downloader</span>
                </div>
                <nav className="hidden md:flex space-x-8">
                    <a href="#features" className="text-gray-700 hover:text-blue-600">Features</a>
                    <a href="#how-to-use" className="text-gray-700 hover:text-blue-600">How to Use</a>
                    <a href="#faq" className="text-gray-700 hover:text-blue-600">FAQ</a>
                </nav>
            </div>
        </div>

    </header>
  )
}
