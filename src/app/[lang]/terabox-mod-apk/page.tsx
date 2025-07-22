import { Metadata } from 'next'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CheckCircle, Play, Download, Shield, Zap, Globe, Users, Star } from 'lucide-react'
import { Locale } from '@/i18n/config'
import { getDictionary } from "@/i18n/get-dictionary";
import RednoteVideoDownloader from "@/components/RednoteVideoDownloader"

export const runtime = 'edge';


export const metadata: Metadata = {
    
  title: 'Download Terabox Mod APK Latest Version For Android [Premium Unlocked]',
  description: 'Download the latest version of Terabox Mod APK with premium features unlocked for free. Safe, secure, and free to download.',
  alternates: {
          canonical: `${process.env.NEXT_PUBLIC_APP_URL}/terabox-mod-apk`
  }
}

export default async function TeraBoxPlayerPage({ params }: { params: { lang: Locale } }) {
    const dict = await getDictionary(params.lang) as any;
  return (
   <>
    <div className="bg-gradient-to-r from-primary to-primary/80 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6 md:py-8">
            <div className="mt-10 md:mt-16 text-center max-w-3xl mx-auto">
                <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight text-shadow mb-4">
                   Download Terabox Mod APK Latest Version For Android <span className="text-secondary">Premium Unblocked</span>
                </h2>
                <p className="text-lg md:text-xl opacity-90 mb-8">
                    Download the latest version of Terabox Mod with premium features unlocked for free.
                    Enjoy unlimited cloud storage and ad-free experience.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a target="_blank" href="https://www.dropbox.com/scl/fi/w0bvs26lqx3rmcgr6d0z6/TeraBox-v4.2.1-MOD-theteraboxapps.com.apk?rlkey=osgryz9l8icer33dpqgko9yem&st=zr4c11qo&dl=1" className="bg-secondary hover:bg-secondary/90 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all transform hover:scale-105">
                        <i className="fa fa-download mr-2"></i> Download Now
                    </a>
                </div>
            </div>
        </div>
    </div>

    <main className="container mx-auto px-4 py-12 md:py-16">
        <section className="mb-16">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="md:flex">
                    <div className="md:w-1/2 p-8 md:p-12 flex items-center">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary">What is Terabox Mod APK?</h3>
                            <p className="text-gray-700 mb-6">
                                Terabox Mod APK is a modified version of the original Terabox cloud storage application.
                                It offers premium features for free, including unlimited storage space, faster download speeds,
                                and an ad-free experience.
                            </p>
                            <p className="text-gray-700 mb-6">
                                With Terabox Mod, you can easily store, share, and manage all your files securely on the cloud.
                                Perfect for backup, sharing large files, and accessing your data from anywhere.
                            </p>
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center">
                                    <i className="fa fa-star text-yellow-400"></i>
                                    <i className="fa fa-star text-yellow-400"></i>
                                    <i className="fa fa-star text-yellow-400"></i>
                                    <i className="fa fa-star text-yellow-400"></i>
                                    <i className="fa fa-star text-yellow-400"></i>
                                </div>
                                <span className="text-gray-600">5.0/5 from 10K+ users</span>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 bg-gray-100 p-8 md:p-12 flex justify-center items-center">
                        <img src="/images/terabox_app.webp" alt="Terabox Mod APK Interface" className="rounded-lg shadow-lg max-w-full h-auto"/>
                    </div>
                </div>
            </div>
        </section>

        <section id="features" className="mb-16">
            <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Terabox Mod APK?</h3>
                <p className="text-gray-600 max-w-3xl mx-auto">
                    Discover the premium features that make Terabox Mod APK the best choice for cloud storage.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl shadow-lg p-6 card-hover">
                    <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                        <i className="fa fa-infinity text-primary text-2xl"></i>
                    </div>
                    <h4 className="text-xl font-bold mb-3">Unlimited Storage</h4>
                    <p className="text-gray-600">
                        Store as many files as you want without worrying about running out of space.
                        No more deleting files to free up storage.
                    </p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 card-hover">
                    <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                        <i className="fa fa-ban text-primary text-2xl"></i>
                    </div>
                    <h4 className="text-xl font-bold mb-3">Ad-Free Experience</h4>
                    <p className="text-gray-600">
                        Enjoy a clean and distraction-free interface with no ads interrupting your workflow.
                    </p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 card-hover">
                    <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                        <i className="fa fa-rocket text-primary text-2xl"></i>
                    </div>
                    <h4 className="text-xl font-bold mb-3">Faster Downloads</h4>
                    <p className="text-gray-600">
                        Download your files at maximum speed without any bandwidth restrictions.
                    </p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 card-hover">
                    <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                        <i className="fa fa-lock text-primary text-2xl"></i>
                    </div>
                    <h4 className="text-xl font-bold mb-3">Enhanced Security</h4>
                    <p className="text-gray-600">
                        Advanced encryption ensures your files are secure and private at all times.
                    </p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 card-hover">
                    <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                        <i className="fa fa-share-alt text-primary text-2xl"></i>
                    </div>
                    <h4 className="text-xl font-bold mb-3">Easy Sharing</h4>
                    <p className="text-gray-600">
                        Share files and folders with friends and colleagues with just a few clicks.
                    </p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 card-hover">
                    <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                        <i className="fa fa-download text-primary text-2xl"></i>
                    </div>
                    <h4 className="text-xl font-bold mb-3">Offline Access</h4>
                    <p className="text-gray-600">
                        Download files for offline viewing and access them anytime, anywhere.
                    </p>
                </div>
            </div>
        </section>

        <section id="download" className="mb-16">
            <div className="bg-gradient-to-br from-primary/90 to-primary rounded-2xl shadow-xl p-8 md:p-12 text-white">
                <div className="text-center mb-10">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">Download Terabox Mod APK</h3>
                    <p className="text-white/80 max-w-2xl mx-auto">
                        Get the latest version of Terabox Mod APK with all premium features unlocked.
                        Safe, secure, and free to download.
                    </p>
                </div>

                <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                        <div className="flex-shrink-0">
                            <div className="bg-white rounded-lg shadow-lg p-4">
                                <img src="https://picsum.photos/seed/teraboxlogo/120/120" alt="Terabox Mod APK Logo" className="w-24 h-24 rounded"/>
                            </div>
                        </div>
                        <div className="flex-grow">
                            <div className="flex flex-wrap gap-4 mb-4">
                                <span className="bg-white/20 px-4 py-1 rounded-full text-sm">
                                    <i className="fa fa-file-archive-o mr-1"></i> APK File
                                </span>
                                <span className="bg-white/20 px-4 py-1 rounded-full text-sm">
                                    <i className="fa fa-calendar mr-1"></i> Updated: July 19, 2025
                                </span>
                                <span className="bg-white/20 px-4 py-1 rounded-full text-sm">
                                    <i className="fa fa-check-circle mr-1"></i> Safe & Secure
                                </span>
                            </div>
                            <h4 className="text-2xl font-bold mb-2">Terabox Mod APK v2.8.5</h4>
                            <p className="text-white/80 mb-6">
                                The latest version with bug fixes and performance improvements.
                                Requires Android 5.0+
                            </p>
                            <a href="#" className="block text-center bg-secondary hover:bg-secondary/90 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all transform hover:scale-105">
                                <i className="fa fa-download mr-2"></i> Download APK (24.5 MB)
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-10 text-center">
                    <h4 className="text-xl font-semibold mb-4">How to Install Terabox Mod APK</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                        <div className="bg-white/10 rounded-lg p-4">
                            <div className="text-2xl font-bold mb-2">1</div>
                            <p className="text-white/80">
                                Enable "Unknown Sources" in your Android settings under Security.
                            </p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-4">
                            <div className="text-2xl font-bold mb-2">2</div>
                            <p className="text-white/80">
                                Download the Terabox Mod APK file from the link above.
                            </p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-4">
                            <div className="text-2xl font-bold mb-2">3</div>
                            <p className="text-white/80">
                                Tap on the downloaded file to install it. Follow the on-screen instructions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="mb-16">
            <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">Terabox Mod APK Screenshots</h3>
                <p className="text-gray-600 max-w-3xl mx-auto">
                    See the interface and features of Terabox Mod APK in action.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
                    <img src="https://picsum.photos/seed/terabox1/400/600" alt="Terabox Mod APK File Manager" className="w-full h-64 object-cover"/>
                    <div className="p-4">
                        <h4 className="font-semibold">File Manager</h4>
                        <p className="text-gray-600 text-sm">Organize and manage your files easily.</p>
                    </div>
                </div>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
                    <img src="https://picsum.photos/seed/terabox2/400/600" alt="Terabox Mod APK Upload Screen" className="w-full h-64 object-cover"/>
                    <div className="p-4">
                        <h4 className="font-semibold">Upload Files</h4>
                        <p className="text-gray-600 text-sm">Upload files quickly with enhanced speed.</p>
                    </div>
                </div>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
                    <img src="https://picsum.photos/seed/terabox3/400/600" alt="Terabox Mod APK Sharing Options" className="w-full h-64 object-cover"/>
                    <div className="p-4">
                        <h4 className="font-semibold">Sharing Options</h4>
                        <p className="text-gray-600 text-sm">Share files with friends and family effortlessly.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="faq" className="mb-16">
            <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h3>
                <p className="text-gray-600 max-w-3xl mx-auto">
                    Find answers to common questions about Terabox Mod APK.
                </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <button className="w-full text-left p-6 focus:outline-none faq-toggle">
                        <div className="flex justify-between items-center">
                            <h4 className="text-lg font-semibold">Is Terabox Mod APK safe to use?</h4>
                            <i className="fa fa-chevron-down text-primary transition-transform duration-300"></i>
                        </div>
                    </button>
                    <div className="px-6 pb-6 faq-content">
                        <p className="text-gray-600">
                            Yes, Terabox Mod APK is safe to use. We ensure that our modified version is free from
                            any malware or viruses. However, it's always recommended to download apps from trusted sources
                            and use a good antivirus on your device.
                        </p>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <button className="w-full text-left p-6 focus:outline-none faq-toggle">
                        <div className="flex justify-between items-center">
                            <h4 className="text-lg font-semibold">What's the difference between Terabox Mod and the original app?</h4>
                            <i className="fa fa-chevron-down text-primary transition-transform duration-300"></i>
                        </div>
                    </button>
                    <div className="px-6 pb-6 faq-content">
                        <p className="text-gray-600">
                            The original Terabox app offers limited free storage and includes ads. Terabox Mod APK,
                            on the other hand, provides unlimited storage space, removes all ads, and unlocks premium
                            features such as faster download speeds and enhanced security options for free.
                        </p>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <button className="w-full text-left p-6 focus:outline-none faq-toggle">
                        <div className="flex justify-between items-center">
                            <h4 className="text-lg font-semibold">Do I need to root my device to install Terabox Mod?</h4>
                            <i className="fa fa-chevron-down text-primary transition-transform duration-300"></i>
                        </div>
                    </button>
                    <div className="px-6 pb-6 faq-content">
                        <p className="text-gray-600">
                            No, you don't need to root your Android device to install Terabox Mod APK. It can be
                            installed and used on non-rooted devices without any issues.
                        </p>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <button className="w-full text-left p-6 focus:outline-none faq-toggle">
                        <div className="flex justify-between items-center">
                            <h4 className="text-lg font-semibold">Will my files be secure on Terabox Mod?</h4>
                            <i className="fa fa-chevron-down text-primary transition-transform duration-300"></i>
                        </div>
                    </button>
                    <div className="px-6 pb-6 faq-content">
                        <p className="text-gray-600">
                            Yes, your files are secure. Terabox Mod uses the same encryption as the original app.
                            However, since it's a modified version, we recommend not storing highly sensitive information
                            and using it primarily for general file storage and sharing.
                        </p>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <button className="w-full text-left p-6 focus:outline-none faq-toggle">
                        <div className="flex justify-between items-center">
                            <h4 className="text-lg font-semibold">How often is Terabox Mod APK updated?</h4>
                            <i className="fa fa-chevron-down text-primary transition-transform duration-300"></i>
                        </div>
                    </button>
                    <div className="px-6 pb-6 faq-content">
                        <p className="text-gray-600">
                            We update Terabox Mod APK as soon as the official version is updated. This ensures
                            that you get all the latest features, bug fixes, and security updates in a timely manner.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section id="changelog" className="mb-16">
            <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">Version Changelog</h3>
                <p className="text-gray-600 max-w-3xl mx-auto">
                    See what's new in the latest version of Terabox Mod APK.
                </p>
            </div>

            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-primary text-white p-6">
                    <h4 className="text-xl font-bold">Version 2.8.5 (July 19, 2025)</h4>
                </div>
                <div className="p-6">
                    <ul className="space-y-3">
                        <li className="flex items-start">
                            <i className="fa fa-check-circle text-green-500 mt-1 mr-3"></i>
                            <span>Added unlimited storage capacity for all users</span>
                        </li>
                        <li className="flex items-start">
                            <i className="fa fa-check-circle text-green-500 mt-1 mr-3"></i>
                            <span>Improved download speeds by optimizing network protocols</span>
                        </li>
                        <li className="flex items-start">
                            <i className="fa fa-check-circle text-green-500 mt-1 mr-3"></i>
                            <span>Removed all ads and promotional content</span>
                        </li>
                        <li className="flex items-start">
                            <i className="fa fa-check-circle text-green-500 mt-1 mr-3"></i>
                            <span>Fixed issues with file sharing and collaboration features</span>
                        </li>
                        <li className="flex items-start">
                            <i className="fa fa-check-circle text-green-500 mt-1 mr-3"></i>
                            <span>Enhanced security with improved encryption algorithms</span>
                        </li>
                        <li className="flex items-start">
                            <i className="fa fa-check-circle text-green-500 mt-1 mr-3"></i>
                            <span>Optimized app performance for better battery life</span>
                        </li>
                    </ul>
                </div>

                <div className="border-t border-gray-200 p-6">
                    <h5 className="text-lg font-semibold mb-3">Older Versions</h5>
                    <div className="space-y-4">
                        <div>
                            <h6 className="font-medium">Version 2.8.0 (June 15, 2025)</h6>
                            <ul className="list-disc pl-5 mt-2 text-sm text-gray-600 space-y-1">
                                <li>Added offline viewing for all file types</li>
                                <li>Improved user interface with new themes</li>
                                <li>Fixed occasional crashes during file uploads</li>
                            </ul>
                        </div>
                        <div>
                            <h6 className="font-medium">Version 2.7.5 (May 20, 2025)</h6>
                            <ul className="list-disc pl-5 mt-2 text-sm text-gray-600 space-y-1">
                                <li>Added support for larger file uploads</li>
                                <li>Improved search functionality</li>
                                <li>Optimized storage management system</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    </>
  )
}
