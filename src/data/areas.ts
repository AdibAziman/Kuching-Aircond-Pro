import { AreaCoverage } from '../types';

export interface AreaDetail extends AreaCoverage {
  tagline: string;
  imageUrl: string;
  imageAlt: string;
  imageTheme: {
    gradient: string;
    accent: string;
    iconKey: 'building' | 'education' | 'residential' | 'civic' | 'nature' | 'commercial';
  };
  popularNeighborhoods?: string[];
  typicalProperties: string;
  mapsQuery: string;
}

export const coverageAreasData: AreaDetail[] = [
  {
    id: 'kuching-central',
    name: 'Kuching Central & Tabuan',
    postalCode: '93350 / 93300',
    eta: '30 - 45 Mins',
    activeCrews: 3,
    landmarks: ['Tabuan Tranquility', 'Vivacity Residences', 'Padungan', 'Jalan Song', 'Pending', 'BDC'],
    surcharge: 0,
    highlightText: 'Immediate dispatch hub. Central depot at Jalan Tun Jugah allows rapid 30-minute response across all Tabuan and central districts.',
    lat: 1.5280,
    lng: 110.3620,
    distanceKm: 2.5,
    tagline: 'Premier Residential & Commercial Center',
    typicalProperties: 'Double-Storey Semi-D, Vivacity Condos, Modern Shophouses',
    mapsQuery: 'Tabuan+Tranquility+Kuching+Sarawak',
    imageUrl: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Kuching Central Waterfront Skyline & Commercial Heart',
    imageTheme: {
      gradient: 'from-sky-700 via-blue-800 to-slate-900',
      accent: '#0284c7',
      iconKey: 'building'
    },
    commonIssues: [
      'Multi-storey terrace and semi-D units with high ceiling air leaks',
      'Condo units at Vivacity requiring specialized drainage pump checks',
      'Master bedroom units suffering from mold growth after heavy monsoon rain'
    ]
  },
  {
    id: 'kota-samarahan',
    name: 'Kota Samarahan Metropolitan',
    postalCode: '94300',
    eta: '45 - 60 Mins',
    activeCrews: 2,
    landmarks: ['Uni-Garden', 'Desa Ilmu', 'Riveria', 'La Promenade', 'UNIMAS & UiTM', 'Aiman Mall'],
    surcharge: 0,
    highlightText: 'Zero travel surcharge! Dedicated daily mobile van team stationed near the Samarahan Expressway covering university rentals and gated communities.',
    lat: 1.4599,
    lng: 110.4578,
    distanceKm: 14.8,
    tagline: 'University Hub & Fast-Growing Suburban Belt',
    typicalProperties: 'Student Rental Apartments, Gated Villas (Riveria / La Promenade)',
    mapsQuery: 'Uni+Garden+Kota+Samarahan+Sarawak',
    imageUrl: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Kota Samarahan Suburban Estates & Master Planned Townships',
    imageTheme: {
      gradient: 'from-emerald-700 via-teal-800 to-slate-900',
      accent: '#059669',
      iconKey: 'education'
    },
    commonIssues: [
      'Student rental apartments running continuously without filter cleaning',
      'Dust accumulation from active construction zones along the expressway',
      'Frequent capacitor burnout from voltage fluctuations during peak heat'
    ]
  },
  {
    id: 'batu-kawa',
    name: 'Batu Kawa & MJC Township',
    postalCode: '93250',
    eta: '35 - 50 Mins',
    activeCrews: 2,
    landmarks: ['MJC New Township', 'Pine Square', 'Batu Kawa Moyan', 'One Jaya', 'Desa Wira', 'Stapok'],
    surcharge: 0,
    highlightText: 'Daily priority routing for landed residences, commercial shoplots, and high-density apartments along the bustling Batu Kawa corridor.',
    lat: 1.5034,
    lng: 110.2989,
    distanceKm: 7.2,
    tagline: 'High-Density Residential & Bustling Commercial Square',
    typicalProperties: 'MJC Courtyard Apartments, Landed Terrace Houses, Pine Square Shoplots',
    mapsQuery: 'MJC+Batu+Kawah+New+Township+Kuching',
    imageUrl: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Batu Kawa MJC Township & Vibrant Courtyard Residences',
    imageTheme: {
      gradient: 'from-indigo-700 via-purple-900 to-slate-900',
      accent: '#6366f1',
      iconKey: 'residential'
    },
    commonIssues: [
      'Severe gelatinous bio-slime clogging shallow drainage slopes',
      'Ground floor shoplots requiring off-peak commercial chemical washing',
      'Terrace homes needing multi-unit chemical overhaul packages'
    ]
  },
  {
    id: 'petra-jaya',
    name: 'Petra Jaya & Semariang',
    postalCode: '93050',
    eta: '40 - 55 Mins',
    activeCrews: 2,
    landmarks: ['State Government Complex', 'Semariang', 'Kampung Gita', 'Taman Sukma', 'Masjid Jamek', 'Normah Medical'],
    surcharge: 0,
    highlightText: 'Frequent corporate and residential maintenance crews servicing civil servant quarters, private residential estates, and healthcare clinics across the river.',
    lat: 1.5794,
    lng: 110.3444,
    distanceKm: 8.5,
    tagline: 'Administrative Capital & Riverside Residential Enclaves',
    typicalProperties: 'Government Quarters, Bungalows, Single-Storey Terrace Homes',
    mapsQuery: 'Petra+Jaya+Kuching+Sarawak',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Petra Jaya Administrative Complexes & Riverside Neighborhoods',
    imageTheme: {
      gradient: 'from-blue-700 via-slate-800 to-slate-950',
      accent: '#2563eb',
      iconKey: 'civic'
    },
    commonIssues: [
      'High ambient river humidity accelerating indoor evaporator mold',
      'Government office cassette maintenance requiring CIDB compliance',
      'Single-storey residential homes with attic-space pipe heat absorption'
    ]
  },
  {
    id: 'matang',
    name: 'Matang & MetroCity',
    postalCode: '93050',
    eta: '45 - 60 Mins',
    activeCrews: 2,
    landmarks: ['MetroCity Square', 'Matang Jaya', 'Politeknik Kuching', 'Taman Lee Ling', 'Malihah', 'Kubah'],
    surcharge: 0,
    highlightText: 'Comprehensive residential split and commercial cassette servicing across all modern Matang developments and traditional suburban neighborhoods.',
    lat: 1.5641,
    lng: 110.3015,
    distanceKm: 10.4,
    tagline: 'Commercial Boulevard & Mountain Foothill Suburb',
    typicalProperties: 'MetroCity Modern Townhouses, F&B Shoplots, Family Estates',
    mapsQuery: 'MetroCity+Square+Matang+Kuching',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Matang MetroCity Commercial Square & Mountain Foothill Suburbs',
    imageTheme: {
      gradient: 'from-amber-700 via-stone-800 to-slate-950',
      accent: '#d97706',
      iconKey: 'nature'
    },
    commonIssues: [
      'F&B shophouse grease accumulation at MetroCity night market area',
      'Blower fan wheel vibration from accumulated fibrous dust',
      'Drainage pipe backflow due to improper initial DIY installations'
    ]
  },
  {
    id: 'stampin',
    name: 'Stampin, BDC & Saradise',
    postalCode: '93350',
    eta: '30 - 40 Mins',
    activeCrews: 3,
    landmarks: ['Gala City', 'Saradise BDC', 'Green Heights', 'Stutong Community Market', 'CityONE Megamall'],
    surcharge: 0,
    highlightText: 'High-density commercial cafe servicing and luxury residential preventive aircond overhauls. Fast 30-minute arrival window.',
    lat: 1.5082,
    lng: 110.3421,
    distanceKm: 3.1,
    tagline: 'Upscale Lifestyle Enclave & High-Traffic Dining Precinct',
    typicalProperties: 'Gala City Artisan Cafes, Green Heights Luxury Semi-D, Saradise Offices',
    mapsQuery: 'Gala+City+Stampin+Kuching+Sarawak',
    imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Stampin Gala City Dining Boulevard & Saradise Lifestyle District',
    imageTheme: {
      gradient: 'from-cyan-700 via-sky-900 to-slate-950',
      accent: '#0891b2',
      iconKey: 'commercial'
    },
    commonIssues: [
      'Artisan cafe cassette units choking on coffee oils and pastry flour dust',
      'Modern inverter circuit boards throwing error codes after power surges',
      'High-end residential units needing white-glove parquet protection'
    ]
  }
];
