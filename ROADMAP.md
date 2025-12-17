# Indrio.com Redesign Roadmap

## Current State Assessment

### What Exists
| Page | URL | Status |
|------|-----|--------|
| Home | indrio.com | Corporate messaging, "specialty product experiences" |
| Brands | /brands/ | 6 brands listed (includes Hoorag, Yarden, SFS) |
| Blog | /blog/ | Sparse - 4 posts, last 2 from 2022 |
| Leadership | /leadership/ | Alex, Rollins, Michael, Eileen |
| What We Do | /what-we-do/ | 404 |
| Who We Are | /who-we-are/ | 404 |

### Problems with Current Site
1. **Wrong message**: "Specialty product experiences" vs. mission-driven
2. **Wrong brands**: Shows Hoorag (apparel), Yarden (plants), SFS (logistics) - dilutes food focus
3. **Dead blog**: 4 posts, 2-year gap, corporate PR tone
4. **No mission**: Nothing about farmland preservation, American farmers
5. **No guide positioning**: Alex isn't positioned as the authority
6. **No content strategy**: Blog isn't driving acquisition

---

## Redesign Strategy

### Approach: Content-First via WordPress Admin

Since you have WordPress admin access (not server access), the strategy is:
1. **Phase 1**: Content rewrites (pages, copy) - can do in admin
2. **Phase 2**: Blog infrastructure - categories, post templates
3. **Phase 3**: Visual refinements - depends on theme/page builder
4. **Phase 4**: Newsletter integration - plugin dependent

### What You Can Do in WordPress Admin
- Edit existing page content
- Create new pages
- Publish blog posts
- Add/edit categories and tags
- Configure menus/navigation
- Use page builder (if installed: Elementor, Divi, Beaver, etc.)
- Install plugins (newsletter, forms, etc.)

### What May Need Theme/Server Access
- Header/footer design changes
- New page templates
- Custom fonts
- Major layout restructuring

---

## PHASE 1: CORE PAGE REWRITES (Week 1-2)

### 1.1 Homepage Rewrite
**Goal**: Shift from corporate to mission-driven

Replace:
> "We connect people with the outdoors through specialty product experiences"

With:
> "The food system is broken. We're building the alternative."

**Sections to create:**
1. Hero with mission headline
2. The Problem (casino analogy)
3. The Mission (full statement)
4. S.H.A.R.E. framework visual
5. Featured blog posts
6. Brand showcase (food brands only)

**Deliverable**: `content/home-page.md`

### 1.2 Mission Page (NEW)
**Goal**: Dedicated page for beliefs and mission

**URL**: /mission/

**Content:**
- Full mission statement
- The problems we're solving (consolidation, imports, labeling)
- Our approach (S.H.A.R.E., Fielder, direct relationships)
- Core beliefs

**Deliverable**: `content/mission-page.md`

### 1.3 Brands Page Rewrite
**Goal**: Focus on food brands, add quality metrics

