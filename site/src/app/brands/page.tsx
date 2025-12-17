import Link from 'next/link';

export const metadata = {
  title: 'Find Your Fit | Indrio Fields',
  description: 'Florida citrus, Texas grapefruit, American Wagyu beef. Different products for different tables—same commitment to growing it right.',
};

const brands = [
  {
    name: 'Hale Groves',
    tagline: 'Florida citrus that makes people ask where you got it.',
    forYou: 'Perfect for: Gift-givers, citrus lovers, families who remember what oranges used to taste like.',
    whatYouGet: [
      '11°+ brix minimum (vs 8-10° grocery)',
      'Shipped within days of harvest',
      'Indian River region—the best citrus soil in America',
    ],
    origin: 'Founded in 1947 by Steve and Polly Hale after Steve returned from the Naval Reserve. Our families acquired it in 2006.',
    href: 'https://halegroves.com',
    cta: 'Shop Citrus',
  },
  {
    name: 'Pittman & Davis',
    tagline: 'Texas Ruby Reds and heritage varieties you won\'t find in stores.',
    forYou: 'Perfect for: Texans, grapefruit lovers, people who want specialty foods with their citrus.',
    whatYouGet: [
      'Rio Grande Valley citrus since 1926',
      'Hand-picked, every piece inspected',
      'Smoked meats and specialty foods',
    ],
    origin: 'Founded by Frank Davis and Harold Pittman in Harlingen, Texas. They started shipping tree-ripened grapefruit when most citrus was picked green.',
    href: 'https://pittmandavis.com',
    cta: 'Shop Texas Citrus',
  },
  {
    name: 'Sun Harvest Citrus',
    tagline: 'Fresh-squeezed juice made while you watch.',
    forYou: 'Perfect for: Fort Myers visitors, locals who want farm-fresh, anyone who\'s never had real orange juice.',
    whatYouGet: [
      'Juice squeezed the day you drink it',
      'Watch it happen at our farm store',
      'Local honey, citrus products, famous soft-serve',
    ],
    origin: 'Opened in 1990 by Sandy McKenzie Nicely. She wanted to bring Indian River quality to Southwest Florida.',
    href: 'https://sunharvestcitrus.com',
    cta: 'Visit Us in Fort Myers',
  },
  {
    name: 'Everglades Ranch',
    tagline: 'American Wagyu with omega-3s you can actually measure.',
    forYou: 'Perfect for: Health-conscious families, people who\'ve been disappointed by "grass-fed" labels, serious home cooks.',
    whatYouGet: [
      '6:1 omega ratio (vs 15-20:1 feedlot)',
      '1313% more EPA omega-3s than USDA average',
      '24 months on pasture—twice the industry standard',
    ],
    origin: 'For over 85 years, we\'ve raised cattle in Florida\'s Greater Everglades. We introduced Japanese Wagyu genetics to create American Wagyu that\'s both flavorful and nutritious.',
    href: 'https://evergladesranch.com',
    cta: 'Shop Beef',
  },
];

export default function BrandsPage() {
  return (
    <>
      {/* Hero - Customer Choice */}
      <section className="section section-parchment texture-paper">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm uppercase tracking-widest mb-4" style={{ color: 'var(--color-accent)' }}>
              Find Your Fit
            </p>
            <h1 className="mb-6">Different Products.<br />Same Standard.</h1>
            <p className="lead">
              Whether you want Florida citrus, Texas grapefruit, or grass-finished beef—every brand
              ships directly from family farms, grown for flavor and nutrition. Pick what your family will love.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Picker */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-8">What Are You Looking For?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <a href="#hale-groves" className="card p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">🍊</div>
                <h3 className="text-lg font-medium mb-2">Florida Citrus</h3>
                <p className="text-sm text-stone-600">Gift boxes, navels, grapefruit</p>
              </a>
              <a href="#pittman-davis" className="card p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">⭐</div>
                <h3 className="text-lg font-medium mb-2">Texas Ruby Reds</h3>
                <p className="text-sm text-stone-600">Heritage citrus, specialty foods</p>
              </a>
              <a href="#sun-harvest" className="card p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">🥤</div>
                <h3 className="text-lg font-medium mb-2">Fresh Juice</h3>
                <p className="text-sm text-stone-600">Same-day squeezed, Fort Myers</p>
              </a>
              <a href="#everglades-ranch" className="card p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">🥩</div>
                <h3 className="text-lg font-medium mb-2">Grass-Finished Beef</h3>
                <p className="text-sm text-stone-600">American Wagyu, real omega-3s</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Details */}
      <section className="section section-cream">
        <div className="container">
          <div className="space-y-16">
            {brands.map((brand, index) => (
              <div
                key={brand.name}
                id={brand.name.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '')}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-start ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Info Side */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <h2 className="text-3xl mb-2">{brand.name}</h2>
                  <p className="text-xl mb-4" style={{ color: 'var(--color-accent)' }}>
                    {brand.tagline}
                  </p>

                  <p className="text-sm font-medium mb-6 px-4 py-2 rounded-lg" style={{ backgroundColor: 'var(--color-cream)' }}>
                    {brand.forYou}
                  </p>

                  {/* What You Get */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium uppercase tracking-wide mb-3">What You Get</h4>
                    <ul className="space-y-2">
                      {brand.whatYouGet.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span style={{ color: 'var(--color-forest)' }}>✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Origin - Collapsed */}
                  <p className="text-sm text-stone-600 mb-6 italic">
                    {brand.origin}
                  </p>

                  <a
                    href={brand.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    {brand.cta} →
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
                        [Product imagery coming soon]
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Standard */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-8">One Standard Across All Brands</h2>
            <p className="text-center text-lg mb-8">
              Different products, but every brand follows the same principles. Here&apos;s what that means for you.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="card p-6 text-center">
                <div className="text-2xl mb-3" style={{ color: 'var(--color-forest)' }}>📍</div>
                <h3 className="text-lg font-medium mb-2">Know Where It&apos;s From</h3>
                <p className="text-sm text-stone-600">
                  Every product traces back to specific farms and ranches. No anonymous supply chains.
                </p>
              </div>
              <div className="card p-6 text-center">
                <div className="text-2xl mb-3" style={{ color: 'var(--color-forest)' }}>📊</div>
                <h3 className="text-lg font-medium mb-2">Numbers, Not Marketing</h3>
                <p className="text-sm text-stone-600">
                  Brix levels. Omega ratios. Finishing time. We measure what matters and tell you straight.
                </p>
              </div>
              <div className="card p-6 text-center">
                <div className="text-2xl mb-3" style={{ color: 'var(--color-forest)' }}>🚚</div>
                <h3 className="text-lg font-medium mb-2">Fresh to Your Door</h3>
                <p className="text-sm text-stone-600">
                  Picked ripe and shipped fast. No weeks in cold storage waiting to be bought.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Not Sure? */}
      <section className="section section-cream">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-4">Not Sure Where to Start?</h2>
            <p className="text-lg mb-8">
              Most families start with citrus—it&apos;s the most obvious difference. Send a gift box to
              someone you love, or order one for your own table. You&apos;ll understand immediately why
              brix matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://halegroves.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Start With Florida Citrus
              </a>
              <a
                href="https://pittmandavis.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Or Try Texas Ruby Reds
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section section-forest">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-4">Questions?</h2>
            <p className="lead mb-8 text-white/90">
              We&apos;re real people, not a call center. If you want to know more about how we grow,
              where your food comes from, or which product is right for you—just ask.
            </p>
            <Link href="/newsletter" className="btn btn-primary">
              Get The Field Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
