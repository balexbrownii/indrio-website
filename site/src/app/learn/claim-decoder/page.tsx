import Link from 'next/link';

export const metadata = {
  title: 'Claim Decoder | S.H.A.R.E. Grids | Indrio Fields',
  description: 'Decode food labels through the S.H.A.R.E. framework. See what claims actually tell you—and what they hide—about Soil, Heritage, Agricultural practices, Ripening, and Enrichment.',
};

// Grid data structure
interface ShareGridRow {
  perspective: string;
  soil: string;
  heritage: string;
  agricultural: string;
  ripen: string;
  enrich: string;
}

interface ShareGrid {
  claim: string;
  category: string;
  rows: ShareGridRow[];
}

const organicCitrusGrid: ShareGrid = {
  claim: 'Organic Citrus',
  category: 'Citrus',
  rows: [
    {
      perspective: 'USDA Definition',
      soil: 'Requires soil management, cover crops, crop rotation. No synthetic fertilizers. 3-year transition period.',
      heritage: 'No genetic modification allowed. Must use non-GMO seeds.',
      agricultural: 'Prohibits synthetic pesticides, herbicides, fertilizers. Allows organic-approved inputs.',
      ripen: 'Nothing. No harvest timing requirements.',
      enrich: 'Nothing. No nutrition outcome measurements.',
    },
    {
      perspective: 'Marketing Claims',
      soil: 'Implies healthier soil, "working with nature," carbon-building practices.',
      heritage: 'Often implies "traditional" or "heirloom" varieties. Sounds more natural.',
      agricultural: 'Implies "chemical-free," "natural," "pure." Suggests safer food.',
      ripen: 'No specific claims. Sometimes implies "picked fresh."',
      enrich: 'Often implies "more nutritious," "healthier," "better for you."',
    },
    {
      perspective: 'Fielder Assessment',
      soil: 'Prohibits synthetic fertilizers but says NOTHING about mineralization. Carbon building ≠ mineral balance. Many organic operations have low-mineral soil. Brix potential unknown.',
      heritage: 'Non-GMO is the ONLY genetic info we get. Says nothing about cultivar selection for flavor/nutrition. Most organic citrus uses same commodity varieties bred for yield/shipping as conventional.',
      agricultural: 'Organic is an A-pillar label. It tells us WHAT inputs are prohibited, not outcomes achieved. Organic pesticides applied in large quantities. Bruce Ames: 99.99% of dietary pesticides are natural plant-produced.',
      ripen: 'COMPLETE SILENCE. Organic citrus can be harvested at USDA minimums (8° Brix) like conventional. Non-climacteric = what you pick is what you get. This pillar is unaddressed.',
      enrich: 'No guarantee of higher Brix, minerals, or vitamins. Conventional with good soil can match organic primary nutrition. May have higher secondary metabolites from stress response—but not required or verified.',
    },
  ],
};

const grassFedBeefGrid: ShareGrid = {
  claim: 'Grass-Fed Beef',
  category: 'Beef',
  rows: [
    {
      perspective: 'USDA Definition',
      soil: 'Nothing. Pasture health not addressed.',
      heritage: 'Nothing. No breed requirements.',
      agricultural: 'USDA withdrew standard in 2016. No federal enforcement. Various third-party certifications exist (AGA, PCO) with different rules.',
      ripen: 'Nothing. No timing or finishing requirements.',
      enrich: 'Nothing. USDA grades beef on marbling (fat distribution) and muscle development—appearance, not nutrition.',
    },
    {
      perspective: 'Marketing Claims',
      soil: 'Sometimes implies "regenerative" or "sustainable" grazing practices.',
      heritage: 'Sometimes implies "heritage breeds" or "traditional cattle."',
      agricultural: 'Implies "no hormones," "no antibiotics," "pasture-raised," "humane."',
      ripen: 'Sometimes implies "properly aged" or "mature."',
      enrich: 'Implies "healthier," "better omega ratios," "leaner," "more nutritious."',
    },
    {
      perspective: 'Fielder Assessment',
      soil: 'COMPLETE SILENCE. Grass-fed says nothing about soil quality. Overgrazed degraded pasture vs. well-managed rotational grazing both qualify. Soil mineralization affects grass → affects beef minerals.',
      heritage: 'No genetic info. Most "grass-fed" uses same commodity breeds (Angus crosses) as feedlot. True heritage breeds (Highland, Devon, Dexter) are rare in commercial grass-fed.',
      agricultural: '"Grass-fed" ≠ grass-FINISHED. 90-day grain finish destroys omega ratios. Only "100% grass-fed" or "grass-finished" guarantees feed regime to slaughter. Many brands are grass-fed/grain-finished.',
      ripen: 'For beef, "ripening" = finishing duration. A 24-month grass-fed animal with 90-day grain finish has similar omega ratios to feedlot. Time ON GRASS at finish is what matters.',
      enrich: 'THE PROOF: True grass-finished 2-3:1 omega ratio. "Grass-fed" (grain-finished) 8-15:1. CAFO 15-20:1. Premium Wagyu 20-26:1 (WORST). Lab verification reveals truth—higher price ≠ healthier.',
    },
  ],
};

