import React from 'react';
import { Phone, Mail, Instagram, MapPin, Clock, ExternalLink, Sparkles, Navigation } from 'lucide-react';
import { STUDIO_CONFIG } from '../data/studioData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-zinc-950 relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-amber-400 font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect & Locate Our Studio</span>
          </div>
          <h2 className="font-['Cinzel'] text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-100 tracking-tight text-balance">
            Contact <span className="gold-gradient-text">GETINKED TATTOO</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed text-balance">
            Drop in during walk-in studio hours or contact our lead artist directly via WhatsApp, Email, or Instagram for consultations and custom bookings.
          </p>
        </div>

        {/* 3 Clickable Primary Contact Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Channel 1: WhatsApp */}
          <a
            href={`https://wa.me/${STUDIO_CONFIG.whatsappRaw}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-emerald-500/60 hover:bg-zinc-900 transition-all duration-300 shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase tracking-wider text-emerald-400 font-semibold block mb-1">
                Direct WhatsApp Chat
              </span>
              <h3 className="font-['Cinzel'] text-xl font-bold text-zinc-100 mb-2">
                {STUDIO_CONFIG.whatsapp}
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Fast responses for quick quotes, reference images, booking availability, and piercing inquiries.
              </p>
            </div>
            
            <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center text-xs font-semibold text-emerald-400 group-hover:text-emerald-300">
              <span>Open WhatsApp Chat</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
            </div>
          </a>

          {/* Channel 2: Email */}
          <a
            href={`mailto:${STUDIO_CONFIG.email}`}
            className="group p-8 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-amber-500/60 hover:bg-zinc-900 transition-all duration-300 shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-amber-500/20 transition-all">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold block mb-1">
                Official Studio Email
              </span>
              <h3 className="text-base sm:text-lg font-bold text-zinc-100 mb-2 break-all">
                {STUDIO_CONFIG.email}
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                For detailed sleeve briefs, high-resolution artwork files, guest spot collaborations, and business inquiries.
              </p>
            </div>
            
            <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center text-xs font-semibold text-amber-400 group-hover:text-amber-300">
              <span>Send An Email</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
            </div>
          </a>

          {/* Channel 3: Instagram */}
          <a
            href={STUDIO_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-pink-500/60 hover:bg-zinc-900 transition-all duration-300 shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-pink-500/20 transition-all">
                <Instagram className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase tracking-wider text-pink-400 font-semibold block mb-1">
                Official Instagram Portfolio
              </span>
              <h3 className="font-['Cinzel'] text-xl font-bold text-zinc-100 mb-2">
                {STUDIO_CONFIG.instagramHandle}
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Follow Vishnu Lal (@vichu_here) for daily stories, in-progress tattooing, healed client photos, and flash drops.
              </p>
            </div>
            
            <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center text-xs font-semibold text-pink-400 group-hover:text-pink-300">
              <span>View On Instagram</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
            </div>
          </a>

        </div>

        {/* Location & Embedded Google Map */}
        <div className="rounded-2xl bg-zinc-900/90 border border-zinc-800 overflow-hidden shadow-2xl">
          <div className="p-6 sm:p-8 border-b border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-amber-400" />
                Studio Location & Directions
              </span>
              <h3 className="font-['Cinzel'] text-xl sm:text-2xl font-bold text-zinc-100">
                GETINKED TATTOO STUDIO
              </h3>
              <p className="text-xs text-zinc-400 flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-zinc-400" />
                <span>Open Daily: 10:00 AM – 11:00 PM (Including Sundays) · 24/7 Pre-Booked Appointments</span>
              </p>
            </div>

            <a
              href="https://maps.google.com/?q=GETINKED+TATTOO+STUDIO"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-xs font-semibold text-zinc-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center justify-center gap-2 uppercase tracking-wider whitespace-nowrap shrink-0 shadow-md"
            >
              <Navigation className="w-3.5 h-3.5 text-zinc-950" />
              <span>Get Directions</span>
            </a>
          </div>

          {/* Embedded Google Maps iFrame from User Request */}
          <div className="relative w-full h-[400px] sm:h-[480px] bg-zinc-950">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.21704105244!2d76.9333728!3d8.480418499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bb43a3bf65df%3A0xa20d03f27c5726f1!2sGETINKED%20TATTOO%20STUDIO!5e1!3m2!1sen!2sin!4v1793613235111!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="GETINKED TATTOO STUDIO Google Maps Location"
              className="filter contrast-[1.05] grayscale-[20%]"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
