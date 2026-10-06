import React, { useState } from 'react';
import { MapPin, Navigation, Clock, Users, ShieldCheck, ArrowRight, Building2, GraduationCap, Home, Landmark, Mountain, Sparkles } from 'lucide-react';
import { coverageAreasData } from '../../data/areas';
import { GoogleMapSection } from '../common/GoogleMapSection';

interface AreasPageProps {
  onSelectAreaForBooking: (areaId: string) => void;
  onOpenWhatsApp: () => void;
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

export const AreasPage: React.FC<AreasPageProps> = ({
  onSelectAreaForBooking,
  onOpenWhatsApp
}) => {
  const [, setSelectedAreaId] = useState<string>('kuching-central');

  return (
    <div className="py-12 sm:py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-sky-700 uppercase tracking-widest mb-2">
            <span>Metropolitan Dispatch Hub</span>
            <span aria-hidden="true">·</span>
            <span>Zero Travel Surcharges</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our 6 Greater Kuching Coverage Zones
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            From central Padungan to Kota Samarahan and Batu Kawa MJC, our 4 mobile service vans are equipped with certified gear and offer flat standard pricing across Sarawak.
          </p>
        </div>

        {/* Interactive Google Maps Section */}
        <GoogleMapSection
          onSelectArea={(areaId) => {
            setSelectedAreaId(areaId);
            onSelectAreaForBooking(areaId);
          }}
          onOpenWhatsApp={onOpenWhatsApp}
        />

        {/* Detailed Neighborhood Cards with Authentic Place Photography */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coverageAreasData.map((area) => (
            <div
              key={area.id}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Photo Header for this specific place */}
                <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                  <img
                    src={area.imageUrl}
                    alt={area.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-white bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/20">
                      {getZoneIcon(area.imageTheme.iconKey, "w-3 h-3 text-sky-400")}
                      <span>{area.name.split('&')[0]}</span>
                    </span>

                    <span className="text-[10px] font-bold text-emerald-300 bg-emerald-950/80 backdrop-blur-md px-2 py-0.5 rounded-md border border-emerald-500/40">
                      RM 0 Surcharge
                    </span>
                  </div>

                  {/* Bottom Image Caption */}
                  <div className="absolute bottom-2.5 left-3 right-3 text-xs text-white">
                    <span className="text-[11px] text-slate-300 block truncate">{area.tagline}</span>
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

                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-4 pb-3 border-b border-slate-100">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>ETA: <strong className="text-slate-800">{area.eta}</strong></span>
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-slate-400" />
                      <span>Crews: <strong className="text-slate-800">{area.activeCrews} Vans</strong></span>
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {area.highlightText}
                  </p>

                  <div className="mb-4">
                    <span className="text-[11px] font-bold text-slate-900 uppercase block mb-1.5">
                      Estates & Landmarks:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {area.landmarks.map((landmark, idx) => (
                        <span key={idx} className="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                          {landmark}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-2">
                    <span className="text-[11px] font-bold text-slate-900 uppercase block mb-1.5">
                      Common Local Factors:
                    </span>
                    <ul className="text-xs text-slate-600 space-y-1">
                      {area.commonIssues.slice(0, 2).map((issue, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-sky-600 font-bold">•</span>
                          <span>{issue}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={() => onSelectAreaForBooking(area.id)}
                  className="w-full py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Book Priority Dispatch in {area.name.split('&')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
