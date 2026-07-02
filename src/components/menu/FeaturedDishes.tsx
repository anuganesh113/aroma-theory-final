import { motion } from 'framer-motion';

const featuredDishes = [
  {
    name: "Smoked Venison Loin",
    desc: "Foraged mushrooms, blackberry gastrique, and parsnip purée.",
    price: "NPR 4,800",
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800",
    badge: "Chef's Signature"
  },
  {
    name: "Butter Poached Lobster",
    desc: "Saffron risotto, charred asparagus, and vanilla-citrus emulsion.",
    price: "NPR 5,500",
    img: "https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&q=80&w=800",
    badge: "Most Popular"
  },
  {
    name: "Truffle Hand-Cut Tagliatelle",
    desc: "Fresh pasta, shaved black winter truffle, and 36-month Parmigiano.",
    price: "NPR 3,200",
    img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&q=80&w=800",
    badge: "Vegetarian"
  }
];

export function FeaturedDishes() {
  return (
    <section className="py-24 bg-charcoal text-cream">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
             <div className="w-8 h-[1px] bg-gold" />
             <h2 className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold">Highlights</h2>
             <div className="w-8 h-[1px] bg-gold" />
          </div>
          <h3 className="text-4xl md:text-5xl font-serif mb-6 leading-[1.1] tracking-tight text-white">
            Featured Signatures
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredDishes.map((dish, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden mb-6 shadow-lg shadow-black/20 group-hover:shadow-2xl group-hover:shadow-black/40 transition-all duration-500 group-hover:-translate-y-2">
                <img 
                  src={dish.img} 
                  alt={dish.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-charcoal/80 backdrop-blur-md text-gold text-[9px] uppercase tracking-widest px-3 py-1.5 rounded-full">
                  {dish.badge}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="px-2">
                <div className="flex justify-between items-start gap-4 mb-2">
                  <h4 className="font-serif text-2xl text-white group-hover:text-gold transition-colors">{dish.name}</h4>
                  <span className="font-serif text-lg text-gold">{dish.price}</span>
                </div>
                <p className="text-white/60 font-light text-sm leading-relaxed">
                  {dish.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
