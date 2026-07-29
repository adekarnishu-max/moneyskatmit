import { ArrowRight, GraduationCap, MessageCircle, Phone, ShieldCheck, BadgeCheck, TrendingUp } from 'lucide-react';

const PHONE1 = '8669041694';
const PHONE2 = '9049565775';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-orange-50/40 to-white">
      {/* Decorative orange graphics */}
      <div className="absolute top-20 -right-20 h-96 w-96 rounded-full bg-orange-200/40 blur-3xl" />
      <div className="absolute bottom-0 -left-20 h-80 w-80 rounded-full bg-orange-300/20 blur-3xl" />
      <div className="absolute top-1/2 left-1/3 h-72 w-72 rounded-full bg-orange-100/50 blur-3xl" />

      {/* Orange geometric accents */}
      <div className="absolute top-32 right-10 h-20 w-20 rounded-2xl rotate-12 bg-orange-400/15 ring-1 ring-orange-300/30" />
      <div className="absolute bottom-32 right-40 h-14 w-14 rounded-full bg-orange-500/15 ring-1 ring-orange-400/20" />
      <div className="absolute top-1/2 right-1/4 h-10 w-10 rounded-lg rotate-45 bg-orange-300/20" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(249,115,22,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.4) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left content */}
          <div className="lg:col-span-7 animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-300 bg-orange-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-orange-600">
              <BadgeCheck className="h-4 w-4" />
              One Stop Solution for Loans & Insurance
            </span>

            <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-navy-900 text-balance">
              One Stop Solution for{' '}
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Loans & Insurance
              </span>{' '}
              & Career Growth
            </h1>

            <p className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-navy-600 font-medium">
              Personal Loans | Business Loans | Home Loans | Insurance | Career Guidance
            </p>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#enquiry"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-orange-gradient px-7 py-3.5 text-base font-bold text-white shadow-xl shadow-orange-500/30 transition-all hover:-translate-y-0.5 hover:shadow-orange-500/50"
              >
                Apply for Loan
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="/courses"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white border-2 border-orange-300 px-7 py-3.5 text-base font-bold text-orange-600 shadow-lg transition-all hover:bg-orange-50 hover:-translate-y-0.5"
              >
                <GraduationCap className="h-5 w-5" />
                Explore Courses
              </a>
              <a
                href={`https://wa.me/91${PHONE1}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-base font-bold text-white shadow-xl shadow-green-600/30 transition-all hover:bg-[#1eb457] hover:-translate-y-0.5"
              >
                <MessageCircle className="h-5 w-5" />
                Contact on WhatsApp
              </a>
            </div>

            {/* Phone numbers */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href={`tel:+91${PHONE1}`} className="flex items-center gap-3 group">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-orange-600 ring-1 ring-orange-200 transition-all group-hover:bg-orange-gradient group-hover:text-white group-hover:ring-orange-500">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-navy-500">Call Us</p>
                  <p className="text-lg font-bold text-navy-900">{PHONE1}</p>
                </div>
              </a>
              <a href={`tel:+91${PHONE2}`} className="flex items-center gap-3 group">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-orange-600 ring-1 ring-orange-200 transition-all group-hover:bg-orange-gradient group-hover:text-white group-hover:ring-orange-500">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-navy-500">Call Us</p>
                  <p className="text-lg font-bold text-navy-900">{PHONE2}</p>
                </div>
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-navy-700">
                <ShieldCheck className="h-5 w-5 text-orange-500" /> Quick Approval
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-navy-700">
                <TrendingUp className="h-5 w-5 text-orange-500" /> Minimal Documentation
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-navy-700">
                <BadgeCheck className="h-5 w-5 text-orange-500" /> UGC & AICTE Approved
              </div>
            </div>
          </div>

          {/* Right — stats card */}
          <div className="lg:col-span-5 animate-fade-in">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="relative overflow-hidden rounded-3xl bg-white p-8 ring-1 ring-orange-200/60 shadow-2xl shadow-orange-500/10">
                <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-orange-100 blur-2xl" />
                <div className="relative">
                  <h3 className="font-display text-lg font-bold text-navy-900">Why Choose SG?</h3>
                  <div className="mt-6 space-y-5">
                    {[
                      { label: 'Loans Disbursed', value: '₹100 Cr+' },
                      { label: 'Happy Clients', value: '5000+' },
                      { label: 'Bank & NBFC Partners', value: '15+' },
                      { label: 'MBA Programs', value: '11+' },
                    ].map((s) => (
                      <div key={s.label} className="flex items-center justify-between border-b border-orange-100 pb-4 last:border-0 last:pb-0">
                        <span className="text-sm font-medium text-navy-600">{s.label}</span>
                        <span className="font-display text-2xl font-extrabold text-orange-500">{s.value}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href="#enquiry"
                    className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-orange-gradient px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/30 transition-all hover:-translate-y-0.5"
                  >
                    Get Started Today
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -top-4 -left-4 flex items-center gap-2 rounded-full bg-orange-gradient px-4 py-2 shadow-xl animate-float">
                <ShieldCheck className="h-5 w-5 text-white" />
                <span className="text-xs font-bold text-white">Trusted & Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
