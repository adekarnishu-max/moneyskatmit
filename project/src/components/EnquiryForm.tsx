import { useState, type FormEvent } from 'react';
import { Send, CircleCheck as CheckCircle2, CircleAlert as AlertCircle, Loader as Loader2, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useReveal } from '../hooks/useReveal';

const PHONE1 = '8669041694';
const PHONE2 = '9049565775';
const EMAIL = 'santosh.kadam@moneyskat.com';
const ADDRESS = 'Shop No. 217, Level 2, Raj Mall, Anand Nagar, Nanded, Dist. Nanded, Maharashtra - 431602';

const services = [
  'Personal Loan',
  'Business Loan',
  'Home Loan',
  'LAP',
  'Balance Transfer',
  'Professional Loan',
  'Education Loan',
  'Vehicle Loan',
  'Working Capital Loan',
  'MSME Loan',
  'Online MBA',
  'Distance Education',
  'Career Guidance',
  'Health Insurance',
  'Life Insurance',
  'Motor Insurance',
  'Home Insurance',
  'Child Insurance',
  'Travel Insurance',
  'Business Insurance',
  'Crop Insurance',
  'Critical Illness Insurance',
];

type Status = 'idle' | 'submitting' | 'success' | 'error';

function buildWaMessage(fields: {
  name: string;
  phone: string;
  email: string;
  city: string;
  service: string;
  loanAmount: string;
  courseInterested: string;
  message: string;
}) {
  const lines = [
    'Hello MoneySkat Financiero, I would like to enquire about your services.',
    '',
    `Name: ${fields.name || '-'}`,
    `Mobile: ${fields.phone || '-'}`,
    `Email: ${fields.email || '-'}`,
    `City: ${fields.city || '-'}`,
    `Service Required: ${fields.service || '-'}`,
  ];
  if (fields.loanAmount) lines.push(`Loan Amount: ${fields.loanAmount}`);
  if (fields.courseInterested) lines.push(`Course Interested: ${fields.courseInterested}`);
  if (fields.message) lines.push('', `Message: ${fields.message}`);
  return lines.join('\n');
}

