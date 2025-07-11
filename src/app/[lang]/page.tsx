import type { Locale } from '@/i18n/config'
import { getPost } from "@/lib/getPost";
import { getDictionary } from "@/i18n/get-dictionary";
import Link from "next/link";
import RednoteVideoDownloader from "@/components/RednoteVideoDownloader"

export const runtime = 'edge'

export default async function Home({
  params
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(params.lang) as any;
  const lang = params.lang==='en'?'':`${params.lang}`;
  

  return (
    <>
        <section className="bg-gradient-to-br from-red-50 to-pink-50 py-8">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    {dict.hero.title}
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                    {dict.hero.description}
                </p>

                <RednoteVideoDownloader lang={params.lang} dict={dict} />
                
            </div>
        </section>

        <div className="max-w-6xl mx-auto my-6 p-6 bg-blue-50 rounded-lg border border-blue-200">
            <h2 className="text-lg font-semibold text-blue-800 mb-4">{dict.supportedFormats.title}</h2>
            <div className="space-y-3">
                <div className="bg-white p-3 rounded border border-blue-100">
                    <p className="text-sm text-gray-600 mb-2">{dict.supportedFormats.fullLinkFormat}</p>
                    <code className="text-sm bg-gray-100 p-2 rounded block break-all">
                        https://www.xiaohongshu.com/explore/682f0a720000000022027d98?xsec_token=ABDxSJmKJEEWeDG0WNzLaFD_yaKvfUSWzgtUGYO25dfmQ=&xsec_source=pc_user
                    </code>
                </div>
                <div className="bg-white p-3 rounded border border-blue-100">
                    <p className="text-sm text-gray-600 mb-2">{dict.supportedFormats.shortLinkFormat}</p>
                    <code className="text-sm bg-gray-100 p-2 rounded block break-all">
                        https://xhslink.com/a/dJ3H4QqNIcOfb
                    </code>
                </div>
            </div>
        </div>

        <section id="what-is-rednote" className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">{dict.whatIsRedNote.title}</h2>
                <div className="max-w-4xl mx-auto mb-12">
                    <p className="text-lg text-gray-600 leading-relaxed text-center">
                        {dict.whatIsRedNote.description}
                    </p>
                </div>

                {/* 小红书应用截图展示 */}
                <div className="max-w-3xl mx-auto mb-12">
                    <div className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-2xl">
                        <img 
                            src="https://www.advocate.com/media-library/rednote-app-xiaohongshu-little-red-book.jpg?id=55572576&width=1245&height=700&quality=85&coordinates=0%2C0%2C0%2C0" 
                            alt="rednote app" 
                            className="w-full max-w-md mx-auto rounded-lg shadow-lg"
                        />
                    </div>
                </div>
                
                <div className="mb-12">
                    <h3 className="text-2xl font-semibold mb-8 text-center">{dict.whatIsRedNote.features.title}</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-gradient-to-br from-pink-50 to-red-50 p-6 rounded-lg">
                            <div className="text-red-600 mb-4">
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"/>
                                </svg>
                            </div>
                            <h4 className="text-lg font-semibold mb-2">{dict.whatIsRedNote.features.lifestyle.title}</h4>
                            <p className="text-gray-600 text-sm">{dict.whatIsRedNote.features.lifestyle.description}</p>
                        </div>
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg">
                            <div className="text-blue-600 mb-4">
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                </svg>
                            </div>
                            <h4 className="text-lg font-semibold mb-2">{dict.whatIsRedNote.features.reviews.title}</h4>
                            <p className="text-gray-600 text-sm">{dict.whatIsRedNote.features.reviews.description}</p>
                        </div>
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg">
                            <div className="text-green-600 mb-4">
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM6 16a2 2 0 11-4 0 2 2 0 014 0zM7 8a2 2 0 100-4 2 2 0 000 4zm7 8a2 2 0 100-4 2 2 0 000 4z"/>
                                </svg>
                            </div>
                            <h4 className="text-lg font-semibold mb-2">{dict.whatIsRedNote.features.shopping.title}</h4>
                            <p className="text-gray-600 text-sm">{dict.whatIsRedNote.features.shopping.description}</p>
                        </div>
                        <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-lg">
                            <div className="text-purple-600 mb-4">
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                                </svg>
                            </div>
                            <h4 className="text-lg font-semibold mb-2">{dict.whatIsRedNote.features.community.title}</h4>
                            <p className="text-gray-600 text-sm">{dict.whatIsRedNote.features.community.description}</p>
                        </div>
                    </div>
                </div>
                
                <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-8 rounded-lg text-center">
                    <p className="text-lg font-medium">{dict.whatIsRedNote.popularity}</p>
                </div>
            </div>
        </section>

        <section id="how-to-use" className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">{dict.howToUse.title}</h2>
                <div className="grid md:grid-cols-4 gap-8">
                    <div className="text-center">
                        <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl font-bold text-red-600">1</span>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{dict.howToUse.steps.step1.title}</h3>
                        <p className="text-gray-600">{dict.howToUse.steps.step1.description}</p>
                    </div>
                    <div className="text-center">
                        <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl font-bold text-red-600">2</span>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{dict.howToUse.steps.step2.title}</h3>
                        <p className="text-gray-600">{dict.howToUse.steps.step2.description}</p>
                    </div>
                    <div className="text-center">
                        <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl font-bold text-red-600">3</span>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{dict.howToUse.steps.step3.title}</h3>
                        <p className="text-gray-600">{dict.howToUse.steps.step3.description}</p>
                    </div>
                    <div className="text-center">
                        <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl font-bold text-red-600">4</span>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{dict.howToUse.steps.step4.title}</h3>
                        <p className="text-gray-600">{dict.howToUse.steps.step4.description}</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="features" className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">{dict.features.title}</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="text-red-600 mb-4">
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9 5a2 2 0 114 0 2 2 0 01-4 0zM7 8a4 4 0 118 0v1h2a1 1 0 011 1v3a1 1 0 01-1 1H3a1 1 0 01-1-1v-3a1 1 0 011-1h2V8z"/>
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">{dict.features.items.noWatermark.title}</h3>
                        <p className="text-gray-600">{dict.features.items.noWatermark.description}</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="text-red-600 mb-4">
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">{dict.features.items.highQuality.title}</h3>
                        <p className="text-gray-600">{dict.features.items.highQuality.description}</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="text-red-600 mb-4">
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"/><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"/>
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">{dict.features.items.fastSecure.title}</h3>
                        <p className="text-gray-600">{dict.features.items.fastSecure.description}</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="text-red-600 mb-4">
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"/>
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">{dict.features.items.allFormats.title}</h3>
                        <p className="text-gray-600">{dict.features.items.allFormats.description}</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="text-red-600 mb-4">
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">{dict.features.items.free.title}</h3>
                        <p className="text-gray-600">{dict.features.items.free.description}</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="text-red-600 mb-4">
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"/>
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">{dict.features.items.noInstall.title}</h3>
                        <p className="text-gray-600">{dict.features.items.noInstall.description}</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">{dict.devices.title}</h2>
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">{dict.devices.mobile.title}</h3>
                        <p className="text-gray-600 mb-4">
                            {dict.devices.mobile.description1}
                        </p>
                        <p className="text-gray-600">
                            {dict.devices.mobile.description2}
                        </p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">{dict.devices.desktop.title}</h3>
                        <p className="text-gray-600 mb-4">
                            {dict.devices.desktop.description1}
                        </p>
                        <p className="text-gray-600">
                            {dict.devices.desktop.description2}
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section id="faq" className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">{dict.faq.title}</h2>
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold mb-3">{dict.faq.items.free.question}</h3>
                        <p className="text-gray-600">{dict.faq.items.free.answer}</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold mb-3">{dict.faq.items.install.question}</h3>
                        <p className="text-gray-600">{dict.faq.items.install.answer}</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold mb-3">{dict.faq.items.quality.question}</h3>
                        <p className="text-gray-600">{dict.faq.items.quality.answer}</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold mb-3">{dict.faq.items.safe.question}</h3>
                        <p className="text-gray-600">{dict.faq.items.safe.answer}</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold mb-3">{dict.faq.items.private.question}</h3>
                        <p className="text-gray-600">{dict.faq.items.private.answer}</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold mb-3">{dict.faq.items.url.question}</h3>
                        <p className="text-gray-600">{dict.faq.items.url.answer}</p>
                    </div>
                </div>
            </div>
        </section>

    </>
  )
}
