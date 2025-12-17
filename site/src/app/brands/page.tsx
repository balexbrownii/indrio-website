import Link from 'next/link';

export const metadata = {
  title: 'Our Brands | Indrio Fields',
  description: 'The Indrio Fields family of brands. Farmer-owned. Grown in the USA. Rooted in flavor and nutrition.',
};

const brands = [
  {
    name: 'Hale Groves',
    tagline: 'Florida citrus since 1947.',
    origin: 'Founded by Steve and Polly Hale, who opened their first roadside fruit stand in Vero Beach after Steve returned from active duty in the U.S. Naval Reserve.',
    description: 'The Brown and Scott families acquired Hale Groves in 2006, bringing over 200 years of combined farming experience. We ship within days of harvest—never stored in warehouses. The sweet spot between ocean and river that produces the best citrus in America.',
    metrics: [
      { label: 'Brix Minimum', value: '11-14°', note: 'Grocery average: 6-8°' },
      { label: 'Founded', value: '1947', note: 'Vero Beach, Florida' },
      { label: 'Location', value: 'Indian River', note: 'Florida\'s citrus belt' },
    ],
    products: ['Navel Oranges', 'Ruby Red Grapefruit', 'Honeybells', 'Gift Baskets'],
    href: 'https://halegroves.com',
    featured: true,
  },
  {
    name: 'Pittman & Davis',
    tagline: 'Texas citrus since 1926.',
    origin: 'Founded by partners Frank Davis and Harold Pittman in Harlingen, Texas. They started shipping tree-ripened Rio Grande Valley grapefruit when most citrus was picked green.',
    description: 'Pittman & Davis joined the Indrio Fields family in 2008, preserving its Texan roots while expanding to specialty foods. We still work with small farms and heritage fruit varieties, honoring a legacy of quality handed down through generations.',
    metrics: [
      { label: 'Selection', value: 'Hand-picked', note: 'Every piece inspected' },
      { label: 'Founded', value: '1926', note: 'Harlingen, Texas' },
      { label: 'Location', value: 'Rio Grande Valley', note: 'Texas citrus country' },
    ],
    products: ['Texas Oranges', 'Ruby Red Grapefruit', 'Smoked Meats', 'Gift Boxes'],
    href: 'https://pittmandavis.com',
    featured: true,
  },
  {
    name: 'Sun Harvest Citrus',
    tagline: 'Fresh-squeezed since 1990.',
    origin: 'Opened by Sandy McKenzie Nicely on Metro Parkway in Fort Myers. She wanted to bring Indian River fruit to Southwest Florida—and let people watch it being squeezed.',
    description: 'For over 30 years, Sun Harvest has been one of the best places to visit in Fort Myers. Fresh-squeezed juice made while you watch, handpicked citrus, tropical wines, and famous soft-serve ice cream. A true Florida experience.',
    metrics: [
      { label: 'Freshness', value: 'Same-day', note: 'Squeezed when you order' },
      { label: 'Founded', value: '1990', note: 'Fort Myers, Florida' },
      { label: 'Experience', value: '1,300+ reviews', note: 'TripAdvisor' },
    ],
    products: ['Fresh-Squeezed Juice', 'Citrus by the Box', 'Local Honey', 'Citrus Products'],
    href: 'https://sunharvestcitrus.com',
    featured: true,
  },
  {
    name: 'Everglades Ranch',
    tagline: 'American Wagyu since 1938.',
    origin: 'For over 85 years, Everglades Ranch has raised cattle in Florida\'s Greater Everglades region. We introduced Japanese Wagyu into our Black Angus herd to create premium American Wagyu.',
    description: 'Our cattle graze freely on high-Brix forages—nutrient-dense grasses, legumes, and brassicas. Twenty-four months to finish, twice the industry standard. No feedlots, no grain finishing. The result: beef with unmatched marbling and an omega-6 to omega-3 ratio of 2.5:1.',
    metrics: [
      { label: 'EPA Omega-3', value: '+1313%', note: 'vs USDA ground beef' },
      { label: 'Omega Ratio', value: '2.5:1', note: 'vs 7:1 grain-fed' },
      { label: 'Time to Finish', value: '24 months', note: 'Twice industry standard' },
    ],
    products: ['Ribeye', 'New York Strip', 'Ground Beef', 'Variety Boxes'],
    href: 'https://evergladesranch.com',
    featured: true,
  },
];

