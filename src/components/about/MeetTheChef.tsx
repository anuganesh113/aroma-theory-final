import { motion } from 'framer-motion';

export function MeetTheChef() {
  return (
    <section className="py-24 md:py-32 bg-charcoal text-cream overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Portrait */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] lg:h-[800px] w-full"
          >
            <div className="absolute inset-0 rounded-[32px] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=1200&h=1600" 
                alt="Executive Chef" 
                className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-charcoal/20 mix-blend-multiply" />
            </div>
            
            {/* Signature Floating */}
            <div className="absolute -bottom-8 -right-8 bg-gold p-8 rounded-full shadow-2xl hidden md:block">
              <img src="/signature.png" alt="Chef Signature" className="h-12 w-auto invert opacity-80" onError={(e) => e.currentTarget.style.display = 'none'} />
              <div className="font-serif text-3xl italic text-white/90">A. Laurent</div>
            </div>
          </motion.div>

          {/* Biography */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="flex items-center gap-4 mb-6">
               <div className="w-8 h-[1px] bg-gold" />
               <h2 className="text-eyebrow font-sans uppercase text-gold">Meet Our Chef</h2>
            </div>
            
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-4 leading-[1.1] tracking-tight">
              Arthur Laurent
            </h3>
            <p className="text-gold text-[11px] uppercase tracking-[0.2em] font-semibold mb-10">
              Executive Chef & Visionary
            </p>
            
            <div className="space-y-6 text-cream/70 font-light text-[15px] leading-relaxed mb-12">
              <p>
                With over two decades of experience traversing the culinary capitals of the world, Chef Arthur Laurent brings a profound respect for ingredients and an unparalleled mastery of modern gastronomy to Aroma Theory.
              </p>
              <p>
                Trained under Michelin-starred mentors in Paris and Tokyo, his specialties lie in blending classic French techniques with hyper-local, seasonal foraging. His philosophy revolves around coaxing the absolute purest flavors from every element on the plate.
              </p>
            </div>

            <blockquote className="border-l-2 border-gold pl-8 py-2 mb-12">
              <p className="text-2xl font-serif text-cream italic leading-relaxed text-balance">
                "Cooking is not simply preparing food—it is creating memories people carry forever."
              </p>
            </blockquote>

            {/* Accolades Grid */}
            <div className="grid grid-cols-2 gap-8 border-t border-cream/10 pt-10">
              <div>
                <h4 className="text-[9px] uppercase tracking-[0.2em] font-semibold text-gold mb-2">Signature Dish</h4>
                <p className="text-sm font-light text-cream/80">Smoked Venison Loin</p>
              </div>
              <div>
                <h4 className="text-[9px] uppercase tracking-[0.2em] font-semibold text-gold mb-2">Awards</h4>
                <p className="text-sm font-light text-cream/80">3x Michelin Star Recipe</p>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
