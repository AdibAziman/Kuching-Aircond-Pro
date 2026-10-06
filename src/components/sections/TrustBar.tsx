import React from 'react';
import { ShieldAlert, ShieldCheck, Award, MapPin, Gauge } from 'lucide-react';

export const TrustBar: React.FC = () => {
  return (
    <section className="bg-slate-900 text-white py-12 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Pillar 1 */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
              <Gauge className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white mb-1">
                Zero Gas Refill Scams
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Technicians test pressure via digital manifold gauge right before your eyes. If PSI is factory spec, you pay RM0.
              </p>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white mb-1">
                30-Day Workmanship Warranty
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                If your unit leaks water or loses cooling within 30 days of servicing, we return within 24 hours at zero charge.
              </p>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white mb-1">
                8 CIDB Certified Technicians
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                No unverified daily workers. Full-time team holding CIDB Green Cards and DOE Refrigerant Handling accreditation.
              </p>
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white mb-1">
                RM0 Samarahan & Batu Kawa Fee
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We reject out-of-town gouging. Kota Samarahan, Batu Kawa, Petra Jaya, and Matang pay the exact same standard rate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
