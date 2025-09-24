'use client'

import React, { useState } from 'react'

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Reset form
    setFormData({ fullName: '', email: '', subject: '', message: '' })
    setIsSubmitting(false)
    alert('Thank you! Your message has been sent.')
  }

  const contactMethods = [
    {
      icon: "📍",
      title: "Visit Us",
      details: ["Kampus PENS, Jl. Raya ITS", "Keputih, Sukolilo", "Surabaya, Jawa Timur 60117"],
      action: "Get Directions",
      actionLink: "https://maps.google.com/?q=PENS+Surabaya"
    },
    {
      icon: "📞",
      title: "Call Us", 
      details: ["+62 815-7464-4513", "Mon - Fri: 9AM - 5PM", "Weekend: By Appointment"],
      action: "Call Now",
      actionLink: "tel:+6281574644513"
    },
    {
      icon: "📧",
      title: "Email Us",
      details: ["grupmobilecs24@gmail.com", "Response within 24 hours", "Technical support available"],
      action: "Send Email",
      actionLink: "mailto:grupmobilecs24@gmail.com"
    },
    {
      icon: "💬",
      title: "Live Chat",
      details: ["Instant messaging support", "Available 24/7", "Quick technical assistance"],
      action: "Start Chat",
      actionLink: "#"
    }
  ]

  const faqs = [
    {
      question: "How accurate is AgriNovaX mapping?",
      answer: "Our drone mapping technology provides 95%+ accuracy with centimeter-level precision for field boundaries and area calculations."
    },
    {
      question: "What drone technology do you use?",
      answer: "We use advanced commercial drones equipped with high-resolution cameras and GPS systems, processed through Agisoft for ortomosaic generation."
    },
    {
      question: "How long does field mapping take?",
      answer: "Depending on field size, mapping typically takes 30-60 minutes for data collection, with processing completed within 24 hours."
    },
    {
      question: "Is my farm data secure?",
      answer: "Yes, all data is encrypted using AES encryption and stored securely. We follow strict privacy policies to protect your agricultural information."
    }
  ]

  const socialLinks = [
    { name: "Instagram", icon: "📸", url: "https://www.instagram.com/dimassaade?igsh=MTY1M2h0bXA1YjBhdQ%3D%3D&utm_source=qr" },
    { name: "Facebook", icon: "👥", url: "#" },
    { name: "Twitter", icon: "🐦", url: "#" },
    { name: "LinkedIn", icon: "💼", url: "#" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#567666]/10 px-4 py-2 rounded-full text-[#567666] font-medium text-sm mb-6">
            📞 Get In Touch
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#567666] via-[#394c44] to-[#2d3a33] bg-clip-text text-transparent mb-6">
            We'd Love to Hear From You
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Have questions about AgriNovaX? Need technical support? Want to discuss a custom solution for your farm? Our team is here to help you succeed.
          </p>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Multiple Ways to Connect
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Choose the communication method that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="group hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg border border-gray-100 h-full">
                  <div className="text-4xl mb-4">{method.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{method.title}</h3>
                  <div className="space-y-1 mb-4">
                    {method.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                    ))}
                  </div>
                  <a 
                    href={method.actionLink}
                    className="inline-flex items-center gap-2 text-[#567666] font-semibold hover:text-[#394c44] transition-colors text-sm"
                  >
                    {method.action} →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Send us a Message</h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#567666] focus:border-[#567666] transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your@email.com"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#567666] focus:border-[#567666] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#567666] focus:border-[#567666] transition-colors"
                  >
                    <option value="">Select a topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="technical">Technical Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="demo">Request Demo</option>
                    <option value="pricing">Pricing Information</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    placeholder="Tell us about your project or question..."
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#567666] focus:border-[#567666] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#567666] to-[#394c44] text-white py-4 px-6 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </span>
                  ) : (
                    'Send Message →'
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info & FAQ */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <div className="bg-gradient-to-r from-[#567666] to-[#394c44] rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Quick Contact</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      📧
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-white/80">grupmobilecs24@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      📞
                    </div>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-white/80">+62 815-7464-4513</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      ⏰
                    </div>
                    <div>
                      <p className="font-semibold">Business Hours</p>
                      <p className="text-white/80">Mon - Fri: 9AM - 5PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <details key={index} className="group">
                      <summary className="flex items-center justify-between cursor-pointer p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                        <span className="font-semibold text-gray-900">{faq.question}</span>
                        <span className="text-[#567666] group-open:rotate-180 transition-transform">▼</span>
                      </summary>
                      <div className="mt-2 p-4 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social & CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#567666] via-[#394c44] to-[#2d3a33] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full blur-lg"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white/5 rounded-full blur-md"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Connected
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Follow us on social media for the latest updates and agricultural insights
          </p>
          
          <div className="flex justify-center gap-4 mb-12">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/10 hover:border-white/30"
                title={social.name}
              >
                <span className="text-2xl">{social.icon}</span>
              </a>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/auth/signup"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#567666] font-semibold rounded-xl hover:scale-105 hover:bg-gray-50 transition-all duration-300 shadow-lg"
            >
              Start Your Journey →
            </a>
            <a
              href="/about"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:border-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactSection