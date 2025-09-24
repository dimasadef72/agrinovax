"use client";

import Logo from "@/components/ui/Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Beautiful layered wave section */}
      <div className="w-full relative overflow-hidden">
        {/* Main gradient background */}
        <div className="h-32 bg-gradient-to-r from-[#567666] via-[#394c44] to-[#2d3a33] relative">
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#567666]/80 via-[#394c44]/80 to-[#2d3a33]/80 animate-pulse"></div>

          {/* Decorative circles */}
          <div className="absolute top-4 left-20 w-4 h-4 bg-white/20 rounded-full animate-bounce delay-100"></div>
          <div className="absolute top-8 right-32 w-3 h-3 bg-white/30 rounded-full animate-bounce delay-300"></div>
          <div className="absolute top-12 left-1/3 w-2 h-2 bg-white/25 rounded-full animate-bounce delay-500"></div>
          <div className="absolute top-6 right-1/4 w-5 h-5 bg-white/15 rounded-full animate-bounce delay-700"></div>
        </div>

        {/* Primary wave */}
        <svg
          className="absolute bottom-0 w-full h-24 -mb-1"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,32L40,42.7C80,53,160,75,240,85.3C320,96,400,96,480,90.7C560,85,640,75,720,74.7C800,75,880,85,960,90.7C1040,96,1120,96,1160,96L1200,96L1200,120L1160,120C1120,120,1040,120,960,120C880,120,800,120,720,120C640,120,560,120,480,120C400,120,320,120,240,120C160,120,80,120,40,120L0,120Z"
            fill="url(#wave-gradient-1)"
          />
          <defs>
            <linearGradient
              id="wave-gradient-1"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#f8fafc" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#f1f5f9" stopOpacity="0.9" />
            </linearGradient>
          </defs>
        </svg>

        {/* Secondary wave for depth */}
        <svg
          className="absolute bottom-0 w-full h-20 -mb-1"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,85.3C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            fill="url(#wave-gradient-2)"
          />
          <defs>
            <linearGradient
              id="wave-gradient-2"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#f9fafb" />
              <stop offset="50%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#f3f4f6" />
            </linearGradient>
          </defs>
        </svg>

        {/* Third wave for extra depth */}
        <svg
          className="absolute bottom-0 w-full h-16"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,96L80,90.7C160,85,320,75,480,69.3C640,64,800,64,960,69.3C1120,75,1280,85,1360,90.7L1440,96L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-5">
            <div className="hover:scale-105 transition-transform duration-300 ease-out">
              <Logo />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Platform pemetaan pertanian berbasis drone dan AI yang membantu
              petani mengelola lahan secara akurat, aman, dan efisien.
            </p>

            {/* Social Media */}
            <div className="flex space-x-3">
              <a
                href="https://www.instagram.com/dimassaade?igsh=MTY1M2h0bXA1YjBhdQ%3D%3D&utm_source=qr"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 bg-white shadow-md hover:shadow-xl rounded-2xl border border-gray-100 hover:border-pink-200 transition-all duration-300 hover:scale-110"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <img
                  src="/instagram.png"
                  alt="Instagram"
                  className="w-6 h-6 group-hover:brightness-75 transition-all duration-300 relative z-10"
                />
              </a>
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 bg-white shadow-md hover:shadow-xl rounded-2xl border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:scale-110"
              >
                <div className="absolute inset-0 bg-blue-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <img
                  src="/facebook.png"
                  alt="Facebook"
                  className="w-6 h-6 group-hover:brightness-75 transition-all duration-300 relative z-10"
                />
              </a>
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 bg-white shadow-md hover:shadow-xl rounded-2xl border border-gray-100 hover:border-sky-200 transition-all duration-300 hover:scale-110"
              >
                <div className="absolute inset-0 bg-sky-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <img
                  src="/twitter.png"
                  alt="Twitter"
                  className="w-6 h-6 group-hover:brightness-75 transition-all duration-300 relative z-10"
                />
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-5">
            <div className="relative">
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                Hubungi Kami
              </h4>
              <div className="w-12 h-0.5 bg-gradient-to-r from-[#567666] to-[#394c44] rounded-full"></div>
            </div>

            <div className="space-y-4">
              <div className="group flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-[#567666]/30 transition-all duration-300">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#567666] to-[#394c44] rounded-full flex items-center justify-center shadow-sm">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <span className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                  Kampus PENS, Jl. Raya ITS, Keputih, Kec. Sukolilo, Surabaya,
                  Jawa Timur 60117
                </span>
              </div>

              <div className="group flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-[#567666]/30 transition-all duration-300">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#567666] to-[#394c44] rounded-full flex items-center justify-center shadow-sm">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                </div>
                <span className="text-gray-600 text-sm group-hover:text-gray-800 transition-colors duration-300">
                  grupmobilecs24@gmail.com
                </span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-8">
            <div className="relative">
              <h4 className="text-2xl font-bold text-gray-900 mb-2">
                Perusahaan
              </h4>
              <div className="w-16 h-1 bg-gradient-to-r from-[#394c44] to-[#2d3a33] rounded-full"></div>
            </div>

            <nav className="space-y-3">
              {["Tentang Kami", "Syarat & Ketentuan", "Kebijakan Privasi"].map(
                (item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="group flex items-center gap-3 p-3 rounded-xl text-gray-600 hover:text-gray-900 hover:bg-white hover:shadow-sm border border-transparent hover:border-gray-100 transition-all duration-300"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-[#567666] to-[#394c44] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="text-sm font-medium">{item}</span>
                  </a>
                )
              )}
            </nav>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              Dimas Ade Firmanda &copy; {currentYear}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
