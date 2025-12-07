'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Settings, FileText, Target, Eye, Users, Menu, X, Leaf, Zap } from 'lucide-react';

const isoMenuLinks = [
  { href: '/management-system#iso-9001', label: 'ISO 9001 - Quality Management System (QMS)' },
  { href: '/management-system#iso-14001', label: 'ISO 14001 - Environmental Management System (EMS)' },
  { href: '/management-system#iso-45001', label: 'ISO 45001 - Occupational Health & Safety Management System (OHSMS)' },
  { href: '/management-system#iatf-16949', label: 'IATF 16949 - Automotive Quality Management System (AQMS)' },
  { href: '/management-system#as-9100', label: 'AS 9100 - Aerospace Quality Management System (ASQMS)' },
  { href: '/management-system#iso-27001', label: 'ISO 27001 - Information Security Management System (ISMS)' },
];

const zedMenuLinks = [
  { href: '/msme-sustainable#about-zed', label: 'About ZED' },
  { href: '/msme-sustainable#msme-zed-certification', label: 'MSME ZED Certification' },
  { href: '/msme-sustainable#msme-zed-benefits', label: 'MSME ZED Benefits & Incentives' },
];

const regulatoryMenuLinks = [
  { href: '/regulatory-compliance#nsic-registration', label: 'NSIC Registration' },
  { href: '/regulatory-compliance#factory-act', label: 'Factory Act' },
  { href: '/regulatory-compliance#mpcb-compliance', label: 'MPCB Compliance' },
  { href: '/regulatory-compliance#trade-mark-compliance', label: 'Trade Mark Compliance' },
  { href: '/regulatory-compliance#copy-right-compliance', label: 'Copy Right Compliance' },
  { href: '/regulatory-compliance#ce-marking-certification', label: 'CE Marking Certification' },
  { href: '/regulatory-compliance#fssi', label: 'FSSI' },
];

type NavbarProps = {
  currentPage?: 'home' | 'management-system' | 'services' | 'about' | 'contact';
};

