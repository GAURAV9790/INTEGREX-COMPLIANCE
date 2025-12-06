import { Zap, CheckCircle2, Settings } from 'lucide-react';
import Navbar from './Navbar';

export default function LeanPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-900 to-slate-950 text-blue-50">
      <Navbar currentPage="services" />
      <main className="pt-[88px]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <section className="grid gap-10 lg:grid-cols-1 items-center mb-16">
            <div>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-sky-500/15 text-[11px] font-semibold tracking-[0.25em] uppercase text-sky-200 border border-sky-400/40">
                MSME Competitive (LEAN) Scheme
              </span>
              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold font-['Poppins'] leading-tight">
                <span className="bg-gradient-to-r from-white via-sky-200 to-emerald-200 bg-clip-text text-transparent">
                  Building competitive, efficient and future-ready MSMEs.
                </span>
              </h1>
              <p className="mt-4 text-sm sm:text-[15px] text-blue-100/90 max-w-3xl">
                Ministry of Micro, Small &amp; Medium Enterprises, Government of India, aims to implement the MSME Competitive
                (Lean) Scheme for MSMEs with an objective to enhance their productivity, efficiency, and competitiveness by
                reduction of wastages in processes, inventory management, space management, energy consumption, etc.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-3 text-xs sm:text-[13px]">
                <div className="flex items-start gap-2">
                  <span className="mt-1 rounded-full bg-emerald-400/15 p-1.5 text-emerald-300">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </span>
                  <div className="space-y-0.5">
                    <p className="font-semibold text-blue-50">Higher productivity</p>
                    <p className="text-blue-100/80">Structured Lean tools to remove bottlenecks and non-value-added tasks.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-1 rounded-full bg-sky-400/15 p-1.5 text-sky-300">
                    <Zap className="w-3.5 h-3.5" />
                  </span>
                  <div className="space-y-0.5">
                    <p className="font-semibold text-blue-50">Reduced wastages</p>
                    <p className="text-blue-100/80">Focus on process, inventory, space and energy optimisation.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-1 rounded-full bg-amber-400/15 p-1.5 text-amber-300">
                    <Settings className="w-3.5 h-3.5" />
                  </span>
                  <div className="space-y-0.5">
                    <p className="font-semibold text-blue-50">Stronger competitiveness</p>
                    <p className="text-blue-100/80">Lean, agile operations ready for domestic and global customers.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="grid gap-6 lg:grid-cols-2 items-start">
              <div className="rounded-2xl bg-gradient-to-br from-slate-950/40 via-indigo-900/60 to-blue-800/70 border border-white/12 p-6 shadow-[0_18px_48px_rgba(15,23,42,0.85)]">
                <h2 className="text-xl sm:text-2xl font-semibold font-['Poppins'] mb-3 text-white">
                  Key objectives of the LEAN Scheme
                </h2>
                <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-[13px] text-blue-50/90">
                  <li>Introduce proven Lean manufacturing practices in MSMEs.</li>
                  <li>Reduce wastage in material, motion, waiting time and rework.</li>
                  <li>Improve productivity, on-time delivery and resource utilisation.</li>
                  <li>Optimise space and layout for smoother material and information flow.</li>
                  <li>Lower energy consumption and associated operating costs.</li>
                </ul>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-slate-950/40 via-blue-900/65 to-indigo-900/70 border border-white/12 p-6 shadow-[0_18px_48px_rgba(15,23,42,0.85)]">
                <h2 className="text-xl sm:text-2xl font-semibold font-['Poppins'] mb-3 text-white">
                  Why MSMEs should adopt LEAN
                </h2>
                <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-[13px] text-blue-50/90">
                  <li>Strengthens profitability through cost reduction and better utilisation.</li>
                  <li>Builds a culture of continuous improvement on the shop floor.</li>
                  <li>Helps meet customer requirements on quality, cost and delivery.</li>
                  <li>Supports digital and automation initiatives with stabilised processes.</li>
                  <li>Prepares MSMEs for scaling up and integration in global supply chains.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="grid gap-6 lg:grid-cols-[2fr,3fr] items-start">
              <div className="rounded-2xl bg-gradient-to-br from-slate-950/40 via-blue-900/60 to-indigo-900/70 border border-white/12 p-6 shadow-[0_18px_48px_rgba(15,23,42,0.85)]">
                <h2 className="text-xl sm:text-2xl font-semibold font-['Poppins'] mb-3 text-white">
                  MSME Competitive (LEAN) Scheme Levels
                </h2>
                <p className="text-xs sm:text-[13px] text-blue-100/90 mb-3">
                  MSME Competitive (Lean) Scheme can be attained in three progressive levels after registration and taking the
                  Lean Pledge.
                </p>
                <ul className="space-y-2 text-xs sm:text-[13px] text-blue-50/90">
                  <li>
                    <span className="font-semibold text-sky-200">Level 1: BASIC</span>
                    <span className="block text-blue-100/90">
                      Foundation stage focused on introducing core Lean tools and building awareness across the unit.
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold text-emerald-200">Level 2: INTERMEDIATE</span>
                    <span className="block text-blue-100/90">
                      Deeper deployment of Lean practices across key processes with measurable improvements in productivity and
                      waste reduction.
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold text-amber-200">Level 3: ADVANCED</span>
                    <span className="block text-blue-100/90">
                      Mature Lean culture with continuous improvement embedded in daily work and strong, data-driven
                      performance management.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl bg-slate-950/70 border border-sky-400/40 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.85)]">
                <h2 className="text-xl sm:text-2xl font-semibold font-['Poppins'] mb-3 text-white">
                  Lean Pledge by MSMEs
                </h2>
                <p className="text-xs sm:text-[13px] text-blue-100/90 mb-3">
                  Before starting the Lean journey at any level, every MSME unit is required to take a Lean Pledge.
                </p>
                <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-[13px] text-blue-50/90">
                  <li>
                    The Lean Pledge is a pre-commitment by the MSME to uphold the values of Lean practices and philosophy in
                    its functioning.
                  </li>
                  <li>
                    It is a solemn promise to move ahead on the Lean journey across Basic, Intermediate and Advanced levels in
                    a structured way.
                  </li>
                  <li>
                    After taking the Lean Pledge, the MSME can apply for handholding support for implementation as per its
                    need, preparedness and interest.
                  </li>
                </ul>
                <p className="mt-3 text-xs sm:text-[13px] text-blue-100/90">
                  Lean Scheme can then be implemented by MSME units at any of the three levels, building capability step by
                  step while staying aligned with the scheme guidelines.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <div className="grid gap-8 lg:grid-cols-[3fr,2fr] items-start">
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold font-['Poppins'] mb-3 text-white">
                  How Integrex supports MSME LEAN implementation
                </h2>
                <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-[13px] text-blue-50/90 mb-4">
                  <li>Readiness assessment of current processes and performance.</li>
                  <li>Design of LEAN roadmap aligned to MSME Competitive (LEAN) Scheme guidelines.</li>
                  <li>On-site and remote handholding for implementation of Lean tools.</li>
                  <li>Training and coaching of teams to sustain improvements.</li>
                  <li>Documentation and data support for scheme-related compliance.</li>
                </ul>
                <p className="mt-2 text-xs sm:text-[13px] text-blue-100/90 max-w-3xl">
                  Through structured interventions, MSMEs can quickly see improvements in productivity, lead time, quality
                  performance and overall competitiveness while aligning with Government of India&apos;s MSME Competitive (LEAN)
                  Scheme objectives.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-950/70 border border-sky-400/40 p-5 shadow-[0_24px_60px_rgba(0,0,0,0.85)]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-200 mb-2">
                  At a glance
                </p>
                <ul className="space-y-1.5 text-xs sm:text-[13px] text-slate-100/90">
                  <li>Ideal for manufacturing and service MSMEs of all sizes.</li>
                  <li>Targets quick wins as well as long-term process stability.</li>
                  <li>Focus on data-based decision making and visual management.</li>
                  <li>Improves team engagement and problem-solving capabilities.</li>
                </ul>
                <div className="mt-4 rounded-xl bg-slate-900/80 border border-sky-400/40 px-4 py-3 text-[11px] sm:text-[12px]">
                  <p className="font-semibold text-sky-200 mb-1">Ready to begin your LEAN journey?</p>
                  <p className="text-slate-200/90">
                    Integrex can partner with you from initial assessment to implementation, review and scaling of Lean
                    practices under the MSME Competitive (LEAN) Scheme.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
