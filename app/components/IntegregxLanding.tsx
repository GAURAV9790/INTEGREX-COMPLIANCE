'use client';

import React from 'react';
import { 
  Settings, 
  Leaf, 
  Zap, 
  FileText, 
  Target, 
  Eye, 
  Users,
  Linkedin, 
  Facebook, 
  Twitter 
} from 'lucide-react';
import ServicesSlider from './ServicesSlider';

const managementIsoItems = [
  { id: 'iso-9001', label: 'ISO 9001 - Quality Management System (QMS)' },
  { id: 'iso-14001', label: 'ISO 14001 - Environmental Management System (EMS)' },
  { id: 'iso-45001', label: 'ISO 45001 - Occupational Health & Safety Management (OHSMS)' },
  { id: 'iatf-16949', label: 'IATF 16949 - Automotive Quality Management System (AQMS)' },
  { id: 'as-9100', label: 'AS 9100 - Aerospace Quality Management System (ASQMS)' },
  { id: 'iso-27001', label: 'ISO 27001 - Information Security Management System (ISMS)' },
];

export default function IntegregxLanding() {

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-[0_2px_15px_rgba(0,0,0,0.03)] z-50 border-b border-gray-100/20">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="flex justify-between items-center h-[72px]">
            {/* Logo */}
            <div className="flex items-center">
              <div className="relative h-16 w-48 flex items-center pl-1">
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
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8" id="desktop-nav">
              <a 
                href="#home" 
                className="relative px-3 py-2.5 text-[#0A1A3A] font-semibold font-['Poppins'] text-[15px] hover:text-[#0a3d8f] transition-all duration-300 group"
              >
                <span className="relative z-10">
                  Home
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#0d47a1] transition-all duration-300 group-hover:w-full"></span>
                </span>
              </a>
              
              {/* About Us Dropdown */}
              <div className="relative group">
                <div className="relative">
                  <button className="relative flex items-center text-[#0A1A3A] font-semibold font-['Poppins'] text-[15px] hover:text-[#0a3d8f] transition-all duration-300 focus:outline-none group px-3 py-2.5">
                    <span className="relative z-10 flex items-center">
                      <span>About Us</span>
                      <svg className="w-3.5 h-3.5 ml-1.5 -mr-0.5 opacity-70 group-hover:opacity-100 inline-block transition-all duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#0d47a1] transition-all duration-300 group-hover:w-full"></span>
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
                      <a 
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
                          
                          <div className="overflow-hidden">
                            <div className="transform transition-all duration-300 group-hover/item:translate-y-0 translate-y-0">
                              <span className="block font-medium">{item.label}</span>
                            </div>
                          </div>
                          
                          <svg 
                            className="w-4 h-4 ml-auto text-[#0d47a1] opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0 translate-x-2 transition-all duration-300" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        
                        <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gray-100 to-transparent group-hover/item:via-blue-100 transition-colors duration-300"></div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              {/* Services Dropdown */}
              <div className="relative group">
                <button className="relative flex items-center text-[#0A1A3A] font-semibold font-['Poppins'] text-[15px] hover:text-[#0a3d8f] transition-all duration-300 focus:outline-none group px-3 py-2.5">
                  <span className="relative z-10 flex items-center">
                    <span>Services</span>
                    <svg className="w-3.5 h-3.5 ml-1.5 -mr-0.5 opacity-70 group-hover:opacity-100 inline-block transition-all duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#0d47a1] transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </button>
                
                <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-72 rounded-xl bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0 z-50 border border-gray-100/50">
                  <div className="relative z-10 py-2" role="menu" aria-orientation="vertical">
                    {/* 1. Management System with ISO submenu */}
                    <div className="group/item relative">
                      <a 
                        href="/management-system"
                        className="relative block px-6 py-3.5 text-[#0A1A3A] hover:text-[#0d47a1] transition-all duration-300 font-['Inter'] text-[14.5px]"
                        role="menuitem"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent -translate-x-full group-hover/item:translate-x-0 transition-transform duration-500"></div>
                        
                        <div className="relative z-10 flex items-center">
                          <span className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg mr-3 transform -translate-x-2 group-hover/item:translate-x-0 transition-all duration-300 group-hover/item:rotate-6">
                            <Settings className="w-4 h-4" />
                          </span>
                          
                          <div className="overflow-hidden">
                            <div className="transform transition-all duration-300 group-hover/item:translate-y-0 translate-y-0">
                              <span className="block font-medium">Management System</span>
                            </div>
                          </div>
                          
                          <svg 
                            className="w-4 h-4 ml-auto text-[#0d47a1] opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0 translate-x-2 transition-all duration-300" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        
                        <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gray-100 to-transparent group-hover/item:via-blue-100 transition-colors duration-300"></div>
                      </a>
                      
                      <div className="absolute top-1 left-full ml-2 w-72 rounded-xl bg-white shadow-xl opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-300 transform -translate-y-2 group-hover/item:translate-y-0 z-50 border border-gray-100/50">
                        <div className="relative z-10 py-2">
                          {managementIsoItems.map((iso, index) => (
                            <a
                              key={iso.id}
                              href={`/management-system#${iso.id}`}
                              className="relative block px-5 py-2.5 text-[#0A1A3A] hover:text-[#0d47a1] transition-all duration-300 overflow-hidden font-['Inter'] text-[13.5px]"
                              style={{ transitionDelay: `${index * 25}ms` }}
                            >
                              <div className="flex items-center">
                                <span className="w-2 h-2 rounded-full bg-blue-500 mr-3" />
                                <span className="font-medium">{iso.label}</span>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* 2. MSME ZED with its submenu */}
                    <div className="group/item relative">
                      <a 
                        href="#msme-sustainable"
                        className="relative block px-6 py-3.5 text-[#0A1A3A] hover:text-[#0d47a1] transition-all duration-300 overflow-hidden font-['Inter'] text-[14.5px]"
                        style={{ transitionDelay: `50ms` }}
                        role="menuitem"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent -translate-x-full group-hover/item:translate-x-0 transition-transform duration-500"></div>
                        
                        <div className="relative z-10 flex items-center">
                          <span className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg mr-3 transform -translate-x-2 group-hover/item:translate-x-0 transition-all duration-300 group-hover/item:rotate-6">
                            <Leaf className="w-4 h-4" />
                          </span>
                          
                          <div className="overflow-hidden">
                            <div className="transform transition-all duration-300 group-hover/item:translate-y-0 translate-y-0">
                              <span className="block font-medium">MSME Sustainable ZED Certification Scheme</span>
                            </div>
                          </div>
                          
                          <svg 
                            className="w-4 h-4 ml-auto text-[#0d47a1] opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0 translate-x-2 transition-all duration-300" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        
                        <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gray-100 to-transparent group-hover/item:via-blue-100 transition-colors duration-300"></div>
                      </a>
                      
                      <div className="absolute top-1 left-full ml-2 w-72 rounded-xl bg-white shadow-xl opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-300 transform -translate-y-2 group-hover/item:translate-y-0 z-50 border border-gray-100/50">
                        <div className="relative z-10 py-2 space-y-1">
                          <a
                            href="#about-zed"
                            className="relative block px-5 py-2.5 text-[#0A1A3A] hover:text-[#0d47a1] transition-all duration-300 overflow-hidden font-['Inter'] text-[13.5px]"
                          >
                            <div className="flex items-center">
                              <span className="w-2 h-2 rounded-full bg-blue-500 mr-3" />
                              <span className="font-medium">About ZED</span>
                            </div>
                          </a>
                          
                          <a
                            href="#msme-zed-certification"
                            className="relative block px-5 py-2.5 text-[#0A1A3A] hover:text-[#0d47a1] transition-all duration-300 overflow-hidden font-['Inter'] text-[13.5px]"
                          >
                            <div className="flex items-center">
                              <span className="w-2 h-2 rounded-full bg-blue-500 mr-3" />
                              <span className="font-medium">MSME ZED Certification</span>
                            </div>
                          </a>
                          
                          <a
                            href="#msme-zed-benefits"
                            className="relative block px-5 py-2.5 text-[#0A1A3A] hover:text-[#0d47a1] transition-all duration-300 overflow-hidden font-['Inter'] text-[13.5px]"
                          >
                            <div className="flex items-center">
                              <span className="w-2 h-2 rounded-full bg-blue-500 mr-3" />
                              <span className="font-medium">MSME ZED Benefits &amp; Incentives</span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* 3. LEAN simple item */}
                    <a 
                      href="#msme-lean"
                      className="group/item relative block px-6 py-3.5 text-[#0A1A3A] hover:text-[#0d47a1] transition-all duration-300 overflow-hidden font-['Inter'] text-[14.5px]"
                      style={{ transitionDelay: `80ms` }}
                      role="menuitem"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent -translate-x-full group-hover/item:translate-x-0 transition-transform duration-500"></div>
                      <div className="relative z-10 flex items-center">
                        <span className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg mr-3 transform -translate-x-2 group-hover/item:translate-x-0 transition-all duration-300 group-hover/item:rotate-6">
                          <Zap className="w-4 h-4" />
                        </span>
                        <div className="overflow-hidden">
                          <div className="transform transition-all duration-300 group-hover/item:translate-y-0 translate-y-0">
                            <span className="block font-medium">MSME Competitive (LEAN) Scheme</span>
                          </div>
                        </div>
                        
                        <svg 
                          className="w-4 h-4 ml-auto text-[#0d47a1] opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0 translate-x-2 transition-all duration-300" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </a>

                    {/* 4. Regulatory Compliance */}
                    <div className="group/item relative mt-1">
                      <button
                        type="button"
                        className="relative flex w-full items-center justify-between px-6 py-3.5 text-[#0A1A3A] hover:text-[#0d47a1] transition-all duration-300 font-['Inter'] text-[14.5px]"
                      >
                        <div className="relative z-10 flex items-center">
                          <span className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg mr-3 transform -translate-x-2 group-hover/item:translate-x-0 transition-all duration-300 group-hover/item:rotate-6">
                            <Settings className="w-4 h-4" />
                          </span>
                          <span className="font-medium">Regulatory Compliance</span>
                        </div>
                        <svg
                          className="w-4 h-4 ml-2 text-[#0d47a1] opacity-70 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 transition-all duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>

                      <div className="absolute top-1/2 left-full -translate-y-1/2 w-64 rounded-xl bg-white shadow-xl opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200 transform -translate-x-2 group-hover/item:translate-x-0 border border-gray-100/70">
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

              {/* Contact Link */}
              <a 
                href="#contact" 
                className="relative px-3 py-2.5 text-[#0A1A3A] font-semibold font-['Poppins'] text-[15px] hover:text-[#0a3d8f] transition-all duration-300 group"
              >
                <span className="relative z-10">
                  Contact
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#0d47a1] transition-all duration-300 group-hover:w-full"></span>
                </span>
              </a>

              {/* Primary CTA */}
              <a
                href="#contact"
                className="ml-8 bg-gradient-to-r from-[#0d47a1] to-[#1565c0] text-white px-7 py-2.5 rounded-md font-semibold font-['Poppins'] text-[15px] transition-all duration-300 hover:shadow-[0_4px_18px_rgba(13,71,161,0.25)] hover:-translate-y-0.5 hover:shadow-lg"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-blue-900 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="space-y-6 text-white">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 text-xs font-semibold tracking-[0.2em] uppercase text-blue-100 backdrop-blur-sm">
                ISO • IATF • AS • ISMS
              </span>
              <h1 className="hero-heading font-['Poppins'] text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-sky-200 bg-clip-text text-transparent">
                  Your Trusted Partner
                </span>
                <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-sky-100 via-white to-blue-200 bg-clip-text text-transparent">
                  In System Management
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

            <div className="mt-8 md:mt-0 hero-card-wrapper">
              <div className="hero-card relative mx-auto max-w-md rounded-[32px] border border-white/10 bg-gradient-to-br from-blue-500/20 via-blue-700/40 to-sky-500/30 shadow-[0_35px_120px_rgba(15,23,42,0.85)] backdrop-blur-2xl p-6 sm:p-8">
                <div className="pointer-events-none absolute -top-8 -left-10 h-24 w-24 rounded-full border border-sky-300/50 bg-sky-400/10 blur-xl" />
                <div className="pointer-events-none absolute -bottom-10 -right-6 h-28 w-28 rounded-full bg-sky-500/40 blur-3xl opacity-70" />
                <div className="relative space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold tracking-[0.2em] uppercase text-sky-100/90">
                      Management System Snapshot
                    </span>
                    <span className="rounded-full bg-black/30 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-sky-100/80 border border-white/10">
                      Real-time
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
                    <div className="hero-card-tile rounded-2xl bg-black/30 border border-white/10 px-4 py-3 shadow-lg shadow-black/40">

                      <p className="mb-1 text-[11px] font-semibold text-sky-100/90">
                        ISO Readiness
                      </p>
                      <div className="h-1.5 w-full rounded-full bg-white/10">
                        <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-emerald-400 via-sky-300 to-blue-400" />
                      </div>
                      <p className="mt-2 text-[11px] text-sky-100/80">
                        Gaps mapped to ISO 9001 &amp; 14001.
                      </p>
                    </div>
                    <div className="hero-card-tile rounded-2xl bg-black/20 border border-white/10 px-4 py-3 shadow-lg shadow-black/40">

                      <p className="mb-1 text-[11px] font-semibold text-sky-100/90">
                        Risk &amp; Safety
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="hero-pulse-dot h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />

                        <span className="text-[11px] text-sky-100/80">
                          ISO 45001 practices in place.
                        </span>
                      </div>
                      <p className="mt-2 text-[11px] text-sky-100/80">
                        Integrated with incident tracking.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 text-[10px] sm:text-[11px] text-sky-100/80">
                    <span className="hero-card-chip rounded-full bg-black/30 px-3 py-1 border border-white/10">

                      ISO 9001
                    </span>
                    <span className="rounded-full bg-black/30 px-3 py-1 border border-white/10">
                      ISO 14001
                    </span>
                    <span className="rounded-full bg-black/30 px-3 py-1 border border-white/10">
                      ISO 45001
                    </span>
                    <span className="rounded-full bg-black/30 px-3 py-1 border border-white/10">
                      IATF 16949
                    </span>
                    <span className="rounded-full bg-black/30 px-3 py-1 border border-white/10">
                      AS 9100
                    </span>
                    <span className="rounded-full bg-black/30 px-3 py-1 border border-white/10">
                      ISO 27001
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Our Mission</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our mission is to simplify compliance for businesses worldwide. We are dedicated to providing cutting-edge technology and expert guidance, ensuring our clients achieve and maintain the highest standards of regulatory adherence and operational integrity.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We combine deep industry knowledge with advanced technology to offer unparalleled compliance solutions, fostering a culture of excellence and trust.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop" 
                alt="Modern office workspace"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Slider Section */}
      <ServicesSlider />

      {/* CTA Section */}
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
      <footer className="bg-gray-900 text-gray-300 py-12 border-t border-blue-900/60">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">

            {/* Company */}
            <div>
              <h4 className="text-[11px] font-semibold font-['Poppins'] tracking-[0.35em] text-gray-200 uppercase mb-4 pb-2 border-b border-blue-800/60">
                Company
              </h4>
              <ul className="space-y-2 text-sm text-gray-300 font-medium">

                <li>
                  <a
                    href="#about"
                    className="relative inline-flex items-center hover:text-white transition-all duration-200 group"
                  >
                    <span className="h-px w-0 bg-blue-400 mr-2 group-hover:w-3 transition-all duration-200" />
                    <span className="transform group-hover:translate-x-0.5 transition-transform duration-200">
                      About Us
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="relative inline-flex items-center hover:text-white transition-all duration-200 group"
                  >
                    <span className="h-px w-0 bg-blue-400 mr-2 group-hover:w-3 transition-all duration-200" />
                    <span className="transform group-hover:translate-x-0.5 transition-transform duration-200">
                      Services
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#careers"
                    className="relative inline-flex items-center hover:text-white transition-all duration-200 group"
                  >
                    <span className="h-px w-0 bg-blue-400 mr-2 group-hover:w-3 transition-all duration-200" />
                    <span className="transform group-hover:translate-x-0.5 transition-transform duration-200">
                      Careers
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-[11px] font-semibold font-['Poppins'] tracking-[0.35em] text-gray-200 uppercase mb-4 pb-2 border-b border-blue-800/60">
                Resources
              </h4>
              <ul className="space-y-2 text-sm text-gray-300 font-medium">

                <li>
                  <a
                    href="#blog"
                    className="relative inline-flex items-center hover:text-white transition-all duration-200 group"
                  >
                    <span className="h-px w-0 bg-blue-400 mr-2 group-hover:w-3 transition-all duration-200" />
                    <span className="transform group-hover:translate-x-0.5 transition-transform duration-200">
                      Blog
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#help"
                    className="relative inline-flex items-center hover:text-white transition-all duration-200 group"
                  >
                    <span className="h-px w-0 bg-blue-400 mr-2 group-hover:w-3 transition-all duration-200" />
                    <span className="transform group-hover:translate-x-0.5 transition-transform duration-200">
                      Help Center
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#privacy"
                    className="relative inline-flex items-center hover:text-white transition-all duration-200 group"
                  >
                    <span className="h-px w-0 bg-blue-400 mr-2 group-hover:w-3 transition-all duration-200" />
                    <span className="transform group-hover:translate-x-0.5 transition-transform duration-200">
                      Privacy Policy
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-[11px] font-semibold font-['Poppins'] tracking-[0.35em] text-gray-200 uppercase mb-4 pb-2 border-b border-blue-800/60">
                Follow Us
              </h4>
              <div className="flex space-x-4">

                <a
                  href="#linkedin"
                  className="group text-gray-400 hover:text-white transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  <Linkedin className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
                </a>
                <a
                  href="#facebook"
                  className="group text-gray-400 hover:text-white transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  <Facebook className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
                </a>
                <a
                  href="#twitter"
                  className="group text-gray-400 hover:text-white transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  <Twitter className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
                </a>
              </div>
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