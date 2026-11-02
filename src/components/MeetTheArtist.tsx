import React from 'react';
import { Crown, MessageCircle, ShieldCheck, Award, Sparkles, Calendar, Instagram, CheckCircle2, Star } from 'lucide-react';
import { ARTISTS, STUDIO_CONFIG } from '../data/studioData';

interface MeetTheArtistProps {
  onBookWithArtist?: (artistName: string) => void;
  onViewPortfolio?: () => void;
}

export const MeetTheArtist: React.FC<MeetTheArtistProps> = ({ onBookWithArtist, onViewPortfolio }) => {
  const leadArtist = ARTISTS[0]; // Vishnu Lal

  const generateWhatsAppChatUrl = () => {
    const text = encodeURIComponent(
      `Hello Vishnu Lal! I saw your profile on GETINKED TATTOO and would like to chat directly about a custom tattoo concept.`
    );
    return `https://wa.me/${STUDIO_CONFIG.whatsappRaw}?text=${text}`;
  };

  return (
    <section id="artist" className="py-24 bg-zinc-950 relative border-t border-zinc-900 overflow-hidden">
      {/* Ambient background glows matching theme */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-r from-amber-500/10 via-cyan-500/10 to-orange-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-amber-400 font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Master Needlecraft & Vision</span>
          </div>
          <h2 className="font-['Cinzel'] text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-100 tracking-tight text-balance">
            Meet the <span className="gold-gradient-text">Artist</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed text-balance">
            The visionary hand behind GETINKED TATTOO. Combining meticulous artistic devotion, surgical hygiene standards, and lifetime ink integrity.
          </p>
        </div>

        {/* Lead Artist Hero Feature: Glowing Box Container */}
        <div className="glowing-box-container rounded-3xl p-6 sm:p-10 lg:p-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Photo framed with continuous glowing neon border in logo colors */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative group w-full max-w-sm">
                
                {/* Continuous Glowing Neon Border in Logo's Colors (Amber-Gold & Cyan Gems) */}
                <div className="neon-border-wrapper shadow-2xl">
                  <div className="neon-border-inner aspect-[3/4] sm:h-[440px] w-full relative">
                    <img
                      src={leadArtist.photoUrl}
                      alt="Vishnu Lal - Certified Tattoo Artist & Founder"
                      className="w-full h-full object-cover object-top filter brightness-[0.98] contrast-[1.05] group-hover:scale-105 transition-transform duration-700 ease-out"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Subtle bottom gradient vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent" />
                    
                    {/* On-image status label */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
                      <span className="px-3 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md border border-amber-500/40 text-amber-300 font-semibold flex items-center gap-1.5 shadow-lg">
                        <Crown className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                        Lead Artist
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md border border-cyan-500/40 text-cyan-300 font-mono text-[11px]">
                        Founder
                      </span>
                    </div>
                  </div>
                </div>

                {/* Subtle reflection glow beneath frame */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-gradient-to-r from-amber-500/30 to-cyan-500/30 blur-xl rounded-full pointer-events-none" />
              </div>
            </div>

            {/* Right Column: Profile Details, Crown Icon, Highlights & Credentials */}
            <div className="lg:col-span-7 flex flex-col space-y-6">
              
              {/* Name with Crown Icon & Official Title */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 shadow-inner">
                    <Crown className="w-6 h-6 sm:w-7 sm:h-7 text-amber-400 fill-amber-400" />
                  </span>
                  <h3 className="font-['Cinzel'] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-100 tracking-tight">
                    {leadArtist.name}
                  </h3>
                </div>

                <div className="text-base sm:text-lg font-semibold text-amber-400/90 tracking-wide flex items-center gap-2">
                  <span>Certified Tattoo Artist & Founder</span>
                  <span className="text-zinc-600">·</span>
                  <span className="text-xs font-mono text-zinc-400 tracking-normal">GETINKED STUDIO</span>
                </div>
              </div>

              {/* Highlighted Line Specifying 7+ Years of Experience */}
              <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500/15 via-amber-400/10 to-transparent border border-amber-400/30 shadow-sm max-w-fit">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400 shrink-0" />
                <span className="text-sm sm:text-base font-bold text-amber-300 tracking-wide font-['Cinzel']">
                  7+ Years of Experience in Tattoo Artistry
                </span>
              </div>

              {/* Artist Biography */}
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                {leadArtist.bio}
              </p>

              {/* Specialties unboxed text */}
              <div className="pt-1">
                <span className="text-xs uppercase tracking-wider text-zinc-400 block font-semibold mb-2">
                  Core Artistic Mastery
                </span>
                <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-xs text-zinc-300">
                  {leadArtist.specialties.map((spec, i) => (
                    <span key={spec} className="inline-flex items-center">
                      <span className="text-zinc-200 font-medium">{spec}</span>
                      {i < leadArtist.specialties.length - 1 && (
                        <span className="text-amber-500/60 ml-3" aria-hidden="true">·</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>

              {/* Structured Block for 'Verified Credentials & Certifications' */}
              <div className="pt-4 border-t border-zinc-800/80">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-cyan-400" />
                    Verified Credentials & Certifications
                  </span>
                  <span className="text-[11px] text-zinc-400 font-mono">100% Certified</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {leadArtist.credentials?.map((cred) => (
                    <div
                      key={cred}
                      className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 hover:border-amber-500/40 transition-colors flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-zinc-200 leading-snug">{cred}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons: Chat with Tattoo Artist (WhatsApp) & Consultation */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href={generateWhatsAppChatUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-3.5 px-6 rounded-xl text-xs sm:text-sm font-bold text-zinc-950 bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-500 hover:from-emerald-300 hover:to-emerald-400 shadow-lg shadow-emerald-500/20 active:scale-95 transition-all uppercase tracking-wider flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-zinc-950 fill-current" />
                  <span>Chat with Tattoo Artist (WhatsApp)</span>
                </a>

                {onBookWithArtist && (
                  <button
                    onClick={() => onBookWithArtist(leadArtist.name)}
                    className="w-full sm:w-auto py-3.5 px-6 rounded-xl text-xs sm:text-sm font-semibold text-zinc-100 bg-zinc-900 hover:bg-zinc-800 border border-amber-500/40 hover:border-amber-400 transition-all uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                  >
                    <Calendar className="w-4 h-4 text-amber-400" />
                    <span>Book with Vishnu Lal</span>
                  </button>
                )}

                {leadArtist.instagram && (
                  <a
                    href={leadArtist.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-pink-500/50 text-pink-400 transition-colors flex items-center justify-center"
                    title="View Instagram @vichu_here"
                    aria-label="Instagram Profile"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                )}
              </div>

            </div>

          </div>
        </div>

        {/* Resident Artists Showcase (Glowing cards maintaining aesthetic harmony) */}
        {/* Resident Artists Removed per user request */}
      </div>
    </section>
  );
};
