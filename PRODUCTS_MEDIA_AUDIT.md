# TMR AI CAR CARE — PRODUCTS PAGE FULL MEDIA + ASSET + COMPONENT FORENSIC AUDIT
**Diagnostic Only — Zero Code or Asset Modifications Made**
**Date**: August 23, 2026

---

## 1. EXACT PAGE RENDER TREE & SECTION MAP

The `/products` route is defined in [`src/App.tsx`](file:///c:/Users/balashanmugam/OneDrive/Desktop/Freelance/TMR/src/App.tsx#L32) (`<Route path="products" element={<ProductsPage />} />`) and renders the single page component [`ProductsPage`](file:///c:/Users/balashanmugam/OneDrive/Desktop/Freelance/TMR/src/pages/ProductsPage.tsx).

### Full Component & Section Render Hierarchy
```
App (src/App.tsx)
└── Layout (src/components/layout/Layout.tsx)
    ├── Navbar (src/components/layout/Navbar.tsx)
    └── ProductsPage (src/pages/ProductsPage.tsx)
        ├── Section 01 / HERO (Lines 180-239)
        ├── ProductHeroCarousel (src/components/ProductHeroCarousel.tsx, embedded on Line 213)
        ├── Section 02 / CATEGORY WORLDS (Lines 241 border-t to 309)
        ├── Section 03 / FEATURED PRODUCT (Lines 311 to 379, id="featured-product")
        ├── Section 04 / PRODUCT IN PRACTICE (Lines 381 to 435, id="product-runway")
        ├── Section 05 / TECHNICAL SPECIMEN DOSSIER (Lines 437 to 536)
        ├── Section 07 / PRODUCT COLLECTION CATALOGUE (Lines 538 to 675, id="product-catalogue")
        ├── VERIFIED SOURCES SECTION (Lines 677 to 713)
        ├── DISCOVER / FIND BY PURPOSE SECTION (Lines 715 to 774)
        ├── PRODUCT FAQ SECTION (Lines 776 to 823)
        └── FINAL CINEMATIC CTA SECTION (Lines 825 to 861)
```

---

## 2. COMPLETE MEDIA INVENTORY (EVERY IMAGE & VIDEO ON `/products`)

| Section | Purpose | Component / Element | Product / Category Associated | Type | Local Path / URL | File Size | Hash (SHA-256) | Used Elsewhere in Project? | New or Old? | Correct for Section? |
|---|---|---|---|---|---|---|---|---|---|---|
| **01 / Hero** | Central Studio Radial Glow | CSS `radial-gradient` overlay | Page Theme | Background | N/A (CSS inline) | N/A | N/A | No | N/A | YES |
| **01 / Hero Runway** | Product Card 1 | `ProductHeroCarousel` (`<img>`) | 3M™ Perfect-It™ EX AC Rubbing Compound | Image | `/images/products/3m/3m-perfect-it-ex-rubbing-compound.jpg` | 18,457 B | `D5972D8C...` | Yes (Sec 03, 05, 07, `products.ts`) | New Local | YES |
| **01 / Hero Runway** | Product Card 2 | `ProductHeroCarousel` (`<img>`) | 3M™ Trizact™ Performance Abrasives | Image | `/images/products/3m/3m-trizact-abrasives.jpg` | 23,491 B | `8F69B351...` | Yes (Sec 07) | New Local | YES |
| **01 / Hero Runway** | Product Card 3 | `ProductHeroCarousel` (`<img>`) | Meguiar's Mirror Glaze M210 Polish | Image | `/images/products/3m/meguiars-m210-finishing-polish.jpg` | 13,538 B | `D1D9301E...` | Yes (Sec 07) | New Local | YES |
| **01 / Hero Runway** | Product Card 4 | `ProductHeroCarousel` (`<img>`) | 3M™ Quick Wax Spray Sealant | Image | `/images/products/3m/3m-quick-wax-spray.jpg` | 15,158 B | `B02337FD...` | Yes (Sec 02, Sec 07) | New Local | YES |
| **01 / Hero Runway** | Product Card 5 | `ProductHeroCarousel` (`<img>`) | 3M™ Perfect-It™ Machine Polish | Image | `/images/products/3m/meguiars-m210-finishing-polish.jpg` | 13,538 B | `D1D9301E...` | Yes (Hero Card 3, Sec 07) | **DUPLICATE** | **NO** (Reuses Meguiar's M210 polish bottle) |
| **02 / Category Worlds** | Category 00 Visual | `categoryWorlds[0]` (`<img>`) | Cleaning | Image | `/images/services/car-wash/car-wash-stitch-01.jpg` | 50,372 B | `CABC04F3...` | Yes (`/services/car-wash-cleaning`) | **SERVICE REUSE** | **NO** (Service wash photo) |
| **02 / Category Worlds** | Category 01 Visual | `categoryWorlds[1]` (`<img>`) | Polishing | Image | `/images/products/3m/3m-perfect-it-ex-rubbing-compound.jpg` | 18,457 B | `D5972D8C...` | Yes (Hero, Sec 03, 05, 07) | New Local | YES |
| **02 / Category Worlds** | Category 02 Visual | `categoryWorlds[2]` (`<img>`) | Protection | Image | `/images/products/3m/3m-quick-wax-spray.jpg` | 15,158 B | `B02337FD...` | Yes (Hero, Sec 07) | New Local | YES |
| **02 / Category Worlds** | Category 03 Visual | `categoryWorlds[3]` (`<img>`) | Films | Image | `/images/ppf/ppf-hero.webp` | 230,196 B | `23B37BE7...` | Yes (`/services/ppf-paint-protection`) | **SERVICE REUSE** | **NO** (Service hero background) |
| **02 / Category Worlds** | Category 04 Visual | `categoryWorlds[4]` (`<img>`) | Tools | Image | `/images/process/polisher-object.webp` | 122,610 B | `BE7A49CA...` | Yes (Homepage Process section) | **HOMEPAGE REUSE** | PARTIAL |
| **02 / Category Worlds** | Category 05 Visual | `categoryWorlds[5]` (`<img>`) | Accessories | Image | `/images/services/accessories/accessories-stitch-01.jpg` | 36,524 B | `FA202DDD...` | Yes (`/services/car-accessories`) | **SERVICE REUSE** | **NO** (Service accessory photo) |
| **03 / Featured Product** | Product 50/50 Stage | Section 03 (`<img>`) | 3M™ Perfect-It™ EX AC Rubbing Compound | Image | `/images/products/3m/3m-perfect-it-ex-rubbing-compound.jpg` | 18,457 B | `D5972D8C...` | Yes (Hero, Sec 02, 05, 07) | New Local | YES |
| **04 / Product In Practice** | Full-Width Video | Section 04 (`<video>`) | Automotive Paint Correction Demonstration | Video | `/videos/products/products-paint-correction-practice.mp4` | 2,748,049 B | `48886838...` | **YES (`/videos/services/detailing.mp4`)** | **SERVICE VIDEO DUPLICATE** | **NO** (Exact byte-for-byte duplicate of detailing.mp4) |
| **05 / Documentation** | Technical Specimen | Section 05 (`<img>`) | 3M™ Perfect-It™ EX AC Rubbing Compound | Image | `/images/products/3m/3m-perfect-it-ex-rubbing-compound.jpg` | 18,457 B | `D5972D8C...` | Yes (Hero, Sec 02, 03, 07) | New Local | YES |
| **07 / Product Collection** | Card 01 | `productsData[0]` (`<img>`) | 3M™ Perfect-It™ EX AC Rubbing Compound | Image | `/images/products/3m/3m-perfect-it-ex-rubbing-compound.jpg` | 18,457 B | `D5972D8C...` | Yes (Hero, Sec 02, 03, 05) | New Local | YES |
| **07 / Product Collection** | Card 02 | `productsData[1]` (`<img>`) | 3M™ Trizact™ Performance Abrasives | Image | `/images/products/3m/3m-trizact-abrasives.jpg` | 23,491 B | `8F69B351...` | Yes (Hero Card 2) | New Local | YES |
| **07 / Product Collection** | Card 03 | `productsData[2]` (`<img>`) | 3M™ Quick Wax Spray | Image | `/images/products/3m/3m-quick-wax-spray.jpg` | 15,158 B | `B02337FD...` | Yes (Hero Card 4, Sec 02) | New Local | YES |
| **07 / Product Collection** | Card 04 | `productsData[3]` (`<img>`) | Meguiar's Mirror Glaze M210 Polish | Image | `/images/products/3m/meguiars-m210-finishing-polish.jpg` | 13,538 B | `D1D9301E...` | Yes (Hero Card 3 & 5) | New Local | YES |
| **07 / Product Collection** | Card 05 | `productsData[4]` (`<img>`) | 3M™ Ceramic Coating Paint Protection Kit | Image | `/images/products/3m/3m-perfect-it-ex-rubbing-compound.jpg` | 18,457 B | `D5972D8C...` | Yes (Card 01, Sec 03, Sec 05) | **PRODUCT IMAGE DUPLICATE** | **NO** (Reuses Rubbing Compound bottle) |
| **07 / Product Collection** | Card 06 | `productsData[5]` (`<img>`) | 3M™ Scotchgard™ PPF Pro 200 | Image | `/images/ppf/ppf-hero.webp` | 230,196 B | `23B37BE7...` | Yes (Sec 02, `/services/ppf-paint-protection`) | **SERVICE REUSE** | **NO** (Reuses PPF service hero wallpaper) |

---

## 3. IMAGE & VIDEO DUPLICATION ANALYSIS (FILE HASHES)

| SHA-256 Hash Prefix | File Path | Sections & Components Using It | Duplication Classification |
|---|---|---|---|
| `D5972D8C57D48213` | `public/images/products/3m/3m-perfect-it-ex-rubbing-compound.jpg` | Hero Runway, Sec 02 (Polishing), Sec 03 (Featured), Sec 05 (Specimen), Sec 07 Card 01, Sec 07 Card 05 (`3M Ceramic Coating Kit`) | **HEAVY REUSE**: Used for 6 different instances across `/products`, including as an incorrect duplicate for the Ceramic Coating Kit. |
| `D1D9301EF752F8C6` | `public/images/products/3m/meguiars-m210-finishing-polish.jpg` | Hero Runway Card 3, Hero Runway Card 5 (`3M Machine Polish`), Sec 07 Card 04 | **PRODUCT REUSE**: Reused for 3M Machine Polish in Hero Runway. |
| `23B37BE7EAD9875E` | `public/images/ppf/ppf-hero.webp` | Sec 02 Category 03 (`Films`), Sec 07 Card 06 (`3M Scotchgard PPF Pro`), `/services/ppf-paint-protection` | **CROSS-ROUTE SERVICE CONTAMINATION**: Service hero wallpaper reused in Products collection. |
| `CABC04F37977C6C9` | `public/images/services/car-wash/car-wash-stitch-01.jpg` | Sec 02 Category 00 (`Cleaning`), `/services/car-wash-cleaning` | **CROSS-ROUTE SERVICE CONTAMINATION**: Service detail page photo used for Category World. |
| `FA202DDD99F343FA` | `public/images/services/accessories/accessories-stitch-01.jpg` | Sec 02 Category 05 (`Accessories`), `/services/car-accessories` | **CROSS-ROUTE SERVICE CONTAMINATION**: Service detail page photo used for Category World. |
| `48886838995A794F` | `public/videos/products/products-paint-correction-practice.mp4` | Sec 04 Product Runway Video, `/videos/services/detailing.mp4`, `/videos/products/product-runway-paint-correction.mp4` | **EXACT VIDEO DUPLICATE**: Byte-for-byte identical copy of `/videos/services/detailing.mp4`. |

---

## 4. CROSS-PAGE MEDIA CONTAMINATION AUDIT

| `/products` Asset Path | Original Route / Source | Reused Location on `/products` | Contamination Status |
|---|---|---|---|
| `/images/services/car-wash/car-wash-stitch-01.jpg` | `/services/car-wash-cleaning` | Section 02 Category World 00 (`Cleaning`) | **CONTAMINATED** (Service photo reused as product category visual) |
| `/images/ppf/ppf-hero.webp` | `/services/ppf-paint-protection` | Section 02 Category World 03 (`Films`) & Section 07 Card 06 (`3M PPF Pro`) | **CONTAMINATED** (Service hero graphic reused as product image) |
| `/images/process/polisher-object.webp` | Homepage (`/`) Process Theatre | Section 02 Category World 04 (`Tools`) | **CONTAMINATED** (Homepage polisher object graphic reused) |
| `/images/services/accessories/accessories-stitch-01.jpg` | `/services/car-accessories` | Section 02 Category World 05 (`Accessories`) | **CONTAMINATED** (Service photo reused as product category visual) |
| `/videos/products/products-paint-correction-practice.mp4` | `/services/detailing-paint-care` (`/videos/services/detailing.mp4`) | Section 04 Product In Practice Video | **CONTAMINATED** (Copy of Service page video reused as Products video) |

---

## 5. VIDEO FORENSIC AUDIT

| Video Attribute | Section 04 Video State |
|---|---|
| **Filename** | `products-paint-correction-practice.mp4` |
| **Local Path** | `public/videos/products/products-paint-correction-practice.mp4` |
| **File Size** | `2,748,049 bytes` (2.75 MB) |
| **SHA-256 Hash** | `48886838995A794F0243C8808D5B03B1...` |
| **Identical To** | `public/videos/services/detailing.mp4` |
| **Codec / Resolution** | H.264 MP4 / 1920x1080 (1080p) |
| **Duration** | 10 seconds continuous loop |
| **Reused from Services?** | **YES (100% Byte-for-byte copy of `/videos/services/detailing.mp4`)** |
| **Newly Downloaded Products Video?** | **NO (Staged from existing service video repository)** |

---

## 6. SOURCE-OF-TRUTH & FALLBACK AUDIT

### Data Sources per Section
1. **Section 01 (Hero Runway)**: Inline array `heroProducts` inside `ProductsPage.tsx` (Lines 58–94).
2. **Section 02 (Category Worlds)**: Inline array `categoryWorlds` inside `ProductsPage.tsx` (Lines 96–139).
3. **Section 03 (Featured Product)**: Hardcoded string `/images/products/3m/3m-perfect-it-ex-rubbing-compound.jpg` in `ProductsPage.tsx`.
4. **Section 04 (Product In Practice)**: Hardcoded string `/videos/products/products-paint-correction-practice.mp4` in `ProductsPage.tsx`.
5. **Section 05 (Technical Specimen)**: Hardcoded string `/images/products/3m/3m-perfect-it-ex-rubbing-compound.jpg` in `ProductsPage.tsx`.
6. **Section 07 (Product Collection)**: Dynamic `.filter().map()` over `productsData` imported from [`src/data/products.ts`](file:///c:/Users/balashanmugam/OneDrive/Desktop/Freelance/TMR/src/data/products.ts).

### Fallback Logic in `ProductsPage.tsx`
* **Section 03 `onError`**: Line 325 → `(e.target as HTMLImageElement).src = "/images/products/3m/3m-perfect-it-ex-rubbing-compound.jpg";`
* **Section 07 `onError`**: Line 637 → `(e.target as HTMLImageElement).src = "/images/products/3m/3m-perfect-it-ex-rubbing-compound.jpg";`
* **Behavior on Image Load Failure**: Automatically falls back to the 3M Rubbing Compound bottle image.

---

## 7. PRODUCT IMAGE & ROUTE MATCHING AUDIT

| Product Record in `productsData` | Configured Image | Image Visually Matches Product? | Configured `detailRoute` | Destination Route Exists? | Destination Issue |
|---|---|---|---|---|---|
| **3M™ Perfect-It™ EX AC Rubbing Compound** | `/images/products/3m/3m-perfect-it-ex-rubbing-compound.jpg` | **YES** | `/products/3m-perfect-it-ex-ac-rubbing-compound` | **YES** | None (Correct 1:1 route) |
| **3M™ Trizact™ Performance Abrasives** | `/images/products/3m/3m-trizact-abrasives.jpg` | **YES** | `/products/3m-perfect-it-ex-ac-rubbing-compound` | **YES** | **ROUTE MISMATCH** (Routes to Rubbing Compound page instead of dedicated Abrasives page) |
| **3M™ Quick Wax Spray** | `/images/products/3m/3m-quick-wax-spray.jpg` | **YES** | `/products/3m-perfect-it-ex-ac-rubbing-compound` | **YES** | **ROUTE MISMATCH** (Routes to Rubbing Compound page instead of dedicated Quick Wax page) |
| **Meguiar's Mirror Glaze M210 Polish** | `/images/products/3m/meguiars-m210-finishing-polish.jpg` | **YES** | `/products/3m-perfect-it-ex-ac-rubbing-compound` | **YES** | **ROUTE MISMATCH** (Routes to Rubbing Compound page instead of dedicated Meguiar's page) |
| **3M™ Ceramic Coating Paint Kit** | `/images/products/3m/3m-perfect-it-ex-rubbing-compound.jpg` | **NO (Shows Rubbing Compound)** | `/services/ceramic-coating` | **YES** | **IMAGE MISMATCH** (Shows Rubbing Compound bottle instead of Ceramic Coating bottle) |
| **3M™ Scotchgard™ PPF Pro 200** | `/images/ppf/ppf-hero.webp` | **NO (Shows Service Wallpaper)** | `/services/ppf-paint-protection` | **YES** | **IMAGE MISMATCH** (Shows Service hero wallpaper instead of PPF product box/roll) |

---

## 8. SECTION-TO-MEDIA INTENT AUDIT

| Section | Required Media Intent | Rendered Media | Intent Match |
|---|---|---|---|
| **01 / Hero Runway** | Curated product bottle showcase | 4 local product images + 1 duplicate (M210 used for Machine Polish) | **PARTIAL** |
| **02 / Category Worlds** | Product category visuals | 3 service photos + 1 homepage graphic + 2 product bottle photos | **NO (Service contamination)** |
| **03 / Featured Product** | 50/50 Full-bleed 3M Rubbing Compound bottle stage | `/images/products/3m/3m-perfect-it-ex-rubbing-compound.jpg` | **YES** |
| **04 / Product In Practice** | Dedicated, brand-new paint correction video | `/videos/products/products-paint-correction-practice.mp4` (Copy of `/videos/services/detailing.mp4`) | **NO (Service video duplicate)** |
| **05 / Technical Specimen** | Technical specimen zoom study of 3M Rubbing Compound | `/images/products/3m/3m-perfect-it-ex-rubbing-compound.jpg` | **YES** |
| **07 / Product Collection** | Dynamic catalog of distinct product bottle assets | 4 distinct product images + 1 duplicate compound image + 1 service PPF hero graphic | **PARTIAL** |

---

## 9. CLASSIFICATION OF WRONG & SUSPICIOUS MEDIA

| Section | Asset Path | Classification | Root Cause & Recommended Action |
|---|---|---|---|
| **01 / Hero Runway** | `/images/products/3m/meguiars-m210-finishing-polish.jpg` (Card 5) | **WRONG PRODUCT** | Used for 3M Machine Polish. Download/assign dedicated 3M Machine Polish asset. |
| **02 / Category 00** | `/images/services/car-wash/car-wash-stitch-01.jpg` | **SERVICE REUSE** | Service wash photo used for category world. Replace with dedicated cleaning product asset. |
| **02 / Category 03** | `/images/ppf/ppf-hero.webp` | **SERVICE REUSE** | Service hero wallpaper used for category world. Replace with dedicated film roll/box asset. |
| **02 / Category 04** | `/images/process/polisher-object.webp` | **HOMEPAGE REUSE** | Homepage polisher graphic used for tools world. Replace with dedicated detailing tool product asset. |
| **02 / Category 05** | `/images/services/accessories/accessories-stitch-01.jpg` | **SERVICE REUSE** | Service photo used for accessories world. Replace with dedicated product accessory asset. |
| **04 / Runway Video** | `/videos/products/products-paint-correction-practice.mp4` | **SERVICE VIDEO DUPLICATE** | Byte-for-byte copy of `/videos/services/detailing.mp4`. Download a brand-new, unique paint correction video file. |
| **07 / Card 05** | `/images/products/3m/3m-perfect-it-ex-rubbing-compound.jpg` | **DUPLICATE PRODUCT** | Reuses Rubbing Compound bottle for Ceramic Coating Kit. Download dedicated 3M Ceramic Coating Kit box/bottle asset. |
| **07 / Card 06** | `/images/ppf/ppf-hero.webp` | **SERVICE REUSE** | Reuses PPF service hero wallpaper for 3M Scotchgard PPF product card. Download dedicated 3M PPF box/roll asset. |

---

## 10. EXECUTIVE SUMMARY (A–O)

### A. Full Page Section Tree
1. Section 01: Hero & `ProductHeroCarousel`
2. Section 02: Category Worlds
3. Section 03: Featured Product Stage (50/50 Full-bleed)
4. Section 04: Product In Practice (Full-width Video)
5. Section 05: Technical Specimen Dossier (Magnification Inspection)
6. Section 07: Product Collection Catalogue (Dynamic Runway Slider)
7. Verified Sources Section
8. Discover / Find By Purpose Section
9. Product Questions / FAQ Section
10. Final Cinematic CTA Section

### B. Complete Media Inventory
Total 12 distinct media assets rendered across 10 sections on `/products`.

### C. Image Duplication Report
- `3m-perfect-it-ex-rubbing-compound.jpg` is duplicated across 6 different UI locations, including Product 05 in Section 07.
- `meguiars-m210-finishing-polish.jpg` is duplicated in Hero Card 3 and Hero Card 5.

### D. Video Duplication Report
- `products-paint-correction-practice.mp4` (SHA-256 `48886838...`) is a byte-for-byte identical copy of `/videos/services/detailing.mp4`.

### E. Cross-Page Contamination Report
- 4 image assets and 1 video asset on `/products` are reused directly from `/services/` and Homepage (`/`) directories.

### F. Broken/Missing Assets
- 0 broken images currently (all local paths resolve), but 2 product records lack dedicated local packaging assets.

### G. Product/Image Mismatches
- Product 05 (`3M Ceramic Coating Kit`) shows Rubbing Compound bottle.
- Product 06 (`3M PPF Pro 200`) shows PPF service wallpaper.

### H. Product/Route Mismatches
- Products 02, 03, 04 in `productsData` point to `/products/3m-perfect-it-ex-ac-rubbing-compound` instead of their own dedicated detail routes or enquiry states.

### I. Fallback Logic
- `onError` handlers in `ProductsPage.tsx` default to `/images/products/3m/3m-perfect-it-ex-rubbing-compound.jpg`.

### J. Current Product Count
- 6 product records in `src/data/products.ts`.

### K. Current Video Count
- 1 video rendered on `/products` (`products-paint-correction-practice.mp4`).

### L. Current Image Count
- 11 distinct image files referenced across `/products`.

### M. Root Causes
1. **Missing Dedicated Product Packaging Assets**: Dedicated local image files for `3M Ceramic Coating Kit`, `3M Scotchgard PPF Pro Box`, and `3M Machine Polish` were never downloaded to `public/images/products/3m/`, forcing data definitions to fall back to Rubbing Compound or Service wallpapers.
2. **Missing Unique Video Download**: When Section 04 required a local MP4 video, `/videos/services/detailing.mp4` was copied locally as `products-paint-correction-practice.mp4` instead of downloading a brand-new, unique automotive paint correction video file from an external source.

### N. Exact Files That Need Modification (When Instructed)
1. [`src/data/products.ts`](file:///c:/Users/balashanmugam/OneDrive/Desktop/Freelance/TMR/src/data/products.ts)
2. [`src/pages/ProductsPage.tsx`](file:///c:/Users/balashanmugam/OneDrive/Desktop/Freelance/TMR/src/pages/ProductsPage.tsx)

### O. Exact Assets That Need to Be Downloaded/Created (When Instructed)
1. `public/images/products/3m/3m-ceramic-coating-kit.jpg` (Dedicated 3M Ceramic Coating Kit packaging image)
2. `public/images/products/3m/3m-scotchgard-ppf-pro.jpg` (Dedicated 3M Scotchgard PPF Pro box/roll packaging image)
3. `public/images/products/3m/3m-machine-polish.jpg` (Dedicated 3M Machine Polish bottle image)
4. `public/videos/products/products-paint-correction-practice.mp4` (Brand-new, unique 1080p MP4 video file demonstrating machine polishing paint correction, completely distinct from `detailing.mp4`).
