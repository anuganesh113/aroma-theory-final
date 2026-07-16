import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function MenuHero() {
  return (
    <section className="relative h-[70vh] sm:h-[80vh] md:h-[85vh] min-h-[420px] sm:min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: 'easeOut' }}
          src="https://images.unsplash.com/photo-1544025162-811114215f5a?auto=format&fit=crop&q=80&w=2000&h=1000" 
          alt="Culinary Collection" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-transparent to-charcoal" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 md:px-12 max-w-5xl mx-auto mt-16 sm:mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
             <div className="w-12 h-[1px] bg-gold" />
             <h2 className="text-eyebrow font-sans uppercase text-gold">The Menu</h2>
             <div className="w-12 h-[1px] bg-gold" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif text-cream mb-6 sm:mb-8 leading-[1.1] tracking-tight text-balance">
            Discover Our Culinary Collection
          </h1>
          
          <p className="text-cream/80 font-light text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed">
            Each dish at Aroma Theory is thoughtfully crafted using premium ingredients, refined techniques, and a passion for unforgettable flavors.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Link 
              to="/#reservations" 
              className="bg-gold text-white px-8 py-4 sm:px-10 sm:py-5 rounded-full text-[11px] uppercase tracking-[0.2em] font-semibold hover:bg-gold-hover hover:scale-105 transition-all text-center"
            >
              Reserve a Table
            </Link>
            <a 
              href="#specials" 
              className="bg-transparent border border-cream/50 text-cream px-8 py-4 sm:px-10 sm:py-5 rounded-full text-[11px] uppercase tracking-[0.2em] font-semibold hover:bg-cream hover:text-charcoal transition-colors text-center"
            >
              View Today's Specials
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
