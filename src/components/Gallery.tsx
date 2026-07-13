import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const atmosphereImages = [
  'https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&q=80&w=800&h=1000', // Dessert
  'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800&h=1000', // Interior
  'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80&w=800&h=1000', // Wine pour
  'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=800&h=1000', // Plating
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-cream text-charcoal pt-24 md:pt-32 pb-0">
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-4">
             <div className="w-8 h-px bg-gold" />
             <h2 className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold">Gallery</h2>
          </div>
          <h3 className="text-display-section font-serif text-charcoal tracking-tight">
            Atmosphere
          </h3>
        </motion.div>

        <Link 
          to="/gallery"
          className="group flex items-center gap-4 border border-charcoal/20 px-8 py-4 rounded-full hover:border-charcoal hover:bg-charcoal hover:text-white transition-all duration-500 cursor-pointer"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-semibold">Explore all Gallery</span>
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Edge-to-edge grid with no gaps */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {atmosphereImages.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="relative aspect-[4/5] overflow-hidden group"
          >
            <img 
              src={src} 
              alt={`Atmosphere detail ${index + 1}`} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        ))}
      </div>
      
    </section>
  );
}
