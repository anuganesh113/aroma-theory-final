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
  const hasTags = dish.badges?.length || dish.dietary?.length || dish.spiceLevel;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="mb-2">
        <div className="flex justify-between items-start gap-3 sm:items-baseline">
          <h5 className="font-serif text-lg sm:text-xl text-white group-hover:text-gold transition-colors min-w-0">
            {dish.name}
          </h5>
          <div className="hidden sm:block flex-1 border-b border-dashed border-white/20 relative -top-2 mx-2" />
          <span className="font-serif text-base sm:text-lg text-white/80 shrink-0">{dish.price}</span>
        </div>

        {hasTags ? (
          <div className="flex flex-wrap items-center gap-1.5 mt-2">
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
        ) : null}
      </div>
      
      <p className="text-white/50 font-light text-sm max-w-2xl">
        {dish.description}
      </p>
    </motion.div>
  );
}

export function MenuSection({ id, title, description, dishes }: { id: string, title: string, description?: string, dishes: Dish[] }) {
  return (
    <section id={`category-${id}`} className="pt-12 md:pt-24 scroll-mt-[88px] md:scroll-mt-[100px]">
      <div className="mb-8 md:mb-12">
        <div className="flex items-center gap-4 mb-6">
           <div className="w-8 h-[1px] bg-gold" />
           <h2 className="text-eyebrow font-sans uppercase text-gold">{title}</h2>
        </div>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4 leading-[1.1] text-white">{title}</h3>
        {description && (
          <p className="text-white/60 font-light text-sm max-w-xl leading-relaxed">
            {description}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 lg:gap-x-24 gap-y-8 md:gap-y-12">
        {dishes.map((dish) => (
          <DishCard key={dish.id} dish={dish} />
        ))}
      </div>
    </section>
  );
}