export default function Navbar({ currentPage = 'home' }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isActive = (page: string) => currentPage === page;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100/20' 
          : 'bg-white shadow-[0_2px_15px_rgba(0,0,0,0.03)] border-b border-gray-100/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="flex justify-between items-center h-[72px]">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="relative h-16 w-48 flex items-center pl-1">
              <img
                src="/integrexlogo.jpg"
                alt="Integrex Logo"
                className="object-contain w-auto h-full"
                style={{
                  maxHeight: '100%',
                  maxWidth: '100%',
                  objectPosition: 'left center',
                  padding: '6px 0',
                }}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <Link 
                href="/" 
                onClick={(e) => isActive('home') && e.preventDefault()}
                className={`relative px-3 py-2.5 font-semibold font-['Poppins'] text-[15px] transition-all duration-300 group ${
                  isActive('home') ? 'text-[#0a3d8f] cursor-default' : 'text-[#0A1A3A] hover:text-[#0a3d8f] cursor-pointer'
                }`}
              >
                <span className="relative z-10">
                  Home
                  <span className={`absolute left-0 -bottom-1 h-[2px] bg-[#0d47a1] transition-all duration-300 ${
                    isActive('home') ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </span>
              </Link>
              {isActive('home') && <div className="absolute left-0 right-0 h-4 -bottom-4 z-50"></div>}
            </div>
            
            {/* About Us Dropdown */}
            <div className="relative group">
              <div className="relative">
                <Link
                  href="/about"
                  onClick={(e) => isActive('about') && e.preventDefault()}
                  className={`relative flex items-center font-semibold font-['Poppins'] text-[15px] transition-all duration-300 focus:outline-none group px-3 py-2.5 ${
                    isActive('about')
                      ? 'text-[#0a3d8f] cursor-default'
                      : 'text-[#0A1A3A] hover:text-[#0a3d8f] cursor-pointer'
                  }`}
                >
                  <span className="relative z-10 flex items-center">
                    <span>About Us</span>
                    <svg 
                      className={`w-3.5 h-3.5 ml-1.5 -mr-0.5 inline-block transition-all duration-300 ${
                        isActive('about') ? 'opacity-100 rotate-180' : 'opacity-70 group-hover:opacity-100 group-hover:rotate-180'
                      }`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                    <span className={`absolute left-0 -bottom-1 h-[2px] bg-[#0d47a1] transition-all duration-300 ${
                      isActive('about') ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                  </span>
                </Link>
                <div className="absolute left-0 right-0 h-4 -bottom-4 z-50"></div>
              </div>
              
              <div className="absolute left-1/2 -translate-x-1/2 mt-1 w-64 rounded-xl bg-gradient-to-br from-white to-gray-50 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0 z-50 overflow-hidden border border-gray-100">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                
                <div className="relative z-10 py-2" role="menu" aria-orientation="vertical">
                  {[
                    { id: 'history', label: 'History', icon: <FileText className="w-4 h-4" /> },
                    { id: 'mission', label: 'Mission', icon: <Target className="w-4 h-4" /> },
                    { id: 'vision', label: 'Vision', icon: <Eye className="w-4 h-4" /> },
                    { id: 'our-people', label: 'Our People', icon: <Users className="w-4 h-4" /> },
                    { id: 'people-we-serve', label: 'People We Serve', icon: <Users className="w-4 h-4" /> }
                  ].map((item, index) => (
                    <Link 
                      key={item.id}
                      href={`/about#${item.id}`}
                      className="group/item relative block px-6 py-3.5 text-[#0A1A3A] hover:text-[#0d47a1] transition-all duration-300 overflow-hidden font-['Inter'] text-[14.5px]"
                      style={{ transitionDelay: `${index * 30}ms` }}
                      role="menuitem"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent -translate-x-full group-hover/item:translate-x-0 transition-transform duration-500"></div>
                      
                      <div className="relative z-10 flex items-center">
                        <span className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg mr-3 transform -translate-x-2 group-hover/item:translate-x-0 transition-all duration-300 group-hover/item:rotate-6">
                          {item.icon}
                        </span>
                        <span className="font-medium">{item.label}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <div className="relative">
                <Link
                  href="/management-system"
                  onClick={(e) => isActive('management-system') && e.preventDefault()}
                  className={`relative flex items-center font-semibold font-['Poppins'] text-[15px] transition-all duration-300 focus:outline-none group px-3 py-2.5 ${
                    isActive('management-system') ? 'text-[#0a3d8f] cursor-default' : 'text-[#0A1A3A] hover:text-[#0a3d8f] cursor-pointer'
                  }`}
                >
                  <span className="relative z-10 flex items-center">
                    <span>Services</span>
                    <svg 
                      className={`w-3.5 h-3.5 ml-1.5 -mr-0.5 inline-block transition-all duration-300 ${
                        isActive('management-system') ? 'opacity-100 rotate-180' : 'opacity-70 group-hover:opacity-100 group-hover:rotate-180'
                      }`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                    <span className={`absolute left-0 -bottom-1 h-[2px] bg-[#0d47a1] transition-all duration-300 ${
                      isActive('management-system') ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                  </span>
                </Link>
                <div className="absolute left-0 right-0 h-4 -bottom-4 z-50"></div>
              </div>

              <div className="absolute left-1/2 -translate-x-1/2 mt-1 w-80 rounded-xl bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0 z-50 border border-gray-100/50">
                <div className="relative z-10 py-2" role="menu" aria-orientation="vertical">
                  {/* Management System with ISO submenu */}
                  <div className="relative group/item">
                    <Link
                      href="/management-system"
                      className="relative block px-6 py-3.5 text-[#0A1A3A] hover:text-[#0d47a1] hover:bg-blue-50/80 transition-all duration-200 font-['Inter'] text-[14.5px] rounded-lg group/item"
                      role="menuitem"
                    >
                      <div className="flex items-center">
                        <span className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg mr-3 transform -translate-x-2 group-hover/item:translate-x-0 transition-all duration-300 group-hover/item:rotate-6">
                          <Settings className="w-4 h-4" />
                        </span>
                        <span className="font-medium text-left">Management System</span>
                      </div>
                    </Link>

                    <div className="absolute top-0 left-full ml-2 w-[360px] rounded-xl bg-white shadow-xl border border-gray-100/80 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200 transform -translate-x-2 group-hover/item:translate-x-0 z-50">
                      <div className="py-3 text-[13.5px] font-['Inter'] text-[#0A1A3A]">
                        {isoMenuLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="flex items-start px-5 py-1.5 hover:bg-blue-50 hover:text-[#0d47a1] transition-colors duration-200"
                          >
                            <span className="mt-1 mr-2 h-2 w-2 rounded-full bg-blue-500" />
                            <span>{link.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* MSME Sustainable ZED with 3 subsections */}
                  <div className="relative group/item mt-0.5">
                    <Link
                      href="/msme-sustainable"
                      className="relative block px-6 py-3.5 text-[#0A1A3A] hover:text-[#0d47a1] hover:bg-blue-50/80 transition-all duration-200 font-['Inter'] text-[14.5px] rounded-lg group/item"
                      role="menuitem"
                    >
                      <div className="flex items-center">
                        <span className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg mr-3 transform -translate-x-2 group-hover/item:translate-x-0 transition-all duration-300 group-hover/item:rotate-6">
                          <Leaf className="w-4 h-4" />
                        </span>
                        <span className="font-medium text-left">MSME Sustainable ZED Certification Scheme</span>
                      </div>
                    </Link>

                    <div className="absolute top-0 left-full ml-2 w-72 rounded-xl bg-white shadow-xl border border-gray-100/80 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200 transform -translate-x-2 group-hover/item:translate-x-0 z-50">
                      <div className="py-3 text-[13.5px] font-['Inter'] text-[#0A1A3A]">
                        {zedMenuLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="flex items-start px-5 py-1.5 hover:bg-blue-50 hover:text-[#0d47a1] transition-colors duration-200"
                          >
                            <span className="mt-1 mr-2 h-2 w-2 rounded-full bg-blue-500" />
                            <span>{link.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* MSME LEAN - direct link */}
                  <Link
                    href="/msme-lean"
                    className="group/item relative block px-6 py-3.5 text-[#0A1A3A] hover:text-[#0d47a1] hover:bg-blue-50/80 transition-all duration-200 font-['Inter'] text-[14.5px] rounded-lg"
                    role="menuitem"
                  >
                    <div className="flex items-center">
                      <span className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg mr-3 transform -translate-x-2 group-hover/item:translate-x-0 transition-all duration-300 group-hover/item:rotate-6">
                        <Zap className="w-4 h-4" />
                      </span>
                      <span className="font-medium text-left">MSME Competitive (LEAN) Scheme</span>
                    </div>
                  </Link>

                  {/* Regulatory Compliance with submenu */}
                  <div className="relative group/item mt-0.5">
                    <Link
                      href="/regulatory-compliance"
                      className="relative block px-6 py-3.5 text-[#0A1A3A] hover:text-[#0d47a1] hover:bg-blue-50/80 transition-all duration-200 font-['Inter'] text-[14.5px] rounded-lg group/item"
                      role="menuitem"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <span className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg mr-3 transform -translate-x-2 group-hover/item:translate-x-0 transition-all duration-300 group-hover/item:rotate-6">
                            <Settings className="w-4 h-4" />
                          </span>
                          <span className="font-medium text-left">Regulatory Compliance</span>
                        </div>
                        <svg
                          className="w-4 h-4 ml-3 text-gray-400 group-hover/item:text-[#0d47a1] group-hover/item:translate-x-0.5 transition-all duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </Link>

                    <div className="absolute top-0 left-full ml-2 w-72 rounded-xl bg-white shadow-xl border border-gray-100/80 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200 transform -translate-x-2 group-hover/item:translate-x-0 z-50">
                      <div className="py-3 text-[13.5px] font-['Inter'] text-[#0A1A3A]">
                        {regulatoryMenuLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="flex items-start px-5 py-1.5 hover:bg-blue-50 hover:text-[#0d47a1] transition-colors duration-200"
                          >
                            <span className="mt-1 mr-2 h-2 w-2 rounded-full bg-blue-500" />
                            <span>{link.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/contact-us"
              onClick={(e) => isActive('contact') && e.preventDefault()}
              className={`relative px-3 py-2.5 font-semibold font-['Poppins'] text-[15px] transition-all duration-300 group ${
                isActive('contact') ? 'text-[#0a3d8f] cursor-default' : 'text-[#0A1A3A] hover:text-[#0a3d8f] cursor-pointer'
              }`}
            >
              <span className="relative z-10">
                Contact
                <span className={`absolute left-0 -bottom-1 h-[2px] bg-[#0d47a1] transition-all duration-300 ${
                  isActive('contact') ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </span>
            </Link>
            {isActive('contact') && <div className="absolute left-0 right-0 h-4 -bottom-4 z-50"></div>}

            <Link
              href="/contact-us"
              className="ml-8 bg-gradient-to-r from-[#0d47a1] to-[#1565c0] text-white px-7 py-2.5 rounded-md font-semibold font-['Poppins'] text-[15px] transition-all duration-300 hover:shadow-[0_4px_18px_rgba(13,71,161,0.25)] hover:-translate-y-0.5 hover:shadow-lg"
            >
              Get In Touch
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
          <Link
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          
          <div className="relative">
            <button
              className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={() => {
                const aboutMenu = document.getElementById('mobile-about-menu');
                if (aboutMenu) {
                  aboutMenu.classList.toggle('hidden');
                }
              }}
            >
              <span>About Us</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div id="mobile-about-menu" className="hidden pl-4 mt-1 space-y-1">
              <Link href="/about#history" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50">
                History
              </Link>
              <Link href="/about#mission" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50">
                Mission
              </Link>
              <Link href="/about#vision" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50">
                Vision
              </Link>
              <Link href="/about#our-people" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50">
                Our People
              </Link>
              <Link href="/about#people-we-serve" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50">
                People We Serve
              </Link>
            </div>
          </div>

          <div className="relative">
            <button
              className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={() => {
                const servicesMenu = document.getElementById('mobile-services-menu');
                if (servicesMenu) {
                  servicesMenu.classList.toggle('hidden');
                }
              }}
            >
              <span>Services</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div id="mobile-services-menu" className="hidden pl-4 mt-1 space-y-1">
              <Link href="/management-system" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50">
                Management System
              </Link>
              <Link href="/msme-sustainable" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50">
                MSME Sustainable ZED Certification Scheme
              </Link>
              <Link href="/msme-lean" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50">
                MSME Competitive (LEAN) Scheme
              </Link>
              <Link href="/regulatory-compliance" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50">
                Regulatory Compliance
              </Link>
            </div>
          </div>

          <Link
            href="/contact-us"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>

          <Link
            href="/contact-us"
            className="block w-full text-center mt-2 px-4 py-2.5 bg-gradient-to-r from-[#0d47a1] to-[#1565c0] text-white rounded-md font-semibold text-base hover:shadow-lg transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </nav>
  );
}
