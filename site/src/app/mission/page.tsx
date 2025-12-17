import Link from 'next/link';

export const metadata = {
  title: 'Our Mission | Indrio Fields',
  description: 'The food system rewards the wrong things. We\'re family farmers building something different—where nutrition and flavor actually matter.',
};

export default function MissionPage() {
  return (
    <>
      {/* Hero - The Why */}
      <section className="section section-parchment texture-paper">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm uppercase tracking-widest mb-4" style={{ color: 'var(--color-accent)' }}>
              Our Mission
            </p>
            <h1 className="mb-6">
              The food system rewards the wrong things.
            </h1>
            <p className="lead">
              USDA grades citrus by peel color, not sugar content. Grocers pay by the pound, not the brix.
              Farmers are forced to pick unripe so fruit survives a 2,000-mile cold chain.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem - With Receipts */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-8">Here&apos;s How It Works</h2>

            <div className="space-y-8">
              <div className="card p-6">
                <h3 className="text-xl mb-3" style={{ color: 'var(--color-forest)' }}>The Grading Problem</h3>
                <p className="mb-0">
                  California uses a maturity formula: <code className="bg-stone-100 px-2 py-1 rounded text-sm">(Brix - 4×Acidity) × 16.5</code>.
                  A score of 90 means it&apos;s &ldquo;ready.&rdquo; But this formula optimizes for shipping survival—not
                  for how food tastes or what it does for your body. Grocery store citrus typically hits 6-8° brix.
                  We don&apos;t pick until 11-14°.
                </p>
              </div>

              <div className="card p-6">
                <h3 className="text-xl mb-3" style={{ color: 'var(--color-forest)' }}>The Labeling Loophole</h3>
                <p className="mb-0">
                  Beef imported from anywhere in the world can legally be labeled &ldquo;Product of USA&rdquo;—as long
                  as it&apos;s processed or packaged here. The animal never has to draw a breath of air on this continent.
                  Meanwhile, there&apos;s no federal standard for &ldquo;grass-fed.&rdquo; The USDA withdrew their definition in 2016.
                </p>
              </div>

              <div className="card p-6">
                <h3 className="text-xl mb-3" style={{ color: 'var(--color-forest)' }}>The Economics</h3>
                <p className="mb-0">
                  Farmers grow what they get paid to grow. If grocery chains pay by weight and penalize cosmetic
                  imperfections, farmers will grow heavy, perfect-looking produce that tastes like nothing.
                  It&apos;s not their fault. It&apos;s the system&apos;s design.
                </p>
              </div>
            </div>

            <div className="card-parchment card p-8 mt-12" style={{ borderLeft: '4px solid var(--color-accent)' }}>
              <p className="text-xl mb-0">
                <strong>We don&apos;t blame the farmers.</strong> They&apos;re ready to grow exceptional food.
                The system just doesn&apos;t pay them for it. We do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Debate We're Skipping */}
      <section className="section section-cream">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-8">The Debate We&apos;re Skipping</h2>

            <div className="space-y-6">
              <p className="text-lg">
                While everyone argues about organic vs. conventional, pesticide types, and farming labels—we&apos;re
                focused on what actually matters: <strong>nutrition and flavor</strong>.
              </p>
              <p className="text-lg">
                An organic tomato from depleted soil, picked green and shipped 2,000 miles isn&apos;t better for you
                than a conventionally grown tomato from healthy soil, picked ripe, and eaten that week.
              </p>
              <p className="text-xl font-medium" style={{ color: 'var(--color-forest)' }}>
                The central issue isn&apos;t the label. It&apos;s the lack of nutrition in our food because of
                how the industrial system is designed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We're Building */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-8">What We&apos;re Building Instead</h2>

            <div className="space-y-8">
              <div className="card p-6">
                <h3 className="text-xl mb-3" style={{ color: 'var(--color-forest)' }}>A Different Payment Model</h3>
                <p className="mb-0">
                  We pay farmers for brix, not bushels. For fatty acid profiles, not fat content.
                  For soil health scores, not just yield numbers. When you change what farmers
                  get paid for, you change what they grow.
                </p>
              </div>

              <div className="card p-6">
                <h3 className="text-xl mb-3" style={{ color: 'var(--color-forest)' }}>Direct Relationships</h3>
                <p className="mb-0">
                  No commodity markets. No anonymous supply chains. We know every farmer,
                  every ranch, every grove. When you order from us, you&apos;re not getting food that
                  changed hands six times—you&apos;re getting food from people we know by name.
                </p>
              </div>

              <div className="card p-6">
                <h3 className="text-xl mb-3" style={{ color: 'var(--color-forest)' }}>Measurable Quality</h3>
                <p className="mb-4">
                  If you can&apos;t put a number on it, it&apos;s just marketing. We test what matters:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold" style={{ color: 'var(--color-accent)' }}>11-14°</div>
                    <div className="text-sm">Brix (vs 6-8° grocery)</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold" style={{ color: 'var(--color-accent)' }}>+1313%</div>
                    <div className="text-sm">EPA Omega-3 in beef</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold" style={{ color: 'var(--color-accent)' }}>2.5:1</div>
                    <div className="text-sm">Omega 6:3 ratio</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold" style={{ color: 'var(--color-accent)' }}>24 mo</div>
                    <div className="text-sm">Cattle finishing time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Grow - S.H.A.R.E. Teaser */}
      <section className="section section-forest">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">The S.H.A.R.E. Framework</h2>
            <p className="text-lg text-white/90 mb-8">
              Our approach to growing food is based on the work of Dr. William Albrecht from the 1940s—the
              idea that healthy soil grows food that actually nourishes. We call it S.H.A.R.E.:
              <strong> Soil, Heritage, Agricultural practices, Ripening, and Enriching</strong> the farmers who do it right.
            </p>
            <div className="inline-flex flex-wrap justify-center gap-3 mb-8">
              {['Soil', 'Heritage', 'Agricultural', 'Ripen', 'Enrich'].map((word, i) => (
                <span key={word} className="px-4 py-2 rounded-full bg-white/10 text-white font-medium">
                  <span style={{ color: 'var(--color-accent)' }}>{word[0]}</span>{word.slice(1)}
                </span>
              ))}
            </div>
            <Link href="/how-we-grow" className="btn btn-primary">
              See How We Grow Different →
            </Link>
          </div>
        </div>
      </section>

      {/* The Family Behind It */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-8">Who&apos;s Behind This</h2>
            <div className="space-y-6 text-lg">
              <p>
                The Brown and Scott families have farmed the Southeast for over 200 years.
                Citrus groves in Florida&apos;s Indian River region. Cattle ranches in the Greater
                Everglades. We know this land.
              </p>
              <p>
                Twenty-five years ago, we started selling directly to consumers. Not because
                farm-to-table was trendy—it wasn&apos;t a thing yet—but because we were tired
                of watching our best fruit rot while grocery stores sold inferior product
                at premium prices.
              </p>
              <p className="font-medium" style={{ color: 'var(--color-forest)' }}>
                The food system didn&apos;t reward what we were doing right. So we built our own way to market.
              </p>
            </div>
            <div className="mt-8">
              <Link href="/about" className="btn btn-secondary">
                Read Our Full Story →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Vision - Closing */}
      <section className="section section-cream">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">The Goal</h2>
            <p className="text-xl mb-4">
              Prove that a better system works. That farmers can be paid for nutrition and flavor.
              That families can taste the difference. That land can get stronger, not weaker.
            </p>
            <p className="text-lg mb-8" style={{ color: 'var(--color-forest)' }}>
              We&apos;re not going to complain our way to a better food system. We&apos;re going to grow our way there.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/brands" className="btn btn-primary">
                Shop Our Brands
              </Link>
              <Link href="/newsletter" className="btn btn-secondary">
                Get The Field Guide
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
