import Image from 'next/image';
import { Leaf, Award, CheckCircle2 } from 'lucide-react';
import Navbar from './Navbar';

export default function ZedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-900 to-slate-950 text-blue-50">
      <Navbar currentPage="services" />
      <main className="pt-[88px]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero */}
        <section className="grid gap-10 lg:grid-cols-1 items-center mb-16">
          <div>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-500/10 text-[11px] font-semibold tracking-[0.25em] uppercase text-emerald-200 border border-emerald-400/40">
              MSME Sustainable (ZED) Certification
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold font-['Poppins'] leading-tight">
              <span className="bg-gradient-to-r from-white via-emerald-200 to-sky-200 bg-clip-text text-transparent">
                Zero Defect. Zero Effect.
              </span>
              <br />
              <span className="bg-gradient-to-r from-sky-100 via-white to-emerald-200 bg-clip-text text-transparent">
                A growth path for future-ready MSMEs.
              </span>
            </h1>
            <p className="mt-4 text-sm sm:text-[15px] text-blue-100/90 max-w-xl">
              ZED helps MSMEs improve quality, cut waste and operate more sustainably, creating efficient and globally
              competitive organizations.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row sm:items-stretch gap-4 text-xs sm:text-[13px]">
              <div className="flex-1 flex items-start gap-2">
                <span className="mt-1 rounded-full bg-emerald-400/15 p-1.5 text-emerald-300">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </span>
                <div className="space-y-0.5">
                  <p className="font-semibold text-blue-50">Zero Defect</p>
                  <p className="text-blue-100/80">High-quality output with minimal rejection and rework.</p>
                </div>
              </div>
              <div className="flex-1 flex items-start gap-2">
                <span className="mt-1 rounded-full bg-sky-400/15 p-1.5 text-sky-300">
                  <Leaf className="w-3.5 h-3.5" />
                </span>
                <div className="space-y-0.5">
                  <p className="font-semibold text-blue-50">Zero Effect</p>
                  <p className="text-blue-100/80">Sustainable practices with reduced environmental footprint.</p>
                </div>
              </div>
              <div className="flex-1 flex items-start gap-2">
                <span className="mt-1 rounded-full bg-amber-400/15 p-1.5 text-amber-300">
                  <Award className="w-3.5 h-3.5" />
                </span>
                <div className="space-y-0.5">
                  <p className="font-semibold text-blue-50">MSME Champions</p>
                  <p className="text-blue-100/80">Recognition, incentives and a clear roadmap for excellence.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About ZED */}
        <section id="about-zed" className="mb-16">
          <div className="space-y-8">
            {/* Heading row with logo on the right */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between max-w-5xl">
              <div className="max-w-3xl">
                <h2 className="text-2xl sm:text-[30px] lg:text-[34px] font-semibold font-['Poppins'] tracking-tight mb-1 text-white drop-shadow-[0_2px_10px_rgba(15,23,42,0.7)]">
                  About ZED Certification
                </h2>
                <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-blue-100/80 max-w-2xl">
                  The Sustainable (ZED) Certification is a strategic initiative of the Government of India to enhance the
                  competitiveness of MSMEs. It strengthens manufacturing quality while minimising environmental impact and
                  guides businesses towards the principles of Zero Defect, Zero Effect (ZED).
                </p>
              </div>

              <div className="mt-6 lg:mt-6 flex justify-center lg:justify-end">
                <div className="relative h-28 w-28 sm:h-32 sm:w-32 md:h-36 md:w-36 overflow-hidden rounded-full">
                  <Image
                    src="/zed-main.jpg"
                    alt="MSME ZED Certification logo"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Objectives + Why ZED matters cards */}
            <div className="grid gap-4 sm:grid-cols-2 max-w-3xl">
              <div className="rounded-2xl bg-gradient-to-br from-slate-950/40 via-indigo-900/60 to-blue-800/70 border border-white/12 p-4 shadow-[0_18px_48px_rgba(15,23,42,0.85)]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-200 mb-2">Objectives</p>
                <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-[13px] text-blue-50/90">
                  <li>High-quality production with less wastage and defects.</li>
                  <li>Environmentally responsible and sustainable practices.</li>
                  <li>Adoption of industry best standards and technologies.</li>
                  <li>Recognition and incentives through ZED certification.</li>
                  <li>Developing globally competitive MSME champions.</li>
                </ul>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-slate-950/40 via-blue-900/65 to-indigo-900/70 border border-white/12 p-4 shadow-[0_18px_48px_rgba(15,23,42,0.85)]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-200 mb-2">Why ZED matters</p>
                <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-[13px] text-blue-50/90">
                  <li>Builds trust with national and global customers.</li>
                  <li>Reduces rejection, rework and quality-related costs.</li>
                  <li>Improves resource efficiency and overall productivity.</li>
                  <li>Strengthens environmental and workplace safety compliance.</li>
                  <li>Enhances brand reputation and market positioning.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* MSME ZED Certification */}
        <section id="msme-zed-certification" className="pt-4 mb-20">
          <h2 className="mb-1 font-['Poppins'] font-semibold">
            <span className="block text-2xl sm:text-3xl lg:text-[34px] bg-gradient-to-r from-amber-200 via-yellow-100 to-emerald-200 bg-clip-text text-transparent">
              MSME ZED Certification Framework
            </span>
          </h2>
          <p className="text-sm sm:text-base text-blue-100/90 mb-6 max-w-3xl">
            ZED Certification is structured into progressive levels, allowing MSMEs to advance step-by-step based on
            their capabilities and performance. Bronze, Silver and Gold levels recognise how strongly the enterprise
            manages quality, resilience and sustainability across its operations.
          </p>

          <div className="mt-8 grid gap-7 md:grid-cols-3">
            {/* Bronze card */}
            <div className="zed-card zed-card-bronze shadow-[0_18px_40px_rgba(15,23,42,0.9)] transform transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_26px_70px_rgba(15,23,42,0.95)]">
              <div className="zed-card-inner rounded-3xl bg-gradient-to-br from-[#3b2412] via-[#9a5a26] to-[#f3c28a] p-6 min-h-[260px] sm:min-h-[280px]">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative h-24 w-24 sm:h-28 sm:w-28">
                    <Image
                      src="/zed-bronze.jpg"
                      alt="MSME ZED Bronze level certification"
                      fill
                      className="object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.85)]"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-amber-200">Bronze Certification</h3>
                  <p className="text-sm text-slate-100/90">
                    Entry-level recognition for MSMEs beginning their ZED journey with basic systems and controls.
                  </p>
                </div>
              </div>
            </div>

            {/* Silver card */}
            <div className="zed-card zed-card-silver shadow-[0_18px_40px_rgba(15,23,42,0.9)] transform transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_26px_70px_rgba(15,23,42,0.95)]">
              <div className="zed-card-inner rounded-3xl bg-gradient-to-br from-[#2f343b] via-[#7b8088] to-[#e4e7ec] p-6 min-h-[260px] sm:min-h-[280px]">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative h-24 w-24 sm:h-28 sm:w-28">
                    <Image
                      src="/zed-silver.jpg"
                      alt="MSME ZED Silver level certification"
                      fill
                      className="object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.85)]"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-100">Silver Certification</h3>
                  <p className="text-sm text-slate-100/90">
                    For MSMEs with strong quality, safety and resource efficiency practices across key processes.
                  </p>
                </div>
              </div>
            </div>

            {/* Gold card */}
            <div className="zed-card zed-card-gold shadow-[0_18px_40px_rgba(15,23,42,0.9)] transform transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_26px_70px_rgba(15,23,42,0.95)]">
              <div className="zed-card-inner rounded-3xl bg-gradient-to-br from-[#3e2b00] via-[#c49306] to-[#ffe07a] p-6 min-h-[260px] sm:min-h-[280px]">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative h-24 w-24 sm:h-28 sm:w-28">
                    <Image
                      src="/zed-gold.jpg"
                      alt="MSME ZED Gold level certification"
                      fill
                      className="object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.85)]"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-yellow-200">Gold Certification</h3>
                  <p className="text-sm text-slate-100/90">
                    Highest level demonstrating world-class systems, sustainability leadership and global competitiveness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MSME ZED Benefits & Incentives */}
        <section id="msme-zed-benefits" className="mb-12">
          <div className="grid gap-10 lg:grid-cols-[3fr,2fr] items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold font-['Poppins'] mb-3">Benefits &amp; Government Incentives</h2>
              <p className="text-sm sm:text-base text-slate-200/90 mb-4 max-w-3xl">
                The ZED programme is backed by strong government support to encourage adoption and reduce the cost of
                transformation for MSMEs.
              </p>

              <h3 className="text-sm font-semibold text-emerald-300 uppercase tracking-[0.18em] mb-2">
                Government support
              </h3>
              <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-slate-200/90 mb-4">
                <li>Financial subsidies on assessment and certification costs.</li>
                <li>Handholding and consultancy support for implementation.</li>
                <li>Training and capacity-building programmes for teams.</li>
                <li>Access to tools, technology and modernization schemes.</li>
              </ul>

              <h3 className="text-sm font-semibold text-emerald-300 uppercase tracking-[0.18em] mb-2">
                Business outcomes
              </h3>
              <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-slate-200/90 mb-4">
                <li>More sustainable and efficient operations.</li>
                <li>Lower cost of poor quality and better profitability.</li>
                <li>Improved compliance with statutory and regulatory norms.</li>
                <li>Stronger brand, higher customer confidence and export readiness.</li>
              </ul>

              <p className="mt-3 text-sm sm:text-base text-slate-200/95">
                In simple terms, ZED is a powerful enabler for MSMEs that want to grow responsibly. By embracing Zero
                Defect, Zero Effect, enterprises can scale with excellence while contributing positively to society and
                the environment.
              </p>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-slate-950 via-emerald-900/30 to-sky-900/40 border border-emerald-500/40 p-5 shadow-[0_24px_60px_rgba(0,0,0,0.8)] flex flex-col justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-300 mb-2">
                  At a glance
                </p>
                <ul className="space-y-1.5 text-sm text-slate-100/90">
                  <li>Improved quality, productivity and reliability.</li>
                  <li>Reduced environmental impact and safer workplaces.</li>
                  <li>Higher preparedness for audits and certifications.</li>
                  <li>Better access to markets and long-term partnerships.</li>
                </ul>
              </div>

              <div className="mt-4 rounded-xl bg-slate-900/80 border border-emerald-400/40 px-4 py-3 text-xs sm:text-[13px]">
                <p className="font-semibold text-emerald-200 mb-1">Ready to adopt ZED?</p>
                <p className="text-slate-200/90">
                  Integrex can support you across the entire journey — from gap assessment and training to
                  implementation, documentation and certification readiness.
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
