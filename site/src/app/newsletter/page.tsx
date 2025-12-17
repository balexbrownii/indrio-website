import Link from 'next/link';

export const metadata = {
  title: 'The Field Guide | Indrio Fields',
  description: 'Weekly notes on food, farming, and what we\'re learning. Straight talk from the field.',
};

export default function NewsletterPage() {
  return (
    <>
      {/* Hero */}
      <section className="section section-parchment texture-paper">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm uppercase tracking-widest mb-4" style={{ color: 'var(--color-accent)' }}>
              A Weekly Letter from Alex Brown
            </p>
            <h1 className="mb-6">The Field Guide</h1>
            <p className="lead">
              Weekly notes on food, farming, and what we&apos;re learning.
              Straight talk from the field.
            </p>
          </div>
        </div>
      </section>

      {/* What This Is */}
      <section className="section">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="card-parchment card p-8">
              <p className="text-lg mb-6">
                I&apos;ve been farming and shipping food directly to families for 25 years.
                My family has worked this land for over 200. Along the way, I&apos;ve learned
                some things about food, farming, and why the system works (or doesn&apos;t work)
                the way it does.
              </p>
              <p className="text-lg mb-6">
                The Field Guide is where I share those lessons. Sometimes it&apos;s about
                how to pick a ripe grapefruit. Sometimes it&apos;s about why grocery store
                beef tastes different. Sometimes it&apos;s just a story from the field.
              </p>
              <p className="text-lg mb-0" style={{ color: 'var(--color-forest)' }}>
                One email. Once a week. No sales pitches—just straight talk from
                someone who actually grows the food.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Signup Form */}
      <section className="section section-cream">
        <div className="container">
          <div className="max-w-xl mx-auto">
            <div className="card p-8">
              <h2 className="text-2xl text-center mb-6">Get The Field Guide</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    className="input w-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                    First name (so I know who I&apos;m writing to)
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Your first name"
                    className="input w-full"
                  />
                </div>
                <button type="submit" className="btn btn-primary w-full">
                  Subscribe
                </button>
              </form>
              <p className="text-sm text-center text-stone-500 mt-4">
                No spam. Unsubscribe anytime. I&apos;ll never sell your email.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-8">What you&apos;ll learn</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="card">
                <h3 className="text-xl mb-3">The Stuff Nobody Tells You</h3>
                <p className="mb-0">
                  Why &ldquo;organic&rdquo; doesn&apos;t always mean what you think. What actually
                  makes grass-fed beef different. How to read past the marketing
                  and know what you&apos;re really buying.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl mb-3">Stories from the Field</h3>
                <p className="mb-0">
                  What it&apos;s actually like to grow food for a living. The wins,
                  the disasters, and the lessons learned over 25 years of doing this.
                  Farm-to-table, minus the Instagram filter.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl mb-3">Quality You Can Measure</h3>
                <p className="mb-0">
                  Brix readings. Omega ratios. Soil tests. I&apos;ll teach you the numbers
                  that actually matter—so you can tell whether food is good or just
                  well-marketed.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl mb-3">What&apos;s Broken (And How to Fix It)</h3>
                <p className="mb-0">
                  The food system rewards the wrong things. I&apos;ll explain what&apos;s broken,
                  why it got that way, and what you can do about it—one choice at a time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Issues */}
      <section className="section section-cream">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-8">Recent letters</h2>
            <div className="space-y-4">
              {[
                {
                  title: 'Why Beautiful Grapefruit Rotted on Our Trees',
                  date: 'December 2024',
                  preview: 'The story of how I watched our best fruit go to waste while grocery stores sold inferior product. It\'s why we started shipping directly.',
                },
                {
                  title: 'The 14° Rule',
                  date: 'December 2024',
                  preview: 'Why we test every harvest for brix. What that number means. And why most grocery citrus doesn\'t come close.',
                },
                {
                  title: 'Twenty-Four Months',
                  date: 'November 2024',
                  preview: 'Our cattle take twice as long to finish as industrial operations. Here\'s why we do it anyway—and what it means for the steak on your plate.',
                },
              ].map((issue) => (
                <div key={issue.title} className="card-parchment card flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg mb-1">{issue.title}</h3>
                    <p className="text-sm text-stone-600 mb-0">{issue.preview}</p>
                  </div>
                  <div className="text-sm text-stone-500 md:text-right flex-shrink-0">
                    {issue.date}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-center mb-8">Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg mb-2">How often will I hear from you?</h3>
                <p className="mb-0">
                  Once a week, usually Tuesday mornings. Sometimes I skip a week if
                  there&apos;s nothing worth saying. Quality over quantity.
                </p>
              </div>
              <div>
                <h3 className="text-lg mb-2">Is this just marketing for your products?</h3>
                <p className="mb-0">
                  No. I&apos;ll mention our brands when relevant, but the newsletter is about
                  ideas—not sales pitches. If you want to buy something, you know where
                  to find us.
                </p>
              </div>
              <div>
                <h3 className="text-lg mb-2">Who actually writes this?</h3>
                <p className="mb-0">
                  I do. Alex Brown. Third-generation farmer, 25 years shipping direct.
                  No ghostwriters, no marketing team. Just me and a keyboard.
                </p>
              </div>
              <div>
                <h3 className="text-lg mb-2">Can I reply to the emails?</h3>
                <p className="mb-0">
                  Yes. I read every reply. Can&apos;t always respond to everyone, but I
                  read them all. Some of the best letters come from reader questions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section section-forest">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-6">Grow Different. Eat Better.<br />Fix the Food System.</h2>
            <p className="text-lg text-white/90 mb-8">
              Join readers who want to understand where their food comes from,
              how it&apos;s grown—and why it matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email"
                className="input flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <button className="btn btn-primary">
                Get The Field Guide
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
