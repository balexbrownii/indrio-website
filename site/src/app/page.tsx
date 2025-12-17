import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section - Customer as Hero */}
      <section
        className="section hero-dark relative min-h-[70vh] flex items-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url(/images/grove-hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <p className="text-sm uppercase tracking-widest mb-4">
              For People Who Care What They Eat
            </p>
            <h1 className="mb-6">
              You can taste when food is grown right.<br />
              <span style={{ color: 'var(--color-accent)' }}>You just forgot what it&apos;s supposed to taste like.</span>
            </h1>
            <p className="lead mb-8">
              If you&apos;ve ever wondered why a grocery store orange tastes like water, or why
              &ldquo;grass-fed&rdquo; beef doesn&apos;t taste any different—you&apos;re not imagining it.
              The system is designed that way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/brands" className="btn btn-primary">
                Taste the Difference
              </Link>
              <Link
                href="/mission"
                className="btn"
                style={{
                  backgroundColor: 'transparent',
                  color: 'white',
                  border: '2px solid white'
                }}
              >
                See Why It Matters
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem You Face */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-8">You&apos;re Not Crazy. The Food Really Is Different.</h2>
            <div className="space-y-6">
              <p className="text-lg">
                You&apos;ve noticed it. The tomatoes that look perfect but taste like nothing. The oranges
                that are more sour than sweet. The beef labeled &ldquo;grass-fed&rdquo; that costs twice as much
                but doesn&apos;t taste any better.
              </p>
              <p className="text-lg">
                <strong>It&apos;s not your imagination.</strong> The food system rewards farmers for yield
                and appearance—not flavor or nutrition. USDA grades citrus by peel color, not sugar content.
                Grocers pay by the pound, not the brix. So that&apos;s what gets grown.
              </p>
              <div className="card-parchment card p-6" style={{ borderLeft: '4px solid var(--color-accent)' }}>
                <p className="text-lg mb-0">
                  <strong>The good news?</strong> When farmers are paid for what actually matters—flavor,
                  nutrition, soil health—they grow food that tastes the way you remember it should.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Simple Plan */}
      <section className="section section-cream">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-4">How It Works</h2>
            <p className="text-center text-lg mb-12">
              Getting food that&apos;s actually grown for flavor and nutrition is simpler than you think.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold"
                  style={{ backgroundColor: 'var(--color-forest)', color: 'white' }}
                >
                  1
                </div>
                <h3 className="text-xl mb-3">Choose What You Want</h3>
                <p>
                  Florida citrus. Texas grapefruit. American Wagyu beef. Pick what your family loves.
                </p>
              </div>
              <div className="text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold"
                  style={{ backgroundColor: 'var(--color-forest)', color: 'white' }}
                >
                  2
                </div>
                <h3 className="text-xl mb-3">We Ship It Fresh</h3>
                <p>
                  Picked at peak ripeness, not picked green to survive shipping. Direct from family farms to your door.
                </p>
              </div>
              <div className="text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold"
                  style={{ backgroundColor: 'var(--color-forest)', color: 'white' }}
                >
                  3
                </div>
                <h3 className="text-xl mb-3">Taste the Difference</h3>
                <p>
                  11°+ brix citrus instead of grocery&apos;s 8-10°. Beef with real omega-3s. Food that reminds you what food should be.
                </p>
              </div>
            </div>
            <div className="text-center mt-10">
              <Link href="/brands" className="btn btn-primary">
                Explore Your Options
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get - Transformation */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-4">What Changes When You Switch</h2>
            <p className="text-center text-lg mb-12">
              The numbers tell the story. Here&apos;s the difference you&apos;ll actually taste.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card p-6">
                <h3 className="text-xl mb-4" style={{ color: 'var(--color-forest)' }}>Citrus</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Sugar content (Brix)</span>
                    <div className="text-right">
                      <span className="text-stone-400 line-through mr-3">8-10°</span>
                      <span className="font-bold" style={{ color: 'var(--color-accent)' }}>11°+ min</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Time from tree to you</span>
                    <div className="text-right">
                      <span className="text-stone-400 line-through mr-3">2-6 weeks</span>
                      <span className="font-bold" style={{ color: 'var(--color-accent)' }}>Days</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Picked when</span>
                    <div className="text-right">
                      <span className="text-stone-400 line-through mr-3">Meets minimum</span>
                      <span className="font-bold" style={{ color: 'var(--color-accent)' }}>Peak ripe</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card p-6">
                <h3 className="text-xl mb-4" style={{ color: 'var(--color-forest)' }}>Beef</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Omega-6 to Omega-3</span>
                    <div className="text-right">
                      <span className="text-stone-400 line-through mr-3">15-20:1</span>
                      <span className="font-bold" style={{ color: 'var(--color-accent)' }}>2.5:1</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>EPA Omega-3</span>
                    <div className="text-right">
                      <span className="font-bold" style={{ color: 'var(--color-accent)' }}>+1313%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Time to finish</span>
                    <div className="text-right">
                      <span className="text-stone-400 line-through mr-3">12 mo</span>
                      <span className="font-bold" style={{ color: 'var(--color-accent)' }}>24 mo</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Trust */}
      <section className="section section-cream">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-8">You&apos;re Not Alone</h2>
            <p className="text-xl mb-8">
              Thousands of families have made the switch. They came for the citrus gift boxes.
              They stayed because their kids actually eat the oranges.
            </p>
            <div className="grid grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-4xl font-bold mb-2" style={{ color: 'var(--color-forest)' }}>150+</div>
                <div className="text-sm">Years of family farming</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2" style={{ color: 'var(--color-forest)' }}>4</div>
                <div className="text-sm">Brands, one standard</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2" style={{ color: 'var(--color-forest)' }}>100%</div>
                <div className="text-sm">American grown</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Options */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">Find What Your Family Will Love</h2>
            <p className="lead">
              Different products for different tables. Same commitment to growing it right.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: 'Hale Groves',
                description: 'Florida citrus at 11-14° brix. The gift that makes people ask where you got it.',
                metric: 'Since 1947',
                href: 'https://halegroves.com',
              },
              {
                name: 'Pittman & Davis',
                description: 'Texas Ruby Reds and specialty foods. Heritage varieties you won&apos;t find in stores.',
                metric: 'Since the 1920s',
                href: 'https://pittmandavis.com',
              },
              {
                name: 'Sun Harvest Citrus',
                description: 'Fresh-squeezed juice made while you watch. Visit us in Fort Myers.',
                metric: 'Farm-fresh daily',
                href: 'https://sunharvestcitrus.com',
              },
              {
                name: 'Everglades Ranch',
                description: 'American Wagyu with omega-3s you can actually measure. 24 months on pasture.',
                metric: 'Grass-finished',
                href: 'https://evergladesranch.com',
              },
            ].map((brand) => (
              <a
                key={brand.name}
                href={brand.href}
                target="_blank"
                rel="noopener noreferrer"
                className="brand-card block"
              >
                <h3 className="text-xl mb-2">{brand.name}</h3>
                <p className="text-sm mb-4">{brand.description}</p>
                <span className="quality-badge">{brand.metric}</span>
              </a>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/brands" className="btn btn-secondary">
              See All Options
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter - Invitation to Journey */}
      <section className="section section-cream">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="card-parchment card p-8 text-center">
              <h3 className="text-2xl mb-2">Want to Know More?</h3>
              <p className="text-lg mb-6">
                The Field Guide: What&apos;s really going on with your food, and what you can do about it.
                Short reads. No spam. Unsubscribe anytime.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email"
                  className="input flex-1"
                />
                <button className="btn btn-primary">
                  Send It To Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - The Stakes */}
      <section className="section section-forest">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-6">Your Family Deserves Food That&apos;s Actually Grown for Them</h2>
            <p className="text-lg text-white/90 mb-8">
              The industrial food system won&apos;t change on its own. But you don&apos;t have to wait for it.
              Every time you choose food grown for flavor and nutrition, you&apos;re voting for a different kind of farming.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/brands" className="btn btn-primary">
                Start With Citrus
              </Link>
              <Link href="/brands" className="btn btn-outline border-white text-white hover:bg-white/10">
                Or Try the Beef
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
