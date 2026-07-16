import { useState } from 'react';
import { motion } from 'framer-motion';
import { UtensilsCrossed, Wine, Users, ArrowRight } from 'lucide-react';
import { cn } from '../utils/cn';

const experiences = [
  {
    id: 'tasting',
    icon: <UtensilsCrossed size={20} strokeWidth={1.5} />,
    title: 'Tasting Menu',
    subtitle: 'The Chef\'s Narrative',
    description: 'An immersive eight-course journey traversing the intricate landscape of modern gastronomy. Designed to be experienced, not just eaten.',
    image: 'https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?auto=format&fit=crop&q=80&w=1200&h=1600'
  },
  {
    id: 'private',
    icon: <Users size={20} strokeWidth={1.5} />,
    title: 'Private Dining',
    subtitle: 'Intimate Exclusivity',
    description: 'An exclusive alcove for up to 12 guests, featuring a dedicated chef and a completely customized menu tailored to your exact palate.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200&h=1600'
  },
  {
    id: 'wine',
    icon: <Wine size={20} strokeWidth={1.5} />,
    title: 'Wine Pairing',
    subtitle: 'Curated Vintages',
    description: 'Guided by our head sommelier, focusing on rare, biodynamic, and aged vintages carefully selected to elevate each individual course.',
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80&w=1200&h=1600'
  }
];

export function Experience() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="experience" className="bg-cream text-charcoal py-32 md:py-48 overflow-hidden">
      
      <div className="max-w-[1500px] mx-auto px-6 md:px-16 mb-20 text-center flex flex-col items-center">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-px bg-gold" />
          <h2 className="text-eyebrow font-sans uppercase text-gold">Our Experiences</h2>
          <div className="w-12 h-px bg-gold" />
        </div>
        <h3 className="text-display-section font-serif leading-[1.1] tracking-tight">
          Beyond the Plate
        </h3>
      </div>

      <div className="max-w-[1500px] mx-auto px-6 md:px-16">
        {/* Desktop: Interactive Accordion | Mobile: Stacked Cards */}
        <div className="flex flex-col lg:flex-row gap-4 h-[auto] lg:h-[700px] w-full">
          {experiences.map((exp) => {
            const isHovered = hoveredId === exp.id;
            const isAnyHovered = hoveredId !== null;
            
            return (
              <motion.div
                key={exp.id}
                onMouseEnter={() => setHoveredId(exp.id)}
                onMouseLeave={() => setHoveredId(null)}
                layout
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  "relative h-[450px] lg:h-full rounded-3xl overflow-hidden cursor-pointer flex-shrink-0 group",
                  // Width logic for desktop accordion
                  isHovered ? "lg:flex-[2.5]" : isAnyHovered ? "lg:flex-[0.8]" : "lg:flex-1",
                  "w-full lg:w-auto" // Full width on mobile
                )}
              >
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full">
                  <img 
                    src={exp.image} 
                    alt={exp.title}
                    className="w-full h-full object-cover transition-transform duration-[15s] group-hover:scale-110"
                  />
                  {/* Dynamic Dark Overlay */}
                  <div className={cn(
                    "absolute inset-0 transition-colors duration-700",
                    isHovered ? "bg-charcoal/40" : "bg-charcoal/60"
                  )} />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end text-cream z-10 transition-all duration-700">
                  
                  {/* Icon & Title */}
                  <div className="flex items-center gap-6 mb-4">
                    <div className="w-12 h-12 rounded-full border border-cream/30 flex items-center justify-center text-gold backdrop-blur-sm shrink-0">
                      {exp.icon}
                    </div>
                    {/* Only show full title vertically on unhovered state? No, keep it clean. */}
                    <h4 className={cn(
                      "font-serif text-display-card whitespace-nowrap transition-all duration-500",
                      (!isHovered && isAnyHovered) ? "lg:opacity-0 lg:-translate-x-4" : "opacity-100 translate-x-0"
                    )}>
                      {exp.title}
                    </h4>
                  </div>

                  {/* Expandable Text (Hidden on desktop unless hovered, always visible on mobile/default) */}
                  <div className={cn(
                    "overflow-hidden transition-all duration-700 ease-[0.16,1,0.3,1]",
                    (isHovered || !isAnyHovered) ? "max-h-[200px] opacity-100 mt-2" : "lg:max-h-0 lg:opacity-0 lg:mt-0"
                  )}>
                    <p className="text-gold text-[10px] uppercase tracking-[0.2em] font-semibold mb-3">
                      {exp.subtitle}
                    </p>
                    <p className="text-cream/80 font-light text-sm leading-relaxed max-w-sm mb-6">
                      {exp.description}
                    </p>
                    
                    <div className="flex items-center gap-4 group/btn">
                      <span className="text-[10px] uppercase tracking-widest font-semibold text-cream group-hover/btn:text-gold transition-colors">
                        Discover More
                      </span>
                      <ArrowRight size={16} className="text-gold transition-transform group-hover/btn:translate-x-2" />
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
