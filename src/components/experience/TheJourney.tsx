import { motion } from 'framer-motion';
import { Clock, GlassWater, Utensils, Coffee } from 'lucide-react';
import { cn } from '../../utils/cn';

const steps = [
  {
    icon: <GlassWater className="w-6 h-6" />,
    title: "The Prelude",
    description: "Your evening begins in our lounge with a curated selection of aperitifs and delicate amuse-bouches, setting the stage for the culinary performance.",
    time: "Welcome"
  },
  {
    icon: <Utensils className="w-6 h-6" />,
    title: "The Main Act",
    description: "A meticulously orchestrated tasting menu unfolds, where each dish tells a story of seasonal ingredients and innovative techniques.",
    time: "The Feast"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "The Pause",
    description: "A moment of reflection accompanied by a refreshing palate cleanser, preparing you for the final crescendo.",
    time: "Intermezzo"
  },
  {
    icon: <Coffee className="w-6 h-6" />,
    title: "The Encore",
    description: "Decadent handcrafted desserts, artisan chocolates, and digestifs offer a sweet conclusion to your journey.",
    time: "Finale"
  }
];

export function TheJourney() {
  return (
    <section className="py-24 md:py-32 bg-cream text-charcoal">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-eyebrow font-sans uppercase text-gold mb-4">The Timeline</h2>
          <h3 className="text-4xl md:text-5xl font-serif">An Evening at Aroma</h3>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-12 md:left-1/2 top-0 bottom-0 w-px bg-gold/30 -translate-x-1/2 hidden md:block" />
          
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className={cn(
                    "relative flex flex-col md:flex-row items-start md:items-center gap-8",
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  )}
                >
                  {/* Content */}
                  <div className={cn(
                    "flex-1 md:w-1/2",
                    isEven ? "md:text-right md:pr-16" : "md:text-left md:pl-16"
                  )}>
                    <div className="inline-block px-4 py-1 border border-gold/50 rounded-full text-xs uppercase tracking-widest text-gold mb-4">
                      {step.time}
                    </div>
                    <h4 className="text-2xl md:text-3xl font-serif mb-4">{step.title}</h4>
                    <p className="text-charcoal/70 font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Center Node */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-cream border-2 border-gold items-center justify-center text-gold z-10 shadow-xl shadow-gold/10">
                    {step.icon}
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block flex-1 md:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
