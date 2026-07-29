import { useReveal } from '../hooks/useReveal';

const pillars = [
  {
    title: 'VISION',
    body: 'MoneySkat Financiero (I) Pvt. Ltd. is to be globally known group in the field of financial services for its virtues like values, honesty & reliability.',
  },
  {
    title: 'MISSION',
    body: "'Connect' is the word we are dedicated & devoted for. Getting connected for life time is the motto behind our each step.",
  },
  {
    title: 'PRINCIPLE',
    body: 'Go beyond customer expectations.',
  },
  {
    title: 'OUR INSPIRATION',
    body: 'Nature & her Limitless blessings.',
  },
];

export default function VisionMission() {
  const { ref, visible } = useReveal();

  return (
    <section className="relative py-16 lg:py-24 bg-white overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-orange-100/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-24 h-64 w-64 rounded-full bg-red-100/30 blur-3xl pointer-events-none" />

      <div
        ref={ref}
        className={`reveal ${visible ? 'is-visible' : ''} mx-auto max-w-5xl px-4 sm:px-6 lg:px-8`}
      >
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <img
            src="/Vision_Mission_(2)_logo.jpg"
            alt="MoneySkat Financiero (I) Pvt. Ltd."
            className="h-28 w-auto object-contain mb-5 drop-shadow-md"
          />
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            MoneySkat Financiero (I) Pvt. Ltd.
          </h2>
          <div className="mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-[#8B1A1A] to-orange-500" />
        </div>

        {/* Pillars grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="group relative overflow-hidden rounded-2xl bg-[#8B1A1A] p-7 shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-900/30"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Subtle inner glow */}
              <div className="absolute -top-8 -right-8 h-28 w-28 rounded-full bg-white/5 transition-all group-hover:scale-150" />
              <div className="relative">
                <h3 className="font-display text-xl font-extrabold uppercase tracking-widest text-white mb-3">
                  {p.title}
                </h3>
                <div className="h-0.5 w-10 rounded-full bg-orange-400 mb-4" />
                <p className="text-base leading-relaxed text-white/90">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
