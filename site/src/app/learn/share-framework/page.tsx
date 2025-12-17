import Link from 'next/link';

export const metadata = {
  title: 'The S.H.A.R.E. Framework | Indrio Fields',
  description: 'Our proprietary framework for measuring what actually matters in food quality. Soil, Heritage, Agricultural practices, Ripening, and Enrichment.',
};

export default function ShareFrameworkPage() {
  return (
    <>
      {/* Hero */}
      <section className="section section-parchment texture-paper">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm uppercase tracking-widest mb-4" style={{ color: 'var(--color-accent)' }}>
              Our Framework
            </p>
            <h1 className="mb-6">
              S.H.A.R.E.
            </h1>
            <p className="lead">
              Our proprietary system for measuring what actually matters in food quality.
              Not certifications. Not marketing. Outcomes you can taste and measure.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
              {[
                { letter: 'S', word: 'Soil', color: '#8B4513' },
                { letter: 'H', word: 'Heritage', color: '#2E7D32' },
                { letter: 'A', word: 'Agricultural', color: '#1565C0' },
                { letter: 'R', word: 'Ripen', color: '#F57C00' },
                { letter: 'E', word: 'Enrich', color: '#7B1FA2' },
              ].map((item) => (
                <div key={item.letter} className="card p-6 text-center">
                  <div className="text-4xl font-bold mb-2" style={{ color: item.color }}>
                    {item.letter}
                  </div>
                  <div className="font-medium text-lg">{item.word}</div>
                </div>
              ))}
            </div>

            <div className="card-parchment card p-6 mb-12">
              <p className="text-lg mb-0">
                S.H.A.R.E. isn&apos;t a certification you buy. It&apos;s a measurement framework
                we developed to evaluate what actually contributes to food quality—from the soil
                it grows in to the nutrition it delivers. Each factor builds on the others.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Breakdown */}
      <section className="section section-cream">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-16">

            {/* Soil */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold text-white"
                  style={{ backgroundColor: '#8B4513' }}
                >
                  S
                </div>
                <div>
                  <h2 className="mb-0">Soil</h2>
                  <p className="text-stone-600 mb-0">The foundation of nutrition</p>
                </div>
              </div>
              <p className="text-lg mb-4">
                Healthy soil produces healthy plants. It&apos;s that simple—and that profound.
              </p>
              <p className="mb-4">
                Plants can only contain the minerals that exist in the soil they grow in.
                Industrial agriculture has depleted soils through decades of synthetic fertilizers
                that provide NPK (nitrogen, phosphorus, potassium) but ignore the dozens of
                trace minerals that make food nutritious.
              </p>
              <div className="card p-4">
                <h4 className="font-medium mb-2">What We Look For</h4>
                <ul className="space-y-2 text-stone-600">
                  <li>• Soil organic matter content (higher = more nutrients available)</li>
                  <li>• Mineral balance and trace element presence</li>
                  <li>• Microbial activity and soil biology health</li>
                  <li>• Practices that build soil (cover crops, composting, minimal tillage)</li>
                </ul>
              </div>
            </div>

            {/* Heritage */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold text-white"
                  style={{ backgroundColor: '#2E7D32' }}
                >
                  H
                </div>
                <div>
                  <h2 className="mb-0">Heritage</h2>
                  <p className="text-stone-600 mb-0">Genetics set the ceiling</p>
                </div>
              </div>
              <p className="text-lg mb-4">
                The variety you grow determines the maximum potential for flavor and nutrition.
                Modern varieties are bred for yield and shipping—not for you.
              </p>
              <p className="mb-4">
                Heritage and heirloom varieties were bred before industrial agriculture
                optimized for weight and uniformity. A Washington Navel orange can reach
                12.5° brix at peak. A modern commodity variety might max out at 10°.
                The genetics cap the outcome.
              </p>
              <div className="card p-4">
                <h4 className="font-medium mb-2">What We Look For</h4>
                <ul className="space-y-2 text-stone-600">
                  <li>• Varieties selected for flavor, not just yield or shelf life</li>
                  <li>• Heritage cultivars with known quality profiles</li>
                  <li>• Breeding history prioritizing nutrition and taste</li>
                  <li>• Regional appropriateness (right variety for the terroir)</li>
                </ul>
              </div>
            </div>

            {/* Agricultural */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold text-white"
                  style={{ backgroundColor: '#1565C0' }}
                >
                  A
                </div>
                <div>
                  <h2 className="mb-0">Agricultural</h2>
                  <p className="text-stone-600 mb-0">Practices that actually matter</p>
                </div>
              </div>
              <p className="text-lg mb-4">
                How food is grown affects what ends up in it. But not all practices
                marketed as &ldquo;better&rdquo; actually are—and some that matter aren&apos;t on labels.
              </p>
              <p className="mb-4">
                We care about practices that demonstrably impact quality: integrated pest
                management, appropriate irrigation, timing of applications, and avoiding
                practices that prioritize speed over nutrition. &ldquo;Organic&rdquo; is one approach,
                but it&apos;s not the only path to quality.
              </p>
              <div className="card p-4">
                <h4 className="font-medium mb-2">What We Look For</h4>
                <ul className="space-y-2 text-stone-600">
                  <li>• Minimal synthetic inputs where alternatives exist</li>
                  <li>• Practices that support soil biology, not just feed plants</li>
                  <li>• Appropriate stocking density for livestock</li>
                  <li>• Avoidance of practices that compromise quality for speed</li>
                </ul>
              </div>
            </div>

            {/* Ripen */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold text-white"
                  style={{ backgroundColor: '#F57C00' }}
                >
                  R
                </div>
                <div>
                  <h2 className="mb-0">Ripen</h2>
                  <p className="text-stone-600 mb-0">Timing is everything</p>
                </div>
              </div>
              <p className="text-lg mb-4">
                When food is harvested determines how good it will ever be.
                For non-climacteric produce like citrus, what you pick is what you get—forever.
              </p>
              <p className="mb-4">
                Industrial supply chains demand early harvest so produce survives weeks of
                transport and storage. But for citrus, this means sacrificing 20-40% of
                potential sugar content. The fruit looks fine. It just doesn&apos;t taste like anything.
              </p>
              <div className="card p-4">
                <h4 className="font-medium mb-2">What We Look For</h4>
                <ul className="space-y-2 text-stone-600">
                  <li>• Tree-ripened citrus (not picked to survive shipping)</li>
                  <li>• Brix testing at harvest to verify sweetness</li>
                  <li>• Time from harvest to customer (shorter = better)</li>
                  <li>• Cold chain management (temperature affects quality degradation)</li>
                </ul>
              </div>
            </div>

            {/* Enrich */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold text-white"
                  style={{ backgroundColor: '#7B1FA2' }}
                >
                  E
                </div>
                <div>
                  <h2 className="mb-0">Enrich</h2>
                  <p className="text-stone-600 mb-0">Measuring what matters</p>
                </div>
              </div>
              <p className="text-lg mb-4">
                The proof is in the outcomes. Does this food actually deliver better
                flavor and nutrition? We measure it.
              </p>
              <p className="mb-4">
                &ldquo;Enrich&rdquo; is about verification and the complete picture: Does the final
                product meet quality standards? Does the system benefit everyone—farmers
                getting fair compensation, consumers getting real nutrition, soil being
                built rather than depleted? Quality that enriches the entire chain.
              </p>
              <div className="card p-4">
                <h4 className="font-medium mb-2">What We Measure</h4>
                <ul className="space-y-2 text-stone-600">
                  <li>• Brix levels for fruit (sugar content as quality proxy)</li>
                  <li>• Fatty acid profiles for meat (omega ratios)</li>
                  <li>• Mineral density where testing is available</li>
                  <li>• Farmer compensation (are they paid for quality?)</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* How We Use It */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-8">How We Use S.H.A.R.E.</h2>
            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="text-xl mb-3">Farm Selection</h3>
                <p className="text-stone-600 mb-0">
                  When we evaluate farms and producers, we assess each S.H.A.R.E. dimension.
                  Not every farm will excel at everything, but we look for demonstrated
                  commitment and measurable outcomes.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl mb-3">Quality Verification</h3>
                <p className="text-stone-600 mb-0">
                  We test the outcomes. Brix levels for citrus. Omega ratios for beef.
                  The framework isn&apos;t just philosophy—it&apos;s testable. If the numbers
                  don&apos;t support the claims, we know something is missing.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl mb-3">Consumer Education</h3>
                <p className="text-stone-600 mb-0">
                  We teach people what to look for. Not to memorize certifications,
                  but to understand the factors that actually create quality. Armed
                  with this knowledge, you can evaluate any food source.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-forest">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">See S.H.A.R.E. in Action</h2>
            <p className="text-lg text-white/90 mb-8">
              Our Fielder verification engine applies S.H.A.R.E. to real products.
              See the data behind our quality claims.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/fielder" className="btn btn-primary">
                Explore Fielder
              </Link>
              <Link href="/learn" className="btn btn-outline border-white text-white hover:bg-white/10">
                Food Quality 101
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
