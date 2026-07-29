import {
  TrendingUp,
  PieChart,
  BarChart3,
  HandCoins,
  ClipboardCheck,
  ArrowRight,
  Building2,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  CalendarClock,
  Target,
} from 'lucide-react';
import EnquiryForm from './EnquiryForm';

const services = [
  {
    icon: PieChart,
    title: 'Mutual Fund Distributor',
    desc: 'Authorised mutual fund distribution across leading AMCs — compare, select, and invest in the right funds for your goals.',
    points: ['Direct & regular plans', 'SIP & lumpsum setup', 'Fund comparison across AMCs'],
  },
  {
    icon: BarChart3,
    title: 'Mutual Fund Services',
    desc: 'End-to-end mutual fund services including portfolio tracking, switching, redemption, and consolidated statements.',
    points: ['Portfolio tracking', 'Switch & redemption support', 'Consolidated account statements'],
  },
  {
    icon: TrendingUp,
    title: 'Investment Solutions',
    desc: 'Tailored investment solutions spanning equity, debt, hybrid, and tax-saving instruments aligned to your risk profile.',
    points: ['Equity, debt & hybrid funds', 'Tax-saving investments (ELSS)', 'Goal-based portfolios'],
  },
  {
    icon: HandCoins,
    title: 'Investment Assistance',
    desc: 'Hands-on guidance at every step — from onboarding to ongoing review — so your investments stay on track.',
    points: ['Onboarding & KYC support', 'Periodic portfolio review', 'Risk profiling & rebalancing'],
  },
  {
    icon: ClipboardCheck,
    title: 'Financial Planning Support',
    desc: 'Comprehensive financial planning covering retirement, tax, insurance, and estate planning under one roof.',
    points: ['Retirement & tax planning', 'Insurance need analysis', 'Estate & succession guidance'],
  },
];

const stats = [
  { value: '500+', label: 'Investment Plans' },
  { value: '1000+', label: 'Clients Served' },
  { value: '15+', label: 'Years Experience' },
  { value: '98%', label: 'Client Satisfaction' },
];

const steps = [
  { icon: Phone, title: 'Free Consultation', desc: 'Book a 30-minute call to discuss your wealth and career goals.' },
  { icon: Target, title: 'Customised Plan', desc: 'Receive a tailored roadmap covering investments, planning, and career milestones.' },
  { icon: CalendarClock, title: 'Regular Reviews', desc: 'Periodic check-ins to track progress and adjust your plan as life changes.' },
  { icon: CheckCircle2, title: 'Achieve Goals', desc: 'Reach financial freedom and career milestones with expert guidance.' },
];

export default function SmartWealth() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-[#0f1d3a] pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-orange-400/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(249,115,22,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.5) 1px, transparent 1px)`, backgroundSize: '48px 48px' }} />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          {/* NJ Wealth Logo */}
          <div className="mb-6 flex justify-center">
            <img
              src="/assets/images/NJ_wealth_logo.jpg"
              alt="NJ Wealth - Authorised Mutual Fund Distribution Partner"
              className="h-24 w-32 rounded-2xl object-contain bg-white shadow-xl ring-2 ring-orange-400/40 p-2"
            />
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-500/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-orange-400 ring-1 ring-orange-500/30">
            <TrendingUp className="h-3.5 w-3.5" />
            NJ Wealth Partner
          </span>
          <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Mutual Fund &{' '}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Investment Solutions
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-navy-200">
            Authorised mutual fund distribution partner of <span className="font-bold text-orange-400">NJ Wealth</span> —
            offering SIP, lumpsum, portfolio tracking, and goal-based investment planning across leading AMCs.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#enquiry"
              className="inline-flex items-center gap-2 rounded-full bg-orange-gradient px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/30 transition-all hover:-translate-y-0.5"
            >
              Start Investing Today
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-7 py-3.5 text-sm font-bold text-white ring-1 ring-white/20 transition-all hover:bg-white/15"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative -mt-12 z-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-white p-5 text-center shadow-lg ring-1 ring-orange-100">
                <p className="font-display text-3xl font-extrabold text-orange-600">{s.value}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-navy-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-orange-600 ring-1 ring-orange-200">
              <TrendingUp className="h-3.5 w-3.5" />
              Our Services
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-extrabold text-navy-900">
              Mutual Fund & Investment Solutions
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-navy-500">
              From mutual fund distribution to job placement support, we cover every aspect of your financial and professional journey.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-orange-100 transition-all hover:shadow-xl hover:ring-orange-300 hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-gradient text-white shadow-md">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-navy-900">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-500">{service.desc}</p>
                <ul className="mt-4 space-y-1.5">
                  {service.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-navy-600">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-green-500" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-navy-50 to-orange-50/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-navy-900">
              How It Works
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-navy-500">
              A simple, transparent process designed around your goals.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, idx) => (
              <div key={step.title} className="relative text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-gradient text-white shadow-lg shadow-orange-500/20">
                  <step.icon className="h-7 w-7" />
                </div>
                <span className="mt-4 inline-block rounded-full bg-orange-50 px-3 py-0.5 text-xs font-bold text-orange-600">
                  Step {idx + 1}
                </span>
                <h3 className="mt-2 font-display text-lg font-bold text-navy-900">{step.title}</h3>
                <p className="mt-1.5 text-sm text-navy-500">{step.desc}</p>
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-full">
                    <div className="h-px bg-gradient-to-r from-orange-300 to-transparent" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-900 to-[#1a2a4a] p-8 lg:p-12 text-center">
            <div className="absolute top-0 right-0 h-48 w-48 rounded-full bg-orange-500/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-orange-400/10 blur-3xl" />
            <div className="relative">
              <Building2 className="mx-auto h-10 w-10 text-orange-400" />
              <h2 className="mt-4 font-display text-2xl sm:text-3xl font-extrabold text-white">
                Ready to Secure Your Financial Future?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-base text-navy-200">
                Get a free, no-obligation consultation today. Our experts will craft a personalised plan for your wealth and career goals.
              </p>
              <a
                href="#enquiry"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-orange-gradient px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/30 transition-all hover:-translate-y-0.5"
              >
                Get Started Today
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <section className="pb-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="flex items-center gap-3 rounded-2xl bg-orange-50 p-5 ring-1 ring-orange-100">
              <Phone className="h-5 w-5 text-orange-500" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-navy-400">Call Us</p>
                <p className="text-sm font-bold text-navy-900">8669041694</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-orange-50 p-5 ring-1 ring-orange-100">
              <Mail className="h-5 w-5 text-orange-500" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-navy-400">Email Us</p>
                <p className="text-sm font-bold text-navy-900">info@sgloaneservices.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-orange-50 p-5 ring-1 ring-orange-100">
              <MapPin className="h-5 w-5 text-orange-500" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-navy-400">Visit Us</p>
                <p className="text-sm font-bold text-navy-900">Pune, Maharashtra</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section id="enquiry" className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <EnquiryForm />
        </div>
      </section>
    </div>
  );
}
