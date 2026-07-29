import {
  ShieldCheck, Zap, Building2, Compass, GraduationCap, Headset,
} from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const reasons = [
  { icon: ShieldCheck, title: 'Expert Financial Guidance', desc: 'Certified advisors who understand your goals and recommend the best financial solutions.' },
  { icon: Zap, title: 'Fast Loan Processing', desc: 'Quick approvals with minimal documentation — get your loan sanctioned faster.' },
  { icon: Building2, title: 'Multiple Lending Partners', desc: 'We compare offers from 15+ banks and NBFCs to get you the lowest interest rates.' },
  { icon: Compass, title: 'Career Counselling', desc: 'Personalised guidance to help you choose the right course and career path.' },
  { icon: GraduationCap, title: 'Online Admission Assistance', desc: 'End-to-end support for admissions to UGC & AICTE approved universities.' },
  { icon: Headset, title: 'End-to-End Support', desc: 'From enquiry to disbursal or admission — we are with you at every step.' },
];

export default function WhyChooseUs() {
  const { ref, visible } = useReveal();

  return (
    <section id="about" className="relative py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} mx-auto max-w-2xl text-center`}>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">Why Choose Us</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-navy-900 text-balance">
            The SG Advantage
          </h2>
          <p className="mt-4 text-lg text-navy-600">
            We combine financial expertise with education counselling — all under one roof, all designed to help
            you succeed.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className="group relative overflow-hidden rounded-2xl bg-navy-50 p-7 ring-1 ring-navy-100 transition-all hover:-translate-y-1.5 hover:bg-navy-900 hover:shadow-xl hover:shadow-navy-900/10"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-orange-100/50 transition-all group-hover:scale-150 group-hover:bg-orange-500/10" />
              <div className="relative">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-900 text-orange-400 transition-colors group-hover:bg-orange-gradient group-hover:text-white">
                  <r.icon className="h-7 w-7" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-navy-900 transition-colors group-hover:text-white">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600 transition-colors group-hover:text-navy-200">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
