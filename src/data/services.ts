import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'general-service',
    name: 'General Servicing & Filter Cleaning',
    category: 'residential',
    basePrice: 60,
    priceDisplay: 'From RM 60 / unit',
    duration: '30 - 45 mins',
    recommendedFor: 'Units serviced within the last 3-4 months with light dust accumulation',
    description: 'Basic preventive maintenance to keep airflow unobstructed, remove surface allergens, prevent water backflow, and verify compressor electrical draw.',
    checklist: [
      'High-pressure chemical rinse of anti-bacterial nylon filters',
      'Front cover plastic fascia wipe-down and sanitization',
      'Evaporator coil surface dust vacuum extraction',
      'Drainage pipe high-pressure vacuum flush to clear early sediment',
      'Operating electrical current (Amps) and voltage inspection',
      'Infrared remote control sensor & cooling cycle calibration test'
    ],
    symptoms: [
      'Airflow feels slightly weaker than usual',
      'Room takes 15-20 minutes longer to reach comfortable coolness',
      'Electricity bill gradually increasing over the last quarter',
      'It has been 3 to 4 months since the last maintenance check'
    ],
    steps: [
      'Pre-service temperature differential & operational amp test',
      'Disassembly of front fascia and filter extraction',
      'High-pressure sanitization of dust filter screens',
      'Vacuum clearing of evaporator face and condensate drain nipple',
      'High-pressure water flush of internal drainage line',
      'Post-assembly louver sweep test and temperature log'
    ],
    pricingTiers: [
      { hp: '1.0 HP', price: 60, notes: 'Standard bedroom wall-mount' },
      { hp: '1.5 HP', price: 70, notes: 'Master bedroom / small living' },
      { hp: '2.0 HP', price: 90, notes: 'Standard living hall' },
      { hp: '2.5 HP', price: 110, notes: 'Large open-concept living' }
    ]
  },
  {
    id: 'chemical-wash',
    name: 'In-Situ Chemical Wash',
    category: 'residential',
    basePrice: 130,
    priceDisplay: 'From RM 130 / unit',
    duration: '60 - 75 mins',
    recommendedFor: 'Units blowing weak air, unpleasant musty smell, or unwashed for 6-9 months',
    isPopular: true,
    description: 'Deep foaming treatment that dissolves hardened dirt, mold, and bacterial bio-slime from deep inside the aluminum fins without unmounting from the wall.',
    checklist: [
      'Heavy-duty 3-meter waterproof shroud catch-bag protection for walls and floors',
      'Fin-safe non-acidic bio-alkaline foaming coil cleanser application',
      'Cross-flow fan blower wheel high-pressure blast & fungal slime clearance',
      'Condensate drainage pan deep sterilization and anti-microbial flush',
      'Outdoor condenser coil high-pressure debris rinse',
      'Post-service Delta-T temperature drop test (target: 14°C - 16°C output)'
    ],
    symptoms: [
      'Musty, sour, or damp odor when the air conditioner turns on',
      'Black specks or fungal dust blowing out through the louvers',
      'Fan blower wheel has visible thick layer of caked lint and dust',
      'Water droplets spitting occasionally from the air outlet'
    ],
    steps: [
      'Site preparation: Waterproof floor tarpaulin and electronic PCB insulation wrap',
      'Mounting of heavy-duty sealed catchment bag with drain tube',
      'Deep application of non-acidic alkaline coil foaming solvent',
      'Dwell time of 10-15 minutes allowing bio-foam to break down biological sludge',
      'High-pressure water blast through coil fins and blower rotor vanes',
      'Condensate tray decontamination and outdoor condenser coil wash',
      'Delta-T verification: Vent temperature measured at 14°C - 16°C'
    ],
    pricingTiers: [
      { hp: '1.0 HP', price: 130, notes: 'Most popular residential choice' },
      { hp: '1.5 HP', price: 140, notes: 'RM10 multi-unit discount for 3+ units' },
      { hp: '2.0 HP', price: 160, notes: 'Includes outdoor condenser wash' },
      { hp: '2.5 HP', price: 180, notes: 'Includes outdoor condenser wash' }
    ]
  },
  {
    id: 'chemical-overhaul',
    name: 'Full Chemical Overhaul',
    category: 'residential',
    basePrice: 180,
    priceDisplay: 'From RM 180 / unit',
    duration: '90 - 120 mins',
    recommendedFor: 'Heavily choked units, severe water dripping, or neglected for 12+ months',
    description: 'The complete mechanical renewal. The entire indoor unit is disassembled from the wall, stripped component-by-component, and immersed in chemical wash for 100% eradication of deep mold and gelatinous sludge.',
    checklist: [
      'Complete unit dismounting and separation from wall bracket',
      'Evaporator coil full chemical immersion tank bath',
      'Blower wheel rotor extraction, bearing inspection & lubrication',
      'Comprehensive drain tray and back-channel biofilm eradication',
      'Electrical PCB circuit insulation, contact tightening & terminal check',
      'Re-installation with 30-Day Unconditional Workmanship Warranty'
    ],
    symptoms: [
      'Water continuously dripping or pouring down the interior drywall',
      'Aircond has not had a deep chemical wash for 1 to 2 years',
      'Compressor running loudly while indoor air barely cools',
      'Severe mold odor triggering coughing or allergies in the household'
    ],
    steps: [
      'Safe refrigerant isolation and electrical disconnection',
      'Complete dismounting of the indoor unit from wall bracket',
      'Component breakdown: coil matrix, blower wheel, drain tray, PCB housing',
      'Full chemical tank soaking of evaporator coil matrix',
      'Blower fan shaft bearing lubrication and high-pressure rotor wash',
      'Back-channel drainage tray biofilm removal',
      'Re-mounting, vacuum pump check, and test run with 30-day warranty'
    ],
    pricingTiers: [
      { hp: '1.0 HP', price: 180, notes: '30-Day Workmanship Warranty included' },
      { hp: '1.5 HP', price: 190, notes: 'Full dismantle and tank soak' },
      { hp: '2.0 HP', price: 220, notes: 'Heavy duty living hall unit' },
      { hp: '2.5 HP', price: 250, notes: 'Commercial/Residential multi-split' }
    ]
  },
  {
    id: 'gas-refill',
    name: 'Refrigerant Diagnostic & Gas Top-Up',
    category: 'specialized',
    basePrice: 80,
    priceDisplay: 'From RM 80',
    duration: '30 mins',
    recommendedFor: 'Units running continuously without producing cold air',
    description: '100% honest gas diagnosis. We test pressure using a digital manifold gauge in front of you. If PSI is normal, you pay RM0 for gas.',
    checklist: [
      'Digital manifold pressure readout shown to customer prior to service',
      'R32 Refrigerant top-up: RM 80 - RM 120 (depending on PSI needed)',
      'R410A Inverter Refrigerant top-up: RM 90 - RM 130',
      'R22 Legacy Refrigerant top-up: RM 70 - RM 100',
      'Soap bubble flare joint leak diagnostic test included',
      'Compressor running current and thermal cutoff inspection'
    ],
    symptoms: [
      'Indoor unit blows room-temperature or lukewarm air despite 16°C setting',
      'Ice formation or white frost on outdoor brass service valves',
      'Hissing sounds near indoor or outdoor flare connections',
      'Compressor short-cycles on and off every few minutes'
    ],
    steps: [
      'Connection of digital manifold gauge to service port',
      'Verification of standing and operating suction/head pressures',
      'Disclosure of exact PSI reading to customer against manufacturer spec',
      'Nitrogen or bubble leak check on flare nuts and copper joints',
      'Precision weight-based or PSI refrigerant recharge (R32 / R410A / R22)',
      'Verification of subcooling/superheat and running amps'
    ],
    pricingTiers: [
      { hp: 'R32 Gas', price: 80, notes: 'Modern Inverters (Daikin/Panasonic)' },
      { hp: 'R410A Gas', price: 90, notes: 'Inverter Eco systems' },
      { hp: 'R22 Gas', price: 70, notes: 'Legacy non-inverter systems' }
    ]
  },
  {
    id: 'installation',
    name: 'Inverter Aircond Installation',
    category: 'residential',
    basePrice: 220,
    priceDisplay: 'From RM 220',
    duration: '2 - 3 hours',
    recommendedFor: 'New split units (Daikin, Panasonic, Midea, Acson, Mitsubishi)',
    description: 'Certified back-to-back installation using premium 0.71mm thick copper piping, Armaflex insulation, and full vacuum evacuation.',
    checklist: [
      'SIRIM-certified heavy-gauge 0.71mm copper piping up to 10 feet',
      'Class 1 Armaflex closed-cell fire-retardant pipe insulation',
      'Heavy-duty galvanized outdoor compressor wall bracket',
      'Full two-stage vacuum pump moisture extraction before gas release',
      'Dedicated PVC water drainage pipe connection',
      '12-Month Installation Workmanship Guarantee'
    ],
    symptoms: [
      'Purchased a new aircond unit from Shopee, Senheng, or local dealer',
      'Relocating existing unit from old house or room to a new location',
      'Replacing an old damaged copper piping system prone to repeated leaks'
    ],
    steps: [
      'Laser level alignment of indoor mounting plate',
      'Core drilling of 65mm wall sleeve with downward drainage slope',
      'Flaring of 0.71mm copper tubing with hydraulic flaring tool',
      'Mounting outdoor bracket with heavy-duty sleeve anchors',
      'Nitrogen pressure test and 20-minute vacuum pump dehydration',
      'Opening service valves, testing drainage flow, and client handover'
    ],
    pricingTiers: [
      { hp: '1.0 HP', price: 220, notes: 'Back-to-back with 10ft copper' },
      { hp: '1.5 HP', price: 250, notes: 'Includes bracket & piping' },
      { hp: '2.0 HP', price: 320, notes: 'Heavy duty outdoor mounting' },
      { hp: '2.5 HP', price: 380, notes: 'Complete circuit breaker wiring' }
    ]
  },
  {
    id: 'commercial-service',
    name: 'Commercial Ceiling Cassette Servicing',
    category: 'commercial',
    basePrice: 190,
    priceDisplay: 'From RM 190 / unit',
    duration: '75 - 90 mins',
    recommendedFor: 'Offices, Kopitiams, Restaurants, Retail Outlets, Clinics',
    description: 'Heavy-duty maintenance for 4-way and round-flow ceiling cassette air conditioners. Handles kitchen grease, high dust load, and off-peak scheduling.',
    checklist: [
      'Ceiling panel dismantle and deep pressure wash of intake louvers',
      'Drain pump mechanism and float switch diagnostic inspection',
      'Condensate drain line high-pressure chemical clear (prevents ceiling water damage)',
      'High-pressure chemical treatment of multi-sided cassette coil matrix',
      'Flexible scheduling: Early morning (6:30 AM) or night slots available',
      'Corporate SST e-Invoice and official preventive maintenance logsheet'
    ],
    symptoms: [
      'Ceiling tiles showing water stains or dripping water onto tables',
      'Commercial F&B customers complaining the dining hall is stuffy or warm',
      'Kitchen fumes or oil coating the ceiling air vents',
      'High monthly SESCO commercial tariff electricity bills'
    ],
    steps: [
      'Off-peak scheduling setup and floor protective drop cloths',
      'Ceiling cassette intake grille and filter extraction',
      'Waterproof shroud bag attachment to ceiling frame',
      'High-pressure chemical wash of 4-way coil surfaces',
      'Drainage pump and float switch testing with clean water feed',
      'Panel wipe-down, current measurement, and corporate sign-off'
    ],
    pricingTiers: [
      { hp: '2.0 HP - 2.5 HP', price: 190, notes: '4-Way Ceiling Cassette' },
      { hp: '3.0 HP - 3.5 HP', price: 230, notes: 'Commercial F&B Grade' },
      { hp: '4.0 HP - 5.0 HP', price: 280, notes: 'Large open hall / Kopitiam' },
      { hp: 'Quarterly Retainer', price: 160, notes: 'Per unit rate for contract clients' }
    ]
  }
];
