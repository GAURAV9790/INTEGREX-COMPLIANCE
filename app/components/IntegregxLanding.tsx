'use client';

import React from 'react';

import { Linkedin, Instagram } from 'lucide-react';
import Navbar from './Navbar';
import ServicesSlider from './ServicesSlider';

export default function IntegregxLanding() {

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navbar currentPage="home" />

      {/* Hero Section */}
      <section id="home" className="pt-16 pb-8 md:pt-24 md:pb-16 bg-gradient-to-b from-blue-900 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="space-y-6 text-white">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 text-xs font-semibold tracking-[0.2em] uppercase text-blue-100 backdrop-blur-sm">
                ISO • IATF • AS • ISMS • ZED
              </span>
              <h1 className="hero-heading font-['Poppins'] text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-sky-200 bg-clip-text text-transparent">
                  Your Trusted Partner
                </span>
                <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-sky-100 via-white to-blue-200 bg-clip-text text-transparent">
                  In Management System
                </span>
              </h1>
              <p className="hero-subtitle mt-2 font-['Inter'] text-base sm:text-lg md:text-xl text-blue-100/90 leading-relaxed max-w-2xl">
                Integrex delivers innovative solutions to navigate the complexities of regulatory standards with confidence and efficiency.
              </p>
              <div className="hero-subtitle mt-6 flex flex-wrap gap-3">
                <div className="flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs sm:text-sm shadow-[0_12px_40px_rgba(15,23,42,0.5)] backdrop-blur">
                  <span className="mr-2 h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
                  Live support for ISO 9001, 14001, 45001
                </div>
                <div className="flex items-center rounded-full border border-white/10 bg-blue-500/10 px-4 py-2 text-xs sm:text-sm">
                  <span className="mr-2 text-sky-200">⟲</span>
                  Integrated approach for IATF &amp; AS 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Slider Section */}
      <ServicesSlider />

      {/* CTA Section */}
      {/* ... */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <h2 className="text-3xl font-bold text-white mb-6 md:mb-0">
              Ready to streamline your compliance strategy?
            </h2>
            <button className="bg-white text-blue-900 px-8 py-3 rounded font-semibold hover:bg-gray-100 transition">
              Explore Our Solutions
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050816] text-[#C6C9D0] py-12 border-t border-blue-900/60">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-4 mb-8">

            {/* Company */}
            <div>
              <h4 className="text-sm font-semibold font-['Poppins'] tracking-[0.25em] text-white uppercase mb-4">
                Company
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="/about"
                    className="inline-flex items-center text-[#C6C9D0] hover:text-[#4A90E2] hover:underline underline-offset-4 transition-colors duration-200"
                  >
                    <span>About Us</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="inline-flex items-center text-[#C6C9D0] hover:text-[#4A90E2] hover:underline underline-offset-4 transition-colors duration-200"
                  >
                    <span>Services</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#careers"
                    className="inline-flex items-center text-[#C6C9D0] hover:text-[#4A90E2] hover:underline underline-offset-4 transition-colors duration-200"
                  >
                    <span>Careers</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/contact-us"
                    className="inline-flex items-center text-[#C6C9D0] hover:text-[#4A90E2] hover:underline underline-offset-4 transition-colors duration-200"
                  >
                    <span>Contact Us</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="inline-flex items-center text-[#C6C9D0] hover:text-[#4A90E2] hover:underline underline-offset-4 transition-colors duration-200"
                  >
                    <span>Testimonials</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-sm font-semibold font-['Poppins'] tracking-[0.25em] text-white uppercase mb-4">
                Resources
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#blog"
                    className="inline-flex items-center text-[#C6C9D0] hover:text-[#4A90E2] hover:underline underline-offset-4 transition-colors duration-200"
                  >
                    <span>Blog</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#help"
                    className="inline-flex items-center text-[#C6C9D0] hover:text-[#4A90E2] hover:underline underline-offset-4 transition-colors duration-200"
                  >
                    <span>Help Center</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#privacy"
                    className="inline-flex items-center text-[#C6C9D0] hover:text-[#4A90E2] hover:underline underline-offset-4 transition-colors duration-200"
                  >
                    <span>Privacy Policy</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#terms"
                    className="inline-flex items-center text-[#C6C9D0] hover:text-[#4A90E2] hover:underline underline-offset-4 transition-colors duration-200"
                  >
                    <span>Terms &amp; Conditions</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#faqs"
                    className="inline-flex items-center text-[#C6C9D0] hover:text-[#4A90E2] hover:underline underline-offset-4 transition-colors duration-200"
                  >
                    <span>FAQs</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h4 className="text-sm font-semibold font-['Poppins'] tracking-[0.25em] text-white uppercase mb-4">
                Solutions
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#compliance-suite"
                    className="inline-flex items-center text-[#C6C9D0] hover:text-[#4A90E2] hover:underline underline-offset-4 transition-colors duration-200"
                  >
                    <span>Management System</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#audit-risk"
                    className="inline-flex items-center text-[#C6C9D0] hover:text-[#4A90E2] hover:underline underline-offset-4 transition-colors duration-200"
                  >
                    <span>MSME Sustainable &amp;ZED Certification Scheme </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#document-verification"
                    className="inline-flex items-center text-[#C6C9D0] hover:text-[#4A90E2] hover:underline underline-offset-4 transition-colors duration-200"
                  >
                    <span>MSME Competitive LEAN Scheme</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#digital-signature"
                    className="inline-flex items-center text-[#C6C9D0] hover:text-[#4A90E2] hover:underline underline-offset-4 transition-colors duration-200"
                  >
                    <span>Regulatory Compilance</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h4 className="text-sm font-semibold font-['Poppins'] tracking-[0.25em] text-white uppercase mb-4">
                Follow Us
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#linkedin"
                    className="inline-flex items-center gap-2 text-[#C6C9D0] hover:text-[#4A90E2] hover:underline underline-offset-4 transition-colors duration-200"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#instagram"
                    className="inline-flex items-center gap-2 text-[#C6C9D0] hover:text-[#4A90E2] hover:underline underline-offset-4 transition-colors duration-200"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>Instagram</span>
                  </a>
                </li>
              </ul>
            </div>

          </div>

        </div>

        <div className="border-t border-blue-900/40 pt-6 mt-6">
          <p className="text-xs text-gray-500 text-center">
            2024 Integrex Compliance Tech Private Limited. All Rights Reserved.
          </p>
        </div>

      </footer>

    </div>
  );
};