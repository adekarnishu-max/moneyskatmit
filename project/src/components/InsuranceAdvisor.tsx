import {
  Shield, HeartPulse, Car, Home, Baby, Plane, Briefcase,
  Tractor, Ambulance, CheckCircle2, ArrowRight, Users, Clock, Award, Headset,
} from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const insuranceTypes = [
  {
    icon: HeartPulse,
    name: 'Health Insurance',
    desc: 'Comprehensive medical coverage for you and your family — cashless hospitalisation, critical illness & more.',
    coverage: '₹3 L - ₹1 Cr',
    keyPoints: ['Cashless at 10,000+ hospitals', 'Pre & post hospitalisation', 'Annual health check-up'],
  },
  {
    icon: Shield,
    name: 'Life Insurance',
    desc: 'Term plans, endowment & ULIPs to secure your family\'s financial future.',
    coverage: '₹10 L - ₹2 Cr',
    keyPoints: ['Term life cover', 'Wealth maximisation (ULIP)', 'Tax benefits under 80C'],
  },
  {
    icon: Car,
    name: 'Motor Insurance',
    desc: 'Comprehensive & third-party coverage for cars, bikes and commercial vehicles.',
    coverage: 'Up to IDV',
    keyPoints: ['Zero depreciation', 'Roadside assistance', 'Instant claim settlement'],
  },
  {
    icon: Home,
    name: 'Home Insurance',
    desc: 'Protect your home and valuables against fire, theft, natural disasters & more.',
    coverage: 'Up to property value',
    keyPoints: ['Structure & contents cover', 'Burglary & theft', 'Earthquake & flood cover'],
  },
  {
    icon: Baby,
    name: 'Child Insurance',
    desc: 'Secure your child\'s future education and milestones with guaranteed returns.',
    coverage: '₹5 L - ₹1 Cr',
    keyPoints: ['Education fund planning', 'Premium waiver on death', 'Maturity benefit payout'],
  },
  {
    icon: Plane,
    name: 'Travel Insurance',
    desc: 'Domestic & international travel cover — medical emergencies, baggage loss, trip cancellation.',
    coverage: 'Up to $500K',
    keyPoints: ['Medical emergency abroad', 'Baggage loss/delay', 'Trip cancellation cover'],
  },
  {
    icon: Briefcase,
    name: 'Business Insurance',
    desc: 'Protect your business assets, employees & operations with customised commercial covers.',
    coverage: 'Custom',
    keyPoints: ['Property & asset cover', 'Liability protection', 'Employee group cover'],
  },
  {
    icon: Tractor,
    name: 'Crop/Agriculture Insurance',
    desc: 'Safeguard your farming income against crop failure, weather damage & natural calamities.',
    coverage: 'Per acre',
    keyPoints: ['Crop loss protection', 'Weather-based cover', 'Government-subsidised schemes'],
  },
  {
    icon: Ambulance,
    name: 'Critical Illness Insurance',
    desc: 'Lump-sum payout on diagnosis of major illnesses like cancer, heart attack & kidney failure.',
    coverage: '₹5 L - ₹1 Cr',
    keyPoints: ['Lump-sum on diagnosis', 'Covers 20+ major illnesses', 'Survival period 30 days'],
  },
];

const advisorBenefits = [
  { icon: Award, title: 'Expert Advisory', desc: 'Certified insurance advisors who assess your needs and recommend the right coverage.' },
  { icon: Users, title: 'Family Protection', desc: 'Plans designed to protect every member of your family at every life stage.' },
  { icon: Clock, title: 'Quick Claim Support', desc: 'End-to-end claim assistance — from documentation to settlement.' },
  { icon: Headset, title: '24x7 Assistance', desc: 'Round-the-clock support for policy queries, renewals & claims.' },
];

export default function InsuranceAdvisor() {
  const { ref, visible } = useReveal();

  return (
    <section id="insurance" className="relative py-20 lg:py-28 bg-navy-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} mx-auto max-w-2xl text-center`}>
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-orange-600">
            <Shield className="h-4 w-4" />
            Insurance Advisory Services
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-navy-900 text-balance">
            Protect What Matters Most
          </h2>
          <p className="mt-4 text-lg text-navy-600">
            Comprehensive insurance solutions for every need — from health and life to business and travel.
            Our certified advisors help you choose the right plan at the best premium.
          </p>
        </div>

        {/* HDFC Life Partner Banner */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 rounded-3xl bg-white p-6 shadow-lg ring-1 ring-orange-100">
          <img
            src="/assets/images/HDFC_Life_Logo.jpg"
            alt="HDFC Life Insurance - Authorised Partner"
            className="h-20 w-32 rounded-xl object-contain bg-white ring-2 ring-orange-300/50 shadow-md p-2"
          />
          <div className="text-center sm:text-left">
            <h3 className="font-display text-lg font-bold text-navy-900">Authorised Insurance Partner</h3>
            <p className="mt-1 text-sm text-navy-500">
              We are proud authorised partners of <span className="font-bold text-orange-600">HDFC Life</span> —
              offering life insurance, term plans, ULIPs, and pension solutions to secure your family's future.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-600 ring-1 ring-green-200">IRDAI Certified</span>
            <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-orange-600 ring-1 ring-orange-200">HDFC Life Partner</span>
          </div>
        </div>

        {/* Advisor Benefits */}
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {advisorBenefits.map((b) => (
            <div key={b.title} className="flex flex-col items-center text-center rounded-2xl bg-white p-5 shadow-sm ring-1 ring-navy-100 transition-all hover:ring-orange-300 hover:shadow-md">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-orange-400">
                <b.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-3 text-sm font-bold text-navy-900">{b.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-navy-500">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* Insurance Types Grid */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {insuranceTypes.map((ins, i) => (
            <div
              key={ins.name}
              className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy-100 transition-all hover:-translate-y-1.5 hover:shadow-xl hover:shadow-orange-500/10 hover:ring-orange-300"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              <div className="absolute -top-10 -right-10 h-24 w-24 rounded-full bg-orange-50 transition-all group-hover:scale-150" />
              <div className="relative">
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-orange-400 transition-colors group-hover:bg-orange-gradient group-hover:text-white">
                    <ins.icon className="h-6 w-6" />
                  </span>
                  <span className="rounded-full bg-navy-50 px-3 py-1 text-xs font-bold text-navy-600">
                    Coverage: {ins.coverage}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-navy-900">{ins.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-navy-500">{ins.desc}</p>
                <ul className="mt-3 space-y-1.5">
                  {ins.keyPoints.map((pt) => (
                    <li key={pt} className="flex items-center gap-2 text-xs font-medium text-navy-600">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-orange-500" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <a
                  href="#enquiry"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-orange-600 transition-colors hover:text-orange-700"
                >
                  Get Quote
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="mt-12 overflow-hidden rounded-3xl bg-card-gradient p-8 lg:p-10 shadow-xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl font-bold text-white">Need help choosing the right insurance?</h3>
              <p className="mt-2 text-navy-200">Our certified advisors provide free consultation — compare plans from 10+ insurers and find the best coverage at the best price.</p>
            </div>
            <a
              href="#enquiry"
              className="inline-flex items-center gap-2 rounded-full bg-orange-gradient px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-orange-500/30 transition-all hover:-translate-y-0.5"
            >
              Get Free Consultation
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
