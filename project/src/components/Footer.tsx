import { Phone, MapPin, Facebook, Instagram, Linkedin, ArrowUp, MessageCircle, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const PHONE1 = '8669041694';
const PHONE2 = '9049565775';
const EMAIL = 'santosh.kadam@moneyskat.com';
const ADDRESS = 'Shop No. 217, Level 2, Raj Mall, Anand Nagar, Nanded, Dist. Nanded, Maharashtra - 431602';

export default function Footer() {
  const location = useLocation();
  const isCoursePage = location.pathname.startsWith('/courses');

  const quickLinks = isCoursePage
    ? [
        { label: 'Home', href: '/home' },
        { label: 'All Courses', href: '/courses' },
        { label: 'PGDM', href: '/courses/pgdm' },
        { label: 'Executive PGDM', href: '/courses/executive-pgdm' },
        { label: 'Dual Degree', href: '/courses/dual-degree-programs' },
        { label: 'Enquire', href: '/home#enquiry' },
      ]
    : [
        { label: 'Home', href: '/home' },
        { label: 'Loans', href: '/home#loans' },
        { label: 'Insurance', href: '/home#insurance' },
        { label: 'MBA Courses', href: '/courses' },
        { label: 'Mutual Funds', href: '/smart-wealth' },
        { label: 'Partners', href: '/home#banking-partners' },
        { label: 'Enquire', href: '/home#enquiry' },
      ];

  const serviceLinks = isCoursePage
    ? [
        { label: 'All Courses', href: '/courses' },
        { label: 'PGDM', href: '/courses/pgdm' },
        { label: 'Executive PGDM', href: '/courses/executive-pgdm' },
        { label: 'Dual Degree', href: '/courses/dual-degree-programs' },
        { label: 'MBA Marketing', href: '/courses/mba-marketing-management' },
        { label: 'MBA Finance', href: '/courses/mba-finance-management' },
        { label: 'Enquire Now', href: '/home#enquiry' },
      ]
    : [
        { label: 'Loan Services', href: '/home#loans' },
        { label: 'Insurance', href: '/home#insurance' },
        { label: 'Premium Calculator', href: '/home#premium-calculator' },
        { label: 'MBA Courses', href: '/courses' },
        { label: 'Mutual Funds', href: '/smart-wealth' },
        { label: 'Business Partners', href: '/home#banking-partners' },
        { label: 'Required Documents', href: '/required-documents' },
      ];

  const ctaLabel = isCoursePage ? 'Enquire Now' : 'Apply Now';
  const ctaHref = isCoursePage ? '/home#enquiry' : '/home#enquiry';

  return (
    <footer className="bg-navy-950 text-navy-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <img
                src="/ChatGPT_Image_Jul_14,_2026,_03_04_20_PM copy.png"
                alt="MoneySkat & MIT"
                className="h-12 w-12 rounded-xl object-cover ring-2 ring-orange-400/50"
              />
              <div className="leading-tight">
                <p className="font-display text-base font-extrabold text-white">MoneySkat & MIT</p>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-orange-500">Loans | Insurance | MBA | Mutual Funds</p>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Your one-stop solution for loans, online education, and career growth. We help you finance your dreams
              and build your future — all under one roof.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={`https://wa.me/91${PHONE1}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-navy-300 ring-1 ring-white/10 transition-all hover:bg-[#25D366] hover:text-white hover:ring-[#25D366]"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-navy-300 ring-1 ring-white/10 transition-all hover:bg-orange-gradient hover:text-white hover:ring-orange-500"
                  aria-label="Social link"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-sm transition-colors hover:text-orange-400">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">Services</h4>
            <ul className="mt-4 space-y-2.5">
              {serviceLinks.map((s) => (
                <li key={s.label}>
                  <Link to={s.href} className="text-sm transition-colors hover:text-orange-400">{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">Contact</h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-orange-500" />
                <a href={`tel:+91${PHONE1}`} className="text-sm font-bold text-white hover:text-orange-400">{PHONE1}</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-orange-500" />
                <a href={`tel:+91${PHONE2}`} className="text-sm font-bold text-white hover:text-orange-400">{PHONE2}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-orange-500" />
                <a href={`mailto:${EMAIL}`} className="text-sm font-bold text-white hover:text-orange-400 break-all">{EMAIL}</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" />
                <span className="text-sm leading-snug">{ADDRESS}</span>
              </li>
            </ul>
            <Link
              to={ctaHref}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-orange-gradient px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-orange-500/30 transition-all hover:-translate-y-0.5"
            >
              {ctaLabel}
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-navy-500">
            &copy; {new Date().getFullYear()} MoneySkat & MIT. All rights reserved.
          </p>
          <p className="text-xs text-navy-500">
            Founded by <span className="font-semibold text-navy-300">Santosh G Kadam</span>
          </p>
        </div>
      </div>

      {/* Scroll to top */}
      <a
        href="#home"
        className="fixed bottom-6 left-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-navy-700 text-white shadow-lg transition-all hover:bg-navy-600 hover:-translate-y-1"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </a>
    </footer>
  );
}
