"use client";

import React from "react";
import { Linkedin, Instagram } from "lucide-react";
import Navbar from "../components/Navbar";

const isoSections = [
  {
    id: "iso-9001",
    code: "ISO 9001",
    title: "Quality Management System (QMS)",
    description:
      "ISO 9001 is the globally recognised standard for Quality Management Systems. It helps organisations consistently provide products and services that meet customer and regulatory requirements while driving continual improvement across all key processes.",
    highlights: [
      "Customer focus, leadership commitment and engagement of people",
      "Process-based approach and risk-based thinking for stable operations",
      "Performance evaluation using KPIs, internal audits and management review",
    ],
    services: [
      "Gap assessment against ISO 9001 requirements and current practices",
      "Design and documentation of QMS processes, procedures and records",
      "Internal auditor training, implementation support and pre-certification audits",
    ],
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&h=650&fit=crop&auto=format&q=80",
    imageAlt: "Team collaborating on quality management processes in an office.",
  },
  {
    id: "iso-14001",
    code: "ISO 14001",
    title: "Environmental Management System (EMS)",
    description:
      "ISO 14001 provides a structured framework to identify, control and reduce the environmental impacts of your activities. It supports compliance with environmental legislation while improving resource efficiency and reducing waste and emissions.",
    highlights: [
      "Identification of environmental aspects, impacts and legal obligations",
      "Operational controls for waste, emissions, energy and resource use",
      "Environmental objectives, targets and continual performance improvement",
    ],
    services: [
      "Aspect–impact analysis and development of legal and regulatory registers",
      "Creation of EMS procedures for waste, emissions and emergency response",
      "Training, awareness sessions and internal audits focused on environmental performance",
    ],
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&h=650&fit=crop&auto=format&q=80",
    imageAlt: "Solar panels and green landscape representing environmental management.",
  },
  {
    id: "iso-45001",
    code: "ISO 45001",
    title: "Occupational Health & Safety Management (OHSMS)",
    description:
      "ISO 45001 is the international standard for Occupational Health and Safety Management Systems. It helps organisations create safer workplaces, reduce incidents and occupational illnesses, and demonstrate commitment to worker well-being.",
    highlights: [
      "Hazard identification, risk assessment and operational controls",
      "Worker participation, consultation and safety culture",
      "Emergency preparedness, incident investigation and corrective actions",
    ],
    services: [
      "Review of existing safety practices and OH&S risk registers",
      "Development of safety procedures, permits and safe work instructions",
      "Training supervisors and internal auditors on ISO 45001 requirements",
    ],
    image:
      "https://images.unsplash.com/photo-1517502166878-35c93a0072bb?w=900&h=650&fit=crop&auto=format&q=80",
    imageAlt: "Workers wearing safety equipment at an industrial construction site.",
  },
  {
    id: "iatf-16949",
    code: "IATF 16949",
    title: "Automotive Quality Management System (AQMS)",
    description:
      "IATF 16949 is the automotive sector standard built on ISO 9001. It focuses on defect prevention, reduction of variation and waste in the automotive supply chain, and meeting strict OEM and customer-specific requirements.",
    highlights: [
      "Advanced Product Quality Planning (APQP) and customer requirements",
      "FMEA, control plans, PPAP and robust production process controls",
      "Traceability, change management and warranty / field-failure analysis",
    ],
    services: [
      "Gap assessment from ISO 9001 to IATF 16949 expectations",
      "Support on APQP, FMEA, control plans and shop-floor quality controls",
      "Preparation for customer audits and third-party certification audits",
    ],
    image:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=900&h=650&fit=crop&auto=format&q=80",
    imageAlt: "Automotive production line with vehicles on an assembly conveyor.",
  },
  {
    id: "as-9100",
    code: "AS 9100",
    title: "Aerospace Quality Management System (ASQMS)",
    description:
      "AS 9100 (also known as EN 9100) is the aerospace industry quality standard based on ISO 9001. It adds requirements for product safety, reliability and regulatory compliance across aviation, space and defence programmes.",
    highlights: [
      "Configuration management and strong product safety controls",
      "Risk management throughout the product life cycle",
      "Control of special processes and supplier quality performance",
    ],
    services: [
      "Design and documentation of aerospace-compliant QMS structures",
      "Support with configuration control, risk analysis and special process control",
      "Internal audits and readiness reviews before certification audits",
    ],
    image:
      "https://images.unsplash.com/photo-1517976487492-5750f3195933?w=900&h=650&fit=crop&auto=format&q=80",
    imageAlt: "Aircraft being inspected and assembled inside an aerospace hangar.",
  },
  {
    id: "iso-27001",
    code: "ISO 27001",
    title: "Information Security Management System (ISMS)",
    description:
      "ISO 27001 specifies requirements for establishing, implementing and continually improving an Information Security Management System. It helps protect critical information assets by managing confidentiality, integrity and availability through structured risk management.",
    highlights: [
      "Information security risk assessment and treatment planning",
      "Policies covering access control, operations, cryptography and suppliers",
      "Monitoring incidents, vulnerabilities and continual improvement of controls",
    ],
    services: [
      "Information security risk assessment and Statement of Applicability (SoA)",
      "Implementation of ISMS policies, procedures and technical / organisational controls",
      "Awareness training, internal audits and certification readiness support",
    ],
    image:
      "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=900&h=650&fit=crop&auto=format&q=80",
    imageAlt: "Abstract representation of cyber security and data protection.",
  },
];

