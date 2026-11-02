import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import { STUDIO_CONFIG } from '../data/studioData';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Meet the Artist', href: '#artist' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Services & Rates', href: '#services' },
    { label: 'Hours & Safety', href: '#hours' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80 shadow-2xl py-3'
          : 'bg-gradient-to-b from-zinc-950/95 via-zinc-950/70 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand title wordmark with logo */}
          <a
            href="#"
            className="flex items-center gap-3 group whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden border border-amber-500/40 p-0.5 bg-zinc-900 group-hover:border-amber-400 transition-colors shadow-sm">
              <img
                src={STUDIO_CONFIG.logo}
                alt="GETINKED TATTOO Logo"
                className="w-full h-full object-cover rounded-full"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-['Cinzel'] text-lg sm:text-xl font-bold tracking-wider text-zinc-100 group-hover:text-amber-400 transition-colors">
                GETINKED TATTOO
              </span>
            </div>
          </a>

          {/* Zone 2: Single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-zinc-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="whitespace-nowrap shrink-0 hover:text-amber-400 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-amber-400 hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={`https://wa.me/${STUDIO_CONFIG.whatsappRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Direct WhatsApp message"
              className="px-3.5 py-2 text-xs font-semibold text-zinc-300 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap shrink-0"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp: 63054 87457</span>
            </a>
            <button
              onClick={onBookClick}
              className="px-5 py-2 text-xs font-semibold text-zinc-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-lg transition-all shadow-md hover:shadow-amber-500/20 active:scale-95 whitespace-nowrap shrink-0 uppercase tracking-wider"
            >
              Book Consultation
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onBookClick}
              className="sm:hidden px-3 py-1.5 text-xs font-semibold text-zinc-950 bg-amber-400 rounded-md"
            >
              Book
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-zinc-950/98 border-b border-zinc-800 px-6 py-6 shadow-2xl animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-4 text-base font-medium text-zinc-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-zinc-200 hover:text-amber-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-zinc-800/80 flex flex-col gap-3">
              <a
                href={`https://wa.me/${STUDIO_CONFIG.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 text-sm font-semibold text-center text-zinc-200 bg-zinc-900 border border-zinc-700 rounded-lg flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-emerald-400" />
                WhatsApp: 63054 87457
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full py-3 px-4 text-sm font-bold text-center text-zinc-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-lg tracking-wider uppercase"
              >
                Book a Consultation
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
