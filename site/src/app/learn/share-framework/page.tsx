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
                { letter: 'S', word: 'Soil Health', color: '#8B4513' },
                { letter: 'H', word: 'Heritage Cultivars', color: '#2E7D32' },
                { letter: 'A', word: 'Agricultural Practices', color: '#1565C0' },
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
                <div className="share-icon share-icon-soil w-16 h-16 text-3xl font-bold">
                  S
                </div>
                <div>
                  <h2 className="mb-0">Soil Health</h2>
                  <p className="text-stone-600 mb-0">Mineralized soil = foundation</p>
                </div>
              </div>
              <p className="text-lg mb-4">
                S.H.A.R.E. is built on the soil science from Alternative Agriculture (Albrecht, Kempf, Kittredge, Chaboussou)—that perfectly balanced, <strong>mineralized soil</strong> produces plants that are naturally pest/disease resistant and maximize nutrient density.
              </p>
              <p className="mb-4">
                This is the foundational insight: Advanced soil health reduces the need for inputs. Mineralized soil produces plants that complete photosynthesis, protein synthesis, and secondary metabolite production. Pests feed on amino acids and simple sugars—healthy plants convert these into complex molecules pests can&apos;t digest. <em>&ldquo;A pest starves on a healthy plant.&rdquo;</em> (Trophobiosis Theory, Francis Chaboussou)
              </p>
              <div className="card p-4">
                <h4 className="font-medium mb-2">Three Fertility Approaches</h4>
                <ul className="space-y-2 text-stone-600">
                  <li>• <strong>Annual Fertility:</strong> Apply inputs each season (compensates for lower S)</li>
                  <li>• <strong>Soil Banking:</strong> Long-term S investment, fewer A inputs needed</li>
                  <li>• <strong>Mineralized Soil Science:</strong> THE key differentiator—balanced minerals unlock peak nutrition (ACRES USA, Albrecht, BioNutrient)</li>
                </ul>
                <p className="text-sm text-stone-500 mt-3 mb-0">
                  <strong>Key insight:</strong> Better S = less A needed. Mineralized soil is the foundation that both reduces inputs AND maximizes nutrition.
                </p>
              </div>
            </div>

            {/* Heritage */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="share-icon share-icon-heritage w-16 h-16 text-3xl font-bold">
                  H
                </div>
                <div>
                  <h2 className="mb-0">Heritage Cultivars</h2>
                  <p className="text-stone-600 mb-0">Genetic ceiling you cannot exceed</p>
                </div>
              </div>
              <p className="text-lg mb-4">
                <strong>Heritage equals flavor and nutrition focus, not yield.</strong> This pillar accounts for the DILUTION EFFECT—cultivar + rootstock sets the MAXIMUM potential. Even perfect soil cannot overcome commodity genetics.
              </p>
              <p className="mb-4">
                Produce nutrients have declined ~50% in 50 years. Why? USDA grades on appearance, farmers plant for appearance/yield, breeders select for yield/shipping. The result: dilution effect. A Washington Navel orange (heritage cultivar) on Carrizo rootstock can reach 12.1° Brix. A modern commodity variety bred for yield might max out at 9°. <em>The genetics cap the outcome.</em>
              </p>
              <div className="card p-4">
                <h4 className="font-medium mb-2">Heritage Intent Classification</h4>
                <ul className="space-y-2 text-stone-600">
                  <li>• <strong>True Heritage:</strong> Selected for flavor/nutrition over generations (Ruby Red Grapefruit)</li>
                  <li>• <strong>Heirloom Quality:</strong> Pre-1950 open-pollinated AND high internal quality (Washington Navel)</li>
                  <li>• <strong>Modern Nutrient:</strong> Modern breeding with nutrition focus (Cara Cara with lycopene)</li>
                  <li>• <strong>Commercial:</strong> Modern yield/shipping/appearance focus (Lane Late, Cosmic Crisp)</li>
                </ul>
                <p className="text-sm text-stone-500 mt-3 mb-0">
                  <strong>Rootstock matters:</strong> Carrizo +0.6 Brix, Rough Lemon -0.7 Brix. Rootstock is a genetic decision (H pillar), not a practice (A pillar).
                </p>
              </div>
            </div>

            {/* Agricultural */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="share-icon share-icon-agricultural w-16 h-16 text-3xl font-bold">
                  A
                </div>
                <div>
                  <h2 className="mb-0">Agricultural Practices</h2>
                  <p className="text-stone-600 mb-0">Compensatory with S</p>
                </div>
              </div>
              <p className="text-lg mb-4">
                <strong>S and A are compensatory:</strong> Better S = less A inputs needed. Lower S = more A inputs needed to compensate. Both can reach similar outcomes, but the BEST outcome is mineralized soil science (best S + optimized A).
              </p>
              <p className="mb-4">
                <strong>Critical nuance:</strong> Pesticides/herbicides are on a SEPARATE axis from nutrition. They do NOT reduce Brix, minerals, or vitamins. Bruce Ames research (UC Berkeley) proved 99.99% of dietary pesticides are natural—produced by plants themselves at FAR higher concentrations than synthetic residue levels. The choice to use or not use them is about consumer preference, environmental concerns, or marketing—NOT about the E (Enrich) pillar outcome.
              </p>
              <div className="card p-4">
                <h4 className="font-medium mb-2">Key Distinctions</h4>
                <ul className="space-y-2 text-stone-600">
                  <li>• <strong>Conventional:</strong> Annual fertility approach, higher A inputs</li>
                  <li>• <strong>Organic:</strong> Soil banking approach, lower A inputs (but often lacks mineralization)</li>
                  <li>• <strong>IPM:</strong> Integrated pest management—pragmatic, results-focused mindset</li>
                  <li>• <strong>Alternative Ag:</strong> Mineralized soil science = best S + optimized A = peak nutrition</li>
                </ul>
                <p className="text-sm text-stone-500 mt-3 mb-0">
                  <strong>For livestock:</strong> Grass-fed vs grain-finished is CRITICAL. Omega fatty acids accumulate in tissue—3:1 ratio (grass) vs 20:1 (feedlot) is measurable, significant health difference.
                </p>
              </div>
            </div>

            {/* Ripen */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="share-icon share-icon-ripen w-16 h-16 text-3xl font-bold">
                  R
                </div>
                <div>
                  <h2 className="mb-0">Ripen</h2>
                  <p className="text-stone-600 mb-0">Express or waste the S+H+A potential</p>
                </div>
              </div>
              <p className="text-lg mb-4">
                <strong>Timing determines whether you express or waste</strong> the quality potential built by S, H, and A. For non-climacteric produce (citrus, berries, cherries), <em>what you pick is what you get</em>—they MUST ripen on the plant. Quality is fixed at harvest.
              </p>
              <p className="mb-4">
                Climacteric produce (apples, peaches, bananas) CAN ripen post-harvest, but early harvest still sacrifices quality. The industry harvests when fruit meets USDA minimums—not when it reaches peak. For a Washington Navel on Carrizo at prime age, the genetic ceiling is 12.1° Brix at peak timing. Harvest 2 weeks early? Parabolic penalty drops it to ~11°. The soil, genetics, and practices were perfect—but timing wasted the potential.
              </p>
              <div className="card p-4">
                <h4 className="font-medium mb-2">How Timing Works</h4>
                <ul className="space-y-2 text-stone-600">
                  <li>• <strong>Growing Degree Days (GDD):</strong> Heat accumulation drives ripening (citrus base temp 55°F)</li>
                  <li>• <strong>Sugar Accumulation:</strong> Logistic/sigmoid curve—slow start, rapid middle, plateau at peak</li>
                  <li>• <strong>Acid Decay:</strong> Exponential decline—Brix rises, acidity falls, ratio improves</li>
                  <li>• <strong>Peak Window:</strong> Days from peak center determine penalty (parabolic: closer = better)</li>
                </ul>
                <p className="text-sm text-stone-500 mt-3 mb-0">
                  <strong>Fielder tracks:</strong> Bloom dates by region, GDD accumulation, harvest window prediction. We know when peak is—and verify actual harvest timing.
                </p>
              </div>
            </div>

            {/* Enrich */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="share-icon share-icon-enrich w-16 h-16 text-3xl font-bold">
                  E
                </div>
                <div>
                  <h2 className="mb-0">Enrich</h2>
                  <p className="text-stone-600 mb-0">Maximize good, minimize bad</p>
                </div>
              </div>
              <p className="text-lg mb-4">
                <strong>E has two buckets: Maximize the Good, Minimize the Bad.</strong> This is verification—the proof is in the outcomes. Lab results validate or contradict claims, and feed back to inform S+H+A decisions.
              </p>
              <p className="mb-4">
                E includes <strong>primary nutrition</strong> (Brix, minerals, vitamins—conventional can match organic here) and <strong>secondary nutrition</strong> (polyphenols, antioxidants, flavonoids—organic often higher due to stress response). For livestock, omega-6:omega-3 ratio is THE measurable proof of feeding regime quality. Grass-fed 3:1 vs feedlot 20:1 is a bigger health factor than any pesticide discussion—because fatty acids accumulate in tissue while pesticide residues don&apos;t.
              </p>
              <div className="card p-4">
                <h4 className="font-medium mb-2">What We Measure</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                  <div>
                    <p className="font-medium text-sm text-green-800 mb-2">MAXIMIZE THE GOOD</p>
                    <ul className="space-y-1 text-sm text-stone-600">
                      <li>• Brix / sugar quality</li>
                      <li>• Vitamins & minerals</li>
                      <li>• Omega-3 fatty acids</li>
                      <li>• Polyphenols & antioxidants</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-red-800 mb-2">MINIMIZE THE BAD</p>
                    <ul className="space-y-1 text-sm text-stone-600">
                      <li>• Excess omega-6</li>
                      <li>• High PUFA content</li>
                      <li>• Residues (context-dependent)</li>
                      <li>• Heavy metals</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-stone-500 mt-3 mb-0">
                  <strong>Lab verification:</strong> Edacious, Texas A&M. If claimed grass-fed has &gt;6:1 omega ratio, something&apos;s wrong with the claim. The data doesn&apos;t lie.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* The Interconnections */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-8">How the Pillars Connect</h2>
            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="text-xl mb-3">H Sets the Ceiling</h3>
                <p className="text-stone-600 mb-0">
                  Heritage (cultivar + rootstock) determines the MAXIMUM potential. Commodity genetics
                  cannot be overcome by perfect soil or practices. The genetic ceiling is fixed at planting.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl mb-3">S ↔ A Are Compensatory</h3>
                <p className="text-stone-600 mb-0">
                  Better soil = fewer inputs needed. Lower soil = more inputs to compensate. Both can reach
                  similar outcomes (good Brix), but ONLY mineralized soil science achieves the BEST outcome—peak
                  primary nutrition AND high secondary nutrition with minimal inputs.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl mb-3">R Determines Whether You Express or Waste</h3>
                <p className="text-stone-600 mb-0">
                  Timing is the difference between reaching genetic potential and leaving quality on the tree.
                  For non-climacteric produce, there&apos;s no second chance—harvest timing IS the quality decision.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl mb-3">E Validates and Feeds Back</h3>
                <p className="text-stone-600 mb-0">
                  Lab results (Brix, omega ratios, minerals) validate claims and inform future S+H+A decisions.
                  If the numbers don&apos;t match expectations, we know where to look in the chain. The data closes the loop.
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
