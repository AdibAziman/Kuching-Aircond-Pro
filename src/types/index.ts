export interface ServiceItem {
  id: string;
  name: string;
  category: 'residential' | 'commercial' | 'specialized';
  basePrice: number;
  priceDisplay: string;
  duration: string;
  recommendedFor: string;
  description: string;
  checklist: string[];
  isPopular?: boolean;
  symptoms?: string[];
  steps?: string[];
  pricingTiers?: {
    hp: string;
    price: number;
    notes?: string;
  }[];
}

export interface AreaCoverage {
  id: string;
  name: string;
  postalCode: string;
  eta: string;
  activeCrews: number;
  landmarks: string[];
  surcharge: number;
  highlightText: string;
  lat: number;
  lng: number;
  distanceKm: number;
  commonIssues: string[];
  imageUrl?: string;
  imageAlt?: string;
}

export interface Technician {
  id: string;
  name: string;
  role: string;
  cidbReg: string;
  wiremanGrade: string;
  yearsExp: number;
  specialty: string;
  completedJobs: number;
  rating: number;
  avatarInitials: string;
  accentColor: string;
  bio?: string;
}

export interface CustomerReview {
  id: string;
  author: string;
  location: string;
  area: string;
  propertyType: string;
  serviceUsed: string;
  rating: number;
  date: string;
  comment: string;
  unitsServiced: number;
  verified: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'pricing' | 'technical' | 'warranty' | 'coverage';
}

export interface SEOKeyword {
  id: number;
  keyword: string;
  category: 'Primary' | 'Secondary' | 'Kota Samarahan' | 'Batu Kawa' | 'Petra Jaya' | 'Matang' | 'Stampin & Tabuan' | 'Long-Tail Intent';
  targetUrl: string;
  intent: 'Commercial' | 'Transactional' | 'Geo-Transactional' | 'Informational';
  monthlyVolume?: number;
}

export interface CalculatorState {
  serviceId: string;
  horsepower: '1.0' | '1.5' | '2.0' | '2.5' | '3.0';
  unitCount: number;
  areaId: string;
  includeGasCheck: boolean;
  propertyType: 'landed' | 'condo' | 'commercial';
}

export interface BookingSubmission {
  jobReference: string;
  customerName: string;
  phone: string;
  areaName: string;
  address: string;
  serviceName: string;
  horsepower: string;
  units: number;
  preferredDate: string;
  preferredTimeSlot: string;
  totalEstimatedRM: number;
  notes?: string;
}

export type PageView = 'home' | 'services' | 'areas' | 'about' | 'contact' | 'calculator';
