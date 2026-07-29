import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const PHONE1 = '8669041694';
const PHONE2 = '9049565775';

export default function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="flex flex-col gap-2 animate-fade-up">
          <a
            href={`https://wa.me/91${PHONE1}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-full bg-white px-5 py-3 shadow-xl ring-1 ring-navy-100 transition-all hover:scale-105"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-white">
              <MessageCircle className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <p className="text-xs font-semibold text-navy-500">WhatsApp</p>
              <p className="text-sm font-bold text-navy-900">{PHONE1}</p>
            </div>
          </a>
          <a
            href={`https://wa.me/91${PHONE2}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-full bg-white px-5 py-3 shadow-xl ring-1 ring-navy-100 transition-all hover:scale-105"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-white">
              <MessageCircle className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <p className="text-xs font-semibold text-navy-500">WhatsApp</p>
              <p className="text-sm font-bold text-navy-900">{PHONE2}</p>
            </div>
          </a>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-green-600/40 transition-all hover:scale-110"
        aria-label="Open WhatsApp"
      >
        {!open && <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring" />}
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-7 w-7" />}
      </button>
    </div>
  );
}
