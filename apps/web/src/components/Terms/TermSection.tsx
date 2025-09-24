'use client'

import { useState } from 'react'

const TermSection = () => {
  const [expandedSections, setExpandedSections] = useState<number[]>([])

  const toggleSection = (index: number) => {
    setExpandedSections(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const sections = [
    {
      title: "Introduction",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Welcome to AgriNovaX ("we," "our," or "us"). These Terms and Conditions ("Terms") govern your use of our agricultural mapping platform and services (the "Service") operated by AgriNovaX.
          </p>
          <p className="text-gray-700 leading-relaxed">
            By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access the Service.
          </p>
        </div>
      )
    },
    {
      title: "Acceptance of Terms",
      content: (
        <p className="text-gray-700 leading-relaxed">
          By creating an account and using AgriNovaX, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions and our Privacy Policy.
        </p>
      )
    },
    {
      title: "Description of Service",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            AgriNovaX provides a drone-based agricultural mapping platform that offers:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
              <div className="w-2 h-2 bg-[#567666] rounded-full"></div>
              <span className="text-gray-700">Interactive field mapping</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
              <div className="w-2 h-2 bg-[#567666] rounded-full"></div>
              <span className="text-gray-700">Data analysis tools</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
              <div className="w-2 h-2 bg-[#567666] rounded-full"></div>
              <span className="text-gray-700">Farm management insights</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
              <div className="w-2 h-2 bg-[#567666] rounded-full"></div>
              <span className="text-gray-700">Crop monitoring</span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "User Accounts",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            To access certain features of our Service, you must create an account. You agree to:
          </p>
          <div className="space-y-3">
            {[
              "Provide accurate and complete information",
              "Keep your account information updated", 
              "Maintain the security of your password",
              "Accept responsibility for all activities under your account"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center text-xs font-medium text-blue-600 mt-0.5">
                  {idx + 1}
                </div>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Acceptable Use",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            You agree not to use the Service to:
          </p>
          <div className="space-y-3">
            {[
              "Violate any applicable laws or regulations",
              "Infringe on the rights of others",
              "Upload malicious code or compromise system security",
              "Use the service for unauthorized commercial purposes",
              "Interfere with the proper functioning of the Service"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center text-red-600 mt-0.5">
                  ✕
                </div>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Privacy & Data Protection",
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg">
            <p className="text-gray-700 leading-relaxed">
              Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information when you use our Service. By using our Service, you agree to the collection and use of information in accordance with our Privacy Policy.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
            <div className="text-center p-4 bg-white rounded-lg shadow-sm border">
              <div className="text-2xl mb-2">🔒</div>
              <p className="text-sm font-medium text-gray-800">Secure Storage</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm border">
              <div className="text-2xl mb-2">🛡️</div>
              <p className="text-sm font-medium text-gray-800">Data Protection</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm border">
              <div className="text-2xl mb-2">👤</div>
              <p className="text-sm font-medium text-gray-800">User Control</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Intellectual Property",
      content: (
        <div className="bg-yellow-50 p-4 rounded-lg">
          <p className="text-gray-700 leading-relaxed">
            The Service and its original content, features, and functionality are and will remain the exclusive property of AgriNovaX and its licensors. The Service is protected by copyright, trademark, and other intellectual property laws.
          </p>
        </div>
      )
    },
    {
      title: "Contact Information",
      content: (
        <div className="bg-gradient-to-br from-[#567666] to-[#394c44] p-6 rounded-lg text-white">
          <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                📧
              </div>
              <div>
                <p className="text-sm opacity-90">Email</p>
                <p className="font-medium">grupmobilecs24@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                📍
              </div>
              <div>
                <p className="text-sm opacity-90">Location</p>
                <p className="font-medium">PENS, Surabaya</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ]

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50 py-8 md:py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto">
        {/* Modern Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#567666]/10 px-4 py-2 rounded-full text-[#567666] font-medium text-sm mb-4">
            📋 Legal Agreement
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent mb-4">
            Terms & Conditions
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Please read these terms carefully before using our agricultural mapping platform
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-500">
            <span>Last updated:</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full font-medium">
              {new Date().toLocaleDateString('id-ID', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </span>
          </div>
        </div>

        {/* Modern Accordion */}
        <div className="space-y-4 mb-12">
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300">
              <button
                onClick={() => toggleSection(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#567666] to-[#394c44] rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    {section.title}
                  </h3>
                </div>
                <div className={`transform transition-transform duration-300 ${
                  expandedSections.includes(index) ? 'rotate-180' : ''
                }`}>
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              {expandedSections.includes(index) && (
                <div className="px-6 pb-6 border-t border-gray-100">
                  <div className="pt-4">
                    {section.content}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#567666] to-[#394c44] rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            By continuing to use AgriNovaX, you acknowledge that you have read and agree to these terms and conditions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#567666] font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              ← Back to Home
            </a>
            <a
              href="/auth/signup"
              className="inline-flex items-center justify-center px-6 py-3 bg-white/10 backdrop-blur text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              Create Account →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TermSection