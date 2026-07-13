import { motion } from 'framer-motion';

export function ChefRecommendations() {
  return (
    <section className="py-16 md:py-24 bg-charcoal text-cream overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[280px] sm:h-[400px] md:h-[500px] lg:h-[700px] rounded-2xl md:rounded-[32px] overflow-hidden group"
          >
            <img 
              src="https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=1200&h=1600" 
              alt="Chef's Signature Dry-Aged Duck" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-charcoal/20 mix-blend-multiply" />
            <div className="absolute top-6 left-6 bg-gold text-white text-[10px] uppercase tracking-widest px-4 py-2 rounded-full font-semibold">
              Limited Availability
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="flex items-center gap-4 mb-6">
               <div className="w-8 h-[1px] bg-gold" />
               <h2 className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold">Masterpiece</h2>
            </div>
            
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-4 leading-[1.1] tracking-tight text-white">
              Chef's Signature Creations
            </h3>
            
            <div className="mt-8 border-t border-white/10 pt-8">
              <h4 className="font-serif text-2xl sm:text-3xl mb-2 text-gold">Dry-Aged Crown Roast Duck</h4>
              <p className="text-white/60 font-light text-[15px] leading-relaxed mb-6">
                Aged for 14 days in-house to perfect tenderness. Served with a tart cherry and star anise reduction, alongside duck fat roasted fingerling potatoes and charred broccolini.
              </p>
              
              <div className="bg-white/5 border border-white/10 p-4 sm:p-6 rounded-2xl mb-6 sm:mb-8">
                <h5 className="text-[10px] uppercase tracking-widest text-gold mb-2 font-semibold">Chef's Notes</h5>
                <p className="text-white/70 text-sm font-light italic">
                  "The tartness of the cherries cuts directly through the rich, savory fat of the duck, creating a perfect balance on the palate."
                </p>
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-3 border-b border-white/10 pb-6 mb-6 sm:mb-8">
                <div>
                  <h5 className="text-[10px] uppercase tracking-widest text-gold mb-1 font-semibold">Wine Pairing</h5>
                  <p className="text-white/80 text-sm">2016 Domaine de la Romanée-Conti</p>
                </div>
                <div className="font-serif text-xl sm:text-2xl text-gold">
                  NPR 7,200
                </div>
              </div>
              
              <button className="text-[11px] uppercase tracking-[0.2em] font-medium text-white hover:text-gold transition-colors flex items-center gap-4 group">
                Reserve This Dish 
                <span className="block h-[1px] w-8 bg-white group-hover:bg-gold transition-colors" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
