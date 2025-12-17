import Link from 'next/link';

export const metadata = {
  title: 'Blog | Indrio',
  description: 'Insights on food, farming, and fixing what\'s broken. Essays, investigations, and stories from the field.',
};

// Placeholder blog posts - will be replaced with CMS integration
const posts = [
  {
    slug: 'why-we-exist',
    title: 'The System Is Rigged Against Flavor',
    excerpt: 'USDA grades for appearance. Grocers pay for yield. Farmers grow what they get paid for. Here\'s why your grocery store produce looks perfect and tastes like nothing.',
    category: 'Food System',
    date: 'December 2024',
    readTime: '8 min read',
    featured: true,
  },
  {
    slug: 'farmers-are-the-solution',
    title: 'Farmers Aren\'t the Problem',
    excerpt: 'They\'re ready to grow exceptional food. The system just doesn\'t pay them for it. We do.',
    category: 'Our Approach',
    date: 'November 2024',
    readTime: '5 min read',
    featured: true,
  },
  {
    slug: 'product-of-usa-loophole',
    title: 'What "Product of USA" Actually Means',
    excerpt: 'Beef imported from anywhere, processed here, labeled American. The loophole is bigger than you think.',
    category: 'Food System',
    date: 'November 2024',
    readTime: '6 min read',
    featured: false,
  },
  {
    slug: 'measuring-quality',
    title: 'If You Can\'t Measure It, It\'s Marketing',
    excerpt: 'Brix. Omega-3 ratios. Nutrient density. Every product has metrics that prove quality. We test them.',
    category: 'Science & Nutrition',
    date: 'October 2024',
    readTime: '7 min read',
    featured: false,
  },
  {
    slug: 'paying-farmers-for-quality',
    title: 'The Economics of Growing Different',
    excerpt: 'Higher standards cost more to meet. If you don\'t pay farmers for quality, they can\'t afford to grow it.',
    category: 'Our Approach',
    date: 'October 2024',
    readTime: '5 min read',
    featured: false,
  },
  {
    slug: 'heritage-vs-industrial',
    title: 'Why Heritage Varieties Matter',
    excerpt: 'Industrial agriculture bred flavor and nutrition out of food. Here\'s what we lost—and how to get it back.',
    category: 'Food System',
    date: 'September 2024',
    readTime: '6 min read',
    featured: false,
  },
];

const categories = ['All', 'Food System', 'Our Approach', 'Science & Nutrition', 'From the Farm'];

export default function BlogPage() {
  const featuredPosts = posts.filter(p => p.featured);
  const regularPosts = posts.filter(p => !p.featured);

  return (
    <>
      {/* Hero */}
      <section className="section section-parchment texture-paper">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">From the Field</h1>
            <p className="lead">
              What we&apos;re learning about food, farming, and fixing the system.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="section">
        <div className="container">
          <h2 className="mb-8">Featured</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <article key={post.slug} className="card group">
                {/* Placeholder image */}
                <div
                  className="aspect-[16/9] rounded-lg mb-4 flex items-center justify-center"
                  style={{ backgroundColor: 'var(--color-cream-dark)' }}
                >
                  <span className="text-stone-400 text-sm">[Image]</span>
                </div>
                <div className="flex items-center gap-4 mb-3">
                  <span
                    className="text-xs font-medium uppercase tracking-wide"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    {post.category}
                  </span>
                  <span className="text-xs text-stone-500">{post.date}</span>
                  <span className="text-xs text-stone-500">{post.readTime}</span>
                </div>
                <h3 className="text-2xl mb-3 group-hover:text-stone-600 transition-colors">
                  {post.title}
                </h3>
                <p className="mb-4">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="font-medium"
                  style={{ color: 'var(--color-forest)' }}
                >
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="section section-cream py-8">
        <div className="container">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === 'All'
                    ? 'bg-stone-800 text-white'
                    : 'bg-white border border-stone-200 hover:border-stone-400'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="section">
        <div className="container">
          <h2 className="mb-8">All Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <article key={post.slug} className="card group">
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="text-xs font-medium uppercase tracking-wide"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    {post.category}
                  </span>
                  <span className="text-xs text-stone-500">{post.readTime}</span>
                </div>
                <h3 className="text-xl mb-3 group-hover:text-stone-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-stone-500">{post.date}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-sm font-medium"
                    style={{ color: 'var(--color-forest)' }}
                  >
                    Read →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section section-forest">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-4">The Field Guide</h2>
            <p className="text-lg text-white/90 mb-8">
              Weekly notes on food, farming, and fixing the system. No fluff.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email"
                className="input flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <button className="btn btn-primary">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Explore More */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-8">Explore</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/about" className="btn btn-secondary">
                About Us
              </Link>
              <Link href="/fielder" className="btn btn-outline">
                Explore Fielder
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
