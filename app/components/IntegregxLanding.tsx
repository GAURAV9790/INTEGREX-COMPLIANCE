'use client';

import React, { useEffect, useState } from 'react';

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

type PeriodFilter = 'quarter' | 'month' | 'year';
type IndustryFilter = 'auto' | 'aero' | 'general';

function useAnimatedProgress(target: number, duration = 900) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let frame: number;
    const start = performance.now();

    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      setValue(Math.round(target * progress));

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [target, duration]);

  return value;
}

const managementIsoItems = [
  { id: 'iso-9001', label: 'ISO 9001 - Quality Management System (QMS)' },
  { id: 'iso-14001', label: 'ISO 14001 - Environmental Management System (EMS)' },
  { id: 'iso-45001', label: 'ISO 45001 - Occupational Health & Safety Management (OHSMS)' },
  { id: 'iatf-16949', label: 'IATF 16949 - Automotive Quality Management System (AQMS)' },
  { id: 'as-9100', label: 'AS 9100 - Aerospace Quality Management System (ASQMS)' },
  { id: 'iso-27001', label: 'ISO 27001 - Information Security Management System (ISMS)' },
];

export default function IntegregxLanding() {

  const [period, setPeriod] = useState<PeriodFilter>('quarter');
  const [industry, setIndustry] = useState<IndustryFilter>('general');

  const iso9001Progress = useAnimatedProgress(82);
  const iatfProgress = useAnimatedProgress(74);
  const iso45001Progress = useAnimatedProgress(68);

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
                <a
                  href="/about"
                  className="relative flex items-center text-[#0A1A3A] font-semibold font-['Poppins'] text-[15px] hover:text-[#0a3d8f] transition-all duration-300 focus:outline-none group px-3 py-2.5"
                >
                  <span className="relative z-10 flex items-center">
                    <span>About Us</span>
                    <svg className="w-3.5 h-3.5 ml-1.5 -mr-0.5 opacity-70 group-hover:opacity-100 inline-block transition-all duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#0d47a1] transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
                <div className="absolute left-0 right-0 h-4 -bottom-4 z-50"></div>
                
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
                <a
                  href="/management-system"
                  className="relative flex items-center text-[#0A1A3A] font-semibold font-['Poppins'] text-[15px] hover:text-[#0a3d8f] transition-all duration-300 focus:outline-none group px-3 py-2.5"
                >
                  <span className="relative z-10 flex items-center">
                    <span>Services</span>
                    <svg className="w-3.5 h-3.5 ml-1.5 -mr-0.5 opacity-70 group-hover:opacity-100 inline-block transition-all duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#0d47a1] transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
                
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
                        href="/msme-sustainable"
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
                            href="/msme-sustainable#about-zed"
                            className="relative block px-5 py-2.5 text-[#0A1A3A] hover:text-[#0d47a1] transition-all duration-300 overflow-hidden font-['Inter'] text-[13.5px]"
                          >
                            <div className="flex items-center">
                              <span className="w-2 h-2 rounded-full bg-blue-500 mr-3" />
                              <span className="font-medium">About ZED</span>
                            </div>
                          </a>
                          
                          <a
                            href="/msme-sustainable#msme-zed-certification"
                            className="relative block px-5 py-2.5 text-[#0A1A3A] hover:text-[#0d47a1] transition-all duration-300 overflow-hidden font-['Inter'] text-[13.5px]"
                          >
                            <div className="flex items-center">
                              <span className="w-2 h-2 rounded-full bg-blue-500 mr-3" />
                              <span className="font-medium">MSME ZED Certification</span>
                            </div>
                          </a>
                          
                          <a
                            href="/msme-sustainable#msme-zed-benefits"
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
                href="/contact-us" 
                className="relative px-3 py-2.5 text-[#0A1A3A] font-semibold font-['Poppins'] text-[15px] hover:text-[#0a3d8f] transition-all duration-300 group"
              >
                <span className="relative z-10">
                  Contact
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#0d47a1] transition-all duration-300 group-hover:w-full"></span>
                </span>
              </a>

              {/* Primary CTA */}
              <a
                href="/contact-us"
                className="ml-8 bg-gradient-to-r from-[#0d47a1] to-[#1565c0] text-white px-7 py-2.5 rounded-md font-semibold font-['Poppins'] text-[15px] transition-all duration-300 hover:shadow-[0_4px_18px_rgba(13,71,161,0.25)] hover:-translate-y-0.5 hover:shadow-lg"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section id="home" className="pt-16 pb-8 md:pt-24 md:pb-16 bg-gradient-to-b from-blue-900 to-blue-800">

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
              <div className="hero-card relative mx-auto max-w-md rounded-[24px] border border-white/15 bg-gradient-to-br from-slate-950/25 via-indigo-900/55 to-blue-800/55 shadow-[0_24px_80px_rgba(15,23,42,0.75)] hover:shadow-[0_28px_96px_rgba(15,23,42,0.85)] backdrop-blur-2xl p-3 sm:p-4 transition-transform duration-300 hover:-translate-y-1">

                <div className="pointer-events-none absolute -top-10 -left-12 h-28 w-28 rounded-full border border-indigo-300/60 bg-indigo-500/20 blur-xl" />
                <div className="pointer-events-none absolute -bottom-12 -right-10 h-32 w-32 rounded-full bg-sky-500/50 blur-3xl opacity-80" />
                <div className="relative space-y-3.5">

                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-sky-100/90">
                      Compliance Health Dashboard
                    </span>
                    <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-200 border border-emerald-300/40 shadow-[0_0_14px_rgba(52,211,153,0.55)] animate-pulse">
                      Live
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] sm:text-[11px] text-sky-100/80">
                    <span className="font-medium text-sky-50">
                      Compliance readiness:
                      <span className="ml-1 text-emerald-300 font-semibold">78% overall</span>
                    </span>
                    <div className="flex items-center gap-1.5">
                      <div className="inline-flex items-center rounded-full bg-slate-950/70 border border-sky-500/40 px-1 py-0.5 shadow-[0_0_10px_rgba(15,23,42,0.7)]">
                        <button
                          type="button"
                          onClick={() => setPeriod('quarter')}
                          className={`px-2.5 py-0.5 rounded-full text-[9px] uppercase tracking-[0.16em] ${
                            period === 'quarter'
                              ? 'bg-sky-400 text-slate-950 shadow-sm'
                              : 'text-sky-100/80 hover:bg-slate-900/80'
                          }`}
                        >
                          Quarter
                        </button>
                        <button
                          type="button"
                          onClick={() => setPeriod('month')}
                          className={`px-2.5 py-0.5 rounded-full text-[9px] uppercase tracking-[0.16em] ${
                            period === 'month'
                              ? 'bg-sky-400 text-slate-950 shadow-sm'
                              : 'text-sky-100/80 hover:bg-slate-900/80'
                          }`}
                        >
                          Month
                        </button>
                        <button
                          type="button"
                          onClick={() => setPeriod('year')}
                          className={`px-2.5 py-0.5 rounded-full text-[9px] uppercase tracking-[0.16em] ${
                            period === 'year'
                              ? 'bg-sky-400 text-slate-950 shadow-sm'
                              : 'text-sky-100/80 hover:bg-slate-900/80'
                          }`}
                        >
                          Year
                        </button>
                      </div>
                      <div className="inline-flex items-center rounded-full bg-slate-950/70 border border-sky-500/40 px-1 py-0.5 shadow-[0_0_10px_rgba(15,23,42,0.7)]">
                        <button
                          type="button"
                          onClick={() => setIndustry('general')}
                          className={`px-2 py-0.5 rounded-full text-[9px] uppercase tracking-[0.16em] ${
                            industry === 'general'
                              ? 'bg-sky-300 text-slate-950 shadow-sm'
                              : 'text-sky-100/80 hover:bg-slate-900/80'
                          }`}
                        >
                          All
                        </button>
                        <button
                          type="button"
                          onClick={() => setIndustry('auto')}
                          className={`px-2 py-0.5 rounded-full text-[9px] uppercase tracking-[0.16em] ${
                            industry === 'auto'
                              ? 'bg-sky-300 text-slate-950 shadow-sm'
                              : 'text-sky-100/80 hover:bg-slate-900/80'
                          }`}
                        >
                          Auto
                        </button>
                        <button
                          type="button"
                          onClick={() => setIndustry('aero')}
                          className={`px-2 py-0.5 rounded-full text-[9px] uppercase tracking-[0.16em] ${
                            industry === 'aero'
                              ? 'bg-sky-300 text-slate-950 shadow-sm'
                              : 'text-sky-100/80 hover:bg-slate-900/80'
                          }`}
                        >
                          Aero
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-3 text-xs sm:text-[13px]">
                    <div className="hero-card-tile rounded-xl bg-slate-950/70 border border-white/10 px-4 py-2.5 shadow-lg shadow-black/50 transition-transform duration-300 hover:-translate-y-0.5 hover:border-sky-400/60">
                      <p className="mb-1.5 text-[11px] font-semibold text-sky-100/90">
                        ISO implementation progress
                      </p>
                      <div className="mt-1.5 grid grid-cols-2 sm:grid-cols-3 gap-1.5 sm:gap-2">
                        <div className="flex flex-col items-center gap-1.5">
                          <div
                            className="relative flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-slate-900/60 shadow-[0_0_20px_rgba(74,222,128,0.45)]"
                            title="ISO 9001 & 14001 · Deadline: Q1 2026 · Remaining gaps: 3"
                            style={{
                              background: `conic-gradient(#4ade80 0%, #22c55e ${iso9001Progress}%, rgba(15,23,42,0.9) ${iso9001Progress}%, rgba(15,23,42,0.9) 100%)`,
                            }}
                          >
                            <div className="flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-slate-950/95 border border-emerald-300/60">
                              <span className="text-[9px] sm:text-[10px] font-semibold text-sky-50">{iso9001Progress}%</span>
                            </div>
                          </div>

                          <span className="mt-0.5 text-[10px] sm:text-[11px] text-sky-100/85 text-center leading-snug">
                            ISO 9001 &amp; 14001
                          </span>
                        </div>

                        <div className="flex flex-col items-center gap-1.5">
                          <div
                            className="relative flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-slate-900/60 shadow-[0_0_20px_rgba(59,130,246,0.45)]"
                            title="IATF 16949 & AS 9100 · Deadline: Q2 2026 · Remaining gaps: 5"
                            style={{
                              background: `conic-gradient(#38bdf8 0%, #6366f1 ${iatfProgress}%, rgba(15,23,42,0.9) ${iatfProgress}%, rgba(15,23,42,0.9) 100%)`,
                            }}
                          >
                            <div className="flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-slate-950/95 border border-sky-300/60">
                              <span className="text-[9px] sm:text-[10px] font-semibold text-sky-50">{iatfProgress}%</span>
                            </div>
                          </div>

                          <span className="mt-0.5 text-[10px] sm:text-[11px] text-sky-100/85 text-center leading-snug">
                            IATF 16949 &amp; AS 9100
                          </span>
                        </div>

                        <div className="flex flex-col items-center gap-1.5 col-span-2 sm:col-span-1">
                          <div
                            className="relative flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-slate-900/60 shadow-[0_0_20px_rgba(45,212,191,0.45)]"
                            title="ISO 45001 & 27001 · Deadline: Q4 2026 · Remaining gaps: 7"
                            style={{
                              background: `conic-gradient(#22c55e 0%, #14b8a6 ${iso45001Progress}%, rgba(15,23,42,0.9) ${iso45001Progress}%, rgba(15,23,42,0.9) 100%)`,
                            }}
                          >
                            <div className="flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-slate-950/95 border border-teal-300/60">
                              <span className="text-[9px] sm:text-[10px] font-semibold text-sky-50">{iso45001Progress}%</span>
                            </div>
                          </div>

                          <span className="mt-0.5 text-[10px] sm:text-[11px] text-sky-100/85 text-center leading-snug">
                            ISO 45001 &amp; 27001
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="hero-card-tile rounded-xl bg-slate-950/70 border border-white/10 px-4 py-2.5 shadow-lg shadow-black/50 transition-transform duration-300 hover:-translate-y-0.5 hover:border-sky-400/60">

                      <p className="mb-1 text-[11px] font-semibold text-sky-100/90">
                        Risk, safety &amp; audit readiness
                      </p>
                      <div className="mt-1.5 flex flex-col gap-1.5 text-[11px] text-sky-100/85">

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="hero-pulse-dot h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
                            <span>ISO 45001 practices in place</span>
                          </div>
                          <span className="rounded-full bg-emerald-400/15 px-2 py-0.5 text-[10px] font-medium text-emerald-200 border border-emerald-300/60">
                            Stable
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Planned internal audits this quarter</span>
                          <span className="text-sky-100/80 font-semibold">12</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Open non-conformities</span>
                          <span className="text-amber-200 font-semibold">Low</span>
                        </div>
                      </div>

                      <div className="mt-2 flex items-center justify-between text-[10px] text-sky-100/75">
                        <div className="flex items-center gap-2">
                          <span className="flex items-center gap-1">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            <span>Stable</span>
                          </span>
                          <span className="flex items-center gap-1">
                            <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                            <span>Attention</span>
                          </span>
                          <span className="flex items-center gap-1">
                            <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
                            <span>Critical</span>
                          </span>
                        </div>
                        <span className="uppercase tracking-[0.16em] text-sky-300/80">Risk scale</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-2 rounded-xl bg-slate-950/70 border border-sky-500/35 px-4 py-2.5 text-[10px] sm:text-[11px] text-sky-100/85 shadow-lg shadow-black/40">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-semibold tracking-[0.16em] uppercase text-sky-100">
                        Progress trend · last 6 months
                      </span>
                      <span className="text-emerald-300 font-semibold">+10%</span>
                    </div>
                    <div className="flex items-end gap-1.5 h-8 mb-1.5">
                      <div className="flex-1 rounded-t-full bg-gradient-to-t from-slate-900 to-sky-500/70 h-3" />
                      <div className="flex-1 rounded-t-full bg-gradient-to-t from-slate-900 to-sky-400/70 h-4" />
                      <div className="flex-1 rounded-t-full bg-gradient-to-t from-slate-900 to-sky-300/80 h-5" />
                      <div className="flex-1 rounded-t-full bg-gradient-to-t from-slate-900 to-emerald-300/80 h-6" />
                      <div className="flex-1 rounded-t-full bg-gradient-to-t from-slate-900 to-emerald-300/90 h-7" />
                    </div>
                    <div className="flex items-center justify-between text-sky-100/80">
                      <span>2 audits completed</span>
                      <span>5 gaps closed</span>
                    </div>
                  </div>

                  <div className="pt-0.5 border-t border-sky-500/25">

                    <p className="text-[10px] uppercase tracking-[0.25em] text-sky-100/70 mb-2">
                      Key ISO standards we work with
                    </p>
                    <div className="flex flex-wrap gap-2 text-[10px] sm:text-[11px] text-sky-100/90">
                      <span className="hero-card-chip hero-card-chip-1 rounded-full bg-slate-900/70 px-3 py-1 border border-sky-400/40">
                        ISO 9001
                      </span>
                      <span className="hero-card-chip hero-card-chip-2 rounded-full bg-slate-900/70 px-3 py-1 border border-sky-400/40">
                        ISO 14001
                      </span>
                      <span className="hero-card-chip hero-card-chip-3 rounded-full bg-slate-900/70 px-3 py-1 border border-sky-400/40">
                        ISO 45001
                      </span>
                      <span className="hero-card-chip hero-card-chip-4 rounded-full bg-slate-900/70 px-3 py-1 border border-sky-400/40">
                        IATF 16949
                      </span>
                      <span className="hero-card-chip hero-card-chip-5 rounded-full bg-slate-900/70 px-3 py-1 border border-sky-400/40">
                        AS 9100
                      </span>
                      <span className="hero-card-chip hero-card-chip-6 rounded-full bg-slate-900/70 px-3 py-1 border border-sky-400/40">
                        ISO 27001
                      </span>
                    </div>

                    <div className="mt-2.5 flex items-center justify-between gap-2 text-[10px] sm:text-[11px] text-sky-100/80">
                      <span className="flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-sky-300" />
                        <span>End-to-end support: gap analysis, training &amp; certification.</span>
                      </span>
                      <span
                        className="inline-flex items-center rounded-full bg-gradient-to-r from-amber-300 via-orange-300 to-rose-400 px-3 py-1 text-[10px] sm:text-[11px] font-semibold text-slate-900 uppercase tracking-[0.18em] shadow-[0_10px_30px_rgba(15,23,42,0.9)] hero-subtitle"
                        style={{ animationDelay: '1.4s' }}
                      >
                        20+ Years Experience
                      </span>
                    </div>
                  </div>
                </div>
              </div>
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
                    <span>Compliance Suite</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#audit-risk"
                    className="inline-flex items-center text-[#C6C9D0] hover:text-[#4A90E2] hover:underline underline-offset-4 transition-colors duration-200"
                  >
                    <span>Audit &amp; Risk Management</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#document-verification"
                    className="inline-flex items-center text-[#C6C9D0] hover:text-[#4A90E2] hover:underline underline-offset-4 transition-colors duration-200"
                  >
                    <span>Document Verification</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#digital-signature"
                    className="inline-flex items-center text-[#C6C9D0] hover:text-[#4A90E2] hover:underline underline-offset-4 transition-colors duration-200"
                  >
                    <span>Digital Signature Automation</span>
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
                    href="#facebook"
                    className="inline-flex items-center gap-2 text-[#C6C9D0] hover:text-[#4A90E2] hover:underline underline-offset-4 transition-colors duration-200"
                  >
                    <Facebook className="w-4 h-4" />
                    <span>Facebook</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#twitter"
                    className="inline-flex items-center gap-2 text-[#C6C9D0] hover:text-[#4A90E2] hover:underline underline-offset-4 transition-colors duration-200"
                  >
                    <Twitter className="w-4 h-4" />
                    <span>X (Twitter)</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#youtube"
                    className="inline-flex items-center text-[#C6C9D0] hover:text-[#4A90E2] hover:underline underline-offset-4 transition-colors duration-200"
                  >
                    <span>YouTube</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#instagram"
                    className="inline-flex items-center text-[#C6C9D0] hover:text-[#4A90E2] hover:underline underline-offset-4 transition-colors duration-200"
                  >
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