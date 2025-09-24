'use client'

import Image from 'next/image'
import Logo from '../ui/Logo'

const AboutSection = () => {
  const features = [
    {
      icon: "🚁",
      title: "Drone Mapping",
      description: "High-precision aerial mapping using advanced drone technology"
    },
    {
      icon: "🤖",
      title: "AI Recognition",
      description: "YOLOv5-powered automatic field segmentation and analysis"
    },
    {
      icon: "📊",
      title: "Data Analytics",
      description: "Comprehensive field data with ownership and assistance history"
    },
    {
      icon: "🔒",
      title: "Secure Platform",
      description: "AES encryption ensures data privacy and security"
    }
  ]

  const stats = [
    { number: "95%", label: "Mapping Accuracy" },
    { number: "3x", label: "Faster Survey" },
    { number: "500+", label: "Fields Mapped" },
    { number: "24/7", label: "System Uptime" }
  ]

  const teamMembers = [
    {
      name: "Dimas Ade Firmanda",
      role: "Lead Developer",
      image: "/team-1.png", // placeholder
      description: "Full-stack developer specializing in agricultural technology"
    },
    {
      name: "Agricultural Expert",
      role: "Domain Specialist", 
      image: "/team-2.png", // placeholder
      description: "Expert in modern farming practices and drone technology"
    },
    {
      name: "Data Scientist",
      role: "AI/ML Engineer",
      image: "/team-3.png", // placeholder
      description: "Machine learning specialist focused on computer vision"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#567666]/10 px-4 py-2 rounded-full text-[#567666] font-medium text-sm mb-6">
              🌱 About AgriNovaX
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#567666] via-[#394c44] to-[#2d3a33] bg-clip-text text-transparent mb-6">
              Revolutionizing Agriculture with Technology
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're building the future of farming through innovative drone mapping, AI-powered field analysis, and data-driven agricultural insights.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#567666] to-[#394c44] rounded-2xl flex items-center justify-center">
                    <span className="text-white text-xl">🎯</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  AgriNovaX mengintegrasikan teknologi drone, Agisoft, dan YOLOv5 untuk menghasilkan peta ortomosik dan segmentasi sawah secara otomatis. Kami menghitung luas lahan dengan akurat dari citra udara, serta menampilkan data pemilik, ukuran lahan, dan riwayat bantuan melalui platform web yang aman.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#567666] to-[#394c44] rounded-3xl p-8 text-white">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                    <span className="text-white text-xl">⚡</span>
                  </div>
                  <h2 className="text-2xl font-bold">Why AgriNovaX?</h2>
                </div>
                <p className="text-white/90 leading-relaxed text-lg">
                  Informasi bantuan dienkripsi menggunakan AES untuk menjamin keamanan dan privasi. Dengan AgriNovaX, pemetaan pertanian menjadi lebih efisien, akurat, dan aman - membuka jalan menuju pertanian yang lebih modern dan berbasis data.
                </p>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#567666]/20 to-[#394c44]/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <Image
                  src="/user_about.png"
                  alt="AgriNovaX Technology"
                  width={500}
                  height={600}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Features
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Advanced technology stack that makes agricultural mapping precise, efficient, and accessible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg border border-gray-100 h-full">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#567666] to-[#394c44]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Platform Statistics
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Numbers that speak for our commitment to agricultural innovation
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white/80 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Passionate individuals working together to transform agriculture through technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="w-24 h-24 bg-gradient-to-r from-[#567666] to-[#394c44] rounded-full flex items-center justify-center text-white text-3xl font-bold mb-4 mx-auto">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
                    {member.name}
                  </h3>
                  <p className="text-[#567666] font-semibold text-center mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-center text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#567666] via-[#394c44] to-[#2d3a33] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full blur-lg"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white/5 rounded-full blur-md"></div>
          <div className="absolute bottom-1/4 left-1/4 w-20 h-20 bg-white/5 rounded-full blur-lg"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-105 transition-transform duration-300">
              <Logo />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Farm?
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
              Join thousands of farmers already using AgriNovaX to optimize their agricultural operations with precision mapping and data-driven insights.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/auth/signup"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#567666] font-semibold rounded-xl hover:scale-105 hover:bg-gray-50 transition-all duration-300 shadow-lg"
            >
              Get Started Today →
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:border-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutSection