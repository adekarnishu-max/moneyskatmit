import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Clock, IndianRupee, ArrowRight, FileText, Search, CheckCircle2, Briefcase, PiggyBank, Percent, ShieldCheck } from 'lucide-react';
import { courses } from '../data/courses';
import { useReveal } from '../hooks/useReveal';

const categories = ['All', 'MBA', 'Executive PGDM', 'PGDM'] as const;

export default function Courses() {
  const { ref, visible } = useReveal();
  const [category, setCategory] = useState<(typeof categories)[number]>('All');
  const [query, setQuery] = useState('');

  const filtered = courses.filter((c) => {
    const matchesCat = category === 'All' || c.category === category;
    const matchesQuery = c.name.toLowerCase().includes(query.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <section className="relative min-h-screen pt-28 pb-20 lg:pt-32 lg:pb-28 bg-gradient-to-b from-white via-orange-50/40 to-white overflow-hidden">
      <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-orange-200/30 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-orange-100/50 blur-3xl" />
      <div className="absolute top-1/4 left-10 h-16 w-16 rounded-2xl rotate-12 bg-orange-300/20 ring-1 ring-orange-200/40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm font-semibold text-navy-500">
          <Link to="/home" className="transition-colors hover:text-orange-600">Home</Link>
          <ArrowRight className="h-4 w-4" />
          <span className="text-orange-600">Courses</span>
        </div>

        {/* MITSDE Banner */}
        <div className="mt-6 relative overflow-hidden rounded-3xl shadow-2xl ring-1 ring-orange-200/40 min-h-[340px] lg:min-h-[400px]">
          {/* Campus background image */}
          <img
            src="/MITSDE_Final_Broucher_page_1.jpg"
            alt="MIT School of Distance Education Campus"
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
          {/* Orange diagonal accent */}
          <div className="absolute -left-10 top-0 h-full w-56 bg-orange-500/20 skew-x-[-8deg] pointer-events-none" />

          <div className="relative flex flex-col h-full min-h-[340px] lg:min-h-[400px] p-8 lg:p-12">
            {/* Top: MIT logo + accreditation badges */}
            <div className="flex items-start justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <span className="font-display text-4xl font-black text-orange-500 leading-none">MIT</span>
                  <div className="ml-2 border-l-2 border-white/40 pl-3">
                    <p className="text-sm font-bold text-white leading-tight">School of</p>
                    <p className="text-sm font-bold text-white leading-tight">Distance Education</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="flex flex-col items-center rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-orange-300">ICDE Member</span>
                  <span className="text-[9px] text-white/70 mt-0.5">International Council for</span>
                  <span className="text-[9px] text-white/70">Open & Distance Education</span>
                </div>
                <div className="flex flex-col items-center rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-orange-300">AICTE Approved</span>
                  <span className="text-[9px] text-white/70 mt-0.5">All India Council for</span>
                  <span className="text-[9px] text-white/70">Technical Education</span>
                </div>
              </div>
            </div>

            {/* Center: POST GRADUATE PROGRAMS hexagon-style title */}
            <div className="flex-1 flex items-center mt-6">
              <div className="relative">
                {/* Hexagon-inspired background */}
                <div className="absolute -inset-4 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20" />
                <div className="relative px-6 py-4">
                  <p className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-none tracking-tight">
                    POST
                  </p>
                  <p className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-none tracking-tight">
                    GRADUATE
                  </p>
                  <p className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-orange-400 leading-none tracking-tight">
                    PROGRAMS
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom: Academic Partners */}
            <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="rounded-xl bg-orange-500 px-4 py-2">
                <p className="text-sm font-bold text-white tracking-wide">Academic Partners</p>
              </div>
              <div className="flex items-center gap-4">
                {/* KPMG */}
                <div className="flex items-center gap-1.5 rounded-xl bg-white px-4 py-2 shadow-lg">
                  <div className="flex gap-0.5">
                    {['bg-[#0079BE]','bg-[#0079BE]','bg-[#0079BE]','bg-[#0079BE]'].map((c, i) => (
                      <div key={i} className={`h-4 w-1.5 ${c} rounded-sm opacity-${i < 2 ? '100' : '70'}`} />
                    ))}
                  </div>
                  <span className="text-base font-black text-[#0079BE] tracking-tight">KPMG</span>
                </div>
                {/* EY */}
                <div className="flex flex-col items-start rounded-xl bg-white px-4 py-2 shadow-lg">
                  <span className="text-base font-black text-[#2E2E38] leading-none">
                    <span className="text-[#FFE600] font-black">EY</span>
                  </span>
                  <span className="text-[9px] text-[#2E2E38] font-semibold leading-tight mt-0.5">Shape the future</span>
                  <span className="text-[9px] text-[#2E2E38] font-semibold leading-tight">with confidence</span>
                </div>
              </div>
              {/* UGC badge */}
              <div className="ml-auto hidden sm:flex items-center gap-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2">
                <CheckCircle2 className="h-4 w-4 text-green-400" />
                <span className="text-xs font-bold text-white">UGC Approved</span>
              </div>
            </div>
          </div>
        </div>

        {/* Heading */}
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} mt-4 max-w-3xl`}>
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-300 bg-orange-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-orange-600">
            <GraduationCap className="h-4 w-4" />
            Online MBA & Distance Education
          </span>
          <h1 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-navy-900 text-balance">
            Explore{' '}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">All Courses</span>{' '}
            with Duration & Fees
          </h1>
          <p className="mt-4 text-lg text-navy-600">
            UGC & AICTE approved online MBA, executive, and postgraduate programs. Compare duration, fees, and
            specialisations to find the right course for your career.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-4 py-2 text-sm font-bold text-green-700 ring-1 ring-green-200">
              <Percent className="h-4 w-4" />
              Education Loan @ 0% No Cost EMI (6 & 9 months)
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-50 px-4 py-2 text-sm font-bold text-orange-600 ring-1 ring-orange-200">
              <ShieldCheck className="h-4 w-4" />
              Standard EMI also available (12, 15, 18 & 24 months)
            </span>
          </div>
        </div>

        {/* Search & filter bar */}
        <div className="mt-8 flex flex-col lg:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-navy-400" />
            <input
              type="text"
              placeholder="Search courses..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-full border border-orange-200 bg-white py-3 pl-12 pr-4 text-sm font-medium text-navy-900 shadow-sm outline-none transition-all focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`shrink-0 rounded-full px-5 py-3 text-sm font-bold transition-all ${
                  category === cat
                    ? 'bg-orange-gradient text-white shadow-lg shadow-orange-500/30'
                    : 'bg-white text-navy-600 ring-1 ring-orange-200 hover:ring-orange-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Course grid */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((course, i) => (
            <Link
              key={course.slug}
              to={`/courses/${course.slug}`}
              className="group relative overflow-hidden rounded-3xl bg-white p-6 shadow-sm ring-1 ring-orange-200/60 transition-all hover:shadow-xl hover:shadow-orange-500/10 hover:ring-orange-300 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 25}ms` }}
            >
              <div className="absolute -top-10 -right-10 h-24 w-24 rounded-full bg-orange-50 transition-all group-hover:scale-150" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-orange-400 transition-colors group-hover:bg-orange-gradient group-hover:text-white">
                    <course.icon className="h-6 w-6" />
                  </span>
                  <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-600">
                    {course.category}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg font-bold leading-snug text-navy-900">{course.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-500 line-clamp-2">{course.description}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {course.accreditation.map((a) => (
                    <span key={a} className="inline-flex items-center gap-1 rounded-md bg-green-50 px-2 py-0.5 text-xs font-semibold text-green-600">
                      <CheckCircle2 className="h-3 w-3" />
                      {a}
                    </span>
                  ))}
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2 border-t border-orange-100 pt-4">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 shrink-0 text-orange-500" />
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wide text-navy-400">Duration</p>
                      <p className="text-sm font-bold text-navy-900 truncate">{course.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <IndianRupee className="h-4 w-4 shrink-0 text-orange-500" />
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wide text-navy-400">Course Fee</p>
                      <p className="text-sm font-bold text-navy-900 truncate">{course.feeDisplay}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <PiggyBank className="h-4 w-4 shrink-0 text-orange-500" />
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wide text-navy-400">Lump Sum</p>
                      <p className="text-sm font-bold text-green-600 truncate">{course.feeStructure?.lumpsumAmount ?? course.feeDisplay}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-2 rounded-lg bg-green-50 px-3 py-2">
                  <Percent className="h-3.5 w-3.5 shrink-0 text-green-600" />
                  <span className="text-xs font-bold text-green-700">Education Loan Available — No Cost EMI @ 0%</span>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-sm font-bold text-orange-600">
                    View Details
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-navy-500">
                    <Briefcase className="h-3.5 w-3.5" />
                    {course.avgSalary}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-12 text-center">
            <FileText className="mx-auto h-12 w-12 text-navy-300" />
            <p className="mt-4 text-lg font-semibold text-navy-500">No courses found. Try a different search or filter.</p>
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 overflow-hidden rounded-3xl bg-card-gradient p-8 lg:p-10 shadow-xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl font-bold text-white">Need help choosing the right course?</h3>
              <p className="mt-2 text-navy-200">Our counsellors will help you find the perfect program based on your career goals — free consultation.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/home#enquiry"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-gradient px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-orange-500/30 transition-all hover:-translate-y-0.5"
              >
                Apply for Admission
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/home"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-7 py-3.5 text-base font-bold text-white transition-all hover:bg-white/20 hover:-translate-y-0.5"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
