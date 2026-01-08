'use client';

import { useState } from 'react';
import Link from 'next/link';
import { matchClaimsToProfile, getProfilesByCategory, type ShareProfileCategory, type ShareProfile } from '@/lib/constants/share-profiles';

// Product type to category mapping
const PRODUCT_CATEGORIES: Record<string, ShareProfileCategory> = {
  beef: 'beef',
  pork: 'pork',
  chicken: 'poultry',
  eggs: 'eggs',
  produce: 'citrus', // Default to citrus for produce
};

// Claims organized by product type
const CLAIMS_BY_PRODUCT: Record<string, string[]> = {
  beef: [
    'Grass-fed',
    'Grass-finished / 100% Grass-fed',
    'Pasture-raised',
    'No feedlot / No CAFO',
    'Organic',
    'No antibiotics',
    'No hormones',
    'Natural',
    'Wagyu / Prime / Choice',
  ],
  pork: [
    'Pasture-raised',
    'Heritage breed',
    'Organic',
    'No antibiotics',
    'No hormones',
    'Natural',
  ],
  chicken: [
    'Pasture-raised',
    'Free-range',
    'Organic',
    'No antibiotics',
    'No hormones',
    'Natural',
  ],
  eggs: [
    'Pasture-raised',
    'Free-range',
    'Cage-free',
    'Organic',
    'Vegetarian-fed',
  ],
  produce: [
    'Organic',
    'Regenerative',
    'IPM (Integrated Pest Management)',
    'Local',
    'Heritage / Heirloom',
  ],
};

// Omega ratio visual component
function OmegaRatioScale({ ratio, range }: { ratio?: number; range?: [number, number] }) {
  if (!ratio && !range) return null;

  const midpoint = ratio || (range ? (range[0] + range[1]) / 2 : 0);

  // Scale from 0-30 for visualization
  const position = Math.min(100, (midpoint / 30) * 100);

  // Color based on quality
  let color = '#DC2626'; // red
  if (midpoint <= 3) color = '#16A34A'; // green
  else if (midpoint <= 6) color = '#CA8A04'; // yellow
  else if (midpoint <= 12) color = '#EA580C'; // orange

  return (
    <div className="mt-4">
      <div className="flex items-center justify-between text-sm mb-2">
        <span className="text-stone-600">Omega-6:3 Ratio</span>
        <span className="font-bold" style={{ color }}>
          {range ? `${range[0]}-${range[1]}:1` : `${ratio}:1`}
        </span>
      </div>
      <div className="relative h-3 bg-gradient-to-r from-green-500 via-yellow-500 via-orange-500 to-red-600 rounded-full">
        <div
          className="absolute top-1/2 -translate-y-1/2 w-1 h-6 bg-stone-900 rounded"
          style={{ left: `${position}%` }}
        />
      </div>
      <div className="flex justify-between text-xs text-stone-500 mt-1">
        <span>0 (Best)</span>
        <span>30+ (Worst)</span>
      </div>
    </div>
  );
}

