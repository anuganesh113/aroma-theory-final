import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../../utils/cn';

const categories = ['All', 'Cuisine', 'Interior', 'Events'];

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1600', category: 'Cuisine', span: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?auto=format&fit=crop&q=80&w=1600', category: 'Cuisine', span: 'col-span-1 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=1600', category: 'Interior', span: 'col-span-2 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=1600', category: 'Cuisine', span: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1600', category: 'Interior', span: 'col-span-1 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&q=80&w=1600', category: 'Events', span: 'col-span-2 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1600', category: 'Interior', span: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=1600', category: 'Cuisine', span: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1600', category: 'Events', span: 'col-span-1 row-span-1' },
];

export function MasonryGrid() {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredImages = galleryImages.filter(
    (img) => activeTab === 'All' || img.category === activeTab
  );

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedIndex]);

  // Keydown listener for escape and arrow keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowRight') handleNext(e as unknown as React.MouseEvent);
      if (e.key === 'ArrowLeft') handlePrev(e as unknown as React.MouseEvent);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % filteredImages.length);
    }
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? filteredImages.length - 1 : selectedIndex - 1);
    }
  };

  const closeLightbox = () => setSelectedIndex(null);

  return (
    <>
      <section className="py-24 bg-cream min-h-screen">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveTab(cat);
                  setSelectedIndex(null);
                }}
                className={cn(
                  "text-[11px] uppercase tracking-widest font-semibold pb-2 border-b-2 transition-all duration-300",
                  activeTab === cat 
                    ? "border-gold text-charcoal" 
                    : "border-transparent text-charcoal/40 hover:text-charcoal hover:border-charcoal/20"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Dynamic Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px]"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((img, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={img.src}
                  onClick={() => setSelectedIndex(index)}
                  className={cn(
                    "relative group overflow-hidden rounded-xl bg-charcoal/5 cursor-pointer",
                    activeTab === 'All' ? img.span : "col-span-1 row-span-1 sm:col-span-2 lg:col-span-1 lg:row-span-1"
                  )}
                >
                  <img 
                    src={img.src} 
                    alt={img.category} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-xs uppercase tracking-widest font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      View
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/95 backdrop-blur-sm p-4 md:p-12"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50 p-2"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <X size={32} />
            </button>

            {/* Navigation Buttons (Desktop) */}
            <button 
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-4 hidden md:block z-50"
              onClick={handlePrev}
              aria-label="Previous image"
            >
              <ChevronLeft size={48} strokeWidth={1} />
            </button>

            <button 
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-4 hidden md:block z-50"
              onClick={handleNext}
              aria-label="Next image"
            >
              <ChevronRight size={48} strokeWidth={1} />
            </button>

            {/* Main Image Container */}
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-6xl w-full h-full flex flex-col items-center justify-center pointer-events-none"
            >
              <img 
                src={filteredImages[selectedIndex].src} 
                alt="Enlarged gallery view" 
                className="max-w-full max-h-[85vh] object-contain rounded-sm shadow-2xl pointer-events-auto"
                onClick={(e) => e.stopPropagation()}
              />
              
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 mt-6 pointer-events-auto bg-charcoal/50 px-4 py-2 rounded-full backdrop-blur-md">
                <button className="md:hidden text-white/70 hover:text-white p-1" onClick={handlePrev}>
                  <ChevronLeft size={24} />
                </button>
                <p className="text-gold text-[10px] uppercase tracking-widest font-semibold text-center whitespace-nowrap">
                  {filteredImages[selectedIndex].category} &mdash; {selectedIndex + 1} / {filteredImages.length}
                </p>
                <button className="md:hidden text-white/70 hover:text-white p-1" onClick={handleNext}>
                  <ChevronRight size={24} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
