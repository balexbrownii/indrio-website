import Link from 'next/link';

export const metadata = {
  title: 'Fielder | Indrio Fields',
  description: 'The S&P Global of food quality - we prove what labels only promise. Quality verification, not certification.',
};

export default function FielderPage() {
  return (
    <>
      {/* Hero */}
      <section className="section section-parchment texture-paper">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm uppercase tracking-widest mb-4" style={{ color: 'var(--color-accent)' }}>
              The S&amp;P Global of Food Quality
            </p>
            <h1 className="mb-6">
              Fielder
            </h1>
            <p className="lead">
              We prove what labels only promise. Quality verification, not certification.
              Being on the platform IS the verification.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem We Solve */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-4">The Real Health Crisis</h2>
            <p className="text-center text-lg mb-12 text-stone-600">
              While everyone talks about pesticides, the real reasons people are getting sick:
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="card p-6" style={{ borderLeft: '4px solid var(--color-accent)' }}>
                <h3 className="text-xl mb-3">Nutrient Deficiency</h3>
                <p className="text-stone-600 mb-4">
                  Up to 50% fewer nutrients per piece of produce in 50-70 years. The root cause:
                  USDA grades on appearance → Farmers plant for yield/shipping → Dilution effect →
                  Population-wide deficiency.
                </p>
                <p className="text-sm text-stone-500 mb-0">
                  This is Albrecht&apos;s Chain playing out at scale: Soil deficiency → Plant deficiency →
                  Human deficiency → Human disease.
                </p>
              </div>

              <div className="card p-6" style={{ borderLeft: '4px solid var(--color-accent)' }}>
                <h3 className="text-xl mb-3">Excessive Omega-6 / Seed Oils</h3>
                <p className="text-stone-600 mb-4">
                  Average American diet is 15-20:1 ratio (was ~4:1 or less 100 years ago; evolutionary ~1:1).
                  Government subsidies for corn/soy → Cheap byproducts → HFCS + vegetable oils →
                  Ubiquitous in processed foods.
                </p>
                <p className="text-sm text-stone-500 mb-0">
                  Soybean oil consumption increased over 1,000-fold from 1909-1999. 4:1 ratio = 70% decrease
                  in cardiovascular mortality.
                </p>
              </div>
            </div>

            <div className="card-parchment card p-6">
              <h3 className="text-xl mb-3">What Fielder Does</h3>
              <p className="text-stone-600 mb-4">
                <strong>SHARE framework</strong> measures INTERNAL quality (what actually matters) for produce.
                <strong> Omega ratio verification</strong> for meat/dairy catches false claims.
              </p>
              <p className="text-stone-600 mb-0">
                We connect consumers with superior quality grown in USA. Farmers get paid for flavor and nutrition.
                We shift the conversation from &ldquo;absence of bad&rdquo; to &ldquo;presence of good.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brix Explained */}
      <section className="section section-cream">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-4">Understanding Brix</h2>
            <p className="text-center text-lg mb-8 text-stone-600">
              Brix = dissolved solids (carbs, minerals, vitamins). It&apos;s a proxy for nutrient density.
            </p>

            <div className="card p-6 mb-8">
              <h3 className="text-xl mb-4">Quality Tiers (Citrus)</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-stone-300">
                      <th className="text-left py-3 px-4">Tier</th>
                      <th className="text-left py-3 px-4">Brix Range</th>
                      <th className="text-left py-3 px-4">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-stone-200">
                      <td className="py-3 px-4 font-medium" style={{ color: 'var(--color-accent)' }}>Artisan</td>
                      <td className="py-3 px-4">14-18°</td>
                      <td className="py-3 px-4">Exceptional flavor, boutique cultivars</td>
                    </tr>
                    <tr className="border-b border-stone-200">
                      <td className="py-3 px-4 font-medium" style={{ color: 'var(--color-forest)' }}>Premium</td>
                      <td className="py-3 px-4">12-15°</td>
                      <td className="py-3 px-4">Heritage/heirloom, bred for flavor</td>
                    </tr>
                    <tr className="border-b border-stone-200">
                      <td className="py-3 px-4 font-medium">Standard</td>
                      <td className="py-3 px-4">10-12°</td>
                      <td className="py-3 px-4">Modern commercial, balanced</td>
                    </tr>
                    <tr className="border-b border-stone-200 bg-stone-100">
                      <td className="py-3 px-4 font-medium text-stone-500">Commodity</td>
                      <td className="py-3 px-4 text-stone-500">8-10°</td>
                      <td className="py-3 px-4 text-stone-500">Bred for yield/shipping</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="card-parchment card p-6">
              <p className="text-stone-600 mb-3">
                <strong>Key insight:</strong> A conventional apple with 14 Brix is MORE nutritious than an
                organic apple with 10 Brix. The health benefit comes from what&apos;s IN the food, not what&apos;s
                allegedly NOT on it.
              </p>
              <p className="text-stone-600 mb-0">
                <strong>Our standard:</strong> All Indrio citrus brands ship at Premium tier minimum (11°+ brix).
                We reject fruit that doesn&apos;t meet the standard—even when it means smaller shipments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Omega Ratio Table */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-4">Omega Ratio Table (Beef)</h2>
            <p className="text-center text-lg mb-8 text-stone-600">
              For beef, the omega-6 to omega-3 ratio tells the real story. Fatty acids accumulate
              in tissue—the animal&apos;s fat profile directly reflects its diet.
            </p>

            <div className="card p-6 mb-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-stone-300">
                      <th className="text-left py-3 px-4">Ratio</th>
                      <th className="text-left py-3 px-4">Classification</th>
                      <th className="text-left py-3 px-4">What It Means</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-stone-200">
                      <td className="py-3 px-4 font-medium" style={{ color: 'var(--color-forest)' }}>2-3:1</td>
                      <td className="py-3 px-4" style={{ color: 'var(--color-forest)' }}>Exceptional</td>
                      <td className="py-3 px-4">True 100% grass-fed, anti-inflammatory</td>
                    </tr>
                    <tr className="border-b border-stone-200">
                      <td className="py-3 px-4 font-medium" style={{ color: 'var(--color-forest)' }}>4-6:1</td>
                      <td className="py-3 px-4" style={{ color: 'var(--color-forest)' }}>Premium</td>
                      <td className="py-3 px-4">True pasture-raised (Everglades Ranch)</td>
                    </tr>
                    <tr className="border-b border-stone-200">
                      <td className="py-3 px-4 font-medium">8-15:1</td>
                      <td className="py-3 px-4">Marketing Grass</td>
                      <td className="py-3 px-4">&ldquo;Grass-fed&rdquo; but grain-finished (3-4 months CAFO)</td>
                    </tr>
                    <tr className="border-b border-stone-200">
                      <td className="py-3 px-4 font-medium">12-18:1</td>
                      <td className="py-3 px-4">Marketing Pasture</td>
                      <td className="py-3 px-4">&ldquo;Pasture-raised&rdquo; but CAFO finished (3-6 months)</td>
                    </tr>
                    <tr className="border-b border-stone-200 bg-stone-100">
                      <td className="py-3 px-4 font-medium text-stone-500">15-20:1</td>
                      <td className="py-3 px-4 text-stone-500">Commodity</td>
                      <td className="py-3 px-4 text-stone-500">Standard feedlot (6-8 months CAFO)</td>
                    </tr>
                    <tr className="bg-red-50">
                      <td className="py-3 px-4 font-medium text-red-600">20-26:1</td>
                      <td className="py-3 px-4 text-red-600">Premium CAFO (WORST)</td>
                      <td className="py-3 px-4 text-red-600">Wagyu/Prime with 12+ months grain (most expensive, worst for health)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="card-parchment card p-6">
              <h3 className="text-xl mb-3">The Price vs Health Inversion</h3>
              <p className="text-stone-600 mb-3">
                <strong>The most expensive beef (Premium Wagyu at 20-26:1) has the WORST omega profile.</strong>
                Extended CAFO time (12+ months) maximizes omega-6 accumulation. Consumers pay 5x more
                for beef that&apos;s actively worse for them.
              </p>
              <p className="text-stone-600 mb-0">
                <strong>Everglades Ranch:</strong> American Wagyu genetics on Florida pasture—getting the flavor
                genetics without the inflammatory fat profile (4-6:1 ratio).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Methodology */}
      <section className="section section-cream">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4">Our Methodology</h2>
            <p className="text-lg text-stone-600 mb-8">
              How we measure, what we test, and why our data is trustworthy.
            </p>
            <Link href="/fielder/methodology" className="btn btn-primary">
              See Full Methodology
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-forest">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Understand the Framework</h2>
            <p className="text-lg text-white/90 mb-8">
              Data tells the story. Learn how we measure quality and why
              these metrics matter for your health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/learn/share-framework" className="btn btn-primary">
                Learn S.H.A.R.E.
              </Link>
              <Link href="/learn" className="btn btn-outline border-white text-white hover:bg-white/10">
                Food Quality 101
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
