import React, { useState } from 'react';
import {
  Navigation,
  Compass,
  Phone,
  Building2,
  GraduationCap,
  Home,
  Landmark,
  Mountain,
  Sparkles,
  MapPin,
  Clock,
  ExternalLink,
  Camera,
  Layers,
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';
import { coverageAreasData, AreaDetail } from '../../data/areas';
import { motion, AnimatePresence } from 'motion/react';

interface GoogleMapSectionProps {
  onSelectArea: (areaId: string) => void;
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

export const GoogleMapSection: React.FC<GoogleMapSectionProps> = ({
  onSelectArea,
  onOpenWhatsApp
}) => {
  const [selectedAreaId, setSelectedAreaId] = useState<string>('kuching-central');
  const [viewMode, setViewMode] = useState<'map' | 'visual'>('map');
  const [imageErrorMap, setImageErrorMap] = useState<Record<string, boolean>>({});

  const selectedArea = coverageAreasData.find(a => a.id === selectedAreaId) || coverageAreasData[0];
  const depotAddress = "Lot 284, Ground Floor, Jalan Tun Jugah, 93350 Kuching, Sarawak";
  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${selectedArea.lat},${selectedArea.lng}`;

  // 100% Free Official Google Maps Embed - Zero API Key, Zero Billing, Free Forever
  const googleMapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(selectedArea.mapsQuery + ', Kuching, Sarawak')}&t=&z=14&ie=UTF8&iwloc=&output=embed`;

  const handleImageError = (id: string) => {
    setImageErrorMap(prev => ({ ...prev, [id]: true }));
  };

  return (
    <div className="bg-slate-900 text-white rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
      {/* Top Header */}
      <div className="p-5 sm:p-7 border-b border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-sky-400 uppercase tracking-widest mb-1">
            <Compass className="w-3.5 h-3.5 text-sky-400" />
            <span>Interactive Real Location Radar · Free Map & Place Visuals</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white">
            Greater Kuching Operations Hub & Live Radar
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Central Dispatch Depot: {depotAddress}
          </p>
        </div>

        {/* Action Controls: Smooth Switch Between Google Map & Real Place Photo */}
        <div className="flex flex-wrap items-center gap-2.5">
          <div className="flex items-center p-1 bg-slate-800/90 rounded-xl border border-slate-700/80">
            <button
              type="button"
              onClick={() => setViewMode('map')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                viewMode === 'map'
                  ? 'bg-sky-500 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Google Map</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('visual')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                viewMode === 'visual'
                  ? 'bg-sky-500 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Camera className="w-3.5 h-3.5" />
              <span>Place Photo</span>
            </button>
          </div>

          <a
            href={googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
          >
            <Navigation className="w-3.5 h-3.5 text-sky-400" />
            <span className="hidden sm:inline">Directions</span>
          </a>

          <button
            type="button"
            onClick={onOpenWhatsApp}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-sm"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Dispatch</span>
          </button>
        </div>
      </div>

      {/* Horizontal Place Selector Tabs with Clean SVG Icons & Smooth Selection */}
      <div className="bg-slate-950 px-4 sm:px-7 py-3 border-b border-slate-800/80 overflow-x-auto scrollbar-none flex items-center gap-2">
        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0 mr-1 hidden sm:inline">
          Select Area:
        </span>
        {coverageAreasData.map((area) => (
          <button
            key={area.id}
            type="button"
            onClick={() => setSelectedAreaId(area.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all border shrink-0 flex items-center gap-2 ${
              selectedAreaId === area.id
                ? 'bg-sky-600 text-white border-sky-400 shadow-md ring-1 ring-sky-400/40'
                : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
            }`}
          >
            {getZoneIcon(area.imageTheme.iconKey, selectedAreaId === area.id ? "w-3.5 h-3.5 text-white" : "w-3.5 h-3.5 text-sky-400")}
            <span>{area.name.split('&')[0].trim()}</span>
          </button>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[480px]">
        {/* Left Side: Real Google Map or Authentic Place Photo with Smooth Transition */}
        <div className="lg:col-span-8 bg-slate-950 relative min-h-[380px] sm:min-h-[460px] lg:min-h-[520px] overflow-hidden">
          <AnimatePresence mode="wait">
            {viewMode === 'map' ? (
              <motion.div
                key={`map-${selectedArea.id}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="w-full h-full min-h-[380px] sm:min-h-[460px] lg:min-h-[520px] relative"
              >
                {/* 100% Free Official Google Map Embed */}
                <iframe
                  title={`Google Map of ${selectedArea.name}`}
                  src={googleMapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '380px' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full opacity-90 contrast-105"
                />

                {/* Picture-in-Picture Mini Place Photo Preview Button */}
                <div className="absolute top-4 right-4 z-10">
                  <button
                    type="button"
                    onClick={() => setViewMode('visual')}
                    className="group flex items-center gap-2 p-1.5 pr-3 bg-slate-900/90 hover:bg-slate-900 backdrop-blur-md border border-slate-700 rounded-xl text-xs font-semibold text-white shadow-xl transition-all"
                    title="Click to view full photo of this place"
                  >
                    <div className="w-8 h-8 rounded-lg overflow-hidden border border-slate-600 shrink-0 relative bg-slate-800">
                      <img
                        src={selectedArea.imageUrl}
                        alt={selectedArea.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        onError={() => handleImageError(selectedArea.id)}
                      />
                    </div>
                    <div className="text-left leading-tight hidden sm:block">
                      <span className="block text-[10px] text-sky-400 font-bold uppercase">View Photo</span>
                      <span className="block text-[11px] text-slate-200 truncate max-w-[100px]">{selectedArea.name.split('&')[0]}</span>
                    </div>
                  </button>
                </div>

                {/* Floating GPS Info Overlay */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto z-10 bg-slate-900/95 backdrop-blur-md border border-slate-700/80 px-4 py-2.5 rounded-xl text-xs text-slate-300 shadow-xl flex items-center justify-between sm:justify-start gap-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                    <span className="font-bold text-white">{selectedArea.name}</span>
                  </div>
                  <span className="text-slate-500 hidden sm:inline">·</span>
                  <span className="text-sky-400 font-bold">Fast ETA: {selectedArea.eta}</span>
                  <span className="text-slate-500 hidden sm:inline">·</span>
                  <span className="text-emerald-400 font-semibold hidden md:inline">0 RM Travel Surcharge</span>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={`visual-${selectedArea.id}`}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="w-full h-full min-h-[380px] sm:min-h-[460px] lg:min-h-[520px] relative overflow-hidden flex flex-col justify-between p-6 sm:p-10"
              >
                {/* Background Image of the specific place with smooth fade */}
                {!imageErrorMap[selectedArea.id] ? (
                  <motion.img
                    key={`img-${selectedArea.id}`}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    src={selectedArea.imageUrl}
                    alt={selectedArea.imageAlt}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    onError={() => handleImageError(selectedArea.id)}
                  />
                ) : (
                  <div className={`absolute inset-0 bg-gradient-to-br ${selectedArea.imageTheme.gradient}`} />
                )}

                {/* Elegant Multi-stop Gradient Overlays for High Contrast Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/40" />

                {/* Top Overlay Badge */}
                <div className="relative z-10 flex items-center justify-between gap-2">
                  <div className="inline-flex items-center gap-2 bg-slate-900/80 backdrop-blur-md border border-slate-700/80 text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-lg">
                    {getZoneIcon(selectedArea.imageTheme.iconKey, "w-3.5 h-3.5 text-sky-400")}
                    <span>{selectedArea.tagline}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setViewMode('map')}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 hover:bg-slate-900 backdrop-blur-md border border-slate-700 text-xs font-bold text-sky-400 hover:text-sky-300 transition-colors shadow-lg"
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>Switch to Google Map</span>
                  </button>
                </div>

                {/* Bottom Text Details */}
                <div className="relative z-10 space-y-4 max-w-xl">
                  <div>
                    <div className="text-xs font-bold text-sky-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-sky-400" />
                      <span>{selectedArea.imageAlt}</span>
                    </div>
                    <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                      {selectedArea.name}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed drop-shadow-sm">
                    {selectedArea.highlightText}
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs">
                    <div className="bg-slate-900/80 backdrop-blur-md p-3 rounded-xl border border-slate-700/80">
                      <span className="text-slate-400 block text-[11px]">Primary Property Types:</span>
                      <strong className="text-white mt-0.5 block truncate">{selectedArea.typicalProperties}</strong>
                    </div>

                    <div className="bg-slate-900/80 backdrop-blur-md p-3 rounded-xl border border-slate-700/80">
                      <span className="text-slate-400 block text-[11px]">Key Estates Serviced:</span>
                      <strong className="text-sky-300 mt-0.5 block truncate">
                        {selectedArea.landmarks.slice(0, 3).join(', ')}
                      </strong>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Side: Selected Zone Detail & Dispatch Action Card */}
        <div className="lg:col-span-4 bg-slate-900 p-5 sm:p-7 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-800 space-y-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedArea.id}
              initial={{ opacity: 0, x: 6 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -6 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-sky-400 uppercase tracking-wider">
                  Zone Fleet Status
                </span>
                <span className="text-[11px] font-bold text-emerald-300 bg-emerald-500/20 px-2.5 py-0.5 rounded-full border border-emerald-500/40">
                  RM 0 Travel Fee
                </span>
              </div>

              <h4 className="text-xl sm:text-2xl font-extrabold text-white">
                {selectedArea.name}
              </h4>

              {/* Distance & ETA Badges */}
              <div className="grid grid-cols-2 gap-2.5 text-xs">
                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80">
                  <span className="text-slate-400 block text-[11px]">From Tun Jugah Depot:</span>
                  <span className="text-sm font-bold text-white mt-0.5 block">
                    {selectedArea.distanceKm} km
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80">
                  <span className="text-slate-400 block text-[11px]">Fast Dispatch ETA:</span>
                  <span className="text-sm font-bold text-sky-400 mt-0.5 block">
                    {selectedArea.eta}
                  </span>
                </div>
              </div>

              {/* Landmarks */}
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                  Prominent Landmarks & Estates:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedArea.landmarks.map((lm, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] bg-slate-800 text-slate-200 px-2.5 py-0.5 rounded-lg border border-slate-700"
                    >
                      {lm}
                    </span>
                  ))}
                </div>
              </div>

              {/* Local Area HVAC Challenges */}
              <div className="space-y-1.5 pt-1">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Common Climate Factors Here:
                </span>
                <ul className="space-y-1 text-xs text-slate-300">
                  {selectedArea.commonIssues.map((issue, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-sky-400 font-bold">•</span>
                      <span>{issue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="space-y-2.5 pt-4 border-t border-slate-800">
            <button
              type="button"
              onClick={() => onSelectArea(selectedArea.id)}
              className="w-full py-3 px-4 rounded-xl text-xs font-bold text-white bg-sky-600 hover:bg-sky-500 transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <Navigation className="w-4 h-4" />
              <span>Book Priority Dispatch to {selectedArea.name}</span>
            </button>
            <p className="text-[11px] text-slate-400 text-center">
              Active mobile crews: {selectedArea.activeCrews} certified teams assigned to this sector
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
