# TMR Car Care — About Page SEO Keyword Coverage & Strategy Report

* **Target Route**: `/about` ([`src/pages/AboutPage.tsx`](file:///c:/Users/balashanmugam/OneDrive/Desktop/Freelance/TMR/src/pages/AboutPage.tsx))
* **Source Specification**: `TMR_ABOUT_SEO_KEYWORD_TARGETING.md`
* **Search Intent Focus**: Brand identity, company history, local credibility, founder story, craftsmanship standards, and Tiruppur studio location.

---

## 1. Primary About-Page Local Keyword Targets

| Keyword Variant | Natural Placement Site in `/about` | Intent Alignment |
| :--- | :--- | :--- |
| `car care Tiruppur` | Story paragraph & Tiruppur location section | Primary brand + city local entity |
| `car care Tiruppur Tamil Nadu` | Tiruppur section body copy & address line | Regional local entity signal |
| `car care center Tiruppur` | Story section ("professional car care center in Tiruppur") | Commercial local facility signal |
| `car care center Tiruppur Tamil Nadu` | Tiruppur studio section | Full regional business signal |
| `car detailing Tiruppur` | Document title, meta description, standard section | Core category + city target |
| `car detailing Tiruppur Tamil Nadu` | Document title & Open Graph metadata | Regional category search |
| `car detailing in Tiruppur` | Story section body copy & internal link anchors | Conversational search variant |
| `car detailing center Tiruppur` | Standard section ("professional car detailing center in Tiruppur") | Entity search variant |
| `car detailing center Tiruppur Tamil Nadu` | Structured JSON-LD LocalBusiness schema | Factual entity schema |
| `full car detailing Tiruppur` | Section 3 manifesto & service internal link text | High-relevance service variant |

---

## 2. Semantic & Topical Terms Incorporated

* `professional automotive care`
* `car detailing studio`
* `paint correction`
* `paint refinement`
* `clear-coat care`
* `machine polishing`
* `surface inspection`
* `ceramic coating`
* `ceramic protection`
* `paint protection film (PPF)`
* `automotive care team`
* `detailing workmanship`
* `hydrophobic finish`

---

## 3. Real Local Entity & Trust Signals (Factual Data)

* **Brand Name**: TMR Car Care
* **Location**: Tiruppur, Tamil Nadu (Avinashi Road, Near Hope College Junction, Postal Code 641602)
* **Founded**: Established in 2009
* **Founder**: Chandramohan Kandha Velu
* **Track Record**: 1,000+ vehicles cared for
* **Team**: Specialized automotive-care team with over 10+ years of hands-on experience
* **Zero Unsupported Claims**: No fake awards, no fake review counts, no fake official dealership claims.

---

## 4. Keywords Intentionally Excluded (Preserving Service Page Ownership)

The following query families are **strictly excluded** from `/about` to avoid keyword cannibalization and maintain search intent matching:

* **Commercial Pricing Queries**: `ceramic coating price in Tiruppur`, `PPF price in Tiruppur`, `car wash price in Tiruppur` $\rightarrow$ Handled by dedicated service money pages.
* **Booking / Transaction Modifiers**: `booking`, `cost`, `cheap`, `WhatsApp modifier` $\rightarrow$ Handled by Contact & Service pages.
* **Near-Me Modifiers**: `car detailing near me` $\rightarrow$ Handled by local landing architecture.
* **Product / SKU Searches**: 3M product variants $\rightarrow$ Handled by Product/Category pages.
* **Vehicle-Type Modifiers**: `new car detailing`, `used car detailing` $\rightarrow$ Handled by Service pages.

---

## 5. Internal Linking Architecture

Natural, descriptive contextual internal links embedded in `/about`:

1. `/services/detailing-paint-care` $\rightarrow$ Anchor: *"TMR Car Care detailing services"* & *"paint correction and detailing"*
2. `/services/ceramic-coating` $\rightarrow$ Anchor: *"ceramic coating services"* & *"ceramic coating protection"*
3. `/services/ppf-paint-protection` $\rightarrow$ Anchor: *"PPF paint protection"*
4. `/gallery` $\rightarrow$ Anchor: *"VIEW TMR CAR CARE GALLERY →"*
5. `/contact` $\rightarrow$ Anchor: *"VIEW LOCATION & CONTACT TMR CAR CARE →"*

---

## 6. Implemented Technical SEO Layer

* **Document Title**: `About TMR Car Care | Automotive Detailing in Tiruppur | Established 2009`
* **Meta Description**: `Learn about TMR Car Care, an established automotive detailing studio in Tiruppur since 2009. Specialized in precision vehicle care, paint refinement, ceramic coating, and PPF.`
* **Canonical URL**: `https://tmrcarcare.com/about`
* **Open Graph Metadata**: `og:title`, `og:description`, `og:url`, `og:type`, `og:image` (`/images/about/about-hero-static.jpg`)
* **Structured Data (JSON-LD)**:
  - `Organization` & `AutoRepair` / `LocalBusiness` multi-entity graph
  - `BreadcrumbList` schema (`Home` $\rightarrow$ `About TMR Car Care`)

---

## 7. Non-Regression & Verification

* **Visual Layout**: 100% UNCHANGED. No CSS tweaks, no section reordering, no color changes.
* **TypeScript Check (`npx tsc --noEmit`)**: **PASS (0 errors)**
* **Vite Build (`npm run build`)**: **PASS**
