import React, { useState } from 'react';
import { Check, Clock, ShieldCheck, ArrowRight, Phone, MessageSquare, AlertCircle, Sparkles, Layers } from 'lucide-react';
import { servicesData } from '../../data/services';
import { ServiceItem } from '../../types';

interface ServicesPageProps {
  onOpenBookingForService: (serviceId: string) => void;
  onOpenWhatsAppForService: (serviceName: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onOpenBookingForService,
  onOpenWhatsAppForService
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('chemical-wash');

  const currentService = servicesData.find(s => s.id === selectedServiceId) || servicesData[1];

  return (
    <div className="py-12 sm:py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-sky-700 uppercase tracking-widest mb-2">
            <span>Engineering Standard</span>
            <span aria-hidden="true">·</span>
            <span>CIDB Certified Craftsmanship</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Complete HVAC Service Catalog
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Detailed technical breakdowns, procedures, and transparent pricing in Ringgit Malaysia (RM) for all residential and commercial cooling systems.
          </p>
        </div>

        {/* Horizontal Service Selector Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {servicesData.map((service) => (
            <button
              key={service.id}
              type="button"
              onClick={() => setSelectedServiceId(service.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all border shrink-0 ${
                selectedServiceId === service.id
                  ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              {service.name}
            </button>
          ))}
        </div>

        {/* Detailed Service Showcase Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden p-6 sm:p-10 space-y-10">
          {/* Top Overview Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                <span className="font-semibold text-sky-700 capitalize">{currentService.category} Service</span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>Duration: {currentService.duration}</span>
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {currentService.name}
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
                {currentService.description}
              </p>
            </div>

            {/* Pricing Box & Action */}
            <div className="p-5 rounded-2xl bg-slate-900 text-white min-w-[260px] flex flex-col justify-between shrink-0">
              <div>
                <span className="text-[11px] text-slate-400 uppercase tracking-wider block">Standard Rate</span>
                <div className="text-2xl font-extrabold text-white mt-0.5">
                  {currentService.priceDisplay}
                </div>
                <div className="text-[11px] text-sky-300 mt-1 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>30-Day Guarantee Included</span>
                </div>
              </div>

              <div className="mt-5 space-y-2">
                <button
                  type="button"
                  onClick={() => onOpenBookingForService(currentService.id)}
                  className="w-full py-2.5 px-3 rounded-xl text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 transition-colors text-center"
                >
                  Book Service Slot
                </button>
                <button
                  type="button"
                  onClick={() => onOpenWhatsAppForService(currentService.name)}
                  className="w-full py-2 px-3 rounded-xl text-xs font-bold text-emerald-300 bg-emerald-950/60 hover:bg-emerald-950 border border-emerald-500/30 transition-colors text-center"
                >
                  WhatsApp Inquiries
                </button>
              </div>
            </div>
          </div>

          {/* Three-Column Technical Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Col 1: Symptoms & When You Need It */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wider">
                <AlertCircle className="w-4 h-4 text-amber-500" />
                <span>Signs You Need This Service:</span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-600">
                {(currentService.symptoms || [
                  'Decreased cooling performance',
                  'Foul or damp odor on startup',
                  'Water dripping down the wall',
                  'High monthly electric consumption'
                ]).map((symptom, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                    <span>{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 2: Step-by-Step Procedure */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wider">
                <Layers className="w-4 h-4 text-sky-600" />
                <span>Step-by-Step Procedure:</span>
              </div>
              <ol className="space-y-2.5 text-xs text-slate-600">
                {(currentService.steps || currentService.checklist).map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-4 h-4 rounded-full bg-sky-100 text-sky-700 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Col 3: Horsepower Pricing Matrix */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>Pricing by Horsepower (HP):</span>
              </div>
              <div className="space-y-2">
                {(currentService.pricingTiers || [
                  { hp: '1.0 HP', price: currentService.basePrice, notes: 'Standard Unit' },
                  { hp: '1.5 HP', price: currentService.basePrice + 10, notes: 'Master Room' },
                  { hp: '2.0 HP', price: currentService.basePrice + 30, notes: 'Living Hall' }
                ]).map((tier, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
                    <div>
                      <span className="font-bold text-slate-900">{tier.hp}</span>
                      {tier.notes && <span className="text-[10px] text-slate-400 block">{tier.notes}</span>}
                    </div>
                    <span className="font-extrabold text-slate-900">
                      RM {tier.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
