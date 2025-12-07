import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactUs() {
  return (
    <section
      id="contact"
      className="relative py-24 sm:py-28 bg-gradient-to-b from-blue-900 via-blue-800 to-slate-950 text-white"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/2 h-64 w-[32rem] -translate-x-1/2 rounded-full bg-blue-500/25 blur-3xl" />
        <div className="absolute bottom-[-6rem] right-0 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[11px] font-semibold tracking-[0.35em] text-sky-300 uppercase">
            Contact Us
          </p>
          <h1 className="mt-4 text-3xl sm:text-4xl font-semibold text-white font-['Poppins']">
            INTEGREX COMPLIANCE TECH PRIVATE LIMITED 
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-200 font-['Inter']">
            We are here to support you with compliance, management systems, and sustainable growth.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1.5fr)]">
          <div className="rounded-3xl border border-blue-100/80 bg-white/90 p-7 sm:p-8 shadow-[0_18px_55px_rgba(15,23,42,0.08)]">
            <div className="flex items-start gap-3">
              <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1 text-sm sm:text-base font-['Inter'] text-slate-700">
                <p className="font-semibold text-blue-900">Registered Office</p>
                <p>Gat no. 510 - 514, Vision Indradhanu,</p>
                <p>Ph - 1, A1007, Chikhali, Tahsil-Haveli,</p>
                <p>Dist-Pune - 411062, Maharashtra, India.</p>
                <p className="pt-2">
                  <span className="font-semibold text-slate-900">GSTIN:</span>{' '}
                  27AAICI1806K1ZH
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-blue-100/80 bg-white/90 p-7 sm:p-8 shadow-[0_18px_55px_rgba(15,23,42,0.08)]">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-sm sm:text-base font-['Inter'] text-slate-700">
                  <p className="font-semibold text-blue-900">Phone </p>
                  <div className="mt-1 space-y-1">
                    <a href="tel:+918983454112" className="block hover:text-blue-700">
                      +91 8983454112
                    </a>
                    <a href="tel:+917774034698" className="block hover:text-blue-700">
                      +91 7774034698
                    </a>
                    <a href="tel:+917757045585" className="block hover:text-blue-700">
                      +91 7757045585
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-blue-100/80 bg-white/90 p-7 sm:p-8 shadow-[0_18px_55px_rgba(15,23,42,0.08)]">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-50 text-sky-700">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-sm sm:text-base font-['Inter'] text-slate-700">
                  <p className="font-semibold text-blue-900">Email </p>
                  <div className="mt-1 space-y-1">
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=admin@integrex.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block break-all hover:text-blue-700"
                    >
                      admin@integrex.in
                    </a>

                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=integrex.iso@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block break-all hover:text-blue-700"
                    >
                      integrex.iso@gmail.com
                    </a>

                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=integrextech@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block break-all hover:text-blue-700"
                    >
                      integrextech@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
