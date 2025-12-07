 import React from 'react';
import { FileText, Target, Eye, Users } from 'lucide-react';

export default function AboutUs() {
  return (
    <section
      id="about"
      className="relative py-24 sm:py-28 bg-gradient-to-b from-slate-50 via-white to-blue-50/60"
    >
      <div className="absolute inset-x-0 top-0 -z-10 flex justify-center overflow-hidden pointer-events-none">
        <div className="h-64 w-[72rem] bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.15),_transparent_60%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[11px] font-semibold tracking-[0.35em] text-blue-700/80 uppercase">
            About Integrex
          </p>
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold text-[#0A1A3A] font-['Poppins']">
            Building trusted compliance partnerships since 2006
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-['Inter']">
            Integrex Compliance Tech Private Limited supports industries and MSMEs with robust
            management systems, certifications, and continual improvement for sustainable growth.
          </p>

          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-blue-100 bg-white/70 px-4 py-2 shadow-sm">
            <span className="text-xs font-medium text-blue-900/80">
              20+ years of consulting excellence
            </span>
            <span className="mx-2 h-4 w-px bg-blue-100 hidden sm:inline-block" />
            <span className="text-xs font-medium text-slate-600">
              Serving MSMEs &amp; industries across diverse sectors
            </span>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3 text-sm font-['Inter']">
          <a
            href="#history"
            className="rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-slate-700 hover:border-blue-300 hover:text-blue-800 shadow-sm transition-colors"
          >
            History
          </a>
          <a
            href="#mission"
            className="rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-slate-700 hover:border-blue-300 hover:text-blue-800 shadow-sm transition-colors"
          >
            Our Mission
          </a>
          <a
            href="#vision"
            className="rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-slate-700 hover:border-blue-300 hover:text-blue-800 shadow-sm transition-colors"
          >
            Vision
          </a>
          <a
            href="#our-people"
            className="rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-slate-700 hover:border-blue-300 hover:text-blue-800 shadow-sm transition-colors"
          >
            Our People
          </a>
          <a
            href="#people-we-serve"
            className="rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-slate-700 hover:border-blue-300 hover:text-blue-800 shadow-sm transition-colors"
          >
            People We Serve
          </a>
        </div>

        <div className="mt-14 space-y-12 lg:space-y-16">
          <div
            id="history"
            className="grid md:grid-cols-2 gap-10 lg:gap-14 items-center rounded-3xl border border-blue-100/80 bg-white/80 shadow-[0_22px_70px_rgba(15,23,42,0.08)] p-8 sm:p-10 lg:p-12"
          >
            <div>
              <div className="inline-flex items-center space-x-3 mb-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                  <FileText className="w-5 h-5" />
                </span>
                <span className="text-[11px] font-semibold tracking-[0.3em] text-blue-800 uppercase">
                  History
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-blue-900 mb-4 font-['Poppins']">
                Our journey of growth &amp; trust
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed font-['Inter']">
                Integrex Compliance Tech Private Limited began its journey in 2006 as a management
                system consulting service provider. With a strong commitment to quality, compliance,
                and industry growth, we converted into a Private Limited company in 2025. Over the
                past 20+ years, we have supported industries and MSMEs in strengthening their
                business operations, achieving certifications, and driving continual improvement.
              </p>
              <p className="text-gray-700 leading-relaxed font-['Inter']">
                Our growth is built on reliability, experience, and results — helping clients shape
                a sustainable and globally recognized future.
              </p>
            </div>

            <div className="relative h-64 sm:h-72 md:h-80 lg:h-[320px]">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-500/15 via-sky-400/10 to-transparent" />
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop"
                alt="Archive of documents representing company history"
                className="relative z-10 w-full h-full object-cover rounded-3xl shadow-[0_18px_55px_rgba(15,23,42,0.55)]"
              />
            </div>
          </div>

          <div
            id="mission"
            className="grid md:grid-cols-2 gap-10 lg:gap-14 items-center rounded-3xl border border-blue-100/80 bg-white/80 shadow-[0_22px_70px_rgba(15,23,42,0.08)] p-8 sm:p-10 lg:p-12"
          >
            <div>
              <div className="inline-flex items-center space-x-3 mb-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                  <Target className="w-5 h-5" />
                </span>
                <span className="text-[11px] font-semibold tracking-[0.3em] text-emerald-800 uppercase">
                  Mission
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-blue-900 mb-4 font-['Poppins']">
                Driving operational excellence for every client
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed font-['Inter']">
                We are committed to empowering organizations to achieve operational excellence,
                compliance, and sustainability. Through advanced management systems, streamlined
                processes, and skill development, we help businesses grow confidently and
                competitively.
              </p>
              <p className="text-gray-700 leading-relaxed font-['Inter']">
                Our mission is to deliver value-driven consultancy with measurable results —
                enhancing quality, safety, environmental responsibility, and continual improvement
                across industries.
              </p>
            </div>

            <div className="relative h-64 sm:h-72 md:h-80 lg:h-[320px]">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-emerald-500/15 via-sky-400/10 to-transparent" />
              <img
                src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a0?w=800&h=600&fit=crop"
                alt="Team collaborating around a table for mission planning"
                className="relative z-10 w-full h-full object-cover rounded-3xl shadow-[0_18px_55px_rgba(15,23,42,0.55)]"
              />
            </div>
          </div>

          <div
            id="vision"
            className="grid md:grid-cols-2 gap-10 lg:gap-14 items-center rounded-3xl border border-blue-100/80 bg-white/80 shadow-[0_22px_70px_rgba(15,23,42,0.08)] p-8 sm:p-10 lg:p-12"
          >
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center space-x-3 mb-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-50 text-sky-700">
                  <Eye className="w-5 h-5" />
                </span>
                <span className="text-[11px] font-semibold tracking-[0.3em] text-sky-800 uppercase">
                  Vision
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-blue-900 mb-4 font-['Poppins']">
                A future-ready, responsible business ecosystem
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed font-['Inter']">
                To become a globally respected leader in management system consulting —
                transforming MSMEs and industries into future-ready, efficient, and sustainable
                organizations that innovate, excel, and set new benchmarks of performance.
              </p>
              <p className="text-gray-700 leading-relaxed font-['Inter']">
                We envision a world where every business operates with responsibility, transparency,
                and a strong focus on long-term progress and customer success.
              </p>
            </div>
            


            

            <div className="relative order-1 md:order-2 h-64 sm:h-72 md:h-80 lg:h-[320px]">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-indigo-500/15 via-sky-400/10 to-transparent" />
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop"
                alt="Leadership meeting visualizing company vision"
                className="relative z-10 w-full h-full object-cover rounded-3xl shadow-[0_18px_55px_rgba(15,23,42,0.55)]"
              />
            </div>
          </div>

          <div
            id="our-people"
            className="grid md:grid-cols-2 gap-10 lg:gap-14 items-center rounded-3xl border border-blue-100/80 bg-white/80 shadow-[0_22px_70px_rgba(15,23,42,0.08)] p-8 sm:p-10 lg:p-12"
          >
            <div>
              <div className="inline-flex items-center space-x-3 mb-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-purple-50 text-purple-700">
                  <Users className="w-5 h-5" />
                </span>
                <span className="text-[11px] font-semibold tracking-[0.3em] text-purple-800 uppercase">
                  Our People
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-blue-900 mb-4 font-['Poppins']">
                Experienced, ethical &amp; committed professionals
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed font-['Inter']">
                Our team of skilled professionals is the driving force behind our success. With
                decades of combined experience, we bring deep industry knowledge, ethical practices,
                and a passion for delivering excellence in every project we take up.
              </p>
              <p className="text-gray-700 leading-relaxed font-['Inter']">
                We believe in continuous learning, teamwork, and accountability — ensuring our
                clients receive expert guidance, reliable support, and results that truly elevate
                their organization.
              </p>
            </div>

            <div className="relative h-64 sm:h-72 md:h-80 lg:h-[320px]">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-purple-500/15 via-sky-400/10 to-transparent" />
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop"
                alt="Diverse team standing together in office"
                className="relative z-10 w-full h-full object-cover rounded-3xl shadow-[0_18px_55px_rgba(15,23,42,0.55)]"
              />
            </div>
          </div>

          <div
            id="people-we-serve"
            className="grid md:grid-cols-2 gap-10 lg:gap-14 items-center rounded-3xl border border-blue-100/80 bg-white/80 shadow-[0_22px_70px_rgba(15,23,42,0.08)] p-8 sm:p-10 lg:p-12"
          >
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center space-x-3 mb-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                  <Users className="w-5 h-5" />
                </span>
                <span className="text-[11px] font-semibold tracking-[0.3em] text-blue-800 uppercase">
                  Peoples We Serve
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-blue-900 mb-3 font-['Poppins']">
                We have served various industrial sectors
              </h2>
              <p className="text-base sm:text-lg font-semibold text-blue-900 mb-4 leading-relaxed font-['Poppins']">
                Automotive, Construction, Information Technology, Education, Food, Home Appliances, etc.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed font-['Inter']">
                We work with manufacturing units, service organizations, and MSMEs at different
                stages of their growth journey — from first-time certification to multi-site,
                integrated management systems.
              </p>
              <p className="text-gray-700 leading-relaxed font-['Inter']">
                Our clients span automotive, aerospace, engineering, fabrication, IT-enabled
                services, and emerging sectors that seek structured, sustainable, and globally
                recognized ways of working.
              </p>
            </div>

            <div className="relative order-1 md:order-2 h-64 sm:h-72 md:h-80 lg:h-[320px]">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-500/15 via-emerald-400/10 to-transparent" />
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop"
                alt="Clients and consultants collaborating across industries"
                className="relative z-10 w-full h-full object-cover rounded-3xl shadow-[0_18px_55px_rgba(15,23,42,0.55)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}