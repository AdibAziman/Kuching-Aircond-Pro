import React from 'react';
import { Award, ShieldCheck, CheckCircle2, Star, UserCheck } from 'lucide-react';
import { techniciansData } from '../../data/technicians';

export const Technicians: React.FC = () => {
  return (
    <section id="technicians" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-sky-700 tracking-wider uppercase mb-2">
            <span>Verified Credentials</span>
            <span aria-hidden="true">·</span>
            <span>Zero Freelancers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Meet Our 8 Certified HVAC Technicians
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Every technician entering your home is an insured, full-time staff member accredited by CIDB Sarawak and the Department of Environment (DOE).
          </p>
        </div>

        {/* 8 Technicians Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techniciansData.map((tech) => (
            <div
              key={tech.id}
              className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Avatar and Credentials */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tech.accentColor} text-white flex items-center justify-center font-bold text-base shadow-sm shrink-0`}>
                    {tech.avatarInitials}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 leading-tight">
                      {tech.name}
                    </h3>
                    <div className="text-[11px] text-sky-700 font-semibold mt-0.5">
                      {tech.role}
                    </div>
                  </div>
                </div>

                {/* Badges */}
                <div className="space-y-1.5 py-3 border-y border-slate-100 text-xs mb-3">
                  <div className="flex items-center justify-between text-slate-600">
                    <span className="text-[11px] text-slate-500">CIDB Number:</span>
                    <span className="font-mono font-semibold text-slate-900 text-[11px]">{tech.cidbReg}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-600">
                    <span className="text-[11px] text-slate-500">Qualifications:</span>
                    <span className="font-semibold text-slate-800 text-[11px] text-right">{tech.wiremanGrade}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-600">
                    <span className="text-[11px] text-slate-500">Field Exp:</span>
                    <span className="font-semibold text-slate-900 text-[11px]">{tech.yearsExp} Years</span>
                  </div>
                </div>

                {/* Specialty */}
                <div className="text-xs text-slate-600 mb-4">
                  <span className="text-[11px] font-bold text-slate-900 block mb-0.5 uppercase tracking-wide">
                    Core Specialization:
                  </span>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    {tech.specialty}
                  </p>
                </div>
              </div>

              {/* Verified status & completed jobs */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                  <UserCheck className="w-3.5 h-3.5" />
                  <span>Verified Staff</span>
                </span>
                <span className="text-slate-500">
                  {tech.completedJobs.toLocaleString()} jobs completed
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