const pastureRaisedBeefGrid: ShareGrid = {
  claim: 'Pasture-Raised Beef',
  category: 'Beef',
  rows: [
    {
      perspective: 'USDA Definition',
      soil: 'Nothing specific to soil quality.',
      heritage: 'Nothing. No breed requirements.',
      agricultural: 'No federal definition. "Pasture-raised" means access to pasture, not time spent on pasture. Can still be CAFO with outdoor access.',
      ripen: 'Nothing. No finishing requirements.',
      enrich: 'Nothing. No nutrition standards.',
    },
    {
      perspective: 'Marketing Claims',
      soil: 'Implies animals on healthy pastureland.',
      heritage: 'Sometimes implies traditional ranching breeds.',
      agricultural: 'Implies animals live primarily outdoors on pasture. Suggests "natural" and "humane."',
      ripen: 'Implies natural growth cycle.',
      enrich: 'Implies healthier meat from "happy" animals.',
    },
    {
      perspective: 'Fielder Assessment',
      soil: 'SILENCE. Pasture quality varies enormously. Industrial operations can technically qualify with minimal outdoor access on degraded land.',
      heritage: 'No information. Breed selection ignored entirely.',
      agricultural: 'ACCESS ≠ TIME. Industrial operations can meet "pasture-raised" while animals spend 95% of life in confinement. Without "100% pasture-raised" specification, this label is nearly meaningless.',
      ripen: 'No information about finishing regime. Animals could be grain-finished for months.',
      enrich: 'Cannot predict omega ratios from this label. Could be 3:1 (true pasture) or 15:1 (pasture-raised but grain-finished). Lab testing required to verify claims.',
    },
  ],
};

const premiumWagyuGrid: ShareGrid = {
  claim: 'Premium Wagyu',
  category: 'Beef',
  rows: [
    {
      perspective: 'USDA Definition',
      soil: 'Nothing. Feedlot environment standard.',
      heritage: 'Wagyu genetics required for the label. Japanese cattle breeds known for marbling.',
      agricultural: 'Extended grain feeding (12+ months) is standard practice to achieve signature marbling.',
      ripen: 'Long feeding periods typical. Mature at 28-36 months.',
      enrich: 'Graded on marbling score (BMS). Higher marbling = higher grade = higher price.',
    },
    {
      perspective: 'Marketing Claims',
      soil: 'Rarely mentioned.',
      heritage: 'Emphasizes "purebred Japanese genetics," "rare bloodlines," "A5 grade."',
      agricultural: 'Emphasizes "pampered," "beer-fed," "massaged" (largely myths). Premium positioning.',
      ripen: 'Implies careful aging and preparation.',
      enrich: 'Implies "healthiest beef," "premium quality," "worth the price."',
    },
    {
      perspective: 'Fielder Assessment',
      soil: 'Feedlot operation. No pasture or soil health consideration.',
      heritage: 'Genuine heritage breed selection—but selected for FAT DISTRIBUTION, not nutrition. Genetics optimized for marbling, which correlates with WORSE omega ratios.',
      agricultural: '12+ months of grain feeding is the OPPOSITE of health-optimizing. Extended CAFO conditions. The practice that creates the signature taste also creates the worst omega profile.',
      ripen: 'Long grain-feeding duration is the defining practice. More months on grain = more marbling = worse omega ratios.',
      enrich: 'WORST OMEGA RATIOS IN BEEF: 20-26:1. Premium Wagyu is the most expensive AND least healthy beef by omega metrics. Price and health are INVERSELY correlated. The marbling you pay for is inflammatory fat.',
    },
  ],
};

