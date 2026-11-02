import React, { useState } from 'react';
import { Sparkles, Clock, Calculator, ArrowRight, ShieldCheck, Check, Layers, Sliders, FileText, CheckCircle2 } from 'lucide-react';
import { STUDIO_CONFIG } from '../data/studioData';

interface ServicesPricingProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesPricing: React.FC<ServicesPricingProps> = ({ onSelectService }) => {
  // Interactive Custom Quote Selector State
  const [calcType, setCalcType] = useState<'tattoo' | 'piercing'>('tattoo');
  const [calcSize, setCalcSize] = useState<string>('tiny');
  const [calcComplexity, setCalcComplexity] = useState<string>('minimal');

  const getCustomizedQuote = () => {
    if (calcType === 'piercing') {
      return {
        price: 'Customized Pricing',
        isBase: false,
        heading: 'Precision Body Piercing',
        note: "Pricing is customized based on the individual customer's specific requirements, piercing placement, and selected ASTM F-136 implant titanium jewelry.",
      };
    }
    if (calcSize === 'tiny') {
      return {
        price: 'Base Price: ₹500',
        isBase: true,
        heading: 'Minimalist & Tiny Tattoo (< 2")',
        note: 'Accessible studio base rate of ₹500 for delicate symbols, initials, and single-needle micro-linework under 2 inches.',
      };
    }
    return {
      price: 'Customized Pricing',
      isBase: false,
      heading: calcSize === 'medium' ? 'Custom Medium Piece (3–5")' : calcSize === 'large' ? 'Large Custom Project (6–9")' : 'Full Sleeve / Backpiece Project',
      note: "Pricing is customized based on the individual customer's specific requirements, design intricate details, anatomical placement, and session hours.",
    };
  };

  const quote = getCustomizedQuote();

