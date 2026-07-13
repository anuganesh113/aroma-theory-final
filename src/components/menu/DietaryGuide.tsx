import { motion } from 'framer-motion';

const legends = [
  { icon: "🌱", label: "Vegan" },
  { icon: "🥬", label: "Vegetarian" },
  { icon: "🌾", label: "Gluten Free" },
  { icon: "🥜", label: "Contains Nuts" },
  { icon: "🌶️", label: "Spicy" },
  { icon: "🧀", label: "Dairy" },
  { icon: "🐟", label: "Seafood" }
];

export function DietaryGuide() {
  return (
    <section className="py-10 md:py-16 bg-charcoal border-y border-white/10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 flex-wrap"
        >
          <span className="text-[10px] uppercase tracking-widest text-white/50 font-semibold md:border-r md:border-white/20 md:pr-16">
            Dietary Guide
          </span>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10">
            {legends.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-lg">{item.icon}</span>
                <span className="text-[11px] uppercase tracking-widest text-white/70">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
