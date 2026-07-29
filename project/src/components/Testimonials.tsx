import { useReveal } from '../hooks/useReveal';
import { Star, Quote, Landmark, GraduationCap, Compass } from 'lucide-react';

const testimonials = [
  {
    category: 'Loan Customer',
    icon: Landmark,
    name: 'Rajesh Patil',
    role: 'Home Loan, Nanded',
    text: 'MoneySkat & MIT got my home loan approved within a week at the best interest rate. The entire process was smooth and transparent. Highly recommended!',
    initials: 'RP',
  },
  {
    category: 'Loan Customer',
    icon: Landmark,
    name: 'Sneha Kulkarni',
    role: 'Business Loan, Nanded',
    text: 'I needed urgent working capital for my business. The team compared multiple banks and got me the best deal. Truly professional service.',
    initials: 'SK',
  },
  {
    category: 'MBA Student',
    icon: GraduationCap,
    name: 'Amit Deshmukh',
    role: 'Online MBA, Finance Management',
    text: 'Enrolled in the Online MBA program through MoneySkat & MIT. The course content is excellent and the certification is UGC approved. My career has taken a big leap.',
    initials: 'AD',
  },
  {
    category: 'MBA Student',
    icon: GraduationCap,
    name: 'Priya Sharma',
    role: 'Distance Education, Executive MBA',
    text: 'The admission process was completely hassle-free. The counsellors guided me through every step and helped me choose the right specialization.',
    initials: 'PS',
  },
  {
    category: 'Career Guidance',
    icon: Compass,
    name: 'Vikram Joshi',
    role: 'Career Counselling Client',
    text: 'I was confused about my career direction. The counselling session gave me clarity and confidence. I ended up enrolling in the perfect program for my goals.',
    initials: 'VJ',
  },
  {
    category: 'Career Guidance',
    icon: Compass,
    name: 'Anita Rao',
    role: 'PGDM Student',
    text: 'From selecting the right course to getting admission — the team supported me throughout. I am now studying at a top UGC-approved university.',
    initials: 'AR',
  },
];

export default function Testimonials() {
  const { ref, visible } = useReveal();

  return (
    <section id="testimonials" className="relative py-20 lg:py-28 bg-navy-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} mx-auto max-w-2xl text-center`}>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">Testimonials</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-navy-900 text-balance">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-navy-600">
            Real stories from loan customers, MBA students, and career guidance clients.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="group relative flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy-100 transition-all hover:-translate-y-1.5 hover:shadow-xl hover:shadow-orange-500/10 hover:ring-orange-200"
            >
              <Quote className="absolute top-5 right-5 h-8 w-8 text-navy-100 transition-colors group-hover:text-orange-200" />

              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy-900 text-orange-400">
                  <t.icon className="h-4 w-4" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600">{t.category}</span>
              </div>

              <div className="mt-3 flex items-center gap-1 text-orange-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-600">"{t.text}"</p>

              <div className="mt-5 flex items-center gap-3 border-t border-navy-50 pt-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-navy-700 to-navy-900 text-sm font-bold text-white">
                  {t.initials}
                </span>
                <div>
                  <p className="text-sm font-bold text-navy-900">{t.name}</p>
                  <p className="text-xs text-navy-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
