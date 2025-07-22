'use client';

import Link from "next/link"
import { getDictionary } from "@/i18n/get-dictionary"
import type { Locale } from "@/i18n/config"
import { NavbarActions } from "./navbar-actions"
import { MobileNav } from "./mobile-nav"
import { useState } from "react" // 添加状态管理

export default async function Navbar({
  lang
}: {
  lang: Locale
}) {
  const dict = await getDictionary(lang)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false) // 添加移动菜单状态

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <i className="fas fa-download text-blue-600 text-2xl mr-2"></i>
            <a href="/" className="text-2xl font-bold text-gray-900">TeraBox Downloader</a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-500 hover:text-gray-600 focus:outline-none"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/terabox-viewer" className="text-gray-700 hover:text-blue-600">Terabox Viewer</a>
            <a href="/terabox-mod-apk" className="text-gray-700 hover:text-blue-600">Terabox Mod APK</a>
            <a href="/terabox-for-pc" className="text-gray-700 hover:text-blue-600">Terabox For PC</a>
            <a href="/terabox-for-ios" className="text-gray-700 hover:text-blue-600">Terabox For IOS</a>
            <a href="/terabox-old-version" className="text-gray-700 hover:text-blue-600">Terabox Old Version</a>
          </nav>
        </div>
        
        {/* Mobile navigation */}
        <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="pt-2 pb-3 space-y-1">
            <a 
              href="/terabox-viewer" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Terabox Viewer
            </a>
            <a 
              href="/terabox-mod-apk" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Terabox Mod APK
            </a>
            <a 
              href="/terabox-for-pc" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Terabox For PC
            </a>
            <a 
              href="/terabox-for-ios" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Terabox For IOS
            </a>
            <a 
              href="/terabox-old-version" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Terabox Old Version
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}