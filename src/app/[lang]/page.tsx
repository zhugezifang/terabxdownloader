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

<section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    {dict.home.hero.title}
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                    {dict.home.hero.description}
                </p>

                <RednoteVideoDownloader lang={params.lang} dict={dict} />


            </div>
        </div>
    </section>

    <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {dict.home.whatIsTeraBox.title}
                </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <div className="space-y-6">
                        <div className="flex items-start">
                            <i className="fas fa-cloud text-blue-600 text-2xl mr-4 mt-1"></i>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{dict.home.whatIsTeraBox.cloudStorage.title}</h3>
                                <p className="text-gray-600">
                                    {dict.home.whatIsTeraBox.cloudStorage.description}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <i className="fas fa-users text-green-600 text-2xl mr-4 mt-1"></i>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{dict.home.whatIsTeraBox.fileSharing.title}</h3>
                                <p className="text-gray-600">
                                    {dict.home.whatIsTeraBox.fileSharing.description}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <i className="fas fa-lock text-red-600 text-2xl mr-4 mt-1"></i>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{dict.home.whatIsTeraBox.downloadLimitations.title}</h3>
                                <p className="text-gray-600">
                                    {dict.home.whatIsTeraBox.downloadLimitations.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-8">
                    <div className="text-center">
                        <i className="fas fa-magic text-blue-600 text-4xl mb-4"></i>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{dict.home.whatIsTeraBox.whyUseOurDownloader.title}</h3>
                        <div className="space-y-4 text-left">
                            {dict.home.whatIsTeraBox.whyUseOurDownloader.benefits.map((benefit: string, index: number) => (
                                <div key={index} className="flex items-center">
                                    <i className="fas fa-check-circle text-green-600 mr-3"></i>
                                    <span className="text-gray-700">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="features" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {dict.home.features.title}
                </h2>
                <p className="text-lg text-gray-600">
                    {dict.home.features.subtitle}
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {dict.home.features.items.map((item: any, index: number) => (
                    <div key={index} className="text-center p-6 rounded-lg bg-blue-50">
                        <i className="fas fa-bolt text-blue-600 text-3xl mb-4"></i>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </section>

    <section id="how-to-use" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {dict.home.howToUse.title}
                </h2>
                <p className="text-lg text-gray-600">
                    {dict.home.howToUse.subtitle}
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {dict.home.howToUse.steps.map((step: any, index: number) => (
                    <div key={index} className="text-center">
                        <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">{index + 1}</div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-600">
                            {step.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </section>

    <section id="faq" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {dict.home.faq.title}
                </h2>
                <p className="text-lg text-gray-600">
                    {dict.home.faq.subtitle}
                </p>
            </div>

            <div className="space-y-6">
                {dict.home.faq.questions.map((faq: any, index: number) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {faq.question}
                        </h3>
                        <p className="text-gray-600">
                            {faq.answer}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </section>

    </>
  )
}