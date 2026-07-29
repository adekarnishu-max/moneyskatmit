import { useReveal } from '../hooks/useReveal';
import {
  Handshake, ArrowRight, ShieldCheck, TrendingUp, Users, Briefcase,
  CheckCircle2, Award, Target, UserCheck, Building2, Headset,
} from 'lucide-react';

const partners = [
  { name: 'HDFC', logo: 'https://logo.clearbit.com/hdfcbank.com' },
  { name: 'AXIS', logo: 'https://logo.clearbit.com/axisbank.com' },
  { name: 'ICICI', logo: 'https://logo.clearbit.com/icicibank.com' },
  { name: 'YES BANK', logo: 'https://logo.clearbit.com/yesbank.in' },
  { name: 'IDFC BANK', logo: 'https://logo.clearbit.com/idfcfirstbank.com' },
  { name: 'BAJAJ FINANCE', logo: 'https://logo.clearbit.com/bajajfinserv.in' },
  { name: 'GODREJ CAPITAL FINANCE', logo: 'https://logo.clearbit.com/godrejcapital.com' },
  { name: 'CHOLA FINANCE', logo: 'https://logo.clearbit.com/cholamandalam.com' },
  { name: 'TATA CAPITAL', logo: 'https://logo.clearbit.com/tatacapital.com' },
  { name: 'POONAWALLA FINCORP', logo: 'https://logo.clearbit.com/poonawallafincorp.com' },
  { name: 'PIRAMAL FINANCE', logo: 'https://logo.clearbit.com/piramalfinance.com' },
  { name: 'ADITYA BIRLA FINANCE', logo: 'https://logo.clearbit.com/adityabirlacapital.com' },
];

const services = [
  {
    icon: ShieldCheck,
    title: 'Distributor of Insurance & Mutual Fund Agency',
    desc: 'Authorised distributor for insurance and mutual fund products — offering life, health, and general insurance plans along with mutual fund investments across leading AMCs.',
    points: [
      'Insurance distribution (HDFC Life & partners)',
      'Mutual fund distribution (NJ Wealth & partners)',
      'SIP, lumpsum & portfolio management',
      'Goal-based investment planning',
    ],
    badge: 'IRDAI & AMFI Certified',
  },
  {
    icon: Users,
    title: 'Manpower Support in Any Job Positions',
    desc: 'End-to-end manpower support and recruitment services — connecting skilled candidates with the right employers across industries and job roles.',
    points: [
      'Recruitment & staffing solutions',
      'Resume building & LinkedIn optimisation',
      'Mock interview preparation',
      'Employer & recruiter connections',
    ],
    badge: '1000+ Placements',
  },
];

const benefits = [
  { icon: Award, title: 'Authorised Agency', desc: 'Officially registered distributor with IRDAI & AMFI certifications.' },
  { icon: Target, title: 'Goal-Based Planning', desc: 'Customised insurance & investment plans aligned to your life goals.' },
  { icon: UserCheck, title: 'Expert Team', desc: 'Certified advisors and recruiters with 15+ years of experience.' },
  { icon: Headset, title: '24x7 Support', desc: 'Round-the-clock assistance for all your queries and claims.' },
];

export default function BankingPartners() {
  const { ref, visible } = useReveal();

  return (
    <section id="banking-partners" className="relative py-20 lg:py-28 bg-gradient-to-b from-white via-navy-50/50 to-white overflow-hidden">
      <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-orange-100/40 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-orange-50/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} mx-auto max-w-2xl text-center`}>
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-orange-600">
            <Handshake className="h-4 w-4" />
            Business Partner Agency
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-navy-900 text-balance">
            Our Business Partner Services
          </h2>
          <p className="mt-4 text-lg text-navy-600">
            We offer two specialised services — insurance & mutual fund distribution, and manpower support
            for recruitment across all job positions.
          </p>
        </div>

        {/* Scrolling partners marquee */}
        <div className="mt-12">
          <p className="text-center text-xs font-bold uppercase tracking-wider text-navy-500">
            Our Banking & Financial Partners
          </p>
          <div className="group relative mt-5 overflow-hidden rounded-2xl bg-white ring-1 ring-navy-100 shadow-sm">
            {/* edge fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />
            <div className="flex w-max animate-[marquee_40s_linear_infinite] gap-10 py-6 group-hover:[animation-play-state:paused]">
              {[...partners, ...partners, ...partners].map((p, i) => (
                <div key={i} className="flex shrink-0 items-center gap-3">
                  <img
                    src={p.logo}
                    alt={`${p.name} logo`}
                    className="h-12 w-12 rounded-lg object-contain ring-1 ring-navy-100 bg-white p-1"
                    loading="lazy"
                  />
                  <span className="whitespace-nowrap font-display text-lg font-bold text-navy-800">
                    {p.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Service cards */}
        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg ring-1 ring-navy-100 transition-all hover:shadow-xl hover:ring-orange-300 hover:-translate-y-1"
            >
              <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-orange-50 transition-all group-hover:scale-150" />
              <div className="relative">
                <div className="flex items-start justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-900 text-orange-400 transition-colors group-hover:bg-orange-gradient group-hover:text-white shadow-md">
                    <s.icon className="h-7 w-7" />
                  </span>
                  <span className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-bold text-green-600 ring-1 ring-green-200">
                    {s.badge}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-navy-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-500">{s.desc}</p>
                <ul className="mt-4 space-y-2">
                  {s.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2 text-sm font-medium text-navy-600">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-orange-500" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <a
                  href="#enquiry"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-orange-600 transition-colors hover:text-orange-700"
                >
                  Enquire Now
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits strip */}
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((b) => (
            <div key={b.title} className="flex flex-col items-center text-center rounded-2xl bg-white p-5 shadow-sm ring-1 ring-navy-100 transition-all hover:ring-orange-300 hover:shadow-md">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-orange-400">
                <b.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-3 text-sm font-bold text-navy-900">{b.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-navy-500">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 overflow-hidden rounded-3xl bg-card-gradient p-8 lg:p-10 shadow-xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl font-bold text-white">Want to partner with us?</h3>
              <p className="mt-2 text-navy-200">Join our network as a business partner or avail our distribution & manpower services.</p>
            </div>
            <a
              href="#enquiry"
              className="inline-flex items-center gap-2 rounded-full bg-orange-gradient px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-orange-500/30 transition-all hover:-translate-y-0.5"
            >
              Partner With Us
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
