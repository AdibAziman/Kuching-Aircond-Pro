# Technical Architecture & Engineering Specifications
**Client:** Kuching Aircond Pro  
**Technology Stack:** React 19, TypeScript, Vite 8, Tailwind CSS v4, Motion (Framer Motion)  
**Target Environment:** Web Production SPA / PWA Ready  
**Prepared By:** Frontend Architect & Lead Engineer  

---

## 1. Executive Technical Summary

The web application for **Kuching Aircond Pro** is engineered to combine sub-second page loads with high-conversion interactivity. Engineered on Vite 8 and React 19, it avoids unnecessary client bundle bloat while providing rich interactive features:
- Real-time Instant Cost & Service Package Estimator with instant WhatsApp link generator
- Interactive Before & After Coil Transformation Slider with touch/drag support
- Certified Technician ID & Credential Verification Registry
- Multi-Zone Coverage Navigator with live ETA calculations
- Schema.org `HVACBusiness` JSON-LD structured data for Google Rich Results
- Dual View Mode: **Live Consumer Web Application** and **Agency Strategy Portal** for full client deliverable transparency

---

## 2. Directory & Component Architecture

```
/
├── index.html                  # SEO Meta, Schema.org LocalBusiness JSON-LD, Typography
├── metadata.json               # Platform identity and capabilities
├── package.json                # Dependencies & build scripts
├── tsconfig.json               # Strict TypeScript configuration
├── vite.config.ts              # Vite 8 with Tailwind v4 & React plugin
├── docs/                       # Agency Strategy & Client Deliverables (9 Core Documents)
│   ├── business-analysis.md
│   ├── customer-personas.md
│   ├── competitor-analysis.md
│   ├── seo-strategy.md
│   ├── branding-guide.md
│   ├── conversion-strategy.md
│   ├── content-strategy.md
│   ├── technical-architecture.md
│   └── project-roadmap.md
└── src/
    ├── main.tsx                # React DOM root entry
    ├── index.css               # Tailwind CSS v4 import, font definitions, scrollbar styles
    ├── types/
    │   └── index.ts            # Type definitions: Service, Area, Technician, Review, CalculatorState
    ├── data/
    │   ├── services.ts         # Service menu data with transparent RM rates & checklists
    │   ├── areas.ts            # 6 Kuching Metropolitan coverage zones with dispatch times
    │   ├── technicians.ts      # 8 certified technicians with CIDB IDs, specialties, experience
    │   ├── reviews.ts          # Authentic customer reviews mapped to Kuching localities
    │   ├── faqs.ts             # Comprehensive FAQ entries addressing objections
    │   └── keywords.ts         # 50 Local SEO keywords dataset with search volume and intent
    ├── components/
    │   ├── layout/
    │   │   ├── Navbar.tsx      # Top Bar Contract (3 zones, single text wordmark, no badge pills)
    │   │   └── Footer.tsx      # Quiet corporate footer, SSM details, Google Maps NAP schema
    │   ├── sections/
    │   │   ├── Hero.tsx        # High-impact value proposition, instant booking CTA
    │   │   ├── TrustBar.tsx    # 4 Core Pillars (Zero hidden fees, 30-day warranty, CIDB cert)
    │   │   ├── Services.tsx    # Transparent RM Pricing Cards & Service Breakdown
    │   │   ├── Calculator.tsx  # Interactive Price Estimator & Instant WhatsApp Generator
    │   │   ├── BeforeAfter.tsx # Interactive comparison slider of coil chemical restoration
    │   │   ├── ServiceAreas.tsx# Coverage Zone Matrix with zero travel surcharge commitment
    │   │   ├── Technicians.tsx # The 8 Certified Technicians registry with CIDB badges
    │   │   ├── Reviews.tsx     # Verified customer proof & case studies by neighborhood
    │   │   └── FAQSection.tsx  # Accordion answering customer anxieties & SESCO tariffs
    │   ├── modals/
    │   │   ├── BookingModal.tsx# Step-by-step dispatch scheduling wizard
    │   │   └── WhatsAppModal.tsx# Pre-populated WhatsApp instant dispatch generator
    │   └── agency/
    │       └── AgencyPortal.tsx# In-app RM8,000 Client Delivery & Strategy Deck Viewer
    └── App.tsx                 # Master state, view toggling, smooth scrolling & modals
```

---

## 3. SEO, Schema & Social Card Strategy

1. **Pre-Rendered HTML Tags:** Title, meta descriptions, OpenGraph (`og:title`, `og:image`, `og:type`), and Twitter Cards configured in `index.html`.
2. **Schema.org Structured Data:** Embedded `<script type="application/ld+json">` declaring:
   - `@type`: `HVACBusiness` & `LocalBusiness`
   - `name`: "Kuching Aircond Pro"
   - `telephone`: `+60189728411`
   - `priceRange`: `RM 60 - RM 280`
   - `address`: `Lot 284, Ground Floor, Jalan Tun Jugah, Kuching, Sarawak`
   - `areaServed`: Kuching, Kota Samarahan, Batu Kawa, Petra Jaya, Matang, Stampin
   - `geo`: Latitude `1.5186`, Longitude `110.3542`
   - `openingHoursSpecification`: Mon–Sat 08:00–18:30, Sun 09:00–16:00
   - `hasOfferCatalog`: Itemized offers with MYR currency codes.

---

## 4. Performance & Core Web Vitals (CWV) Targets

- **Largest Contentful Paint (LCP):** `< 1.2s` (Achieved by zero heavy external font CDNs, zero uncompressed raster assets, and lightweight SVG icons).
- **Cumulative Layout Shift (CLS):** `0.00` (All containers, images, and interactive sliders have explicit aspect ratios and reserved layout dimensions).
- **Interaction to Next Paint (INP):** `< 50ms` (Lightweight React 19 event listeners, zero render-blocking scripts).
- **Bundle Footprint:** Minified JavaScript `< 90KB gzipped` including Framer Motion and Lucide React.

---

## 5. Accessibility (WCAG 2.1 AA) Compliance

1. **Color Contrast:** All body text maintains $\ge 4.5:1$ contrast against light background; large headings maintain $\ge 3:1$ contrast.
2. **Focus Rings:** Visible, accessible keyboard focus indicators (`focus-visible:ring-2 focus-visible:ring-sky-500`).
3. **Touch Targets:** All clickable interactive controls exceed $44 \times 44\text{px}$ for comfortable one-handed mobile operation.
4. **Accessible Forms:** All inputs use explicit `<label>` associations, `aria-required`, and accessible validation status announcements.
5. **Reduced Motion:** Respects `prefers-reduced-motion: reduce` for all layout transitions.

---

## 6. Mobile Optimization & Thumb-Zone Ergonomics

- **Sticky Emergency Bar:** Fixed bottom mobile action bar containing one-tap WhatsApp Dispatch and Instant Call buttons, capped at $< 60\text{px}$ (conforming to the 15% mobile sticky height limit).
- **WhatsApp Deep-Linking:** Automatically invokes `whatsapp://send` on mobile devices with fallback to `https://wa.me/` on desktop.
- **Swipeable Carousels & Sliders:** Touch-friendly slider components with smooth drag momentum and zero layout shifting.
