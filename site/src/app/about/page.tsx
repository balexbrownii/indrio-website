import Link from 'next/link';

export const metadata = {
  title: 'About | Indrio Fields',
  description: 'Family farmers for over 200 years. Building something different so people can eat better.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="section section-parchment texture-paper">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm uppercase tracking-widest mb-4" style={{ color: 'var(--color-accent)' }}>
              About Indrio Fields
            </p>
            <h1 className="mb-6">Family Farmers.<br />Multi-Generational.</h1>
            <p className="lead">
              We&apos;re not a subscription box or marketplace. We&apos;re farmers first—
              with multi-generational expertise—who built a way to ship directly to you.
            </p>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-8">The Story</h2>
            <div className="space-y-6">
              <p>
                The Brown and Scott families have farmed the Southeast for over 200 years.
                Citrus groves. Cattle ranches. Row crops. We know this land.
              </p>
              <p>
                Twenty-five years ago, we started selling directly to consumers. Not because
                it was trendy—farm-to-table wasn&apos;t a thing yet—but because we were tired
                of watching the best fruit we grew rot while grocery stores sold inferior
                product at premium prices.
              </p>
              <p>
                The food system didn&apos;t reward what we were doing right. It rewarded
                yield, appearance, and shipping durability. Not flavor. Not nutrition.
                Not the health of the soil we&apos;d been building for generations.
              </p>
              <p className="text-xl font-medium" style={{ color: 'var(--color-forest)' }}>
                So we built our own way to market.
              </p>
              <p>
                Today, Indrio Fields is a family of brands that ships citrus, beef, and
                specialty foods directly to customers who care about what they eat. No
                commodity markets. No anonymous supply chains. Just families who grow
                food, connected to families who eat it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section section-cream">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-12">Leadership</h2>
            <div className="card p-8">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Photo placeholder */}
                <div
                  className="w-48 h-48 rounded-lg flex-shrink-0 flex items-center justify-center mx-auto md:mx-0"
                  style={{ backgroundColor: 'var(--color-cream-dark)' }}
                >
                  <span className="text-stone-400 text-sm">[Photo]</span>
                </div>
                <div>
                  <h3 className="text-2xl mb-2">Alex Brown</h3>
                  <p className="text-lg mb-4" style={{ color: 'var(--color-accent)' }}>
                    President & CEO
                  </p>
                  <div className="space-y-4">
                    <p>
                      Third-generation farmer. Twenty-five years building direct-to-consumer
                      food businesses. Started by shipping the citrus my father grew, because
                      watching it rot while inferior fruit sold made no sense.
                    </p>
                    <p>
                      Today I spend my time on quality systems, farmer partnerships, and
                      figuring out how to fix a food system that rewards the wrong things.
                      We&apos;re not going to complain our way to a better system. We&apos;re
                      going to grow our way there.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Are */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-8">What Indrio Fields Is</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="card">
                <h3 className="text-xl mb-3">Family Farmer-Owned</h3>
                <p className="mb-0">
                  Not a co-op. Not a collective. Not a venture-backed startup.
                  Owned by families who farm. That&apos;s it.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl mb-3">Multi-Generational</h3>
                <p className="mb-0">
                  Over 200 years of farming in the Southeast. My kids walk the same
                  groves my grandfather planted.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl mb-3">Vertically Integrated</h3>
                <p className="mb-0">
                  We grow it. We pack it. We ship it. No middlemen who don&apos;t know
                  what they&apos;re handling.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl mb-3">Quality-Obsessed</h3>
                <p className="mb-0">
                  We measure what matters. Brix. Omega ratios. Soil health. If you
                  can&apos;t put a number on it, it&apos;s just marketing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We're Not */}
      <section className="section section-cream">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-8">What We&apos;re Not</h2>
            <div className="space-y-4">
              <div className="card-parchment card flex items-start gap-4">
                <span className="text-2xl">✕</span>
                <div>
                  <h4 className="mb-1">Not Anti-Industrial Ag</h4>
                  <p className="mb-0 text-sm">
                    The adversary isn&apos;t farmers who grow at scale. It&apos;s a system
                    that fails to reward flavor, nutrition, and stewardship.
                  </p>
                </div>
              </div>
              <div className="card-parchment card flex items-start gap-4">
                <span className="text-2xl">✕</span>
                <div>
                  <h4 className="mb-1">Not a Tech Company</h4>
                  <p className="mb-0 text-sm">
                    We use technology to ship better and track quality. But we&apos;re
                    farmers first. The soil matters more than the software.
                  </p>
                </div>
              </div>
              <div className="card-parchment card flex items-start gap-4">
                <span className="text-2xl">✕</span>
                <div>
                  <h4 className="mb-1">Not Marketing-First</h4>
                  <p className="mb-0 text-sm">
                    The food speaks for itself. We measure what matters—brix, omega ratios,
                    soil health—and let the numbers tell the story.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Name */}
      <section className="section section-forest">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-6">Why &ldquo;Indrio&rdquo;?</h2>
            <p className="text-lg text-white/90 mb-4">
              <strong>Ind</strong> + <strong>Rio</strong> = <strong>Indrio</strong>.
              &ldquo;Indian&rdquo; in English, &ldquo;River&rdquo; in Spanish. It&apos;s a conjunction
              that reflects where our family has farmed for over 100 years—Florida&apos;s
              Indian River region.
            </p>
            <p className="text-lg text-white/90 mb-4">
              Indrio was established in 1924, centered around D.J. Wilcox&apos;s homestead
              during Florida&apos;s land boom. The town sits atop the Atlantic Coastal Ridge,
              in the sweet spot between ocean and river that grows the best citrus in America.
            </p>
            <p className="text-lg text-white/90">
              The name represents what we&apos;re about: deep roots in a specific place,
              and a commitment to the land and the families who work it.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-6">Grow Different. Eat Better.<br />Fix the Food System.</h2>
            <p className="lead mb-8">
              That&apos;s our mission. Everything we do flows from there.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/mission" className="btn btn-primary">
                Read Our Mission
              </Link>
              <Link href="/brands" className="btn btn-secondary">
                Explore Our Brands
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
