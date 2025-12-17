# Indrio.com WordPress Redesign

## Current State vs. Target State

| Current | Target |
|---------|--------|
| "Specialty product experiences" | Mission: Farmland preservation, American farmers |
| Corporate/portfolio focus | Content/media company feel |
| Brand showcase | Belief-driven storytelling |
| Generic food company | Alex as authoritative guide |
| "Farm to Family" tagline | "Real food. Real farmers. Real difference." |

---

## NEW SITE STRUCTURE

### Navigation (Simplified)

```
HOME | MISSION | BLOG | NEWSLETTER | BRANDS | ABOUT
```

Current nav (Brands, What We Do, Who We Are, Leadership, Careers, Blog) is corporate. New nav leads with beliefs.

---

## PAGE DESIGNS

### 1. HOME PAGE

**Hero Section**
- Headline: "The food system is broken. We're building the alternative."
- Subhead: "Connecting you directly to American farmers, ranchers, and growers who do it right."
- CTA: "See How" (scrolls to mission) | "Shop Our Brands" (to brands page)
- Visual: Real farm imagery (not stock) - Alex on the grove, cattle, harvest

**Section 2: The Problem**
- Headline: "You're gambling every time you buy groceries"
- Copy: Brief version of the casino analogy
  - Grocery produce: Picked green, bred for shipping, quality unknown
  - Indrio: Tree-ripened, heritage varieties, quality guaranteed
- Visual: Side-by-side comparison (grocery orange vs. grove orange)

**Section 3: The Mission**
- Headline: "Why we exist"
- Full mission statement in large type:
  > "Connecting people to superior flavor and nutrition to benefit their health—all while preserving farmland in the USA. That's to help farmers, ranchers, growers, and makers here who are having to compete against industrial foods, imported foods, and regulations that undercut them."
- Link: "Read more about our mission →"

**Section 4: S.H.A.R.E. Framework (Visual)**
- 5 icons with brief descriptions
- S - Soil: Healthy soil = healthy food
- H - Heritage: Flavor over yield
- A - Agricultural: Minimal inputs
- R - Ripening: Harvested at peak
- E - Enriching: The whole ecosystem
- Link: "Learn about our quality standards →"

**Section 5: Featured Content**
- Headline: "From the Field"
- 3 latest blog posts (cards)
- Newsletter signup CTA embedded

**Section 6: Our Brands**
- Headline: "Taste the difference"
- Brand logos as links (Hale, Pittman, Sun Harvest, Everglades Ranch)
- Brief copy: "Each brand, one promise: quality you can measure."

**Footer**
- Newsletter signup (prominent)
- Social links
- Contact
- Brand links

---

### 2. MISSION PAGE (/mission)

**Hero**
- Headline: "We're on a mission to fix food"
- Full mission statement

**Section: The System is Broken**
- The consolidation problem (1 company = millions of pounds = concentrated risk)
- The import problem (80% of beef labeled "Product of USA" isn't)
- The labeling problem (organic fraud, grass-fed loopholes)
- The quality problem (bred for yield, not nutrition)

**Section: Our Answer**
- Direct relationships with American farmers
- Quality verification (Fielder)
- S.H.A.R.E. framework
- Cutting out the middlemen

**Section: What We Believe**
- Bullet points of core beliefs:
  - American farmers deserve a fair market
  - Food quality should be measurable, not marketing
  - Small scale = lower risk, higher quality
  - You deserve to know where your food comes from

**CTA**
- "See our brands" | "Read the blog"

---

### 3. BLOG PAGE (/blog)

**Layout**
- Featured post (large, top)
- Category filters: All | Food System | Science & Nutrition | Farm Life | News Analysis
- Grid of posts (card format)
- Sidebar: Newsletter signup, popular posts

**Post Categories (mapped to content-channel-processes.md)**
- Food System (industrial concentration, recalls, policy)
- Science & Nutrition (myth busting, brix, nutrient density)
- Farm Life (behind the scenes, harvest, growers)
- News Analysis (current events through our lens)

---

### 4. NEWSLETTER PAGE (/newsletter)

**Hero**
- Headline: "Weekly insights from the field"
- Subhead: "One email. One big idea. Every week."
- Signup form (prominent)

**What to Expect**
- Current events through a farmer's lens
- Data and science, not marketing fluff
- Contrarian takes with receipts
- ~5 minute read

**Sample Issue Preview**
- Show a past issue or mock-up

**Archive**
- List of past issues (title + date)

---

### 5. BRANDS PAGE (/brands)

**Hero**
- Headline: "Taste the difference"
- Subhead: "Every brand, one promise: quality you can measure"

**Brand Cards**
Each brand gets a card:
- Logo
- Category (Citrus, Beef, etc.)
- Brief description
- Quality metric (e.g., "11° Brix minimum" for citrus)
- "Shop Now" button → external brand site

**Brands:**
1. Hale Groves - Premium citrus, Indian River
2. Pittman & Davis - Texas citrus and specialty foods
3. Sun Harvest Citrus - Florida citrus
4. Everglades Ranch - Grass-fed beef, 3:1 omega ratio
5. (Others as applicable)

---

### 6. ABOUT PAGE (/about)

**Hero**
- Headline: "Meet the people behind the mission"

**Section: Alex's Story**
- Photo of Alex
- His background (20+ years in citrus, family business)
- Why he started this
- The moment that changed everything

**Section: The Team**
- Key team members (if public)
- Or: "A small team of farmers, food nerds, and logistics experts"

**Section: Our History**
- Timeline or brief narrative
- Family roots → current mission

---

## CONTENT FILES TO CREATE

I'll create these as separate files you can copy into WordPress:

1. `home-page.html` - Full homepage content
2. `mission-page.html` - Mission page content
3. `blog-landing.html` - Blog page layout/copy
4. `newsletter-page.html` - Newsletter signup page
5. `brands-page.html` - Brand portfolio page
6. `about-page.html` - About/team page

---

## VISUAL DIRECTION

**Colors** (keep existing palette, it's good):
- Cream/beige: #EDE8D3
- Teal/sage: #A6CDC2
- Burnt orange: #E25E25 (CTAs)
- Add: Deep green for mission content

**Typography**:
- Keep Francesca/Fairwater for headlines
- Ensure body text is highly readable (blog posts are long)

**Photography**:
- Replace any stock with real farm photos
- Alex on the grove
- Harvest imagery
- Cattle/ranch
- Behind the scenes at packing house

**Tone**:
- Confident, not corporate
- Direct, not salesy
- Science-backed, not preachy
- Personal (Alex's voice), not generic
