# TMR Car Care Digital Flagship — Design & Implementation Specification

> **Authoritative Specification Document**
> Extracted directly from Stitch MCP Project `projects/5044491746975371058` and official `designMd` / `designTheme` definitions.
> **Note on Accuracy**: All values match Stitch parameters. Where Stitch does not provide an exact quantitative parameter, it is explicitly flagged as `IMPLEMENTATION DECISION REQUIRED`.

---

## 1. Executive Summary & Brand Identity
* **Brand Name**: TMR Car Care
* **Location**: Tiruppur, Tamil Nadu, India
* **Website Type**: Premium Automotive Care & Detailing Digital Flagship
* **Core Design Direction**: Brutalist Editorial + Premium Automotive + Cinematic Motion
* **Target Audience**: Car owners in Tiruppur and surrounding regions seeking premium automotive care.
* **Primary Conversion Goals**: WhatsApp enquiries, phone calls, workshop/showroom visits.
* **Brand Feel**: Premium, confident, technical, precise, cinematic, editorial, modern, trustworthy.
* **Styling Directives to Avoid**: Generic car-wash templates, SaaS layouts, ecommerce checkout styling, black-and-gold luxury clichés, excessive cards, excessive rounded corners, excessive glassmorphism, 3D/Spline elements.

---

## 2. Master Design Tokens & System

### 2.1 Color Tokens
The color palette balances structural contrast with signature brand accents.

* **Primary Brand Orange**: `#FF4B00` (Accents, section labels, active states, numbers, motion indicators)
* **Black**: `#050505` (Primary dark sections, footer, final CTA panels)
* **Soft Black**: `#111111` (Surfaces, secondary dark sections)
* **Warm White**: `#F5F4EF` (Primary page background, editorial light sections)
* **White**: `#FFFFFF` (Cards, elevated contrast sections)
* **Concrete Grey**: `#D8D8D5` (Borders, inactive UI, subtle surfaces)
* **Muted Grey**: `#858585` (Secondary text, metadata)
* **Surface Background Base**: `#fff8f6`
* **Surface Dim**: `#f3d3ca`
* **Surface Container Lowest**: `#ffffff`
* **Surface Container Low**: `#fff1ed`
* **Surface Container**: `#ffe9e4`
* **Surface Container High**: `#ffe2da`
* **Surface Container Highest**: `#fcdcd3`
* **Primary Token**: `#aa2f00` / `#d53d00`
* **Secondary Token**: `#5f5e5e`
* **Tertiary Token**: `#005da8`
* **Error Token**: `#ba1a1a`
* **Outline**: `#916f66`
* **Outline Variant**: `#e6beb2`

#### Color Ratios Target
* **55%**: White / Warm White (`#F5F4EF` / `#FFFFFF`)
* **25%**: Black / Soft Black (`#050505` / `#111111`)
* **15%**: TMR Orange (`#FF4B00`)
* **5%**: Grey (`#D8D8D5` / `#858585`)

### 2.2 Typography Specification
* **Primary Typeface**: `Manrope` (Sans-Serif)
  * **Weights**: 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold), 800 (ExtraBold)
* **Editorial Typeface**: `Instrument Serif` (Serif)
  * **Weights**: 400 (Regular) — Used sparingly for emotional statements & editorial emphasis.

#### Type Hierarchy & Scales (Stitch Authoritative)
* **Display XL**: `Manrope`, Size: `80px`, Weight: `800`, Line-Height: `1.1`, Letter-Spacing: `-0.02em`
* **Headline LG**: `Manrope`, Size: `48px`, Weight: `700`, Line-Height: `1.2`
* **Headline LG Mobile**: `Manrope`, Size: `36px`, Weight: `700`, Line-Height: `1.2`
* **Editorial Statement**: `Instrument Serif`, Size: `40px`, Weight: `400`, Line-Height: `1.3`
* **Body LG**: `Manrope`, Size: `18px`, Weight: `400`, Line-Height: `1.6`
* **Body MD**: `Manrope`, Size: `16px`, Weight: `400`, Line-Height: `1.6`
* **Label Bold**: `Manrope`, Size: `14px`, Weight: `700`, Line-Height: `1.2`, Letter-Spacing: `0.05em`
* **Nav Link**: `Manrope`, Size: `15px`, Weight: `600`, Line-Height: `1.2`
* **Small-Label Scale**: Size: `12px` - `14px`, Weight: `600` / `700`, Uppercase, Letter-Spacing: `0.05em`

