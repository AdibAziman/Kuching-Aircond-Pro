import React from 'react';
import { ShieldCheck, Award, Users, CheckCircle2, MapPin, Calendar, Clock, Wrench } from 'lucide-react';
import { techniciansData } from '../../data/technicians';

interface AboutPageProps {
  onOpenBooking: () => void;
  onOpenWhatsApp: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenBooking, onOpenWhatsApp }) => {
  return (
    <div className="py-12 sm:py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-sky-700 uppercase tracking-widest mb-2">
            <span>Our Founding Story</span>
            <span aria-hidden="true">·</span>
            <span>Est. 2018 Kuching, Sarawak</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Setting the Benchmark for Certified HVAC Care
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Founded to eliminate dishonest contractors, phantom gas refill scams, and water damage from the Sarawak air conditioning service market.
          </p>
        </div>

        {/* Story & Founders Card */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <h2 className="text-2xl font-bold text-slate-900">
              From a Single Mobile Van to Sarawak’s Most Trusted HVAC Fleet
            </h2>
            <p>
              In 2018, HVAC engineer <strong>Ts. Adrian Ting</strong> and field operations specialist <strong>Khairul Anuar</strong> observed a frustrating pattern among Kuching homeowners: contractors frequently quoted cheap RM40 entry prices, only to invent fake gas top-up charges (<em>&quot;gas habis bang, kena tambah RM150&quot;</em>) and disappear when the unit began dripping water 48 hours later.
            </p>
            <p>
              Determined to bring engineering accountability to Sarawak, they founded <strong>Kuching Aircond Pro</strong>. Every technician undergoes rigorous training under CIDB and Department of Environment (DOE) guidelines, uses digital manifold pressure gauges, and provides customers with an ironclad <strong>30-day unconditional workmanship guarantee</strong>.
            </p>
            <p>
              Today, operating from their central dispatch depot at Jalan Tun Jugah, our squad of 8 certified technicians maintains over 3,000 residential and commercial cooling units across Kuching, Kota Samarahan, Batu Kawa, and Petra Jaya annually.
            </p>

            {/* SSM credentials callout */}
            <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-slate-400 block">SSM Registration:</span>
                <span className="font-mono font-bold text-slate-900">201803129481</span>
              </div>
              <div>
                <span className="text-slate-400 block">Sarawak Trade License:</span>
                <span className="font-mono font-bold text-slate-900">SA-0482910-X</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-6">
            <h3 className="text-lg font-bold text-white">
              The Kuching Aircond Pro Code
            </h3>
            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">1. Live Gauge Transparency</strong>
                  <span className="text-slate-300">We show you digital manifold PSI before adding refrigerant. If pressure is normal, you pay RM0.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">2. Standard Kebersihan Jepun</strong>
                  <span className="text-slate-300">Clean booties, 3-meter floor tarpaulins, and sealed catchment bags. Your walls and floors stay pristine.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">3. 30-Day Written Warranty</strong>
                  <span className="text-slate-300">If your unit leaks or rattles within 30 days, we return within 24 hours to resolve it free.</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full py-3 px-4 rounded-xl text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 transition-colors text-center"
              >
                Schedule Service with Our Team
              </button>
            </div>
          </div>
        </div>

        {/* All 8 Certified Technicians */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              The 8 Certified Technicians
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-600">
              Our full-time crew certified under CIDB Sarawak and the Department of Environment (DOE).
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techniciansData.map((tech) => (
              <div
                key={tech.id}
                className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tech.accentColor} text-white flex items-center justify-center font-bold text-base shadow-sm shrink-0`}>
                    {tech.avatarInitials}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 leading-tight">
                      {tech.name}
                    </h3>
                    <div className="text-[11px] text-sky-700 font-semibold mt-0.5">
                      {tech.role}
                    </div>
                  </div>
                </div>

                <div className="text-xs text-slate-600 space-y-1.5 py-3 border-y border-slate-100">
                  <div className="flex justify-between">
                    <span className="text-slate-400">CIDB Number:</span>
                    <span className="font-mono font-semibold text-slate-900">{tech.cidbReg}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Experience:</span>
                    <span className="font-semibold text-slate-900">{tech.yearsExp} Years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Qualifications:</span>
                    <span className="font-semibold text-slate-800 text-right">{tech.wiremanGrade}</span>
                  </div>
                </div>

                <p className="text-[11px] text-slate-600 leading-relaxed">
                  <strong className="text-slate-900">Specialty:</strong> {tech.specialty}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
