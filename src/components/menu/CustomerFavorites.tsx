import { motion } from 'framer-motion';
import { Star, Award, Heart, TrendingUp } from 'lucide-react';

const favorites = [
  { icon: <TrendingUp size={24} />, title: "Most Ordered", desc: "Truffle Hand-Cut Tagliatelle" },
  { icon: <Star size={24} />, title: "Best Rated", desc: "Butter Poached Lobster" },
  { icon: <Award size={24} />, title: "Chef's Pick", desc: "Wagyu Beef Carpaccio" },
  { icon: <Heart size={24} />, title: "Guest Favorite", desc: "Chocolate Lava Cake" }
];

export function CustomerFavorites() {
  return (
    <section className="py-16 md:py-24 bg-charcoal text-cream">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
        
        <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-4 sm:mb-6 leading-[1.1] tracking-tight text-white">
            Loved by Our Guests
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {favorites.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/5 hover:border-gold/30 hover:shadow-xl hover:shadow-black/20 md:hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center"
            >
              <div className="text-gold mb-6 bg-gold/5 w-16 h-16 rounded-full flex items-center justify-center">
                {item.icon}
              </div>
              <h4 className="text-[10px] uppercase tracking-widest text-white/50 font-semibold mb-3">
                {item.title}
              </h4>
              <p className="font-serif text-xl text-white">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
