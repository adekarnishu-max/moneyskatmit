import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingWhatsApp from './FloatingWhatsApp';

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  { src: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg', alt: 'University campus building', category: 'Campus' },
  { src: 'https://images.pexels.com/photos/256431/pexels-photo-256431.jpeg', alt: 'Students studying together', category: 'Students' },
  { src: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg', alt: 'Library reading hall', category: 'Library' },
  { src: 'https://images.pexels.com/photos/159744/books-bookstore-book-reading-159744.jpeg', alt: 'Books on shelf', category: 'Library' },
  { src: 'https://images.pexels.com/photos/207693/pexels-photo-207693.jpeg', alt: 'Lecture hall', category: 'Classroom' },
  { src: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg', alt: 'Students collaborating', category: 'Students' },
  { src: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg', alt: 'Group discussion', category: 'Students' },
  { src: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg', alt: 'Laptop study session', category: 'Students' },
  { src: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg', alt: 'Graduation ceremony', category: 'Events' },
  { src: 'https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg', alt: 'Graduates throwing caps', category: 'Events' },
  { src: 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg', alt: 'Campus walkway', category: 'Campus' },
  { src: 'https://images.pexels.com/photos/6147077/pexels-photo-6147077.jpeg', alt: 'Online learning', category: 'Learning' },
];

const categories = ['All', 'Campus', 'Students', 'Library', 'Classroom', 'Events', 'Learning'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
  const nextImage = () => setLightboxIndex((i) => (i === null ? null : (i + 1) % filtered.length));

  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url(https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <div className="relative mx-auto max-w-7xl px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Gallery</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
              A glimpse into campus life, learning spaces, and memorable moments at MIT School of Distance Education.
            </p>
          </div>
        </section>

        {/* Filter + Grid */}
        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((img, index) => (
              <button
                key={img.src}
                onClick={() => openLightbox(index)}
                className="group relative overflow-hidden rounded-xl bg-slate-100 shadow-sm transition-all duration-300 hover:shadow-xl"
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-sm font-medium text-white">{img.alt}</p>
                  <span className="rounded-full bg-white/20 p-2 backdrop-blur-sm">
                    <ZoomIn className="h-4 w-4 text-white" />
                  </span>
                </div>
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-slate-700 backdrop-blur-sm">
                  {img.category}
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* Lightbox */}
        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
              aria-label="Previous"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <figure className="max-h-[85vh] max-w-4xl" onClick={(e) => e.stopPropagation()}>
              <img
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].alt}
                className="max-h-[80vh] w-full rounded-lg object-contain"
              />
              <figcaption className="mt-3 text-center text-sm text-slate-300">
                {filtered[lightboxIndex].alt} · {lightboxIndex + 1} / {filtered.length}
              </figcaption>
            </figure>
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
              aria-label="Next"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        )}
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
