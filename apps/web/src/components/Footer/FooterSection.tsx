'use client'

import Logo from '@/components/ui/Logo'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white text-black pb-4">
      <div className="w-full grid md:grid-cols-3">

        {/* Kolom 1 */}
        <div className="p-4 pt-15 min-h-[300px] flex flex-col items-start">
          <div className="mb-4">
            <Logo />
          </div>
          <p className="text-[16px] leading-relaxed">
            Platform pemetaan pertanian berbasis drone dan AI yang membantu petani
            mengelola lahan secara akurat, aman, dan efisien.
          </p>
          {/* Ikon Sosial Media */}
          <div className="flex space-x-4 mt-4">
            <a href="https://www.instagram.com/dimassaade?igsh=MTY1M2h0bXA1YjBhdQ%3D%3D&utm_source=qr" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <img
                src="/instagram.png"
                alt="Instagram"
                className="w-6 h-6 hover:opacity-75 transition duration-300"
              />
            </a>
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <img
                src="/facebook.png"
                alt="Facebook"
                className="w-6 h-6 hover:opacity-75 transition duration-300"
              />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <img
                src="/twitter.png"
                alt="Twitter"
                className="w-6 h-6 hover:opacity-75 transition duration-300"
              />
            </a>
          </div>
        </div>

        {/* Kolom 2 */}
        <div className="p-4 pt-15 bg-[#567666] text-white min-h-[300px] flex flex-col items-start">
          <h4 className="text-2xl font-semibold mb-2">Contact Us</h4>
          <ul className="text-sm space-y-1">
            <li className="text-[16px] flex items-start gap-2">
              <img src="/placeholder.png" alt="Location Icon" className="w-5 h-5 " />
              <span>
                Kampus PENS, Jl. Raya ITS, Keputih, Kec. Sukolilo, Surabaya, Jawa Timur 60117
              </span>
            </li>
            <li className="text-[16px] flex items-start gap-2">
              <img src="/mail.png" alt="Email Icon" className="w-5 h-5 " />
              <span>grupmobilecs24@gmail.com</span>
            </li>

          </ul>
        </div>

        {/* Kolom 3 */}
        <div className="p-4 pt-15 bg-[#567666] text-white min-h-[300px] flex flex-col items-start">
          <h4 className="text-2xl font-semibold mb-2">Company</h4>
          <ul className="text-[16px] space-y-1">
            <li className="text-[16px]">
              <a href="#" className="hover:underline">About</a>
            </li>
            <li className="text-[16px]">
              <a href="#" className="hover:underline">Terms & Conditions</a>
            </li>
            <li className="text-[16px]">
              <a href="#" className="hover:underline">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-[16px] border-t border-black/10 pt-4">
        Dimas Ade Firmanda &copy; {currentYear}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
