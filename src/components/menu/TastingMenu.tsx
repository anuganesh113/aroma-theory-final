import { motion } from 'framer-motion';
import { Wine } from 'lucide-react';

const menus = [
  {
    title: "3 Course Experience",
    desc: "An exquisite introduction to our culinary philosophy.",
    price: "NPR 6,500",
    pairing: "NPR 3,500"
  },
  {
    title: "5 Course Experience",
    desc: "A deeper dive into seasonal ingredients and complex flavors.",
    price: "NPR 9,500",
    pairing: "NPR 5,500",
    highlight: true
  },
  {
    title: "7 Course Experience",
    desc: "The ultimate gastronomic journey curated personally by our Executive Chef.",
    price: "NPR 14,000",
    pairing: "NPR 8,000"
  }
];

export function TastingMenu() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-charcoal text-cream overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-12">
        
        <div className="text-center mb-12 md:mb-20 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
             <div className="w-8 h-[1px] bg-gold" />
             <h2 className="text-eyebrow font-sans uppercase text-gold">The Journey</h2>
             <div className="w-8 h-[1px] bg-gold" />
          </div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-4 sm:mb-6 leading-[1.1] tracking-tight text-white">
            Tasting Menus
          </h3>
          <p className="text-white/60 font-light text-[15px] leading-relaxed">
            Allow us to take you on a curated exploration of taste, texture, and aroma.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {menus.map((menu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-[32px] border transition-all duration-300 relative flex flex-col h-full
                ${menu.highlight 
                  ? 'bg-white/10 text-cream border-gold/50 shadow-2xl md:scale-105 z-10' 
                  : 'bg-white/5 text-white border-white/10 hover:border-gold/30'}`}
            >
              {menu.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold text-white text-[9px] uppercase tracking-widest px-4 py-1.5 rounded-full font-semibold">
                  Most Popular
                </div>
              )}
              
              <h4 className={`font-serif text-2xl sm:text-3xl mb-3 sm:mb-4 ${menu.highlight ? 'text-cream' : 'text-white'}`}>
                {menu.title}
              </h4>
              <p className={`font-light text-sm mb-10 flex-grow ${menu.highlight ? 'text-cream/70' : 'text-white/60'}`}>
                {menu.desc}
              </p>
              
              <div className="mb-8">
                <div className={`font-serif text-3xl mb-1 ${menu.highlight ? 'text-gold' : 'text-white'}`}>
                  {menu.price}
                </div>
                <div className={`text-[10px] uppercase tracking-widest ${menu.highlight ? 'text-cream/50' : 'text-white/40'}`}>
                  Per Person
                </div>
              </div>

              <div className={`border-t pt-6 ${menu.highlight ? 'border-cream/10' : 'border-white/10'}`}>
                <div className="flex items-center gap-3 mb-2">
                  <Wine size={16} className={menu.highlight ? 'text-gold' : 'text-white/60'} />
                  <span className={`text-sm font-medium ${menu.highlight ? 'text-cream' : 'text-white'}`}>Wine Pairing</span>
                </div>
                <div className={`font-serif text-xl ${menu.highlight ? 'text-gold/80' : 'text-white/80'}`}>
                  + {menu.pairing}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
