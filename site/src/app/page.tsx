import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
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
              Family Farmer-Owned
            </p>
            <h1 className="mb-6">
              Most food is grown to look good.<br />
              <span style={{ color: 'var(--color-accent)' }}>Not do good.</span>
            </h1>
            <p className="lead mb-8">
              We grow and connect food that&apos;s truly better—flavorful, nourishing, American-grown.
              This is how we change the food system from the ground up.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/mission" className="btn btn-primary">
                Our Mission
              </Link>
              <Link
                href="/brands"
                className="btn"
                style={{
                  backgroundColor: 'transparent',
                  color: 'white',
                  border: '2px solid white'
                }}
              >
                Shop Our Brands
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem + Our Response (Condensed) */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl mb-4">The Problem</h2>
                <p className="mb-4">
                  USDA grades citrus by peel color, not sugar content. Grocers pay by the pound, not the brix.
                  Farmers are paid to grow heavy, perfect-looking food that tastes like nothing.
                </p>
                <p className="font-medium" style={{ color: 'var(--color-forest)' }}>
                  We don&apos;t blame the farmers. They grow what the system pays for.
                </p>
              </div>
              <div>
                <h2 className="text-2xl mb-4">Our Response</h2>
                <p className="mb-4">
                  We pay farmers for nutrition and flavor. Brix levels, omega ratios, soil health scores.
                  Change the payment, change the food.
                </p>
                <Link href="/mission" className="btn btn-secondary">
                  Read the Full Story →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S.H.A.R.E. Framework - Teaser Only */}
      <section className="section section-cream">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4">The S.H.A.R.E. Framework</h2>
            <p className="text-lg mb-6">
              Our growing methodology is based on the work of Dr. William Albrecht—healthy soil grows
              food that actually nourishes. Five principles guide everything we do.
            </p>
            <div className="inline-flex flex-wrap justify-center gap-3 mb-8">
              {['Soil', 'Heritage', 'Agricultural', 'Ripen', 'Enrich'].map((word) => (
                <span key={word} className="px-4 py-2 rounded-full bg-white border border-stone-200 font-medium">
                  <span style={{ color: 'var(--color-accent)' }}>{word[0]}</span>{word.slice(1)}
                </span>
              ))}
            </div>
            <div>
              <Link href="/mission" className="btn btn-secondary">
                See How We Grow Different →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* From the Field (Blog Preview) Section */}
      <section className="section">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h2 className="mb-2">From the Field</h2>
              <p className="lead mb-0">What we&apos;re learning about food, farming, and fixing the system.</p>
            </div>
            <Link href="/blog" className="btn btn-outline">
              View All Posts
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'The System Is Rigged Against Flavor',
                excerpt: 'USDA grades for appearance. Grocers pay for yield. Farmers grow what they get paid for. The result? Food that looks perfect and tastes like nothing.',
                category: 'Food System',
              },
              {
                title: 'Farmers Aren\'t the Problem',
                excerpt: 'They\'re ready to grow exceptional food. The system just doesn\'t pay them for it. We do.',
                category: 'Our Approach',
              },
              {
                title: 'What "Product of USA" Actually Means',
                excerpt: 'Beef can be imported from anywhere, processed here, and labeled American. The loophole is bigger than you think.',
                category: 'Food System',
              },
            ].map((post, index) => (
              <article key={index} className="card">
                <div className="mb-4">
                  <span
                    className="text-xs font-medium uppercase tracking-wide"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl mb-3">{post.title}</h3>
                <p className="mb-4">{post.excerpt}</p>
                <Link
                  href="/blog"
                  className="text-sm font-medium"
                  style={{ color: 'var(--color-forest)' }}
                >
                  Read more →
                </Link>
              </article>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="card-parchment card mt-12 p-8 text-center">
            <h3 className="mb-2">The Field Guide</h3>
            <p className="mb-6">
              What we&apos;re learning about food, farming, and fixing the system. No fluff.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email"
                className="input flex-1"
              />
              <button className="btn btn-primary">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="section section-cream">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Brands</h2>
            <p className="lead">
              Different products. Same standards. Every brand pays farmers for flavor and nutrition.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: 'Hale Groves',
                description: 'Indian River citrus. Three generations of grove families.',
                metric: 'Since 1947',
                href: 'https://halegroves.com',
              },
              {
                name: 'Pittman & Davis',
                description: 'Texas citrus and specialty foods. Heritage varieties.',
                metric: 'Since the 1920s',
                href: 'https://pittmandavis.com',
              },
              {
                name: 'Sun Harvest Citrus',
                description: 'Same-day squeezed juice from our Fort Myers farm store.',
                metric: 'Farm-fresh daily',
                href: 'https://sunharvestcitrus.com',
              },
              {
                name: 'Everglades Ranch',
                description: 'Pasture-raised beef. 24 months on Florida grass. No feedlots.',
                metric: 'American Wagyu',
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
              Learn About Our Brands
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section section-forest">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-6">Taste the Difference</h2>
            <p className="text-lg text-white/90 mb-8">
              Citrus at 11-14° brix instead of 6-8°. Beef with a 2.5:1 omega ratio instead of 7:1.
              This is what food tastes like when farmers are paid to grow it right.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/brands" className="btn btn-primary">
                Shop Our Brands
              </Link>
              <Link href="/newsletter" className="btn btn-outline border-white text-white hover:bg-white/10">
                Get The Field Guide
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
