import { Metadata } from 'next'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CheckCircle, Play, Download, Shield, Zap, Globe, Users, Star } from 'lucide-react'
import { Locale } from '@/i18n/config'
import { getDictionary } from "@/i18n/get-dictionary";
import RednoteVideoDownloader from "@/components/RednoteVideoDownloader"

export const runtime = 'edge';


export const metadata: Metadata = {
    
  title: 'Download Terabox Mod Apk Old Versions',
  description: 'Download Terabox Mod Apk Free everything unlocked,it contains android、ios、pc old version',
  alternates: {
      canonical: `${process.env.NEXT_PUBLIC_APP_URL}/terabox-old-version`
  }
}

export default async function TeraBoxPlayerPage({ params }: { params: { lang: Locale } }) {
    const dict = await getDictionary(params.lang) as any;
  return (
    <>

    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary/5 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 mb-10 md:mb-0">
                    <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-neutral-700 leading-tight mb-4">
                        Terabox Old Versions <span className="text-primary">Download</span>
                    </h1>
                    <p className="text-[clamp(1rem,2vw,1.25rem)] text-neutral-500 mb-8 max-w-xl">
                        Access previous versions of Terabox and find the perfect match for your device. Whether you're facing compatibility issues or prefer older features, we've got you covered.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a href="/terabox-mod-apk" className="px-6 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg shadow-lg shadow-primary/20 transition-all transform hover:-translate-y-1">
                            <i className="fa fa-download mr-2"></i> Download Latest
                        </a>
                        <a href="#versions" className="px-6 py-3 bg-white hover:bg-neutral-50 text-primary border border-primary font-medium rounded-lg transition-all transform hover:-translate-y-1">
                            <i className="fa fa-history mr-2"></i> Browse Old Versions
                        </a>
                    </div>
                </div>
                <div className="w-full md:w-1/2 relative">
                    <div className="relative z-10 bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
                        <img src="https://terabox-downloader.pro/images/terabox_app.webp" alt="Terabox App Interface" className="w-full h-auto"/>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end">
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">Terabox Cloud Storage</h3>
                                <p className="text-white/80">Securely store and access your files from anywhere</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute top-1/4 -right-4 w-40 h-40 bg-secondary/20 rounded-full blur-3xl -z-10"></div>
                    <div className="absolute bottom-1/4 -left-4 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-10"></div>
                </div>
            </div>
        </div>
    </section>

    <section id="versions" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-neutral-700 mb-4">Download Terabox Old Version for Android</h2>
                <p className="text-neutral-500 max-w-2xl mx-auto">Select from previous versions of Terabox to find the one that best suits your needs.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
                    <div className="bg-primary/10 p-4">
                        <h3 className="text-xl font-bold text-primary">Terabox Mod APK V3. 35. 2</h3>
                        <p className="text-sm text-neutral-500">Released on May 15, 2025</p>
                    </div>
                    <div className="p-6">
                        <div className="flex items-center mb-4">
                            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Stable</span>
                            <span className="ml-2 text-sm text-neutral-500">Size: 78.5 MB</span>
                        </div>
                        <p className="text-neutral-600 mb-4">Optimized for Android 9.0+ with improved file management and faster upload speeds.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-neutral-100 text-neutral-700 text-xs font-medium px-2.5 py-0.5 rounded-full">File Management</span>
                            <span className="bg-neutral-100 text-neutral-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Cloud Sync</span>
                            <span className="bg-neutral-100 text-neutral-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Video Playback</span>
                        </div>
                        <a href="https://www.4sync.com/web/directDownload/lig_ufqx/uN2lslLV.90328795daa994467b79ebc9b0fc3a6f" rel=" nofollow noopener" target="_blank" className="block w-full py-2 px-4 bg-primary text-white text-center rounded-lg hover:bg-primary/90 transition-colors">
                            <i className="fa fa-download mr-2"></i> Download APK
                        </a>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
                    <div className="bg-primary/10 p-4">
                        <h3 className="text-xl font-bold text-primary">Terabox Mod APK V3. 34. 1</h3>
                        <p className="text-sm text-neutral-500">Released on March 22, 2025</p>
                    </div>
                    <div className="p-6">
                        <div className="flex items-center mb-4">
                            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Stable</span>
                            <span className="ml-2 text-sm text-neutral-500">Size: 72.3 MB</span>
                        </div>
                        <p className="text-neutral-600 mb-4">Popular version with support for older Android devices (6.0+).</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-neutral-100 text-neutral-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Basic File Sync</span>
                            <span className="bg-neutral-100 text-neutral-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Photo Gallery</span>
                            <span className="bg-neutral-100 text-neutral-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Sharing</span>
                        </div>
                        <a rel="nofollow noopener" target="_blank" href="https://www.4sync.com/web/directDownload/ouxaNzaC/uN2lslLV.d964a67fadd97db6bacb4f26a192ab76" className="block w-full py-2 px-4 bg-primary text-white text-center rounded-lg hover:bg-primary/90 transition-colors">
                            <i className="fa fa-download mr-2"></i> Download APK
                        </a>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
                    <div className="bg-primary/10 p-4">
                        <h3 className="text-xl font-bold text-primary">Terabox Mod APK V3. 34. 0</h3>
                        <p className="text-sm text-neutral-500">Released on November 10, 2024</p>
                    </div>
                    <div className="p-6">
                        <div className="flex items-center mb-4">
                            <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Legacy</span>
                            <span className="ml-2 text-sm text-neutral-500">Size: 65.8 MB</span>
                        </div>
                        <p className="text-neutral-600 mb-4">Lightweight version optimized for low-end devices with 1GB RAM.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-neutral-100 text-neutral-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Lightweight</span>
                            <span className="bg-neutral-100 text-neutral-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Basic Features</span>
                            <span className="bg-neutral-100 text-neutral-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Older Devices</span>
                        </div>
                        <a rel="nofollow noopener" target="_blank" href="https://www.4sync.com/web/directDownload/1OTlmpt1/uN2lslLV.2e30b02deb96e722464a855263df8874" className="block w-full py-2 px-4 bg-primary text-white text-center rounded-lg hover:bg-primary/90 transition-colors">
                            <i className="fa fa-download mr-2"></i> Download APK
                        </a>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
                    <div className="bg-primary/10 p-4">
                        <h3 className="text-xl font-bold text-primary">Terabox Mod APK V3. 33. 5</h3>
                        <p className="text-sm text-neutral-500">Released on August 5, 2024</p>
                    </div>
                    <div className="p-6">
                        <div className="flex items-center mb-4">
                            <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Legacy</span>
                            <span className="ml-2 text-sm text-neutral-500">Size: 58.2 MB</span>
                        </div>
                        <p className="text-neutral-600 mb-4">Supports Android 5.0+ with essential cloud storage features.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-neutral-100 text-neutral-700 text-xs font-medium px-2.5 py-0.5 rounded-full">File Upload</span>
                            <span className="bg-neutral-100 text-neutral-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Download Manager</span>
                            <span className="bg-neutral-100 text-neutral-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Basic UI</span>
                        </div>
                        <a rel="nofollow noopener" target="_blank" href="https://www.4sync.com/web/directDownload/1OTlmpt1/uN2lslLV.2e30b02deb96e722464a855263df8874" className="block w-full py-2 px-4 bg-primary text-white text-center rounded-lg hover:bg-primary/90 transition-colors">
                            <i className="fa fa-download mr-2"></i> Download APK
                        </a>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
                    <div className="bg-primary/10 p-4">
                        <h3 className="text-xl font-bold text-primary">Terabox Mod APK V3. 32. 5</h3>
                        <p className="text-sm text-neutral-500">Released on April 18, 2024</p>
                    </div>
                    <div className="p-6">
                        <div className="flex items-center mb-4">
                            <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Archived</span>
                            <span className="ml-2 text-sm text-neutral-500">Size: 52.7 MB</span>
                        </div>
                        <p className="text-neutral-600 mb-4">Early version with basic cloud storage and sharing capabilities.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-neutral-100 text-neutral-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Simple Interface</span>
                            <span className="bg-neutral-100 text-neutral-700 text-xs font-medium px-2.5 py-0.5 rounded-full">File Sharing</span>
                            <span className="bg-neutral-100 text-neutral-700 text-xs font-medium px-2.5 py-0.5 rounded-full">No Ads</span>
                        </div>
                        <a rel="nofollow noopener" target="_blank" href="https://www.4sync.com/web/directDownload/1OTlmpt1/uN2lslLV.2e30b02deb96e722464a855263df8874" className="block w-full py-2 px-4 bg-primary text-white text-center rounded-lg hover:bg-primary/90 transition-colors">
                            <i className="fa fa-download mr-2"></i> Download APK
                        </a>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
                    <div className="bg-primary/10 p-4">
                        <h3 className="text-xl font-bold text-primary">Terabox Mod APK V3. 32. 1</h3>
                        <p className="text-sm text-neutral-500">Released on January 12, 2024</p>
                    </div>
                    <div className="p-6">
                        <div className="flex items-center mb-4">
                            <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Archived</span>
                            <span className="ml-2 text-sm text-neutral-500">Size: 45.5 MB</span>
                        </div>
                        <p className="text-neutral-600 mb-4">Original version with limited features but excellent performance on older devices.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-neutral-100 text-neutral-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Minimalist</span>
                            <span className="bg-neutral-100 text-neutral-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Low Storage</span>
                            <span className="bg-neutral-100 text-neutral-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Basic Sync</span>
                        </div>
                        <a rel="nofollow noopener" target="_blank" href="https://www.4sync.com/web/directDownload/1OTlmpt1/uN2lslLV.2e30b02deb96e722464a855263df8874" className="block w-full py-2 px-4 bg-primary text-white text-center rounded-lg hover:bg-primary/90 transition-colors">
                            <i className="fa fa-download mr-2"></i> Download APK
                        </a>
                    </div>
                </div>
            </div>

        </div>

    </section>

    <section id="versions" className="py-16 bg-white">

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-neutral-700 mb-4">Download Terabox Old Version for PC</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
                    <div className="bg-primary/10 p-4">
                        <h3 className="text-xl font-bold text-primary">Terabox Mod APK v1.30.0.2</h3>
                        <p className="text-sm text-neutral-500">Released on May 15, 2025</p>
                    </div>
                    <div className="p-6">
                        <div className="flex items-center mb-4">
                            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Stable</span>
                            <span className="ml-2 text-sm text-neutral-500">Size: 78.5 MB</span>
                        </div>
                        <p className="text-neutral-600 mb-4">Popular version with support for PC.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-neutral-100 text-neutral-700 text-xs font-medium px-2.5 py-0.5 rounded-full">File Management</span>
                            <span className="bg-neutral-100 text-neutral-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Cloud Sync</span>
                            <span className="bg-neutral-100 text-neutral-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Video Playback</span>
                        </div>
                        <a href="https://download.teraboxmoddapk.com/Terabox_for_pc_old_version_teraboxmoddapk_com.exe" rel="nofollow noopener" target="_blank" className="block w-full py-2 px-4 bg-primary text-white text-center rounded-lg hover:bg-primary/90 transition-colors">
                            <i className="fa fa-download mr-2"></i> Download APK
                        </a>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
                    <div className="bg-primary/10 p-4">
                        <h3 className="text-xl font-bold text-primary">Terabox Mod APK v1.29.0.2</h3>
                    </div>
                    <div className="p-6">
                        <div className="flex items-center mb-4">
                            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Stable</span>
                            <span className="ml-2 text-sm text-neutral-500">Size: 72.3 MB</span>
                        </div>
                        <p className="text-neutral-600 mb-4">Popular version with support for Windows.</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-neutral-100 text-neutral-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Basic File Sync</span>
                            <span className="bg-neutral-100 text-neutral-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Photo Gallery</span>
                            <span className="bg-neutral-100 text-neutral-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Sharing</span>
                        </div>
                        <a rel="nofollow noopener" target="_blank" href="https://download.teraboxmoddapk.com/Terabox_for_pc_old_version_teraboxmoddapk_com.exe" className="block w-full py-2 px-4 bg-primary text-white text-center rounded-lg hover:bg-primary/90 transition-colors">
                            <i className="fa fa-download mr-2"></i> Download APK
                        </a>
                    </div>
                </div>



            </div>

        </div>

    </section>

    <section id="features" className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-neutral-700 mb-4">Key Features</h2>
                <p className="text-neutral-500 max-w-2xl mx-auto">Discover the powerful features that make Terabox a leading cloud storage solution.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                        <i className="fa fa-cloud-upload text-primary text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-700 mb-3">Cloud Storage</h3>
                    <p className="text-neutral-500">Securely store your files, photos, and videos with up to 1TB of free cloud storage space.</p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                        <i className="fa fa-share-alt text-primary text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-700 mb-3">Easy Sharing</h3>
                    <p className="text-neutral-500">Share files and folders with friends and family with just a few clicks. Set permissions and expiration dates.</p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                        <i className="fa fa-shield text-primary text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-700 mb-3">File Security</h3>
                    <p className="text-neutral-500">Your data is protected with advanced encryption and security features to ensure privacy and peace of mind.</p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                        <i className="fa fa-mobile text-primary text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-700 mb-3">Multi-Device Sync</h3>
                    <p className="text-neutral-500">Access your files from any device, anywhere. Files automatically sync across all your devices.</p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                        <i className="fa fa-play-circle text-primary text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-700 mb-3">Media Playback</h3>
                    <p className="text-neutral-500">Stream videos and music directly from your cloud storage without downloading them first.</p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                        <i className="fa fa-clock-o text-primary text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-700 mb-3">Version History</h3>
                    <p className="text-neutral-500">Keep track of file revisions and restore previous versions if needed.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="compare" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-neutral-700 mb-4">Compare Versions</h2>
                <p className="text-neutral-500 max-w-2xl mx-auto">See the differences between various Terabox versions to find the one that fits your needs.</p>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-neutral-200">
                    <thead className="bg-neutral-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Feature</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">terabox mod apk v3.35.2</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Terabox mod apk v3.34.1</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Terabox mod apk v3.34.0</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-neutral-200">
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-700">Android Version Support</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">9.0+</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">6.0+</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">5.0+</td>
                        </tr>
                        <tr className="bg-neutral-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-700">Cloud Storage Space</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">1TB</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">1TB</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">500GB</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-700">Video Playback Quality</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">4K Support</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">1080p Support</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">720p Support</td>
                        </tr>
                        <tr className="bg-neutral-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-700">Offline File Access</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">Yes</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">Yes</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">Limited</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-700">File Encryption</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">AES-256</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">AES-128</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">Basic</td>
                        </tr>
                        <tr className="bg-neutral-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-700">Upload Speed</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">Optimized</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">Standard</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">Basic</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-700">User Interface</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">Modern</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">Standard</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">Simplified</td>
                        </tr>
                        <tr className="bg-neutral-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-700">Ads</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">Minimal</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">Some Ads</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">No Ads</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    </section>

    <section id="faq" className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-neutral-700 mb-4">Frequently Asked Questions</h2>
                <p className="text-neutral-500 max-w-2xl mx-auto">Find answers to common questions about Terabox old versions.</p>
            </div>

            <div className="max-w-3xl mx-auto">
                <div className="mb-4">
                    <button className="faq-toggle w-full flex justify-between items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow" aria-expanded="false">
                        <span className="font-medium text-left">Why would I want to download an older version of Terabox?</span>
                        <i className="fa fa-chevron-down text-primary transition-transform"></i>
                    </button>
                    <div className="faq-content bg-white p-4 rounded-b-lg">
                        <p className="text-neutral-600">There are several reasons you might prefer an older version of Terabox:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Your device has limited specifications and newer versions run slowly</li>
                            <li>You prefer the interface or features of an older version</li>
                            <li>You're experiencing compatibility issues with the latest version</li>
                            <li>The newer version has features or ads you don't want</li>
                        </ul>
                    </div>
                </div>

                <div className="mb-4">
                    <button className="faq-toggle w-full flex justify-between items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow" aria-expanded="false">
                        <span className="font-medium text-left">Are older versions of Terabox safe to download?</span>
                        <i className="fa fa-chevron-down text-primary transition-transform"></i>
                    </button>
                    <div className="faq-content bg-white p-4 rounded-b-lg">
                        <p className="text-neutral-600">Yes, all versions available on our website are sourced directly from the official Terabox archives and are scanned for malware before being made available for download. However, older versions may lack the latest security updates, so we recommend using the newest version if possible.</p>
                    </div>
                </div>

                <div className="mb-4">
                    <button className="faq-toggle w-full flex justify-between items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow" aria-expanded="false">
                        <span className="font-medium text-left">How do I install an older version of Terabox?</span>
                        <i className="fa fa-chevron-down text-primary transition-transform"></i>
                    </button>
                    <div className="faq-content bg-white p-4 rounded-b-lg">
                        <p className="text-neutral-600">To install an older version of Terabox:</p>
                        <ol className="list-decimal pl-5 mt-2 space-y-2">
                            <li>Download the APK file from our website</li>
                            <li>Go to your devices Settings Security</li>
                            <li>Enable Unknown Sources to allow installation from sources other than the Play Store</li>
                            <li>Open the downloaded APK file</li>
                            <li>Follow the installation prompts</li>
                            <li>Note: If you already have a newer version installed, you may need to uninstall it first</li>
                        </ol>
                    </div>
                </div>

                <div className="mb-4">
                    <button className="faq-toggle w-full flex justify-between items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow" aria-expanded="false">
                        <span className="font-medium text-left">Can I upgrade to the latest version after installing an older version?</span>
                        <i className="fa fa-chevron-down text-primary transition-transform"></i>
                    </button>
                    <div className="faq-content bg-white p-4 rounded-b-lg">
                        <p className="text-neutral-600">Yes, you can upgrade to the latest version at any time. You can either download the latest APK from our website or wait for the official update notification in the app. Your files and settings will be preserved during the upgrade process.</p>
                    </div>
                </div>

                <div className="mb-4">
                    <button className="faq-toggle w-full flex justify-between items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow" aria-expanded="false">
                        <span className="font-medium text-left">Which version of Terabox should I choose for my Android device?</span>
                        <i className="fa fa-chevron-down text-primary transition-transform"></i>
                    </button>
                    <div className="faq-content bg-white p-4 rounded-b-lg">
                        <p className="text-neutral-600">The best version depends on your device's specifications:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>For modern devices (Android 9.0+): Use the latest version (9.1.0)</li>
                            <li>For mid-range devices (Android 6.0-8.1): Use version 8.7.2</li>
                            <li>For older/low-spec devices (Android 5.0-5.1): Use version 7.5.0</li>
                            <li>If you encounter issues with newer versions, try older stable releases</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <button className="faq-toggle w-full flex justify-between items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow" aria-expanded="false">
                        <span className="font-medium text-left">Do older versions of Terabox support all cloud storage features?</span>
                        <i className="fa fa-chevron-down text-primary transition-transform"></i>
                    </button>
                    <div className="faq-content bg-white p-4 rounded-b-lg">
                        <p className="text-neutral-600">Older versions may have limited features compared to the latest release. For example, older versions may not support 4K video playback, advanced file encryption, or the latest sharing options. Check the version comparison table for specific feature differences between versions.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="download" className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 p-8 md:p-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-neutral-700 mb-4">Download Terabox Now</h2>
                        <p className="text-neutral-600 mb-6">Get the latest version of Terabox or choose from previous releases to find the perfect fit for your device.</p>
                        
                        <div className="space-y-4 mb-8">
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                                    <i className="fa fa-check text-green-600"></i>
                                </div>
                                <span className="text-neutral-700">100% Safe & Secure</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                                    <i className="fa fa-check text-green-600"></i>
                                </div>
                                <span className="text-neutral-700">Official Sources</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                                    <i className="fa fa-check text-green-600"></i>
                                </div>
                                <span className="text-neutral-700">No Hidden Costs</span>
                            </div>
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-medium text-neutral-700 mb-2">Select Version</label>
                            <select className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary">
                                <option>Terabox Mod APK V3. 35. 2</option>
                                <option>Terabox Mod APK V3. 34. 1</option>
                                <option>Terabox Mod APK V3. 34. 0</option>
                                <option>Terabox Mod APK V3. 33. 5</option>
                                <option>Terabox Mod APK V3. 32. 5</option>
                                <option>Terabox Mod APK V3. 32. 1</option>
                            </select>
                        </div>

                        <a href="#" className="block w-full py-3 px-6 bg-primary text-white font-medium rounded-lg shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all transform hover:-translate-y-1 text-center">
                            <i className="fa fa-download mr-2"></i> Download APK
                        </a>
                    </div>
                    <div className="md:w-1/2 bg-primary p-8 md:p-12 text-white flex flex-col justify-center">
                        <h3 className="text-xl font-bold mb-4">Why Choose Terabox?</h3>
                        <ul className="space-y-4">
                            <li className="flex">
                                <i className="fa fa-cloud text-xl mr-3 mt-1"></i>
                                <div>
                                    <h4 className="font-medium">Huge Cloud Storage</h4>
                                    <p className="text-white/80 text-sm">Get up to 1TB of free storage space for your files</p>
                                </div>
                            </li>
                            <li className="flex">
                                <i className="fa fa-bolt text-xl mr-3 mt-1"></i>
                                <div>
                                    <h4 className="font-medium">Fast Upload/Download</h4>
                                    <p className="text-white/80 text-sm">High-speed data transfer for all your files</p>
                                </div>
                            </li>
                            <li className="flex">
                                <i className="fa fa-lock text-xl mr-3 mt-1"></i>
                                <div>
                                    <h4 className="font-medium">Advanced Security</h4>
                                    <p className="text-white/80 text-sm">Your data protected with bank-level encryption</p>
                                </div>
                            </li>
                            <li className="flex">
                                <i className="fa fa-mobile text-xl mr-3 mt-1"></i>
                                <div>
                                    <h4 className="font-medium">Multi-Device Sync</h4>
                                    <p className="text-white/80 text-sm">Access your files from any device, anywhere</p>
                                </div>
                            </li>
                        </ul>

                        <div className="mt-8">
                            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                                    <i className="fa fa-facebook text-white"></i>
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                                    <i className="fa fa-twitter text-white"></i>
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                                    <i className="fa fa-instagram text-white"></i>
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                                    <i className="fa fa-youtube-play text-white"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>   
 
    </>
   )
 }
