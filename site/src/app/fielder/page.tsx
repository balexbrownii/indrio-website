import Link from 'next/link';

export const metadata = {
  title: 'Fielder | Indrio Fields',
  description: 'The verification engine for farm-to-table food quality. Quality scores, cultivar data, and comparison reports.',
};

export default function FielderPage() {
  return (
    <>
      {/* Hero */}
      <section className="section section-parchment texture-paper">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm uppercase tracking-widest mb-4" style={{ color: 'var(--color-accent)' }}>
              The Verification Engine
            </p>
            <h1 className="mb-6">
              Fielder
            </h1>
            <p className="lead">
              We measure what labels only promise. Quality scores, cultivar data,
              and comparison reports—because marketing claims need receipts.
            </p>
          </div>
        </div>
      </section>

      {/* What Fielder Does */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-4">What Fielder Does</h2>
            <p className="text-center text-lg mb-12 text-stone-600">
              A verification system for food quality. Data over stories.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="card p-6">
                <div className="text-3xl mb-3">📊</div>
                <h3 className="text-xl mb-3">Quality Scores</h3>
                <p className="text-stone-600 mb-4">
                  We score products and farms based on measurable outcomes—not certifications
                  they bought or marketing claims they make. Brix levels, omega ratios, and
                  other verifiable data.
                </p>
                <Link href="/fielder/methodology" className="text-sm font-medium" style={{ color: 'var(--color-forest)' }}>
                  See Methodology →
                </Link>
              </div>

              <div className="card p-6">
                <div className="text-3xl mb-3">🍊</div>
                <h3 className="text-xl mb-3">Cultivar Database</h3>
                <p className="text-stone-600 mb-4">
                  Research-backed data on fruit varieties. What brix range can you expect
                  from a Washington Navel vs. a Cara Cara? When are they in season?
                  What&apos;s realistic to expect?
                </p>
                <span className="text-sm text-stone-400">Coming Soon</span>
              </div>

              <div className="card p-6">
                <div className="text-3xl mb-3">⚖️</div>
                <h3 className="text-xl mb-3">Comparison Library</h3>
                <p className="text-stone-600 mb-4">
                  Side-by-side quality comparisons. We buy competitor products, test them,
                  and publish the results. Same label, different nutrition—the data speaks.
                </p>
                <span className="text-sm text-stone-400">Coming Soon</span>
              </div>

              <div className="card p-6">
                <div className="text-3xl mb-3">📍</div>
                <h3 className="text-xl mb-3">Farm Discovery</h3>
                <p className="text-stone-600 mb-4">
                  Find quality farms and producers. Verified sources you can trust,
                  with the data to back up their claims.
                </p>
                <span className="text-sm text-stone-400">Coming Soon</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Tiers */}
      <section className="section section-cream">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-4">Quality Tiers</h2>
            <p className="text-center text-lg mb-12 text-stone-600">
              Not all &ldquo;premium&rdquo; is equal. Here&apos;s our classification system for citrus.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-stone-300">
                    <th className="text-left py-3 px-4">Tier</th>
                    <th className="text-left py-3 px-4">Brix Range</th>
                    <th className="text-left py-3 px-4">Description</th>
                    <th className="text-left py-3 px-4">Typical Source</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-stone-200">
                    <td className="py-3 px-4 font-medium" style={{ color: 'var(--color-accent)' }}>Artisan</td>
                    <td className="py-3 px-4">14-18°</td>
                    <td className="py-3 px-4">Exceptional quality. Boutique producers, meticulous practices.</td>
                    <td className="py-3 px-4">Small farms, direct relationships</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="py-3 px-4 font-medium" style={{ color: 'var(--color-forest)' }}>Premium</td>
                    <td className="py-3 px-4">12-15°</td>
                    <td className="py-3 px-4">Heritage varieties bred for flavor and nutrition.</td>
                    <td className="py-3 px-4">Quality-focused growers</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="py-3 px-4 font-medium">Standard</td>
                    <td className="py-3 px-4">10-12°</td>
                    <td className="py-3 px-4">Modern commercial with balanced traits. Above minimum.</td>
                    <td className="py-3 px-4">Better grocery options</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-stone-100">
                    <td className="py-3 px-4 font-medium text-stone-500">Commodity</td>
                    <td className="py-3 px-4 text-stone-500">8-10°</td>
                    <td className="py-3 px-4 text-stone-500">Bred for yield and shipping. Grocery store default.</td>
                    <td className="py-3 px-4 text-stone-500">Most supermarkets</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="card-parchment card p-6 mt-8">
              <p className="mb-0">
                <strong>Our standard:</strong> All Indrio citrus brands ship at Premium tier minimum (11°+ brix).
                We reject fruit that doesn&apos;t meet the standard—even when it means smaller shipments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Omega Classifications */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-4">Omega Ratio Classifications</h2>
            <p className="text-center text-lg mb-12 text-stone-600">
              For beef, the omega-6 to omega-3 ratio tells the real story.
            </p>

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
                    <td className="py-3 px-4 font-medium" style={{ color: 'var(--color-forest)' }}>≤3:1</td>
                    <td className="py-3 px-4" style={{ color: 'var(--color-forest)' }}>Exceptional</td>
                    <td className="py-3 px-4">True 100% grass-fed, anti-inflammatory profile</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="py-3 px-4 font-medium" style={{ color: 'var(--color-forest)' }}>3-6:1</td>
                    <td className="py-3 px-4" style={{ color: 'var(--color-forest)' }}>Premium</td>
                    <td className="py-3 px-4">Good grass-finished (Everglades Ranch: 6:1)</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <td className="py-3 px-4 font-medium">6-12:1</td>
                    <td className="py-3 px-4">Standard</td>
                    <td className="py-3 px-4">Mixed feeding regime, better than feedlot</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-stone-100">
                    <td className="py-3 px-4 font-medium text-stone-500">&gt;12:1</td>
                    <td className="py-3 px-4 text-stone-500">Commodity</td>
                    <td className="py-3 px-4 text-stone-500">Feedlot/grain-fed, pro-inflammatory</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-red-50">
                    <td className="py-3 px-4 font-medium text-red-600">15-20:1</td>
                    <td className="py-3 px-4 text-red-600">Feedlot</td>
                    <td className="py-3 px-4 text-red-600">Industry standard CAFO beef</td>
                  </tr>
                  <tr className="bg-red-50">
                    <td className="py-3 px-4 font-medium text-red-600">20-26:1</td>
                    <td className="py-3 px-4 text-red-600">Premium CAFO</td>
                    <td className="py-3 px-4 text-red-600">Extended grain finishing (Wagyu, Prime grades)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="card-parchment card p-6 mt-8">
              <p className="mb-0">
                <strong>The irony:</strong> The most expensive beef grades (Wagyu, Prime) often have the
                worst omega ratios because marbling comes from grain finishing. Price doesn&apos;t equal health.
                Everglades Ranch produces American Wagyu genetics on 100% grass—getting the flavor
                genetics without the inflammatory fat profile.
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
            <h2 className="mb-6">Experience the Difference</h2>
            <p className="text-lg text-white/90 mb-8">
              Data tells the story. But your taste buds will confirm it.
              Try products from farms that meet S.H.A.R.E. standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/brands" className="btn btn-primary">
                See Our Brands
              </Link>
              <Link href="/learn" className="btn btn-outline border-white text-white hover:bg-white/10">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
