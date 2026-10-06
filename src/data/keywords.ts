import { SEOKeyword } from '../types';

export const keywordsData: SEOKeyword[] = [
  // Primary (1-10)
  { id: 1, keyword: 'aircond service kuching', category: 'Primary', targetUrl: '/', intent: 'Transactional', monthlyVolume: 2400 },
  { id: 2, keyword: 'aircond repair kuching', category: 'Primary', targetUrl: '/services/repair', intent: 'Transactional', monthlyVolume: 1300 },
  { id: 3, keyword: 'chemical wash aircond kuching', category: 'Primary', targetUrl: '/services/chemical-wash', intent: 'Transactional', monthlyVolume: 1100 },
  { id: 4, keyword: 'aircond installation kuching', category: 'Primary', targetUrl: '/services/installation', intent: 'Transactional', monthlyVolume: 880 },
  { id: 5, keyword: 'servis aircond kuching', category: 'Primary', targetUrl: '/', intent: 'Transactional', monthlyVolume: 1600 },
  { id: 6, keyword: 'aircond maintenance kuching', category: 'Primary', targetUrl: '/services', intent: 'Commercial', monthlyVolume: 480 },
  { id: 7, keyword: 'kuching aircond contractor', category: 'Primary', targetUrl: '/about', intent: 'Commercial', monthlyVolume: 390 },
  { id: 8, keyword: 'aircond specialist kuching', category: 'Primary', targetUrl: '/', intent: 'Commercial', monthlyVolume: 320 },
  { id: 9, keyword: 'emergency aircond repair kuching', category: 'Primary', targetUrl: '/services/emergency', intent: 'Transactional', monthlyVolume: 290 },
  { id: 10, keyword: 'best aircond service in kuching', category: 'Primary', targetUrl: '/', intent: 'Commercial', monthlyVolume: 450 },

  // Secondary (11-20)
  { id: 11, keyword: 'chemical overhaul aircond kuching', category: 'Secondary', targetUrl: '/services/chemical-overhaul', intent: 'Transactional', monthlyVolume: 510 },
  { id: 12, keyword: 'aircond gas refill kuching', category: 'Secondary', targetUrl: '/services/gas-refill', intent: 'Transactional', monthlyVolume: 670 },
  { id: 13, keyword: 'r32 gas refill price kuching', category: 'Secondary', targetUrl: '/services/gas-refill', intent: 'Transactional', monthlyVolume: 340 },
  { id: 14, keyword: 'r410a gas top up kuching', category: 'Secondary', targetUrl: '/services/gas-refill', intent: 'Transactional', monthlyVolume: 280 },
  { id: 15, keyword: 'commercial aircond service kuching', category: 'Secondary', targetUrl: '/services/commercial', intent: 'Commercial', monthlyVolume: 390 },
  { id: 16, keyword: 'ceiling cassette aircond servicing kuching', category: 'Secondary', targetUrl: '/services/commercial', intent: 'Commercial', monthlyVolume: 260 },
  { id: 17, keyword: 'daikin aircond service kuching', category: 'Secondary', targetUrl: '/brands/daikin', intent: 'Transactional', monthlyVolume: 590 },
  { id: 18, keyword: 'panasonic aircond repair kuching', category: 'Secondary', targetUrl: '/brands/panasonic', intent: 'Transactional', monthlyVolume: 520 },
  { id: 19, keyword: 'midea aircond installer kuching', category: 'Secondary', targetUrl: '/services/installation', intent: 'Transactional', monthlyVolume: 310 },
  { id: 20, keyword: 'inverter aircond repair kuching', category: 'Secondary', targetUrl: '/services/repair', intent: 'Transactional', monthlyVolume: 440 },

  // Kota Samarahan (21-25)
  { id: 21, keyword: 'aircond service kota samarahan', category: 'Kota Samarahan', targetUrl: '/areas/kota-samarahan', intent: 'Geo-Transactional', monthlyVolume: 720 },
  { id: 22, keyword: 'chemical wash aircond samarahan', category: 'Kota Samarahan', targetUrl: '/areas/kota-samarahan', intent: 'Geo-Transactional', monthlyVolume: 430 },
  { id: 23, keyword: 'aircond repair uni garden samarahan', category: 'Kota Samarahan', targetUrl: '/areas/kota-samarahan', intent: 'Geo-Transactional', monthlyVolume: 290 },
  { id: 24, keyword: 'servis aircond desa ilmu samarahan', category: 'Kota Samarahan', targetUrl: '/areas/kota-samarahan', intent: 'Geo-Transactional', monthlyVolume: 360 },
  { id: 25, keyword: 'pasang aircond kota samarahan', category: 'Kota Samarahan', targetUrl: '/areas/kota-samarahan', intent: 'Geo-Transactional', monthlyVolume: 250 },

  // Batu Kawa (26-29)
  { id: 26, keyword: 'aircond service batu kawa', category: 'Batu Kawa', targetUrl: '/areas/batu-kawa', intent: 'Geo-Transactional', monthlyVolume: 580 },
  { id: 27, keyword: 'aircond repair mjc batu kawa', category: 'Batu Kawa', targetUrl: '/areas/batu-kawa', intent: 'Geo-Transactional', monthlyVolume: 320 },
  { id: 28, keyword: 'chemical overhaul aircond batu kawa', category: 'Batu Kawa', targetUrl: '/areas/batu-kawa', intent: 'Geo-Transactional', monthlyVolume: 210 },
  { id: 29, keyword: 'servis aircond batu kawa kuching', category: 'Batu Kawa', targetUrl: '/areas/batu-kawa', intent: 'Geo-Transactional', monthlyVolume: 410 },

  // Petra Jaya (30-33)
  { id: 30, keyword: 'aircond service petra jaya', category: 'Petra Jaya', targetUrl: '/areas/petra-jaya', intent: 'Geo-Transactional', monthlyVolume: 610 },
  { id: 31, keyword: 'servis aircond petra jaya kuching', category: 'Petra Jaya', targetUrl: '/areas/petra-jaya', intent: 'Geo-Transactional', monthlyVolume: 490 },
  { id: 32, keyword: 'chemical wash aircond petra jaya', category: 'Petra Jaya', targetUrl: '/areas/petra-jaya', intent: 'Geo-Transactional', monthlyVolume: 280 },
  { id: 33, keyword: 'baiki aircond petra jaya', category: 'Petra Jaya', targetUrl: '/areas/petra-jaya', intent: 'Geo-Transactional', monthlyVolume: 220 },

  // Matang (34-37)
  { id: 34, keyword: 'aircond service matang kuching', category: 'Matang', targetUrl: '/areas/matang', intent: 'Geo-Transactional', monthlyVolume: 540 },
  { id: 35, keyword: 'servis aircond metrocity matang', category: 'Matang', targetUrl: '/areas/matang', intent: 'Geo-Transactional', monthlyVolume: 380 },
  { id: 36, keyword: 'aircond repair matang jaya', category: 'Matang', targetUrl: '/areas/matang', intent: 'Geo-Transactional', monthlyVolume: 290 },
  { id: 37, keyword: 'pasang aircond matang kuching', category: 'Matang', targetUrl: '/areas/matang', intent: 'Geo-Transactional', monthlyVolume: 210 },

  // Stampin & Tabuan (38-42)
  { id: 38, keyword: 'aircond service stampin kuching', category: 'Stampin & Tabuan', targetUrl: '/areas/stampin', intent: 'Geo-Transactional', monthlyVolume: 460 },
  { id: 39, keyword: 'aircond servicing tabuan tranquility', category: 'Stampin & Tabuan', targetUrl: '/areas/tabuan', intent: 'Geo-Transactional', monthlyVolume: 390 },
  { id: 40, keyword: 'aircond repair bdc kuching', category: 'Stampin & Tabuan', targetUrl: '/areas/stampin', intent: 'Geo-Transactional', monthlyVolume: 280 },
  { id: 41, keyword: 'chemical wash aircond gala city', category: 'Stampin & Tabuan', targetUrl: '/areas/stampin', intent: 'Geo-Transactional', monthlyVolume: 250 },
  { id: 42, keyword: 'aircond service vivacity residences', category: 'Stampin & Tabuan', targetUrl: '/areas/tabuan', intent: 'Geo-Transactional', monthlyVolume: 210 },

  // Long-Tail Intent (43-50)
  { id: 43, keyword: 'aircond leaking water repair kuching', category: 'Long-Tail Intent', targetUrl: '/services/repair', intent: 'Transactional', monthlyVolume: 590 },
  { id: 44, keyword: 'aircond blow warm air kuching', category: 'Long-Tail Intent', targetUrl: '/services/repair', intent: 'Transactional', monthlyVolume: 480 },
  { id: 45, keyword: 'aircond flashing light error code kuching', category: 'Long-Tail Intent', targetUrl: '/services/repair', intent: 'Informational', monthlyVolume: 310 },
  { id: 46, keyword: 'aircond chemical wash price list kuching', category: 'Long-Tail Intent', targetUrl: '/pricing', intent: 'Commercial', monthlyVolume: 620 },
  { id: 47, keyword: 'how often to service aircond in sarawak', category: 'Long-Tail Intent', targetUrl: '/blog/service-frequency-sarawak', intent: 'Informational', monthlyVolume: 270 },
  { id: 48, keyword: 'aircond smell bad after turn on kuching', category: 'Long-Tail Intent', targetUrl: '/blog/aircond-smell-mold-removal', intent: 'Informational', monthlyVolume: 230 },
  { id: 49, keyword: 'difference between general service and chemical wash kuching', category: 'Long-Tail Intent', targetUrl: '/pricing', intent: 'Informational', monthlyVolume: 340 },
  { id: 50, keyword: 'contractor aircond berlesen sarawak cidb', category: 'Long-Tail Intent', targetUrl: '/about', intent: 'Commercial', monthlyVolume: 190 }
];
