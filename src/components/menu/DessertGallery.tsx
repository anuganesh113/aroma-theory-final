import { motion } from 'framer-motion';

const desserts = [
  { name: "Chocolate Lava Cake", img: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&q=80&w=800" },
  { name: "Classic Tiramisu", img: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&q=80&w=800" },
  { name: "Yuzu Crème Brûlée", img: "https://images.unsplash.com/photo-1472555694391-ee3ea633bdc4?auto=format&fit=crop&q=80&w=800" },
  { name: "Vanilla Bean Macarons", img: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&q=80&w=800" }
];

export function DessertGallery() {
  return (
    <section id="category-desserts" className="py-16 md:py-24 bg-charcoal text-cream scroll-mt-[88px] md:scroll-mt-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
        
        <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
             <div className="w-8 h-[1px] bg-gold" />
             <h2 className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold">Sweet Endings</h2>
             <div className="w-8 h-[1px] bg-gold" />
          </div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4 sm:mb-6 leading-[1.1] tracking-tight text-white">
            Dessert Showcase
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {desserts.map((dessert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative aspect-square md:aspect-[3/4] rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img src={dessert.img} alt={dessert.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="text-cream font-serif text-xl">{dessert.name}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
