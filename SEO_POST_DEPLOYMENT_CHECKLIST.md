# TMR AI CAR CARE — POST-DEPLOYMENT GSC & SEO LAUNCH PROTOCOL
**Document Version:** 1.0.0 (Production Launch Checklist)  
**Target Domain:** `https://tmrcarcare.com`  
**Sitemap URL:** `https://tmrcarcare.com/sitemap.xml`  
**Total Production URLs:** 77  

---

## 1. Day 0: Immediate Deployment Actions

### A. Google Search Console (GSC) Domain Property Verification
- [ ] Log in to Google Search Console (`https://search.google.com/search-console`).
- [ ] Select **Add Property** $\rightarrow$ choose **Domain** (not URL prefix).
- [ ] Enter `tmrcarcare.com`.
- [ ] Copy the provided DNS TXT record.
- [ ] Add the TXT record to the domain DNS settings at the registrar (e.g. Cloudflare, GoDaddy, Namecheap).
- [ ] Click **Verify** in GSC to secure domain-level ownership covering all protocols (`http`, `https`, `www`, and subdomains).

### B. Production Sitemap Submission
- [ ] In GSC, navigate to **Indexing** $\rightarrow$ **Sitemaps**.
- [ ] Enter `sitemap.xml` in the "Add a new sitemap" input field.
- [ ] Click **Submit**.
- [ ] Confirm status updates to **Success** with **77 discovered pages**.

### C. Live URL Inspection & Priority Crawl Requests
Perform URL Inspection for the primary architecture pages and submit for indexing:
1. [ ] `https://tmrcarcare.com/` (Home)
2. [ ] `https://tmrcarcare.com/services` (Services Index)
3. [ ] `https://tmrcarcare.com/products` (Products Catalogue Hub)
4. [ ] `https://tmrcarcare.com/gallery` (Studio Photography & Proof)
5. [ ] `https://tmrcarcare.com/about` (Founder & Heritage)
6. [ ] `https://tmrcarcare.com/contact` (Studio Location & Enquiries)
7. [ ] Representative Service: `https://tmrcarcare.com/services/ceramic-coating`
8. [ ] Representative Service: `https://tmrcarcare.com/services/ppf-paint-protection`
9. [ ] Representative Product: `https://tmrcarcare.com/products/3m-perfect-it-ex-ac-rubbing-compound`
10. [ ] Representative Product: `https://tmrcarcare.com/products/3m-synthetic-wax-protectant`

---

## 2. Days 1–7: Indexation & Crawl Health Monitoring

### A. Coverage & Indexing Verification
- [ ] Check GSC **Pages** report daily.
- [ ] Ensure pages transition from "Discovered - currently not indexed" to **"Indexed"**.
- [ ] Verify 0 pages categorized under:
  - "Server error (5xx)"
  - "Redirect error"
  - "Blocked by robots.txt"
  - "Duplicate without user-selected canonical"

### B. Brand Entity Query Tracking
Track and record initial impressions and clicks in GSC **Search Results** for:
- `TMR AI Car Care`
- `TMR AI Car Care Tiruppur`
- `TMR Car Care`
- `TMR Car Care Tiruppur`
- `TMR AI`

### C. Core Service Query Tracking
- `car detailing Tiruppur`
- `car wash Tiruppur`
- `ceramic coating Tiruppur`
- `PPF Tiruppur`
- `paint protection film Tiruppur`
- `sun control film Tiruppur`
- `car accessories Tiruppur`

### D. 3M Product Query Tracking
- `3M car care Tiruppur`
- `3M car care products Tiruppur`
- Specific 3M Part Numbers (e.g. `PN 36060`, `PN 39006`, `PN 38070`)

---

## 3. Days 8–30: Performance & Snippet Optimization

- [ ] Review Average Position, CTR, Impressions, and Clicks in GSC.
- [ ] Check for Google Rich Results:
  - Verify **Product** rich snippets (brand, SKU, in-stock status).
  - Verify **FAQ** rich snippets on service and product pages.
  - Verify **Breadcrumb** hierarchy display in SERPs.
- [ ] Check for any 404 crawl anomalies or soft 404s.
- [ ] Ensure mobile usability reports in GSC remain at **100% valid**.