### 2.3 Spacing Scale & Container Metrics
* **Desktop Reference Width**: `1440px` (Screens built at `2560px` canvas resolution)
* **Max Content Width**: `1280px` - `1360px`
* **Grid Columns**: 12 Columns (Desktop)
* **Desktop Margin**: `64px`
* **Mobile Margin**: `20px`
* **Grid Gutter**: `24px`
* **Section Gap**: `160px`
* **Spacing Scale Multiplier**: `2` (Stitch Token)

---

## 3. Structural & Component Patterns

### 3.1 Desktop Layout Behavior
* Asymmetric column splits (e.g., 5-column content / 7-column media).
* Wide right-side margins with flush-left typography.
* Off-grid element placements and large image crops.
* Varied section rhythms avoiding uniform grid repetition.

### 3.2 Mobile Layout Intent
* Vertical single-column stacking for asymmetric desktop rows.
* Touch-optimized full-width tap targets.
* Collapse main navigation into a fullscreen modal menu.
* Floating bottom-anchored WhatsApp action button.

### 3.3 Navigation Structure
* **Brand Logo**: TMR Car Care (Brutalist Manrope 800)
* **Desktop Links**: TMR (Home), Services, Products, Gallery, About, Contact
* **Primary Action Trigger**: Call Now (`tel:`) + WhatsApp Enquiry (`https://wa.me/`)
* **Navbar States**: Transparent overlay on top hero; solid `#050505` or `#F5F4EF` with subtle blur when scrolled.

### 3.4 Footer Structure
* **Top Row**: TMR Brand Manifesto statement + Quick Jump Links.
* **Middle Row**: Workshop Address (Tiruppur, Tamil Nadu), Phone numbers, Operating Hours.
* **Bottom Row**: Copyright notice + Local SEO metadata + Direct WhatsApp CTA.

### 3.5 Button Variants
* **Primary Button**: Background `#050505`, Text `#FFFFFF`, Hover accent detail `#FF4B00`. Fast opacity/transform transition.
* **Secondary Button**: Background Transparent, Border `#050505`, Text `#050505`, Hover background `#050505`, text `#FFFFFF`.
* **WhatsApp Action Button**: Background `#FF4B00` or `#25D366` (Green), Text `#FFFFFF`, Icon: WhatsApp logo.

### 3.6 Link & UI Treatments
* **Link Treatment**: Underline shift on hover with `#FF4B00` color transition.
* **Section Label Treatment**: Small uppercase Manrope Bold + TMR Orange (`#FF4B00`) dot/prefix.
* **Numbering Treatment**: Large section index numbers (`01`, `02`, `03`) in `#FF4B00` or `#858585`.
* **Divider/Rule Treatment**: Strong 1px horizontal rules in `#D8D8D5` or `#111111`.
* **Border Treatment**: Clean, sharp corners (0px to 4px max roundness). Avoid heavy rounded bubbles.
* **Image Aspect-Ratio Patterns**: 16:9 (Hero cinematic), 4:3 (Service details), 1:1 (Product tiles), 3:4 (Editorial portrait).
* **Light/Dark Section Rhythm**: Alternating Warm White (`#F5F4EF`) and Soft Black (`#111111` / `#050505`) sections.

---

## 4. Master Page Architecture

```
HOME
SERVICES INDEX
├── CAR WASH & CLEANING
├── DETAILING & PAINT CARE
├── CERAMIC COATING
├── PPF & PAINT PROTECTION
├── SUN-CONTROL FILMS
└── CAR ACCESSORIES
PRODUCTS
└── PRODUCT DETAIL TEMPLATE
GALLERY
ABOUT
CONTACT
```

---

## 5. Page-by-Page Specifications (13 Authoritative Screens)

### 5.1 HOME
* **SCREEN ID**: `7ac430f9bc72461e96010cf3728d0458`
* **PAGE ROLE**: Flagship entry point, brand positioning, primary conversion gateway.
* **VISUAL IDENTITY**: Asymmetric hero with dark cinematic automotive photography, high contrast black/warm-white alternating blocks.
* **SECTION ORDER**:
  1. Hero (Cinematic vehicle reveal + headline + WhatsApp CTA)
  2. Brand Philosophy & Core Stats
  3. Service Spectrum Overview (Car Wash, Detailing, Ceramic, PPF, Sun-Control, Accessories)
  4. Interactive Work Showcase / Process Slider
  5. Product Vault Teaser
  6. Client Testimonials / Editorial Quotes
  7. Tiruppur Showroom Location & Contact CTA
  8. Footer
