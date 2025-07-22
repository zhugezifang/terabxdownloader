import { Metadata } from 'next'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CheckCircle, Play, Download, Shield, Zap, Globe, Users, Star } from 'lucide-react'
import { Locale } from '@/i18n/config'
import { getDictionary } from "@/i18n/get-dictionary";
import RednoteVideoDownloader from "@/components/RednoteVideoDownloader"

export const runtime = 'edge';


export const metadata: Metadata = {
  
  title: 'Download Terabox Premium Mod APK for PC - Windows',
  description: 'Download Terabox Mod APK for PC - Windows. Terabox is a cloud storage service that allows you to store and share your files with others. It is a free and easy to use cloud storage service that allows you to store and share your files with others.',
  alternates: {
         canonical: `${process.env.NEXT_PUBLIC_APP_URL}/terabox-for-pc`
  } 
}

export default async function TeraBoxPlayerPage({ params }: { params: { lang: Locale } }) {
    const dict = await getDictionary(params.lang) as any;
  return (
    <>
    
    <div className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-10 md:mb-0">
                    <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-tight text-dark mb-6">
                        Download <span className="text-primary">Terabox Premium Mod APK</span> for PC
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl">
                        Experience seamless cloud storage on your desktop. Terabox for PC offers secure file management, fast transfers, and easy access to all your files.
                    </p>
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <a href="https://www.dropbox.com/scl/fi/55stbg37kwtq4u0xcl3mb/terabox-v3-0-2.exe?rlkey=ksn9tx2cdgvu4md30vz92ssd8&st=ft636cbk&dl=1" target='_blank' className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-center">
                            <i className="fa fa-download mr-2"></i> Download Now
                        </a>
                    </div>
                    <div className="mt-8 flex items-center">
                        <div className="flex -space-x-2">
                            <img src="https://picsum.photos/seed/user1/40/40" alt="User avatar" className="w-10 h-10 rounded-full border-2 border-white" />
                            <img src="https://picsum.photos/seed/user2/40/40" alt="User avatar" className="w-10 h-10 rounded-full border-2 border-white" />
                            <img src="https://picsum.photos/seed/user3/40/40" alt="User avatar" className="w-10 h-10 rounded-full border-2 border-white" />
                        </div>
                        <div className="ml-4">
                            <div className="flex items-center">
                                <i className="fa fa-star text-yellow-400"></i>
                                <i className="fa fa-star text-yellow-400"></i>
                                <i className="fa fa-star text-yellow-400"></i>
                                <i className="fa fa-star text-yellow-400"></i>
                                <i className="fa fa-star text-yellow-400"></i>
                                <span className="ml-2 text-gray-700">4.9/5</span>
                            </div>
                            <p className="text-sm text-gray-600">From 10,000+ happy users</p>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 relative">
                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden hover-scale">
                        <img src="/images/terabox_app.webp" alt="Terabox for PC interface" className="w-full h-auto" />
                        <div className="p-6">
                            <div className="flex items-center mb-4">
                                <i className="fa fa-check-circle text-green-500 text-xl mr-2"></i>
                                <span className="font-medium">Secure & Reliable</span>
                            </div>
                            <div className="flex items-center mb-4">
                                <i className="fa fa-check-circle text-green-500 text-xl mr-2"></i>
                                <span className="font-medium">High-Speed Transfers</span>
                            </div>
                            <div className="flex items-center">
                                <i className="fa fa-check-circle text-green-500 text-xl mr-2"></i>
                                <span className="font-medium">User-Friendly Interface</span>
                            </div>
                        </div>
                    </div>
                    <div className="absolute -bottom-6 -left-6 bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hidden md:block">
                        <p className="font-bold">10GB Free Space</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-dark mb-4">Why Choose Terabox for PC</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">Discover the powerful features that make Terabox the preferred cloud storage solution for desktop users.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-all hover-scale">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                        <i className="fa fa-cloud-upload text-primary text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Easy File Management</h3>
                    <p className="text-gray-600">Organize, upload, and download your files with just a few clicks. Terabox makes file management simple and efficient.</p>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-all hover-scale">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                        <i className="fa fa-shield text-primary text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Advanced Security</h3>
                    <p className="text-gray-600">Your files are protected with state-of-the-art encryption. Enjoy peace of mind knowing your data is secure.</p>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-all hover-scale">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                        <i className="fa fa-bolt text-primary text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Lightning-Fast Speed</h3>
                    <p className="text-gray-600">Experience high-speed uploads and downloads, even for large files. Save time with Terabox's optimized transfer technology.</p>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-all hover-scale">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                        <i className="fa fa-history text-primary text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-bold mb-3">File Versioning</h3>
                    <p className="text-gray-600">Never lose a previous version of your files. Keep track of changes and revert when needed.</p>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-all hover-scale">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                        <i className="fa fa-mobile text-primary text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Cross-Platform Sync</h3>
                    <p className="text-gray-600">Access your files seamlessly across all your devices. Your desktop, mobile, and tablet stay perfectly in sync.</p>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-all hover-scale">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                        <i className="fa fa-life-ring text-primary text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-bold mb-3">24/7 Customer Support</h3>
                    <p className="text-gray-600">Our dedicated support team is always available to assist you with any questions or concerns.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="download" className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-dark mb-4">Download Terabox for PC</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">Get the official Terabox application for your desktop and start enjoying secure cloud storage today.</p>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
                <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md hover-scale">
                    <div className="flex items-center mb-6">
                        <i className="fa fa-windows text-blue-600 text-4xl mr-4"></i>
                        <div>
                            <h3 className="text-xl font-bold">Windows</h3>
                            <p className="text-gray-500">7/8/10/11</p>
                        </div>
                    </div>
                    <p className="text-gray-600 mb-6">Download Terabox for Windows and experience seamless cloud storage on your desktop.</p>
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">Version 2.8.5</span>
                        <a href="#" className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium transition-all shadow-md hover:shadow-lg">
                            <i className="fa fa-download mr-2"></i> Download
                        </a>
                    </div>
                </div>
            
            </div>
            
            <div className="mt-16 text-center">
                <p className="text-gray-600 mb-6">Prefer using Terabox in your browser?</p>
                <a href="#" className="inline-flex items-center text-primary hover:text-primary/80 font-medium">
                    <span>Open Web Version</span>
                    <i className="fa fa-arrow-right ml-2"></i>
                </a>
            </div>
        </div>
    </section>

    <section id="compatibility" className="py-20 bg-white">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-dark mb-4">System Requirements</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">Ensure your system meets these requirements for optimal performance.</p>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
                <div className="bg-gray-50 rounded-xl p-8 shadow-md">
                    <div className="flex items-center mb-6">
                        <i className="fa fa-windows text-blue-600 text-3xl mr-3"></i>
                        <h3 className="text-xl font-bold">Windows</h3>
                    </div>
                    <ul className="space-y-4">
                        <li className="flex items-start">
                            <i className="fa fa-check text-green-500 mt-1 mr-3"></i>
                            <span>Windows 7, 8, 10, or 11 (64-bit recommended)</span>
                        </li>
                        <li className="flex items-start">
                            <i className="fa fa-check text-green-500 mt-1 mr-3"></i>
                            <span>Intel Pentium 4 or later compatible processor</span>
                        </li>
                        <li className="flex items-start">
                            <i className="fa fa-check text-green-500 mt-1 mr-3"></i>
                            <span>1GB RAM (2GB recommended)</span>
                        </li>
                        <li className="flex items-start">
                            <i className="fa fa-check text-green-500 mt-1 mr-3"></i>
                            <span>50MB available hard disk space</span>
                        </li>
                        <li className="flex items-start">
                            <i className="fa fa-check text-green-500 mt-1 mr-3"></i>
                            <span>Internet connection (high-speed recommended)</span>
                        </li>
                    </ul>
                </div>
                
                
            </div>
        </div>
    </section>

    <section id="faq" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-dark mb-4">Frequently Asked Questions</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">Find answers to common questions about Terabox for PC.</p>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-6">
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <button className="faq-toggle w-full flex items-center justify-between p-6 text-left font-medium" data-target="faq1">
                        <span>Is Terabox for PC free to download?</span>
                        <i className="fa fa-chevron-down text-primary transition-transform duration-300"></i>
                    </button>
                    <div className="faq-content p-6 pt-0 border-t border-gray-100" id="faq1">
                        <p className="text-gray-600">Yes, Terabox for PC is free to download and use. You get 10GB of free storage space when you sign up. For more storage, you can upgrade to a premium plan.</p>
                    </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <button className="faq-toggle w-full flex items-center justify-between p-6 text-left font-medium" data-target="faq2">
                        <span>How do I install Terabox on my PC?</span>
                        <i className="fa fa-chevron-down text-primary transition-transform duration-300"></i>
                    </button>
                                         <div className="faq-content p-6 pt-0 border-t border-gray-100" id="faq2">
                         <p className="text-gray-600">1. Click on the "Download" button for your respective operating system (Windows or Mac).<br />2. Once the installer is downloaded, run the file.<br />3. Follow the on-screen instructions to complete the installation.<br />4. Launch Terabox and sign in with your account or create a new one.</p>
                     </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <button className="faq-toggle w-full flex items-center justify-between p-6 text-left font-medium" data-target="faq3">
                        <span>Can I use Terabox on multiple devices?</span>
                        <i className="fa fa-chevron-down text-primary transition-transform duration-300"></i>
                    </button>
                    <div className="faq-content p-6 pt-0 border-t border-gray-100" id="faq3">
                        <p className="text-gray-600">Absolutely! Terabox is available on PC, Mac, iOS, and Android. Your files and settings sync seamlessly across all your devices when you sign in with the same account.</p>
                    </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <button className="faq-toggle w-full flex items-center justify-between p-6 text-left font-medium" data-target="faq4">
                        <span>Is my data secure with Terabox?</span>
                        <i className="fa fa-chevron-down text-primary transition-transform duration-300"></i>
                    </button>
                    <div className="faq-content p-6 pt-0 border-t border-gray-100" id="faq4">
                        <p className="text-gray-600">Yes, Terabox uses advanced encryption technology to protect your files both during transmission and while stored on our servers. We also offer two-factor authentication to add an extra layer of security to your account.</p>
                    </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <button className="faq-toggle w-full flex items-center justify-between p-6 text-left font-medium" data-target="faq5">
                        <span>What are the premium storage options?</span>
                        <i className="fa fa-chevron-down text-primary transition-transform duration-300"></i>
                    </button>
                                         <div className="faq-content p-6 pt-0 border-t border-gray-100" id="faq5">
                         <p className="text-gray-600">Terabox offers several premium storage plans:<br />- 100GB: $1.99/month<br />- 1TB: $4.99/month<br />- 2TB: $7.99/month<br />Premium plans also include additional benefits such as faster download speeds and priority customer support.</p>
                     </div>
                 </div>
             </div>
         </div>
     </section>
 
    </>
   )
 }
