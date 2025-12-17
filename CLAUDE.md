# Indrio Website Project

Website redesign for Indrio Fields - the parent brand platform.

## Current State

- **Platform**: WordPress
- **URL**: [TBD - need current URL]
- **Status**: Existing site to be replaced

## Project Goals

### Strategic Alignment

The website is part of the broader "become a media company" strategy. It should:
1. **Lead with beliefs** - Mission and WHY before products
2. **Establish guide authority** - Position Alex/Indrio as the trusted voice
3. **Support content engine** - Blog, newsletter signup, video embeds
4. **Connect to Fielder** - Quality verification, comparison data
5. **Enable brand portfolio** - Hale Groves, Pittman & Davis, Everglades Ranch

### Site Hierarchy (Belief-Driven)

```
HOME
├── WHY (Mission, S.H.A.R.E. framework)
├── CONTENT (Blog, Newsletter, Videos)
├── FIELDER (Quality verification, comparisons)
├── BRANDS
│   ├── Hale Groves (citrus)
│   ├── Pittman & Davis (citrus)
│   └── Everglades Ranch (beef)
└── ABOUT (Alex's story, team)
```

### Key Pages

1. **Home** - Mission-forward, not product-forward
2. **Blog** - SEO/credibility content (see content-channel-processes.md)
3. **Newsletter** - Signup, archive of past issues
4. **Fielder** - Quality scores, comparison library
5. **Brand pages** - Link out to individual brand sites for purchasing

## Technical Considerations

### Options to Evaluate

| Option | Pros | Cons |
|--------|------|------|
| **Next.js + Headless CMS** | Fast, modern, composable | More complex, needs hosting |
| **Webflow** | Visual, fast to build, hosting included | Less flexible, monthly cost |
| **WordPress (redesign)** | Familiar, existing content | Slower, security concerns |
| **Static site (Hugo/Astro)** | Blazing fast, cheap hosting | Limited dynamic features |

### Requirements Checklist

- [ ] Blog with good SEO
- [ ] Newsletter signup (integration TBD)
- [ ] Video embeds (YouTube)
- [ ] Mobile responsive
- [ ] Fast page load
- [ ] Easy content updates (non-technical)
- [ ] Analytics integration
- [ ] Fielder data display (API or static)

## Content Strategy Integration

Blog content follows the process in `/docs/content-channel-processes.md`:
- 2-4 posts/month
- Long-form educational (1500-3000 words)
- Myth busters, explainers, news analysis, comparisons

## Questions to Resolve

1. What's the current WordPress URL?
2. Keep any existing content or fresh start?
3. Tech stack preference (or evaluate options)?
4. Who will maintain content after launch?
5. Budget/timeline constraints?
6. Domain considerations (indrio.com? indriofields.com?)

## Related Files

- `/docs/strategic-context.md` - Overall strategy
- `/docs/content-channel-processes.md` - Content processes
- `/CLAUDE.md` - Parent project context
