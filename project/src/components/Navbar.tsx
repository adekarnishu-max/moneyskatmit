import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';

const loanLinks = [
  { label: 'Home', href: '/home' },
  { label: 'Loans', href: '/home#loans' },
  { label: 'Insurance', href: '/home#insurance' },
  { label: 'MBA Courses', href: '/courses' },
  { label: 'Mutual Funds', href: '/smart-wealth' },
  { label: 'Partners', href: '/home#banking-partners' },
  { label: 'Documents', href: '/required-documents' },
  { label: 'About Us', href: '/home#about' },
  { label: 'Contact Us', href: '/home#contact' },
];

const courseLinks = [
  { label: 'Home', href: '/home' },
  { label: 'All Courses', href: '/courses' },
  { label: 'PGDM', href: '/courses/pgdm' },
  { label: 'Executive PGDM', href: '/courses/executive-pgdm' },
  { label: 'Dual Degree', href: '/courses/dual-degree-programs' },
  { label: 'Mutual Funds', href: '/smart-wealth' },
  { label: 'Loans', href: '/home#loans' },
  { label: 'Insurance', href: '/home#insurance' },
  { label: 'Enquire', href: '/home#enquiry' },
];

const PHONE1 = '8669041694';
const PHONE2 = '9049565775';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const location = useLocation();
  const isCoursePage = location.pathname.startsWith('/courses');
  const links = isCoursePage ? courseLinks : loanLinks;
  const applyLabel = isCoursePage ? 'Enquire Now' : 'Apply Now';
  const applyHref = isCoursePage ? '/home#enquiry' : '/home#enquiry';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [location.pathname]);

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy-900/95 backdrop-blur-md shadow-lg shadow-navy-950/20' : 'bg-transparent'
      }`}
    >
      {/* Top bar with phone numbers */}
      <div className={`hidden lg:block border-b border-white/10 transition-all duration-300 ${scrolled ? 'h-0 opacity-0 overflow-hidden' : 'opacity-100'}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-end gap-6 py-1.5 text-xs font-semibold text-white/80">
          <a href={`tel:+91${PHONE1}`} className="flex items-center gap-1.5 hover:text-orange-400 transition-colors">
            <Phone className="h-3.5 w-3.5" /> {PHONE1}
          </a>
          <span className="text-white/20">|</span>
          <a href={`tel:+91${PHONE2}`} className="flex items-center gap-1.5 hover:text-orange-400 transition-colors">
            <Phone className="h-3.5 w-3.5" /> {PHONE2}
          </a>
        </div>
      </div>

      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 lg:h-18 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/ChatGPT_Image_Jul_14,_2026,_03_04_20_PM copy.png"
              alt="MoneySkat & MIT"
              className="h-11 w-11 rounded-xl object-cover ring-2 ring-orange-400/50 transition-transform group-hover:scale-105"
            />
            <span className="flex flex-col leading-tight">
              <span className="font-display text-sm lg:text-base font-extrabold tracking-tight text-white">
                MoneySkat
              </span>
              <span className="text-[10px] lg:text-[11px] font-semibold uppercase tracking-[0.18em] text-orange-400">
                & MIT
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className="relative px-3.5 py-2 text-sm font-semibold text-white/85 rounded-lg transition-colors hover:text-white hover:bg-white/10"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to={applyHref}
              className="ml-2 inline-flex items-center gap-1.5 rounded-full bg-orange-gradient px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-orange-500/30 transition-all hover:shadow-orange-500/50 hover:-translate-y-0.5"
            >
              {applyLabel}
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg text-white hover:bg-white/10"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-[480px] pb-4' : 'max-h-0'}`}>
          <div className="flex flex-col gap-1 rounded-2xl bg-navy-800 p-3 shadow-2xl ring-1 ring-white/10">
            {links.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-2.5 text-sm font-semibold text-white/85 transition-colors hover:bg-white/10 hover:text-white"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-1 flex gap-2">
              <a
                href={`tel:+91${PHONE1}`}
                className="flex-1 rounded-xl bg-white/10 px-4 py-2.5 text-center text-sm font-bold text-white"
              >
                <Phone className="mr-1 inline h-4 w-4" /> {PHONE1}
              </a>
              <a
                href={`tel:+91${PHONE2}`}
                className="flex-1 rounded-xl bg-white/10 px-4 py-2.5 text-center text-sm font-bold text-white"
              >
                <Phone className="mr-1 inline h-4 w-4" /> {PHONE2}
              </a>
            </div>
            <Link
              to={applyHref}
              onClick={() => setOpen(false)}
              className="mt-1 rounded-xl bg-orange-gradient px-4 py-3 text-center text-sm font-bold text-white"
            >
              {applyLabel}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
