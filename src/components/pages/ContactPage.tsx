import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, ShieldCheck, Send, CheckCircle2 } from 'lucide-react';
import { coverageAreasData } from '../../data/areas';
import { GoogleMapSection } from '../common/GoogleMapSection';

interface ContactPageProps {
  onOpenBooking: () => void;
  onOpenWhatsApp: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenBooking, onOpenWhatsApp }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [area, setArea] = useState('Kuching Central');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setIsSent(true);
  };

  const handleLaunchWhatsApp = () => {
    const text = `Hi Kuching Aircond Pro, my name is ${name}.
Location: ${area}
Phone: ${phone}
Inquiry: ${message || 'I need help with my air conditioning unit.'}`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/60189728411?text=${encoded}`, '_blank');
  };

  return (
    <div className="py-12 sm:py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-sky-700 uppercase tracking-widest mb-2">
            <span>Direct Communication</span>
            <span aria-hidden="true">·</span>
            <span>Fast 5-Min WhatsApp Response</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Contact & Emergency Dispatch
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Need an urgent technician for a water-dripping unit, or planning a multi-unit overhaul? Reach our dispatch office directly.
          </p>
        </div>

        {/* 2-Column: Contact Details & Dispatch Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
              <h2 className="text-lg font-bold text-slate-900">
                Operating Depot & Hotlines
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Jalan Tun Jugah Dispatch Depot:</strong>
                    <span>Lot 284, Ground Floor, Jalan Tun Jugah, 93350 Kuching, Sarawak</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Phone & WhatsApp Hotline:</strong>
                    <span>+60 18-972 8411 (Immediate dispatch)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Operating Hours:</strong>
                    <span>Monday – Saturday: 8:00 AM – 6:30 PM</span>
                    <span className="block text-slate-500">Sunday & Public Holidays: 9:00 AM – 4:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={onOpenWhatsApp}
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp (+60 18-972 8411)</span>
                </button>

                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors"
                >
                  Schedule Appointment Online
                </button>
              </div>
            </div>

            {/* Emergency Hotline Box */}
            <div className="bg-rose-50 border border-rose-200 rounded-2xl p-6 text-xs text-rose-900 space-y-2">
              <div className="font-bold flex items-center gap-2 text-rose-800">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-600 animate-pulse"></span>
                <span>Active Water Dripping Emergency?</span>
              </div>
              <p className="text-rose-700 leading-relaxed">
                If water is leaking onto your mattress, TV, or server rack, message our emergency dispatch hotline immediately. We prioritize active water leaks within 2 hours.
              </p>
            </div>
          </div>

          {/* Right Column: Direct Dispatch Inbound Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            {!isSent ? (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <h2 className="text-lg font-bold text-slate-900 mb-2">
                  Send a Quick Service Request
                </h2>
                <p className="text-slate-500 mb-4">
                  Fill in your details below and our coordinator will respond via WhatsApp or call within 5 minutes.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Dayang Nurul / Kelvin Tan"
                      className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">WhatsApp Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 018-972 8411"
                      className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Area / Neighborhood in Sarawak</label>
                  <select
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  >
                    {coverageAreasData.map((a) => (
                      <option key={a.id} value={a.name}>{a.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Tell Us About the Issue / Service Needed</label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="e.g. 2 units chemical wash in Tabuan Tranquility, or aircond in living room blowing warm air..."
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-md"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Service Ticket</span>
                  </button>
                </div>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Ticket Received, {name}!
                </h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                  Our dispatch supervisor has logged your request for <strong className="text-slate-800">{area}</strong>.
                </p>
                <div className="pt-3">
                  <button
                    type="button"
                    onClick={handleLaunchWhatsApp}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Chat Directly on WhatsApp Now</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Google Map Depot Location */}
        <GoogleMapSection
          onSelectArea={(areaId) => {
            onOpenBooking();
          }}
          onOpenWhatsApp={onOpenWhatsApp}
        />
      </div>
    </div>
  );
};
