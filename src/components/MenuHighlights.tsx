import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { menuItems } from '../data/mockData';
import { cn } from '../utils/cn';

const categories = ['Starters', 'Mains', 'Desserts', 'Tasting Menu'];

const romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI'];

export function MenuHighlights() {
  const [activeCategory, setActiveCategory] = useState<string>('Starters');
  const [hoveredItemId, setHoveredItemId] = useState<string | null>(null);
  
  const filteredItems = menuItems.filter(item => item.category === activeCategory);
  // Default to first item for the image reveal
  const activeItem = filteredItems.find(item => item.id === hoveredItemId) || filteredItems[0];

  return (
    <section id="menu" className="py-32 md:py-48 bg-charcoal text-cream relative overflow-hidden">
      
      {/* Subtle background noise/texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" 
           style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }} />

      <div className="max-w-[1500px] mx-auto px-6 md:px-16 relative z-10">
        
        {/* Header & Tabs */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-32 gap-16 lg:gap-8 border-b border-white/10 pb-16">
          <div className="relative">
             <div className="flex items-center gap-6 mb-8">
                <div className="w-16 h-[1px] bg-gold" />
                <h2 className="text-xs uppercase tracking-[0.4em] text-gold font-semibold">The Menu</h2>
             </div>
             <h3 className="text-6xl md:text-7xl lg:text-[90px] font-serif text-cream leading-[0.9] tracking-tighter">
                Culinary<br/>
                <span className="italic text-white/50">Curations</span>
             </h3>
          </div>
          
          <div className="flex flex-wrap gap-8 md:gap-12 pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "text-[11px] uppercase tracking-[0.25em] font-semibold transition-all duration-500 relative py-2",
                  activeCategory === category 
                    ? "text-gold" 
                    : "text-cream/40 hover:text-cream/80"
                )}
              >
                {category}
                {activeCategory === category && (
                  <motion.div 
                    layoutId="menu-gold-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-gold"
                    transition={{ type: "spring", stiffness: 200, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Content: Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start relative min-h-[700px]">
          
          {/* Left: Dramatic Typographic List */}
          <div className="lg:col-span-7 flex flex-col w-full z-20">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeCategory}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-4"
              >
                {filteredItems.map((item, index) => (
                  <div
                    key={item.id}
                    onMouseEnter={() => setHoveredItemId(item.id)}
                    className="group py-8 md:py-10 border-b border-white/5 cursor-pointer relative"
                  >
                    {/* Hover Line Expansion */}
                    <div className="absolute bottom-[-1px] left-0 h-[1px] w-0 bg-gold group-hover:w-full transition-all duration-700 ease-[0.16,1,0.3,1]" />

                    <div className="flex justify-between items-start gap-8 relative z-10">
                      <div className="flex gap-8 lg:gap-12">
                        {/* Roman Numeral */}
                        <span className="font-serif text-lg md:text-xl text-gold/50 group-hover:text-gold transition-colors duration-500 pt-2">
                          {romanNumerals[index]}
                        </span>
                        
                        <div className="flex-1 transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:translate-x-4">
                          <h4 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4 text-cream group-hover:text-gold transition-colors duration-500 tracking-tight">
                            {item.name}
                          </h4>
                          <p className="text-cream/40 font-light text-[11px] md:text-xs uppercase tracking-[0.2em] leading-[1.8] transition-colors duration-500 group-hover:text-cream/70 max-w-md">
                            {item.description}
                          </p>
                        </div>
                      </div>
                      
                      {/* Price */}
                      <div className="font-serif text-2xl md:text-3xl text-cream/30 group-hover:text-gold transition-colors duration-500 pt-1 shrink-0">
                        {item.price}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-20 flex items-center gap-6 group cursor-pointer w-max"
            >
              <div className="w-12 h-[1px] bg-white/20 group-hover:w-20 transition-all duration-500" />
              <Link 
                to="/menu"
                className="text-[11px] uppercase tracking-[0.2em] font-medium text-cream/70 group-hover:text-gold transition-colors duration-500"
              >
                Explore Full Menu
              </Link>
            </motion.div>
          </div>

          {/* Right: Arched Image Reveal */}
          <div className="hidden lg:flex lg:col-span-5 sticky top-32 h-[700px] w-full items-center justify-center pointer-events-none">
             
             {/* The Arch Frame */}
             <div className="relative w-[85%] h-[90%] rounded-t-full rounded-b-[40px] overflow-hidden border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.6)]">
               <AnimatePresence mode="wait">
                 {activeItem && (
                   <motion.div
                     key={activeItem.id}
                     initial={{ opacity: 0, filter: 'blur(10px)', scale: 1.1 }}
                     animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
                     exit={{ opacity: 0, filter: 'blur(10px)', scale: 1.05 }}
                     transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                     className="absolute inset-0 w-full h-full"
                   >
                     <img 
                       src={activeItem.image} 
                       alt={activeItem.name} 
                       className="w-full h-full object-cover transition-transform duration-[15s] hover:scale-125"
                     />
                     {/* Vignette/Mood Overlay */}
                     <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent mix-blend-overlay" />
                     <div className="absolute inset-0 bg-gold/5 mix-blend-color" />
                   </motion.div>
                 )}
               </AnimatePresence>
             </div>
             
             {/* Decorative Elements Around Arch */}
             <div className="absolute top-1/2 -right-4 -translate-y-1/2 rotate-90 text-[10px] uppercase tracking-[0.5em] text-cream/30 font-medium">
               Aroma Theory
             </div>
             
          </div>

        </div>

      </div>
    </section>
  );
}
