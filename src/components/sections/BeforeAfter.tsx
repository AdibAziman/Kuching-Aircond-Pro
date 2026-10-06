import React, { useState } from 'react';
import { ArrowLeftRight, CheckCircle2, AlertTriangle, ShieldCheck, Zap } from 'lucide-react';

export const BeforeAfter: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [activeCase, setActiveCase] = useState<'coil' | 'blower' | 'drainage'>('coil');

  const cases = {
    coil: {
      title: 'Evaporator Aluminum Cooling Coil',
      beforeLabel: 'Neglected 11 Months (Tabuan Tranquility)',
      afterLabel: 'Bio-Alkaline Chemical Overhaul',
      beforeDescription: 'Fins choked with humid fungal biofilm and pet dander. Air output temperature restricted to 22.8°C with musty damp odor.',
      afterDescription: 'Restored factory silver fins without acid corrosion. Vent output dropped to 14.2°C; air volume increased by +68%.',
      deltaT: 'Delta-T: 14.2°C (Ice-Cold)',
      sescoSavings: 'Up to 28% SESCO Electricity Reduction'
    },
    blower: {
      title: 'Cross-Flow Fan Blower Wheel',
      beforeLabel: 'Clogged Blower Rotor (Gala City Cafe)',
      afterLabel: 'High-Pressure Slime Blast',
      beforeDescription: 'Vanes coated in grease and sticky black soot. Severe air resistance causing rattling motor vibrations.',
      afterDescription: 'Every single vane pressure-cleared into containment shroud. Whisper-quiet rotation at 32dB.',
      deltaT: 'Airflow Velocity: +74% CFM',
      sescoSavings: 'Zero Motor Overheat / Bearing Protected'
    },
    drainage: {
      title: 'Condensate Drain Pan & PVC Line',
      beforeLabel: 'Gelatinous Slime Plug (Uni-Garden)',
      afterLabel: 'Pressure Vacuum Jetting',
      beforeDescription: 'Bacterial jelly plugging the 16mm drain nipple, causing water to overflow and ruin drywall and parquet.',
      afterDescription: '100% cleared drainage path with anti-bacterial rinse tablet inserted into the tray.',
      deltaT: 'Drainage Flow: 100% Free Flow',
      sescoSavings: 'Zero Wall Leaks / 30-Day Guaranteed'
    }
  };

  const currentCase = cases[activeCase];

  return (
    <section id="transformation" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-sky-400 tracking-wider uppercase mb-2">
            <span>Visual Evidence</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Real Sarawak Homes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            The Chemical Wash Transformation
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300">
            Slide horizontally to see the difference between choked fungal coils and engineering-grade chemical restoration.
          </p>

          {/* Case switcher tabs */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {[
              { id: 'coil', label: 'Evaporator Cooling Coil' },
              { id: 'blower', label: 'Blower Fan Wheel' },
              { id: 'drainage', label: 'Drainage Slime Tray' }
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveCase(tab.id as 'coil' | 'blower' | 'drainage')}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  activeCase === tab.id
                    ? 'bg-sky-500 text-white shadow-sm'
                    : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Comparison Container */}
        <div className="max-w-4xl mx-auto bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl p-4 sm:p-6">
          <div className="relative h-80 sm:h-96 w-full rounded-xl overflow-hidden select-none cursor-ew-resize">
            {/* AFTER Layer (Full Background) */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 flex items-center justify-center p-6 sm:p-12">
              <div className="w-full h-full rounded-lg border border-sky-500/30 bg-slate-900/80 p-6 flex flex-col justify-between relative overflow-hidden">
                {/* SVG Schematic: Pristine Clean Coil */}
                <div className="absolute right-6 top-6 opacity-20 pointer-events-none">
                  <div className="w-64 h-64 border-4 border-dashed border-sky-400 rounded-full animate-spin-slow"></div>
                </div>

                <div className="space-y-2 sm:space-y-3 relative z-10 text-right self-end max-w-[200px] sm:max-w-xs">
                  <div className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-0.5 sm:py-1 rounded-md">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>AFTER: Chemical Wash</span>
                  </div>
                  <h4 className="text-base sm:text-xl font-extrabold text-white leading-tight">
                    {currentCase.afterLabel}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed hidden sm:block">
                    {currentCase.afterDescription}
                  </p>
                  <div className="pt-1 sm:pt-2 text-[11px] sm:text-xs font-bold text-sky-400">
                    {currentCase.deltaT}
                  </div>
                </div>

                <div className="relative z-10 flex items-center justify-end gap-2 text-xs text-emerald-400 font-semibold">
                  <Zap className="w-4 h-4" />
                  <span>{currentCase.sescoSavings}</span>
                </div>
              </div>
            </div>

            {/* BEFORE Layer (Clipped by sliderPosition) */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-amber-950/90 via-slate-900 to-zinc-950 flex items-center justify-start p-6 sm:p-12 border-r border-amber-500/60"
              style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
            >
              <div className="w-full h-full rounded-lg border border-amber-600/30 bg-black/60 p-6 flex flex-col justify-between relative overflow-hidden">
                <div className="space-y-2 sm:space-y-3 relative z-10 max-w-[200px] sm:max-w-xs">
                  <div className="inline-flex items-center gap-1.5 bg-amber-500/20 text-amber-400 border border-amber-500/40 text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-0.5 sm:py-1 rounded-md">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>BEFORE: Choked Mold</span>
                  </div>
                  <h4 className="text-base sm:text-xl font-extrabold text-white leading-tight">
                    {currentCase.beforeLabel}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-amber-200/80 leading-relaxed hidden sm:block">
                    {currentCase.beforeDescription}
                  </p>
                  <div className="pt-1 sm:pt-2 text-[11px] sm:text-xs font-bold text-amber-400 flex items-center gap-1">
                    <AlertTriangle className="w-3 h-3 text-amber-400 shrink-0" />
                    <span>Compressor Drawing 9.4A (Strained)</span>
                  </div>
                </div>

                <div className="relative z-10 text-xs text-amber-400 font-medium">
                  High Humidity Sludge Active
                </div>
              </div>
            </div>

            {/* Draggable Divider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 flex items-center justify-center shadow-2xl"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-9 h-9 rounded-full bg-white text-slate-950 shadow-xl flex items-center justify-center -translate-x-1/2 border-2 border-sky-500 font-bold">
                <ArrowLeftRight className="w-4 h-4 text-sky-700" />
              </div>
            </div>

            {/* Range Input Overlay for full keyboard and touch accessibility */}
            <input
              type="range"
              min="5"
              max="95"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              aria-label="Before and after transformation slider"
              className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-30"
            />
          </div>

          {/* Slider bottom guide */}
          <div className="mt-4 flex items-center justify-between text-xs text-slate-400 px-2">
            <span>← Drag left to reveal restored clean coil</span>
            <span className="font-semibold text-slate-300">{currentCase.title}</span>
            <span>Drag right to inspect mold buildup →</span>
          </div>
        </div>
      </div>
    </section>
  );
};
