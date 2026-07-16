import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function ExperienceHero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 15, ease: 'easeOut' }}
          src="https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=2000&h=1200" 
          alt="Fine dining experience" 
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-charcoal/50 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/20 to-cream" />
      </div>

      <div className="relative z-10 text-center px-6 md:px-12 max-w-5xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
             <div className="w-12 h-[1px] bg-gold" />
             <h2 className="text-eyebrow font-sans uppercase text-gold">The Experience</h2>
             <div className="w-12 h-[1px] bg-gold" />
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-cream mb-8 leading-[1.1] tracking-tight text-balance">
            A Symphony for the Senses.
          </h1>
          
          <p className="text-cream/90 font-light text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            Immerse yourself in an extraordinary culinary journey where art meets gastronomy. Every detail is meticulously curated to awaken your palate and enchant your soul.
          </p>
          
          <div className="flex justify-center">
            <Link 
              to="/#reservations" 
              className="bg-gold text-white px-10 py-5 rounded-full text-[11px] uppercase tracking-[0.2em] font-semibold hover:bg-[#9A7F4B] hover:scale-105 transition-all text-center"
            >
              Begin Your Journey
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