export default function BrandsPage() {
  return (
    <>
      {/* Hero */}
      <section className="section section-parchment texture-paper">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm uppercase tracking-widest mb-4" style={{ color: 'var(--color-accent)' }}>
              The Indrio Fields Family of Brands
            </p>
            <h1 className="mb-6">Farmer-Owned.<br />Grown in the USA.<br />Rooted in Flavor and Nutrition.</h1>
            <p className="lead">
              Different products. Same standards. Every brand pays farmers for flavor and nutrition.
            </p>
          </div>
        </div>
      </section>

      {/* Quality Promise - Simplified */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="card-parchment card p-8 text-center">
              <h2 className="text-2xl mb-4">One Standard Across All Brands</h2>
              <p className="text-lg mb-6">
                Every brand follows our S.H.A.R.E. principles—the same commitment to soil health,
                heritage varieties, minimal inputs, peak ripening, and fair farmer payment.
              </p>
              <Link href="/mission" className="btn btn-secondary">
                See How We Grow Different →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Cards */}
      <section className="section section-cream">
        <div className="container">
          <div className="space-y-16">
            {brands.map((brand, index) => (
              <div
                key={brand.name}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Info Side */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-3xl mb-0">{brand.name}</h2>
                  </div>
                  <p className="text-xl mb-4" style={{ color: 'var(--color-accent)' }}>
                    {brand.tagline}
                  </p>
                  <p className="text-sm italic mb-4 text-stone-600">
                    {brand.origin}
                  </p>
                  <p className="mb-6">{brand.description}</p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {brand.metrics.map((metric) => (
                      <div key={metric.label} className="text-center">
                        <div
                          className="text-2xl font-bold mb-1"
                          style={{ color: 'var(--color-forest)' }}
                        >
                          {metric.value}
                        </div>
                        <div className="text-sm font-medium">{metric.label}</div>
                        <div className="text-xs text-stone-500">{metric.note}</div>
                      </div>
                    ))}
                  </div>

                  {/* Products */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium uppercase tracking-wide mb-2">Products</h4>
                    <div className="flex flex-wrap gap-2">
                      {brand.products.map((product) => (
                        <span
                          key={product}
                          className="text-sm px-3 py-1 rounded-full bg-white border border-stone-200"
                        >
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={brand.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Shop {brand.name} →
                  </a>
                </div>

                {/* Placeholder Image Side */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div
                    className="aspect-[4/3] rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: 'var(--color-cream-dark)' }}
                  >
                    <div className="text-center p-8">
                      <div
                        className="text-6xl font-bold mb-4"
                        style={{ fontFamily: 'var(--font-display)', color: 'var(--color-forest)' }}
                      >
                        {brand.name.split(' ')[0]}
                      </div>
                      <div className="text-stone-500 text-sm">
                        [Brand imagery coming soon]
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Multiple Brands */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-8">Why multiple brands?</h2>
            <div className="space-y-6">
              <p>
                Each brand has its own land, its own history, its own expertise.
                Hale Groves knows Indian River citrus. Pittman & Davis has curated Texas varieties for a century.
                Sun Harvest brings farm-store freshness. Everglades Ranch is preserving Florida ranchland.
              </p>
              <p>
                Our families have farmed the Southeast for over 200 years. We started Hale Groves because
                the system didn&apos;t pay us for what we were doing right. Now we&apos;ve built a platform
                for farmers ready to grow exceptional food—if someone will pay them for it.
              </p>
              <p className="text-xl font-medium" style={{ color: 'var(--color-forest)' }}>
                We pay farmers for flavor and nutrition. We connect them to people who care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-forest">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-4">Grow Different. Eat Better.<br />Fix the Food System.</h2>
            <p className="lead mb-8 text-white/90">
              Pick a brand. Taste the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://halegroves.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Shop Hale Groves
              </a>
              <a
                href="https://pittmandavis.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline border-white text-white hover:bg-white/10"
              >
                Shop Pittman & Davis
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
