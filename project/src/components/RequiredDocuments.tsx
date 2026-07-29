import {
  User,
  Briefcase,
  Chrome as Home,
  ArrowLeftRight,
  Award,
  GraduationCap,
  Car,
  CircleDollarSign,
  Building2,
  FileText,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

type LoanDoc = {
  icon: typeof User;
  name: string;
  tagline: string;
  common: string[];
  specific: string[];
};

const commonDocuments: string[] = [
  'KYC (PAN Card & Aadhaar Card)',
  'Income Proof (Min 6 months bank statement)',
  'Last 3 months salary slip (if salaried)',
  'Ownership Proof (Light Bill, Tax Receipt, Water Tax Receipt, Index 2)',
];

const loans: LoanDoc[] = [
  {
    icon: User,
    name: 'Personal Loan',
    tagline: 'Quick funds for personal needs, weddings, travel & more.',
    common: commonDocuments,
    specific: ['Form 16', 'Job ID'],
  },
  {
    icon: Briefcase,
    name: 'Business Loan',
    tagline: 'Grow your business with collateral-free funding.',
    common: commonDocuments,
    specific: ['Shop Act / GST Certificate / Udyam Registration', 'Vintage Proof', 'GSTR 3B (if required)'],
  },
  {
    icon: Home,
    name: 'Home Loan & Loan Against Property',
    tagline: 'Buy, build, or unlock the value of your property at the best rates.',
    common: commonDocuments,
    specific: ['Registry / Linked Registry', 'NA Layout', 'PR Card', 'Construction Permission'],
  },
  {
    icon: ArrowLeftRight,
    name: 'Balance Transfer',
    tagline: 'Transfer your existing loan to a lower interest rate and save on EMI.',
    common: commonDocuments,
    specific: [
      'Repayment Track Record (last 12 months)',
      'Foreclosure Letter / Statement of Account from existing lender',
      'Sanction Letter of existing loan',
      'Property Documents (if home loan transfer)',
      'NOC from existing lender (post-approval)',
    ],
  },
  {
    icon: Award,
    name: 'Professional Loan',
    tagline: 'Tailored financing for CAs, doctors, engineers & other professionals.',
    common: commonDocuments,
    specific: [
      'Professional Qualification Certificate (CA / Doctor / Engineer)',
      'Registration Certificate (MCI / ICAI / Bar Council)',
      'Clinic / Office Address Proof',
      'Business / Practice Proof (last 3 years)',
      'Profit & Loss Statement and Balance Sheet (last 2 years)',
    ],
  },
  {
    icon: GraduationCap,
    name: 'Education Loan',
    tagline: 'Fund higher studies in India or abroad with easy repayment options.',
    common: commonDocuments,
    specific: [
      'Admission Letter / Bonafide Certificate from institute',
      'Mark Sheets (10th, 12th, Graduation)',
      'Fee Structure / Cost of Education Breakup',
      'Income Proof of Co-applicant (Salary Slips / ITR last 2 years)',
      'Collateral Documents (if loan > ₹7.5 lakh)',
      'GRE / GMAT / TOEFL / IELTS Score Card (for abroad studies)',
    ],
  },
  {
    icon: Car,
    name: 'Vehicle Loan',
    tagline: 'Drive home your dream car or two-wheeler with flexible EMIs.',
    common: commonDocuments,
    specific: [
      'Quotation / Proforma Invoice from dealer',
      'Employment Proof / Offer Letter (salaried)',
      'Business Proof / GST Certificate (self-employed)',
      'Existing EMIs details (if any)',
      'Down Payment Proof',
    ],
  },
  {
    icon: CircleDollarSign,
    name: 'Working Capital Loan',
    tagline: 'Manage day-to-day operations, inventory & cash flow with ease.',
    common: commonDocuments,
    specific: [
      'Business Registration / GST Certificate / Shop Act License',
      'ITR for last 2-3 years with Computation',
      'Audited Financials (P&L, Balance Sheet) - last 2 years',
      'Stock & Debtors Statement',
      'Sales Tax / VAT Registration (if applicable)',
      'Business continuity proof (minimum 2 years)',
    ],
  },
  {
    icon: Building2,
    name: 'MSME Loan',
    tagline: 'Government-backed credit schemes for micro, small & medium enterprises.',
    common: commonDocuments,
    specific: [
      'Udyam Registration Certificate (MSME)',
      'GST Registration Certificate',
      'ITR for last 2-3 years',
      'Audited Financials (P&L, Balance Sheet) - last 2 years',
      'Investment & Turnover Proof (as per MSME classification)',
      'Business Plan / Project Report',
    ],
  },
];

const generalTips = [
  { icon: CheckCircle2, title: 'Keep Documents Handy', desc: 'Submit clear, self-attested photocopies along with originals for verification.' },
  { icon: FileText, title: 'Check Validity', desc: 'Ensure all identity & address proofs are government-issued and currently valid.' },
  { icon: CheckCircle2, title: 'Maintain CIBIL Score', desc: 'A credit score of 750+ improves approval chances and fetches better rates.' },
  { icon: FileText, title: 'Accurate Income Proof', desc: 'Income documents should match the loan amount eligibility requirement.' },
];

export default function RequiredDocuments() {
  const { ref, visible } = useReveal();

  return (
    <section className="relative min-h-screen pt-28 pb-20 lg:pt-32 lg:pb-28 bg-gradient-to-b from-white via-orange-50/40 to-white overflow-hidden">
      {/* Decorative graphics */}
      <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-orange-200/30 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-orange-100/50 blur-3xl" />
      <div className="absolute top-1/4 left-10 h-16 w-16 rounded-2xl rotate-12 bg-orange-300/20 ring-1 ring-orange-200/40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm font-semibold text-navy-500">
          <a href="/home" className="transition-colors hover:text-orange-600">Home</a>
          <ArrowRight className="h-4 w-4" />
          <span className="text-orange-600">Required Documents</span>
        </div>

        {/* Heading */}
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} mt-4 max-w-3xl`}>
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-300 bg-orange-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-orange-600">
            <FileText className="h-4 w-4" />
            Document Checklist
          </span>
          <h1 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-navy-900 text-balance">
            Required Documents for{' '}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">All Loan Types</span>
          </h1>
          <p className="mt-4 text-lg text-navy-600">
            A complete checklist of documents needed for each loan type. Keep these ready to ensure a smooth and
            quick approval process.
          </p>
        </div>

        {/* General tips */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {generalTips.map((tip, i) => (
            <div
              key={tip.title}
              className="flex items-start gap-3 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-orange-200/60 transition-all hover:shadow-lg hover:ring-orange-300"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                <tip.icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-sm font-bold text-navy-900">{tip.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-navy-500">{tip.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Loan document cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {loans.map((loan, i) => (
            <div
              key={loan.name}
              className="group relative overflow-hidden rounded-3xl bg-white p-6 lg:p-7 shadow-sm ring-1 ring-orange-200/60 transition-all hover:shadow-xl hover:shadow-orange-500/10 hover:ring-orange-300"
              style={{ transitionDelay: `${i * 25}ms` }}
            >
              <div className="absolute -top-10 -right-10 h-24 w-24 rounded-full bg-orange-50 transition-all group-hover:scale-150" />
              <div className="relative">
                {/* Header */}
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-orange-400 transition-colors group-hover:bg-orange-gradient group-hover:text-white">
                    <loan.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h2 className="font-display text-lg font-bold text-navy-900">{loan.name}</h2>
                    <p className="text-sm text-navy-500">{loan.tagline}</p>
                  </div>
                </div>

                {/* Common documents */}
                <div className="mt-5">
                  <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600">
                    <FileText className="h-4 w-4" />
                    Common Documents
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {loan.common.map((doc) => (
                      <li key={doc} className="flex items-start gap-2 text-sm text-navy-700">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" />
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Specific documents */}
                <div className="mt-5 border-t border-orange-100 pt-5">
                  <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600">
                    <FileText className="h-4 w-4" />
                    Loan-Specific Documents
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {loan.specific.map((doc) => (
                      <li key={doc} className="flex items-start gap-2 text-sm text-navy-700">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" />
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 overflow-hidden rounded-3xl bg-card-gradient p-8 lg:p-10 shadow-xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl font-bold text-white">Have questions about documents?</h3>
              <p className="mt-2 text-navy-200">Our team will guide you through the exact documents needed for your specific loan application — free consultation.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/home#enquiry"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-gradient px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-orange-500/30 transition-all hover:-translate-y-0.5"
              >
                Apply for Loan
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="/home"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-7 py-3.5 text-base font-bold text-white transition-all hover:bg-white/20 hover:-translate-y-0.5"
              >
                <ArrowLeft className="h-5 w-5" />
                Back to Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
