import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function CTASection() {
  return (
    <section className="bg-cream pb-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-charcoal text-cream rounded-[40px] p-16 md:p-24 relative overflow-hidden text-center shadow-2xl"
        >
          {/* Subtle bg texture in CTA */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" 
               style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }} />
          
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            
            <div className="flex items-center gap-4 mb-8">
               <div className="w-8 h-[1px] bg-gold" />
               <h2 className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold">Join Us</h2>
               <div className="w-8 h-[1px] bg-gold" />
            </div>

            <h3 className="text-4xl md:text-5xl lg:text-7xl font-serif mb-8 leading-[1.1] tracking-tight">
              Become Part of <br className="hidden md:block"/>Our Story.
            </h3>
            
            <p className="text-cream/70 font-light text-[15px] mb-12 leading-relaxed max-w-lg">
              We look forward to welcoming you for an unforgettable dining experience. Reserve your table today and let us take care of the rest.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center w-full sm:w-auto">
              <Link 
                to="/#reservations" 
                className="bg-gold text-white px-10 py-5 rounded-full text-[11px] uppercase tracking-[0.2em] font-semibold hover:bg-gold-hover transition-colors text-center shadow-lg shadow-gold/20"
              >
                Reserve a Table
              </Link>
              <Link 
                to="/#menu" 
                className="bg-transparent border border-cream/30 text-cream px-10 py-5 rounded-full text-[11px] uppercase tracking-[0.2em] font-semibold hover:bg-cream hover:text-charcoal transition-colors text-center"
              >
                View Our Menu
              </Link>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
