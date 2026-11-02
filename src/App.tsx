import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { ServicesPricing } from './components/ServicesPricing';
import { BookingForm } from './components/BookingForm';
import { ContactSection } from './components/ContactSection';
import { AftercareFaq } from './components/AftercareFaq';
import { Footer } from './components/Footer';
import { PortfolioItem } from './types';
import { STUDIO_CONFIG } from './data/studioData';
import { MessageCircle, Calendar } from 'lucide-react';

import { MeetTheArtist } from './components/MeetTheArtist';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('');
  const [selectedArtist, setSelectedArtist] = useState<string>('');

  const scrollToBooking = () => {
    const el = document.getElementById('booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const el = document.getElementById('portfolio');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    scrollToBooking();
  };

  const handleBookWithArtist = (artistName: string) => {
    setSelectedArtist(artistName);
    scrollToBooking();
  };

  const handleRequestStyle = (item: PortfolioItem) => {
    setSelectedService(item.title);
    setSelectedArtist(item.artist);
    scrollToBooking();
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200">
      {/* Top Bar Contract Navigation */}
      <Navbar onBookClick={scrollToBooking} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onBookClick={scrollToBooking}
          onPortfolioClick={scrollToPortfolio}
        />

        {/* 2. About Our Studio */}
        <About />

        {/* 3. Meet the Artist (Lead Artist & Founder Vishnu Lal) */}
        <MeetTheArtist
          onBookWithArtist={handleBookWithArtist}
          onViewPortfolio={scrollToPortfolio}
        />

        {/* 4. Artist Portfolio */}
        <Portfolio onRequestStyle={handleRequestStyle} />

        {/* 4. Services, Pricing & Operating Hours Policy */}
        <ServicesPricing onSelectService={handleSelectService} />

        {/* 5. Booking / Consultation Form */}
        <BookingForm
          initialService={selectedService}
          initialArtist={selectedArtist}
        />

        {/* 6. Contact Us & Google Maps Embed */}
        <ContactSection />

        {/* Supplementary: FAQ / Client Prep */}
        <AftercareFaq />
      </main>

      {/* 7. Footer */}
      <Footer />

      {/* Floating Fast Action Strip on Mobile & Desktop */}
      <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2.5">
        <a
          href={`https://wa.me/${STUDIO_CONFIG.whatsappRaw}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Direct WhatsApp Chat"
          className="p-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center border border-emerald-400/50"
          title="WhatsApp 63054 87457"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
        </a>

        <button
          onClick={scrollToBooking}
          aria-label="Quick Consultation Booking"
          className="hidden sm:flex items-center gap-2 px-4 py-3 rounded-full bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold text-xs uppercase tracking-wider shadow-2xl hover:scale-105 active:scale-95 transition-all border border-amber-300/50 cursor-pointer"
        >
          <Calendar className="w-4 h-4" />
          <span>Book ₹500+</span>
        </button>
      </div>
    </div>
  );
}
