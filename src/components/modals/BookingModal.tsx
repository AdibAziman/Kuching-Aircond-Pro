import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Calendar, Clock, MapPin, Send, MessageSquare } from 'lucide-react';
import { servicesData } from '../../data/services';
import { coverageAreasData } from '../../data/areas';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
  initialHp?: string;
  initialUnits?: number;
  initialAreaId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialServiceId,
  initialHp = '1.0',
  initialUnits = 2,
  initialAreaId
}) => {
  const [serviceId, setServiceId] = useState<string>(initialServiceId || 'chemical-wash');
  const [horsepower, setHorsepower] = useState<string>(initialHp);
  const [units, setUnits] = useState<number>(initialUnits);
  const [areaId, setAreaId] = useState<string>(initialAreaId || 'kuching-central');
  const [customerName, setCustomerName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [preferredDate, setPreferredDate] = useState<string>('');
  const [timeSlot, setTimeSlot] = useState<string>('09:00 AM - 12:00 PM');
  const [notes, setNotes] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [jobReference, setJobReference] = useState<string>('');

  if (!isOpen) return null;

  const selectedService = servicesData.find(s => s.id === serviceId) || servicesData[1];
  const selectedArea = coverageAreasData.find(a => a.id === areaId) || coverageAreasData[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !phone) return;

    const ref = `KAP-${Math.floor(1000 + Math.random() * 9000)}`;
    setJobReference(ref);
    setIsSubmitted(true);
  };

  const handleSendToWhatsApp = () => {
    const text = `Hi Kuching Aircond Pro (Booking Ref: #${jobReference}):
• Customer Name: ${customerName}
• WhatsApp Contact: ${phone}
• Service: ${selectedService.name} (${horsepower} HP, ${units} units)
• Area: ${selectedArea.name}
• Address: ${address || 'To be shared in chat'}
• Preferred Slot: ${preferredDate || 'Earliest available'} (${timeSlot})
${notes ? `• Special Notes: ${notes}\n` : ''}
Please confirm schedule. Thank you!`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/60189728411?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-xl w-full overflow-hidden border border-slate-200">
        {/* Header */}
        <div className="bg-slate-900 text-white px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified Dispatch Scheduling</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white mt-0.5">
              Book Certified Aircond Service
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto text-xs">
            {/* Quick banner */}
            <div className="p-3 bg-sky-50 rounded-xl border border-sky-100 flex items-center justify-between">
              <span className="font-semibold text-sky-900">
                RM0 Travel Surcharge · 30-Day Warranty Guaranteed
              </span>
              <span className="text-slate-500 text-[11px]">Pay After Completion</span>
            </div>

            {/* Service & HP row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-bold text-slate-700 uppercase tracking-wide mb-1">
                  Service Type
                </label>
                <select
                  value={serviceId}
                  onChange={(e) => setServiceId(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 font-medium focus:ring-2 focus:ring-sky-500 focus:outline-none"
                >
                  {servicesData.map(s => (
                    <option key={s.id} value={s.id}>{s.name} ({s.priceDisplay})</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase tracking-wide mb-1">
                  Horsepower & Units
                </label>
                <div className="flex gap-2">
                  <select
                    value={horsepower}
                    onChange={(e) => setHorsepower(e.target.value)}
                    className="w-1/2 px-2.5 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 font-medium focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  >
                    <option value="1.0">1.0 HP</option>
                    <option value="1.5">1.5 HP</option>
                    <option value="2.0">2.0 HP</option>
                    <option value="2.5">2.5 HP</option>
                    <option value="3.0">3.0 HP (Cassette)</option>
                  </select>
                  <select
                    value={units}
                    onChange={(e) => setUnits(Number(e.target.value))}
                    className="w-1/2 px-2.5 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 font-medium focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                      <option key={n} value={n}>{n} {n === 1 ? 'Unit' : 'Units'}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Customer Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-bold text-slate-700 uppercase tracking-wide mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="e.g. Dayang Nurul / Kelvin Tan"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 font-medium focus:ring-2 focus:ring-sky-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase tracking-wide mb-1">
                  WhatsApp Contact Number *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 018-972 8411"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 font-medium focus:ring-2 focus:ring-sky-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Location & Address */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-bold text-slate-700 uppercase tracking-wide mb-1">
                  Service Area
                </label>
                <select
                  value={areaId}
                  onChange={(e) => setAreaId(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 font-medium focus:ring-2 focus:ring-sky-500 focus:outline-none"
                >
                  {coverageAreasData.map(a => (
                    <option key={a.id} value={a.id}>{a.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase tracking-wide mb-1">
                  House / Unit / Road Address
                </label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="e.g. Lorong 4, Tabuan Tranquility"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 font-medium focus:ring-2 focus:ring-sky-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-bold text-slate-700 uppercase tracking-wide mb-1">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 font-medium focus:ring-2 focus:ring-sky-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase tracking-wide mb-1">
                  Preferred Time Slot
                </label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 font-medium focus:ring-2 focus:ring-sky-500 focus:outline-none"
                >
                  <option value="09:00 AM - 12:00 PM">Morning (09:00 AM - 12:00 PM)</option>
                  <option value="01:00 PM - 03:30 PM">Early Afternoon (01:00 PM - 03:30 PM)</option>
                  <option value="03:30 PM - 06:00 PM">Late Afternoon (03:30 PM - 06:00 PM)</option>
                  <option value="Emergency (Fastest Available)">Emergency (Fastest Available Today)</option>
                </select>
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block font-bold text-slate-700 uppercase tracking-wide mb-1">
                Symptoms / Special Requests (Optional)
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="e.g. Unit leaking water on master bed, or bad mold smell when turned on..."
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 font-medium focus:ring-2 focus:ring-sky-500 focus:outline-none"
              />
            </div>

            {/* Submit CTA */}
            <div className="pt-3">
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <span>Confirm & Generate Job Reference</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        ) : (
          /* Confirmation Screen */
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div>
              <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                Booking Request Generated
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 mt-1">
                Reference #{jobReference}
              </h3>
              <p className="text-xs text-slate-600 mt-2 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-slate-800">{customerName}</strong>. Your service appointment for <strong className="text-slate-800">{selectedService.name}</strong> ({units} units) in <strong className="text-slate-800">{selectedArea.name}</strong> has been logged.
              </p>
            </div>

            {/* Next Steps */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs space-y-2">
              <div className="font-bold text-slate-900">Next Step: Instant WhatsApp Confirmation</div>
              <p className="text-slate-600 leading-relaxed">
                Click below to send this reference ticket to our Kuching dispatch desk on WhatsApp. Our supervisor will verify your exact timeslot in under 5 minutes.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="button"
                onClick={handleSendToWhatsApp}
                className="flex-1 py-3 px-4 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Verify on WhatsApp Now</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="py-3 px-4 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                Done / Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
