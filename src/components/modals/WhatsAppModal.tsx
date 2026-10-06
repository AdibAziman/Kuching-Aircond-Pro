import React, { useState } from 'react';
import { X, MessageSquare, AlertCircle, Sparkles, Building, Send } from 'lucide-react';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  customInitialMessage?: string;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({
  isOpen,
  onClose,
  customInitialMessage
}) => {
  const [selectedTemplate, setSelectedTemplate] = useState<number>(0);
  const [userLocation, setUserLocation] = useState<string>('Kuching Central');
  const [userUnits, setUserUnits] = useState<string>('2 Units');

  if (!isOpen) return null;

  const templates = [
    {
      title: 'Urgent Water Leak / Breakdown',
      desc: 'Unit dripping water or warm air blowing',
      text: (loc: string, units: string) =>
        `Hi Kuching Aircond Pro, I have an urgent issue! My aircond is leaking water / blowing warm air at ${loc}. I need a technician dispatched as soon as possible today. Please assist!`
    },
    {
      title: 'Chemical Wash / Overhaul Booking',
      desc: 'Standard residential cooling restoration',
      text: (loc: string, units: string) =>
        `Hi Kuching Aircond Pro, I would like to book a Chemical Wash for ${units} at my house in ${loc}. Please let me know your available slots for this week and confirm the total price.`
    },
    {
      title: 'Commercial Office / F&B Kopitiam Inquiry',
      desc: 'Ceiling cassette & preventive maintenance',
      text: (loc: string, units: string) =>
        `Hi Kuching Aircond Pro, I am managing a commercial shop / office located in ${loc}. We need servicing for our ceiling cassette units with an official SST corporate invoice. Please send your rates.`
    }
  ];

  const currentTemplate = templates[selectedTemplate];
  const messageToSend = customInitialMessage || currentTemplate.text(userLocation, userUnits);

  const handleLaunchWhatsApp = () => {
    const encoded = encodeURIComponent(messageToSend);
    window.open(`https://wa.me/60189728411?text=${encoded}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-200">
        {/* Header */}
        <div className="bg-emerald-700 text-white px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                Direct WhatsApp Dispatch
              </h3>
              <p className="text-xs text-emerald-100">
                Average reply time: under 5 minutes
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-emerald-200 hover:text-white hover:bg-emerald-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-5 text-xs max-h-[80vh] overflow-y-auto">
          {!customInitialMessage && (
            <>
              <div>
                <label className="block font-bold text-slate-800 uppercase tracking-wider mb-2">
                  Select Inquiry Type:
                </label>
                <div className="space-y-2">
                  {templates.map((tmpl, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedTemplate(idx)}
                      className={`w-full p-3 rounded-xl border text-left transition-all ${
                        selectedTemplate === idx
                          ? 'border-emerald-600 bg-emerald-50/60 ring-2 ring-emerald-600/20'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div className="font-bold text-slate-900">{tmpl.title}</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">{tmpl.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick parameters */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">
                    Your Location:
                  </label>
                  <select
                    value={userLocation}
                    onChange={(e) => setUserLocation(e.target.value)}
                    className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 font-medium focus:outline-none"
                  >
                    <option value="Kuching Central">Kuching Central</option>
                    <option value="Tabuan Tranquility">Tabuan Tranquility</option>
                    <option value="Kota Samarahan">Kota Samarahan</option>
                    <option value="Batu Kawa / MJC">Batu Kawa / MJC</option>
                    <option value="Petra Jaya">Petra Jaya</option>
                    <option value="Matang / MetroCity">Matang / MetroCity</option>
                    <option value="Stampin / Gala City">Stampin / Gala City</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">
                    Units Count:
                  </label>
                  <select
                    value={userUnits}
                    onChange={(e) => setUserUnits(e.target.value)}
                    className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 font-medium focus:outline-none"
                  >
                    <option value="1 Unit">1 Unit</option>
                    <option value="2 Units">2 Units</option>
                    <option value="3 Units">3 Units (Multi-discount)</option>
                    <option value="4+ Units">4+ Units (Multi-discount)</option>
                  </select>
                </div>
              </div>
            </>
          )}

          {/* Message Preview */}
          <div>
            <label className="block font-bold text-slate-700 uppercase mb-1">
              Message to be Sent:
            </label>
            <div className="p-3.5 bg-slate-100 rounded-xl border border-slate-200 font-mono text-[11px] text-slate-800 whitespace-pre-wrap leading-relaxed">
              {messageToSend}
            </div>
          </div>

          {/* Launch Button */}
          <button
            type="button"
            onClick={handleLaunchWhatsApp}
            className="w-full py-3.5 px-4 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 flex items-center justify-center gap-2 shadow-md transition-all"
          >
            <Send className="w-4 h-4" />
            <span>Open WhatsApp Chat (+60 18-972 8411)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