export default function EnquiryForm() {
  const { ref, visible } = useReveal();
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [formValues, setFormValues] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    service: '',
    loan_amount: '',
    course_interested: '',
    message: '',
  });

  const waText = encodeURIComponent(buildWaMessage({
    name: formValues.name,
    phone: formValues.phone,
    email: formValues.email,
    city: formValues.city,
    service: formValues.service,
    loanAmount: formValues.loan_amount,
    courseInterested: formValues.course_interested,
    message: formValues.message,
  }));

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get('name') || '').trim();
    const phone = String(formData.get('phone') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const city = String(formData.get('city') || '').trim();
    const service = String(formData.get('service') || '');
    const loanAmount = String(formData.get('loan_amount') || '').trim();
    const courseInterested = String(formData.get('course_interested') || '').trim();
    const message = String(formData.get('message') || '').trim();

    if (!name || !phone || !email || !city || !service) {
      setStatus('error');
      setErrorMsg('Please fill in all required fields.');
      return;
    }

    const enquiry = {
      name,
      phone,
      email,
      city,
      service,
      loan_amount: loanAmount || null,
      course_interested: courseInterested || null,
      message: message || null,
    };

    const { error } = await supabase.from('contact_submissions').insert(enquiry);

    if (error) {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again or call us directly.');
      return;
    }

    // Fire-and-forget email notification to the team (don't block success on it)
    try {
      await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-enquiry-notification`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify(enquiry),
      });
    } catch {
      // Notification failure should not affect the user's submission success
    }

    setStatus('success');
    form.reset();
    setFormValues({
      name: '',
      phone: '',
      email: '',
      city: '',
      service: '',
      loan_amount: '',
      course_interested: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} grid lg:grid-cols-2 gap-12 lg:gap-16`}>
          {/* Left — info */}
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">Enquiry Form</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-navy-900 text-balance">
              Get Started Today
            </h2>
            <p className="mt-4 text-lg text-navy-600">
              Fill out the form and our team will contact you shortly. Whether it's a loan enquiry or an admission
              request — we're here to help.
            </p>

            <div className="mt-8 space-y-4">
              <a href={`tel:+91${PHONE1}`} className="group flex items-center gap-4 rounded-2xl bg-navy-50 p-4 ring-1 ring-navy-100 transition-all hover:ring-orange-300 hover:bg-orange-50">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-orange-400 transition-colors group-hover:bg-orange-gradient group-hover:text-white">
                  <Phone className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-navy-500">Call Us</p>
                  <p className="text-lg font-bold text-navy-900">{PHONE1}</p>
                </div>
              </a>
              <a href={`tel:+91${PHONE2}`} className="group flex items-center gap-4 rounded-2xl bg-navy-50 p-4 ring-1 ring-navy-100 transition-all hover:ring-orange-300 hover:bg-orange-50">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-orange-400 transition-colors group-hover:bg-orange-gradient group-hover:text-white">
                  <Phone className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-navy-500">Call Us</p>
                  <p className="text-lg font-bold text-navy-900">{PHONE2}</p>
                </div>
              </a>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href={`https://wa.me/91${PHONE1}?text=${waText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-2 rounded-2xl bg-[#25D366]/5 p-4 ring-1 ring-[#25D366]/30 transition-all hover:bg-[#25D366]/10 hover:ring-[#25D366]"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#25D366] text-white shadow-md transition-transform group-hover:scale-110">
                    <MessageCircle className="h-6 w-6" />
                  </span>
                  <div className="text-center">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#25D366]">WhatsApp</p>
                    <p className="text-sm font-bold text-navy-900">{PHONE1}</p>
                  </div>
                </a>
                <a
                  href={`https://wa.me/91${PHONE2}?text=${waText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-2 rounded-2xl bg-[#25D366]/5 p-4 ring-1 ring-[#25D366]/30 transition-all hover:bg-[#25D366]/10 hover:ring-[#25D366]"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#25D366] text-white shadow-md transition-transform group-hover:scale-110">
                    <MessageCircle className="h-6 w-6" />
                  </span>
                  <div className="text-center">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#25D366]">WhatsApp</p>
                    <p className="text-sm font-bold text-navy-900">{PHONE2}</p>
                  </div>
                </a>
              </div>
              <a href={`mailto:${EMAIL}`} className="group flex items-center gap-4 rounded-2xl bg-navy-50 p-4 ring-1 ring-navy-100 transition-all hover:ring-orange-300 hover:bg-orange-50">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-orange-400 transition-colors group-hover:bg-orange-gradient group-hover:text-white">
                  <Mail className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-navy-500">Email Us</p>
                  <p className="text-sm font-bold text-navy-900 break-all">{EMAIL}</p>
                </div>
              </a>
              <div className="flex items-start gap-4 rounded-2xl bg-navy-50 p-4 ring-1 ring-navy-100">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-orange-400">
                  <MapPin className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-navy-500">Location</p>
                  <p className="text-sm font-bold text-navy-900 leading-snug">{ADDRESS}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl bg-card-gradient p-6">
              <p className="font-display text-lg font-bold text-white">Free Consultation</p>
              <p className="mt-1 text-sm text-navy-200">
                No fees, no obligations. Just honest advice to help you make the right financial and career decisions.
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div id="enquiry" className="rounded-3xl bg-navy-50 p-6 sm:p-8 ring-1 ring-navy-100 shadow-lg scroll-mt-20">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                  <CheckCircle2 className="h-11 w-11" />
                </span>
                <h3 className="mt-6 font-display text-2xl font-bold text-navy-900">Thank You!</h3>
                <p className="mt-3 max-w-sm text-sm text-navy-600">
                  Thank you for contacting MoneySkat & MIT. Our team will contact you shortly.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 rounded-full border-2 border-orange-200 px-6 py-2.5 text-sm font-bold text-orange-700 transition-colors hover:bg-orange-50"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="font-display text-xl font-bold text-navy-900">Enquiry Form</h3>
                  <p className="mt-1 text-sm text-navy-500">Fields marked * are required.</p>
                </div>

                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-navy-600">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formValues.name}
                    onChange={handleFieldChange}
                    placeholder="Enter your full name"
                    className="mt-1.5 w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm font-medium text-navy-900 outline-none transition-all placeholder:text-navy-300 focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-navy-600">
                      Mobile Number *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formValues.phone}
                      onChange={handleFieldChange}
                      placeholder="+91 90000 00000"
                      className="mt-1.5 w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm font-medium text-navy-900 outline-none transition-all placeholder:text-navy-300 focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-navy-600">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formValues.email}
                      onChange={handleFieldChange}
                      placeholder="you@example.com"
                      className="mt-1.5 w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm font-medium text-navy-900 outline-none transition-all placeholder:text-navy-300 focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="city" className="block text-xs font-bold uppercase tracking-wider text-navy-600">
                      City *
                    </label>
                    <input
                      id="city"
                      name="city"
                      type="text"
                      required
                      value={formValues.city}
                      onChange={handleFieldChange}
                      placeholder="Your city"
                      className="mt-1.5 w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm font-medium text-navy-900 outline-none transition-all placeholder:text-navy-300 focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-navy-600">
                      Service Required *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formValues.service}
                      onChange={handleFieldChange}
                      className="mt-1.5 w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm font-medium text-navy-900 outline-none transition-all focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
                    >
                      <option value="" disabled>Select a service</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="loan_amount" className="block text-xs font-bold uppercase tracking-wider text-navy-600">
                      Loan Amount <span className="font-normal lowercase text-navy-400">(optional)</span>
                    </label>
                    <input
                      id="loan_amount"
                      name="loan_amount"
                      type="text"
                      value={formValues.loan_amount}
                      onChange={handleFieldChange}
                      placeholder="e.g. ₹5,00,000"
                      className="mt-1.5 w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm font-medium text-navy-900 outline-none transition-all placeholder:text-navy-300 focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
                    />
                  </div>
                  <div>
                    <label htmlFor="course_interested" className="block text-xs font-bold uppercase tracking-wider text-navy-600">
                      Course Interested In <span className="font-normal lowercase text-navy-400">(optional)</span>
                    </label>
                    <input
                      id="course_interested"
                      name="course_interested"
                      type="text"
                      value={formValues.course_interested}
                      onChange={handleFieldChange}
                      placeholder="e.g. Online MBA - Finance"
                      className="mt-1.5 w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm font-medium text-navy-900 outline-none transition-all placeholder:text-navy-300 focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-navy-600">
                    Message <span className="font-normal lowercase text-navy-400">(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formValues.message}
                    onChange={handleFieldChange}
                    placeholder="Tell us about your requirements..."
                    className="mt-1.5 w-full resize-none rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm font-medium text-navy-900 outline-none transition-all placeholder:text-navy-300 focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700 ring-1 ring-red-200">
                    <AlertCircle className="h-5 w-5 shrink-0" />
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-orange-gradient px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-orange-500/30 transition-all hover:-translate-y-0.5 hover:shadow-orange-500/50 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Enquiry
                      <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-navy-400">
                  By submitting, you agree to be contacted about your enquiry. We respect your privacy.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