**Remove from page:**
- Hoorag (apparel - doesn't fit)
- Yarden (plants - doesn't fit)
- Southern Fulfillment (B2B logistics - doesn't need consumer presence)

**Keep and enhance:**
- Hale Groves (add: "11° Brix minimum")
- Pittman & Davis (add: "Texas family farm partnership")
- Sun Harvest Citrus (add: "Fresh-squeezed, never pasteurized")
- Everglades Ranch (add if live: "3:1 omega ratio")

**Deliverable**: `content/brands-page.md`

### 1.4 About Page Rewrite
**Goal**: Position Alex as the guide

**URL**: /about/ (redirect /leadership/ here)

**Content:**
- Alex's story (20+ years, why he started this, the moment of clarity)
- The team (brief)
- Company history (family roots → mission)

**Deliverable**: `content/about-page.md`

---

## PHASE 2: BLOG INFRASTRUCTURE (Week 2-3)

### 2.1 Blog Categories
Set up in WordPress admin → Posts → Categories

| Category | Slug | Description |
|----------|------|-------------|
| Food System | food-system | Industrial ag, recalls, consolidation, policy |
| Science & Nutrition | science-nutrition | Brix, nutrients, myth-busting, research |
| Farm Life | farm-life | Behind the scenes, harvest, grower stories |
| News Analysis | news-analysis | Current events through our lens |

### 2.2 Initial Blog Posts (5-10)
Seed the blog with mission-aligned content before promoting:

1. **"Why We Exist"** - Mission manifesto (evergreen)
2. **"The Grocery Casino"** - Quality gambling explained (evergreen)
3. **"What Brix Actually Measures"** - Education (evergreen)
4. **"Is Organic Really Pesticide-Free?"** - Myth buster (evergreen)
5. **"Why Food Recalls Keep Getting Worse"** - System analysis (timely)

**Deliverable**: `content/blog-posts/` folder with drafts

### 2.3 Blog Page Layout
If page builder available, redesign /blog/:
- Featured post hero
- Category filters
- Grid layout for posts
- Newsletter signup in sidebar

---

## PHASE 3: NEWSLETTER INTEGRATION (Week 3-4)

### 3.1 Newsletter Page (NEW)
**URL**: /newsletter/

**Content:**
- Value proposition ("Weekly insights from the field")
- What to expect
- Signup form
- Archive link (once you have issues)

**Deliverable**: `content/newsletter-page.md`

### 3.2 Plugin Selection
Options (check what's installed or install):
- **Mailchimp for WordPress** - Free, integrates with Mailchimp
- **ConvertKit** - Better for content creators
- **Newsletter** - Self-hosted option

### 3.3 Signup Placements
Add newsletter signup to:
- Homepage (section 5)
- Blog sidebar
- Post footers
- Dedicated /newsletter/ page

---

## PHASE 4: NAVIGATION & POLISH (Week 4)

### 4.1 New Navigation
WordPress admin → Appearance → Menus

**New menu:**
```
HOME | MISSION | BLOG | NEWSLETTER | BRANDS | ABOUT
```

**Remove:**
- What We Do (404 anyway)
- Who We Are (merge into About)
- Leadership (merge into About)
- Careers (move to footer only)

### 4.2 Footer Updates
- Newsletter signup (prominent)
- Brand links
- Social (add X/Twitter, YouTube when active)
- Contact

### 4.3 Fix 404s
- Redirect /what-we-do/ → /mission/
- Redirect /who-we-are/ → /about/
- Redirect /leadership/ → /about/

---

## DELIVERABLES CHECKLIST

### Content Files (in `indrio-website/content/`)
- [ ] `home-page.md` - Homepage rewrite
- [ ] `mission-page.md` - New mission page
- [ ] `brands-page.md` - Brands page rewrite
- [ ] `about-page.md` - About page rewrite
- [ ] `newsletter-page.md` - Newsletter signup page
- [ ] `blog-posts/01-why-we-exist.md`
- [ ] `blog-posts/02-grocery-casino.md`
- [ ] `blog-posts/03-what-is-brix.md`
- [ ] `blog-posts/04-organic-myth.md`
- [ ] `blog-posts/05-recalls-getting-worse.md`

### WordPress Admin Tasks
- [ ] Create /mission/ page
- [ ] Create /newsletter/ page
- [ ] Update homepage content
- [ ] Update brands page content
- [ ] Update about page content
- [ ] Set up blog categories
- [ ] Update main navigation menu
- [ ] Install newsletter plugin
- [ ] Add newsletter signup widgets
- [ ] Set up redirects (plugin: Redirection)

---

## DISCOVERY TASKS (Before Starting)

When you log into WordPress admin, check:

1. **Theme**: What theme is active? (Appearance → Themes)
2. **Page Builder**: Is Elementor/Divi/Beaver Builder installed? (Plugins)
3. **Current Pages**: What pages exist? (Pages → All Pages)
4. **Blog Setup**: How is the blog configured? (Posts → Categories)
5. **Plugins**: What's installed? (Plugins → Installed)
6. **Newsletter**: Any email plugin already installed?

This will determine how much we can do via admin vs. needing developer help.

---

## TIMELINE

| Week | Focus | Deliverable |
|------|-------|-------------|
| 1 | Discovery + Homepage | WordPress audit, home-page.md |
| 2 | Core Pages | mission, brands, about pages |
| 3 | Blog Setup | Categories, 5 initial posts |
| 4 | Newsletter + Polish | Integration, navigation, redirects |

---

## SUCCESS METRICS

**Before launch:**
- [ ] Homepage communicates mission within 5 seconds
- [ ] Alex is positioned as authoritative guide
- [ ] Food brands only (no Hoorag, Yarden, SFS)
- [ ] Blog has 5+ quality posts live
- [ ] Newsletter signup visible on every page
- [ ] Navigation simplified to 6 items

**After launch (30 days):**
- Newsletter signups tracked
- Blog traffic tracked (vs. baseline)
- Time on site (should increase with better content)
