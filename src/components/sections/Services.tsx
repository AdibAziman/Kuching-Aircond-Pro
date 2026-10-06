import React, { useState } from 'react';
import { Check, Clock, ShieldCheck, ChevronRight, Sparkles } from 'lucide-react';
import { servicesData } from '../../data/services';

interface ServicesProps {
  onSelectService: (serviceId: string) => void;
  onOpenBooking: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService, onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'residential' | 'commercial' | 'specialized'>('all');

  const filteredServices = activeTab === 'all'
    ? servicesData
    : servicesData.filter(s => s.category === activeTab);

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold text-sky-700 tracking-wider uppercase mb-2">
              <span>Standardized RM Menu</span>
              <span aria-hidden="true">·</span>
              <span>No Surprise Charges</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Professional Aircond Servicing Menu
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Clear, itemized scopes for homes and commercial establishments across Greater Kuching.
            </p>
          </div>

          {/* Interactive Filter Control */}
          <div className="mt-6 md:mt-0 flex items-center p-1 bg-slate-100 rounded-lg self-start">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                activeTab === 'all' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Services
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('residential')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                activeTab === 'residential' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Residential Split
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('commercial')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                activeTab === 'commercial' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Commercial Cassette
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredServices.map((service, idx) => (
            <div
              key={service.id}
              className={`rounded-2xl border p-6 flex flex-col justify-between transition-all relative ${
                service.isPopular
                  ? 'border-sky-500 bg-sky-50/20 shadow-md ring-1 ring-sky-500/20'
                  : 'border-slate-200 bg-white hover:border-slate-300 shadow-sm'
              }`}
            >
              {service.isPopular && (
                <div className="absolute -top-3 right-6 bg-sky-600 text-white text-[11px] font-bold px-3 py-0.5 rounded-full shadow-sm">
                  Most Requested in Kuching
                </div>
              )}

              <div>
                {/* Numbering and Price header */}
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                  <span className="font-mono font-medium">0{idx + 1}.</span>
                  <span className="flex items-center gap-1 text-slate-500">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{service.duration}</span>
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  {service.name}
                </h3>

                <div className="text-xl font-extrabold text-sky-900 mb-3">
                  {service.priceDisplay}
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Scope Checklist */}
                <div className="space-y-2 border-t border-slate-100 pt-4 mb-6">
                  <div className="text-[11px] font-bold text-slate-900 uppercase tracking-wider mb-2">
                    Scope of Work:
                  </div>
                  {service.checklist.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    onSelectService(service.id);
                    onOpenBooking();
                  }}
                  className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold text-center transition-all ${
                    service.isPopular
                      ? 'bg-sky-600 hover:bg-sky-700 text-white shadow-sm'
                      : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}
                >
                  Book This Service
                </button>
                <a
                  href="#calculator"
                  className="py-2.5 px-3 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  Estimate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
