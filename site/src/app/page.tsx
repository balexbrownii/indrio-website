import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero - The Movement */}
      <section
        className="section hero-dark relative min-h-[80vh] flex items-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(/images/grove-hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <p className="text-sm uppercase tracking-widest mb-4 text-white/80">
              The Guide to Farm-to-Table Food Quality
            </p>
            <h1 className="mb-6">
              The System Between Farm and Table<br />
              <span style={{ color: 'var(--color-accent)' }}>Is Broken.</span>
            </h1>
            <p className="lead mb-6">
              Farmers want to grow food that nourishes. You want to eat food that tastes like it used to.
              The industrial system in between optimizes for neither.
            </p>
            <p className="text-xl text-white/90 mb-8">
              <strong>We&apos;re here to fix that.</strong> For you. For the farmers.
              For everyone who&apos;s been sold out by a system that prioritizes scale over quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/learn" className="btn btn-primary">
                Understand the Problem
              </Link>
              <Link
                href="/fielder"
                className="btn"
                style={{
                  backgroundColor: 'transparent',
                  color: 'white',
                  border: '2px solid white'
                }}
              >
                See the Data
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem - Name the Enemy */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-4">The System in Between Has Ruined Our Food</h2>
            <p className="text-center text-lg mb-12 text-stone-600">
              Farmers lose. Consumers lose. Only the middlemen win.
            </p>

            <div className="space-y-8">
              <div className="card p-6" style={{ borderLeft: '4px solid #e74c3c' }}>
                <h3 className="text-xl mb-3 flex items-center gap-3">
                  <span className="text-2xl">🏭</span>
                  Consolidation Crushed Quality
                </h3>
                <p className="mb-0 text-stone-600">
                  Four companies control 85% of beef processing in America. Grocery chains dictate
                  prices to farmers. Commodity markets reward uniformity, not nutrition. Farmers
                  who want to grow better food can&apos;t find buyers willing to pay for it.
                </p>
              </div>

              <div className="card p-6" style={{ borderLeft: '4px solid #e74c3c' }}>
                <h3 className="text-xl mb-3 flex items-center gap-3">
                  <span className="text-2xl">🏷️</span>
                  Labels Became Marketing Fiction
                </h3>
                <p className="mb-0 text-stone-600">
                  &ldquo;Product of USA&rdquo; beef never has to draw a breath on American soil—
                  local ranchers compete against imports labeled as domestic. &ldquo;Grass-fed&rdquo;
                  has no federal definition. &ldquo;Pasture-raised&rdquo; means access, not time.
                  Honest farmers can&apos;t compete with legal fiction.
                </p>
              </div>

              <div className="card p-6" style={{ borderLeft: '4px solid #e74c3c' }}>
                <h3 className="text-xl mb-3 flex items-center gap-3">
                  <span className="text-2xl">📏</span>
                  The Wrong Things Get Measured
                </h3>
                <p className="mb-0 text-stone-600">
                  Grocery chains pay for appearance and yield, not nutrition. USDA grades citrus by color, not
                  sugar content. The system rewards size, uniformity, and shelf life—metrics that
                  benefit distributors. Flavor and nutrition? Nobody pays farmers for those.
                </p>
              </div>

              <div className="card p-6" style={{ borderLeft: '4px solid #e74c3c' }}>
                <h3 className="text-xl mb-3 flex items-center gap-3">
                  <span className="text-2xl">📜</span>
                  Regulations Written by Lobbyists
                </h3>
                <p className="mb-0 text-stone-600">
                  Food safety rules that crush small farms while giving mega-processors a pass.
                  Labeling laws with loopholes big enough to drive a truck through. Import rules
                  that let foreign beef wear American labels. The regulations protect the biggest
                  players—not farmers, not consumers.
                </p>
              </div>
            </div>

            <div className="card-parchment card p-8 mt-12 text-center">
              <p className="text-xl mb-4">
                <strong>Farmers and consumers are on the same side.</strong>
              </p>
              <p className="text-lg mb-0 text-stone-600">
                The farmer who wants to grow food that nourishes and the family who wants to eat it
                are both being failed by a system that doesn&apos;t value quality. We&apos;re building
                the bridge between them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution - What We Do */}
      <section className="section section-cream">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-4">We Measure What Labels Only Promise</h2>
            <p className="text-center text-lg mb-12 text-stone-600">
              Indrio Fields is the trusted guide to farm-to-table food quality.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="feature-icon feature-icon-lg feature-icon-forest mx-auto mb-4">
                  📚
                </div>
                <h3 className="text-xl mb-3">Learn</h3>
                <p className="text-stone-600 mb-4">
                  Understand what labels actually mean. Learn what brix is, why omega ratios matter,
                  and how to decode marketing claims.
                </p>
                <Link href="/learn" className="text-sm font-medium" style={{ color: 'var(--color-forest)' }}>
                  Start Learning →
                </Link>
              </div>

              <div className="text-center">
                <div className="feature-icon feature-icon-lg feature-icon-forest mx-auto mb-4">
                  🔬
                </div>
                <h3 className="text-xl mb-3">Verify</h3>
                <p className="text-stone-600 mb-4">
                  Access quality scores, cultivar data, and comparison reports. See the numbers
                  behind the claims with our Fielder verification engine.
                </p>
                <Link href="/fielder" className="text-sm font-medium" style={{ color: 'var(--color-forest)' }}>
                  See the Data →
                </Link>
              </div>

              <div className="text-center">
                <div className="feature-icon feature-icon-lg feature-icon-forest mx-auto mb-4">
                  ✓
                </div>
                <h3 className="text-xl mb-3">Trust</h3>
                <p className="text-stone-600 mb-4">
                  Look for &ldquo;Fielder Verified&rdquo; on products. It means the quality claims
                  have been measured, not just marketed.
                </p>
                <Link href="/fielder/methodology" className="text-sm font-medium" style={{ color: 'var(--color-forest)' }}>
                  See How We Verify →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Framework - S.H.A.R.E. */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-4">Our Framework: S.H.A.R.E.</h2>
            <p className="text-center text-lg mb-12 text-stone-600">
              Our proprietary system for measuring what actually matters in food quality.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
              {[
                { letter: 'S', word: 'Soil Health', desc: 'Healthy soil builds nutrition' },
                { letter: 'H', word: 'Heritage Cultivars', desc: 'Varieties bred for flavor' },
                { letter: 'A', word: 'Agricultural Practices', desc: 'Practices that matter' },
                { letter: 'R', word: 'Ripen', desc: 'Harvested at peak' },
                { letter: 'E', word: 'Enrich', desc: 'Measuring outcomes' },
              ].map((item) => (
                <div key={item.letter} className="card p-4 text-center">
                  <div className="text-3xl font-bold mb-1" style={{ color: 'var(--color-accent)' }}>
                    {item.letter}
                  </div>
                  <div className="font-medium mb-1">{item.word}</div>
                  <div className="text-xs text-stone-500">{item.desc}</div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/learn/share-framework" className="btn btn-secondary">
                Learn the Framework
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Numbers - Show Don't Tell */}
      <section className="section section-cream">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-4">The Difference You Can Measure</h2>
            <p className="text-center text-lg mb-12 text-stone-600">
              Marketing says &ldquo;premium.&rdquo; We show the numbers.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="card p-6">
                <h3 className="text-xl mb-4" style={{ color: 'var(--color-forest)' }}>Citrus Quality (Brix)</h3>
                <p className="text-sm text-stone-500 mb-4">
                  Brix measures sugar content. Higher = sweeter, more flavorful.
                </p>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Grocery Store (Commodity)</span>
                      <span>8-10°</span>
                    </div>
                    <div className="h-3 bg-stone-200 rounded-full overflow-hidden">
                      <div className="h-full bg-stone-400 rounded-full" style={{ width: '55%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">Our Minimum Standard</span>
                      <span className="font-medium" style={{ color: 'var(--color-forest)' }}>11°+</span>
                    </div>
                    <div className="h-3 bg-stone-200 rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: '70%', backgroundColor: 'var(--color-forest)' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Our Premium/Artisan</span>
                      <span style={{ color: 'var(--color-accent)' }}>12-18°</span>
                    </div>
                    <div className="h-3 bg-stone-200 rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: '95%', backgroundColor: 'var(--color-accent)' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <h3 className="text-xl mb-4" style={{ color: 'var(--color-forest)' }}>Beef Omega Ratio</h3>
                <p className="text-sm text-stone-500 mb-4">
                  Omega-6 to Omega-3 ratio. Lower = healthier, less inflammatory.
                </p>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Premium Wagyu (grain-finished)</span>
                      <span className="text-red-600">25:1+</span>
                    </div>
                    <div className="h-3 bg-stone-200 rounded-full overflow-hidden">
                      <div className="h-full bg-red-500 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Feedlot/CAFO Beef</span>
                      <span>15-20:1</span>
                    </div>
                    <div className="h-3 bg-stone-200 rounded-full overflow-hidden">
                      <div className="h-full bg-red-400 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>&ldquo;Grass-fed&rdquo; (often grain-finished)</span>
                      <span>8-12:1</span>
                    </div>
                    <div className="h-3 bg-stone-200 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-400 rounded-full" style={{ width: '48%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">Everglades Ranch American Wagyu</span>
                      <span className="font-medium" style={{ color: 'var(--color-forest)' }}>6:1</span>
                    </div>
                    <div className="h-3 bg-stone-200 rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: '24%', backgroundColor: 'var(--color-forest)' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link href="/fielder/methodology" className="btn btn-secondary">
                See Our Methodology
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Join the Movement */}
      <section className="section section-forest">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-6">Join the Movement</h2>
            <p className="text-lg text-white/90 mb-4">
              Every time you choose food grown for nutrition over food grown for shipping,
              you&apos;re voting for a different kind of farming.
            </p>
            <p className="text-lg text-white/90 mb-8">
              The industrial food system won&apos;t change on its own. But we don&apos;t have to wait for it.
            </p>

            <div className="card-parchment card p-8 text-left max-w-md mx-auto mb-8" style={{ color: 'var(--color-text)' }}>
              <h3 className="text-xl mb-2">The Field Guide</h3>
              <p className="text-stone-600 mb-4">
                Weekly insights on food quality, label fraud, and what you can do about it.
                No spam. Unsubscribe anytime.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="input flex-1"
                />
                <button className="btn btn-primary">
                  Join
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/learn" className="btn btn-primary">
                Start Learning
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
