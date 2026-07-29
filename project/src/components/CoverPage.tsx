import { Link } from 'react-router-dom';
import {
  ArrowRight, Landmark, GraduationCap, ShieldCheck, Phone, MessageCircle,
  Menu, X, TrendingUp, Handshake, Shield, PiggyBank,
} from 'lucide-react';
import { useState } from 'react';

const PHONE1 = '8669041694';
const PHONE2 = '9049565775';

const navLinks = [
  { label: 'Home', href: '/home' },
  { label: 'Loans', href: '/home#loans' },
  { label: 'Insurance', href: '/home#insurance' },
  { label: 'MBA Courses', href: '/courses' },
  { label: 'Mutual Funds', href: '/smart-wealth' },
  { label: 'Partners', href: '/home#banking-partners' },
  { label: 'Documents', href: '/required-documents' },
  { label: 'About', href: '/home#about' },
  { label: 'Contact', href: '/home#contact' },
];

const serviceCards = [
  {
    to: '/home#loans',
    icon: Landmark,
    logo: '/MONEYSKAT_LOGO copy copy.jpg',
    logoAlt: 'MoneySkat Logo',
    title: 'Loan Services',
    desc: 'Personal, Business, Home, Mortgage, Education & MSME Loans through 11+ partner banks. Quick approval, minimal documentation, competitive rates.',
    cta: 'Explore Loans',
  },
  {
    to: '/home#insurance',
    icon: Shield,
    logo: '/assets/images/HDFC_Life_Logo.jpg',
    logoAlt: 'HDFC Life Logo',
    title: 'Insurance',
    desc: 'Life, Health, Motor, Home, Travel, Business & Critical Illness insurance. Authorised HDFC Life partner with expert advisory and claim support.',
    cta: 'Get Insured',
  },
  {
    to: '/courses',
    icon: GraduationCap,
    logo: '/unnamed.jpg',
    logoAlt: 'MITSDE Logo',
    title: 'MITSDE Online Courses (MBA)',
    desc: 'PGDM, Executive PGDM & MBA programs with complete fee details, EMI plans, and syllabus. UGC & AICTE approved. Education loan available.',
    cta: 'View Courses',
  },
  {
    to: '/smart-wealth',
    icon: TrendingUp,
    logo: '/assets/images/NJ_wealth_logo.jpg',
    logoAlt: 'NJ Wealth Logo',
    title: 'Mutual Fund & Investments',
    desc: 'Authorised NJ Wealth partner — mutual fund distribution, SIP & lumpsum, portfolio tracking, financial planning, and job placement support.',
    cta: 'Start Investing',
  },
  {
    to: '/home#banking-partners',
    icon: Handshake,
    logo: '/assets/images/business_partner.jpg',
    logoAlt: 'Business Partner Logo',
    title: 'Business Partners Agency',
    desc: 'Distributor of Insurance & Mutual Fund Agency, and Manpower Support for any job positions. IRDAI & AMFI certified with 1000+ placements.',
    cta: 'View Services',
  },
];

