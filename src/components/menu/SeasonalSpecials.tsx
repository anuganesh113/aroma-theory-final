import { motion } from 'framer-motion';

export function SeasonalSpecials() {
  return (
    <section id="specials" className="py-16 md:py-24 bg-charcoal text-cream relative overflow-hidden scroll-mt-[88px] md:scroll-mt-20">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=2000" 
          alt="Seasonal Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/90 to-transparent" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-gold text-white text-[10px] uppercase tracking-widest px-4 py-2 rounded-full font-semibold mb-8">
              Limited Time Only
            </div>
            
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif mb-4 sm:mb-6 leading-[1.1] tracking-tight">
              Autumn Harvest <br /> Collection
            </h3>
            
            <p className="text-cream/70 font-light text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-10 max-w-lg">
              Embrace the crisp flavors of fall with our newly curated seasonal menu. Featuring roasted root vegetables, rich venison, and wild foraged truffles.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <a 
                href="#reservations" 
                className="bg-gold text-white px-8 py-4 rounded-full text-[11px] uppercase tracking-[0.2em] font-semibold hover:bg-gold-hover transition-colors text-center w-fit"
              >
                Reserve Now
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
