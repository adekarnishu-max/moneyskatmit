import { useParams, Link, Navigate } from 'react-router-dom';
import { Clock, IndianRupee, CheckCircle2, ArrowRight, ArrowLeft, Briefcase, GraduationCap, Award, BookOpen, Users, Phone, MessageCircle, FileText, Building2, Calendar, BadgePercent, PiggyBank } from 'lucide-react';
import { courses } from '../data/courses';
import FeeStructureCard from './FeeStructureCard';

const PHONE1 = '8669041694';

export default function CourseDetail() {
  const { slug } = useParams<{ slug: string }>();
  const course = courses.find((c) => c.slug === slug);

  if (!course) return <Navigate to="/courses" replace />;

  const Icon = course.icon;

  return (
    <section className="relative min-h-screen pt-28 pb-20 lg:pt-32 lg:pb-28 bg-gradient-to-b from-white via-orange-50/40 to-white overflow-hidden">
      <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-orange-200/30 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-orange-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm font-semibold text-navy-500">
          <Link to="/home" className="transition-colors hover:text-orange-600">Home</Link>
          <ArrowRight className="h-4 w-4" />
          <Link to="/courses" className="transition-colors hover:text-orange-600">Courses</Link>
          <ArrowRight className="h-4 w-4" />
          <span className="text-orange-600 line-clamp-1">{course.name}</span>
        </div>

        {/* Hero card */}
        <div className="mt-6 overflow-hidden rounded-3xl bg-card-gradient p-8 lg:p-10 shadow-xl">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-orange-gradient text-white shadow-lg shadow-orange-500/30">
                  <Icon className="h-7 w-7" />
                </span>
                <div>
                  <span className="rounded-full bg-orange-500/20 px-3 py-1 text-xs font-bold text-orange-400">
                    {course.category}
                  </span>
                  <h1 className="mt-2 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
                    {course.name}
                  </h1>
                </div>
              </div>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-navy-100">{course.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {course.accreditation.map((a) => (
                  <span key={a} className="inline-flex items-center gap-1.5 rounded-full bg-green-500/20 px-3 py-1.5 text-xs font-bold text-green-400">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    {a}
                  </span>
                ))}
              </div>
            </div>
            <div className="lg:col-span-4">
              <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-sm">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="flex items-center gap-2 text-sm font-semibold text-navy-100">
                      <Clock className="h-5 w-5 text-orange-400" /> Duration
                    </span>
                    <span className="text-sm font-bold text-white">{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="flex items-center gap-2 text-sm font-semibold text-navy-100">
                      <IndianRupee className="h-5 w-5 text-orange-400" /> Course Fee
                    </span>
                    <span className="text-lg font-extrabold text-orange-400">{course.feeDisplay}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="flex items-center gap-2 text-sm font-semibold text-navy-100">
                      <Briefcase className="h-5 w-5 text-orange-400" /> Avg. Salary
                    </span>
                    <span className="text-sm font-bold text-white">{course.avgSalary}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm font-semibold text-navy-100">
                      <Building2 className="h-5 w-5 text-orange-400" /> University
                    </span>
                    <span className="text-xs font-bold text-white text-right max-w-[150px]">{course.university}</span>
                  </div>
                </div>
                <Link
                  to="/home#enquiry"
                  className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-orange-gradient px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/30 transition-all hover:-translate-y-0.5"
                >
                  Apply Now
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Content grid */}
        <div className="mt-10 grid lg:grid-cols-3 gap-6">
          {/* Left: highlights + syllabus */}
          <div className="lg:col-span-2 space-y-6">
            {/* Highlights */}
            <div className="rounded-3xl bg-white p-6 lg:p-8 shadow-sm ring-1 ring-orange-200/60">
              <h2 className="flex items-center gap-2 font-display text-xl font-bold text-navy-900">
                <Award className="h-5 w-5 text-orange-500" />
                Program Highlights
              </h2>
              <ul className="mt-4 grid sm:grid-cols-2 gap-3">
                {course.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-navy-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Syllabus */}
            <div className="rounded-3xl bg-white p-6 lg:p-8 shadow-sm ring-1 ring-orange-200/60">
              <h2 className="flex items-center gap-2 font-display text-xl font-bold text-navy-900">
                <BookOpen className="h-5 w-5 text-orange-500" />
                Syllabus & Curriculum
              </h2>
              <div className="mt-5 space-y-4">
                {course.syllabus.map((sem, i) => (
                  <div key={sem.semester} className="rounded-2xl border border-orange-100 overflow-hidden">
                    <div className="flex items-center gap-3 bg-orange-50 px-5 py-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-gradient text-sm font-bold text-white">
                        {i + 1}
                      </span>
                      <h3 className="text-sm font-bold text-navy-900">{sem.semester}</h3>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-2 p-4">
                      {sem.subjects.map((s) => (
                        <div key={s} className="flex items-center gap-2 text-sm text-navy-700">
                          <FileText className="h-4 w-4 text-orange-400" />
                          {s}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Career roles */}
            <div className="rounded-3xl bg-white p-6 lg:p-8 shadow-sm ring-1 ring-orange-200/60">
              <h2 className="flex items-center gap-2 font-display text-xl font-bold text-navy-900">
                <Briefcase className="h-5 w-5 text-orange-500" />
                Career Opportunities
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {course.careerRoles.map((role) => (
                  <span key={role} className="inline-flex items-center gap-1.5 rounded-full bg-navy-50 px-4 py-2 text-sm font-semibold text-navy-700 ring-1 ring-navy-100">
                    <Users className="h-3.5 w-3.5 text-orange-500" />
                    {role}
                  </span>
                ))}
              </div>
            </div>

            {/* Dual degree info */}
            {course.dualDegreeInfo && (
              <>
                {/* Tagline */}
                <div className="rounded-3xl bg-card-gradient p-6 lg:p-8 shadow-xl">
                  <h2 className="flex items-center gap-2 font-display text-xl font-bold text-white">
                    <Award className="h-5 w-5 text-orange-400" />
                    About the Dual Degree
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-navy-100">{course.dualDegreeInfo.tagline}</p>
                  <p className="mt-3 text-sm leading-relaxed text-navy-200">{course.dualDegreeInfo.courseStructure}</p>
                </div>

                {/* Partner universities */}
                <div className="rounded-3xl bg-white p-6 lg:p-8 shadow-sm ring-1 ring-orange-200/60">
                  <h2 className="flex items-center gap-2 font-display text-xl font-bold text-navy-900">
                    <Building2 className="h-5 w-5 text-orange-500" />
                    Partner Universities
                  </h2>
                  <div className="mt-5 space-y-5">
                    {course.dualDegreeInfo.partners.map((p) => (
                      <div key={p.name} className="rounded-2xl border border-orange-100 p-5">
                        <h3 className="text-sm font-bold text-navy-900">{p.name}</h3>
                        <ul className="mt-3 space-y-2">
                          {p.about.map((line) => (
                            <li key={line} className="flex items-start gap-2 text-sm text-navy-700">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" />
                              <span>{line}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* PGDM specializations */}
                <div className="rounded-3xl bg-white p-6 lg:p-8 shadow-sm ring-1 ring-orange-200/60">
                  <h2 className="flex items-center gap-2 font-display text-xl font-bold text-navy-900">
                    <BookOpen className="h-5 w-5 text-orange-500" />
                    PGDM Specialisations (MITSDE)
                  </h2>
                  <div className="mt-4 grid sm:grid-cols-2 gap-3">
                    {course.dualDegreeInfo.pgdmSpecializations.map((s) => (
                      <div key={s} className="flex items-center gap-2 rounded-xl bg-orange-50 px-4 py-3 text-sm font-semibold text-navy-700 ring-1 ring-orange-100">
                        <FileText className="h-4 w-4 text-orange-400" />
                        {s}
                      </div>
                    ))}
                  </div>
                </div>

                {/* EMBA specializations */}
                <div className="rounded-3xl bg-white p-6 lg:p-8 shadow-sm ring-1 ring-orange-200/60">
                  <h2 className="flex items-center gap-2 font-display text-xl font-bold text-navy-900">
                    <GraduationCap className="h-5 w-5 text-orange-500" />
                    Executive MBA Specialisations (Avantika)
                  </h2>
                  <div className="mt-4 space-y-3">
                    {course.dualDegreeInfo.embaSpecializations.map((s) => (
                      <div key={s.title} className="rounded-2xl border border-orange-100 p-4">
                        <h3 className="text-sm font-bold text-navy-900">{s.title}</h3>
                        <p className="mt-1 text-sm text-navy-600">{s.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Right: eligibility + contact */}
          <div className="space-y-6">
            {/* Eligibility */}
            <div className="rounded-3xl bg-white p-6 lg:p-8 shadow-sm ring-1 ring-orange-200/60">
              <h2 className="flex items-center gap-2 font-display text-xl font-bold text-navy-900">
                <GraduationCap className="h-5 w-5 text-orange-500" />
                Eligibility
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-navy-600">{course.eligibility}</p>
            </div>

            {/* Fee summary */}
            <div className="rounded-3xl bg-white p-6 lg:p-8 shadow-sm ring-1 ring-orange-200/60">
              <h2 className="flex items-center gap-2 font-display text-xl font-bold text-navy-900">
                <IndianRupee className="h-5 w-5 text-orange-500" />
                Fee Structure
              </h2>
              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between rounded-xl bg-orange-50 px-4 py-3">
                  <span className="text-sm font-semibold text-navy-600">Total Course Fee</span>
                  <span className="font-display text-xl font-extrabold text-orange-600">{course.feeDisplay}</span>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-navy-50 px-4 py-3">
                  <span className="text-sm font-semibold text-navy-600">Program Duration</span>
                  <span className="text-sm font-bold text-navy-900">{course.duration}</span>
                </div>
              </div>

              {course.feeStructure && (
                <>
                  {/* Installment plan */}
                  <div className="mt-5">
                    <h3 className="flex items-center gap-2 text-sm font-bold text-navy-900">
                      <Calendar className="h-4 w-4 text-orange-500" />
                      Installment Plan
                    </h3>
                    <div className="mt-3 space-y-2">
                      {course.feeStructure.installments.map((inst, idx) => (
                        <div key={inst.label} className="flex items-center justify-between rounded-xl border border-orange-100 px-4 py-3">
                          <div className="flex items-center gap-3">
                            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-gradient text-xs font-bold text-white">
                              {idx + 1}
                            </span>
                            <div>
                              <p className="text-sm font-bold text-navy-900">{inst.label}</p>
                              <p className="text-xs text-navy-500">{inst.timing}</p>
                            </div>
                          </div>
                          <span className="text-sm font-extrabold text-orange-600">{inst.amount}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-2 flex items-center gap-2 rounded-xl bg-green-50 px-4 py-2.5">
                      <BadgePercent className="h-4 w-4 text-green-600" />
                      <p className="text-xs font-semibold text-green-700">
                        Installment Discount: {course.feeStructure.installmentDiscount} off the total fee
                      </p>
                    </div>
                  </div>

                  {/* Lumpsum */}
                  <div className="mt-4 rounded-xl bg-navy-900 p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <PiggyBank className="h-5 w-5 text-orange-400" />
                        <span className="text-sm font-bold text-white">Lumpsum Payment</span>
                      </div>
                      <span className="font-display text-lg font-extrabold text-orange-400">{course.feeStructure.lumpsumAmount}</span>
                    </div>
                    <p className="mt-2 text-xs font-semibold text-green-400">
                      Save {course.feeStructure.lumpsumDiscount} with one-time full payment!
                    </p>
                  </div>

                  {/* Education Loan / No-Cost EMI */}
                  <div className="mt-4">
                    <h3 className="flex items-center gap-2 text-sm font-bold text-navy-900">
                      <IndianRupee className="h-4 w-4 text-orange-500" />
                      Education Loan Available
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {course.feeStructure.emiOptions.map((months) => (
                        <span key={months} className="inline-flex items-center gap-1 rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-700 ring-1 ring-green-200">
                          {months} Months
                        </span>
                      ))}
                    </div>
                    <p className="mt-3 text-xs font-semibold text-green-600">No Cost EMI @ 0% Interest for 6 & 9 months. Standard EMI options also available for 12, 15, 18 & 24 months.</p>
                  </div>
                </>
              )}

              {!course.feeStructure && (
                <p className="mt-3 text-xs text-navy-500">Education loan available — No Cost EMI @ 0% interest for 6 & 9 months, plus standard EMI for 12, 15, 18 & 24 months. Contact us for details.</p>
              )}
            </div>

            {/* Contact CTA */}
            <div className="rounded-3xl bg-card-gradient p-6 lg:p-8 shadow-xl">
              <h2 className="font-display text-lg font-bold text-white">Talk to a Counsellor</h2>
              <p className="mt-2 text-sm text-navy-200">Get personalised guidance on admission, fees, and career prospects.</p>
              <div className="mt-4 space-y-3">
                <Link
                  to="/home#enquiry"
                  className="flex items-center justify-center gap-2 rounded-xl bg-orange-gradient px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/30 transition-all hover:-translate-y-0.5"
                >
                  Apply for Admission
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={`https://wa.me/91${PHONE1}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-bold text-white shadow-lg transition-all hover:bg-[#1eb457] hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Us
                </a>
                <a
                  href={`tel:+91${PHONE1}`}
                  className="flex items-center justify-center gap-2 rounded-xl bg-white/10 border border-white/20 px-5 py-3 text-sm font-bold text-white transition-all hover:bg-white/20"
                >
                  <Phone className="h-4 w-4" />
                  {PHONE1}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Fee Structure Card */}
        {course.feeStructure && (
          <div className="mt-10">
            <FeeStructureCard
              feeStructure={course.feeStructure}
              duration={course.duration}
              badge={course.badge}
              brochureUrl={course.brochureUrl}
            />
          </div>
        )}

        {/* Bottom nav */}
        <div className="mt-10 flex items-center justify-between">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 rounded-full bg-white border-2 border-orange-300 px-6 py-3 text-sm font-bold text-orange-600 shadow-sm transition-all hover:bg-orange-50 hover:-translate-y-0.5"
          >
            <ArrowLeft className="h-4 w-4" />
            All Courses
          </Link>
          <Link
            to="/home#enquiry"
            className="inline-flex items-center gap-2 rounded-full bg-orange-gradient px-6 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/30 transition-all hover:-translate-y-0.5"
          >
            Enquire Now
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
