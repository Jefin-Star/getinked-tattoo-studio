import React, { useState } from 'react';
import { Maximize2, Sparkles } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../data/studioData';
import { PortfolioItem } from '../types';
import { LightboxModal } from './LightboxModal';

interface PortfolioProps {
  onRequestStyle: (item: PortfolioItem) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onRequestStyle }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Works' },
    { id: 'realism', label: 'Black & Grey Realism' },
    { id: 'fineline', label: 'Fine Line & Botanical' },
    { id: 'oriental', label: 'Neo-Traditional & Dragons' },
    { id: 'piercing', label: 'Sterile Piercing' },
  ];

  const filteredItems = activeCategory === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-zinc-950 relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-amber-400 font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Master Needlecraft Gallery</span>
          </div>
          <h2 className="font-['Cinzel'] text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-100 tracking-tight text-balance">
            Artist <span className="gold-gradient-text">Portfolio</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed text-balance">
            Explore curated masterpieces crafted at GETINKED TATTOO. Click any photograph to zoom in and inspect fine stippling, razor-sharp outlines, and soft gradient transitions.
          </p>
        </div>

        {/* Filter Controls (Segmented Bar) */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
                activeCategory === cat.id
                  ? 'bg-amber-400 text-zinc-950 shadow-md shadow-amber-500/20'
                  : 'bg-zinc-900/90 text-zinc-300 hover:text-zinc-100 hover:bg-zinc-800 border border-zinc-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            const isFeatured = index === 0;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className={`group relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800/80 cursor-pointer hover:border-amber-500/50 transition-all duration-300 ${
                  isFeatured ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Image Container */}
                <div className={`relative w-full overflow-hidden ${isFeatured ? 'h-80 sm:h-96 lg:h-[420px]' : 'h-80'}`}>
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle Contrast Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-85 group-hover:opacity-90 transition-opacity" />

                  {/* Top-Right Zoom Button */}
                  <div className="absolute top-4 right-4 p-2.5 rounded-full bg-zinc-950/70 border border-zinc-700/60 text-zinc-300 group-hover:text-amber-400 group-hover:bg-zinc-900 transition-all opacity-80 group-hover:opacity-100 shadow-md">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  {/* Bottom Metadata Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end space-y-2">
                    <div className="flex items-center gap-2 text-xs text-amber-400 font-medium">
                      <span>{item.placement}</span>
                      <span aria-hidden="true">·</span>
                      <span>By {item.artist}</span>
                    </div>

                    <h3 className="font-['Cinzel'] text-lg sm:text-xl font-bold text-zinc-100 group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs text-zinc-300 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="pt-2 flex items-center justify-between text-xs text-zinc-400">
                      <span className="font-mono">{item.approxDuration}</span>
                      <span className="text-amber-400 font-semibold group-hover:translate-x-1 transition-transform">
                        Click to Zoom & Inquire →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footnote callout */}
        <div className="mt-14 p-6 rounded-xl bg-zinc-900/60 border border-zinc-800 text-center max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-semibold text-zinc-100">Have a custom reference image or concept?</h4>
            <p className="text-xs text-zinc-400 mt-0.5">Upload it to our booking form for an instant artist evaluation & ballpark quote.</p>
          </div>
          <a
            href="#booking"
            className="px-5 py-2.5 text-xs font-bold text-zinc-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap shrink-0 uppercase tracking-wider"
          >
            Upload Reference
          </a>
        </div>

      </div>

      {/* Lightbox Zoom Modal */}
      <LightboxModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onRequestStyle={onRequestStyle}
      />
    </section>
  );
};
