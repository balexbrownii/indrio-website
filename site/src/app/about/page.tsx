import Link from 'next/link';

export const metadata = {
  title: 'About Us | Indrio Fields',
  description: 'We\'re not a tech startup or a subscription box. We\'re farming families who figured out how to get real food to your door.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero - Empathy First */}
      <section className="section section-parchment texture-paper">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm uppercase tracking-widest mb-4" style={{ color: 'var(--color-accent)' }}>
              About Indrio Fields
            </p>
            <h1 className="mb-6">We Know What You&apos;re Looking For.<br />Because We Were Looking For It Too.</h1>
            <p className="lead">
              We&apos;re farming families who got tired of watching good food go to waste while stores
              sold inferior product. So we built a way to get real food directly to people who care.
            </p>
          </div>
        </div>
      </section>

      {/* The Short Version */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-8">The Short Version</h2>
            <div className="space-y-6 text-lg">
              <p>
                <strong>We&apos;re family farmers.</strong> The Brown and Scott families have partnered
                in citrus operations across Florida&apos;s Indian River region for multiple generations.
                4,000+ acres. Citrus groves. Cattle ranches. We know this land.
              </p>
              <p>
                <strong>We got frustrated.</strong> Twenty-five years ago, we watched our best fruit rot
                because the grocery system didn&apos;t want it—too ripe, wrong shape, wouldn&apos;t survive
                shipping. Meanwhile, stores sold pale, sour oranges at premium prices.
              </p>
              <p>
                <strong>We built something different.</strong> Direct-to-consumer shipping. Picked ripe,
                shipped fast, to people who can taste the difference. No middlemen. No commodity markets.
                Just families who grow food, connected to families who eat it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Can Help */}
      <section className="section section-cream">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-8">Why We Can Help</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="card">
                <h3 className="text-xl mb-3">We Understand the Problem</h3>
                <p className="mb-0">
                  We&apos;ve spent decades inside the food system. We know why grocery store produce
                  tastes like nothing—because we&apos;ve watched it happen. We know the economics
                  that push farmers toward yield over flavor. We lived it.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl mb-3">We Have the Solution</h3>
                <p className="mb-0">
                  Multi-generational farming families. 25+ years of direct-to-consumer shipping experience.
                  4,000+ acres across Florida&apos;s best growing regions. We&apos;ve already built the
                  infrastructure to get real food to your door.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl mb-3">We Measure What Matters</h3>
                <p className="mb-0">
                  Brix levels. Omega ratios. Soil health scores. We don&apos;t make vague claims—we
                  test, measure, and report. If you want to know the numbers behind your food, we
                  have them.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl mb-3">We&apos;re Not Going Anywhere</h3>
                <p className="mb-0">
                  This isn&apos;t a venture-backed startup chasing growth. It&apos;s family land we intend
                  to pass down. We&apos;re building something that lasts, not something to sell.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Name */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-8">Why &ldquo;Indrio&rdquo;?</h2>
            <div className="card-parchment card p-8 text-center">
              <p className="text-xl mb-4">
                <strong>Ind</strong> + <strong>Rio</strong> = <strong>Indrio</strong>
              </p>
              <p className="text-lg mb-4">
                &ldquo;Indian&rdquo; in English, &ldquo;River&rdquo; in Spanish. The name reflects where
                we farm—Florida&apos;s Indian River region.
              </p>
              <p className="text-lg mb-0">
                The Indrio community was established in 1924, centered around D.J. Wilcox&apos;s homestead
                during Florida&apos;s land boom. It sits on the Atlantic Coastal Ridge, in the sweet spot
                between ocean and river that produces some of the best citrus in America. The name represents
                deep roots in a specific place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership - Condensed */}
      <section className="section section-cream">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-8">Who You&apos;re Working With</h2>
            <div className="card p-8">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Photo placeholder */}
                <div
                  className="w-48 h-48 rounded flex-shrink-0 flex items-center justify-center mx-auto md:mx-0"
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
                      Multi-generational farmer. Twenty-five years building direct-to-consumer food businesses.
                      Started in the late 1990s with specialty citrus marketing, because watching great fruit
                      rot while inferior fruit sold made no sense.
                    </p>
                    <p>
                      I spend my time on quality systems and farmer partnerships—figuring out how to pay
                      farmers for what actually matters. The world&apos;s best flavor. That is our goal, period.
                      If you have questions about how we grow or why the numbers matter, I&apos;m happy to explain.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We're Not */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-8">What We&apos;re Not</h2>
            <p className="text-center text-lg mb-8">
              So you know what you&apos;re getting into.
            </p>
            <div className="space-y-4">
              <div className="card-parchment card flex items-start gap-4">
                <span className="text-2xl">✕</span>
                <div>
                  <h4 className="mb-1">Not a Tech Company</h4>
                  <p className="mb-0 text-sm">
                    We use technology to ship better and track quality. But we&apos;re farmers first.
                    The soil matters more than the software.
                  </p>
                </div>
              </div>
              <div className="card-parchment card flex items-start gap-4">
                <span className="text-2xl">✕</span>
                <div>
                  <h4 className="mb-1">Not a Subscription Box</h4>
                  <p className="mb-0 text-sm">
                    Order when you want, what you want. No commitments, no algorithms deciding what
                    you should eat. Just food from farms you can trust.
                  </p>
                </div>
              </div>
              <div className="card-parchment card flex items-start gap-4">
                <span className="text-2xl">✕</span>
                <div>
                  <h4 className="mb-1">Not Preachy</h4>
                  <p className="mb-0 text-sm">
                    We&apos;re not here to lecture you about organic vs. conventional or shame you
                    about your choices. We just grow good food and make it available. You decide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-forest">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-6">Ready to Taste the Difference?</h2>
            <p className="lead mb-8 text-white/90">
              We&apos;ve been doing this for 25 years. The only question is what you want to try first.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/learn" className="btn btn-primary">
                Learn About Food Quality
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
