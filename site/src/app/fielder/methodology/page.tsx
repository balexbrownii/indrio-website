import Link from 'next/link';

export const metadata = {
  title: 'Methodology | Fielder | Indrio Fields',
  description: 'How we measure food quality. Our testing methods, data sources, and verification processes.',
};

export default function MethodologyPage() {
  return (
    <>
      {/* Hero */}
      <section className="section section-parchment texture-paper">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm uppercase tracking-widest mb-4" style={{ color: 'var(--color-accent)' }}>
              Fielder
            </p>
            <h1 className="mb-6">
              Our Methodology
            </h1>
            <p className="lead">
              How we measure, what we test, and why you can trust the data.
              Transparency isn&apos;t optional—it&apos;s the whole point.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-8">Our Principles</h2>

            <div className="space-y-8">
              <div className="card p-6" style={{ borderLeft: '4px solid var(--color-forest)' }}>
                <h3 className="text-xl mb-3">Measure Outcomes, Not Inputs</h3>
                <p className="text-stone-600 mb-0">
                  We don&apos;t care what certifications a farm has. We care what the food
                  actually contains. A farm can follow perfect practices and still produce
                  mediocre fruit if the soil is depleted or the variety is wrong. We measure
                  the result, not the process.
                </p>
              </div>

              <div className="card p-6" style={{ borderLeft: '4px solid var(--color-forest)' }}>
                <h3 className="text-xl mb-3">Show the Data</h3>
                <p className="text-stone-600 mb-0">
                  Every claim we make has a number behind it. When we say our citrus is 11°+ brix,
                  that&apos;s based on refractometer readings at harvest. When we say our beef is 6:1 omega
                  ratio, that&apos;s from lab analysis. We don&apos;t hide behind vague terms like &ldquo;premium.&rdquo;
                </p>
              </div>

              <div className="card p-6" style={{ borderLeft: '4px solid var(--color-forest)' }}>
                <h3 className="text-xl mb-3">Acknowledge Limitations</h3>
                <p className="text-stone-600 mb-0">
                  We can&apos;t test everything. Mineral density testing is expensive and not widely
                  available. Some quality factors are difficult to quantify. Where we don&apos;t have
                  data, we say so. Where our methodology has gaps, we acknowledge them.
                </p>
              </div>

              <div className="card p-6" style={{ borderLeft: '4px solid var(--color-forest)' }}>
                <h3 className="text-xl mb-3">Be Honest About Competitors</h3>
                <p className="text-stone-600 mb-0">
                  When a competitor product tests better than expected, we say so. Our goal isn&apos;t
                  to make everyone else look bad—it&apos;s to help people find quality. If someone
                  else is doing it right, that&apos;s worth knowing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Measure */}
      <section className="section section-cream">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-8">What We Measure</h2>

            <div className="space-y-12">
              {/* Citrus */}
              <div>
                <h3 className="text-2xl mb-4" style={{ color: 'var(--color-forest)' }}>Citrus</h3>

                <div className="space-y-4">
                  <div className="card p-4">
                    <h4 className="font-medium mb-2">Brix (Dissolved Solids)</h4>
                    <p className="text-sm text-stone-600 mb-2">
                      Measured with a refractometer at harvest. Brix is expressed in degrees (°Bx)
                      and represents the percentage of dissolved solids—carbohydrates, minerals, and vitamins—in the juice.
                    </p>
                    <p className="text-sm text-stone-500 mb-0">
                      <strong>Method:</strong> Random sample of fruit from each harvest lot. Juice extracted,
                      tested with calibrated digital refractometer. Multiple readings averaged.
                    </p>
                  </div>

                  <div className="card p-4">
                    <h4 className="font-medium mb-2">Acid Ratio</h4>
                    <p className="text-sm text-stone-600 mb-2">
                      The brix-to-acid ratio affects perceived sweetness. High brix with balanced acidity
                      produces the best flavor. Too little acid and fruit tastes flat.
                    </p>
                    <p className="text-sm text-stone-500 mb-0">
                      <strong>Method:</strong> Titration testing on juice samples.
                    </p>
                  </div>

                  <div className="card p-4">
                    <h4 className="font-medium mb-2">Days from Tree to Customer</h4>
                    <p className="text-sm text-stone-600 mb-2">
                      Freshness matters. We track the time from harvest to shipment.
                      Grocery store citrus can be weeks old before you see it.
                    </p>
                    <p className="text-sm text-stone-500 mb-0">
                      <strong>Method:</strong> Internal tracking from harvest date to ship date.
                    </p>
                  </div>
                </div>
              </div>

              {/* Beef */}
              <div>
                <h3 className="text-2xl mb-4" style={{ color: 'var(--color-forest)' }}>Beef</h3>

                <div className="space-y-4">
                  <div className="card p-4">
                    <h4 className="font-medium mb-2">Omega-6 to Omega-3 Ratio</h4>
                    <p className="text-sm text-stone-600 mb-2">
                      The most important health metric for beef. Measures the balance of fatty acids
                      that affect inflammation. Lower ratios are better.
                    </p>
                    <p className="text-sm text-stone-500 mb-0">
                      <strong>Method:</strong> Third-party lab analysis of fatty acid profiles.
                      EPA, DHA, ALA, and other fatty acids quantified.
                    </p>
                  </div>

                  <div className="card p-4">
                    <h4 className="font-medium mb-2">EPA/DHA Content</h4>
                    <p className="text-sm text-stone-600 mb-2">
                      These specific omega-3 fatty acids have the strongest health benefits.
                      Grass-fed beef can have 2-4x the EPA of grain-fed.
                    </p>
                    <p className="text-sm text-stone-500 mb-0">
                      <strong>Method:</strong> Gas chromatography analysis at certified labs.
                    </p>
                  </div>

                  <div className="card p-4">
                    <h4 className="font-medium mb-2">Time on Pasture</h4>
                    <p className="text-sm text-stone-600 mb-2">
                      Longer time on pasture generally correlates with better fatty acid profiles.
                      Most beef is finished at 12-14 months. Our standard is 24 months.
                    </p>
                    <p className="text-sm text-stone-500 mb-0">
                      <strong>Method:</strong> Ranch records and verification of feeding practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Don't Measure (Yet) */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-4">What We Don&apos;t Measure (Yet)</h2>
            <p className="text-lg mb-8 text-stone-600">
              Transparency means acknowledging gaps. Here&apos;s what we&apos;d like to measure
              but don&apos;t have reliable, affordable methods for.
            </p>

            <div className="space-y-4">
              <div className="card p-4 bg-stone-50">
                <h4 className="font-medium mb-2">Mineral Density</h4>
                <p className="text-sm text-stone-600 mb-0">
                  How much magnesium, zinc, iron, etc. is in the food? Testing is expensive
                  and results vary widely by lab. We&apos;re evaluating partners who can provide
                  reliable, affordable mineral analysis.
                </p>
              </div>

              <div className="card p-4 bg-stone-50">
                <h4 className="font-medium mb-2">Antioxidant Content</h4>
                <p className="text-sm text-stone-600 mb-0">
                  Polyphenols, flavonoids, and other beneficial compounds. Brix is a partial
                  proxy (higher brix correlates with higher antioxidants), but direct measurement
                  is complex.
                </p>
              </div>

              <div className="card p-4 bg-stone-50">
                <h4 className="font-medium mb-2">Pesticide Residue</h4>
                <p className="text-sm text-stone-600 mb-0">
                  We work with farms that minimize synthetic inputs, but we don&apos;t routinely
                  test for residues. This may be added as testing becomes more accessible.
                </p>
              </div>

              <div className="card p-4 bg-stone-50">
                <h4 className="font-medium mb-2">Soil Health Metrics</h4>
                <p className="text-sm text-stone-600 mb-0">
                  We assess farms qualitatively, but don&apos;t have standardized soil test data
                  for all sources. Building this database is a long-term goal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Testing */}
      <section className="section section-cream">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-4">Comparison Testing</h2>
            <p className="text-lg mb-8 text-stone-600">
              We don&apos;t just test our own products. We buy competitor products
              and test them too. Same methodology, side by side.
            </p>

            <div className="card p-6">
              <h3 className="text-xl mb-4">&ldquo;Same Label, Different Nutrition&rdquo;</h3>
              <p className="text-stone-600 mb-4">
                Two products can have identical labels—both &ldquo;grass-fed,&rdquo; both &ldquo;organic,&rdquo;
                both &ldquo;premium&rdquo;—and have completely different quality. We test to find out.
              </p>
              <p className="text-stone-600 mb-0">
                Comparison reports are published in our library. When competitors test well,
                we say so. When they don&apos;t, the data speaks for itself.
              </p>
            </div>

            <p className="text-sm text-stone-500 mt-4">
              Legal note: Comparison testing uses products purchased through normal retail channels.
              All tests are conducted by the same methods we use for our own products.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-forest">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Questions About Our Methods?</h2>
            <p className="text-lg text-white/90 mb-8">
              We&apos;re committed to transparency. If you want to know more about how
              we test, what data we have, or how to interpret results—ask.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/fielder" className="btn btn-primary">
                Back to Fielder
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