const productOfUSABeefGrid: ShareGrid = {
  claim: '"Product of USA" Beef',
  category: 'Beef',
  rows: [
    {
      perspective: 'USDA Definition',
      soil: 'Nothing. Animal never has to touch US soil.',
      heritage: 'Nothing. Any breed from any country.',
      agricultural: 'Only requires processing (cutting, packaging) in the USA. Animal can be born, raised, and slaughtered abroad.',
      ripen: 'Nothing.',
      enrich: 'Nothing. No nutrition requirements.',
    },
    {
      perspective: 'Marketing Claims',
      soil: 'Implies American farmland.',
      heritage: 'Implies American ranching tradition.',
      agricultural: 'STRONGLY implies American-raised cattle supporting US ranchers.',
      ripen: 'No specific claims.',
      enrich: 'Implies quality associated with American beef.',
    },
    {
      perspective: 'Fielder Assessment',
      soil: 'REGULATORY LOOPHOLE. The animal may never have existed on American soil. Imported beef processed here qualifies.',
      heritage: 'No information. Could be any breed from any country with any genetics.',
      agricultural: 'American ranchers compete against this fiction daily. Imported beef from countries with lower standards, lower costs, and different practices wears an "American" label. This is label fraud legalized.',
      ripen: 'No information about feeding or finishing regimes.',
      enrich: 'Cannot assess. No S.H.A.R.E. pillar is addressed. This label tells you WHERE IT WAS PACKAGED—nothing about quality, nutrition, or actual origin.',
    },
  ],
};

const conventionalCitrusGrid: ShareGrid = {
  claim: 'Conventional Citrus',
  category: 'Citrus',
  rows: [
    {
      perspective: 'USDA Definition',
      soil: 'No requirements. Annual fertility approach standard.',
      heritage: 'No requirements. Any cultivar allowed.',
      agricultural: 'No restrictions on synthetic inputs. Must meet food safety standards for residue levels.',
      ripen: 'Minimum Brix requirements for shipping (typically 8°). Graded on appearance: color, size, blemishes.',
      enrich: 'Graded on external appearance. No internal quality measurement.',
    },
    {
      perspective: 'Marketing Claims',
      soil: 'Rarely discussed.',
      heritage: 'May mention variety name but emphasizes appearance.',
      agricultural: '"Carefully grown," "farm fresh." Avoids input discussion.',
      ripen: '"Fresh picked," "ready to eat."',
      enrich: '"Sweet," "juicy," "delicious."',
    },
    {
      perspective: 'Fielder Assessment',
      soil: 'Unknown. Could be depleted soil with heavy annual inputs OR well-managed conventional operation with good mineral balance. The label tells us nothing.',
      heritage: 'Usually commodity cultivars selected for yield, shipping durability, and appearance. Lane Late, modern navels bred for uniformity. Genetic ceiling often lower than heritage varieties.',
      agricultural: 'Synthetic inputs allowed. Bruce Ames research shows residue levels are nutritionally irrelevant—natural plant pesticides are 10,000x higher. A-pillar practices matter less than S and H.',
      ripen: 'Harvested at USDA minimums for shipping. 8° Brix grocery average. Non-climacteric fruit cannot improve after picking. Peak timing sacrificed for logistics.',
      enrich: 'The DILUTION EFFECT in action. Bigger, prettier fruit with less nutrition per bite. 50% nutrient decline in 50-70 years. Without Brix data, you are gambling every purchase.',
    },
  ],
};

const grids: ShareGrid[] = [
  organicCitrusGrid,
  conventionalCitrusGrid,
  grassFedBeefGrid,
  pastureRaisedBeefGrid,
  premiumWagyuGrid,
  productOfUSABeefGrid,
];