export default function CoverPage() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-gradient-to-br from-white via-orange-50/40 to-white">
      {/* Decorative orange graphics */}
      <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-orange-200/30 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-orange-100/50 blur-3xl" />
      <div className="absolute top-1/3 left-1/4 h-72 w-72 rounded-full bg-orange-100/40 blur-3xl" />
      <div className="absolute top-20 right-20 h-24 w-24 rounded-2xl rotate-12 bg-orange-300/15 ring-1 ring-orange-200/30" />
      <div className="absolute bottom-32 right-1/3 h-16 w-16 rounded-full bg-orange-400/15 ring-1 ring-orange-300/20" />
      <div className="absolute top-1/2 left-10 h-12 w-12 rounded-lg rotate-45 bg-orange-200/20" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(249,115,22,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.4) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Top nav */}
      <header className="relative z-10">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/ChatGPT_Image_Jul_14,_2026,_03_04_20_PM copy.png"
                alt="MoneySkat & MIT"
                className="h-11 w-11 rounded-xl object-cover ring-2 ring-orange-400/50 transition-transform group-hover:scale-105"
              />
              <span className="flex flex-col leading-tight">
                <span className="font-display text-sm lg:text-base font-extrabold tracking-tight text-navy-900">
                  MoneySkat
                </span>
                <span className="text-[10px] lg:text-[11px] font-semibold uppercase tracking-[0.18em] text-orange-600">
                  & MIT
                </span>
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((l) => (
                <Link
                  key={l.label}
                  to={l.href}
                  className="px-3 py-2 text-sm font-semibold text-navy-700 rounded-lg transition-colors hover:text-orange-600 hover:bg-orange-50"
                >
                  {l.label}
                </Link>
              ))}
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg text-navy-900 hover:bg-orange-50"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile menu */}
          <div className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-[440px] pb-4' : 'max-h-0'}`}>
            <div className="flex flex-col gap-1 rounded-2xl bg-white p-3 shadow-xl ring-1 ring-orange-200/60">
              {navLinks.map((l) => (
                <Link
                  key={l.label}
                  to={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-4 py-2.5 text-sm font-semibold text-navy-700 transition-colors hover:bg-orange-50 hover:text-orange-600"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </header>

      <div className="relative flex-1 flex flex-col items-center justify-center px-4 py-12">
        {/* Logos */}
        <div className="animate-fade-in flex flex-col sm:flex-row items-center justify-center gap-6">
          <img
            src="/MONEYSKAT_LOGO copy.jpg"
            alt="MoneySkat - Finance so easy, Partner in Growth"
            className="h-28 w-28 rounded-2xl object-contain bg-white ring-4 ring-orange-300/40 shadow-xl p-2"
          />
          <div className="hidden sm:block h-20 w-px bg-orange-200/60 rounded-full" />
          <img
            src="/online-mba-programs-for-working-professionals copy.png"
            alt="MIT Online Learning - Online MBA Programs for Working Professionals"
            className="h-28 w-auto max-w-[260px] rounded-2xl object-contain bg-white ring-4 ring-orange-300/40 shadow-xl p-2"
          />
        </div>

        {/* Heading */}
        <h1 className="mt-6 text-center font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-navy-900 animate-fade-up text-balance">
          MoneySkat{' '}
          <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
            & MIT
          </span>
        </h1>

        <p className="mt-4 text-center text-base sm:text-lg font-bold text-navy-700 max-w-2xl animate-fade-up">
          Your one-stop destination for Loans, Insurance, Online MBA, Mutual Funds & Business Partnerships
        </p>

        {/* Five service cards */}
        <div className="mt-12 grid w-full max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3 animate-fade-up">
          {serviceCards.map((card) => (
            <Link
              key={card.title}
              to={card.to}
              className="group relative overflow-hidden rounded-3xl bg-white p-7 shadow-lg ring-1 ring-orange-200/60 transition-all hover:shadow-2xl hover:shadow-orange-500/10 hover:ring-orange-300 hover:-translate-y-1"
            >
              <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-orange-50 transition-all group-hover:scale-150" />
              <div className="relative">
                <div className="flex items-center gap-4">
                  <img
                    src={card.logo}
                    alt={card.logoAlt}
                    className="h-16 w-16 rounded-2xl object-contain bg-white ring-2 ring-orange-300/60 shadow-lg p-1"
                  />
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-orange-400 transition-colors group-hover:bg-orange-gradient group-hover:text-white shadow-md">
                    <card.icon className="h-6 w-6" />
                  </span>
                </div>
                <h2 className="mt-5 font-display text-xl font-bold text-navy-900">{card.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-navy-500">{card.desc}</p>
                <div className="mt-4 flex items-center gap-2 text-sm font-bold text-orange-600">
                  {card.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}

          {/* Filler card for 6th slot on large screens — keeps grid balanced */}
          <div className="hidden lg:flex flex-col items-center justify-center rounded-3xl bg-gradient-to-br from-navy-900 to-[#1a2a4a] p-7 shadow-lg ring-1 ring-white/10">
            <PiggyBank className="h-10 w-10 text-orange-400" />
            <h2 className="mt-4 font-display text-lg font-bold text-white text-center">All Services Under One Roof</h2>
            <p className="mt-2 text-sm text-navy-200 text-center">
              From loans to education, insurance to investments — we are your trusted financial partner.
            </p>
            <Link
              to="/home#enquiry"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-orange-gradient px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-orange-500/30"
            >
              Enquire Now
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 animate-fade-in">
          <div className="flex items-center gap-2 text-sm font-semibold text-navy-600">
            <ShieldCheck className="h-5 w-5 text-orange-500" /> UGC & AICTE Approved
          </div>
          <div className="flex items-center gap-2 text-sm font-semibold text-navy-600">
            <ShieldCheck className="h-5 w-5 text-orange-500" /> 5000+ Happy Clients
          </div>
          <div className="flex items-center gap-2 text-sm font-semibold text-navy-600">
            <ShieldCheck className="h-5 w-5 text-orange-500" /> 11+ Bank Partners
          </div>
          <div className="flex items-center gap-2 text-sm font-semibold text-navy-600">
            <ShieldCheck className="h-5 w-5 text-orange-500" /> HDFC Life & NJ Wealth Partner
          </div>
        </div>

        {/* Contact */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 animate-fade-in">
          <a href={`tel:+91${PHONE1}`} className="flex items-center gap-2 text-sm font-bold text-navy-700 hover:text-orange-600 transition-colors">
            <Phone className="h-4 w-4 text-orange-500" />
            {PHONE1}
          </a>
          <span className="hidden sm:block text-navy-300">|</span>
          <a href={`tel:+91${PHONE2}`} className="flex items-center gap-2 text-sm font-bold text-navy-700 hover:text-orange-600 transition-colors">
            <Phone className="h-4 w-4 text-orange-500" />
            {PHONE2}
          </a>
          <span className="hidden sm:block text-navy-300">|</span>
          <a
            href={`https://wa.me/91${PHONE1}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-bold text-[#25D366] hover:text-[#1eb457] transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
