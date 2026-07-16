import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function AboutHero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: 'easeOut' }}
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2000&h=1000" 
          alt="Restaurant interior" 
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-charcoal/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-transparent to-cream" />
      </div>

      <div className="relative z-10 text-center px-6 md:px-12 max-w-5xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
             <div className="w-12 h-[1px] bg-gold" />
             <h2 className="text-eyebrow font-sans uppercase text-gold">Our Heritage</h2>
             <div className="w-12 h-[1px] bg-gold" />
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-cream mb-8 leading-[1.1] tracking-tight text-balance">
            Every Great Meal Begins With a Story.
          </h1>
          
          <p className="text-cream/80 font-light text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            At Aroma Theory, every ingredient, every recipe, and every smile is thoughtfully crafted to create unforgettable dining experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/#reservations" 
              className="bg-gold text-white px-10 py-5 rounded-full text-[11px] uppercase tracking-[0.2em] font-semibold hover:bg-gold-hover hover:scale-105 transition-all text-center"
            >
              Reserve a Table
            </Link>
            <Link 
              to="/#menu" 
              className="bg-transparent border border-cream/50 text-cream px-10 py-5 rounded-full text-[11px] uppercase tracking-[0.2em] font-semibold hover:bg-cream hover:text-charcoal transition-colors text-center"
            >
              Explore Our Menu
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