function ShareGridTable({ grid }: { grid: ShareGrid }) {
  const pillars = [
    { key: 'soil', label: 'S', full: 'Soil Health', color: '#8B4513' },
    { key: 'heritage', label: 'H', full: 'Heritage Cultivars', color: '#2E7D32' },
    { key: 'agricultural', label: 'A', full: 'Agricultural Practices', color: '#1565C0' },
    { key: 'ripen', label: 'R', full: 'Ripen', color: '#F57C00' },
    { key: 'enrich', label: 'E', full: 'Enrich', color: '#7B1FA2' },
  ];

  return (
    <div className="card overflow-hidden mb-12">
      <div className="p-6 border-b border-stone-200" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <span className="text-sm uppercase tracking-widest text-stone-500">{grid.category}</span>
            <h3 className="text-2xl font-bold mb-0">{grid.claim}</h3>
          </div>
          <div className="flex gap-2">
            {pillars.map((p) => (
              <div
                key={p.key}
                className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                style={{ backgroundColor: p.color }}
                title={p.full}
              >
                {p.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-stone-200" style={{ backgroundColor: 'var(--color-parchment)' }}>
              <th className="py-3 px-4 text-left font-semibold w-32">Perspective</th>
              {pillars.map((p) => (
                <th key={p.key} className="py-3 px-4 text-left font-semibold">
                  <span className="inline-block w-6 h-6 rounded-full text-white text-xs flex items-center justify-center mr-2" style={{ backgroundColor: p.color }}>
                    {p.label}
                  </span>
                  <span className="text-xs text-stone-500">{p.full}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {grid.rows.map((row, idx) => (
              <tr
                key={row.perspective}
                className={`border-b border-stone-100 ${idx === grid.rows.length - 1 ? 'bg-amber-50' : ''}`}
              >
                <td className="py-4 px-4 font-semibold align-top">
                  {row.perspective}
                  {idx === grid.rows.length - 1 && (
                    <span className="block text-xs font-normal mt-1" style={{ color: 'var(--color-accent)' }}>
                      (Our View)
                    </span>
                  )}
                </td>
                <td className="py-4 px-4 align-top">{row.soil}</td>
                <td className="py-4 px-4 align-top">{row.heritage}</td>
                <td className="py-4 px-4 align-top">{row.agricultural}</td>
                <td className="py-4 px-4 align-top">{row.ripen}</td>
                <td className="py-4 px-4 align-top">{row.enrich}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function ClaimDecoderPage() {
  const citrusGrids = grids.filter((g) => g.category === 'Citrus');
  const beefGrids = grids.filter((g) => g.category === 'Beef');

  return (
    <>
      {/* Hero */}
      <section className="section section-parchment texture-paper">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm uppercase tracking-widest mb-4" style={{ color: 'var(--color-accent)' }}>
              The Inference Model
            </p>
            <h1 className="mb-6">
              Claim Decoder
            </h1>
            <p className="lead">
              Food labels tell a story. We decode what they actually mean—and what they hide—by
              mapping every claim to the S.H.A.R.E. framework.
            </p>
          </div>
        </div>
      </section>

      {/* How to Read the Grids */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-8">How to Read These Grids</h2>

            <div className="card-parchment card p-6 mb-8">
              <p className="text-lg mb-4">
                Each grid shows <strong>one food claim</strong> mapped against the five S.H.A.R.E. pillars.
                Three perspectives reveal what that claim actually means:
              </p>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <span className="font-bold text-stone-700 w-40">USDA Definition</span>
                  <span>What the government regulation actually requires (often very little)</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-bold text-stone-700 w-40">Marketing Claims</span>
                  <span>What the label implies and how consumers typically interpret it</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-bold text-amber-700 w-40">Fielder Assessment</span>
                  <span>Our honest evaluation of what the claim actually tells you about each pillar</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="card p-6">
                <h3 className="text-lg font-medium mb-3" style={{ color: 'var(--color-forest)' }}>
                  What to Look For
                </h3>
                <ul className="space-y-2 text-stone-600">
                  <li>• <strong>"SILENCE"</strong> or <strong>"Nothing"</strong> = The label tells you nothing about this pillar</li>
                  <li>• Gaps between USDA definition and marketing claims = potential deception</li>
                  <li>• Which pillars a label actually addresses vs. ignores</li>
                </ul>
              </div>
              <div className="card p-6">
                <h3 className="text-lg font-medium mb-3" style={{ color: 'var(--color-forest)' }}>
                  The Pattern You&apos;ll See
                </h3>
                <ul className="space-y-2 text-stone-600">
                  <li>• Most labels only address <strong>A</strong> (Agricultural Practices)—and poorly</li>
                  <li>• <strong>R</strong> (Ripen) is almost always ignored</li>
                  <li>• <strong>E</strong> (Enrich) is measured by appearance, not nutrition</li>
                  <li>• <strong>S</strong> and <strong>H</strong> are rarely addressed at all</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Citrus Grids */}
      <section className="section section-cream">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-center mb-4">Citrus Claims Decoded</h2>
            <p className="text-center text-stone-600 mb-12">
              What do citrus labels actually tell you about quality?
            </p>

            {citrusGrids.map((grid) => (
              <ShareGridTable key={grid.claim} grid={grid} />
            ))}
          </div>
        </div>
      </section>

      {/* Beef Grids */}
      <section className="section">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-center mb-4">Beef Claims Decoded</h2>
            <p className="text-center text-stone-600 mb-12">
              The beef industry has more label confusion than any other category.
            </p>

            {beefGrids.map((grid) => (
              <ShareGridTable key={grid.claim} grid={grid} />
            ))}
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="section section-cream">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-8">What the Grids Reveal</h2>

            <div className="space-y-6">
              <div className="card p-6" style={{ borderLeft: '4px solid var(--color-accent)' }}>
                <h3 className="text-xl mb-3">Labels Address Process, Not Outcomes</h3>
                <p className="text-stone-600 mb-0">
                  USDA labels focus on <strong>what you can&apos;t do</strong> (organic: no synthetic inputs) rather than
                  <strong> what you achieve</strong> (high Brix, optimal omega ratios). Process ≠ outcome. You can
                  follow organic practices and still produce low-nutrition food.
                </p>
              </div>

              <div className="card p-6" style={{ borderLeft: '4px solid var(--color-accent)' }}>
                <h3 className="text-xl mb-3">Price and Health Are Often Inversely Correlated</h3>
                <p className="text-stone-600 mb-0">
                  Premium Wagyu commands the highest prices AND has the worst omega ratios. The marbling you pay
                  premium for is inflammatory fat from extended grain feeding. "Pasture-raised" products that are
                  grain-finished can have worse omega profiles than cheaper conventional options that happen to be
                  grass-finished.
                </p>
              </div>

              <div className="card p-6" style={{ borderLeft: '4px solid var(--color-accent)' }}>
                <h3 className="text-xl mb-3">The Silence Signals What&apos;s Hidden</h3>
                <p className="text-stone-600 mb-0">
                  When a label is silent on a pillar, assume the worst. "Organic" says nothing about harvest timing
                  (R) or nutrition outcomes (E). "Grass-fed" says nothing about whether the animal was grain-finished.
                  "Product of USA" says nothing about where the animal was raised. The gaps are where the deception lives.
                </p>
              </div>

              <div className="card p-6" style={{ borderLeft: '4px solid var(--color-accent)' }}>
                <h3 className="text-xl mb-3">Only Lab Verification Proves E-Pillar Claims</h3>
                <p className="text-stone-600 mb-0">
                  Marketing claims about nutrition ("healthier," "more nutritious") are unverifiable without lab testing.
                  Omega ratios, Brix levels, and mineral content are MEASURABLE. That&apos;s why Fielder exists—to turn
                  marketing claims into verified data. If a producer won&apos;t share their numbers, ask why.
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
            <h2 className="mb-6">Stop Guessing. Start Verifying.</h2>
            <p className="text-lg text-white/90 mb-8">
              The S.H.A.R.E. framework cuts through label confusion. Fielder applies it to real products
              so you can see what claims actually mean for quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/fielder" className="btn btn-primary">
                Explore Fielder
              </Link>
              <Link href="/learn/share-framework" className="btn btn-outline border-white text-white hover:bg-white/10">
                Learn S.H.A.R.E. Framework
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
