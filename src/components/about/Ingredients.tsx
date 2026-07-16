import { motion } from 'framer-motion';

const ingredients = [
  { name: "Farm Fresh Vegetables", img: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?auto=format&fit=crop&q=80&w=800" },
  { name: "Premium Meats", img: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=800" },
  { name: "Fresh Seafood", img: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&q=80&w=800" },
  { name: "Handcrafted Desserts", img: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&q=80&w=800" },
];

export function Ingredients() {
  return (
    <section className="py-24 md:py-32 bg-cream-dark text-charcoal">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <div className="flex items-center gap-4 mb-6">
               <div className="w-8 h-[1px] bg-gold" />
               <h2 className="text-eyebrow font-sans uppercase text-gold">Sourcing</h2>
            </div>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 leading-[1.1] tracking-tight">
              Purity in Every Bite
            </h3>
            <p className="text-charcoal/60 font-light text-[15px] leading-relaxed">
              We believe that the foundation of extraordinary cuisine lies in the unparalleled quality of its ingredients. By partnering exclusively with ethical farmers and sustainable purveyors, we ensure every dish is a celebration of nature's finest offerings.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ingredients.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="w-8 h-[1px] bg-gold mb-3 transition-all duration-300 group-hover:w-12" />
                <h4 className="text-cream font-serif text-2xl leading-tight">{item.name}</h4>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