* **UNIQUE VISUAL LANGUAGE**: Asymmetric hero split, high-contrast section rhythm, large section index numbers (`01`, `02`).
* **SHARED COMPONENTS**: Navbar, Hero Banner, Service Card/Block, CTA Banner, Footer.
* **SPECIAL INTERACTIONS**:
  * DESIGN INTENT: Sticky overlay navbar on scroll.
  * DESIGN INTENT: Hero image scale/fade reveal on initial page load.
  * DESIGN INTENT: Hover state elevation on service cards.
* **RESPONSIVE NOTES**: Stacks asymmetric columns into single-column layout on mobile.

### 5.2 SERVICES INDEX
* **SCREEN ID**: `7b64d8f23de648d2acd82a5cb488d363`
* **PAGE ROLE**: Master catalogue and navigation hub for all 6 service categories.
* **VISUAL IDENTITY**: Editorial index layout, typography-first list rows with hover preview triggers.
* **SECTION ORDER**:
  1. Services Header & Index Statement
  2. 6 Major Service Category Blocks
  3. Service Selection Matrix / Guide
  4. Booking & WhatsApp Enquiry CTA
  5. Footer
* **UNIQUE VISUAL LANGUAGE**: Horizontal dividing lines, orange category index numbers, expanded features list.
* **SHARED COMPONENTS**: Navbar, Page Header, Service Category Card/Row, Contact CTA, Footer.
* **SPECIAL INTERACTIONS**:
  * DESIGN INTENT: Category row background shift on hover.
  * DESIGN INTENT: Category image preview reveal on hover.
* **RESPONSIVE NOTES**: Converts horizontal index rows into full-width tap cards on mobile.

### 5.3 CAR WASH & CLEANING
* **SCREEN ID**: `8ba1df5e722741a2bc83d5576382eb8c`
* **PAGE ROLE**: Service landing page for exterior washing, interior deep clean, foam decontamination.
* **VISUAL IDENTITY**: Technical automotive aesthetic, snow foam and wet-look imagery, structured service tiers.
* **SECTION ORDER**:
  1. Service Hero
  2. Technical Wash Process
  3. Package Comparison Tiers (Express Wash, Deep Interior Clean, Premium Foam Detail)
  4. Chemical Standards & Equipment
  5. FAQ Accordion
  6. Booking CTA
  7. Footer
* **UNIQUE VISUAL LANGUAGE**: Numbered process steps, technical specs table, clear package inclusions.
* **SHARED COMPONENTS**: Navbar, Service Hero, Package Comparison Table, FAQ Accordion, WhatsApp CTA, Footer.
* **SPECIAL INTERACTIONS**:
  * DESIGN INTENT: Package tier toggle/selector.
  * DESIGN INTENT: FAQ accordion expand/collapse.
* **RESPONSIVE NOTES**: Stacks comparison columns into vertical cards on mobile.

### 5.4 DETAILING & PAINT CARE
* **SCREEN ID**: `59cf85332b144768a0737b182a5bc4d9`
* **PAGE ROLE**: Dedicated service page for paint correction, swirl removal, interior restoration.
* **VISUAL IDENTITY**: High-contrast dark bay imagery, inspection light close-ups, precise technical process breakdown.
* **SECTION ORDER**:
  1. Page Hero (Inspection light close-up)
  2. Detailing Philosophy
  3. Paint Correction Stages (Stage 1, Stage 2, Heavy Correction)
  4. Package Details & Inclusions
  5. Transformation Showcase
  6. Consultation CTA
  7. Footer
* **UNIQUE VISUAL LANGUAGE**: Inspection light highlight accents, correction stage diagrams.
* **SHARED COMPONENTS**: Navbar, Service Hero, Stage Breakdown Grid, Transformation Showcase, CTA Section, Footer.
* **SPECIAL INTERACTIONS**:
  * DESIGN INTENT: Interactive before/after image slider.
  * DESIGN INTENT: Correction stage detail reveal on click/hover.
* **RESPONSIVE NOTES**: Touch-optimized before/after slider for mobile.

