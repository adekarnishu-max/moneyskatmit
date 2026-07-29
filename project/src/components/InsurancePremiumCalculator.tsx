import { useState } from 'react';
import { Calculator, Shield, HeartPulse, Car, Home, Baby, TrendingUp, Info, ArrowRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

type InsuranceType = 'health' | 'life' | 'motor' | 'home' | 'child';

const insuranceConfig: Record<InsuranceType, {
  label: string;
  icon: typeof Shield;
  baseRate: number;
  minSum: number;
  maxSum: number;
  unit: string;
  factors: string[];
}> = {
  health: {
    label: 'Health Insurance',
    icon: HeartPulse,
    baseRate: 0.0045,
    minSum: 300000,
    maxSum: 10000000,
    unit: 'Sum Insured',
    factors: ['Age', 'Family size', 'Pre-existing conditions', 'Add-on covers'],
  },
  life: {
    label: 'Life Insurance (Term)',
    icon: Shield,
    baseRate: 0.0028,
    minSum: 1000000,
    maxSum: 20000000,
    unit: 'Sum Assured',
    factors: ['Age', 'Smoking habits', 'Policy term', 'Occupation risk'],
  },
  motor: {
    label: 'Motor Insurance',
    icon: Car,
    baseRate: 0.035,
    minSum: 50000,
    maxSum: 5000000,
    unit: 'IDV (Vehicle Value)',
    factors: ['Vehicle age', 'Make & model', 'No-claim bonus', 'Add-on covers'],
  },
  home: {
    label: 'Home Insurance',
    icon: Home,
    baseRate: 0.0008,
    minSum: 500000,
    maxSum: 10000000,
    unit: 'Property Value',
    factors: ['Construction type', 'Location', 'Contents value', 'Add-on covers'],
  },
  child: {
    label: 'Child Insurance',
    icon: Baby,
    baseRate: 0.0035,
    minSum: 500000,
    maxSum: 10000000,
    unit: 'Sum Assured',
    factors: ["Child's age", 'Policy term', 'Maturity benefit', 'Premium waiver'],
  },
};

const ageMultipliers: Record<number, number> = {
  18: 0.6, 25: 0.75, 30: 0.85, 35: 1.0, 40: 1.25, 45: 1.55, 50: 1.9, 55: 2.3, 60: 2.8,
};

function getAgeMultiplier(age: number): number {
  const keys = Object.keys(ageMultipliers).map(Number).sort((a, b) => a - b);
  let closest = keys[0];
  for (const k of keys) {
    if (Math.abs(k - age) < Math.abs(closest - age)) closest = k;
  }
  return ageMultipliers[closest];
}

function formatINR(amount: number): string {
  if (amount >= 10000000) return `₹${(amount / 10000000).toFixed(2)} Cr`;
  if (amount >= 100000) return `₹${(amount / 100000).toFixed(2)} L`;
  return `₹${amount.toLocaleString('en-IN')}`;
}

export default function InsurancePremiumCalculator() {
  const { ref, visible } = useReveal();
  const [insType, setInsType] = useState<InsuranceType>('health');
  const [sumInsured, setSumInsured] = useState(500000);
  const [age, setAge] = useState(35);
  const [term, setTerm] = useState(20);

  const config = insuranceConfig[insType];

  const calculatePremium = (): { annual: number; monthly: number; breakdown: { label: string; value: string }[] } => {
    const basePremium = sumInsured * config.baseRate;
    const ageMult = getAgeMultiplier(age);
    const termMult = 1 + (term - 10) * 0.012;
    const annual = Math.round(basePremium * ageMult * termMult);
    const monthly = Math.round(annual / 12);

    return {
      annual,
      monthly,
      breakdown: [
        { label: 'Base Premium', value: formatINR(Math.round(basePremium)) },
        { label: `Age Factor (${age} yrs)`, value: `x${ageMult.toFixed(2)}` },
        { label: `Term Factor (${term} yrs)`, value: `x${termMult.toFixed(2)}` },
      ],
    };
  };

  const result = calculatePremium();

  return (
    <section id="premium-calculator" className="relative py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} mx-auto max-w-2xl text-center`}>
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-orange-600">
            <Calculator className="h-4 w-4" />
            Insurance Premium Calculator
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-navy-900 text-balance">
            Estimate Your Insurance Premium
          </h2>
          <p className="mt-4 text-lg text-navy-600">
            Get an instant premium estimate based on your coverage needs. Adjust the sliders to see how age, sum
            insured, and policy term affect your premium.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Left — Inputs */}
          <div className="lg:col-span-3 rounded-3xl bg-navy-50 p-6 sm:p-8 ring-1 ring-navy-100 shadow-sm">
            {/* Insurance Type Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-navy-600 mb-3">
                Select Insurance Type
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {(Object.keys(insuranceConfig) as InsuranceType[]).map((key) => {
                  const cfg = insuranceConfig[key];
                  const active = insType === key;
                  return (
                    <button
                      key={key}
                      onClick={() => {
                        setInsType(key);
                        const c = insuranceConfig[key];
                        setSumInsured(Math.min(Math.max(sumInsured, c.minSum), c.maxSum));
                      }}
                      className={`flex items-center gap-2.5 rounded-xl px-4 py-3 text-sm font-bold transition-all ${
                        active
                          ? 'bg-orange-gradient text-white shadow-lg shadow-orange-500/30'
                          : 'bg-white text-navy-700 ring-1 ring-navy-200 hover:ring-orange-300'
                      }`}
                    >
                      <cfg.icon className="h-5 w-5 shrink-0" />
                      <span className="text-left leading-tight">{cfg.label.replace(' (Term)', '')}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Sum Insured Slider */}
            <div className="mt-6">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-navy-600">
                  {config.unit}
                </label>
                <span className="rounded-lg bg-navy-900 px-3 py-1 text-sm font-bold text-white">
                  {formatINR(sumInsured)}
                </span>
              </div>
              <input
                type="range"
                min={config.minSum}
                max={config.maxSum}
                step={config.minSum}
                value={sumInsured}
                onChange={(e) => setSumInsured(Number(e.target.value))}
                className="mt-3 w-full accent-orange-500 cursor-pointer"
              />
              <div className="mt-1 flex justify-between text-xs text-navy-400">
                <span>{formatINR(config.minSum)}</span>
                <span>{formatINR(config.maxSum)}</span>
              </div>
            </div>

            {/* Age Slider */}
            <div className="mt-6">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-navy-600">Your Age</label>
                <span className="rounded-lg bg-navy-900 px-3 py-1 text-sm font-bold text-white">{age} years</span>
              </div>
              <input
                type="range"
                min={18}
                max={60}
                step={1}
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                className="mt-3 w-full accent-orange-500 cursor-pointer"
              />
              <div className="mt-1 flex justify-between text-xs text-navy-400">
                <span>18 yrs</span>
                <span>60 yrs</span>
              </div>
            </div>

            {/* Policy Term Slider */}
            <div className="mt-6">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-navy-600">Policy Term</label>
                <span className="rounded-lg bg-navy-900 px-3 py-1 text-sm font-bold text-white">{term} years</span>
              </div>
              <input
                type="range"
                min={1}
                max={40}
                step={1}
                value={term}
                onChange={(e) => setTerm(Number(e.target.value))}
                className="mt-3 w-full accent-orange-500 cursor-pointer"
              />
              <div className="mt-1 flex justify-between text-xs text-navy-400">
                <span>1 yr</span>
                <span>40 yrs</span>
              </div>
            </div>

            {/* Factors info */}
            <div className="mt-6 rounded-xl bg-white p-4 ring-1 ring-navy-100">
              <div className="flex items-start gap-2">
                <Info className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" />
                <div>
                  <p className="text-xs font-bold text-navy-700">Premium depends on:</p>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {config.factors.map((f) => (
                      <span key={f} className="rounded-full bg-navy-50 px-2.5 py-1 text-xs font-medium text-navy-600">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Result */}
          <div className="lg:col-span-2">
            <div className="sticky top-24 overflow-hidden rounded-3xl bg-card-gradient p-6 sm:p-8 shadow-xl ring-1 ring-white/10">
              <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-orange-500/15 blur-2xl" />
              <div className="relative">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-orange-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-orange-400">Estimated Premium</span>
                </div>

                <div className="mt-5">
                  <p className="text-sm text-navy-200">Annual Premium</p>
                  <p className="font-display text-4xl sm:text-5xl font-extrabold text-white mt-1">
                    {formatINR(result.annual)}
                  </p>
                  <p className="mt-2 text-sm text-navy-300">
                    or <span className="font-bold text-orange-400">{formatINR(result.monthly)}/month</span>
                  </p>
                </div>

                {/* Breakdown */}
                <div className="mt-6 space-y-3 border-t border-white/10 pt-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-navy-300">Calculation Breakdown</p>
                  {result.breakdown.map((row) => (
                    <div key={row.label} className="flex items-center justify-between text-sm">
                      <span className="text-navy-300">{row.label}</span>
                      <span className="font-bold text-white">{row.value}</span>
                    </div>
                  ))}
                </div>

                {/* Coverage display */}
                <div className="mt-6 rounded-xl bg-white/10 p-4 ring-1 ring-white/10">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-navy-200">{config.unit}</span>
                    <span className="font-bold text-orange-400">{formatINR(sumInsured)}</span>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm text-navy-200">Policy Term</span>
                    <span className="font-bold text-white">{term} years</span>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm text-navy-200">Your Age</span>
                    <span className="font-bold text-white">{age} years</span>
                  </div>
                </div>

                <a
                  href="#enquiry"
                  className="group mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-orange-gradient px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/30 transition-all hover:-translate-y-0.5"
                >
                  Get Exact Quote
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <p className="mt-3 text-center text-xs text-navy-400">
                  * This is an estimate. Actual premium may vary based on insurer, health assessment & add-ons.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
