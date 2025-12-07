import { FileText, ShieldCheck, CheckCircle2 } from 'lucide-react';
import Navbar from './Navbar';

const sections = [
  {
    id: 'nsic-registration',
    title: 'NSIC Registration',
    tag: 'MSME Support',
    description:
      'NSIC Registration helps micro and small enterprises access government tenders, financial support and marketing assistance under a recognised registration framework.',
    points: [
      'Guidance on eligibility, documentation and application process.',
      'Support in preparing profiles, financials and declarations as required by NSIC.',
      'Handholding during renewal and compliance with NSIC norms.',
    ],
  },
  {
    id: 'factory-act',
    title: 'Factory Act Compliance',
    tag: 'Health, Safety & Welfare',
    description:
      'Factory Act compliance focuses on worker safety, health, welfare facilities and statutory registers for factories and manufacturing establishments.',
    points: [
      'Gap assessment against applicable Factory Act provisions.',
      'Support in maintaining statutory registers, notices and records.',
      'Guidance on safety, welfare and working condition improvements.',
    ],
  },
  {
    id: 'mpcb-compliance',
    title: 'MPCB Compliance',
    tag: 'Environment & Pollution Control',
    description:
      'MPCB (Maharashtra Pollution Control Board) compliance covers consent to establish / operate, environmental monitoring and adherence to emission and discharge norms.',
    points: [
      'Support for Consent to Establish (CTE) and Consent to Operate (CTO) applications.',
      'Co-ordination for renewals, amendments and compliance submissions.',
      'Guidance on monitoring, records and improvements to reduce risk.',
    ],
  },
  {
    id: 'trade-mark-compliance',
    title: 'Trade Mark Compliance',
    tag: 'Brand & IP Protection',
    description:
      'Trade mark compliance helps protect brand names, logos and taglines so that businesses can operate with legal protection and clear ownership.',
    points: [
      'Basic guidance on trade mark classification and search.',
      'Support in documentation for filing through authorised professionals.',
      'Reminders and guidance for renewals and usage consistency.',
    ],
  },
  {
    id: 'copy-right-compliance',
    title: 'Copy Right Compliance',
    tag: 'Content & Design Protection',
    description:
      'Copyright safeguards original content such as manuals, drawings, software, creative designs and other intellectual work.',
    points: [
      'Awareness support on what can be protected under copyright.',
      'Documentation support for registration through appropriate channels.',
      'Good practices to avoid infringement and protect proprietary content.',
    ],
  },
  {
    id: 'ce-marking-certification',
    title: 'CE Marking Certification',
    tag: 'Export & Product Compliance',
    description:
      'CE Marking is required for many products sold in the European Economic Area and confirms conformity with relevant EU directives and standards.',
    points: [
      'Orientation on applicable directives and product categories.',
      'Support in documentation, technical files and coordination with certifying bodies.',
      'Guidance to integrate CE requirements into existing management systems.',
    ],
  },
  {
    id: 'fssi',
    title: 'FSSI / Food Safety Compliance',
    tag: 'Food Safety & Hygiene',
    description:
      'Food safety compliance covers licensing / registration, hygienic practices and documentation under applicable food safety regulations.',
    points: [
      'Support for licence / registration documentation and basic requirements.',
      'Guidance on hygiene, housekeeping and process controls for food safety.',
      'Integration of food safety requirements with existing management systems.',
    ],
  },
];

export default function RegulatoryCompliancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-900 to-slate-950 text-blue-50">
      <Navbar currentPage="services" />
      <main className="pt-[88px]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Hero */}
          <section className="mb-14 text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/15 text-[11px] font-semibold tracking-[0.25em] uppercase text-sky-200 border border-sky-300/50">
              Regulatory Compliance Services
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold font-['Poppins'] leading-tight">
              <span className="bg-gradient-to-r from-white via-sky-200 to-emerald-200 bg-clip-text text-transparent">
                Statutory &amp; regulatory support for growing businesses.
              </span>
            </h1>
            <p className="mt-4 text-sm sm:text-[15px] text-blue-100/90">
              Integrex assists organisations in understanding and fulfilling key statutory and regulatory requirements
              so that management can focus on operations while staying compliant.
            </p>
          </section>

          {/* Sections grid */}
          <div className="space-y-10">
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="rounded-3xl bg-gradient-to-br from-slate-950/40 via-indigo-900/60 to-blue-800/70 border border-white/12 p-6 sm:p-8 shadow-[0_18px_48px_rgba(15,23,42,0.85)] scroll-mt-28"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-2 mb-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-sky-500/15 text-sky-200">
                        <FileText className="w-4 h-4" />
                      </span>
                      <div className="text-left">
                        <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-sky-300">
                          {section.tag}
                        </p>
                      </div>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-semibold font-['Poppins'] mb-3 text-white">
                      {section.title}
                    </h2>
                    <p className="text-xs sm:text-[13px] text-blue-100/90 max-w-2xl mb-4">
                      {section.description}
                    </p>
                    <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-[13px] text-blue-50/90">
                      {section.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="w-full md:w-64 lg:w-72 flex flex-col justify-between gap-4">
                    <div className="rounded-2xl bg-slate-950/60 border border-sky-400/40 px-4 py-3 text-xs sm:text-[13px] flex items-start gap-2">
                      <span className="mt-0.5 rounded-full bg-emerald-400/20 p-1.5 text-emerald-300">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </span>
                      <p className="text-blue-50/90 text-left">
                        This section gives an overview. Detailed documentation, checklists and formats can be customised
                        based on your organisation&apos;s size, processes and regulatory exposure.
                      </p>
                    </div>

                    <div className="rounded-2xl bg-slate-950/60 border border-sky-300/40 px-4 py-3 text-[11px] sm:text-[12px] flex items-center gap-2">
                      <span className="rounded-full bg-sky-500/20 p-1.5 text-sky-200">
                        <ShieldCheck className="w-3.5 h-3.5" />
                      </span>
                      <p className="text-blue-100/90 text-left">
                        For any of these compliances, Integrex can support from gap assessment to documentation and
                        audit readiness.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
