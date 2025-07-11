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
                    Free TeraBox Downloader
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                    The fastest and most reliable TeraBox Downloader tool. Convert TeraBox links to direct download links instantly. No registration required, completely free to use.
                </p>

                <RednoteVideoDownloader lang={params.lang} dict={dict} />
                
                
            </div>
        </div>
    </section>

    <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    What is TeraBox?
                </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <div className="space-y-6">
                        <div className="flex items-start">
                            <i className="fas fa-cloud text-blue-600 text-2xl mr-4 mt-1"></i>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cloud Storage Platform</h3>
                                <p className="text-gray-600">
                                    TeraBox is a popular cloud storage service that allows users to store, share, and access files online. With generous free storage space, it's widely used for backing up and sharing large files.
                                </p>
                            </div>
                        </div>
                        
                        <div className="flex items-start">
                            <i className="fas fa-users text-green-600 text-2xl mr-4 mt-1"></i>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">File Sharing Made Easy</h3>
                                <p className="text-gray-600">
                                    TeraBox enables users to share files and folders with others through shareable links. However, downloading shared files often requires creating an account or installing their app.
                                </p>
                            </div>
                        </div>
                        
                        <div className="flex items-start">
                            <i className="fas fa-lock text-red-600 text-2xl mr-4 mt-1"></i>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Download Limitations</h3>
                                <p className="text-gray-600">
                                    TeraBox requires users to sign up, install apps, or face speed limitations when downloading files. This is where our TeraBox Downloader comes in handy.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-8">
                    <div className="text-center">
                        <i className="fas fa-magic text-blue-600 text-4xl mb-4"></i>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Use Our TeraBox Downloader?</h3>
                        <div className="space-y-4 text-left">
                            <div className="flex items-center">
                                <i className="fas fa-check-circle text-green-600 mr-3"></i>
                                <span className="text-gray-700">No TeraBox account required</span>
                            </div>
                            <div className="flex items-center">
                                <i className="fas fa-check-circle text-green-600 mr-3"></i>
                                <span className="text-gray-700">No app installation needed</span>
                            </div>
                            <div className="flex items-center">
                                <i className="fas fa-check-circle text-green-600 mr-3"></i>
                                <span className="text-gray-700">Bypass download speed limits</span>
                            </div>
                            <div className="flex items-center">
                                <i className="fas fa-check-circle text-green-600 mr-3"></i>
                                <span className="text-gray-700">Direct download links</span>
                            </div>
                            <div className="flex items-center">
                                <i className="fas fa-check-circle text-green-600 mr-3"></i>
                                <span className="text-gray-700">Works on all devices</span>
                            </div>
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
                    Why Choose Our TeraBox Downloader?
                </h2>
                <p className="text-lg text-gray-600">
                    Our TeraBox Downloader offers the best user experience with advanced features
                </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center p-6 rounded-lg bg-blue-50">
                    <i className="fas fa-bolt text-blue-600 text-3xl mb-4"></i>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Lightning Fast</h3>
                    <p className="text-gray-600">
                        Generate direct download links from TeraBox in seconds. Our TeraBox Downloader processes links instantly.
                    </p>
                </div>
                
                <div className="text-center p-6 rounded-lg bg-green-50">
                    <i className="fas fa-shield-alt text-green-600 text-3xl mb-4"></i>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">100% Safe & Secure</h3>
                    <p className="text-gray-600">
                        Your privacy is protected. We don't store your files or personal information when using our TeraBox Downloader.
                    </p>
                </div>
                
                <div className="text-center p-6 rounded-lg bg-purple-50">
                    <i className="fas fa-mobile-alt text-purple-600 text-3xl mb-4"></i>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Mobile Friendly</h3>
                    <p className="text-gray-600">
                        Access the TeraBox Downloader from any device - desktop, tablet, or mobile phone.
                    </p>
                </div>
                
                <div className="text-center p-6 rounded-lg bg-orange-50">
                    <i className="fas fa-gift text-orange-600 text-3xl mb-4"></i>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Completely Free</h3>
                    <p className="text-gray-600">
                        No hidden fees, no subscription required. Our TeraBox Downloader is free for everyone.
                    </p>
                </div>
                
                <div className="text-center p-6 rounded-lg bg-red-50">
                    <i className="fas fa-user-slash text-red-600 text-3xl mb-4"></i>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No Registration</h3>
                    <p className="text-gray-600">
                        Start using the TeraBox Downloader immediately without creating an account or signing up.
                    </p>
                </div>
                
                <div className="text-center p-6 rounded-lg bg-indigo-50">
                    <i className="fas fa-file-download text-indigo-600 text-3xl mb-4"></i>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">All File Types</h3>
                    <p className="text-gray-600">
                        Download videos, documents, images, and any file type from TeraBox using our downloader.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section id="how-to-use" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    How to Use TeraBox Downloader
                </h2>
                <p className="text-lg text-gray-600">
                    Follow these simple steps to download files from TeraBox
                </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                    <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Copy TeraBox Link</h3>
                    <p className="text-gray-600">
                        Copy the TeraBox file or folder link you want to download
                    </p>
                </div>
                
                <div className="text-center">
                    <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Paste in TeraBox Downloader</h3>
                    <p className="text-gray-600">
                        Paste the link into our TeraBox Downloader input field above
                    </p>
                </div>
                
                <div className="text-center">
                    <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Generate Link</h3>
                    <p className="text-gray-600">
                        Click the generate button to create direct download links
                    </p>
                </div>
                
                <div className="text-center">
                    <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Download Files</h3>
                    <p className="text-gray-600">
                        Click the download button to save files to your device
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section id="faq" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Frequently Asked Questions
                </h2>
                <p className="text-lg text-gray-600">
                    Everything you need to know about our TeraBox Downloader
                </p>
            </div>
            
            <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        What is TeraBox Downloader?
                    </h3>
                    <p className="text-gray-600">
                        TeraBox Downloader is a free online tool that converts TeraBox sharing links into direct download links, allowing you to download files without the need for a TeraBox account or app installation.
                    </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Is the TeraBox Downloader free to use?
                    </h3>
                    <p className="text-gray-600">
                        Yes, our TeraBox Downloader is completely free. There are no hidden charges, subscription fees, or premium features. You can use it unlimited times without any cost.
                    </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Do I need to create an account to use TeraBox Downloader?
                    </h3>
                    <p className="text-gray-600">
                        No registration is required. You can start using our TeraBox Downloader immediately without creating an account, providing personal information, or signing up for anything.
                    </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        What file types can I download with TeraBox Downloader?
                    </h3>
                    <p className="text-gray-600">
                        Our TeraBox Downloader supports all file types available on TeraBox, including videos, documents, images, audio files, archives, and more.
                    </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Is it safe to use TeraBox Downloader?
                    </h3>
                    <p className="text-gray-600">
                        Yes, our TeraBox Downloader is completely safe. We don't store your files, personal information, or track your downloads. Your privacy and security are our top priorities.
                    </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Can I use TeraBox Downloader on mobile devices?
                    </h3>
                    <p className="text-gray-600">
                        Absolutely! Our TeraBox Downloader is fully responsive and works perfectly on all devices including smartphones, tablets, and desktop computers.
                    </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Where can I find more information about Terabox-downloader github?
                    </h3>
                    <p className="text-gray-600">
                        You can find more information about Terabox-downloader github <a href="https://github.com/zhugezifang/terabxdownloader" target="_blank" className="text-blue-600 hover:text-blue-700">here</a>.
                    </p>
                </div>
            </div>
        </div>
    </section>

    </>
  )
}
