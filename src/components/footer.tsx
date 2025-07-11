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

    <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
                <div>
                    <span className="text-lg font-semibold mb-4">{dict.footer.title}</span>
                    <p className="text-gray-400">{dict.footer.subtitle}</p>
                </div>
                <div>
                    <span className="font-semibold mb-4">{dict.footer.quickLinks}</span>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="#how-to-use" className="hover:text-white">{dict.footer.howToUse}</a></li>
                        <li><a href="#features" className="hover:text-white">{dict.footer.features}</a></li>
                        <li><a href="#faq" className="hover:text-white">{dict.footer.faq}</a></li>
                    </ul>
                </div>
                <div>
                    <span className="font-semibold mb-4">{dict.footer.support}</span>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="#" className="hover:text-white">{dict.footer.contactUs}</a></li>
                        <li><a href={`/${lang}/privacy`} className="hover:text-white">{dict.footer.privacyPolicy}</a></li>
                        <li><a href={`/${lang}/terms`} className="hover:text-white">{dict.footer.termsOfService}</a></li>
                    </ul>
                </div>
                <div>
                    <span className="font-semibold mb-4">{dict.footer.about}</span>
                    <p className="text-gray-400">{dict.footer.aboutDescription}</p>
                </div>
            </div>
            <div className="flex space-x-4 flex-wrap justify-center items-center t-12 mt-6 my-6">
                {locales.map((locale) => (
                    <span key={locale}>
                    <a href={locale === defaultLocale ? '/' : `/${locale}`}>{localeNames[locale]}</a>
                    </span>
                ))}
            </div>
            <div className="border-t border-gray-800 text-center text-gray-400">
                <p>&copy; {dict.footer.copyright}</p>
            </div>
        </div>
    </footer>
  )
}
