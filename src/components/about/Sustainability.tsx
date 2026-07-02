import { motion } from 'framer-motion';
import { Leaf, Recycle, MapPin, Zap } from 'lucide-react';

export function Sustainability() {
  return (
    <section className="py-24 md:py-32 bg-cream-dark text-charcoal overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
               <div className="w-8 h-[1px] bg-gold" />
               <h2 className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold">Commitment</h2>
            </div>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 leading-[1.1] tracking-tight">
              A Sustainable Future
            </h3>
            <p className="text-charcoal/70 font-light text-[15px] leading-relaxed mb-12">
              Luxury should never come at the expense of our planet. At Aroma Theory, we are deeply committed to sustainable practices that respect the earth, support our local communities, and ensure a better future for the next generation of culinary artists.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col gap-3">
                <Leaf className="text-gold" size={20} />
                <h4 className="text-sm font-semibold">Local Farmers</h4>
                <p className="text-xs font-light text-charcoal/60">Partnering directly with local agriculture to reduce carbon footprints.</p>
              </div>
              <div className="flex flex-col gap-3">
                <Recycle className="text-gold" size={20} />
                <h4 className="text-sm font-semibold">Zero Waste</h4>
                <p className="text-xs font-light text-charcoal/60">Implementing strict nose-to-tail and root-to-stem culinary practices.</p>
              </div>
              <div className="flex flex-col gap-3">
                <MapPin className="text-gold" size={20} />
                <h4 className="text-sm font-semibold">Responsible Sourcing</h4>
                <p className="text-xs font-light text-charcoal/60">Ensuring all seafood and meats are ethically and sustainably harvested.</p>
              </div>
              <div className="flex flex-col gap-3">
                <Zap className="text-gold" size={20} />
                <h4 className="text-sm font-semibold">Energy Efficient</h4>
                <p className="text-xs font-light text-charcoal/60">Operating a green kitchen powered by 100% renewable energy sources.</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[500px] lg:h-[700px] rounded-[32px] overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?auto=format&fit=crop&q=80&w=1200&h=1600" 
              alt="Sustainable farming" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-charcoal/10" />
          </motion.div>

        </div>

      </div>
    </section>
  );
}
