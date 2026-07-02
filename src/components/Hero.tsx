import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-charcoal">
      {/* Background Image (Dish with smoke) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=2000&h=1200")',
        }}
      >
        {/* Soft dark overlay for readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center mt-12">
        
        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1] mb-6 drop-shadow-lg text-balance"
        >
          Where Every Dish Tells a<br/>Story Through Scent
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-sm md:text-base text-white/90 font-light max-w-2xl mb-12 leading-relaxed text-balance"
        >
          Modern fine dining built on the idea that scent and flavor are inseparable, a wild<br/>journey of deep senses interwoven to enhance your senses.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a 
            href="#reservations"
            className="w-full sm:w-auto px-10 py-4 bg-gold hover:bg-gold-hover text-white font-button font-medium text-[11px] uppercase tracking-[0.15em] transition-colors"
          >
            RESERVE A TABLE
          </a>
          <a 
            href="#menu"
            className="w-full sm:w-auto px-10 py-4 border border-white/50 hover:bg-white hover:text-charcoal text-white font-button font-medium text-[11px] uppercase tracking-[0.15em] transition-colors"
          >
            VIEW MENU
          </a>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-white/60" strokeWidth={2} />
        </motion.div>
      </motion.div>
    </section>
  );
}
