import Link from 'next/link';

export const metadata = {
  title: 'The Proof | Indrio Fields',
  description: 'Brands that meet S.H.A.R.E. standards. Florida citrus, Texas grapefruit, grass-finished beef—evidence that measuring quality produces better food.',
};

const brands = [
  {
    name: 'Hale Groves',
    category: 'Florida Citrus',
    shareScore: {
      soil: 'Indian River region—mineral-rich, sandy loam',
      heritage: 'Washington Navel, Cara Cara, heritage varieties',
      agricultural: 'Minimal synthetic inputs, integrated pest management',
      ripen: 'Tree-ripened, never picked green',
      enrich: '11°+ brix verified at harvest',
    },
    metrics: [
      { label: 'Brix Minimum', value: '11°+', comparison: 'vs 8-10° grocery' },
      { label: 'Days to Ship', value: '2-3', comparison: 'vs weeks in storage' },
      { label: 'Family Farming Since', value: '1947', comparison: '' },
    ],
    href: 'https://halegroves.com',
  },
  {
    name: 'Pittman & Davis',
    category: 'Texas Citrus',
    shareScore: {
      soil: 'Rio Grande Valley alluvial soil',
      heritage: 'Ruby Red grapefruit, heritage varieties',
      agricultural: 'Hand-picked, every piece inspected',
      ripen: 'Tree-ripened Texas citrus',
      enrich: 'Quality verification at packing',
    },
    metrics: [
      { label: 'Founded', value: '1926', comparison: 'nearly 100 years' },
      { label: 'Inspection', value: '100%', comparison: 'every piece by hand' },
      { label: 'Varieties', value: 'Heritage', comparison: 'not commodity' },
    ],
    href: 'https://pittmandavis.com',
  },
  {
    name: 'Sun Harvest Citrus',
    category: 'Fresh Juice',
    shareScore: {
      soil: 'Southwest Florida citrus region',
      heritage: 'Juice oranges selected for flavor',
      agricultural: 'Local sourcing, reduced transport',
      ripen: 'Squeezed same day',
      enrich: 'No pasteurization, no concentrate',
    },
    metrics: [
      { label: 'Squeeze to Glass', value: 'Hours', comparison: 'vs months in processing' },
      { label: 'Pasteurization', value: 'None', comparison: 'never heat-treated' },
      { label: 'Concentrate', value: 'Never', comparison: 'not reconstituted' },
    ],
    href: 'https://sunharvestcitrus.com',
  },
  {
    name: 'Everglades Ranch',
    category: 'Grass-Finished Beef',
    shareScore: {
      soil: 'Florida pastures, Greater Everglades region',
      heritage: 'American Wagyu genetics for marbling',
      agricultural: '100% grass, no feedlot, no grain finish',
      ripen: '24 months to finish (vs 12-14 industry)',
      enrich: '6:1 omega ratio verified by lab',
    },
    metrics: [
      { label: 'Omega Ratio', value: '6:1', comparison: 'vs 15-20:1 feedlot' },
      { label: 'EPA Omega-3', value: '+1313%', comparison: 'vs USDA average' },
      { label: 'Time on Pasture', value: '24 mo', comparison: 'vs 12-14 mo standard' },
    ],
    href: 'https://evergladesranch.com',
  },
];