### 5.5 CERAMIC COATING
* **SCREEN ID**: `eaee791a6df14a24ad11c02c7299799e`
* **PAGE ROLE**: Flagship service page detailing 9H/10H ceramic coating protection, hydrophobic surface performance, multi-year warranties.
* **VISUAL IDENTITY**: Cinematic dark surfaces, macro water beading shots, deep gloss finish visuals.
* **SECTION ORDER**:
  1. Hero (Macro water beading on emerald/dark paint)
  2. Ceramic Coating Science & Benefits
  3. Coating Tiers (3-Year, 5-Year, 7-Year / 9H Shield)
  4. Application Process Steps
  5. Maintenance Guide & Warranty Info
  6. WhatsApp Consultation CTA
  7. Footer
* **UNIQUE VISUAL LANGUAGE**: Hydrophobic water-beading macro frames, 9H hardness badges, durability comparison chart.
* **SHARED COMPONENTS**: Navbar, Service Hero, Tier Pricing Cards, Feature Matrix, CTA Banner, Footer.
* **SPECIAL INTERACTIONS**:
  * DESIGN INTENT: Coating tier switcher tab.
  * DESIGN INTENT: Water-droplet micro-animation trigger.
* **RESPONSIVE NOTES**: Converts tier comparison matrix into swipeable or stacked cards on mobile.

### 5.6 PPF & PAINT PROTECTION
* **SCREEN ID**: `4dbc1251054746da9e9845181a16ec4c`
* **PAGE ROLE**: Premium protection page for Paint Protection Film (PPF) (Self-healing, Gloss, Matte, TPU film technology).
* **VISUAL IDENTITY**: Technical shield imagery, precision installation close-ups, sleek dark/grey tones with TMR Orange accents.
* **SECTION ORDER**:
  1. Hero ("Invisible Shield" theme)
  2. PPF Technology (TPU film, self-healing, stain resistance)
  3. Coverage Packages (Front Bumper, Full Front, Complete Vehicle Armor)
  4. Installation Precision Gallery
  5. FAQ & Warranty Details
  6. Instant Quote CTA
  7. Footer
* **UNIQUE VISUAL LANGUAGE**: Vehicle coverage zone diagrams (highlighting bumper, hood, fenders), film layer anatomy chart.
* **SHARED COMPONENTS**: Navbar, Hero Header, Zone Diagram Component, Package Cards, FAQ Accordion, Footer.
* **SPECIAL INTERACTIONS**:
  * DESIGN INTENT: Interactive vehicle coverage zone selector (highlighting covered panels on click).
  * DESIGN INTENT: Film self-healing visual demo intent.
* **RESPONSIVE NOTES**: Coverage zone selector converts to tap buttons on mobile.

### 5.7 SUN-CONTROL FILMS
* **SCREEN ID**: `338d5514aed0483da7af0c7c0445a0bd`
* **PAGE ROLE**: Specialized product & service page for automotive window sun-control films (IR heat rejection, UV block, ceramic tint).
* **VISUAL IDENTITY**: Architectural light & glass aesthetic, solar heat rejection charts, subtle gradient transparency visuals.
* **SECTION ORDER**:
  1. Hero Banner
  2. Solar Protection Benefits (99% UV block, IR heat rejection, privacy)
  3. Film Series Comparison (IR Ceramic Series, High-Rejection Series)
  4. Legal Tint Guidelines & Visibility Matrix
  5. Workshop Installation Standards
  6. WhatsApp Inquiry CTA
  7. Footer
* **UNIQUE VISUAL LANGUAGE**: Light transmission % badges (VLT/IR/UV metrics), glass reflections, thermal heat block diagrams.
* **SHARED COMPONENTS**: Navbar, Hero Banner, Spec Comparison Card, Legal Matrix, CTA, Footer.
* **SPECIAL INTERACTIONS**:
  * DESIGN INTENT: VLT tint darkness interactive slider/previewer.
  * DESIGN INTENT: Heat rejection metric comparison toggle.
* **RESPONSIVE NOTES**: Spec cards stack vertically with large readable metrics on mobile.

### 5.8 CAR ACCESSORIES
* **SCREEN ID**: `35ac24b9605c4b15a21b1d36b67464d4`
* **PAGE ROLE**: Editorial catalogue page presenting curated car accessories (floor mats, seat covers, ambient lighting, tech mounts).
* **VISUAL IDENTITY**: Editorial magazine catalogue layout, tactile product close-ups, warm white and soft black background grid.
* **SECTION ORDER**:
  1. Header & Category Statement
  2. Accessory Categories (Interior Comfort, Styling, Tech Accessories, Utility & Care)
  3. Featured Accessories Grid
  4. Material & Craftsmanship Highlight
  5. Enquire & Custom Fitting CTA
  6. Footer
