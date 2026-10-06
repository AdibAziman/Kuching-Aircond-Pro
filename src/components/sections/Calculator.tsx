import React, { useState } from 'react';
import { Calculator as CalcIcon, Check, MessageSquare, ArrowRight, Sparkles, AlertCircle } from 'lucide-react';
import { servicesData } from '../../data/services';
import { coverageAreasData } from '../../data/areas';

interface CalculatorProps {
  onOpenBookingWithDetails: (details: {
    serviceId: string;
    horsepower: string;
    units: number;
    areaId: string;
    totalRM: number;
  }) => void;
  onOpenWhatsAppWithMessage: (message: string) => void;
}

export const Calculator: React.FC<CalculatorProps> = ({
  onOpenBookingWithDetails,
  onOpenWhatsAppWithMessage
}) => {
  const [serviceId, setServiceId] = useState<string>('chemical-wash');
  const [horsepower, setHorsepower] = useState<string>('1.0');
  const [units, setUnits] = useState<number>(2);
  const [areaId, setAreaId] = useState<string>('kuching-central');
  const [includeGasCheck, setIncludeGasCheck] = useState<boolean>(false);

  // Selected entities
  const selectedService = servicesData.find(s => s.id === serviceId) || servicesData[1];
  const selectedArea = coverageAreasData.find(a => a.id === areaId) || coverageAreasData[0];

  // Base pricing logic by HP
  const getHpMultiplier = (hp: string, base: number) => {
    switch (hp) {
      case '1.0': return base;
      case '1.5': return base + 10;
      case '2.0': return base + 30;
      case '2.5': return base + 50;
      case '3.0': return base + 70;
      default: return base;
    }
  };

  const unitBasePrice = getHpMultiplier(horsepower, selectedService.basePrice);
  
  // Multi-unit discount: if 3 or more units and service is chemical wash or overhaul, discount RM10 per unit
  const hasMultiUnitDiscount = units >= 3 && (serviceId === 'chemical-wash' || serviceId === 'chemical-overhaul');
  const discountPerUnit = hasMultiUnitDiscount ? 10 : 0;
  const effectivePricePerUnit = unitBasePrice - discountPerUnit;
  
  const gasDiagnosticFee = includeGasCheck ? 40 : 0;
  const totalRM = (effectivePricePerUnit * units) + gasDiagnosticFee;
  const savingsRM = discountPerUnit * units;

  const handleWhatsAppQuote = () => {
    const text = `Hi Kuching Aircond Pro, I want to book:
• Service: ${selectedService.name}
• Horsepower: ${horsepower} HP
• Number of Units: ${units} unit(s)
• Coverage Area: ${selectedArea.name}
${includeGasCheck ? '• Add-on: Refrigerant Pressure Diagnostic\n' : ''}• Estimated Quote: RM ${totalRM}

Please check earliest availability slot for this week. Thank you!`;
    onOpenWhatsAppWithMessage(text);
  };

  const handleBookNow = () => {
    onOpenBookingWithDetails({
      serviceId,
      horsepower,
      units,
      areaId,
      totalRM
    });
  };

  return (
    <section id="calculator" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-sky-700 tracking-wider uppercase mb-2">
            <span>Instant Estimator</span>
            <span aria-hidden="true">·</span>
            <span>Zero Hidden Costs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Transparent Price & Package Calculator
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Calculate your exact service cost before scheduling. No surprise charges upon arrival.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Box */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-7">
            {/* Step 1: Select Service */}
            <div>
              <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                01. Select Service Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  { id: 'general-service', name: 'General Service', sub: 'Filter & Drain vacuum' },
                  { id: 'chemical-wash', name: 'Chemical Wash', sub: 'In-situ coil foam & fan' },
                  { id: 'chemical-overhaul', name: 'Chemical Overhaul', sub: 'Full dismantle tank soak' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setServiceId(item.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      serviceId === item.id
                        ? 'border-sky-600 bg-sky-50/60 ring-2 ring-sky-600/20'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="text-xs font-bold text-slate-900">{item.name}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{item.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Horsepower Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 sm:mb-3">
                02. Unit Horsepower (HP)
              </label>
              <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
                {['1.0', '1.5', '2.0', '2.5', '3.0'].map((hp) => (
                  <button
                    key={hp}
                    type="button"
                    onClick={() => setHorsepower(hp)}
                    className={`py-2 sm:py-2.5 px-1 sm:px-2 text-center rounded-lg border text-[11px] sm:text-xs font-bold transition-all ${
                      horsepower === hp
                        ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {hp} HP
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Quantity Buttons */}
            <div>
              <div className="flex items-center justify-between mb-2 sm:mb-3">
                <label className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  03. Number of Aircond Units
                </label>
                <span className="text-xs font-bold text-sky-700">
                  {units} {units === 1 ? 'Unit' : 'Units'}
                </span>
              </div>
              <div className="grid grid-cols-6 gap-1.5 sm:gap-2">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setUnits(num)}
                    className={`py-2 rounded-lg text-xs font-bold border transition-all ${
                      units === num
                        ? 'bg-sky-600 text-white border-sky-600 shadow-sm'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
              {units >= 3 && (serviceId === 'chemical-wash' || serviceId === 'chemical-overhaul') && (
                <div className="mt-2.5 flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 p-2 rounded-lg border border-emerald-200">
                  <Sparkles className="w-3.5 h-3.5 shrink-0" />
                  <span>Multi-unit bundle discount applied: RM10 OFF per unit!</span>
                </div>
              )}
            </div>

            {/* Step 4: Coverage Area */}
            <div>
              <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                04. Service Location (Sarawak)
              </label>
              <select
                value={areaId}
                onChange={(e) => setAreaId(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                {coverageAreasData.map((area) => (
                  <option key={area.id} value={area.id}>
                    {area.name} — {area.eta} ETA (RM0 Travel Fee)
                  </option>
                ))}
              </select>
            </div>

            {/* Optional Diagnostic Checkbox */}
            <div className="pt-2">
              <label className="flex items-start gap-3 cursor-pointer p-3 rounded-xl border border-slate-200 hover:border-slate-300 bg-slate-50/50">
                <input
                  type="checkbox"
                  checked={includeGasCheck}
                  onChange={(e) => setIncludeGasCheck(e.target.checked)}
                  className="mt-0.5 rounded text-sky-600 focus:ring-sky-500"
                />
                <div>
                  <div className="text-xs font-bold text-slate-900">
                    Add Digital Manifold Gas PSI Diagnostic (+RM40)
                  </div>
                  <div className="text-[11px] text-slate-500 leading-tight">
                    Full gauge test for flare leaks, running amps, and condenser coil performance.
                  </div>
                </div>
              </label>
            </div>
          </div>

          {/* Quotation Summary Card */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 shadow-md p-6 sm:p-8 space-y-6">
            <div>
              <span className="text-[11px] font-bold text-sky-700 uppercase tracking-wider">
                Instant Price Breakdown
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-1">
                Quotation Summary
              </h3>
            </div>

            <div className="space-y-3 py-4 border-y border-slate-100 text-xs">
              <div className="flex justify-between text-slate-600">
                <span>Selected Service:</span>
                <span className="font-semibold text-slate-900">{selectedService.name}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Horsepower & Units:</span>
                <span className="font-semibold text-slate-900">{units}x {horsepower} HP</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Standard Rate / Unit:</span>
                <span className="font-semibold text-slate-900">RM {unitBasePrice}</span>
              </div>
              {hasMultiUnitDiscount && (
                <div className="flex justify-between text-emerald-600 font-semibold">
                  <span>Multi-Unit Savings:</span>
                  <span>- RM {savingsRM}</span>
                </div>
              )}
              {includeGasCheck && (
                <div className="flex justify-between text-slate-600">
                  <span>Refrigerant Diagnostic:</span>
                  <span className="font-semibold text-slate-900">+ RM 40</span>
                </div>
              )}
              <div className="flex justify-between text-slate-600">
                <span>Location Dispatch Surcharge:</span>
                <span className="font-bold text-emerald-600">RM 0 (Waived)</span>
              </div>
            </div>

            {/* Total Ringgit Box */}
            <div className="p-4 rounded-xl bg-slate-900 text-white flex items-baseline justify-between">
              <div>
                <span className="text-xs text-slate-400 block">Total Estimated Price:</span>
                <span className="text-3xl font-extrabold tracking-tight text-white">
                  RM {totalRM}
                </span>
              </div>
              <div className="text-right text-[11px] text-sky-300">
                Includes 30-Day Warranty
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-3">
              <button
                type="button"
                onClick={handleWhatsAppQuote}
                className="w-full py-3 px-4 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send This Quote to WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={handleBookNow}
                className="w-full py-3 px-4 rounded-xl text-xs font-bold text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-200 flex items-center justify-center gap-2 transition-all"
              >
                <span>Book This Slot Online</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <p className="text-[11px] text-slate-500 text-center leading-relaxed">
              No prepayment required. Inspection is performed on-site before work commences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
