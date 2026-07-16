import { motion } from 'framer-motion';
import { Leaf, Sun, Anchor, Flame, Sparkles, Heart } from 'lucide-react';

const philosophies = [
  { icon: <Leaf size={24} strokeWidth={1} />, title: "Fresh Ingredients", desc: "Sourcing only the highest quality, farm-fresh ingredients daily." },
  { icon: <Sun size={24} strokeWidth={1} />, title: "Seasonal Menus", desc: "Adapting our offerings to respect and celebrate nature's cycles." },
  { icon: <Anchor size={24} strokeWidth={1} />, title: "Locally Sourced", desc: "Partnering closely with local purveyors and sustainable fisheries." },
  { icon: <Flame size={24} strokeWidth={1} />, title: "Traditional Techniques", desc: "Honoring time-tested culinary methods while pushing boundaries." },
  { icon: <Sparkles size={24} strokeWidth={1} />, title: "Modern Presentation", desc: "Plating every dish as a delicate, thoughtful work of modern art." },
  { icon: <Heart size={24} strokeWidth={1} />, title: "Respect for Every Guest", desc: "Delivering heartfelt hospitality to make every visit memorable." }
];

export function Philosophy() {
  return (
    <section className="py-24 md:py-32 bg-cream-dark text-charcoal">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-6"
          >
             <div className="w-8 h-[1px] bg-gold" />
             <h2 className="text-eyebrow font-sans uppercase text-gold">Our Beliefs</h2>
             <div className="w-8 h-[1px] bg-gold" />
          </motion.div>
          
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 leading-[1.1] tracking-tight"
          >
            Our Philosophy
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {philosophies.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/50 backdrop-blur-sm p-10 rounded-3xl border border-gold/10 hover:border-gold/30 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-cream flex items-center justify-center text-[#C8A96A] mb-8 group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>
              <h4 className="font-serif text-2xl mb-4 text-charcoal">{item.title}</h4>
              <p className="text-charcoal/60 font-light text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
