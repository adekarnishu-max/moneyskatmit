import { User, Briefcase, Chrome as Home, Building2, RefreshCw, Landmark, GraduationCap, Car, Wallet, Factory, Zap, CircleCheck as CheckCircle2, ArrowRight, Percent, Clock, FileCheck } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const loans = [
  { icon: User, name: 'Personal Loan', desc: 'Quick funds for personal needs, weddings, travel & more.', rate: '10.5% onwards', amount: '₹50K - ₹40L' },
  { icon: Briefcase, name: 'Business Loan', desc: 'Grow your business with collateral-free funding.', rate: '9.99% onwards', amount: '₹1L - ₹2 Cr' },
  { icon: Home, name: 'Home Loan', desc: 'Buy or build your dream home at the best rates.', rate: '8.4% onwards', amount: '₹5L - ₹10 Cr' },
  { icon: Building2, name: 'Loan Against Property', desc: 'Unlock the value of your property for high-value loans.', rate: '9.5% onwards', amount: '₹5L - ₹15 Cr' },
  { icon: RefreshCw, name: 'Balance Transfer', desc: 'Transfer your existing loan and save on interest.', rate: '8.4% onwards', amount: 'Up to existing outstanding' },
  { icon: Landmark, name: 'Mortgage Loan', desc: 'Get funds against your property with easy EMIs.', rate: '10% onwards', amount: '₹5L - ₹10 Cr' },
  { icon: GraduationCap, name: 'Professional Loan', desc: 'Special loans for CAs, doctors & professionals.', rate: '11% onwards', amount: '₹1L - ₹1 Cr' },
  { icon: Zap, name: 'Education Loan', desc: 'Finance your higher education with flexible terms.', rate: '9.5% onwards', amount: '₹1L - ₹50L' },
  { icon: Car, name: 'Vehicle Loan', desc: 'Drive home your dream car or bike with easy EMIs.', rate: '9% onwards', amount: '₹1L - ₹50L' },
  { icon: Wallet, name: 'Working Capital Loan', desc: 'Manage your day-to-day business cash flow.', rate: '12% onwards', amount: '₹1L - ₹5 Cr' },
  { icon: Factory, name: 'MSME Loan', desc: 'Government-backed loans for micro & small enterprises.', rate: '8.5% onwards', amount: '₹50K - ₹10 Cr' },
];

const features = [
  { icon: Zap, label: 'Quick Approval' },
  { icon: FileCheck, label: 'Minimal Documentation' },
  { icon: Percent, label: 'Competitive Interest Rates' },
  { icon: Building2, label: '11+ Bank & NBFC Partners' },
];

export default function LoanProducts() {
  const { ref, visible } = useReveal();

  return (
    <section id="loans" className="relative py-20 lg:py-28 bg-navy-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} mx-auto max-w-2xl text-center`}>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">Loan Services</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-navy-900 text-balance">
            Loans for Every Need
          </h2>
          <p className="mt-4 text-lg text-navy-600">
            We offer a wide range of loan products through our 11+ partner banks and NBFCs — with quick approval,
            minimal documentation, and competitive interest rates.
          </p>
        </div>

        {/* Feature bar */}
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f) => (
            <div key={f.label} className="flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-sm ring-1 ring-navy-100 transition-all hover:ring-orange-300 hover:shadow-md">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                <f.icon className="h-5 w-5" />
              </span>
              <span className="text-sm font-bold text-navy-800">{f.label}</span>
            </div>
          ))}
        </div>

        {/* Loan cards grid */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {loans.map((loan, i) => (
            <div
              key={loan.name}
              className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy-100 transition-all hover:-translate-y-1.5 hover:shadow-xl hover:shadow-orange-500/10 hover:ring-orange-300"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              <div className="absolute -top-10 -right-10 h-24 w-24 rounded-full bg-orange-50 transition-all group-hover:scale-150" />
              <div className="relative">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-orange-400 transition-colors group-hover:bg-orange-gradient group-hover:text-white">
                  <loan.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-navy-900">{loan.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-navy-500">{loan.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 rounded-md bg-green-50 px-2.5 py-1 text-xs font-bold text-green-600">
                    <Percent className="h-3 w-3" />
                    {loan.rate}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-md bg-navy-50 px-2.5 py-1 text-xs font-bold text-navy-600">
                    {loan.amount}
                  </span>
                </div>
                <div className="mt-4 flex items-center gap-4 border-t border-navy-100 pt-3">
                  <a
                    href="#enquiry"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-orange-600 transition-colors hover:text-orange-700"
                  >
                    Enquire Now
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                  <a
                    href="/required-documents"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-navy-500 transition-colors hover:text-orange-600"
                  >
                    Documents
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="mt-12 overflow-hidden rounded-3xl bg-card-gradient p-8 lg:p-10 shadow-xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl font-bold text-white">Not sure which loan is right for you?</h3>
              <p className="mt-2 text-navy-200">Our experts will help you choose the best loan product for your needs — free consultation.</p>
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
