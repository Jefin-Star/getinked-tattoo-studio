import React, { useEffect, useState } from 'react';
import { X, ZoomIn, ZoomOut, Calendar, ArrowRight, User, MapPin, Clock } from 'lucide-react';
import { PortfolioItem } from '../types';

interface LightboxModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onRequestStyle: (item: PortfolioItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose, onRequestStyle }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-zinc-950/95 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      <div
        className="relative max-w-5xl w-full max-h-[92vh] bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-zinc-400 hover:text-zinc-100 bg-zinc-950/80 hover:bg-zinc-800 rounded-full border border-zinc-700/80 transition-colors cursor-pointer"
          aria-label="Close modal viewer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Pane */}
        <div className="relative flex-1 bg-zinc-950 flex items-center justify-center overflow-hidden min-h-[300px] sm:min-h-[420px] lg:min-h-[540px]">
          <div
            className={`w-full h-full flex items-center justify-center transition-transform duration-300 ${
              isZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'
            }`}
            onClick={() => setIsZoomed(!isZoomed)}
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="max-h-[75vh] w-auto max-w-full object-contain select-none"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Zoom Toggle Pill */}
          <button
            onClick={() => setIsZoomed(!isZoomed)}
            className="absolute bottom-4 left-4 z-10 px-3 py-1.5 rounded-lg bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/80 text-xs font-medium text-zinc-200 flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            {isZoomed ? (
              <>
                <ZoomOut className="w-3.5 h-3.5 text-amber-400" />
                <span>Reset View</span>
              </>
            ) : (
              <>
                <ZoomIn className="w-3.5 h-3.5 text-amber-400" />
                <span>Zoom In (2x)</span>
              </>
            )}
          </button>
        </div>

        {/* Details Sidebar Pane */}
        <div className="w-full lg:w-96 p-6 sm:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-zinc-800 bg-zinc-900/90 overflow-y-auto">
          <div className="space-y-5">
            <div>
              <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold block mb-1">
                Portfolio Showcase
              </span>
              <h3 className="font-['Cinzel'] text-xl sm:text-2xl font-bold text-zinc-100 leading-snug">
                {item.title}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {item.description}
            </p>

            {/* Spec breakdown */}
            <div className="space-y-2.5 pt-4 border-t border-zinc-800/80 text-xs">
              <div className="flex items-center justify-between py-1 border-b border-zinc-800/40">
                <span className="text-zinc-400 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-amber-400" />
                  Artist
                </span>
                <span className="font-medium text-zinc-200">{item.artist}</span>
              </div>

              <div className="flex items-center justify-between py-1 border-b border-zinc-800/40">
                <span className="text-zinc-400 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  Placement
                </span>
                <span className="font-medium text-zinc-200">{item.placement}</span>
              </div>

              <div className="flex items-center justify-between py-1 border-b border-zinc-800/40">
                <span className="text-zinc-400 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  Duration
                </span>
                <span className="font-medium text-zinc-200 tabular-nums">{item.approxDuration}</span>
              </div>
            </div>

            {/* Tags */}
            <div className="pt-2">
              <span className="text-[11px] uppercase tracking-wider text-zinc-400 block mb-1.5">Style Elements</span>
              <div className="flex flex-wrap gap-1.5 text-xs text-zinc-300">
                {item.tags.map((tag, i) => (
                  <span key={tag} className="inline-flex items-center">
                    <span className="text-zinc-300">{tag}</span>
                    {i < item.tags.length - 1 && <span className="text-zinc-600 ml-1.5">·</span>}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-6 mt-6 border-t border-zinc-800/80">
            <button
              onClick={() => {
                onRequestStyle(item);
                onClose();
              }}
              className="w-full py-3 px-4 text-xs font-bold text-zinc-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-lg transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 uppercase tracking-wider cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-zinc-950" />
              <span>Request This Style</span>
              <ArrowRight className="w-3.5 h-3.5 text-zinc-950" />
            </button>
            <p className="text-[11px] text-zinc-400 text-center mt-2">
              Tattoos starting from ₹500 · Instant consultation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