* **UNIQUE VISUAL LANGUAGE**: Asymmetric catalogue grid, large product photography crops, subtle orange label badges.
* **SHARED COMPONENTS**: Navbar, Catalogue Grid, Category Filter Pills, Enquiry CTA, Footer.
* **SPECIAL INTERACTIONS**:
  * DESIGN INTENT: Category filter animation.
  * DESIGN INTENT: Product tile hover zoom.
* **RESPONSIVE NOTES**: Converts to 2-column grid on mobile with horizontal scroll filter bar.

### 5.9 PRODUCTS
* **SCREEN ID**: `0c6f9d48bab24aa1af40b560d70506af`
* **PAGE ROLE**: Flagship catalogue page ("The Product Vault") showcasing car care chemical formulations, waxes, microfiber, detailer tools.
* **VISUAL IDENTITY**: Vault/Exhibition concept, dark monolithic aesthetic, technical chemical bottle photography, editorial grid hierarchy.
* **SECTION ORDER**:
  1. Vault Hero Banner
  2. Purpose Filter (Wash, Polish, Protect, Maintain)
  3. Product Grid (Shampoos, Microfiber, Waxes, Detail Sprays, Ceramic Maintenance)
  4. Product Source & Quality Assurance
  5. WhatsApp Order / Inquiry Banner
  6. Footer
* **UNIQUE VISUAL LANGUAGE**: Product item cards with SKU/Purpose tags, dark surface containers, brutalist typography headers.
* **SHARED COMPONENTS**: Navbar, Vault Header, Filter Bar, Product Card, Inquiry CTA Banner, Footer.
* **SPECIAL INTERACTIONS**:
  * DESIGN INTENT: Instant category filtering without page reload.
  * DESIGN INTENT: Card hover elevation.
* **RESPONSIVE NOTES**: Responsive grid scales from 4 columns (desktop) to 1 column (mobile).

### 5.10 PRODUCT DETAIL TEMPLATE
* **SCREEN ID**: `63ccc709e346418baac7511300f456ee`
* **PAGE ROLE**: Standardized template page for inspecting an individual product's detailed specifications, usage guide, and availability.
* **VISUAL IDENTITY**: Studio product photography highlight, clean technical spec table, high contrast buy/enquire CTAs.
* **SECTION ORDER**:
  1. Breadcrumb Navigation
  2. Product Showcase Split (Gallery Left / Specs Right)
  3. Key Benefits & Application Instructions
  4. Technical Specifications Table
  5. Recommended Companion Products
  6. Direct WhatsApp Inquiry CTA
  7. Footer
* **UNIQUE VISUAL LANGUAGE**: Product image gallery with thumb switcher, step-by-step application instructions list, WhatsApp direct order button.
* **SHARED COMPONENTS**: Navbar, Breadcrumb, Product Gallery, Spec Table, Related Products Rail, Footer.
* **SPECIAL INTERACTIONS**:
  * DESIGN INTENT: Image thumbnail gallery switcher.
  * DESIGN INTENT: Application steps tab toggle.
* **RESPONSIVE NOTES**: Product images stack above product specs on mobile.

### 5.11 GALLERY
* **SCREEN ID**: `7fabadd5528045d4b69bc2922f4c2352`
* **PAGE ROLE**: Comprehensive portfolio archive of completed car detailing projects, ceramic applications, PPF installs, workshop photos.
* **VISUAL IDENTITY**: Dark archive aesthetic, masonry/asymmetric image gallery grid, full-bleed vehicle photography.
* **SECTION ORDER**:
  1. Archive Header
  2. Filter Bar (All Works, Ceramic Coating, PPF, Detailing, Before & After)
  3. Extended Portfolio Grid
  4. Video / Motion Teaser Row
  5. Studio Visit CTA
  6. Footer
* **UNIQUE VISUAL LANGUAGE**: Variable image aspect ratios (16:9, 4:3, 1:1, 3:4), hover title overlays, high-contrast dark backdrop.
* **SHARED COMPONENTS**: Navbar, Gallery Filter, Portfolio Tile, Lightbox Modal (Implied), Footer.
* **SPECIAL INTERACTIONS**:
  * DESIGN INTENT: Lightbox zoom modal on image click.
  * DESIGN INTENT: Smooth layout re-grid on filter change.
