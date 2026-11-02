import { Artist, PortfolioItem, ServiceRate } from '../types';

export const STUDIO_CONFIG = {
  name: 'GETINKED TATTOO',
  tagline: 'Precision Needlecraft & Sacred Custom Body Art',
  subTagline: 'From minimalist delicate fine-lines to breathtaking hyper-realism and clinical-grade body piercing. Handcrafted permanently on your skin.',
  logo: './images/df138d9b-6a72-4ffb-9669-3080f00b47a1_c7db106c.jpg',
  
  // Contact details - easy to edit
  whatsapp: '63054 87457',
  whatsappRaw: '916305487457',
  email: 'vishnulalbabuhere@gmail.com',
  instagramUrl: 'https://www.instagram.com/vichu_here?srtk=MWZrc3IyMWgxeG55MA==',
  instagramHandle: '@vichu_here',
  
  // Operating Hours & Policy
  operatingHours: {
    regular: '10:00 AM – 11:00 PM',
    days: 'Open Daily (Mon – Sun, Including All Public Holidays)',
    preBooked: '24/7 Availability for Pre-Booked Appointments',
    policyNotice: 'We welcome scheduled visits and walk-ins during regular studio hours. For late-night, multi-session sleeves, or custom privacy bookings, our artists are available 24/7 with advance appointment reservation.'
  },
  
  // Location
  location: {
    name: 'GETINKED TATTOO STUDIO',
    address: 'Near Central Junction, Trivandrum, Kerala, India',
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.21704105244!2d76.9333728!3d8.480418499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bb43a3bf65df%3A0xa20d03f27c5726f1!2sGETINKED%20TATTOO%20STUDIO!5e1!3m2!1sen!2sin!4v1793613235111!5m2!1sen!2sin',
    directMapsUrl: 'https://maps.google.com/?q=GETINKED+TATTOO+STUDIO+Trivandrum'
  },
  
  heroImage: './images/hero_tattoo_studio_craft_1793613375800.jpg',
  interiorImage: './images/studio_interior_sanctuary_1793613377302.jpg',
};

