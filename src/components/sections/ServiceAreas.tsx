import React from 'react';
import { MapPin, Clock, Users, ShieldCheck, ArrowRight, Building2, GraduationCap, Home, Landmark, Mountain, Sparkles } from 'lucide-react';
import { coverageAreasData } from '../../data/areas';

interface ServiceAreasProps {
  onSelectAreaForBooking: (areaId: string) => void;
}

const getZoneIcon = (key: string, className = "w-3.5 h-3.5") => {
  switch (key) {
    case 'building': return <Building2 className={className} />;
    case 'education': return <GraduationCap className={className} />;
    case 'residential': return <Home className={className} />;
    case 'civic': return <Landmark className={className} />;
    case 'nature': return <Mountain className={className} />;
    case 'commercial': return <Sparkles className={className} />;
    default: return <Building2 className={className} />;
  }
};

export const ServiceAreas: React.FC<ServiceAreasProps> = ({ onSelectAreaForBooking }) => {
  return (
    <section id="coverage" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-sky-700 tracking-wider uppercase mb-2">
            <span>Metropolitan Coverage</span>
            <span aria-hidden="true">·</span>
            <span>Zero Travel Surcharges</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our 6 Greater Kuching Service Clusters
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Dedicated mobile dispatch units stationed throughout Kuching and Samarahan for rapid, reliable arrival.
          </p>
        </div>

        {/* 6 Micro-zone Grid with Distinct Photographs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coverageAreasData.map((area) => (
            <div
              key={area.id}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:border-sky-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Visual Area Header */}
                <div className="relative h-40 w-full overflow-hidden bg-slate-900">
                  <img
                    src={area.imageUrl}
                    alt={area.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-white bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/20">
                      {getZoneIcon(area.imageTheme.iconKey, "w-3 h-3 text-sky-400")}
                      <span>{area.name.split('&')[0]}</span>
                    </span>
                    <span className="text-[10px] font-bold text-emerald-300 bg-emerald-950/80 backdrop-blur-md px-2 py-0.5 rounded-md border border-emerald-500/40">
                      RM 0 Surcharge
                    </span>
                  </div>

                  <div className="absolute bottom-2.5 left-3 right-3 text-xs text-slate-200">
                    <span className="text-[11px] block truncate">{area.tagline}</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-sky-600" />
                      <h3 className="text-base font-bold text-slate-900">
                        {area.name}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-4 pb-3 border-b border-slate-100">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>ETA: {area.eta}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-slate-400" />
                      <span>{area.activeCrews} Mobile Crews</span>
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {area.highlightText}
                  </p>

                  <div className="mb-4">
                    <div className="text-[11px] font-bold text-slate-900 uppercase tracking-wider mb-2">
                      Key Neighborhoods Covered:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {area.landmarks.map((landmark, i) => (
                        <span
                          key={i}
                          className="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md"
                        >
                          {landmark}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={() => onSelectAreaForBooking(area.id)}
                  className="w-full py-2.5 px-3 rounded-xl text-xs font-bold text-center text-slate-900 bg-slate-100 hover:bg-sky-50 hover:text-sky-700 hover:border-sky-200 border border-slate-200 transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Dispatch to {area.name.split('&')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Commitment Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">
                The Sarawak Local Fairness Promise
              </div>
              <div className="text-xs text-slate-500">
                Whether you live in central Padungan or deep inside Kota Samarahan, our service rate is 100% identical.
              </div>
            </div>
          </div>

          <a
            href="#calculator"
            className="text-xs font-bold text-sky-700 hover:text-sky-800 whitespace-nowrap flex items-center gap-1"
          >
            <span>Calculate Your Area Pricing</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
