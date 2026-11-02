import React from 'react';
import { Calendar, Compass, ShieldCheck, Clock, Sparkles } from 'lucide-react';
import { STUDIO_CONFIG } from '../data/studioData';

interface HeroProps {
  onBookClick: () => void;
  onPortfolioClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onPortfolioClick }) => {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-zinc-950">
      {/* Background Image with Cinematic Dark Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={STUDIO_CONFIG.heroImage}
          alt="Master tattoo artist craft in session at GETINKED TATTOO"
          className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.08] scale-[1.02] transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-zinc-950/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.08),transparent_60%)]" />
      </div>

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Brand & Copy */}
          <div className="lg:col-span-8 flex flex-col items-start space-y-6">
            
            {/* Studio Badge Lockup */}
            <div className="flex items-center gap-3 text-xs tracking-widest uppercase text-amber-400 font-semibold">
              <span className="w-8 h-[1px] bg-amber-400/80" />
              <span>Premier Custom Tattoo & Piercing Studio</span>
              <span className="w-8 h-[1px] bg-amber-400/80" />
            </div>

            {/* Headline */}
            <h1 className="font-['Cinzel'] text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-zinc-100 leading-[1.08] text-balance">
              GETINKED <span className="gold-gradient-text">TATTOO</span>
            </h1>

            {/* Tagline */}
            <p className="text-xl sm:text-2xl text-zinc-200 font-light max-w-2xl leading-relaxed text-balance">
              Where Skin Meets Sacred Craft. Masterful Needlework, Fine-Line Elegance & Lifelong Realism.
            </p>

            <p className="text-sm sm:text-base text-zinc-400 max-w-xl leading-relaxed">
              Crafting bespoke ink starting at an accessible rate of <span className="text-amber-400 font-semibold">₹500</span>, alongside precision body piercings in an uncompromising clinical-grade aseptic environment.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3 w-full sm:w-auto">
              <button
                onClick={onBookClick}
                className="px-7 py-3.5 text-sm font-bold text-zinc-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-lg transition-all shadow-xl shadow-amber-500/20 active:scale-95 flex items-center gap-2.5 uppercase tracking-wider cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-zinc-950" />
                <span>Book a Consultation</span>
              </button>
              
              <button
                onClick={onPortfolioClick}
                className="px-6 py-3.5 text-sm font-semibold text-zinc-200 bg-zinc-900/80 hover:bg-zinc-800 hover:text-white border border-zinc-700/80 rounded-lg transition-all active:scale-95 flex items-center gap-2 cursor-pointer backdrop-blur-sm"
              >
                <Compass className="w-4 h-4 text-amber-400" />
                <span>View Portfolio</span>
              </button>
            </div>

            {/* Quick Micro Status Line */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-zinc-400 pt-2">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>Open Daily: 10:00 AM – 11:00 PM</span>
              </span>
              <span className="text-zinc-600 hidden sm:inline">|</span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>24/7 Availability for Pre-Booked Appointments</span>
              </span>
            </div>
          </div>

          {/* Right Column: Hero Visual Studio Emblem */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative group p-4">
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-700 opacity-80" />
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-b from-amber-500/40 via-zinc-800 to-zinc-950 shadow-2xl border border-amber-500/30 flex items-center justify-center overflow-hidden">
                <img
                  src={STUDIO_CONFIG.logo}
                  alt="GETINKED TATTOO Official Studio Insignia"
                  className="w-full h-full object-cover rounded-full transform group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Trust Metrics Bar: Full-width row placed cleanly below the split */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-xl bg-zinc-900/80 border border-zinc-800/80 backdrop-blur-md">
          <div className="flex flex-col space-y-1">
            <span className="text-xs uppercase tracking-wider text-zinc-400">Starting Price</span>
            <span className="text-xl sm:text-2xl font-bold font-['Cinzel'] text-amber-400 tabular-nums">From ₹500</span>
            <span className="text-xs text-zinc-400">Accessible custom tattoo rate</span>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="text-xs uppercase tracking-wider text-zinc-400">Operating Hours</span>
            <span className="text-xl sm:text-2xl font-bold font-['Cinzel'] text-zinc-100 tabular-nums">10 AM – 11 PM</span>
            <span className="text-xs text-zinc-400">Daily incl. Sundays</span>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="text-xs uppercase tracking-wider text-zinc-400">Flexible Scheduling</span>
            <span className="text-xl sm:text-2xl font-bold font-['Cinzel'] text-zinc-100">24/7 Access</span>
            <span className="text-xs text-zinc-400">Pre-booked VIP appointments</span>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="text-xs uppercase tracking-wider text-zinc-400">Clinical Safety</span>
            <span className="text-xl sm:text-2xl font-bold font-['Cinzel'] text-emerald-400 flex items-center gap-1.5">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              100% Sterile
            </span>
            <span className="text-xs text-zinc-400">Hospital autoclave & EO needles</span>
          </div>
        </div>
      </div>
    </section>
  );
};
