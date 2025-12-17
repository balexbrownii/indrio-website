import Link from 'next/link';

export const metadata = {
  title: 'Methodology | Fielder | Indrio Fields',
  description: 'The SHARE Framework: how we predict and verify internal food quality across time and geography.',
};

export default function MethodologyPage() {
  return (
    <>
      {/* Hero */}
      <section className="section section-parchment texture-paper">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm uppercase tracking-widest mb-4" style={{ color: 'var(--color-accent)' }}>
              The SHARE Framework
            </p>
            <h1 className="mb-6">
              Our Methodology
            </h1>
            <p className="lead">
              How we predict and verify internal food quality (flavor, nutrition) across
              time and geography. Built on soil science, validated by measurement.
            </p>
          </div>
        </div>
      </section>

      {/* SHARE Framework Overview */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-8">The SHARE Framework</h2>
            <p className="text-lg text-stone-600 mb-8">
              Built on soil science theory from Alternative Agriculture (Albrecht, Kempf, Kittredge, Chaboussou).
              Fielder adds the missing pieces: Heritage genetics and Ripening timing.
            </p>

            <div className="grid md:grid-cols-5 gap-6 mb-12">
              <div className="card p-6 text-center">
                <div className="text-3xl mb-2" style={{ color: 'var(--color-forest)' }}>S</div>
                <h3 className="text-lg mb-2">Soil</h3>
                <p className="text-sm text-stone-600">Mineralized, balanced foundation</p>
              </div>

              <div className="card p-6 text-center">
                <div className="text-3xl mb-2" style={{ color: 'var(--color-forest)' }}>H</div>
                <h3 className="text-lg mb-2">Heritage</h3>
                <p className="text-sm text-stone-600">Genetics set maximum potential</p>
              </div>

              <div className="card p-6 text-center">
                <div className="text-3xl mb-2" style={{ color: 'var(--color-forest)' }}>A</div>
                <h3 className="text-lg mb-2">Agricultural</h3>
                <p className="text-sm text-stone-600">Practices express the potential</p>
              </div>

              <div className="card p-6 text-center">
                <div className="text-3xl mb-2" style={{ color: 'var(--color-forest)' }}>R</div>
                <h3 className="text-lg mb-2">Ripen</h3>
                <p className="text-sm text-stone-600">Peak harvest window timing</p>
              </div>

              <div className="card p-6 text-center">
                <div className="text-3xl mb-2" style={{ color: 'var(--color-forest)' }}>E</div>
                <h3 className="text-lg mb-2">Enrich</h3>
                <p className="text-sm text-stone-600">Measured outcome verification</p>
              </div>
            </div>

            <div className="card-parchment card p-6">
              <h3 className="text-xl mb-4">The Fielder Thesis (Unique in the World)</h3>
              <div className="text-stone-600 space-y-3">
                <p className="mb-0">
                  <strong>Best S</strong> (Alternative Ag mineralized soil science)<br />
                  + <strong>Best H</strong> (Heritage cultivars - highest genetic potential)<br />
                  + <strong>Minimal A</strong> (best S + best H need fewer inputs)<br />
                  + <strong>Optimal R</strong> (proper harvest timing)<br />
                  = <strong>Highest E</strong> in BOTH primary AND secondary nutrition
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar Interconnectivity */}
      <section className="section section-cream">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-8">How the Pillars Interact</h2>

            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="text-xl mb-3">H (Heritage) = Genetic Ceiling</h3>
                <p className="text-stone-600 mb-0">
                  Cultivar + rootstock sets MAXIMUM potential. A commodity cultivar can&apos;t be overcome
                  even with perfect soil and practices. <strong>Example:</strong> Washington Navel on Carrizo
                  rootstock (base 11.5 + 0.6 modifier) = 12.1 Brix genetic ceiling.
                </p>
              </div>

              <div className="card p-6">
                <h3 className="text-xl mb-3">S ↔ A = Compensatory Relationship</h3>
                <p className="text-stone-600 mb-3">
                  Soil (S) and Agricultural practices (A) can compensate for each other:
                </p>
                <ul className="text-sm text-stone-600 space-y-2">
                  <li><strong>Annual precise fertility:</strong> Average S + High A inputs = Good Brix</li>
                  <li><strong>Organic soil banking:</strong> Good S + Lower A inputs = Good Brix</li>
                  <li><strong>Mineralized soil science:</strong> Best S + Optimized A = BEST Brix</li>
                </ul>
                <p className="text-stone-600 mt-3 mb-0">
                  Better S = less A inputs needed. Only <strong>mineralized soil</strong> (S pillar) actually
                  impacts nutrition maximally.
                </p>
              </div>

              <div className="card p-6">
                <h3 className="text-xl mb-3">R (Ripen) = Express or Waste</h3>
                <p className="text-stone-600 mb-0">
                  Timing determines whether you express or waste the S+H+A potential. Peak harvest window
                  for citrus: ±2 weeks from optimal ripeness. Early harvest sacrifices quality even for
                  climacteric fruits (apples, peaches). Non-climacteric (citrus, berries) MUST ripen on plant.
                </p>
              </div>

              <div className="card p-6">
                <h3 className="text-xl mb-3">E (Enrich) = Proof</h3>
                <p className="text-stone-600 mb-3">
                  Actual measurement validates the framework. Two buckets:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-sm mb-2">Maximize the Good</h4>
                    <ul className="text-sm text-stone-600 space-y-1">
                      <li>• Brix / sugar quality</li>
                      <li>• Vitamins &amp; minerals</li>
                      <li>• Omega-3 fatty acids</li>
                      <li>• Polyphenols &amp; antioxidants</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-2">Minimize the Bad</h4>
                    <ul className="text-sm text-stone-600 space-y-1">
                      <li>• Excess omega-6</li>
                      <li>• High PUFA content</li>
                      <li>• Pesticide residues (separate axis)</li>
                      <li>• Heavy metals</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intellectually Honest Positions */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-4">Intellectually Honest Positions</h2>
            <p className="text-lg mb-8 text-stone-600">
              We have to tell the truth—even when it&apos;s uncomfortable for both sides.
            </p>

            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="text-xl mb-3">Synthetic Pesticides</h3>
                <p className="text-stone-600 mb-3">
                  <strong>The fear-based claim:</strong> &ldquo;Toxic chemicals poisoning our food&rdquo;
                </p>
                <p className="text-stone-600 mb-3">
                  <strong>The scientific reality:</strong> There are MORE natural pesticides INSIDE produce
                  than synthetic pesticides OUTSIDE. Bruce Ames (UC Berkeley): 99.99% of dietary pesticides
                  are natural—produced by plants themselves as defense compounds. Plants produce natural
                  pesticides at FAR higher concentrations than synthetic residue levels.
                </p>
                <p className="text-stone-600 mb-0">
                  <strong>Fielder&apos;s position:</strong> Not a quality factor—separate axis from nutrition.
                  Pesticides do NOT reduce nutritional quality (Brix, minerals, vitamins).
                </p>
              </div>

              <div className="card p-6">
                <h3 className="text-xl mb-3">GMOs</h3>
                <p className="text-stone-600 mb-3">
                  <strong>The fear-based claim:</strong> &ldquo;Frankenfoods destroying our health&rdquo;
                </p>
                <p className="text-stone-600 mb-3">
                  <strong>The scientific reality:</strong> After decades of research, NOT proven harmful
                  to human health.
                </p>
                <p className="text-stone-600 mb-0">
                  <strong>Fielder&apos;s position:</strong> Avoid under PRECAUTIONARY PRINCIPLE, not proven
                  harm. GMO feed acceptable for livestock (doesn&apos;t transfer to meat). What DOES transfer
                  and accumulate: fatty acid profile (omega ratios).
                </p>
              </div>

              <div className="card p-6">
                <h3 className="text-xl mb-3">Organic vs Conventional</h3>
                <p className="text-stone-600 mb-3">
                  <strong>The misconception:</strong> Organic = healthier because fewer toxic pesticides
                </p>
                <p className="text-stone-600 mb-3">
                  <strong>The reality:</strong> DIFFERENT MODELS, not better/worse. Organic = long-term
                  soil banking approach. Conventional = annual fertility approach. <strong>Neither inherently
                  produces higher nutrition</strong>—ONLY mineralization does that.
                </p>
                <p className="text-stone-600 mb-0">
                  Organic&apos;s benefits (when they exist) are from SECONDARY nutrition (polyphenols from stress
                  response), not pesticide absence. A conventional apple with 14 Brix is MORE nutritious than
                  an organic apple with 10 Brix.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Claim Inference Model */}
      <section className="section section-cream">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-4">Claim Inference Model (Beef)</h2>
            <p className="text-lg mb-8 text-stone-600">
              How we decode what brands say vs don&apos;t say. The gaps in claims are often
              more telling than the claims themselves.
            </p>

            <div className="card p-6 mb-8">
              <h3 className="text-xl mb-4">SHARE Profiles for Beef</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-stone-300">
                      <th className="text-left py-3 px-4">Profile</th>
                      <th className="text-left py-3 px-4">Required Claims</th>
                      <th className="text-left py-3 px-4">CAFO?</th>
                      <th className="text-left py-3 px-4">Omega</th>
                      <th className="text-left py-3 px-4">Tier</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-stone-200">
                      <td className="py-3 px-4 font-medium">A: True Grass</td>
                      <td className="py-3 px-4">&ldquo;100% grass-fed&rdquo; OR &ldquo;grass-finished&rdquo;</td>
                      <td className="py-3 px-4">No</td>
                      <td className="py-3 px-4">2-3:1</td>
                      <td className="py-3 px-4" style={{ color: 'var(--color-forest)' }}>Premium</td>
                    </tr>
                    <tr className="border-b border-stone-200">
                      <td className="py-3 px-4 font-medium">B: True Pasture</td>
                      <td className="py-3 px-4">&ldquo;Pasture-raised&rdquo; + &ldquo;no feedlot/CAFO&rdquo;</td>
                      <td className="py-3 px-4">No</td>
                      <td className="py-3 px-4">4-6:1</td>
                      <td className="py-3 px-4" style={{ color: 'var(--color-forest)' }}>Premium</td>
                    </tr>
                    <tr className="border-b border-stone-200">
                      <td className="py-3 px-4 font-medium">C: Marketing Grass</td>
                      <td className="py-3 px-4">&ldquo;Grass-fed&rdquo; only (no finishing claim)</td>
                      <td className="py-3 px-4">Yes</td>
                      <td className="py-3 px-4">8-15:1</td>
                      <td className="py-3 px-4">Standard</td>
                    </tr>
                    <tr className="border-b border-stone-200">
                      <td className="py-3 px-4 font-medium">D: Marketing Pasture</td>
                      <td className="py-3 px-4">&ldquo;Pasture-raised&rdquo; only (no CAFO exclusion)</td>
                      <td className="py-3 px-4">Yes</td>
                      <td className="py-3 px-4">12-18:1</td>
                      <td className="py-3 px-4">Standard</td>
                    </tr>
                    <tr className="border-b border-stone-200 bg-stone-100">
                      <td className="py-3 px-4 font-medium text-stone-500">E: Commodity</td>
                      <td className="py-3 px-4 text-stone-500">Generic or no process claims</td>
                      <td className="py-3 px-4 text-stone-500">Yes</td>
                      <td className="py-3 px-4 text-stone-500">15-20:1</td>
                      <td className="py-3 px-4 text-stone-500">Commodity</td>
                    </tr>
                    <tr className="border-b border-stone-200 bg-stone-100">
                      <td className="py-3 px-4 font-medium text-stone-500">E2: &ldquo;Natural&rdquo;</td>
                      <td className="py-3 px-4 text-stone-500">Commodity + one marketing claim</td>
                      <td className="py-3 px-4 text-stone-500">Yes</td>
                      <td className="py-3 px-4 text-stone-500">15-20:1</td>
                      <td className="py-3 px-4 text-stone-500">Commodity</td>
                    </tr>
                    <tr className="bg-red-50">
                      <td className="py-3 px-4 font-medium text-red-600">F: Premium CAFO</td>
                      <td className="py-3 px-4 text-red-600">Breed/grade only (Wagyu, Prime), no process</td>
                      <td className="py-3 px-4 text-red-600">Yes</td>
                      <td className="py-3 px-4 text-red-600">20-26:1</td>
                      <td className="py-3 px-4 text-red-600">WORST</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="card-parchment card p-6">
              <h3 className="text-xl mb-3">The Silence Signals</h3>
              <p className="text-stone-600 mb-3">
                <strong>If they DON&apos;T say &ldquo;grass-finished&rdquo; or &ldquo;100%&rdquo;:</strong> Assume grain-finished in CAFO.
              </p>
              <p className="text-stone-600 mb-3">
                <strong>If they DON&apos;T say &ldquo;no feedlot&rdquo; / &ldquo;no CAFO&rdquo;:</strong> Assume CAFO finishing.
              </p>
              <p className="text-stone-600 mb-0">
                <strong>If they don&apos;t say ANY process claim at all:</strong> Extended CAFO (hiding it intentionally).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-forest">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Change the World</h2>
            <p className="text-lg text-white/90 mb-8">
              The problem we hear constantly: &ldquo;I&apos;m just not sure what to eat anymore.&rdquo;
              Fielder gives clear, science-backed answers about food quality instead of label-reading theater.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/fielder" className="btn btn-primary">
                Back to Fielder
              </Link>
              <Link href="/learn" className="btn btn-outline border-white text-white hover:bg-white/10">
                Learn S.H.A.R.E.
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
