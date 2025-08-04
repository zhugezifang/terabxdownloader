import Link from "next/link"
import { ThumbsUp } from "lucide-react"
import { getDictionary } from "@/i18n/get-dictionary"
import { locales, localeNames, defaultLocale, type Locale } from '@/i18n/config'


export default async function Footer({
  lang
}: {
  lang: Locale
}) {
  const dict = await getDictionary(lang)

  const footerLinks = {
    [dict.footer.product]: [
    ],
    [dict.footer.social]: [
    ],
    [dict.footer.support]: [
    ],
    [dict.footer.company]: [
      { name: dict.footer.links.terms, href: `/${lang}/terms` },
      { name: dict.footer.links.privacy, href: `/${lang}/privacy` },
    ],
  }

  return (

    <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
                <div>
                    <div className="flex items-center mb-4">
                        <i className="fas fa-download text-blue-400 text-2xl mr-2"></i>
                        <span className="text-xl font-bold">TeraBox Downloader</span>
                    </div>
                    <p className="text-gray-400">
                        The most trusted and reliable TeraBox Downloader tool for downloading files from TeraBox quickly and securely.
                    </p>
                </div>
                
                <div>
                    <span className="font-semibold mb-4">Features</span>
                    <ul className="space-y-2 text-gray-400">
                        <li>Free Downloads</li>
                        <li>No Registration</li>
                        <li>Mobile Friendly</li>
                        <li>Secure & Safe</li>
                    </ul>
                </div>
                
                <div>
                    <span className="font-semibold mb-4">Support</span>
                    <ul className="space-y-2 text-gray-400">
                        <li>How to Use</li>
                        <li>FAQ</li>
                        <li>Contact Us</li>
                        <li>Report Issue</li>
                    </ul>
                </div>
                
                <div>
                    <span className="font-semibold mb-4">Legal</span>
                    <ul className="space-y-2 text-gray-400">
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li>Disclaimer</li>
                        <li>DMCA</li>
                    </ul>
                </div>
            </div>

            <div className="flex space-x-4 flex-wrap justify-center items-center t-12 py-6">
                {locales.map((locale) => (
                    <span key={locale}>
                    <a href={locale === defaultLocale ? '/' : `/${locale}`}>{localeNames[locale]}</a>
                    </span>
                ))}
            </div>
            
            <div className="border-t border-gray-800 pt-2 text-center text-gray-400">
                <p>&copy; 2024 TeraBox Downloader. All rights reserved. This site is not affiliated with TeraBox.</p>
            </div>
        </div>
    </footer>
   
  )
}
