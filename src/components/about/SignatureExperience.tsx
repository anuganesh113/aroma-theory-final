import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

const experiences = [
  {
    title: "Seasonal Tasting Menu",
    desc: "An ever-evolving narrative of courses that reflects the immediate micro-season, meticulously designed to delight all senses.",
    img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Private Dining Exclusivity",
    desc: "For your most intimate celebrations, our secluded dining room offers a completely bespoke menu and dedicated sommelier.",
    img: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Master Sommelier Pairings",
    desc: "Discover rare vintages and biodynamic wines expertly paired to elevate every single note of your meal.",
    img: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80&w=1200"
  }
];

export function SignatureExperience() {
  return (
    <section className="py-24 md:py-32 bg-cream text-charcoal overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
             <div className="w-8 h-[1px] bg-gold" />
             <h2 className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold">The Journey</h2>
             <div className="w-8 h-[1px] bg-gold" />
          </div>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 leading-[1.1] tracking-tight">
            Signature Experiences
          </h3>
        </div>

        <div className="space-y-24 md:space-y-32">
          {experiences.map((exp, i) => {
            const isEven = i % 2 === 0;
            return (
              <div key={i} className={cn("flex flex-col gap-12 lg:gap-24 items-center", isEven ? "lg:flex-row" : "lg:flex-row-reverse")}>
                
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="w-full lg:w-1/2"
                >
                  <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden group">
                    <img src={exp.img} alt={exp.title} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" />
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="w-full lg:w-1/2 flex flex-col justify-center"
                >
                  <h4 className="text-3xl md:text-4xl font-serif mb-6">{exp.title}</h4>
                  <p className="text-charcoal/60 font-light text-[15px] leading-relaxed mb-8 max-w-lg">
                    {exp.desc}
                  </p>
                  <a href="#reservations" className="text-[10px] uppercase tracking-[0.2em] font-semibold text-gold hover:text-charcoal transition-colors flex items-center gap-2 group w-fit">
                    Discover More 
                    <span className="block h-[1px] w-8 bg-gold group-hover:bg-charcoal group-hover:w-12 transition-all duration-300" />
                  </a>
                </motion.div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
