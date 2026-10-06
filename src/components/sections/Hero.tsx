import React from 'react';
import { ArrowRight, ShieldCheck, Star, Clock, CheckCircle2, Phone, Zap } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenWhatsApp: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenWhatsApp }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50/50 via-white to-slate-50 pt-12 pb-20 lg:pt-18 lg:pb-28">
      {/* Subtle Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c70a_1px,transparent_1px),linear-gradient(to_bottom,#0284c70a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            {/* Clean unboxed editorial kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-800 tracking-wide uppercase">
              <span>Sarawak CIDB Certified HVAC Specialists</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Serving Kuching & Samarahan Since 2018</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.08] text-balance">
              Ice-Cold Air. <br className="hidden sm:inline" />
              <span className="text-sky-700">Zero Hidden Charges.</span> <br />
              Guaranteed in 60 Mins.
            </h1>

            {/* Value Proposition Body */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl text-pretty">
              Tired of contractors claiming <span className="font-semibold text-slate-800">&quot;gas habis&quot;</span> and adding surprise RM150 fees? We deliver engineering-grade chemical wash, chemical overhaul, and precision repairs across Kuching and Samarahan. Transparent upfront prices, 8 certified technicians, and a <strong className="font-semibold text-slate-800">30-day workmanship warranty</strong>.
            </p>

            {/* Primary Action Zone */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <span>Book Certified Service</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onOpenWhatsApp}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-bold text-emerald-900 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-xl transition-all"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>WhatsApp Instant Dispatch</span>
              </button>
            </div>

            {/* Claim to Proof Adjacency: Unboxed Trust Signals */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-slate-600">
              <div>
                <div className="flex items-center gap-1 text-amber-500 font-bold">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>4.9 / 5.0 Rating</span>
                </div>
                <div className="text-slate-500 text-[11px] mt-0.5">340+ Kuching reviews</div>
              </div>

              <div>
                <div className="font-bold text-slate-900 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
                  <span>30-Day Warranty</span>
                </div>
                <div className="text-slate-500 text-[11px] mt-0.5">Leak-free guarantee</div>
              </div>

              <div>
                <div className="font-bold text-slate-900 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>8 Certified Techs</span>
                </div>
                <div className="text-slate-500 text-[11px] mt-0.5">CIDB Green Card</div>
              </div>

              <div>
                <div className="font-bold text-slate-900 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-sky-600" />
                  <span>RM0 Travel Fee</span>
                </div>
                <div className="text-slate-500 text-[11px] mt-0.5">Samarahan & Batu Kawa</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Quick Card & Visual Tech Diagram */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-6 sm:p-7 relative overflow-hidden">
              {/* Highlight ribbon */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                <div>
                  <div className="text-xs font-bold text-sky-700 uppercase tracking-wide">
                    Live Booking Hotline
                  </div>
                  <div className="text-lg font-bold text-slate-900 mt-0.5">
                    Kuching Dispatch Center
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                  <span>Crews on Duty</span>
                </div>
              </div>

              {/* Service Price Quick Table */}
              <div className="py-5 space-y-3">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-sky-200 transition-colors">
                  <div>
                    <div className="text-xs font-bold text-slate-900">General Servicing & Wash</div>
                    <div className="text-[11px] text-slate-500">Filter clean, pipe vacuum, amp check</div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-extrabold text-slate-900">RM 60</span>
                    <span className="text-[10px] text-slate-400 block">/ unit</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-sky-50/60 border border-sky-200/80">
                  <div>
                    <div className="text-xs font-bold text-sky-950 flex items-center gap-1.5">
                      <span>In-Situ Chemical Wash</span>
                      <span className="text-[10px] bg-sky-600 text-white font-semibold px-1.5 py-0.2 rounded">POPULAR</span>
                    </div>
                    <div className="text-[11px] text-sky-800">Alkaline foam, shroud bag, blower wheel</div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-extrabold text-sky-950">RM 130</span>
                    <span className="text-[10px] text-sky-700 block">/ unit</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-sky-200 transition-colors">
                  <div>
                    <div className="text-xs font-bold text-slate-900">Full Chemical Overhaul</div>
                    <div className="text-[11px] text-slate-500">Full dismount, tank soak, 30-day warranty</div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-extrabold text-slate-900">RM 180</span>
                    <span className="text-[10px] text-slate-400 block">/ unit</span>
                  </div>
                </div>
              </div>

              {/* Quick Estimator CTA */}
              <div className="pt-2 space-y-3">
                <a
                  href="#calculator"
                  className="w-full py-2.5 px-4 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl flex items-center justify-center gap-2 transition-colors"
                >
                  <Zap className="w-3.5 h-3.5 text-amber-500" />
                  <span>Open Custom HP & Multi-Unit Calculator</span>
                </a>
                
                <p className="text-[11px] text-slate-500 text-center">
                  Zero advance deposit required · Pay after satisfaction via Sarawak Pay or DuitNow
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
