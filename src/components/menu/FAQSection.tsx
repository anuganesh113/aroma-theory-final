import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../utils/cn';

const faqs = [
  { q: "Can dishes be customized for allergies?", a: "Yes, our culinary team is highly accommodating to all dietary restrictions. Please inform us of any allergies when making your reservation." },
  { q: "Do you have vegan options?", a: "Absolutely. We offer a dedicated plant-based tasting menu, and many of our à la carte items can be prepared vegan upon request." },
  { q: "Are allergens clearly listed?", a: "Yes, our Menu Dietary Guide indicates common allergens. Our staff is also fully trained to guide you through the menu safely." },
  { q: "Do you offer takeaway?", a: "To ensure the highest quality and presentation of our delicate cuisine, we currently do not offer takeaway services." },
  { q: "Can I reserve a table online?", a: "Yes, you can secure your reservation through our website up to 60 days in advance." },
  { q: "Do you serve seasonal menus?", a: "Yes, our menu evolves constantly to reflect the micro-seasons and showcase the absolute freshest ingredients available." }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-charcoal text-cream">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 md:px-12">
        
        <div className="text-center mb-10 md:mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
             <div className="w-8 h-[1px] bg-gold" />
             <h2 className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold">Information</h2>
             <div className="w-8 h-[1px] bg-gold" />
          </div>
          <h3 className="text-3xl sm:text-4xl font-serif mb-4 leading-[1.1] tracking-tight text-white">
            Dining Questions
          </h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 transition-colors hover:border-gold/30">
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-4 sm:p-6 text-left"
                >
                  <span className={cn("font-serif text-base sm:text-lg md:text-xl transition-colors flex-1 min-w-0 pr-2", isOpen ? "text-gold" : "text-white")}>
                    {faq.q}
                  </span>
                  <ChevronDown 
                    className={cn("shrink-0 text-gold transition-transform duration-300", isOpen && "rotate-180")} 
                    size={20} 
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-white/60 font-light text-sm sm:text-[15px] leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
