import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const images = [
  "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800", // Wide
  "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80&w=600", // Tall
  "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=600", // Tall
  "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800"  // Wide
];

export function GalleryPreview() {
  return (
    <section className="py-24 md:py-32 bg-cream text-charcoal">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-6">
               <div className="w-8 h-[1px] bg-gold" />
               <h2 className="text-eyebrow font-sans uppercase text-gold">Visuals</h2>
            </div>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] tracking-tight">
              A Glimpse Inside
            </h3>
          </div>
          <Link to="/gallery" className="text-[10px] uppercase tracking-[0.2em] font-semibold text-charcoal hover:text-gold transition-colors pb-2 border-b border-charcoal/20 hover:border-gold">
            View Full Gallery
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative aspect-video md:aspect-square lg:aspect-video rounded-3xl overflow-hidden group cursor-pointer"
            >
              <img src={images[0]} alt="Gallery 1" className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative aspect-square md:aspect-[3/4] rounded-3xl overflow-hidden group cursor-pointer"
            >
              <img src={images[1]} alt="Gallery 2" className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors" />
            </motion.div>
          </div>
          <div className="flex flex-col gap-6 md:pt-24">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative aspect-square md:aspect-[3/4] rounded-3xl overflow-hidden group cursor-pointer"
            >
              <img src={images[2]} alt="Gallery 3" className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative aspect-video md:aspect-square lg:aspect-video rounded-3xl overflow-hidden group cursor-pointer"
            >
              <img src={images[3]} alt="Gallery 4" className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors" />
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
