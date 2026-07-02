import { motion } from 'framer-motion';
import { Sparkles, Utensils, Star, Wine, GlassWater, HeartHandshake } from 'lucide-react';

const reasons = [
  { icon: <Utensils size={24} />, title: "Exceptional Cuisine", desc: "A masterful blend of classic techniques and modern innovation." },
  { icon: <Star size={24} />, title: "Master Chefs", desc: "Our kitchen is led by Michelin-trained culinary visionaries." },
  { icon: <Sparkles size={24} />, title: "Luxury Ambience", desc: "Every detail of our interior is designed to create a romantic, elegant atmosphere." },
  { icon: <HeartHandshake size={24} />, title: "Outstanding Hospitality", desc: "Anticipatory service that makes every guest feel truly special." },
  { icon: <GlassWater size={24} />, title: "Private Events", desc: "Bespoke menus and dedicated staff for your most important celebrations." },
  { icon: <Wine size={24} />, title: "Wine Selection", desc: "An award-winning cellar featuring rare and biodynamic vintages." }
];

export function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-cream text-charcoal">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
             <div className="w-8 h-[1px] bg-gold" />
             <h2 className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold">The Difference</h2>
             <div className="w-8 h-[1px] bg-gold" />
          </div>
          <h3 className="text-4xl md:text-5xl font-serif mb-6 leading-[1.1] tracking-tight">
            Why Choose Aroma Theory
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-6"
            >
              <div className="text-gold shrink-0 mt-1">
                {item.icon}
              </div>
              <div>
                <h4 className="text-xl font-serif mb-3">{item.title}</h4>
                <p className="text-charcoal/60 font-light text-[14px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
