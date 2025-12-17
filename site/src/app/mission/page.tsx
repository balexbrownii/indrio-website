import Link from 'next/link';

export const metadata = {
  title: 'Why It Matters | Indrio Fields',
  description: 'You can taste when food is grown right. Here\'s why most food isn\'t—and what you can do about it.',
};

export default function MissionPage() {
  return (
    <>
      {/* Hero - Customer's Problem */}
      <section className="section section-parchment texture-paper">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm uppercase tracking-widest mb-4" style={{ color: 'var(--color-accent)' }}>
              Why It Matters
            </p>
            <h1 className="mb-6">
              You&apos;re not imagining it.<br />
              The food really has changed.
            </h1>
            <p className="lead">
              If grocery store oranges taste like water and &ldquo;grass-fed&rdquo; beef tastes the same as regular—
              there&apos;s a reason. And once you understand it, you can do something about it.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem - Framed for Customer */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-8">Here&apos;s What&apos;s Actually Going On</h2>

            <div className="space-y-8">
              <div className="card p-6">
                <h3 className="text-xl mb-3" style={{ color: 'var(--color-forest)' }}>The Economics Work Against You</h3>
                <p className="mb-0">
                  Grocery chains pay farmers by weight, not by flavor. They penalize cosmetic imperfections.
                  So farmers grow heavy, uniform, perfect-looking produce—because that&apos;s what pays.
                  The citrus industry has tried to set quality standards (like minimum brix levels), but
                  when the market rewards meeting the minimum rather than exceeding it, that&apos;s what you get.
                  Minimum-quality food at maximum prices.
                </p>
              </div>

              <div className="card p-6">
                <h3 className="text-xl mb-3" style={{ color: 'var(--color-forest)' }}>Labels Don&apos;t Mean What You Think</h3>
                <p className="mb-0">
                  &ldquo;Product of USA&rdquo; beef? The animal never has to draw a breath on this continent—as long as
                  it&apos;s processed here, the label is legal. &ldquo;Grass-fed&rdquo;? The USDA withdrew their standard in 2016.
                  There&apos;s no federal definition. You&apos;re paying premium prices based on marketing claims with no
                  verification behind them.
                </p>
              </div>

              <div className="card p-6">
                <h3 className="text-xl mb-3" style={{ color: 'var(--color-forest)' }}>The Cold Chain Kills Flavor</h3>
                <p className="mb-0">
                  Most citrus is picked before it&apos;s ripe so it can survive a 2,000-mile journey and weeks in storage.
                  The problem? Citrus doesn&apos;t ripen after picking. What you get at the store is as good as it will
                  ever be—and it was picked to survive shipping, not to taste good.
                </p>
              </div>
            </div>

            <div className="card-parchment card p-8 mt-12" style={{ borderLeft: '4px solid var(--color-accent)' }}>
              <p className="text-xl mb-0">
                <strong>This isn&apos;t the farmers&apos; fault.</strong> Most would love to grow better food.
                The system just doesn&apos;t pay them for it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Can Do */}
      <section className="section section-cream">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-8">What You Can Do About It</h2>

            <div className="space-y-6">
              <p className="text-lg">
                You have two options. Wait for the industrial food system to change (it won&apos;t).
                Or find farmers who are already growing food the right way and buy directly from them.
              </p>
              <p className="text-lg">
                That&apos;s what we offer. Not a political movement. Not a lecture about organic vs. conventional.
                Just food that&apos;s actually grown for flavor and nutrition, shipped directly to you from
                families who&apos;ve been farming for generations.
              </p>
              <p className="text-xl font-medium" style={{ color: 'var(--color-forest)' }}>
                Skip the debate. Taste the difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Proof - Numbers */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-8">The Difference You&apos;ll Actually Taste</h2>

            <p className="text-lg mb-8">
              Marketing claims are easy. Numbers aren&apos;t. Here&apos;s what we measure—and what you&apos;ll notice.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="card p-6">
                <h3 className="text-lg font-medium mb-4">Citrus</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-stone-600">Grocery store brix</span>
                    <span>8-10°</span>
                  </div>
                  <div className="flex justify-between font-medium" style={{ color: 'var(--color-forest)' }}>
                    <span>Our minimum brix</span>
                    <span>11°+</span>
                  </div>
                  <p className="text-sm text-stone-500 pt-2">
                    Brix measures sugar content. Higher brix = sweeter, more flavorful fruit.
                    It&apos;s the difference between &ldquo;this tastes like water&rdquo; and &ldquo;where did you get this?&rdquo;
                  </p>
                </div>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-medium mb-4">Beef</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-stone-600">Feedlot omega ratio</span>
                    <span>15-20:1</span>
                  </div>
                  <div className="flex justify-between font-medium" style={{ color: 'var(--color-forest)' }}>
                    <span>Our pasture-raised ratio</span>
                    <span>6:1</span>
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

      {/* The Guide - Brief */}
      <section className="section section-forest">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Who&apos;s Behind This</h2>
            <p className="text-lg text-white/90 mb-6">
              The Brown and Scott families have farmed Florida&apos;s Indian River region since the 1870s.
              Twenty-five years ago, we got tired of watching our best fruit rot while stores sold inferior
              product at premium prices. So we built a way to ship directly to people who care.
            </p>
            <p className="text-lg text-white/90 mb-8">
              We&apos;re not a tech startup or a subscription box company. We&apos;re farmers who figured out
              how to get real food to your door.
            </p>
            <Link href="/about" className="btn btn-primary">
              Our Full Story
            </Link>
          </div>
        </div>
      </section>

      {/* The Framework - Teaser */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-8">How We Grow Different</h2>
            <p className="text-center text-lg mb-8">
              Our approach is based on the work of Dr. William Albrecht—healthy soil grows food that
              actually nourishes. We call it S.H.A.R.E.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
              {[
                { letter: 'S', word: 'Soil', desc: 'Healthy soil, healthy food' },
                { letter: 'H', word: 'Heritage', desc: 'Varieties bred for flavor' },
                { letter: 'A', word: 'Agricultural', desc: 'Minimal synthetic inputs' },
                { letter: 'R', word: 'Ripen', desc: 'Picked at peak, not before' },
                { letter: 'E', word: 'Enrich', desc: 'Fair pay for quality' },
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
          </div>
        </div>
      </section>

      {/* Final CTA - Customer Action */}
      <section className="section section-cream">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Ready to Taste the Difference?</h2>
            <p className="text-xl mb-4">
              You don&apos;t have to wait for the food system to change.
              You just have to know where to look.
            </p>
            <p className="text-lg mb-8" style={{ color: 'var(--color-forest)' }}>
              Start with a box of citrus or try the beef. Your family will notice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/brands" className="btn btn-primary">
                See Your Options
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
