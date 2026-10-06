import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { TrustBar } from './components/sections/TrustBar';
import { Services } from './components/sections/Services';
import { Calculator } from './components/sections/Calculator';
import { BeforeAfter } from './components/sections/BeforeAfter';
import { ServiceAreas } from './components/sections/ServiceAreas';
import { Technicians } from './components/sections/Technicians';
import { Reviews } from './components/sections/Reviews';
import { FAQSection } from './components/sections/FAQSection';
import { GoogleMapSection } from './components/common/GoogleMapSection';
import { ServicesPage } from './components/pages/ServicesPage';
import { AreasPage } from './components/pages/AreasPage';
import { AboutPage } from './components/pages/AboutPage';
import { ContactPage } from './components/pages/ContactPage';
import { BookingModal } from './components/modals/BookingModal';
import { WhatsAppModal } from './components/modals/WhatsAppModal';
import { PageView } from './types';
import { MessageSquare, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
  const [whatsAppCustomMessage, setWhatsAppCustomMessage] = useState<string | undefined>(undefined);

  // Booking modal initial pre-fills
  const [bookingPrefill, setBookingPrefill] = useState<{
    serviceId?: string;
    horsepower?: string;
    units?: number;
    areaId?: string;
  }>({});

  const handleOpenBooking = () => {
    setBookingPrefill({});
    setIsBookingOpen(true);
  };

  const handleSelectServiceForBooking = (serviceId: string) => {
    setBookingPrefill({ serviceId });
    setIsBookingOpen(true);
  };

  const handleSelectAreaForBooking = (areaId: string) => {
    setBookingPrefill({ areaId });
    setIsBookingOpen(true);
  };

  const handleOpenBookingWithDetails = (details: {
    serviceId: string;
    horsepower: string;
    units: number;
    areaId: string;
    totalRM: number;
  }) => {
    setBookingPrefill(details);
    setIsBookingOpen(true);
  };

  const handleOpenWhatsApp = () => {
    setWhatsAppCustomMessage(undefined);
    setIsWhatsAppOpen(true);
  };

  const handleOpenWhatsAppWithMessage = (message: string) => {
    setWhatsAppCustomMessage(message);
    setIsWhatsAppOpen(true);
  };

  const handleOpenWhatsAppForService = (serviceName: string) => {
    setWhatsAppCustomMessage(`Hi Kuching Aircond Pro, I want to inquire about: ${serviceName}. Please advise on available schedule slots and pricing.`);
    setIsWhatsAppOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-sky-600 selection:text-white pb-20 sm:pb-0 overflow-x-hidden">
      {/* Primary Clean Top Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        onOpenBooking={handleOpenBooking}
        onOpenWhatsApp={handleOpenWhatsApp}
      />

      {/* Main View Router */}
      <main className="flex-1 w-full">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18 }}
              className="w-full"
            >
              {/* Flagship Home View */}
              <Hero
                onOpenBooking={handleOpenBooking}
                onOpenWhatsApp={handleOpenWhatsApp}
              />

              <TrustBar />

              <Services
                onSelectService={handleSelectServiceForBooking}
                onOpenBooking={handleOpenBooking}
              />

              <Calculator
                onOpenBookingWithDetails={handleOpenBookingWithDetails}
                onOpenWhatsAppWithMessage={handleOpenWhatsAppWithMessage}
              />

              <BeforeAfter />

              {/* Integrated Google Maps Section on Home */}
              <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
                  <div className="text-center max-w-3xl mx-auto">
                    <div className="flex items-center justify-center gap-2 text-xs font-bold text-sky-700 tracking-wider uppercase mb-2">
                      <span>Live Fleet Radar</span>
                      <span aria-hidden="true">·</span>
                      <span>Jalan Tun Jugah Central Depot</span>
                    </div>
                    <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                      Greater Kuching Service Radar & Coverage
                    </h2>
                    <p className="mt-2 text-xs sm:text-base text-slate-600">
                      Explore our 6 service zones, live dispatch response times, and exact mileage from our central depot.
                    </p>
                  </div>

                  <GoogleMapSection
                    onSelectArea={handleSelectAreaForBooking}
                    onOpenWhatsApp={handleOpenWhatsApp}
                  />
                </div>
              </section>

              <Technicians />

              <Reviews />

              <FAQSection
                onOpenWhatsApp={handleOpenWhatsApp}
              />
            </motion.div>
          )}

          {currentPage === 'services' && (
            <motion.div
              key="services"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18 }}
              className="w-full"
            >
              <ServicesPage
                onOpenBookingForService={handleSelectServiceForBooking}
                onOpenWhatsAppForService={handleOpenWhatsAppForService}
              />
            </motion.div>
          )}

          {currentPage === 'calculator' && (
            <motion.div
              key="calculator"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18 }}
              className="w-full"
            >
              <Calculator
                onOpenBookingWithDetails={handleOpenBookingWithDetails}
                onOpenWhatsAppWithMessage={handleOpenWhatsAppWithMessage}
              />
            </motion.div>
          )}

          {currentPage === 'areas' && (
            <motion.div
              key="areas"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18 }}
              className="w-full"
            >
              <AreasPage
                onSelectAreaForBooking={handleSelectAreaForBooking}
                onOpenWhatsApp={handleOpenWhatsApp}
              />
            </motion.div>
          )}

          {currentPage === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18 }}
              className="w-full"
            >
              <AboutPage
                onOpenBooking={handleOpenBooking}
                onOpenWhatsApp={handleOpenWhatsApp}
              />
            </motion.div>
          )}

          {currentPage === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18 }}
              className="w-full"
            >
              <ContactPage
                onOpenBooking={handleOpenBooking}
                onOpenWhatsApp={handleOpenWhatsApp}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Quiet Corporate Footer */}
      <Footer
        onNavigate={setCurrentPage}
        onOpenBooking={handleOpenBooking}
        onOpenWhatsApp={handleOpenWhatsApp}
      />

      {/* Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialServiceId={bookingPrefill.serviceId}
        initialHp={bookingPrefill.horsepower}
        initialUnits={bookingPrefill.units}
        initialAreaId={bookingPrefill.areaId}
      />

      <WhatsAppModal
        isOpen={isWhatsAppOpen}
        onClose={() => setIsWhatsAppOpen(false)}
        customInitialMessage={whatsAppCustomMessage}
      />

      {/* Mobile Sticky Quick Action Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 flex items-center justify-between gap-2.5 shadow-lg">
        <button
          type="button"
          onClick={handleOpenWhatsApp}
          className="flex-1 py-2 px-3 rounded-lg text-xs font-bold text-emerald-900 bg-emerald-50 border border-emerald-300 flex items-center justify-center gap-1.5 active:bg-emerald-100 transition-colors"
        >
          <MessageSquare className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span className="truncate">WhatsApp</span>
        </button>

        <button
          type="button"
          onClick={handleOpenBooking}
          className="flex-1 py-2 px-3 rounded-lg text-xs font-bold text-white bg-slate-900 flex items-center justify-center gap-1.5 shadow-sm active:bg-slate-800 transition-colors"
        >
          <Calendar className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">Book Dispatch</span>
        </button>
      </div>
    </div>
  );
}
