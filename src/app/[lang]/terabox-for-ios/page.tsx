import { Metadata } from 'next'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CheckCircle, Play, Download, Shield, Zap, Globe, Users, Star } from 'lucide-react'
import { Locale } from '@/i18n/config'
import { getDictionary } from "@/i18n/get-dictionary";
import RednoteVideoDownloader from "@/components/RednoteVideoDownloader"

export const runtime = 'edge';


export const metadata: Metadata = {
    
  title: 'Download Terabox Premium Mod APK for IOS',
  description: 'Download Terabox Mod APK for IOS. Terabox is a cloud storage service that allows you to store and share your files with others. It is a free to download and use cloud storage service that allows you to store and share your files with others.',
  alternates: {
      canonical: `${process.env.NEXT_PUBLIC_APP_URL}/terabox-for-ios`
  }
}

export default async function TeraBoxPlayerPage({ params }: { params: { lang: Locale } }) {
    const dict = await getDictionary(params.lang) as any;
  return (
    <>

    <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-primary/5 to-secondary/5 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
                    <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-tight mb-6">
                        <span className="gradient-text">TeraBox</span> for iOS
                    </h1>
                    <p className="text-[clamp(1rem,2vw,1.25rem)] text-dark/70 mb-8 max-w-xl">
                        The ultimate cloud storage solution for your iOS devices. Securely store, access, and share your files seamlessly across all your devices.
                    </p>
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <a target="_blank" href="https://www.dropbox.com/scl/fi/tx16sx9lr9w9xrwbs0vyd/terabox-1.ipa?rlkey=x11ogfqnocz6qcpke8j3fsqfl&st=549m4p8u&dl=1" className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-3 rounded-xl transition-all shadow-lg shadow-primary/20 text-center flex items-center justify-center">
                            <i className="fa fa-download mr-2"></i> Download Now
                        </a>
                        
                    </div>
                    <div className="flex items-center mt-8 space-x-4">
                        <div className="flex -space-x-2">
                            <img src="https://picsum.photos/id/1005/40/40" alt="User Avatar" className="w-10 h-10 rounded-full border-2 border-white" />
                            <img src="https://picsum.photos/id/1012/40/40" alt="User Avatar" className="w-10 h-10 rounded-full border-2 border-white" />
                            <img src="https://picsum.photos/id/1027/40/40" alt="User Avatar" className="w-10 h-10 rounded-full border-2 border-white" />
                        </div>
                        <div>
                            <div className="flex items-center text-accent">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-half-o"></i>
                                <span className="ml-1 text-dark/70">4.8/5</span>
                            </div>
                            <p className="text-sm text-dark/60">From 10K+ iOS users</p>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 relative">
                    <div className="relative z-10">
                        <img src="https://terabox-downloader.pro/images/terabox_app.webp" alt="TeraBox App Interface" className="rounded-3xl shadow-2xl mx-auto" />
                        <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-accent/20 rounded-xl blur-xl"></div>
                        <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-xl blur-xl"></div>
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-3xl -z-10"></div>
                </div>
            </div>
        </div>
    </section>

    <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-dark/50 font-medium mb-10">TRUSTED BY LEADING COMPANIES</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                <div className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
                    <i className="fa fa-apple text-4xl"></i>
                </div>
                <div className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
                    <i className="fa fa-google text-4xl"></i>
                </div>
                <div className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
                    <i className="fa fa-microsoft text-4xl"></i>
                </div>
                <div className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
                    <i className="fa fa-amazon text-4xl"></i>
                </div>
                <div className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
                    <i className="fa fa-spotify text-4xl"></i>
                </div>
            </div>
        </div>
    </section>

    <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold mb-4">Powerful Features for Your iOS Device</h2>
                <p className="text-dark/70 text-lg">Discover how TeraBox enhances your iOS experience with these amazing features</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl shadow-lg p-8 card-hover border border-gray-100">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                        <i className="fa fa-bolt text-primary text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
                    <p className="text-dark/70">Experience ultra-fast uploads and downloads, even with large files, thanks to our optimized iOS app.</p>
                </div>
                
                <div className="bg-white rounded-2xl shadow-lg p-8 card-hover border border-gray-100">
                    <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                        <i className="fa fa-lock text-secondary text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Bank-Level Security</h3>
                    <p className="text-dark/70">Your files are protected with end-to-end encryption, ensuring only you can access your data.</p>
                </div>
                
                <div className="bg-white rounded-2xl shadow-lg p-8 card-hover border border-gray-100">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                        <i className="fa fa-magic text-accent text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">AI-Powered</h3>
                    <p className="text-dark/70">Smart organization and search features powered by AI make finding your files effortless.</p>
                </div>
                
                <div className="bg-white rounded-2xl shadow-lg p-8 card-hover border border-gray-100">
                    <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center mb-6">
                        <i className="fa fa-cloud-download text-green-600 text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Offline Access</h3>
                    <p className="text-dark/70">Download files for offline viewing, perfect for when you're on the go without internet connection.</p>
                </div>
                
                <div className="bg-white rounded-2xl shadow-lg p-8 card-hover border border-gray-100">
                    <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center mb-6">
                        <i className="fa fa-share-alt text-purple-600 text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Easy Sharing</h3>
                    <p className="text-dark/70">Share files and folders with friends, family, and colleagues with customizable permissions.</p>
                </div>
                
                <div className="bg-white rounded-2xl shadow-lg p-8 card-hover border border-gray-100">
                    <div className="w-14 h-14 rounded-xl bg-red-100 flex items-center justify-center mb-6">
                        <i className="fa fa-history text-red-600 text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Version History</h3>
                    <p className="text-dark/70">Never lose a version of your files with complete version history and recovery options.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-10 md:mb-0 relative">
                    <img src="https://picsum.photos/id/1/600/700" alt="TeraBox App Interface" className="rounded-3xl shadow-2xl mx-auto relative z-10" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-3xl -z-10"></div>
                </div>
                <div className="md:w-1/2 md:pl-12">
                    <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold mb-6">Designed Specifically for iOS</h2>
                    <p className="text-dark/70 text-lg mb-8">
                        TeraBox seamlessly integrates with your iOS ecosystem, providing a native experience that feels like it's part of your device.
                    </p>
                    
                    <div className="space-y-6">
                        <div className="flex items-start">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4 shrink-0">
                                <i className="fa fa-check text-primary"></i>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Works with iCloud</h3>
                                <p className="text-dark/70">Easily transfer files between TeraBox and iCloud without any hassle.</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4 shrink-0">
                                <i className="fa fa-check text-primary"></i>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Share Extension</h3>
                                <p className="text-dark/70">Quickly save content from other apps directly to TeraBox using the share extension.</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4 shrink-0">
                                <i className="fa fa-check text-primary"></i>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Widget Support</h3>
                                <p className="text-dark/70">Access your most important files directly from your home screen with our iOS widgets.</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4 shrink-0">
                                <i className="fa fa-check text-primary"></i>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Face ID & Touch ID</h3>
                                <p className="text-dark/70">Secure your files with biometric authentication for an extra layer of protection.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-10">
                        <a href="#" className="inline-flex items-center text-primary font-semibold hover:underline">
                            Explore all iOS features <i className="fa fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold mb-4">Frequently Asked Questions</h2>
                <p className="text-dark/70 text-lg">Find answers to common questions about TeraBox for iOS</p>
            </div>
            
            <div className="max-w-3xl mx-auto">
                <div className="space-y-6">
                    <div className="bg-white rounded-xl shadow-md overflow-hidden">
                        <button className="faq-toggle w-full flex justify-between items-center p-6 text-left focus:outline-none">
                            <span className="font-semibold text-lg">Is TeraBox safe for free use on iOS?</span>
                            <i className="fa fa-plus text-primary transition-transform"></i>
                        </button>
                        <div className="faq-content p-6 pt-0 border-t border-gray-100">
                            <p className="text-dark/70">Yes, TeraBox offers a free plan for iOS users with 5GB of storage. You can download it from the App Store and start using it right away. For more storage and advanced features, we also offer Pro and Business plans.</p>
                        </div>
                    </div>
                    
                    <div className="bg-white rounded-xl shadow-md overflow-hidden">
                        <button className="faq-toggle w-full flex justify-between items-center p-6 text-left focus:outline-none">
                            <span className="font-semibold text-lg">How does TeraBox protect my files on iOS?</span>
                            <i className="fa fa-plus text-primary transition-transform"></i>
                        </button>
                        <div className="faq-content p-6 pt-0 border-t border-gray-100">
                            <p className="text-dark/70">TeraBox uses bank-level encryption to protect your files both during transmission and while stored on our servers. Additionally, our iOS app supports Face ID and Touch ID for secure, biometric authentication. For Pro and Business users, we offer advanced security features like two-factor authentication and remote wipe.</p>
                        </div>
                    </div>
                    
                    <div className="bg-white rounded-xl shadow-md overflow-hidden">
                        <button className="faq-toggle w-full flex justify-between items-center p-6 text-left focus:outline-none">
                            <span className="font-semibold text-lg">Can I access my TeraBox files offline on iOS?</span>
                            <i className="fa fa-plus text-primary transition-transform"></i>
                        </button>
                        <div className="faq-content p-6 pt-0 border-t border-gray-100">
                            <p className="text-dark/70">Yes, with TeraBox Pro and Business plans, you can mark files and folders for offline access on your iOS device. This means you can view, edit, and work with your files even when you don't have an internet connection. Changes you make offline will automatically sync once you're back online.</p>
                        </div>
                    </div>
                    
                    <div className="bg-white rounded-xl shadow-md overflow-hidden">
                        <button className="faq-toggle w-full flex justify-between items-center p-6 text-left focus:outline-none">
                            <span className="font-semibold text-lg">How does TeraBox integrate with other iOS apps?</span>
                            <i className="fa fa-plus text-primary transition-transform"></i>
                        </button>
                        <div className="faq-content p-6 pt-0 border-t border-gray-100">
                            <p className="text-dark/70">TeraBox integrates seamlessly with the iOS ecosystem. You can use the share extension to save content from other apps directly to TeraBox. Additionally, TeraBox appears in the Files app, allowing you to access and work with your TeraBox files from any app that supports file management. Our iOS widgets also let you quickly access your most important files from your home screen.</p>
                        </div>
                    </div>
                    
                    <div className="bg-white rounded-xl shadow-md overflow-hidden">
                        <button className="faq-toggle w-full flex justify-between items-center p-6 text-left focus:outline-none">
                            <span className="font-semibold text-lg">Can I transfer my files from iCloud to TeraBox?</span>
                            <i className="fa fa-plus text-primary transition-transform"></i>
                        </button>
                        <div className="faq-content p-6 pt-0 border-t border-gray-100">
                            <p className="text-dark/70">Absolutely! TeraBox makes it easy to transfer your files from iCloud. You can use the built-in file manager in the TeraBox iOS app to browse and copy files from your iCloud Drive. For larger transfers, we recommend using our desktop app on your Mac, which provides a more efficient way to migrate your data.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
 
    </>
   )
 }
