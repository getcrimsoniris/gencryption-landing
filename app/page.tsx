import { Button } from "@/components/ui/button"
import { Shield, Lock, BarChart3, Share2, Download } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50">
      {/* Header */}
      <header className="px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-gray-900">gencryption</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
              Features
            </a>
            <a href="#security" className="text-gray-600 hover:text-gray-900 transition-colors">
              Security
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
              Pricing
            </a>
            <Button variant="outline" className="border-purple-200 text-purple-700 hover:bg-purple-50 bg-transparent">
              Sign In
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Feature Icons */}
          <div className="flex justify-center items-center space-x-8 mb-16">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <span className="text-sm text-gray-600 font-medium">Secure Storage</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-sm text-gray-600 font-medium">Data Analysis</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <Share2 className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-sm text-gray-600 font-medium">Controlled Sharing</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                <Lock className="w-6 h-6 text-indigo-600" />
              </div>
              <span className="text-sm text-gray-600 font-medium">End-to-End Encryption</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Your genomic data deserves <span className="text-purple-700">privacy and control</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Take control of your genetic information with military-grade encryption. Store, analyze, and share your
            genomic data on your terms.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Download className="w-5 h-5 mr-2" />
              Download for Desktop
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-purple-200 text-purple-700 hover:bg-purple-50 px-8 py-3 text-lg font-medium rounded-full transition-all duration-200 bg-transparent"
            >
              Learn More
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-purple-100">
            <p className="text-sm text-gray-500 mb-4">Trusted by researchers and individuals worldwide</p>
            <div className="flex justify-center items-center space-x-8 text-gray-400">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span className="text-xs font-medium">Zero-Knowledge Architecture</span>
              </div>
              <div className="flex items-center space-x-2">
                <Lock className="w-4 h-4" />
                <span className="text-xs font-medium">AES-256 Encryption</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <span className="text-xs font-medium">Open Source</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