export default function ManagementSystem() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar currentPage="management-system" />

      <main className="pt-[88px]">
        <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16 mt-4 md:mt-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="font-['Poppins'] text-4xl sm:text-5xl lg:text-5xl font-semibold mb-4 leading-tight tracking-tight bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent">
                Integrated Management System & ISO Implementation
              </h1>
              <p className="mt-2 font-['Inter'] text-base sm:text-lg md:text-xl text-blue-100/90 leading-relaxed max-w-3xl">
                Integrex supports organisations in designing, implementing and maintaining robust management systems aligned to key ISO standards for quality, environment, health & safety, automotive, aerospace and information security.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:gap-8 md:grid-cols-3 items-stretch">
              <div className="group bg-white/95 rounded-2xl shadow-sm p-6 border border-blue-100/70 hover:border-blue-500/80 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-sky-400 to-emerald-400 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                <h2 className="text-sm font-semibold text-blue-800 tracking-[0.2em] uppercase mb-2">Quality</h2>
                <p className="text-gray-700 text-sm leading-relaxed">
                  ISO 9001 focuses on consistent product and service quality through structured processes, risk-based thinking and continual improvement.
                </p>
              </div>
              <div className="group bg-white/95 rounded-2xl shadow-sm p-6 border border-blue-100/70 hover:border-blue-500/80 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-sky-400 to-emerald-400 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                <h2 className="text-sm font-semibold text-blue-800 tracking-[0.2em] uppercase mb-2">Automotive</h2>
                <p className="text-gray-700 text-sm leading-relaxed">
                  IATF 16949 builds on ISO 9001 for automotive supply chains, strengthening defect prevention, traceability and OEM-specific requirements.
                </p>
              </div>
              <div className="group bg-white/95 rounded-2xl shadow-sm p-6 border border-blue-100/70 hover:border-blue-500/80 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-sky-400 to-emerald-400 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                <h2 className="text-sm font-semibold text-blue-800 tracking-[0.2em] uppercase mb-2">Environment</h2>
                <p className="text-gray-700 text-sm leading-relaxed">
                  ISO 14001 helps manage environmental aspects, legal obligations and resource efficiency to reduce environmental impact and risk.
                </p>
              </div>
              <div className="group bg-white/95 rounded-2xl shadow-sm p-6 border border-blue-100/70 hover:border-blue-500/80 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-sky-400 to-emerald-400 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                <h2 className="text-sm font-semibold text-blue-800 tracking-[0.2em] uppercase mb-2">Health &amp; Safety</h2>
                <p className="text-gray-700 text-sm leading-relaxed">
                  ISO 45001 supports safer workplaces through hazard identification, OH&amp;S risk control and strong worker participation.
                </p>
              </div>
              <div className="group bg-white/95 rounded-2xl shadow-sm p-6 border border-blue-100/70 hover:border-blue-500/80 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-sky-400 to-emerald-400 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                <h2 className="text-sm font-semibold text-blue-800 tracking-[0.2em] uppercase mb-2">Aerospace</h2>
                <p className="text-gray-700 text-sm leading-relaxed">
                  AS 9100 adds aerospace-specific controls for product safety, reliability, configuration management and supplier performance.
                </p>
              </div>
              <div className="group bg-white/95 rounded-2xl shadow-sm p-6 border border-blue-100/70 hover:border-blue-500/80 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-sky-400 to-emerald-400 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                <h2 className="text-sm font-semibold text-blue-800 tracking-[0.2em] uppercase mb-2">Information Security</h2>
                <p className="text-gray-700 text-sm leading-relaxed">
                  ISO 27001 protects critical information assets using risk-based controls for confidentiality, integrity and availability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {isoSections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="py-16 bg-white border-t border-gray-100"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-sm font-semibold text-blue-600 tracking-[0.2em] uppercase mb-2">
                  {section.code}
                </p>
                <h2 className="text-3xl font-bold text-blue-900 mb-4">
                  {section.title}
                </h2>
                <p className="text-gray-700 mb-5 leading-relaxed">
                  {section.description}
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm font-semibold text-blue-800 mb-2">
                      Key focus areas
                    </h3>
                    <ul className="space-y-1.5 text-sm text-gray-700">
                      {section.highlights.map((item) => (
                        <li key={item} className="flex">
                          <span className="mt-1 mr-2 h-1.5 w-1.5 rounded-full bg-blue-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-blue-800 mb-2">
                      How Integrex supports you
                    </h3>
                    <ul className="space-y-1.5 text-sm text-gray-700">
                      {section.services.map((item) => (
                        <li key={item} className="flex">
                          <span className="mt-1 mr-2 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-6">
                  <button
                    type="button"
                    className="bg-gradient-to-r from-[#0d47a1] to-[#1565c0] text-white px-7 py-2.5 rounded-md font-semibold font-['Poppins'] text-[15px] transition-all duration-300 hover:shadow-[0_4px_18px_rgba(13,71,161,0.25)] hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img
                  src={section.image}
                  alt={section.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>
        ))}

        <section
          id="contact"
          className="bg-gradient-to-r from-blue-900 to-blue-800 py-16"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <h2 className="text-3xl font-bold text-white mb-6 md:mb-0">
                Need support for ISO implementation or certification?
              </h2>
              <a
                href="mailto:info@integrex.example"
                className="bg-white text-blue-900 px-8 py-3 rounded font-semibold hover:bg-gray-100 transition"
              >
                Talk to Our Experts
              </a>
            </div>
          </div>
        </section>

        <footer className="bg-gray-900 text-gray-300 py-12 border-t border-blue-900/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h4 className="text-[11px] font-semibold font-['Poppins'] tracking-[0.35em] text-gray-200 uppercase mb-4 pb-2 border-b border-blue-800/60">
                  Company
                </h4>
                <ul className="space-y-2 text-sm text-gray-300 font-medium">
                  <li>
                    <a
                      href="/"
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
                      href="/"
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
                      href="/"
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
                    href="#instagram"
                    className="group text-gray-400 hover:text-white transition-all duration-200 transform hover:-translate-y-0.5"
                  >
                    <Instagram className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
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
      </main>
    </div>
  );
}