* **RESPONSIVE NOTES**: Masonry grid converts to 2-column or 1-column mobile scroll stack.

### 5.12 ABOUT
* **SCREEN ID**: `6d7622933b6a4068963423a2254a7c7a`
* **PAGE ROLE**: Brand story page establishing TMR's technical authority, Tiruppur workshop heritage, detailing standards, and team craftsmanship.
* **VISUAL IDENTITY**: Editorial magazine layout, Instrument Serif pull quotes, warm white background, dark workshop environment photography.
* **SECTION ORDER**:
  1. Story Hero
  2. Brand Manifesto & Core Pillars
  3. The Tiruppur Detailing Studio Standard
  4. Equipment & Chemical Partners
  5. Quality Assurance Process
  6. Visit The Workshop CTA
  7. Footer
* **UNIQUE VISUAL LANGUAGE**: Large typography lead-ins, serif quote highlights, asymmetric text/image pairings, clean horizontal dividing lines.
* **SHARED COMPONENTS**: Navbar, Editorial Story Hero, Quote Card, Workshop Highlight, Location CTA, Footer.
* **SPECIAL INTERACTIONS**:
  * DESIGN INTENT: Scroll-triggered text reveal.
  * DESIGN INTENT: Image parallax reveal effect.
* **RESPONSIVE NOTES**: Single column editorial flow on mobile devices.

### 5.13 CONTACT
* **SCREEN ID**: `7a3eec179af54f258328071397b161bf`
* **PAGE ROLE**: Conversion and location page providing contact info, workshop address in Tiruppur, operating hours, phone/WhatsApp links, enquiry form.
* **VISUAL IDENTITY**: Architectural destination aesthetic, dark background panel, crisp typography, prominent WhatsApp and call buttons.
* **SECTION ORDER**:
  1. Contact Header ("The Destination / The Door Is Open")
  2. Direct Actions Bar (Call Now, WhatsApp Inquiry, Get Directions)
  3. Interactive Inquiry Form (Service selection, vehicle model, preferred date)
  4. Workshop Address, Operating Hours & Tiruppur Location Map
  5. FAQ Section
  6. Footer
* **UNIQUE VISUAL LANGUAGE**: Large contact phone/WhatsApp action cards, architectural facility photography, clear office hours list.
* **SHARED COMPONENTS**: Navbar, Action Cards, Contact Form, Location Map Embed, FAQ Accordion, Footer.
* **SPECIAL INTERACTIONS**:
  * DESIGN INTENT: Instant WhatsApp click-to-chat with pre-filled enquiry parameters.
  * DESIGN INTENT: Form field focus/validation state shifts.
* **RESPONSIVE NOTES**: Action buttons fixed at top/bottom on mobile for one-tap calling and messaging.

---

## 6. Asset Requirements & Classification

To ensure brand authenticity without using generic stock imagery, all visual elements across the 13 pages are classified into four mandatory asset buckets:

### 6.1 REAL TMR PHOTOGRAPHY
* **Workshop & Detailing Bays**: Physical TMR studio in Tiruppur, lighting rigs, snow foam bays, clean room for ceramic/PPF.
* **Team & Technicians**: TMR technicians in black uniform/gloves inspecting paint with LED inspection lights.
* **Showroom & Facility**: Architectural exterior and entrance shots ("The Door Is Open" night concept).

### 6.2 REAL 3M & PARTNER BRAND ASSETS
* **3M Sun-Control & PPF Films**: Authoritative product packaging, 3M logo certification badges, 3M film rolls, VLT/IR spec sheets.
* **Chemical Partner Logos**: Meguiar's, Koch Chemie, CarPro, Gyeon (as referenced in product vault and chemical standards).

### 6.3 CLIENT-APPROVED PRODUCT IMAGES
* **Product Vault Bottles**: High-resolution cutout shots of shampoos, wax tubs, ceramic spray bottles, microfiber towels, interior accessories.

### 6.4 PLACEHOLDERS (Temporary Web Development Use Only)
* **High-Fidelity SVG Placeholders**: Curated dark automotive silhouettes, vector zone diagrams for PPF coverage, aspect-ratio matched placeholder images styled in TMR colors (`#050505`, `#111111`, `#FF4B00`).

---

## 7. Implementation Compliance Confirmation
1. `DESIGN.md` created locally at root workspace.
2. Stitch design system inspected.
3. 13 authoritative final screens inspected.
4. Code implementation / React app generation NOT started.
