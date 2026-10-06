import React from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, CheckCircle2, Wind } from 'lucide-react';
import { PageView } from '../../types';

interface FooterProps {
  onNavigate: (page: PageView) => void;
  onOpenBooking: () => void;
  onOpenWhatsApp: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenBooking,
  onOpenWhatsApp
}) => {
  const handleNav = (page: PageView) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand & Credentials */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold text-base">
                <Wind className="w-4 h-4 text-sky-400" />
              </div>
              <span className="text-lg font-extrabold text-white tracking-tight">
                Kuching Aircond Pro
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Certified HVAC engineering and chemical restoration specialists serving Kuching, Kota Samarahan, Batu Kawa, and Petra Jaya since 2018.
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <div>SSM Reg: 201803129481 (Kuching Aircond Pro Ent.)</div>
              <div>Sarawak Trade License: SA-0482910-X</div>
              <div>CIDB Registered Contractor & DOE Certified</div>
            </div>
          </div>

          {/* Col 2: Core Services */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  General Servicing & Filter Rinse (RM60)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  In-Situ Chemical Wash (RM130)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Full Chemical Overhaul & Soak (RM180)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  R32 / R410A / R22 Refrigerant Diagnostics
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Inverter Split Unit Installation (RM220)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('services')}
                  className="hover:text-white transition-colors text-left"
                >
                  Commercial Ceiling Cassette Maintenance
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Coverage Areas */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Coverage Zones (RM0 Surcharge)
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('areas')}
                  className="hover:text-white transition-colors text-left"
                >
                  Kuching Central & Tabuan Tranquility
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('areas')}
                  className="hover:text-white transition-colors text-left"
                >
                  Kota Samarahan (Uni-Garden, Riveria)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('areas')}
                  className="hover:text-white transition-colors text-left"
                >
                  Batu Kawa & MJC New Township
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('areas')}
                  className="hover:text-white transition-colors text-left"
                >
                  Petra Jaya & Semariang
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('areas')}
                  className="hover:text-white transition-colors text-left"
                >
                  Matang & MetroCity Square
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('areas')}
                  className="hover:text-white transition-colors text-left"
                >
                  Stampin, BDC & Gala City
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Operations */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Operating Depot
            </h4>
            <div className="flex items-start gap-2.5 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
              <span>Lot 284, Ground Floor, Jalan Tun Jugah, 93350 Kuching, Sarawak</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-400">
              <Phone className="w-4 h-4 text-sky-400 shrink-0" />
              <span>+60 18-972 8411 (WhatsApp / Call)</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-400">
              <Clock className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Mon – Sat: 8:00 AM – 6:30 PM | Sun: 9:00 AM – 4:00 PM</span>
            </div>
            <div className="pt-3">
              <button
                type="button"
                onClick={onOpenWhatsApp}
                className="w-full py-2 px-3 text-xs font-semibold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors text-center"
              >
                Direct WhatsApp Dispatch
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} Kuching Aircond Pro. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              30-Day Workmanship Warranty Included
            </span>
            <span className="text-slate-600">·</span>
            <span>CIDB Certified Crew</span>
            <span className="text-slate-600">·</span>
            <span>S Pay Global & DuitNow Accepted</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