export const ARTISTS: Artist[] = [
  {
    id: 'vichu',
    name: 'Vishnu Lal',
    role: 'Certified Tattoo Artist and Founder',
    experience: '7+ Years Experience',
    experienceHighlight: '7+ Years of Experience in Tattoo Artistry',
    photoUrl: './images/89723a27-5aaf-4f77-97c6-91ad5bac7fd6_13b8fa10.jpg',
    specialties: ['Black & Grey Realism', 'Sacred Geometry', 'Custom Freehand Typography & Script'],
    bio: 'Dedicated to transformative ink craft, Vishnu Lal blends mathematical precision with organic anatomical flow. Renowned for dark realism, flawless skin saturation, and hyper-detailed linework designed to maintain contrast and clarity over a lifetime.',
    instagram: 'https://www.instagram.com/vichu_here?srtk=MWZrc3IyMWgxeG55MA==',
    credentials: [
      'Master Certification in Advanced Dermagraphics & Intradermal Pigment Science',
      'Clinical Bloodborne Pathogen (BBP) & Cross-Contamination Safety Certified',
      'Hospital-Grade Autoclave Sterilization & Single-Use Disposable Protocols',
      'Anatomical Flow & Custom 3D Dynamic Muscle Mapping Specialist',
      '1,500+ Completed Custom Tattoos with 5-Star Healed Retention Track Record',
      'Hypoallergenic Heavy-Metal-Free Vegan Pigment Certified Specialist'
    ]
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'p1',
    title: 'Sacred Apex Lion & Metatron Geometry',
    category: 'realism',
    imageUrl: './images/portfolio_black_grey_lion_1793613376581.jpg',
    placement: 'Forearm (Outer Flexor)',
    artist: 'Vishnu Lal',
    description: 'Hyper-detailed black and grey lion portrait enveloped in sacred geometry and stippled dotwork. Crafted using 3RL precision micro-needles and grey wash gradients.',
    approxDuration: '6 Hours (Single Session)',
    tags: ['Realism', 'Sacred Geometry', 'Fine Needle']
  },
  {
    id: 'p2',
    title: 'Ethereal Wild Rose & Botanical Stem',
    category: 'fineline',
    imageUrl: './images/portfolio_fineline_flora_1793613377278.jpg',
    placement: 'Inner Wrist & Forearm',
    artist: 'Vishnu Lal',
    description: 'Ultra-delicate single-needle botanical illustration capturing petals, thorns, and gentle leaf veins with organic featherweight shading.',
    approxDuration: '1.5 Hours',
    tags: ['Fine-Line', 'Botanical', 'Minimalist']
  },
  {
    id: 'p3',
    title: 'Ryu Dragon & Celestial Wave Current',
    category: 'oriental',
    imageUrl: './images/portfolio_oriental_dragon_1793613378003.jpg',
    placement: 'Full Forearm Sleeve',
    artist: 'Vishnu Lal',
    description: 'Classic Asian neo-traditional dragon ascending through heavy graphite froth and crashing oceanic waves. Rich depth and needle saturation built for lifetime longevity.',
    approxDuration: '7 Hours (Two Sessions)',
    tags: ['Neo-Traditional', 'Oriental', 'Dragon Sleeve']
  },
  {
    id: 'p4',
    title: 'Anatomical Precision Studio Session',
    category: 'realism',
    imageUrl: './images/hero_tattoo_studio_craft_1793613375800.jpg',
    placement: 'Upper Bicep & Shoulder Wrap',
    artist: 'Vishnu Lal',
    description: 'In-progress custom script and baroque filigree work performed under clinical amber spotlighting with custom rotary coil balance.',
    approxDuration: 'Custom Session',
    tags: ['In-Progress', 'Script', 'Baroque']
  },
  {
    id: 'p5',
    title: 'Sterile Piercing & Titanium Jewelry Craft',
    category: 'piercing',
    imageUrl: './images/studio_interior_sanctuary_1793613377302.jpg',
    placement: 'Helix, Nostril & Septum',
    artist: 'Vishnu Lal',
    description: 'Precision needle-punched body piercing utilizing implant-grade ASTM F-136 titanium internally threaded posts for swift, irritation-free healing.',
    approxDuration: '20 Minutes',
    tags: ['Piercing', 'Titanium', 'Sterile Suite']
  }
];

export const SERVICES_RATES: ServiceRate[] = [
  {
    id: 's1',
    title: 'Minimalist & Tiny Tattoos',
    startingPrice: '₹500',
    rawPrice: 500,
    category: 'tattoo',
    popular: true,
    description: 'Delicate symbols, initials, micro-linework, birthdates, and minimalist personal emblems under 2 inches.',
    features: [
      'Base rate from ₹500',
      'Single-use sterile micro-needle setup',
      'Medical-grade protective second skin bandage',
      'Completed in under 30-45 minutes'
    ]
  },
  {
    id: 's2',
    title: 'Custom Medium Pieces (3–5 Inches)',
    startingPrice: 'Customized Pricing',
    rawPrice: 0,
    category: 'tattoo',
    description: 'Custom botanical florals, geometric mandalas, script lettering, and stylized illustrative art tailored to body contours.',
    features: [
      'Pricing customized based on individual requirements',
      'Comprehensive stencil sizing & placement check',
      'Multi-shade grey wash or solid saturation',
      'Artist consultation and design iteration'
    ]
  },
  {
    id: 's3',
    title: 'Black & Grey Master Realism',
    startingPrice: 'Customized Pricing',
    rawPrice: 0,
    category: 'tattoo',
    description: 'Photorealistic portraits, wildlife, mythology, and intricate architectural compositions with seamless gradient shading.',
    features: [
      'Pricing customized based on individual requirements',
      'Direct consultation with Lead Artist Vishnu Lal',
      'High-res photo reference mapping',
      'Multi-needle grouping (liners + curved magnums)'
    ]
  },
  {
    id: 's4',
    title: 'Full Sleeve / Backpiece Projects',
    startingPrice: 'Customized Pricing',
    rawPrice: 0,
    category: 'tattoo',
    description: 'Grand scale cohesive storytelling across full arms, legs, chest plates, or back murals with milestone scheduling.',
    features: [
      'Pricing customized based on individual requirements',
      'Custom 3D anatomical layout planning',
      'Flexible multi-session booking schedule',
      'Dedicated VIP studio sanctuary station'
    ]
  },
  {
    id: 's5',
    title: 'Precision Body Piercing',
    startingPrice: 'Customized Pricing',
    rawPrice: 0,
    category: 'piercing',
    popular: true,
    description: 'Professional body piercings performed in a clinical aseptic environment by certified specialists.',
    features: [
      'Pricing customized based on individual requirements',
      'Implant-grade ASTM F-136 titanium jewelry options',
      'Pre-sterilized single-use surgical hollow needles',
      'Gentle technique with full saline aftercare instructions'
    ]
  }
];

