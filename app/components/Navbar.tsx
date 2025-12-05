'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Settings, FileText, Target, Eye, Users, Menu, X } from 'lucide-react';

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
                <button 
                  className={`relative flex items-center font-semibold font-['Poppins'] text-[15px] transition-all duration-300 focus:outline-none group px-3 py-2.5 ${
                    isActive('about') ? 'text-[#0a3d8f]' : 'text-[#0A1A3A] hover:text-[#0a3d8f]'
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
                </button>
                <div className="absolute left-0 right-0 h-4 -bottom-4 z-50"></div>
              </div>
              
              <div className="absolute left-1/2 -translate-x-1/2 mt-1 w-64 rounded-xl bg-gradient-to-br from-white to-gray-50 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0 z-50 overflow-hidden border border-gray-100">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                
                <div className="relative z-10 py-2" role="menu" aria-orientation="vertical">
                  {[
                    { id: 'history', label: 'History', icon: <FileText className="w-4 h-4" /> },
                    { id: 'mission', label: 'Mission', icon: <Target className="w-4 h-4" /> },
                    { id: 'vision', label: 'Vision', icon: <Eye className="w-4 h-4" /> },
                    { id: 'our-people', label: 'Our People', icon: <Users className="w-4 h-4" /> }
                  ].map((item, index) => (
                    <Link 
                      key={item.id}
                      href={`#${item.id}`}
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
                  <Link 
                    href="/management-system"
                    className="group/item relative block px-6 py-3.5 text-[#0A1A3A] hover:text-[#0d47a1] transition-all duration-300 font-['Inter'] text-[14.5px]"
                    role="menuitem"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent -translate-x-full group-hover/item:translate-x-0 transition-transform duration-500"></div>
                    
                    <div className="relative z-10 flex items-center">
                      <span className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg mr-3 transform -translate-x-2 group-hover/item:translate-x-0 transition-all duration-300 group-hover/item:rotate-6">
                        <Settings className="w-4 h-4" />
                      </span>
                      <span className="font-medium">Management System</span>
                    </div>
                  </Link>

                  <div className="relative group mt-1">
                    <button
                      type="button"
                      className="relative flex w-full items-center justify-between px-6 py-3.5 text-[#0A1A3A] hover:text-[#0d47a1] transition-all duration-300 font-['Inter'] text-[14.5px]"
                    >
                      <div className="relative z-10 flex items-center">
                        <span className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg mr-3 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300 group-hover:rotate-6">
                          <Settings className="w-4 h-4" />
                        </span>
                        <span className="font-medium">Regulatory Compliance</span>
                      </div>
                      <svg
                        className="w-4 h-4 text-gray-400 transition-transform duration-300 group-hover:translate-x-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    <div className="absolute top-1/2 left-full -translate-y-1/2 w-64 rounded-xl bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform -translate-x-2 group-hover:translate-x-0 border border-gray-100/70">
                      <ul className="py-2 text-[14px] font-['Inter'] text-[#0A1A3A]">
                        <li className="px-5 py-2 hover:bg-blue-50 hover:text-[#0d47a1] transition-colors duration-200">NSIC Registration</li>
                        <li className="px-5 py-2 hover:bg-blue-50 hover:text-[#0d47a1] transition-colors duration-200">MPCB Compliance</li>
                        <li className="px-5 py-2 hover:bg-blue-50 hover:text-[#0d47a1] transition-colors duration-200">Trade Mark Compliance</li>
                        <li className="px-5 py-2 hover:bg-blue-50 hover:text-[#0d47a1] transition-colors duration-200">Copy Right Compliance</li>
                        <li className="px-5 py-2 hover:bg-blue-50 hover:text-[#0d47a1] transition-colors duration-200">CE Marking Certification</li>
                        <li className="px-5 py-2 hover:bg-blue-50 hover:text-[#0d47a1] transition-colors duration-200">FSSI</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="#contact"
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
              href="#contact"
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
              <Link href="#history" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50">
                History
              </Link>
              <Link href="#mission" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50">
                Mission
              </Link>
              <Link href="#vision" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50">
                Vision
              </Link>
              <Link href="#our-people" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50">
                Our People
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
              <Link href="#regulatory-compliance" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50">
                Regulatory Compliance
              </Link>
            </div>
          </div>

          <Link
            href="#contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>

          <Link
            href="#contact"
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
