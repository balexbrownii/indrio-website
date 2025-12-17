import Link from 'next/link';

export const metadata = {
  title: 'Learn | Indrio Fields',
  description: 'Understand the food system. Decode labels. Learn what actually matters for flavor and nutrition.',
};

export default function LearnPage() {
  return (
    <>
      {/* Hero */}
      <section className="section section-parchment texture-paper">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm uppercase tracking-widest mb-4" style={{ color: 'var(--color-accent)' }}>
              Learn
            </p>
            <h1 className="mb-6">
              Demystifying Food Quality
            </h1>
            <p className="lead">
              The food system is confusing by design. Labels are marketing. Claims are loopholes.
              Here&apos;s what you actually need to know.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="section">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <Link href="#quality-101" className="card p-6">
                <div className="text-3xl mb-3">📊</div>
                <h3 className="text-xl mb-2">Food Quality 101</h3>
                <p className="text-stone-600 text-sm mb-0">
                  What is brix? Why do omega ratios matter? Start here.
                </p>
              </Link>

              <Link href="/learn/share-framework" className="card p-6">
                <div className="text-3xl mb-3">🌱</div>
                <h3 className="text-xl mb-2">S.H.A.R.E. Framework</h3>
                <p className="text-stone-600 text-sm mb-0">
                  Our proprietary system for measuring what matters.
                </p>
              </Link>

              <Link href="#label-decoder" className="card p-6">
                <div className="text-3xl mb-3">🏷️</div>
                <h3 className="text-xl mb-2">Label Decoder</h3>
                <p className="text-stone-600 text-sm mb-0">
                  What &ldquo;grass-fed,&rdquo; &ldquo;organic,&rdquo; and other terms actually mean.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Food Quality 101 */}
      <section id="quality-101" className="section section-cream">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-8">Food Quality 101</h2>

            <div className="space-y-12">
              {/* Brix */}
              <div>
                <h3 className="text-2xl mb-4" style={{ color: 'var(--color-forest)' }}>What is Brix?</h3>
                <p className="text-lg mb-4">
                  Brix (°Bx) measures dissolved solids in fruit—a proxy for nutrient density. It measures
                  carbohydrates, minerals, and vitamins dissolved in the juice. While the primary carbohydrate
                  is fructose, brix isn&apos;t just about sweetness—it&apos;s a comprehensive measure of
                  nutritional quality.
                </p>
                <div className="card p-6">
                  <h4 className="font-medium mb-4">Citrus Brix Ranges</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span>Commodity (grocery store)</span>
                      <span className="font-medium">8-10°</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Standard (above minimum)</span>
                      <span className="font-medium">10-12°</span>
                    </div>
                    <div className="flex items-center justify-between" style={{ color: 'var(--color-forest)' }}>
                      <span>Premium (our minimum)</span>
                      <span className="font-medium">11-15°</span>
                    </div>
                    <div className="flex items-center justify-between" style={{ color: 'var(--color-accent)' }}>
                      <span>Artisan (exceptional)</span>
                      <span className="font-medium">14-18°</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-stone-500 mt-4">
                  Why doesn&apos;t the grocery store sell high-brix fruit? Because USDA grades focus on
                  external appearance, not nutrition or flavor. Farmers get paid for yield and appearance, not
                  internal quality. High-brix fruit is often smaller—more nutrition per ounce, but fewer ounces
                  per box.
                </p>
              </div>

              {/* Omega Ratios */}
              <div>
                <h3 className="text-2xl mb-4" style={{ color: 'var(--color-forest)' }}>Understanding Omega Ratios</h3>
                <p className="text-lg mb-4">
                  The ratio of omega-6 to omega-3 fatty acids in meat matters for inflammation.
                  Humans evolved eating roughly 1:1. Modern diets—and feedlot beef—push that
                  ratio as high as 20:1, which promotes chronic inflammation.
                </p>
                <div className="card p-6">
                  <h4 className="font-medium mb-4">Beef Omega-6 to Omega-3 Ratios</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-medium" style={{ color: 'var(--color-forest)' }}>Exceptional (true grass-fed)</span>
                      <span className="font-medium">≤3:1</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Premium (good grass-finished)</span>
                      <span className="font-medium text-green-600">3-6:1</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Standard (mixed feeding)</span>
                      <span className="font-medium text-amber-600">6-12:1</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Commodity (feedlot/grain-fed)</span>
                      <span className="font-medium text-red-600">&gt;12:1</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Typical feedlot</span>
                      <span className="font-medium text-red-700">15-20:1</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Premium Wagyu (WORST)</span>
                      <span className="font-medium text-red-900">20-26:1</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-stone-500 mt-4">
                  Note: Premium Wagyu has the worst omega ratio because of extended feedlot time (12+ months).
                  Consumers pay 5x more for beef that&apos;s actively worse for their health. The omega ratio
                  is THE measurable proof of feeding regime quality—fatty acids accumulate in tissue based on
                  the animal&apos;s diet.
                </p>
              </div>

              {/* Climacteric */}
              <div>
                <h3 className="text-2xl mb-4" style={{ color: 'var(--color-forest)' }}>Why Harvest Timing Matters</h3>
                <p className="text-lg mb-4">
                  The question isn&apos;t whether fruit ripens on or off the tree—it&apos;s whether
                  early harvest wastes the genetic potential built through proper soil, cultivar selection,
                  and growing practices.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="card p-4">
                    <h4 className="font-medium mb-2">Climacteric (can develop after picking)</h4>
                    <p className="text-sm text-stone-600 mb-0">
                      Bananas, avocados, tomatoes, peaches, apples. CAN ripen post-harvest, but early
                      harvest still sacrifices the quality potential. They develop texture and some sugars,
                      but they never reach their full nutritional expression.
                    </p>
                  </div>
                  <div className="card p-4" style={{ borderColor: 'var(--color-accent)' }}>
                    <h4 className="font-medium mb-2">Non-Climacteric (quality fixed at harvest)</h4>
                    <p className="text-sm text-stone-600 mb-0">
                      Citrus, grapes, strawberries, cherries. Quality is completely fixed at harvest.
                      What you pick is what you get. Picked early = forever mediocre.
                    </p>
                  </div>
                </div>
                <p className="text-sm text-stone-500 mt-4">
                  Grocery store produce is picked early to meet USDA minimums, not to express peak quality.
                  The issue isn&apos;t shipping time—it&apos;s that harvest timing is optimized for meeting
                  legal standards rather than maximizing the genetic potential built through S.H.A.R.E. principles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Label Decoder */}
      <section id="label-decoder" className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-4">Label Decoder</h2>
            <p className="text-lg mb-8 text-stone-600">
              What food labels actually mean—legally speaking. Not what the marketing wants you to think.
            </p>

            <div className="space-y-6">
              <div className="card p-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">🥩</span>
                  <div>
                    <h4 className="font-medium mb-2">&ldquo;Product of USA&rdquo;</h4>
                    <p className="text-stone-600 mb-2">
                      <strong>What you think:</strong> Raised in America by American farmers.
                    </p>
                    <p className="text-stone-600 mb-0">
                      <strong>What it means:</strong> Processed in a U.S. facility. The animal can be
                      imported from anywhere—Brazil, Australia, wherever—as long as it&apos;s cut and
                      packaged here. The label is legal.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">🌿</span>
                  <div>
                    <h4 className="font-medium mb-2">&ldquo;Grass-Fed&rdquo;</h4>
                    <p className="text-stone-600 mb-2">
                      <strong>What you think:</strong> Cattle raised entirely on grass.
                    </p>
                    <p className="text-stone-600 mb-0">
                      <strong>What it means:</strong> Nothing, federally. The USDA withdrew their grass-fed
                      standard in 2016. Anyone can use the term. Many &ldquo;grass-fed&rdquo; cattle are
                      finished on grain for the last few months to add weight quickly.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">🐔</span>
                  <div>
                    <h4 className="font-medium mb-2">&ldquo;Pasture-Raised&rdquo;</h4>
                    <p className="text-stone-600 mb-2">
                      <strong>What you think:</strong> Animals living on pasture.
                    </p>
                    <p className="text-stone-600 mb-0">
                      <strong>What it means:</strong> Access to the outdoors. Not time on pasture.
                      A door to a small concrete pad can qualify. The chickens may never actually
                      go outside.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">🌾</span>
                  <div>
                    <h4 className="font-medium mb-2">&ldquo;Organic&rdquo;</h4>
                    <p className="text-stone-600 mb-2">
                      <strong>What you think:</strong> Better for you, better for the environment.
                    </p>
                    <p className="text-stone-600 mb-0">
                      <strong>What it means:</strong> Produced without synthetic pesticides or fertilizers.
                      Says nothing about nutrition, soil health, or farming practices beyond the inputs.
                      And organic imports often come with fraudulent certifications.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">🥚</span>
                  <div>
                    <h4 className="font-medium mb-2">&ldquo;Cage-Free&rdquo;</h4>
                    <p className="text-stone-600 mb-2">
                      <strong>What you think:</strong> Happy chickens roaming freely.
                    </p>
                    <p className="text-stone-600 mb-0">
                      <strong>What it means:</strong> Not in battery cages. Often in crowded barns with
                      no outdoor access. Better than cages, but not what the imagery suggests.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-parchment card p-6 mt-8">
              <p className="text-lg mb-0">
                <strong>The pattern:</strong> Labels are written by lawyers to be technically true
                while creating impressions that aren&apos;t. The solution isn&apos;t better labels—
                it&apos;s knowing what to measure and who to trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-forest">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Ready to Go Deeper?</h2>
            <p className="text-lg text-white/90 mb-8">
              Learn our proprietary S.H.A.R.E. framework—the system we use to measure
              what actually matters in food quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/learn/share-framework" className="btn btn-primary">
                Learn S.H.A.R.E.
              </Link>
              <Link href="/fielder" className="btn btn-outline border-white text-white hover:bg-white/10">
                See the Data
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
