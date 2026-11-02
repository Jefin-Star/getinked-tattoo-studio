import React from 'react';
import { Phone, Mail, Instagram, MapPin, ArrowUp } from 'lucide-react';
import { STUDIO_CONFIG } from '../data/studioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-zinc-800/80">
          
          {/* Col 1: Brand & Logo */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-amber-500/40 p-0.5 bg-zinc-900">
                <img
                  src={STUDIO_CONFIG.logo}
                  alt="GETINKED TATTOO Studio Badge"
                  className="w-full h-full object-cover rounded-full"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-['Cinzel'] text-xl font-bold tracking-wider text-zinc-100">
                GETINKED TATTOO
              </span>
            </div>

            <p className="text-zinc-400 text-xs leading-relaxed max-w-sm">
              Premier bespoke tattoo studio and professional piercing clinic. Uncompromising clinical sterilization, custom single-needle artistry, and 24/7 flexible appointments.
            </p>

            <div className="pt-2 text-zinc-400">
              <span className="text-amber-400 font-semibold block mb-0.5">Operating Hours</span>
              <p>Daily 10:00 AM – 11:00 PM (Including Sundays)</p>
              <p className="text-zinc-400">24/7 Pre-Booked Custom Sessions</p>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-200 block">
              Quick Navigation
            </span>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">About Our Studio</a>
              </li>
              <li>
                <a href="#artist" className="hover:text-amber-400 transition-colors">Meet the Artist</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-amber-400 transition-colors">Artist Portfolio</a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">Services & Pricing (from ₹500)</a>
              </li>
              <li>
                <a href="#hours" className="hover:text-amber-400 transition-colors">Operating Hours & Safety</a>
              </li>
              <li>
                <a href="#booking" className="hover:text-amber-400 transition-colors">Book a Consultation</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">Studio Location & Contact</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Connect & Social Media */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-200 block">
              Connect With Us
            </span>
            
            <div className="space-y-2.5">
              <a
                href={`https://wa.me/${STUDIO_CONFIG.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-zinc-300 hover:text-emerald-400 transition-colors group"
              >
                <div className="p-1.5 rounded-md bg-zinc-900 border border-zinc-800 group-hover:border-emerald-500/40">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <span>WhatsApp: {STUDIO_CONFIG.whatsapp}</span>
              </a>

              <a
                href={`mailto:${STUDIO_CONFIG.email}`}
                className="flex items-center gap-2.5 text-zinc-300 hover:text-amber-400 transition-colors group"
              >
                <div className="p-1.5 rounded-md bg-zinc-900 border border-zinc-800 group-hover:border-amber-500/40">
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <span>{STUDIO_CONFIG.email}</span>
              </a>

              <a
                href={STUDIO_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-zinc-300 hover:text-pink-400 transition-colors group"
              >
                <div className="p-1.5 rounded-md bg-zinc-900 border border-zinc-800 group-hover:border-pink-500/40">
                  <Instagram className="w-3.5 h-3.5 text-pink-400" />
                </div>
                <span>Instagram: {STUDIO_CONFIG.instagramHandle}</span>
              </a>

              <a
                href="https://maps.google.com/?q=GETINKED+TATTOO+STUDIO"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-zinc-300 hover:text-amber-400 transition-colors group"
              >
                <div className="p-1.5 rounded-md bg-zinc-900 border border-zinc-800 group-hover:border-amber-500/40">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <span>GETINKED TATTOO STUDIO (Google Maps)</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-400 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} GETINKED TATTOO. All Rights Reserved. Crafted with artistic dedication & clinical bio-safety.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-amber-400 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
