import { Button } from "@/components/ui/button"
import { Shield, Lock, Users, Globe, Database, Search } from "lucide-react"
import Link from "next/link"

export default function ResearchersPage() {
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
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
              Home
            </Link>
            <Link href="/#features" className="text-gray-600 hover:text-gray-900 transition-colors">
              Features
            </Link>
            <Link href="/#security" className="text-gray-600 hover:text-gray-900 transition-colors">
              Security
            </Link>
            <Link href="/researchers" className="text-purple-700 font-medium">
              Researchers
            </Link>
            <Button variant="outline" className="border-purple-200 text-purple-700 hover:bg-purple-50 bg-transparent">
              Buy $GENCRYPT
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Recruit participants worldwide without the risk of holding <span className="text-purple-700">medical data</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Access a global network of research participants while maintaining zero liability for sensitive genetic information. 
            Our homomorphic encryption ensures data never leaves the participant&apos;s control.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Start Research Project
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-purple-200 text-purple-700 hover:bg-purple-50 px-8 py-3 text-lg font-medium rounded-full transition-all duration-200 bg-transparent"
            >
              View Documentation
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-purple-100">
            <p className="text-sm text-gray-500 mb-4">Trusted by leading research institutions worldwide</p>
            <div className="flex justify-center items-center space-x-8 text-gray-400">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span className="text-xs font-medium">Zero-Knowledge Architecture</span>
              </div>
              <div className="flex items-center space-x-2">
                <Lock className="w-4 h-4" />
                <span className="text-xs font-medium">HIPAA Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <span className="text-xs font-medium">IRB Approved</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section id="features" className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Research Tools Built for Privacy
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to conduct groundbreaking research while respecting participant privacy
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Global Recruitment</h3>
              <p className="text-gray-600 leading-relaxed">
                Access diverse participant pools from around the world without geographical limitations.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
                <Database className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Zero Data Liability</h3>
              <p className="text-gray-600 leading-relaxed">
                Never store sensitive genetic data. All analysis happens on encrypted data in transit.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center">
                <Search className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Advanced Analytics</h3>
              <p className="text-gray-600 leading-relaxed">
                Run complex genomic analyses on encrypted data without compromising participant privacy.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center">
                <Globe className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Compliance Ready</h3>
              <p className="text-gray-600 leading-relaxed">
                Built-in compliance with GDPR, HIPAA, and other international privacy regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="px-6 py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Lock className="w-8 h-8 text-purple-600" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Research Without Risk
            </h2>
          </div>
          
          <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto">
            Our homomorphic encryption technology allows you to analyze genetic data without ever seeing the raw information. 
            Participants maintain full control while you get the insights you need for breakthrough discoveries.
          </p>
          
          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Read our research whitepaper
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-6 md:mb-0">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold">gencryption</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <a 
                href="https://discord.gg/gencryption" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Discord
              </a>
              <a 
                href="https://twitter.com/gencryption" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Twitter
              </a>
              <a 
                href="https://github.com/gencryption" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400 text-sm">
              &copy; 2024 Gencryption. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
