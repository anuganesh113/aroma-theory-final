import { motion } from 'framer-motion';

const drinks = [
  {
    category: "Signature Cocktails",
    items: [
      { name: "Smoked Old Fashioned", price: "NPR 1,200", desc: "Bourbon, smoked maple, angostura bitters, orange peel." },
      { name: "Lavender Gimlet", price: "NPR 950", desc: "London dry gin, house-made lavender syrup, fresh lime." }
    ]
  },
  {
    category: "Premium Wines (Glass)",
    items: [
      { name: "2018 Cabernet Sauvignon, Napa", price: "NPR 2,200", desc: "Full-bodied, dark fruit, oak, structured tannins." },
      { name: "2020 Sancerre, Loire Valley", price: "NPR 1,800", desc: "Crisp acidity, citrus notes, mineral finish." }
    ]
  },
  {
    category: "Champagne & Sparkling",
    items: [
      { name: "Veuve Clicquot Brut", price: "NPR 4,500", desc: "Classic yellow label, crisp apple, brioche notes." },
      { name: "Prosecco Superiore DOCG", price: "NPR 1,200", desc: "Light, floral, delicate bubbles." }
    ]
  },
  {
    category: "Coffee & Tea",
    items: [
      { name: "Artisan Espresso", price: "NPR 350", desc: "Single-origin Ethiopian beans." },
      { name: "Silver Needle White Tea", price: "NPR 450", desc: "Delicate, sweet, lightly floral." }
    ]
  }
];

export function DrinksSection() {
  return (
    <section id="category-beverages" className="py-16 md:py-24 bg-charcoal text-cream scroll-mt-[88px] md:scroll-mt-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
        
        <div className="text-center mb-12 md:mb-20 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
             <div className="w-8 h-[1px] bg-gold" />
             <h2 className="text-eyebrow font-sans uppercase text-gold">From the Bar</h2>
             <div className="w-8 h-[1px] bg-gold" />
          </div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4 sm:mb-6 leading-[1.1] tracking-tight text-white">
            Beverages & Libations
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24">
          {drinks.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h4 className="font-serif text-xl sm:text-2xl text-gold mb-6 sm:mb-8 border-b border-white/10 pb-4">{section.category}</h4>
              <div className="flex flex-col gap-6 sm:gap-8">
                {section.items.map((item, i) => (
                  <div key={i} className="group">
                    <div className="flex justify-between items-start sm:items-baseline gap-3 mb-2">
                      <h5 className="font-serif text-lg sm:text-xl text-white group-hover:text-gold transition-colors min-w-0">{item.name}</h5>
                      <div className="hidden sm:block flex-1 border-b border-dashed border-white/20 relative -top-2 mx-2" />
                      <span className="font-serif text-base sm:text-lg text-white/80 shrink-0">{item.price}</span>
                    </div>
                    <p className="text-white/50 font-light text-sm max-w-sm">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
