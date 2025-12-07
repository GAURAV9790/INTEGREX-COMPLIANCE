'use client';
import React, { useState, useEffect } from 'react';
import { Settings, Leaf, Zap, FileText, Users, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ServicesSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const services = [
    {
      icon: Settings,
      title: "MANAGEMENT SYSTEM",
      description: "We aim to provide the organization with knowledge to develop a comprehensive management system with its main objectives to safeguard life, property, and the environment through quality assurance as per the requirements of National and International management standards like ISO 9001, IATF 16949, ISO 14001, ISO 45001, AS 9100, ISO 27001, etc..",
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-600"
    },
    {
      icon: Leaf,
      title: "MSME SUSTAINABLE ZED CERTIFICATION SCHEME",
      description: "Identify, assess, and mitigate potential risks with our comprehensive management frameworks.",
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-600"
    },
    {
      icon: Zap,
      title: "MSME COMPETITIVE (LEAN) SCHEME",
      description: "For Lean scheme - MSMEs with an objective to enhance their productivity, efficiency, and competitiveness by reduction of wastages in processes, inventory management, space management, energy consumption, etc..",
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-600"
    },
    {
      icon: FileText,
      title: "REGULATORY COMPLIANCE",
      description: "Statutory and regulatory compliance involves adhering to laws, rules, and standards set by governments and regulatory bodies to ensure a business operates legally and ethically..",
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-600"
    },
    {
      icon: Users,
      title: "OUR CLIENTS",
      description:
        "We collaborate with clients across automotive, construction, IT, education, food, home appliances and other sectors, building long-term partnerships based on trust, compliance and continual improvement. Our clients include organizations from different industries who trust us for their management systems and compliance needs.",
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-600",
      hideButton: true,
      clients: [
        "KTD Multi Tool & Dies",
        "ME Engineering Works Pvt. Ltd.",
        "SS Engineering Works",
        "Dynamic",
        "freewill",
        "BTSL",
        "Palladium",
        "Roxberry Technologies"
      ]
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, services.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50/30 via-white to-blue-50/30">
        {/* Subtle grid texture */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(rgba(13, 71, 161, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(13, 71, 161, 0.2) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative">
        {/* Header with decorative elements */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <span className="inline-block text-blue-600 font-medium mb-3 text-sm tracking-wider">OUR EXPERTISE</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
            Comprehensive Services
          </h1>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-blue-300 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Tailored solutions designed to elevate your business through innovation, compliance, and operational excellence.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Main Slider */}
          <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white/95 backdrop-blur-sm">
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="min-w-full">
                    <div className="w-full flex-shrink-0 px-4 py-8 md:p-10 lg:p-12">
                      <div className="h-full bg-gradient-to-br from-blue-700 to-blue-800 rounded-xl p-8 md:p-10 text-white relative overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/20">
                        {/* Decorative elements */}
                        <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-600/20 rounded-full filter blur-3xl"></div>
                        <div className="absolute -left-10 -bottom-10 w-60 h-60 bg-blue-500/10 rounded-full filter blur-3xl"></div>
                        
                        <div className="relative z-10 flex flex-col items-center text-center space-y-5 h-full">
                          {/* Icon with animated border - 15% larger */}
                          <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-200 rounded-full p-0.5 animate-spin-slow">
                              <div className="h-full w-full bg-blue-800 rounded-full"></div>
                            </div>
                            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center relative z-10 shadow-lg group-hover:shadow-[0_0_0_4px_rgba(255,255,255,0.15)] transition-all duration-300">
                              <div className="absolute inset-0 rounded-full bg-white/10 group-hover:bg-white/20 transition-all duration-300"></div>
                              <Icon className="w-10 h-10 text-white" strokeWidth={1.75} />
                              <div className="absolute inset-0 rounded-full shadow-[inset_0_0_15px_rgba(255,255,255,0.2)]"></div>
                            </div>
                          </div>
                          
                          <div className="space-y-4 max-w-2xl">
                            <h2 className="text-2xl md:text-2xl font-bold text-white tracking-tight">{service.title}</h2>
                            <p className="text-blue-100/90 leading-relaxed text-sm md:text-base">{service.description}</p>
                            {service.clients && (
                              <div className="flex flex-wrap justify-center gap-3 mt-4">
                                {service.clients.map((client, idx) => (
                                  <span
                                    key={idx}
                                    className={`inline-flex items-center rounded-full ${service.title === "OUR CLIENTS" ? "bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500" : "bg-white/10"} px-4 py-1.5 text-[11px] sm:text-xs md:text-sm font-semibold tracking-wide ${service.title === "OUR CLIENTS" ? "text-white" : "text-blue-50"} shadow-md ${service.title === "OUR CLIENTS" ? "shadow-blue-900/30" : ""} transform hover:-translate-y-0.5 hover:shadow-lg hover:brightness-110 transition-all duration-200 font-['Poppins']`}
                                  >
                                    {client}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                          
                          {!service.hideButton && (
                            <div className="pt-2">
                              <button className="relative px-8 py-3 rounded-full font-bold text-white bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl shadow-yellow-500/30 hover:shadow-yellow-500/40 overflow-hidden group">
                                <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></span>
                                <span className="relative flex items-center justify-center space-x-2">
                                  <span>Apply Now</span>
                                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                  </svg>
                                </span>
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-blue-700 hover:bg-white transition-all duration-300 hover:scale-110 z-10 border border-gray-100"
              aria-label="Previous slide"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-blue-700 hover:bg-white transition-all duration-300 hover:scale-110 z-10 border border-gray-100"
              aria-label="Next slide"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-12 space-x-2">
            {services.map((_, idx) => (
              <button
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentSlide === idx ? 'w-8 bg-gradient-to-r from-blue-500 to-blue-400' : 'w-3 bg-gray-200 hover:bg-gray-300'
                }`}
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              ></button>
            ))}
          </div>

          {/* Auto-play indicator */}
          <div className="text-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              {isAutoPlaying ? '⏸ Pause' : '▶ Play'} Auto-scroll
            </button>
          </div>
        </div>

        {/* Service Cards Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isActive = currentSlide === index;

            return (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`group relative rounded-2xl overflow-hidden transition-all duration-300 ${
                  isActive
                    ? 'scale-[1.03]'
                    : 'hover:scale-[1.02] hover:shadow-md'
                }`}
              >
                {/* Continuously rotating multi-color gradient border */}
                <div className="absolute inset-0 rounded-2xl p-[2px] pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl bg-[conic-gradient(from_0deg,#3b82f6,#22c55e,#a855f7,#f97316,#3b82f6)] opacity-80 animate-spin-slow"></div>
                  <div className="absolute inset-[2px] rounded-2xl bg-white group-hover:bg-white/95 transition-colors duration-300"></div>
                </div>

                {/* Hover shine effect */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                  <div className="absolute -inset-full top-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[shimmer_1.5s_infinite] h-full w-1/2"></div>
                </div>

                {/* Button content */}
                <div className="relative z-10 flex items-center space-x-4 p-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-md'
                      : 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white'
                  }`}>
                    <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  <h3 className="font-semibold text-left text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <svg
                    className="w-5 h-5 ml-auto text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}