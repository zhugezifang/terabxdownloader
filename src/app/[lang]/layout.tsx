import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
//import { ThemeProvider } from "@/components/theme-provider";
import { locales, defaultLocale } from '@/i18n/config'
import type { Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import { Toaster } from "react-hot-toast"
import { BreadcrumbWrapper } from "@/components/breadcrumb-wrapper"

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
  console.log(params.lang)
  const dict = await getDictionary(params.lang)
  const url = process.env.NEXT_PUBLIC_APP_URL || 'https://your-domain.com'
  
  // 动态构建语言切换配置
  const languages: Record<string, string> = {}
  locales.forEach(locale => {
    if (locale === defaultLocale) {
      languages[locale] = url
    } else {
      languages[locale] = `${url}/${locale}`
    }
  })
  
  return {
    title: {
      default: dict.indexLanguageText.title,
      template: `%s`
    },
    description: dict.indexLanguageText.description,
    keywords: '',
    authors: [{ name: 'yeheboo' }],
    metadataBase: new URL(url),
    alternates: {
      canonical: params.lang === defaultLocale ? url : `${url}/${params.lang}`,
      languages: languages,
    },
    openGraph: {
      type: 'website',
      locale: params.lang,
      url: params.lang === defaultLocale ? url : `${url}/${params.lang}`,
      title: dict.indexLanguageText.title,
      description: dict.indexLanguageText.description,
      siteName: dict.common.brand
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.indexLanguageText.title,
      description: dict.indexLanguageText.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }))
}

export default async function RootLayout({
  children,
  params: { lang }
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  const dict = await getDictionary(lang)
  const navbar = await Navbar({ lang });
  const footer = await Footer({ lang });

  
  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4158779929727637"
           crossOrigin="anonymous"></script>
      <meta name="google-site-verification" content="UuFT61A3zra1kfyVyhHqNZffLbgbBw_OdgNpWNH0TnI" />
      <script
                  async
                  src={`https://www.googletagmanager.com/gtag/js?id=G-L0VWX66HCQ`}
      />
      <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-L0VWX66HCQ');
            `,
          }}
      />
      <script async src='https://platform-api.sharethis.com/js/sharethis.js#property=6714ad2d10ca00001277ac7d&product=sop'>
      </script> 
      <link rel="icon" href="favicon.ico" type="image/png"/>

      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet"/>
      </head>
      <body className="bg-gray-50 font-sans">
        
          <Toaster position="top-center" />
          <div className="relative flex min-h-screen flex-col">
            
            {navbar}
            <main className="">
              <BreadcrumbWrapper lang={lang} dict={dict} />
              {children}
            </main>
            {footer}
          </div>
      </body>
    </html>
  )
}
