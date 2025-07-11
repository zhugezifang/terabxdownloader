import { Metadata } from 'next'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CheckCircle, Play, Download, Shield, Zap, Globe, Users, Star } from 'lucide-react'
import { Locale } from '@/i18n/config'
import { getDictionary } from "@/i18n/get-dictionary";
import RednoteVideoDownloader from "@/components/RednoteVideoDownloader"


export const metadata: Metadata = {
  title: 'TeraBox Viewer - Watch & Play TeraBox Videos Online Free | Fast & Secure',
  description: 'Free TeraBox Viewer to watch and play TeraBox videos online without downloading. Fast, secure, and easy-to-use TeraBox video player with high-quality streaming.',
  keywords: 'TeraBox Viewer, TeraBox video player, watch TeraBox videos, play TeraBox videos online, TeraBox streaming, TeraBox viewer, online video player',
  openGraph: {
    title: 'TeraBox Viewer - Watch TeraBox Videos Online Free',
    description: 'Play TeraBox videos directly in your browser with our free TeraBox Viewer. No downloads required, fast streaming, and secure viewing experience.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TeraBox Viewer - Watch TeraBox Videos Online',
    description: 'Free online TeraBox Player for streaming TeraBox videos directly in your browser.',
  },
}

export default async function TeraBoxPlayerPage({ params }: { params: { lang: Locale } }) {
    const dict = await getDictionary(params.lang) as any;
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              TeraBox Viewer
              <span className="block text-blue-600 text-2xl md:text-3xl mt-2">
                Play TeraBox Videos Online Free
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Stream TeraBox videos directly in your browser with our advanced TeraBox Player. 
              No downloads required, just paste your TeraBox link and start watching instantly.
            </p>
            
            <RednoteVideoDownloader lang={params.lang} dict={dict} />

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 pt-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-green-600" />
                <span>100% Safe</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-yellow-600" />
                <span>Lightning Fast</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-blue-600" />
                <span>No Registration</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-purple-600" />
                <span>1M+ Users</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our TeraBox Player?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our TeraBox Player offers the best streaming experience with advanced features 
              designed for seamless TeraBox video playback.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Play className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Instant Playback</h3>
              <p className="text-gray-600">
                Start watching TeraBox videos immediately without any delays or buffering issues.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure Streaming</h3>
              <p className="text-gray-600">
                Your privacy is protected with encrypted connections and no data logging.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">High-Speed Streaming</h3>
              <p className="text-gray-600">
                Experience smooth TeraBox video playback with our optimized streaming technology.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Universal Compatibility</h3>
              <p className="text-gray-600">
                Works on all devices and browsers - desktop, mobile, tablet, iOS, and Android.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Download className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Downloads Required</h3>
              <p className="text-gray-600">
                Stream TeraBox videos directly without downloading any software or apps.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Star className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                Enjoy TeraBox videos in original quality with support for HD and 4K content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How to Use TeraBox Player
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Follow these simple steps to start streaming TeraBox videos with our player
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="h-16 w-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Copy TeraBox Link</h3>
                <p className="text-gray-600">
                  Copy the TeraBox video link from your browser, app, or any platform where you found it.
                </p>
              </div>

              <div className="text-center">
                <div className="h-16 w-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Paste URL</h3>
                <p className="text-gray-600">
                  Paste the TeraBox link into our player interface above and click the play button.
                </p>
              </div>

              <div className="text-center">
                <div className="h-16 w-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">Start Watching</h3>
                <p className="text-gray-600">
                  Enjoy instant streaming of your TeraBox video with our advanced player controls.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Formats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Supported TeraBox Formats
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our TeraBox Player supports all popular video formats and TeraBox domains
            </p>
          </div>

          <Tabs defaultValue="formats" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="formats">Video Formats</TabsTrigger>
              <TabsTrigger value="domains">Supported Domains</TabsTrigger>
            </TabsList>
            
            <TabsContent value="formats" className="mt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Video Formats</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>MP4</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>AVI</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>MKV</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>MOV</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>WMV</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>FLV</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality Support</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>480p</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>720p HD</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>1080p FHD</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>4K UHD</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Original</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Auto Quality</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="domains" className="mt-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">TeraBox Domains</h3>
                <p className="text-gray-600 mb-4">
                  Our TeraBox Player works with all official TeraBox domains and mirrors
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>terabox.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>www.terabox.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>terabox.app</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>teraboxapp.com</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>1024tera.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>mirrobox.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>nephobox.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>freeterabox.com</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>4funbox.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>momerybox.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>tibibox.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>terabox.fun</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get answers to common questions about our TeraBox Player
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What is a TeraBox Player?</h3>
                <p className="text-gray-600">
                  A TeraBox Player is an online tool that allows you to stream and watch TeraBox videos directly in your web browser without downloading them. Our TeraBox Player provides a seamless streaming experience with high-quality video playback and advanced player controls.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">How does the TeraBox Player work?</h3>
                <p className="text-gray-600">
                  Simply paste your TeraBox video link into our player interface, and our system will process the link to provide direct streaming access. The TeraBox Player uses advanced streaming technology to deliver smooth playback without requiring any downloads or installations.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Is the TeraBox Player free to use?</h3>
                <p className="text-gray-600">
                  Yes, our TeraBox Player is completely free to use. You can stream unlimited TeraBox videos without any subscription fees or hidden charges. We provide this service to help users access their TeraBox content more conveniently.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What devices support the TeraBox Player?</h3>
                <p className="text-gray-600">
                  Our TeraBox Player works on all devices including desktop computers, laptops, smartphones, and tablets. It's compatible with all modern browsers such as Chrome, Firefox, Safari, and Edge. The player automatically adapts to your screen size for optimal viewing.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Can I watch TeraBox videos in HD quality?</h3>
                <p className="text-gray-600">
                  Yes, our TeraBox Player supports all video qualities including HD 720p, Full HD 1080p, and even 4K resolution depending on the original video quality. The player automatically adjusts the quality based on your internet connection speed for the best viewing experience.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Is it safe to use the TeraBox Player?</h3>
                <p className="text-gray-600">
                  Absolutely! Our TeraBox Player uses secure connections and doesn't store any of your personal data or video content. We don't require registration or personal information, ensuring your privacy is protected while using our TeraBox Player service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
