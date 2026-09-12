# TMR AI Car Care — About Page Final SEO Keyword Coverage & Strategy Matrix

* **Target Route**: `/about` ([`src/pages/AboutPage.tsx`](file:///c:/Users/balashanmugam/OneDrive/Desktop/Freelance/TMR/src/pages/AboutPage.tsx))
* **Primary Objective**: Human-grade editorial tone, strong local entity signals, zero keyword stuffing, zero cannibalization with service pages. Reorganized Phase 1 structure with single-responsibility sections.

---

## 1. Complete Keyword Mapping & Placement Matrix

| Keyword / Concept | Exact vs. Semantic Usage | Section Placement | Search Intent | Intentionally Excluded? |
| :--- | :--- | :--- | :--- | :--- |
| `TMR AI Car Care` | Exact & Entity Signal | Title, Meta, Hero, Story, Today, Studio | Primary Brand Entity | No |
| `Tiruppur` / `Tiruppur Tamil Nadu` | Exact Local Signal | Title, Story, Today, Studio, Schema | Primary Local Entity | No |
| `car care Tiruppur` | Semantic & Natural Copy | Story ("work behind TMR AI Car Care"), Studio | Local Service Search | No |
| `car detailing Tiruppur` / `car detailing in Tiruppur` | Exact & Semantic | Title, Meta, Today, Method | Local Category Search | No |
| `automotive detailing` | Exact & Semantic | Hero, Today, Method, CTA | Topical Authority | No |
| `professional vehicle care` | Semantic | Story, Today, Method | Trust / Quality Signal | No |
| `paint correction` | Exact & Semantic | Today, Method, CTA Links | Core Craft Method | No |
| `ceramic coating` | Exact & Semantic | Today, Method, CTA Links | Core Protection Service | No |
| `PPF` / `paint protection` | Exact & Semantic | Today, Method, CTA Links | Core Armor Service | No |
| `Avinashi Road` / `Near Hope College Junction` | Exact Local Entity | Story, Today, Studio & Schema | Physical Studio Address | No |
| `Meenakshi Sundharam` | Factual Founder Entity | Founder Section & Schema | Founder Trust Signal | No |
| `Experience Since 2009` | Factual Experience Signal | Title, Meta, Story, At a Glance | Business Heritage Signal | No |
| `~500 vehicles/month operational scale` | Factual Track Record | Story & At a Glance | Operational Scale Signal | No |
| **Price / Cost / Cheap Queries** | N/A | Excluded | Transactional Intent | **YES** (Owned by Service pages) |
| **Booking / WhatsApp Modifiers** | N/A | Excluded | Commercial Intent | **YES** (Owned by Contact/Service pages) |
| **Near-Me Queries** | N/A | Excluded | Geo-location Intent | **YES** (Owned by Local Architecture) |
| **3M Product / SKU Queries** | N/A | Excluded | Product Search Intent | **YES** (Owned by Product pages) |

---

## 2. Refined Human-Grade Editorial Copy Highlights

* **Single Responsibility Flow**:
  - `OUR STORY`: History only (roots in 2009, ~500/mo operating scale).
  - `FOUNDER`: Person only (Meenakshi Sundharam's shop-floor leadership and standards).
  - `TMR TODAY`: Current business and facility focus.
  - `HOW WE WORK`: Practical 3-step sequence (`01 INSPECT`, `02 PREPARE`, `03 FINISH`).
  - `AT A GLANCE`: Three verified factual signals.
  - `VISIT THE STUDIO`: Practical location details and drop-off guidance.
  - `FINAL CTA`: Clean conversion action with zero repeated biography.
* **Eliminated Redundancies**: Removed old duplicate Quality/Process and What Sets TMR Apart sections.
* **Refined Alt Text**: Factual, concise image descriptions:
  - `alt="TMR AI Car Care detailing studio in Tiruppur"`
  - `alt="Meenakshi Sundharam, founder of TMR AI Car Care"`
  - `alt="Vehicle surface inspection during automotive detailing at TMR AI Car Care"`
  - `alt="Machine polishing and paint refinement inside TMR AI Car Care studio"`
  - `alt="TMR AI Car Care studio facility on Avinashi Road Tiruppur"`
  - `alt="Detailed vehicle with mirror finish inside TMR AI Car Care studio"`

---

## 3. Heading Structure Audit (Phase 1 Restructured Layout)

* **`H1` Tag (1 per page)**: `BUILT AROUND THE craft.` (Hero — Locked)
* **`H2` Tags (Major Sections)**:
  - `OUR story.` (Section 1: Our Story)
  - `MEENAKSHI sundharam.` (Section 2: Founder)
  - `TMR today.` (Section 3: TMR Today)
  - `HOW WE WORK.` (Section 4: How We Work)
  - `AT A glance.` (Section 5: At a Glance)
  - `VISIT THE studio.` (Section 6: Visit the Studio)
  - `READY FOR THE RIGHT next step?` (Section 7: Final CTA)
* **Hidden / Decorative Headings**: **0**

---

## 4. Technical SEO Verification

* **Title**: `About TMR AI Car Care | Automotive Detailing in Tiruppur | Experience Since 2009`
* **Meta Description**: `Learn about TMR AI Car Care in Tiruppur. Automotive-care experience dating back to 2009, founded by Meenakshi Sundharam, specializing in detailing, ceramic coating, and PPF.`
* **Canonical URL**: `https://tmrcarcare.com/about`
* **JSON-LD Schema**: `AutoRepair` + `LocalBusiness` + `BreadcrumbList` valid graph with Meenakshi Sundharam as founder and no unverified founding year.
* **TypeScript Check (`npx tsc --noEmit`)**: **PASS (0 errors)**
* **Vite Production Build (`npm run build`)**: **PASS**
