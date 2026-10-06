import React, { useState } from 'react';
import { Phone, Calendar, Menu, X, MessageSquare, Wind } from 'lucide-react';
import { PageView } from '../../types';

interface NavbarProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
  onOpenBooking: () => void;
  onOpenWhatsApp: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenBooking,
  onOpenWhatsApp
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageView; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'calculator', label: 'Pricing Calculator' },
    { id: 'areas', label: 'Coverage' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (page: PageView) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Zone 1: Single clean text wordmark */}
          <div className="flex items-center">
            <button
              type="button"
              onClick={() => handleNavClick('home')}
              className="group flex items-center gap-2.5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-lg py-1"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-slate-900 flex items-center justify-center text-sky-400 font-extrabold text-base sm:text-lg shadow-sm">
                <Wind className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400" />
              </div>
              <span className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-sky-600 transition-colors whitespace-nowrap">
                Kuching Aircond Pro
              </span>
            </button>
          </div>

          {/* Zone 2: Clean 4-6 text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`py-1 transition-colors whitespace-nowrap relative ${
                  currentPage === item.id
                    ? 'text-slate-900 font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {item.label}
                {currentPage === item.id && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-sky-600 rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Zone 3: Primary Action controls */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenWhatsApp}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-800 hover:text-emerald-950 transition-colors whitespace-nowrap"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>WhatsApp: 018-972 8411</span>
            </button>
            <button
              type="button"
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-sm transition-all whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Service</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 -mr-2 text-slate-700 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-lg"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-1 text-sm font-medium text-slate-700">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`py-2.5 px-3 rounded-lg text-left transition-colors ${
                  currentPage === item.id
                    ? 'font-bold text-sky-700 bg-sky-50'
                    : 'hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2.5 text-center text-xs font-bold text-white bg-slate-900 rounded-lg shadow-sm"
            >
              Book Service Slot Now
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWhatsApp();
              }}
              className="w-full py-2.5 text-center text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center justify-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp Dispatch (+60 18-972 8411)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
