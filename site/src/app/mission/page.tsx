import Link from 'next/link';

export const metadata = {
  title: 'Our Mission | Indrio Fields',
  description: 'Connecting people to superior flavor and nutrition to benefit their health—all while preserving farmland in the USA.',
};

export default function MissionPage() {
  return (
    <>
      {/* Hero - The Mission */}
      <section className="section section-parchment texture-paper">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm uppercase tracking-widest mb-4" style={{ color: 'var(--color-accent)' }}>
              Our Mission
            </p>
            <h1 className="mb-6">
              Connecting people to superior flavor and nutrition to benefit their health
            </h1>
            <p className="lead">
              All while preserving farmland in the USA. That&apos;s to help farmers, ranchers, growers,
              and makers here who are having to compete against industrial foods, imported foods,
              and regulations that undercut them.
            </p>
          </div>
        </div>
      </section>

      {/* The Real Problem - Nutrient Decline */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-8">The Problem Nobody&apos;s Talking About</h2>

            <div className="card-parchment card p-8 mb-8" style={{ borderLeft: '4px solid var(--color-accent)' }}>
              <p className="text-xl mb-0">
                <strong>Produce has lost up to 50% of its nutrients in the last 50-70 years.</strong>
                Not because of pesticides. Because of what we pay farmers for.
              </p>
            </div>

            <div className="space-y-8">
              <div className="card p-6">
                <h3 className="text-xl mb-3" style={{ color: 'var(--color-forest)' }}>The Root Cause: The Dilution Effect</h3>
                <p className="mb-4">
                  Here&apos;s what actually happened:
                </p>
                <div className="pl-6 border-l-2 space-y-3" style={{ borderColor: 'var(--color-accent)' }}>
                  <p className="mb-2"><strong>1. USDA grades on appearance</strong> – not flavor, not nutrition</p>
                  <p className="mb-2"><strong>2. Farmers get paid for appearance and yield</strong> – so that&apos;s what they plant for</p>
                  <p className="mb-2"><strong>3. Breeders select for yield and shipping</strong> – bigger, heavier, prettier</p>
                  <p className="mb-2"><strong>4. Dilution effect kicks in</strong> – more water, less nutrients per piece</p>
                  <p className="mb-0"><strong>5. Result: 50% fewer nutrients</strong> – and nobody in the supply chain gets paid to fix it</p>
                </div>
              </div>

              <div className="card p-6">
                <h3 className="text-xl mb-3" style={{ color: 'var(--color-forest)' }}>It&apos;s Not the Farmers&apos; Fault</h3>
                <p className="mb-0">
                  Farmers grow what the market pays for. When you&apos;re graded on color, size, and blemish-free skin—
                  but NOT on Brix, minerals, or vitamins—what do you think gets prioritized?
                  The entire supply chain is optimized for meeting USDA minimums, not exceeding them.
                  And minimums keep getting lower.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regulations That Undercut Farmers */}
      <section className="section section-cream">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-8">Regulations That Undercut American Farmers</h2>

            <p className="text-lg mb-8">
              We&apos;re not against regulation. We&apos;re against regulations that create loopholes
              big enough for industrial operations and fraudulent imports to drive through—while honest
              farmers lose market share.
            </p>

            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="text-lg font-medium mb-2">Country of Origin Labeling (COOL)</h3>
                <p className="mb-0">
                  Beef can be born, raised, and slaughtered in another country—but as long as it&apos;s
                  <em> processed</em> here, it can be labeled "Product of USA." The animal never has to
                  draw a breath on this continent. American ranchers compete against this every day.
                </p>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-medium mb-2">&ldquo;Pasture-Raised&rdquo; Loopholes</h3>
                <p className="mb-0">
                  There&apos;s no federal definition. Industrial operations can technically meet the claim
                  by providing minimal outdoor access while still operating like confined feeding operations.
                  Real pasture-raised farmers—who raise animals on actual pasture—get undercut on price.
                </p>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-medium mb-2">&ldquo;Grass-Fed&rdquo; Loopholes</h3>
                <p className="mb-0">
                  The USDA withdrew their grass-fed standard in 2016. Now there&apos;s no federal enforcement.
                  Cattle can be 90% grain-fed and still labeled "grass-fed" in many cases. Lab testing
                  (omega-6:omega-3 ratios) often reveals the truth: grain-finished animals with 15-20:1 ratios
                  being sold as "grass-fed."
                </p>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-medium mb-2">Organic Certification Fraud</h3>
                <p className="mb-0">
                  Fraudulent imports claiming organic certification flood the market—especially grains and
                  produce from countries with minimal oversight. Legitimate American organic farmers can&apos;t
                  compete with fraudulent pricing. And consumers have no way to verify the truth.
                </p>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-medium mb-2">Import Substitution</h3>
                <p className="mb-0">
                  Products can be labeled "Made in USA" even if they&apos;re merely <em>packaged</em> or
                  <em>processed</em> here. The actual food? Grown elsewhere, often under standards that
                  wouldn&apos;t pass USDA inspection if applied to American farms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Casino Analogy */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-8">Why Buying Food Feels Like Gambling</h2>

            <div className="card-parchment card p-8 mb-8">
              <p className="text-xl mb-4">
                <strong>Grocery shopping = playing in a casino.</strong>
              </p>
              <p className="text-lg mb-0">
                You might get lucky and find great produce. But you can&apos;t predict when.
                The house is stacked against you—you&apos;re gambling every time you put something in your cart.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="card p-6">
                <h3 className="text-lg font-medium mb-4" style={{ color: 'var(--color-forest)' }}>
                  At the Grocery Store
                </h3>
                <ul className="space-y-2 text-stone-600">
                  <li>✗ No quality floor—just USDA minimums</li>
                  <li>✗ Labels that don&apos;t guarantee anything</li>
                  <li>✗ No way to verify nutrition claims</li>
                  <li>✗ Sometimes great, usually mediocre</li>
                  <li>✗ You&apos;re rolling the dice every trip</li>
                </ul>
              </div>

              <div className="card p-6" style={{ backgroundColor: 'var(--color-cream)' }}>
                <h3 className="text-lg font-medium mb-4" style={{ color: 'var(--color-forest)' }}>
                  With Indrio
                </h3>
                <ul className="space-y-2">
                  <li>✓ Quality floor guarantee (11° Brix minimum)</li>
                  <li>✓ Verified omega ratios on beef (3:1)</li>
                  <li>✓ S.H.A.R.E. framework for every farm</li>
                  <li>✓ You win every time—consistency over gambling</li>
                  <li>✓ Direct from farmers who are paid for quality</li>
                </ul>
              </div>
            </div>

            <p className="text-lg" style={{ color: 'var(--color-forest)' }}>
              <strong>You pay more. But you win every time.</strong> That&apos;s the difference
              between certainty and gambling.
            </p>
          </div>
        </div>
      </section>

      {/* The Proof - Numbers */}
      <section className="section section-cream">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-8">The Difference Is Measurable</h2>

            <p className="text-lg mb-8">
              We don&apos;t just claim quality. We measure it. Here&apos;s what the numbers say:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="card p-6">
                <h3 className="text-lg font-medium mb-4">Citrus Brix Levels</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-stone-600">Grocery store average</span>
                    <span>6-8°</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-600">USDA minimum for shipping</span>
                    <span>8°</span>
                  </div>
                  <div className="flex justify-between font-medium" style={{ color: 'var(--color-forest)' }}>
                    <span>Our quality floor</span>
                    <span>11°+</span>
                  </div>
                  <p className="text-sm text-stone-500 pt-2">
                    Brix measures dissolved solids—sugars, minerals, vitamins. Higher Brix = more flavor,
                    more nutrition. The difference between watery and "where did you get this?"
                  </p>
                </div>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-medium mb-4">Beef Omega Ratios</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-stone-600">Feedlot beef (CAFO)</span>
                    <span>15-20:1</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-600">Many &ldquo;grass-fed&rdquo; brands</span>
                    <span>8-15:1</span>
                  </div>
                  <div className="flex justify-between font-medium" style={{ color: 'var(--color-forest)' }}>
                    <span>Our pasture-raised beef</span>
                    <span>3-6:1</span>
                  </div>
                  <p className="text-sm text-stone-500 pt-2">
                    Omega-6 to omega-3 ratio matters for inflammation. Lower is better.
                    Our beef also has 1313% more EPA omega-3s than USDA average.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Framework - S.H.A.R.E. */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-8">Our Quality Framework: S.H.A.R.E.</h2>
            <p className="text-center text-lg mb-8">
              We developed S.H.A.R.E. to measure what actually matters—not just how food looks,
              but how it nourishes. It&apos;s our framework for selecting farms and verifying quality.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
              {[
                { letter: 'S', word: 'Soil', desc: 'Healthy soil builds nutrient-dense foundations' },
                { letter: 'H', word: 'Heritage', desc: 'Varieties selected for flavor and nutrition' },
                { letter: 'A', word: 'Agricultural', desc: 'Practices that minimize synthetic inputs' },
                { letter: 'R', word: 'Ripen', desc: 'Harvested at perfect maturity' },
                { letter: 'E', word: 'Enrich', desc: 'The entire ecosystem from soil to people' },
              ].map((item) => (
                <div key={item.letter} className="card p-4 text-center">
                  <div className="text-2xl font-bold mb-1" style={{ color: 'var(--color-accent)' }}>
                    {item.letter}
                  </div>
                  <div className="font-medium mb-1">{item.word}</div>
                  <div className="text-xs text-stone-500">{item.desc}</div>
                </div>
              ))}
            </div>
            <p className="text-center">
              <Link href="/share" className="text-lg" style={{ color: 'var(--color-accent)' }}>
                Learn more about S.H.A.R.E. →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* The Guide */}
      <section className="section section-forest">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Who We Are</h2>
            <p className="text-lg text-white/90 mb-6">
              The Brown and Scott families have farmed Florida&apos;s Indian River region since the 1870s.
              Twenty-five years ago, we got tired of watching our best fruit sold for juice prices while
              stores charged premium rates for inferior produce.
            </p>
            <p className="text-lg text-white/90 mb-8">
              So we built a direct channel—farm to your door. We work with farmers, ranchers, and growers
              across the USA who care about quality as much as we do. And we verify everything with real data.
            </p>
            <Link href="/about" className="btn btn-primary">
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section section-cream">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Stop Gambling. Start Winning.</h2>
            <p className="text-xl mb-4">
              You don&apos;t have to wait for the food system to change.
              You just need to know where to find the farmers who are already doing it right.
            </p>
            <p className="text-lg mb-8" style={{ color: 'var(--color-forest)' }}>
              Try a box. Taste the difference. Your family will notice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/shop" className="btn btn-primary">
                Shop Now
              </Link>
              <Link href="/newsletter" className="btn btn-secondary">
                Get The Field Guide Newsletter
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
