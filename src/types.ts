export interface PortfolioItem {
  id: string;
  title: string;
  category: 'realism' | 'fineline' | 'oriental' | 'geometric' | 'piercing';
  imageUrl: string;
  placement: string;
  artist: string;
  description: string;
  approxDuration: string;
  tags: string[];
}

export interface Artist {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialties: string[];
  bio: string;
  instagram?: string;
  avatarUrl?: string;
  photoUrl?: string;
  experienceHighlight?: string;
  credentials?: string[];
}

export interface ServiceRate {
  id: string;
  title: string;
  startingPrice: string;
  rawPrice: number;
  category: 'tattoo' | 'piercing';
  description: string;
  features: string[];
  popular?: boolean;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  email: string;
  tattooIdea: string;
  size: string;
  placement: string;
  preferredArtist: string;
  serviceType: 'tattoo' | 'piercing' | 'consultation';
  preferredDate: string;
  preferredTime: string;
  referenceImage: string | null;
  referenceImageName: string | null;
  notes: string;
}