  const servicesList = [
    {
      id: 'tiny',
      title: 'Minimalist & Tiny Tattoos',
      isBase: true,
      priceLabel: 'Base Price: ₹500',
      badge: 'Studio Base Rate',
      description: 'Delicate symbols, birthdates, initials, sacred geometry, and minimalist personal emblems under 2 inches.',
      features: [
        'Single base rate of ₹500 for micro pieces',
        'Single-use sterile EO micro-needle setup',
        'Hypoallergenic certified vegan black ink',
        'Breathable second-skin medical bandage'
      ]
    },
    {
      id: 'medium',
      title: 'Custom Medium Pieces (3–5 Inches)',
      isBase: false,
      priceLabel: 'Customized Pricing',
      badge: 'Tailored to Customer Requirements',
      description: 'Botanical florals, customized calligraphy, geometric mandalas, and illustrative motifs tailored to anatomical flow.',
      features: [
        "Pricing is customized based on individual customer's specific requirements",
        'Custom stencil sizing & placement contouring',
        'Smooth greywash shading or solid saturation',
        'Artist consultation & concept refinement'
      ]
    },
    {
      id: 'realism',
      title: 'Black & Grey Master Realism',
      isBase: false,
      priceLabel: 'Customized Pricing',
      badge: 'Tailored to Customer Requirements',
      description: 'High-contrast portraiture, wildlife, mythological icons, and architectural compositions with seamless gradient shading.',
      features: [
        "Pricing is customized based on individual customer's specific requirements",
        'Direct consultation with Lead Artist Vishnu Lal',
        'High-resolution photo mapping & anatomy balance',
        'Specialized curved magnum & stippling grouping'
      ]
    },
    {
      id: 'sleeves',
      title: 'Full Sleeve & Backpiece Projects',
      isBase: false,
      priceLabel: 'Customized Pricing',
      badge: 'Tailored to Customer Requirements',
      description: 'Grand-scale cohesive storytelling across full arms, legs, chest plates, ribs, or full back murals.',
      features: [
        "Pricing is customized based on individual customer's specific requirements",
        'Comprehensive 3D anatomical flow planning',
        'Flexible multi-session milestone scheduling',
        'Priority access to 24/7 VIP studio sessions'
      ]
    },
    {
      id: 'piercing',
      title: 'Precision Body Piercing',
      isBase: false,
      priceLabel: 'Customized Pricing',
      badge: 'Tailored to Customer Requirements',
      description: 'Clinical-grade body piercings performed in an aseptic environment by certified specialists.',
      features: [
        "Pricing is customized based on individual customer's specific requirements",
        'Ear lobes, Helix, Conch, Tragus, Nostril, Septum, Navel',
        'Pre-sterilized single-use surgical hollow needles',
        'Internally threaded ASTM F-136 implant titanium options'
      ]
    },
    {
      id: 'coverup',
      title: 'Cover-Ups & Restoration',
      isBase: false,
      priceLabel: 'Customized Pricing',
      badge: 'Tailored to Customer Requirements',
      description: 'Artistic reimagining over previous tattoos, fading ink, or strategic blending over scar tissue.',
      features: [
        "Pricing is customized based on individual customer's specific requirements",
        'Deep evaluation of existing ink saturation',
        'Creative contrast layering & freehand masking',
        'Dedicated consultation for optimal coverage'
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-zinc-950 relative border-t border-zinc-900 overflow-hidden">
      {/* Ambient background glow matching website theme */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[300px] bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-cyan-500/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-amber-400 font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Studio Pricing Structure</span>
          </div>
          <h2 className="font-['Cinzel'] text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-100 tracking-tight text-balance">
            Services & <span className="gold-gradient-text">Pricing</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed text-balance">
            Our studio features a transparent <strong className="text-amber-400 font-semibold">base price of ₹500</strong> for minimalist and tiny tattoos. For all other custom tattoos and body piercings, pricing is customized based on the individual customer's specific requirements.
          </p>
        </div>

        {/* Featured Base Price Hero Card */}
        <div className="glowing-box-container rounded-3xl p-8 sm:p-10 mb-16 relative overflow-hidden border border-amber-500/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Base Studio Rate</span>
              </div>

              <h3 className="font-['Cinzel'] text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-100">
                Starting at <span className="gold-gradient-text">₹500</span> for Minimalist & Tiny Tattoos
              </h3>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-2xl">
                We believe exceptional tattoo artistry should be accessible. Our base price of ₹500 covers small, delicate single-needle tattoos, birthdates, initials, micro-symbols, and minimalist personal emblems under 2 inches.
              </p>

              <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-zinc-400 pt-1">
                <span className="flex items-center gap-1.5 text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  100% Single-use sterile micro-needle setup
                </span>
                <span className="flex items-center gap-1.5 text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Medical-grade second-skin protective film
                </span>
                <span className="flex items-center gap-1.5 text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Quick 30–45 minute sitting
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-zinc-950/80 border border-amber-500/30 text-center space-y-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-zinc-400 block mb-1">
                  Base Studio Price
                </span>
                <div className="font-['Cinzel'] text-4xl sm:text-5xl font-extrabold text-amber-400">
                  ₹500
                </div>
                <span className="text-[11px] text-zinc-400 mt-1 block">
                  All other services customized per client
                </span>
              </div>

              <button
                onClick={() => onSelectService('Minimalist & Tiny Tattoos (Base Rate: ₹500)')}
                className="w-full py-3.5 px-6 rounded-xl text-xs font-bold text-zinc-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all uppercase tracking-wider shadow-lg shadow-amber-500/20 active:scale-95 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Book Base Tattoo (₹500)</span>
                <ArrowRight className="w-4 h-4 text-zinc-950" />
              </button>
            </div>

          </div>
        </div>

        {/* Section Notice: Customized Pricing For All Other Services */}
        <div className="mb-12 p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-zinc-100">
                Customized Pricing Policy for All Other Services
              </h4>
              <p className="text-xs text-zinc-400 mt-0.5">
                Every custom tattoo and piercing is unique. For all services beyond our base rate, pricing is customized based on each customer's specific requirements.
              </p>
            </div>
          </div>
          <a
            href="#booking"
            className="px-5 py-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-zinc-200 transition-colors uppercase tracking-wider whitespace-nowrap shrink-0"
          >
            Get Custom Quote
          </a>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {servicesList.map((service) => (
            <div
              key={service.id}
              className={`glowing-box-container rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 ${
                service.isBase ? 'border-amber-400/60' : ''
              }`}
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span
                    className={`text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md ${
                      service.isBase
                        ? 'bg-amber-400 text-zinc-950 font-bold'
                        : 'bg-zinc-800/90 text-cyan-300 border border-cyan-500/30'
                    }`}
                  >
                    {service.badge}
                  </span>
                </div>

                <h3 className="font-['Cinzel'] text-xl font-bold text-zinc-100 mb-2">
                  {service.title}
                </h3>

                {/* Price Display */}
                <div className="py-2 mb-4 border-b border-zinc-800">
                  <span
                    className={`font-['Cinzel'] text-2xl font-extrabold ${
                      service.isBase ? 'text-amber-400' : 'text-zinc-200'
                    }`}
                  >
                    {service.priceLabel}
                  </span>
                  {!service.isBase && (
                    <p className="text-[11px] text-amber-400/90 mt-1 font-medium">
                      Pricing is customized based on individual requirements
                    </p>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features list */}
                <div className="space-y-2.5 pt-2 mb-6">
                  {service.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectService(service.title)}
                className={`w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 ${
                  service.isBase
                    ? 'bg-amber-400 hover:bg-amber-300 text-zinc-950 shadow-md shadow-amber-500/20'
                    : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700/80 hover:border-amber-400/40'
                }`}
              >
                <span>{service.isBase ? 'Book Base ₹500 Tattoo' : 'Request Custom Quote'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* How Customized Pricing Works - 4 Pillars */}
        <div className="mb-20 rounded-3xl bg-zinc-900/70 border border-zinc-800 p-8 sm:p-10">
          <div className="max-w-2xl mb-8">
            <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-amber-400" />
              Transparent Consultation
            </span>
            <h3 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold text-zinc-100 mt-2">
              How Custom Pricing Is Determined
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2">
              We never charge arbitrary numbers. For all custom work beyond the ₹500 base rate, your quote is calculated objectively:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-2 p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
              <span className="text-amber-400 font-mono text-xs font-bold">01</span>
              <h4 className="text-sm font-semibold text-zinc-100">Scale & Dimensions</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Tattoo dimensions and coverage area (from delicate wrists to full back murals).
              </p>
            </div>

            <div className="space-y-2 p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
              <span className="text-amber-400 font-mono text-xs font-bold">02</span>
              <h4 className="text-sm font-semibold text-zinc-100">Anatomical Placement</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Body contours, muscle flow, and skin elasticity (e.g. flat forearms vs ribs, neck, or spine).
              </p>
            </div>

            <div className="space-y-2 p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
              <span className="text-amber-400 font-mono text-xs font-bold">03</span>
              <h4 className="text-sm font-semibold text-zinc-100">Artistic Complexity</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Single-needle fine linework vs hyper-realistic stippled portrait shading or custom script.
              </p>
            </div>

            <div className="space-y-2 p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
              <span className="text-amber-400 font-mono text-xs font-bold">04</span>
              <h4 className="text-sm font-semibold text-zinc-100">Session Scheduling</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Single sitting completion vs multi-session sleeve project appointments with 24/7 flexibility.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Custom Quote Estimator */}
        <div className="mb-20 rounded-3xl glowing-box-container p-7 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold flex items-center gap-1.5">
                  <Calculator className="w-4 h-4 text-amber-400" />
                  Custom Quote Guide
                </span>
                <h3 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold text-zinc-100">
                  Select Your Project Requirements
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400">
                  Configure your concept below to verify pricing guidelines before your consultation with Vishnu Lal.
                </p>
              </div>

              {/* Service Type Switch */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-zinc-300 block">Service Type</label>
                <div className="grid grid-cols-2 gap-3 max-w-md">
                  <button
                    type="button"
                    onClick={() => setCalcType('tattoo')}
                    className={`py-2 px-4 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                      calcType === 'tattoo'
                        ? 'bg-amber-400 text-zinc-950 shadow-sm'
                        : 'bg-zinc-800/80 text-zinc-300 hover:bg-zinc-700'
                    }`}
                  >
                    Custom Tattoo Art
                  </button>
                  <button
                    type="button"
                    onClick={() => setCalcType('piercing')}
                    className={`py-2 px-4 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                      calcType === 'piercing'
                        ? 'bg-amber-400 text-zinc-950 shadow-sm'
                        : 'bg-zinc-800/80 text-zinc-300 hover:bg-zinc-700'
                    }`}
                  >
                    Precision Body Piercing
                  </button>
                </div>
              </div>

              {calcType === 'tattoo' && (
                <>
                  {/* Size Selector */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-zinc-300 block">Approximate Size Category</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {[
                        { id: 'tiny', label: 'Tiny (< 2")', tag: 'Base: ₹500' },
                        { id: 'medium', label: 'Medium (3-5")', tag: 'Customized' },
                        { id: 'large', label: 'Large (6-9")', tag: 'Customized' },
                        { id: 'sleeve', label: 'Full Sleeve', tag: 'Customized' },
                      ].map((sz) => (
                        <button
                          key={sz.id}
                          type="button"
                          onClick={() => setCalcSize(sz.id)}
                          className={`p-3 rounded-xl text-left transition-all cursor-pointer border ${
                            calcSize === sz.id
                              ? 'bg-amber-500/10 border-amber-400 text-amber-300'
                              : 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:border-zinc-700'
                          }`}
                        >
                          <div className="text-xs font-bold">{sz.label}</div>
                          <div className="text-[10px] text-zinc-400 mt-0.5">{sz.tag}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Complexity / Style */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-zinc-300 block">Artistic Style</label>
                    <div className="grid grid-cols-2 gap-3 max-w-md">
                      <button
                        type="button"
                        onClick={() => setCalcComplexity('minimal')}
                        className={`py-2.5 px-3 text-xs rounded-xl font-medium border text-left transition-all ${
                          calcComplexity === 'minimal'
                            ? 'bg-amber-500/10 border-amber-400 text-amber-300'
                            : 'bg-zinc-900 border-zinc-800 text-zinc-300'
                        }`}
                      >
                        Clean Line / Script / Minimalist
                      </button>
                      <button
                        type="button"
                        onClick={() => setCalcComplexity('realism')}
                        className={`py-2.5 px-3 text-xs rounded-xl font-medium border text-left transition-all ${
                          calcComplexity === 'realism'
                            ? 'bg-amber-500/10 border-amber-400 text-amber-300'
                            : 'bg-zinc-900 border-zinc-800 text-zinc-300'
                        }`}
                      >
                        Black & Grey Realism / Shading
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Quote Result Card */}
            <div className="lg:col-span-5 p-7 sm:p-8 rounded-2xl bg-zinc-950/95 border border-amber-500/30 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs uppercase tracking-wider text-zinc-400 block mb-1">
                  Pricing Guidance
                </span>
                
                <h4 className="text-sm font-semibold text-zinc-200 mb-1">
                  {quote.heading}
                </h4>

                <div className={`font-['Cinzel'] text-3xl sm:text-4xl font-extrabold ${
                  quote.isBase ? 'text-amber-400' : 'text-zinc-100'
                }`}>
                  {quote.price}
                </div>

                <div className="mt-3 p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800">
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {quote.note}
                  </p>
                </div>
                
                <div className="mt-4 pt-4 border-t border-zinc-800/80 text-xs text-zinc-400 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Free preliminary design consultation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Zero hidden stencil or disposable cartridge charges</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onSelectService(quote.isBase ? 'Minimalist & Tiny Tattoos (Base Rate: ₹500)' : `${quote.heading} (Customized Pricing)`)}
                className="w-full py-3.5 px-4 text-xs font-bold text-zinc-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-lg transition-all uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Apply To Consultation Form</span>
                <ArrowRight className="w-4 h-4 text-zinc-950" />
              </button>
            </div>

          </div>
        </div>

        {/* Operating Hours and Booking Policy Card */}
        <div id="hours" className="rounded-3xl glowing-box-container p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs tracking-wider uppercase text-amber-400 font-semibold">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>Operating Hours & Booking Policy</span>
              </div>
              
              <h3 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold text-zinc-100">
                Studio Schedule Built Around Your Life
              </h3>

              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-zinc-200 text-sm leading-relaxed">
                <p className="font-medium">
                  {STUDIO_CONFIG.name} is open daily from <span className="text-amber-300 font-bold">10:00 AM to 11:00 PM</span>, including Sundays, with <span className="text-amber-300 font-bold">24/7 availability for pre-booked appointments</span>, ensuring flexibility around client preferences and schedules.
                </p>
              </div>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {STUDIO_CONFIG.operatingHours.policyNotice}
              </p>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase text-zinc-400 font-semibold">Daily Studio Walk-Ins</span>
                  <span className="text-xs text-emerald-400 font-medium">Open All 7 Days</span>
                </div>
                <div className="font-['Cinzel'] text-xl font-bold text-zinc-100">
                  10:00 AM – 11:00 PM
                </div>
                <p className="text-xs text-zinc-400">
                  Walk-ins welcome for consultations, quick tattoos, piercings, and jewelry changes.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-zinc-900/90 border border-amber-500/30 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase text-amber-400 font-semibold">Pre-Booked Custom Sessions</span>
                  <span className="text-xs text-amber-300 font-medium">Priority Access</span>
                </div>
                <div className="font-['Cinzel'] text-xl font-bold text-zinc-100">
                  24/7 By Appointment
                </div>
                <p className="text-xs text-zinc-400">
                  Private late-night sessions and extensive realism project sittings scheduled around your personal timetable.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
