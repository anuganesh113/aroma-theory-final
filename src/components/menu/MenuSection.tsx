import { motion } from 'framer-motion';

export interface Dish {
  id: string;
  name: string;
  description: string;
  ingredients?: string;
  price: string;
  image?: string;
  badges?: { text: string; type: 'popular' | 'chef' | 'limited' }[];
  dietary?: ('vegan' | 'vegetarian' | 'gf' | 'nuts' | 'dairy')[];
  spiceLevel?: 1 | 2 | 3;
}

export function DishCard({ dish }: { dish: Dish }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="flex justify-between items-baseline mb-2 gap-4">
        <div className="flex items-center gap-3">
          <h5 className="font-serif text-xl text-white group-hover:text-gold transition-colors">{dish.name}</h5>
          
          {/* Badges and Dietary info as small inline tags */}
          <div className="flex items-center gap-1.5 mt-1">
            {dish.badges?.map((badge, i) => (
              <span key={i} className="text-[9px] uppercase tracking-wider text-gold border border-gold/30 px-1.5 py-0.5 rounded-sm">
                {badge.text}
              </span>
            ))}
            {dish.dietary?.map((diet, i) => (
              <span key={i} className="text-[9px] uppercase tracking-wider text-white/60 bg-white/10 px-1.5 py-0.5 rounded-sm">
                {diet}
              </span>
            ))}
            {dish.spiceLevel && (
              <span className="text-[10px]" title={`Spice Level: ${dish.spiceLevel}`}>
                {'🌶️'.repeat(dish.spiceLevel)}
              </span>
            )}
          </div>
        </div>
        <div className="flex-1 border-b border-dashed border-white/20 relative -top-2" />
        <span className="font-serif text-lg text-white/80 shrink-0">{dish.price}</span>
      </div>
      
      <p className="text-white/50 font-light text-sm max-w-2xl">
        {dish.description}
      </p>
    </motion.div>
  );
}

export function MenuSection({ id, title, description, dishes }: { id: string, title: string, description?: string, dishes: Dish[] }) {
  return (
    <section id={`category-${id}`} className="pt-24 scroll-mt-[100px]">
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-6">
           <div className="w-8 h-[1px] bg-gold" />
           <h2 className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold">{title}</h2>
        </div>
        <h3 className="text-4xl md:text-5xl font-serif mb-4 leading-[1.1] text-white">{title}</h3>
        {description && (
          <p className="text-white/60 font-light text-sm max-w-xl leading-relaxed">
            {description}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 lg:gap-x-24 gap-y-12">
        {dishes.map((dish) => (
          <DishCard key={dish.id} dish={dish} />
        ))}
      </div>
    </section>
  );
}