export default function ClaimDecoderToolPage() {
  const [selectedProduct, setSelectedProduct] = useState<string>('');
  const [selectedClaims, setSelectedClaims] = useState<string[]>([]);
  const [result, setResult] = useState<ShareProfile | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleProductSelect = (product: string) => {
    setSelectedProduct(product);
    setSelectedClaims([]);
    setResult(null);
    setShowResult(false);
  };

  const handleClaimToggle = (claim: string) => {
    setSelectedClaims(prev =>
      prev.includes(claim)
        ? prev.filter(c => c !== claim)
        : [...prev, claim]
    );
  };

  const handleDecode = () => {
    if (!selectedProduct) return;

    const category = PRODUCT_CATEGORIES[selectedProduct];
    const profile = matchClaimsToProfile(category, selectedClaims);

    setResult(profile || null);
    setShowResult(true);
  };

  const handleReset = () => {
    setSelectedProduct('');
    setSelectedClaims([]);
    setResult(null);
    setShowResult(false);
  };

  // Get confidence level text
  const getConfidenceText = (tier: string) => {
    switch (tier) {
      case 'artisan': return 'Very High';
      case 'premium': return 'High';
      case 'standard': return 'Medium';
      case 'commodity': return 'Low';
      default: return 'Unknown';
    }
  };

  // Get matched vs missing claims
  const getClaimAnalysis = () => {
    if (!result) return { matched: [], missing: [] };

    const normalizedSelected = selectedClaims.map(c => c.toLowerCase());

    const matched = result.requiredClaims.filter(req =>
      normalizedSelected.some(c => c.includes(req.toLowerCase()))
    );

    const missing = result.requiredClaims.filter(req =>
      !normalizedSelected.some(c => c.includes(req.toLowerCase()))
    );

    return { matched, missing };
  };

  const availableClaims = selectedProduct ? CLAIMS_BY_PRODUCT[selectedProduct] || [] : [];
  const { matched, missing } = result ? getClaimAnalysis() : { matched: [], missing: [] };

  return (
    <>
      {/* Hero */}
      <section className="section section-parchment texture-paper">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm uppercase tracking-widest mb-4" style={{ color: 'var(--color-accent)' }}>
              Interactive Tool
            </p>
            <h1 className="mb-6">
              Claim Decoder
            </h1>
            <p className="lead">
              Tell us what the label says, we&apos;ll tell you what it means
            </p>
          </div>
        </div>
      </section>

      {/* Tool Section */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">

            {/* Step 1: Product Type */}
            <div className="card p-8 mb-8">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-stone-200 rounded-full text-sm font-medium mb-3">
                  STEP 1
                </span>
                <h2 className="text-2xl font-bold mb-2">Select Product Type</h2>
                <p className="text-stone-600">What kind of product are you evaluating?</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {Object.keys(CLAIMS_BY_PRODUCT).map((product) => (
                  <button
                    key={product}
                    onClick={() => handleProductSelect(product)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      selectedProduct === product
                        ? 'border-[var(--color-accent)] bg-amber-50'
                        : 'border-stone-200 hover:border-stone-300'
                    }`}
                  >
                    <div className="text-3xl mb-2">
                      {product === 'beef' && '🥩'}
                      {product === 'pork' && '🥓'}
                      {product === 'chicken' && '🍗'}
                      {product === 'eggs' && '🥚'}
                      {product === 'produce' && '🍊'}
                    </div>
                    <div className="font-medium capitalize">{product}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Select Claims */}
            {selectedProduct && (
              <div className="card p-8 mb-8 animate-slide-up">
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-stone-200 rounded-full text-sm font-medium mb-3">
                    STEP 2
                  </span>
                  <h2 className="text-2xl font-bold mb-2">What Does the Label Say?</h2>
                  <p className="text-stone-600">Check all claims that appear on the product</p>
                </div>

                <div className="grid md:grid-cols-2 gap-3">
                  {availableClaims.map((claim) => (
                    <label
                      key={claim}
                      className="flex items-start gap-3 p-4 rounded-lg border border-stone-200 hover:bg-stone-50 cursor-pointer transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={selectedClaims.includes(claim)}
                        onChange={() => handleClaimToggle(claim)}
                        className="mt-1 w-5 h-5 rounded border-stone-300"
                      />
                      <span className="font-medium">{claim}</span>
                    </label>
                  ))}
                </div>

                <div className="mt-6 flex gap-4">
                  <button
                    onClick={handleDecode}
                    disabled={selectedClaims.length === 0}
                    className="btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Decode Claims
                  </button>
                  <button
                    onClick={handleReset}
                    className="btn"
                    style={{ backgroundColor: 'transparent', border: '2px solid var(--color-stone)' }}
                  >
                    Start Over
                  </button>
                </div>
              </div>
            )}

            {/* Results */}
            {showResult && result && (
              <div className="card p-8 animate-slide-up" style={{ borderTop: '4px solid var(--color-accent)' }}>
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-amber-100 rounded-full text-sm font-medium mb-3">
                    DECODED
                  </span>
                  <h2 className="text-3xl font-bold mb-2">{result.name}</h2>
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-sm uppercase tracking-wide text-stone-500">Profile Code:</span>
                    <span className="font-mono font-bold text-lg">{result.code}</span>
                    <span className="text-stone-300">•</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      result.qualityTier === 'artisan' ? 'bg-purple-100 text-purple-800' :
                      result.qualityTier === 'premium' ? 'bg-green-100 text-green-800' :
                      result.qualityTier === 'standard' ? 'bg-blue-100 text-blue-800' :
                      'bg-stone-100 text-stone-800'
                    }`}>
                      {result.qualityTier.charAt(0).toUpperCase() + result.qualityTier.slice(1)}
                    </span>
                  </div>
                </div>

                {/* Omega Ratio Visualization (for animal products) */}
                {result.estimatedOmegaRatioRange && (
                  <OmegaRatioScale
                    range={result.estimatedOmegaRatioRange}
                    ratio={result.estimatedOmegaRatioMidpoint}
                  />
                )}

                {/* Brix Range (for produce) */}
                {result.estimatedBrixRange && (
                  <div className="mt-4 p-4 bg-amber-50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Expected Brix Range:</span>
                      <span className="font-bold text-lg">{result.estimatedBrixRange[0]}-{result.estimatedBrixRange[1]}°</span>
                    </div>
                  </div>
                )}

                {/* Confidence Level */}
                <div className="mt-6 p-4 bg-stone-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Confidence Level:</span>
                    <span className="font-bold">{getConfidenceText(result.qualityTier)}</span>
                  </div>
                  <p className="text-sm text-stone-600">
                    Based on {selectedClaims.length} claim{selectedClaims.length !== 1 ? 's' : ''} analyzed
                  </p>
                </div>

                {/* Claim Analysis */}
                <div className="mt-6 grid md:grid-cols-2 gap-6">
                  {matched.length > 0 && (
                    <div>
                      <h3 className="font-bold mb-3 text-green-800">✓ Claims Matched</h3>
                      <ul className="space-y-2">
                        {matched.map((claim) => (
                          <li key={claim} className="flex items-start gap-2 text-sm">
                            <span className="text-green-600 mt-0.5">✓</span>
                            <span>{claim}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {missing.length > 0 && (
                    <div>
                      <h3 className="font-bold mb-3 text-orange-800">⚠ Expected But Missing</h3>
                      <ul className="space-y-2">
                        {missing.map((claim) => (
                          <li key={claim} className="flex items-start gap-2 text-sm">
                            <span className="text-orange-600 mt-0.5">⚠</span>
                            <span>{claim}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Red Flags */}
                {result.redFlags && result.redFlags.length > 0 && (
                  <div className="mt-6 p-4 bg-red-50 border-l-4 border-red-500 rounded">
                    <h3 className="font-bold mb-3 text-red-800">🚩 Red Flags</h3>
                    <ul className="space-y-2">
                      {result.redFlags.map((flag, idx) => (
                        <li key={idx} className="text-sm text-red-900">{flag}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* What It Actually Means */}
                <div className="mt-6 p-6 bg-stone-100 rounded-lg">
                  <h3 className="font-bold mb-4 text-xl">What It Actually Means</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm uppercase tracking-wide text-stone-500 mb-2">S - Soil</h4>
                      <p className="text-stone-700">{result.soilPillarSummary}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm uppercase tracking-wide text-stone-500 mb-2">H - Heritage</h4>
                      <p className="text-stone-700">{result.heritagePillarSummary}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm uppercase tracking-wide text-stone-500 mb-2">A - Agricultural</h4>
                      <p className="text-stone-700">{result.agriculturalPillarSummary}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm uppercase tracking-wide text-stone-500 mb-2">R - Ripen</h4>
                      <p className="text-stone-700">{result.ripenPillarSummary}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm uppercase tracking-wide text-stone-500 mb-2">E - Enrich</h4>
                      <p className="text-stone-700">{result.enrichPillarSummary}</p>
                    </div>
                  </div>
                </div>

                {/* Notes */}
                {result.notes && (
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <h3 className="font-bold mb-2">Additional Notes</h3>
                    <p className="text-sm text-stone-700">{result.notes}</p>
                  </div>
                )}

                {/* Actions */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/learn/share-framework"
                    className="btn btn-primary"
                  >
                    Learn About S.H.A.R.E.
                  </Link>
                  <Link
                    href="/learn/claim-decoder"
                    className="btn"
                    style={{ backgroundColor: 'transparent', border: '2px solid var(--color-stone)' }}
                  >
                    See All Claim Grids
                  </Link>
                </div>
              </div>
            )}

            {/* No Result Message */}
            {showResult && !result && (
              <div className="card p-8 text-center">
                <div className="text-6xl mb-4">🤔</div>
                <h3 className="text-2xl font-bold mb-3">No Profile Match</h3>
                <p className="text-stone-600 mb-6">
                  We couldn&apos;t find a matching profile for these claims. This might mean:
                </p>
                <ul className="text-left max-w-md mx-auto space-y-2 mb-6">
                  <li>• The combination is unusual or contradictory</li>
                  <li>• We need more claims to make a determination</li>
                  <li>• The product doesn&apos;t fit standard categories</li>
                </ul>
                <button onClick={handleReset} className="btn btn-primary">
                  Try Again
                </button>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-forest">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Stop Guessing. Start Verifying.</h2>
            <p className="text-lg text-white/90 mb-8">
              The S.H.A.R.E. framework cuts through label confusion. Fielder applies it to real products
              so you can see what claims actually mean for quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/fielder" className="btn btn-primary">
                Explore Fielder
              </Link>
              <Link href="/learn" className="btn btn-outline border-white text-white hover:bg-white/10">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
