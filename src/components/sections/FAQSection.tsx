import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck, Phone } from 'lucide-react';
import { faqsData } from '../../data/faqs';

interface FAQSectionProps {
  onOpenWhatsApp: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenWhatsApp }) => {
  const [openId, setOpenId] = useState<string>('faq-1');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? '' : id);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-sky-700 tracking-wider uppercase mb-2">
            <span>Direct Answers</span>
            <span aria-hidden="true">·</span>
            <span>Zero Fluff</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Everything you need to know about air conditioner maintenance in Sarawak’s equatorial climate.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-3.5">
          {faqsData.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? 'border-sky-500 bg-sky-50/20 shadow-sm'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full py-4.5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-bold text-slate-900 leading-snug">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180 text-sky-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Have more questions CTA */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-slate-50 border border-slate-200">
          <h4 className="text-sm font-bold text-slate-900">
            Have a unique aircond problem or commercial project?
          </h4>
          <p className="text-xs text-slate-500 mt-1 mb-4">
            Our engineering team is ready to answer questions directly on WhatsApp with zero sales pressure.
          </p>
          <button
            type="button"
            onClick={onOpenWhatsApp}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-colors shadow-sm"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Ask a Technician on WhatsApp</span>
          </button>
        </div>
      </div>
    </section>
  );
};