export default function BrandsPage() {
  return (
    <>
      {/* Hero - Brands as Proof */}
      <section className="section section-parchment texture-paper">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm uppercase tracking-widest mb-4" style={{ color: 'var(--color-accent)' }}>
              The Proof
            </p>
            <h1 className="mb-6">Evidence the Framework Works</h1>
            <p className="lead">
              These aren&apos;t just products we sell. They&apos;re case studies—proof that when you apply
              S.H.A.R.E. principles and actually measure outcomes, you get food that tastes different
              and nourishes better.
            </p>
          </div>
        </div>
      </section>

      {/* Why These Brands */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-4">Why These Brands Exist</h2>
            <p className="text-lg text-center mb-8 text-stone-600">
              We didn&apos;t start with brands. We started with a framework for food quality.
              These brands are what happens when you apply it.
            </p>

            <div className="card-parchment card p-6 mb-12">
              <p className="text-lg mb-0">
                <strong>The conventional path:</strong> Buy the cheapest supply. Put a premium label on it.
                Make claims you can&apos;t verify.<br /><br />
                <strong>Our path:</strong> Define what quality means. Measure it. Find farms that meet the standard.
                Build brands that prove the framework works.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Cards - As Case Studies */}
      <section className="section section-cream">
        <div className="container">
          <div className="space-y-16">
            {brands.map((brand) => (
              <div key={brand.name} className="card p-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Brand Overview */}
                  <div>
                    <p className="text-xs uppercase tracking-wider text-stone-500 mb-1">{brand.category}</p>
                    <h2 className="text-2xl mb-4">{brand.name}</h2>

                    {/* Key Metrics */}
                    <div className="space-y-3">
                      {brand.metrics.map((metric) => (
                        <div key={metric.label} className="flex justify-between items-baseline">
                          <span className="text-sm text-stone-600">{metric.label}</span>
                          <div className="text-right">
                            <span className="font-bold" style={{ color: 'var(--color-forest)' }}>{metric.value}</span>
                            {metric.comparison && (
                              <span className="text-xs text-stone-400 ml-2">{metric.comparison}</span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    <a
                      href={brand.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary mt-6 inline-block"
                    >
                      Visit {brand.name} →
                    </a>
                  </div>

                  {/* S.H.A.R.E. Breakdown */}
                  <div className="lg:col-span-2">
                    <h3 className="text-lg font-medium mb-4">How They Meet S.H.A.R.E. Standards</h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {Object.entries(brand.shareScore).map(([key, value]) => (
                        <div key={key} className="p-3 rounded-lg" style={{ backgroundColor: 'var(--color-cream)' }}>
                          <span className="text-xs font-bold uppercase tracking-wide" style={{ color: 'var(--color-accent)' }}>
                            {key.charAt(0).toUpperCase()}
                          </span>
                          <span className="text-xs uppercase tracking-wide text-stone-500 ml-1">
                            {key}
                          </span>
                          <p className="text-sm text-stone-600 mt-1 mb-0">{value}</p>
                        </div>
                      ))}
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
            <h2 className="text-center mb-8">What They All Share</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="card p-6">
                <h3 className="text-lg font-medium mb-3">Traceability</h3>
                <p className="text-stone-600 mb-0">
                  Every product traces back to specific farms and ranches. Not anonymous commodity supply.
                  You can know where your food comes from.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-lg font-medium mb-3">Verified Quality</h3>
                <p className="text-stone-600 mb-0">
                  Claims backed by measurement. Brix testing for citrus. Lab analysis for beef.
                  Not marketing—data.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-lg font-medium mb-3">Fair Farmer Compensation</h3>
                <p className="text-stone-600 mb-0">
                  We pay farmers for quality, not just volume. This changes what they can afford to grow.
                  Better for them, better for you.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-lg font-medium mb-3">Direct Connection</h3>
                <p className="text-stone-600 mb-0">
                  Ship direct to you. Fewer middlemen means fresher food and more money staying with the people who grow it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Start Somewhere */}
      <section className="section section-cream">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-4">Experience It Yourself</h2>
            <p className="text-lg mb-8 text-stone-600">
              The best way to understand quality is to taste it. Start with citrus—the difference
              between 11° brix and 8° brix is immediately obvious. You don&apos;t need a refractometer.
              Your taste buds will tell you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://halegroves.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Try Florida Citrus
              </a>
              <a
                href="https://evergladesranch.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Try Grass-Finished Beef
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Learn More */}
      <section className="section section-forest">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-4">Want to Understand the Framework?</h2>
            <p className="lead mb-8 text-white/90">
              Learn what S.H.A.R.E. means, why these metrics matter, and how to evaluate food quality
              whether you&apos;re buying from us or anywhere else.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/learn/share-framework" className="btn btn-primary">
                Learn S.H.A.R.E.
              </Link>
              <Link href="/fielder" className="btn btn-outline border-white text-white hover:bg-white/10">
                Explore Fielder
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
