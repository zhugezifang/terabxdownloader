import type { Locale } from "@/i18n/config"
import { useState } from "react"

export default function Navbar({
  lang
}: {
  lang: Locale
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

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
              onClick={toggleMobileMenu}
              className="text-gray-500 hover:text-gray-600 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
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
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="pt-2 pb-3 space-y-1 border-t border-gray-200">
            <a href="/terabox-viewer" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Terabox Viewer</a>
            <a href="/terabox-mod-apk" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Terabox Mod APK</a>
            <a href="/terabox-for-pc" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Terabox For PC</a>
            <a href="/terabox-for-ios" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Terabox For IOS</a>
            <a href="/terabox-old-version" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Terabox Old Version</a>
          </div>
        </div>
      </div>
  </header>
  )
}
