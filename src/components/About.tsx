import React from 'react';
import { ShieldCheck, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { ARTISTS, SAFETY_STANDARDS, STUDIO_CONFIG } from '../data/studioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-zinc-950 relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-amber-400 font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Mastery · Craft · Sanctuary</span>
          </div>
          <h2 className="font-['Cinzel'] text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-100 tracking-tight text-balance">
            The Philosophy of <span className="gold-gradient-text">GETINKED</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed text-balance">
            We believe your body is a sacred canvas. Founded on artistic precision, anatomical harmony, and uncompromising clinical hygiene, our studio transforms personal memories, spiritual symbolism, and contemporary aesthetics into enduring, museum-quality ink.
          </p>
        </div>

        {/* Studio Atmosphere & Studio Sanctuary Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20">
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 relative shadow-2xl group">
            <img
              src={STUDIO_CONFIG.interiorImage}
              alt="GETINKED TATTOO sterile studio workstation and ergonomic leather client chair"
              className="w-full h-[360px] sm:h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-zinc-300">
              <span className="font-semibold text-zinc-100">Private Ergonomic Stations & Aseptic Setup</span>
              <span className="text-amber-400 font-medium">Certified Hygiene Environment</span>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold">Custom Artistry</span>
              <h3 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold text-zinc-100">
                Beyond Flash Art: Individual Anatomy in Focus
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                No two bodies are identical. Every stroke, needle depth, and curve is calculated to follow your natural muscle flow and skin elasticity. Whether you seek an intimate ₹500 initial symbol or a multi-session realistic sleeve, our artists dedicate time to consult, stencil, and execute with flawless precision.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                <Award className="w-5 h-5 text-amber-400 mb-2" />
                <h4 className="text-sm font-semibold text-zinc-100">Award-Winning Craft</h4>
                <p className="text-xs text-zinc-400 mt-1">Recognized for smooth grey wash gradients and razor-thin linework.</p>
              </div>
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                <ShieldCheck className="w-5 h-5 text-emerald-400 mb-2" />
                <h4 className="text-sm font-semibold text-zinc-100">Hospital Standards</h4>
                <p className="text-xs text-zinc-400 mt-1">Ultrasonic cleaning, autoclaves, and fresh EO cartridges.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Direct Link to Meet the Artist */}
        <div className="mb-20 p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold">Leadership & Artistry</span>
            <h3 className="font-['Cinzel'] text-2xl font-bold text-zinc-100">
              Guided by Lead Tattoo Artist & Founder Vishnu Lal
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl">
              Over 7+ years of dedicated needle mastery, hospital-grade sterilization protocols, and award-winning custom body art.
            </p>
          </div>
          <a
            href="#artist"
            className="px-6 py-3 text-xs font-bold text-zinc-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all uppercase tracking-wider whitespace-nowrap shrink-0 shadow-md"
          >
            Meet the Artist & Credentials →
          </a>
        </div>

        {/* Safety Standards Grid */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-b from-zinc-900/90 to-zinc-950 border border-zinc-800">
          <div className="max-w-2xl mb-8">
            <span className="text-xs uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Clinical Bio-Safety Guarantee
            </span>
            <h3 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold text-zinc-100 mt-2">
              Uncompromising Hygiene & Safety Protocols
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2">
              Your health and peace of mind are non-negotiable. We maintain clinical aseptic hygiene protocols benchmarked against international tattoo associations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SAFETY_STANDARDS.map((std) => (
              <div key={std.title} className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <h4 className="text-sm font-semibold text-zinc-100">{std.title}</h4>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed pl-6">{std.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
