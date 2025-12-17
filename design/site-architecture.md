# Indrio Website Architecture

## Recommended Stack: Next.js + Sanity CMS

Based on the "media company" strategy, the website needs to be content-forward, fast, and easy to update. Here's the recommended architecture:

### Why Next.js + Sanity

| Requirement | Solution |
|-------------|----------|
| Fast page loads | Static generation (SSG) |
| Great SEO | Built-in SSR/SSG, meta tags, sitemap |
| Easy content updates | Sanity Studio (visual editor) |
| Blog system | MDX or Sanity-powered |
| Newsletter integration | API routes, Mailchimp/ConvertKit |
| Fielder integration | API routes to pull quality data |
| Hosting | Vercel (you already have this set up) |
| Cost | Sanity free tier covers most needs |

### Site Map

```
/                       Home (mission-forward)
├── /about              Alex's story, team, history
├── /mission            S.H.A.R.E. framework, why we exist
├── /blog
│   ├── /[slug]         Individual posts
│   └── /category/[cat] Category pages
├── /newsletter
│   ├── /signup         Email capture
│   └── /archive        Past issues
├── /fielder
│   ├── /scores         Quality verification
│   └── /compare        Grocery vs. Indrio data
├── /brands
│   ├── /hale-groves    → links to hale site
│   ├── /pittman-davis  → links to pittman site
│   └── /everglades     → links to everglades site
└── /contact            Contact form

```

### Component Structure

```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Home
│   ├── about/
│   ├── mission/
│   ├── blog/
│   │   ├── page.tsx       # Blog listing
│   │   └── [slug]/page.tsx
│   ├── newsletter/
│   ├── fielder/
│   └── brands/
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── blog/
│   │   ├── PostCard.tsx
│   │   ├── PostContent.tsx
│   │   └── CategoryFilter.tsx
│   ├── newsletter/
│   │   └── SignupForm.tsx
│   └── fielder/
│       ├── QualityScore.tsx
│       └── ComparisonChart.tsx
├── lib/
│   ├── sanity.ts          # CMS client
│   └── fielder.ts         # Fielder API
└── styles/
    └── globals.css        # Tailwind
```

### Content Model (Sanity)

```
Post {
  title: string
  slug: slug
  excerpt: string
  content: portableText
  category: reference → Category
  featuredImage: image
  publishedAt: datetime
  missionTieBack: string[]  # Which mission threads it connects to
  author: reference → Author
}

Category {
  name: string
  slug: slug
  description: string
}

NewsletterIssue {
  title: string
  slug: slug
  content: portableText
  publishedAt: datetime
}

FielderScore {
  product: string
  brand: string
  metric: string (brix, omega, etc)
  value: number
  comparisonValue: number
  testedAt: datetime
}
```

### Design System

**Colors** (to be refined with brand assets):
- Primary: [TBD from Indrio brand]
- Secondary: [TBD]
- Accent: [TBD]
- Background: Clean, light
- Text: Dark, readable

**Typography**:
- Headlines: Bold, authoritative
- Body: Clean, readable at length (blog posts are 1500-3000 words)
- Quotes: Distinctive for Alex's takes

**Visual Style**:
- Photography: Real farm imagery, not stock
- Data visualization: Clean charts for Fielder comparisons
- Video embeds: YouTube integration for Myth Slayer content

### Phase 1 MVP

1. Home page (mission-forward)
2. About page
3. Blog with 3-5 initial posts
4. Newsletter signup
5. Basic Fielder "what we measure" page
6. Brand links

### Phase 2

1. Newsletter archive
2. Fielder live data integration
3. Video content section
4. Advanced blog filtering
5. Search

### Phase 3

1. Member/subscriber features
2. Recipe/pairing content
3. Interactive comparisons
4. User-generated content (reviews)