export const SAFETY_STANDARDS = [
  {
    title: '100% Single-Use Sterile Needles',
    desc: 'Every needle cartridge is factory sealed, sterilized with ethylene oxide (EO), and unsealed right in front of your eyes.'
  },
  {
    title: 'Hospital-Grade Autoclave & Barrier Film',
    desc: 'Workstations, clip cords, and machine grips are wrapped in sterile medical disposable barriers and disinfected with hospital-grade virucides.'
  },
  {
    title: 'Hypoallergenic Certified Inks',
    desc: 'We only deploy world-standard, heavy-metal-free, vegan pigments that deliver deep, lasting contrast without toxic additives.'
  },
  {
    title: 'Clinical Aftercare Second-Skin',
    desc: 'We apply breathable, waterproof medical-grade polyurethane film (Dermalize/Saniderm) for faster healing with zero scabbing.'
  }
];

export const FAQS = [
  {
    q: 'How much does a tattoo cost at GETINKED TATTOO?',
    a: 'Our studio features a base rate starting at ₹500 for minimalist and tiny tattoos. For all other custom tattoos and body piercings, pricing is customized based on the individual customer\'s specific requirements, such as artwork complexity, size, placement, and session hours. We provide transparent, upfront quotes before beginning.'
  },
  {
    q: 'What are your operating hours and appointment policies?',
    a: 'We are open daily from 10:00 AM to 11:00 PM, including Sundays and public holidays! In addition, we offer 24/7 availability for pre-booked appointments, ensuring complete schedule flexibility for clients working non-standard shifts or requiring private late-night sessions.'
  },
  {
    q: 'Do you offer body piercing services?',
    a: 'Yes! Alongside custom tattoos, GETINKED offers a wide variety of precision body piercings (Ear lobes, Helix, Conch, Nostril, Septum, Eyebrow, Navel) performed by skilled specialists. Pricing is customized based on the individual customer\'s specific requirements and chosen implant-grade titanium jewelry.'
  },
  {
    q: 'How should I prepare for my tattoo appointment?',
    a: 'Get a good night’s rest, eat a hearty meal 1–2 hours before arriving to keep your blood sugar balanced, stay well hydrated, and wear comfortable clothing that gives easy access to the chosen placement. Avoid alcohol and blood-thinning painkillers for 24 hours prior.'
  },
  {
    q: 'Can I send my own design or reference photo?',
    a: 'Absolutely! You can upload reference images directly through our online consultation form or share them via WhatsApp at 63054 87457. Lead artist Vishnu Lal and our team will customize and refine the artwork to complement your unique anatomy.'
  }
];
