import { Link } from 'react-router-dom';
import { GraduationCap, BookOpen, Award, Users, BarChart3, Cpu, Megaphone, Banknote, Truck, ClipboardList, ShieldAlert, ArrowRight, Download, MessageCircle, CheckCircle2, Briefcase } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { courses } from '../data/courses';

const mbaSpecializations = [
  { icon: Megaphone, name: 'Marketing Management' },
  { icon: Banknote, name: 'Finance Management' },
  { icon: Users, name: 'Human Resource Management' },
  { icon: BarChart3, name: 'Operations Management' },
  { icon: Cpu, name: 'Information Technology' },
  { icon: Award, name: 'Business Analytics & AI' },
  { icon: Megaphone, name: 'Digital Marketing' },
  { icon: Banknote, name: 'Banking & Financial Services' },
  { icon: Truck, name: 'Supply Chain Management' },
  { icon: ClipboardList, name: 'Project Management' },
  { icon: ShieldAlert, name: 'Risk & Insurance Management' },
];

const additionalPrograms = ['Executive MBA', 'PGDM', 'Dual Degree Programs'];

export default function Education() {
  const { ref, visible } = useReveal();

  return (
    <section id="education" className="relative py-20 lg:py-28 bg-gradient-to-b from-white via-orange-50/40 to-white overflow-hidden">
      {/* Decorative orange graphics */}
      <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-orange-200/30 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-orange-100/50 blur-3xl" />
      <div className="absolute top-1/4 left-10 h-16 w-16 rounded-2xl rotate-12 bg-orange-300/20 ring-1 ring-orange-200/40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} mx-auto max-w-3xl text-center`}>
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-300 bg-orange-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-orange-600">
            <GraduationCap className="h-4 w-4" />
            Online MBA & Distance Education
          </span>
          <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-navy-900 text-balance">
            Upgrade Your Career with Online MBA & Distance Education Programs
          </h2>
          <p className="mt-4 text-lg font-semibold text-navy-600">
            UGC Approved | AICTE Approved Universities | Learn from Anywhere
          </p>

          {/* 100% Job Placement Banner */}
          <div className="mt-6 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-orange-100 to-orange-50 border border-orange-300 px-6 py-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-gradient text-white shadow-lg shadow-orange-500/30">
              <Briefcase className="h-6 w-6" />
            </span>
            <div className="text-left">
              <p className="font-display text-2xl font-extrabold text-orange-600">100% Job Placement</p>
              <p className="text-sm font-semibold text-navy-600">Placement assistance for all enrolled students across all programs</p>
            </div>
          </div>
        </div>

        {/* MBA Specializations */}
        <div id="courses" className="mt-14">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
            <h3 className="font-display text-xl font-bold text-orange-600">MBA Specializations</h3>
            <span className="inline-flex items-center gap-2 rounded-full bg-green-100 border border-green-300 px-4 py-1.5 text-xs font-bold text-green-600">
              <CheckCircle2 className="h-4 w-4" />
              100% Placement Assistance
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {courses.slice(0, 11).map((spec, i) => {
              const Icon = spec.icon;
              return (
                <Link
                  key={spec.slug}
                  to={`/courses/${spec.slug}`}
                  className="group relative flex items-center gap-3 rounded-2xl bg-white p-4 ring-1 ring-orange-200/60 shadow-sm transition-all hover:shadow-lg hover:ring-orange-400 hover:-translate-y-0.5"
                  style={{ transitionDelay: `${i * 25}ms` }}
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600 transition-colors group-hover:bg-orange-gradient group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-semibold text-navy-900">{spec.name.replace('MBA in ', '')}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Additional Programs */}
        <div className="mt-10">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
            <h3 className="font-display text-xl font-bold text-orange-600">Additional Programs</h3>
            <span className="inline-flex items-center gap-2 rounded-full bg-green-100 border border-green-300 px-4 py-1.5 text-xs font-bold text-green-600">
              <Briefcase className="h-4 w-4" />
              Guaranteed Career Support
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {courses.slice(11).map((prog) => {
              const Icon = prog.icon;
              return (
                <Link
                  key={prog.slug}
                  to={`/courses/${prog.slug}`}
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-navy-900 ring-1 ring-orange-200 shadow-sm transition-all hover:bg-orange-gradient hover:text-white hover:ring-orange-500 hover:-translate-y-0.5"
                >
                  <Icon className="h-4 w-4" />
                  {prog.name}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Accreditation + Placement badges */}
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          {[
            { icon: CheckCircle2, label: 'UGC Approved', color: 'text-orange-400' },
            { icon: CheckCircle2, label: 'AICTE Approved', color: 'text-orange-400' },
            { icon: CheckCircle2, label: 'NAAC A+ Universities', color: 'text-orange-400' },
            { icon: CheckCircle2, label: 'Learn from Anywhere', color: 'text-orange-400' },
            { icon: Briefcase, label: '100% Job Placement', color: 'text-green-400' },
          ].map((badge) => (
            <div key={badge.label} className="flex items-center gap-2 text-sm font-bold text-navy-700">
              <badge.icon className={`h-5 w-5 ${badge.color}`} />
              {badge.label}
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#enquiry"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-orange-gradient px-7 py-3.5 text-base font-bold text-white shadow-xl shadow-orange-500/30 transition-all hover:-translate-y-0.5"
          >
            Apply for Admission
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <Link
            to="/courses"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-white border-2 border-orange-300 px-7 py-3.5 text-base font-bold text-orange-600 shadow-lg transition-all hover:bg-orange-50 hover:-translate-y-0.5"
          >
            View All Courses with Fees
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="https://wa.me/918669041694"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-base font-bold text-white shadow-xl shadow-green-600/30 transition-all hover:bg-[#1eb457] hover:-translate-y-0.5"
          >
            <MessageCircle className="h-5 w-5" />
            Talk to Counsellor
          </a>
        </div>
      </div>
    </section>
  );
}
