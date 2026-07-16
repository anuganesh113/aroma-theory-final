import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function MenuCTASection() {
  return (
    <section className="bg-charcoal pb-20 md:pb-32">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 text-cream rounded-2xl md:rounded-[40px] p-8 sm:p-12 md:p-16 lg:p-24 relative overflow-hidden text-center shadow-2xl"
        >
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" 
               style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }} />
          
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            
            <div className="flex items-center gap-4 mb-8">
               <div className="w-8 h-[1px] bg-gold" />
               <h2 className="text-eyebrow font-sans uppercase text-gold">Join Us</h2>
               <div className="w-8 h-[1px] bg-gold" />
            </div>

            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-6 sm:mb-8 leading-[1.1] tracking-tight">
              Ready for an Unforgettable<br className="hidden md:block"/>Dining Experience?
            </h3>
            
            <p className="text-cream/70 font-light text-sm sm:text-[15px] mb-8 sm:mb-12 leading-relaxed max-w-lg">
              Reserve your table today and indulge in exceptional cuisine crafted with passion.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center w-full sm:w-auto">
              <Link 
                to="/#reservations" 
                className="bg-gold text-white px-8 py-4 sm:px-10 sm:py-5 rounded-full text-[11px] uppercase tracking-[0.2em] font-semibold hover:bg-gold-hover transition-colors text-center shadow-lg shadow-gold/20"
              >
                Reserve a Table
              </Link>
              <Link 
                to="/contact" 
                className="bg-transparent border border-cream/30 text-cream px-8 py-4 sm:px-10 sm:py-5 rounded-full text-[11px] uppercase tracking-[0.2em] font-semibold hover:bg-cream hover:text-charcoal transition-colors text-center"
              >
                Contact Us
              </Link>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
